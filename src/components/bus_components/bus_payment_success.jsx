import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  fetchBusBooking,
  fetchBusBookingDetails,
  createBusBooking,
  updateBusBookingStatus,
  fetchBusSeatLayout
} from '../../store/Actions/busActions';
import { getEncryptedItem, setEncryptedItem } from '../../utils/encryption';

/**
 * Bus Payment Success Page
 * Handles payment success callback from Easebuzz
 * Similar to Razorpay handler pattern but adapted for redirect-based flow
 */
const BusPaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [processing, setProcessing] = useState(true);
  const [error, setError] = useState(null);
  const isProcessingRef = useRef(false); // Prevent duplicate processing

  const txnid = searchParams.get('txnid');

  useEffect(() => {
    if (!txnid) {
      setError('Transaction ID not found');
      setProcessing(false);
      return;
    }

    // Prevent multiple calls
    if (!isProcessingRef.current) {
      isProcessingRef.current = true;
      handlePaymentSuccess();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txnid]);

  // Helper: Prepare booking request
  const getBookingRequest = () => {
    return getEncryptedItem("blockRequestData") || {};
  };

  // Helper: Prepare booking details request
  const getBookingDetailsRequest = (busId) => {
    const authData = getEncryptedItem("busAuthData") || {};
    const searchList = getEncryptedItem("busSearchList") || {};
    const blockRequestData = getEncryptedItem("blockRequestData") || {};

    const TokenId = authData.TokenId || blockRequestData.TokenId;
    const EndUserIp = authData.EndUserIp || blockRequestData.EndUserIp;
    const TraceId = searchList?.BusSearchResult?.TraceId || blockRequestData.TraceId;

    return {
      EndUserIp,
      TraceId,
      TokenId,
      BusId: busId,
      IsBaseCurrencyRequired: false
    };
  };

  // Helper: Prepare booking data
  const prepareBookingData = (bookingResult, bookingId) => {
    const blockData = getEncryptedItem("blockResponse")?.BlockResult || getEncryptedItem("blockResponse") || {};
    const busData = getEncryptedItem("selectedBusData") || {};
    const formData = getEncryptedItem("easebuzzPaymentData")?.formData || {};
    const fareDetails = getEncryptedItem("easebuzzPaymentData")?.fareDetails || {};

    return {
      blockData,
      busData,
      formData,
      fareDetails,
      bookingResult,
      bookingId,
      selectedBoardingPoint: getEncryptedItem("selectedBoardingPoint") || "",
      selectedDroppingPoint: getEncryptedItem("selectedDroppingPoint") || "",
      fromCity: (getEncryptedItem("busSearchparams") || {}).fromCityName || "",
      toCity: (getEncryptedItem("busSearchparams") || {}).toCityName || ""
    };
  };

  // Save booking to database
  const saveBookingToDatabase = async () => {
    try {
      const blockData = getEncryptedItem("blockResponse")?.BlockResult || getEncryptedItem("blockResponse") || {};
      const busData = getEncryptedItem("selectedBusData") || {};
      const formData = getEncryptedItem("easebuzzPaymentData")?.formData || {};
      const fareDetails = getEncryptedItem("easebuzzPaymentData")?.fareDetails || {};

      const bookingData = {
        user_id: 1,
        busData,
        blockData,
        contactDetails: formData.contactDetails || {},
        addressDetails: formData.addressDetails || {},
        travelerDetails: formData.travelerDetails || {},
        fareDetails,
        token_id: (getEncryptedItem("busAuthData") || {}).TokenId,
        payment_status: 'Completed',
        payment_transaction_id: txnid
      };

      const result = await dispatch(createBusBooking(bookingData));

      if (result && result.success) {
        setEncryptedItem('currentBookingId', result.booking_id);
        return result.booking_id;
      } else {
        throw new Error('Failed to save booking to database');
      }
    } catch (error) {
      console.error('Error saving booking to database:', error);
      throw error;
    }
  };

  // Update booking status (with duplicate prevention)
  const updateBookingStatus = async (bookResult) => {
    try {
      const bookingId = getEncryptedItem('currentBookingId');
      if (!bookingId) {
        console.log('No booking ID found, skipping status update');
        return;
      }

      // Check if status was already updated for this transaction
      const statusUpdateKey = `booking_status_updated_${txnid}`;
      const alreadyUpdated = getEncryptedItem(statusUpdateKey);
      
      if (alreadyUpdated) {
        console.log('Booking status already updated for this transaction, skipping');
        return;
      }

      const statusData = {
        booking_status: 'Confirmed',
        payment_status: 'Completed',
        ticket_no: bookResult.TicketNo,
        travel_operator_pnr: bookResult.TravelOperatorPNR,
        payment_transaction_id: txnid
      };

      console.log('Updating booking status:', { bookingId, statusData });
      const result = await dispatch(updateBusBookingStatus(bookingId, statusData));
      
      // Mark as updated only if successful
      if (result && result.success) {
        setEncryptedItem(statusUpdateKey, 'true');
        console.log('Booking status updated successfully');
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  // Handle payment success (similar to Razorpay handler pattern)
  const handlePaymentSuccess = async () => {
    try {
      // 1. Verify transaction ID
      const storedTxnId = getEncryptedItem('easebuzzTxnId');
      if (storedTxnId !== txnid) {
        throw new Error('Transaction ID mismatch');
      }

      // 2. Check if already processed
      const processKey = `payment_processed_${txnid}`;
      const alreadyProcessed = getEncryptedItem(processKey);
      if (alreadyProcessed) {
        console.log('Payment already processed, redirecting to confirmation');
        const existingBookingData = getEncryptedItem("busBookingData");
        setProcessing(false);
        navigate('/bus-confirmation', {
          state: { bookingData: existingBookingData || {} },
          replace: true
        });
        return;
      }

      // 3. Book the bus (similar to Razorpay pattern - process after payment)
      const bookingRequest = getBookingRequest();
      if (!bookingRequest || Object.keys(bookingRequest).length === 0) {
        throw new Error('Booking request data not found. Please start over.');
      }

      const bookingResult = await dispatch(fetchBusBooking(bookingRequest));

      if (bookingResult?.BookResult?.ResponseStatus !== 1) {
        throw new Error(bookingResult?.BookResult?.Error?.ErrorMessage || "Booking failed");
      }

      // 4. Save to database
      const bookingId = await saveBookingToDatabase();
      if (!bookingId) {
        throw new Error("Failed to save booking to database");
      }

      // 5. Update booking status (only once)
      if (bookingResult?.BookResult) {
        await updateBookingStatus(bookingResult.BookResult);
      }

      // 6. Get booking details
      const busId = bookingResult.BookResult.BusId;
      const bookingDetailsRequest = getBookingDetailsRequest(busId);
      await dispatch(fetchBusBookingDetails(bookingDetailsRequest));

      // 7. Prepare and store booking data
      const bookingData = prepareBookingData(bookingResult, bookingId);
      setEncryptedItem("bookingResult", bookingResult);
      setEncryptedItem("bookingTimestamp", Date.now().toString());
      setEncryptedItem("databaseBookingId", bookingId.toString());
      setEncryptedItem("busBookingData", bookingData);
      setEncryptedItem(processKey, 'true'); // Mark as processed

      // 8. Fetch latest seat layout
      try {
        const searchParams = getEncryptedItem("busSearchparams") || {};
        const { TokenId, EndUserIp } = searchParams;
        const currentBus = getEncryptedItem("selectedBusData") || {};

        if (TokenId && EndUserIp && currentBus.ResultIndex && searchParams.TraceId) {
          await dispatch(fetchBusSeatLayout(
            TokenId,
            EndUserIp,
            currentBus.ResultIndex,
            searchParams.TraceId
          ));
        }
      } catch (error) {
        console.error("Error fetching latest seat layout:", error);
      }

      // 9. Navigate to confirmation
      setProcessing(false);
      toast.success('Payment successful! Booking confirmed.');
      setTimeout(() => {
        navigate('/bus-confirmation', {
          state: { bookingData },
          replace: true
        });
      }, 1000);

    } catch (error) {
      console.error("Payment processing error:", error);
      
      // Check if booking was already created
      const bookingId = getEncryptedItem('currentBookingId');
      const bookingResult = getEncryptedItem('bookingResult');
      
      if (bookingId || bookingResult) {
        // Booking exists, show success with warning
        setProcessing(false);
        toast.warning('Payment successful but some processing failed: ' + (error.message || "Unknown error"));
        setTimeout(() => {
          const existingBookingData = getEncryptedItem("busBookingData");
          navigate('/bus-confirmation', {
            state: { bookingData: existingBookingData || {} },
            replace: true
          });
        }, 2000);
      } else {
        // Booking failed
        setError(error.message || "Failed to process payment");
        setProcessing(false);
        toast.error(error.message || "Failed to process payment");
        setTimeout(() => {
          navigate('/bus-payment-failure?txnid=' + txnid);
        }, 3000);
      }
    }
  };

  if (error) {
    return (
      <div>
        <ToastContainer />
        <Header02 />
        <div className="clearfix" />
        <section className="pt-4 gray-simple position-relative">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10 col-md-12">
                <div className="card border-danger">
                  <div className="card-body text-center p-5">
                    <i className="fas fa-times-circle text-danger" style={{ fontSize: '64px' }}></i>
                    <h3 className="mt-3 mb-3">Payment Processing Failed</h3>
                    <p className="text-muted">{error}</p>
                    <button 
                      className="btn btn-primary mt-3"
                      onClick={() => navigate('/bus-list')}
                    >
                      Go to Bus Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterDark />
      </div>
    );
  }

  return (
    <div>
      <ToastContainer />
      <Header02 />
      <div className="clearfix" />
      <section className="pt-4 gray-simple position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12">
              <div className="card border-success">
                <div className="card-body text-center p-5">
                  <div className="spinner-border text-success mb-3" role="status" style={{ width: '64px', height: '64px' }}>
                    <span className="visually-hidden">Processing...</span>
                  </div>
                  <h3 className="mt-3 mb-3">Processing Your Payment</h3>
                  <p className="text-muted">Please wait while we confirm your booking...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterDark />
    </div>
  );
};

export default BusPaymentSuccess;

