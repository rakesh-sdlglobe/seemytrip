import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  fetchBusBooking,
  fetchBusBookingDetails,
  updateBusBookingStatus,
  fetchBusSeatLayout
} from '../../store/Actions/busActions';
import { getEasebuzzTransactionDetails } from '../../store/Actions/easebuzzPaymentActions';
import { selectUserProfile } from '../../store/Selectors/userSelector';
import { getUserProfile } from '../../store/Actions/userActions';
import { getEncryptedItem } from '../../utils/encryption';
import { saveBusBookingToDatabase } from '../../utils/busBookingDatabase';

/**
 * Bus Payment Success Page
 * Handles payment success callback from Easebuzz
 */
const BusPaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [processing, setProcessing] = useState(true);
  const [error, setError] = useState(null);
  const isProcessingRef = useRef(false); // Prevent duplicate processing

  // Get user from Redux store
  const user = useSelector(selectUserProfile);
  const user_id = user?.user_id;

  const txnid = searchParams.get('txnid');

  // Load user profile on mount (handles page refresh)
  useEffect(() => {
    const loadUserProfile = async () => {
      if (!user) {
        console.log("Loading user profile from API...");
        await dispatch(getUserProfile());
      }
    };
    
    loadUserProfile();
  }, [dispatch, user]);

  useEffect(() => {
    if (!txnid) {
      setError('Transaction ID not found');
      setProcessing(false);
      return;
    }

    // Wait for user_id to be available before processing payment
    if (!user_id) {
      console.log("Waiting for user profile to load...");
      return;
    }

    // Prevent multiple calls
    if (!isProcessingRef.current) {
      isProcessingRef.current = true;
      handlePaymentSuccess();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txnid, user_id]);

  // Helper: Prepare booking request
  const getBookingRequest = () => {
    return getEncryptedItem("blockRequestData") || {};
  };

  // Helper: Prepare booking details request
  const getBookingDetailsRequest = (busId) => {
    const authData = getEncryptedItem("busAuthData") || {};
    const blockRequestData = getEncryptedItem("blockRequestData") || {};

    const TokenId = authData.TokenId || blockRequestData.TokenId;
    const EndUserIp = authData.EndUserIp || blockRequestData.EndUserIp;

    return {
      EndUserIp,
      TokenId,
      BusId: busId,
      IsBaseCurrencyRequired: false
    };
  };

  // Helper: Prepare booking data (no payment data from local storage)
  const prepareBookingData = (bookingResult, bookingId) => {
    const blockData = getEncryptedItem("blockResponse")?.BlockResult || getEncryptedItem("blockResponse") || {};
    const busData = getEncryptedItem("selectedBusData") || {};
    
    // Extract form data from blockData instead of payment storage
    const formData = {
      contactDetails: {
        phone: blockData.Passenger?.[0]?.Phoneno || '',
        email: blockData.Passenger?.[0]?.Email || '',
        firstName: blockData.Passenger?.[0]?.FirstName || ''
      },
      travelerDetails: blockData.Passenger || [],
      addressDetails: {}
    };
    
    // Extract fare details from blockData
    const fareDetails = {
      total: blockData.TotalFare || 0,
      baseFare: blockData.BaseFare || 0,
      taxes: blockData.Tax || 0
    };

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


  // Update booking status (no local storage)
  const updateBookingStatus = async (bookResult, bookingId) => {
    try {
      if (!bookingId) {
        console.log('No booking ID found, skipping status update');
        return;
      }

      // Fetch transaction details from Easebuzz to get easepayid, payment_status, and payment_method
      let easebuzzPaymentId = null;
      let paymentStatus = null;
      let paymentMethod = null;
      
      try {
        console.log('Fetching transaction details for txnid:', txnid);
        const transactionResponse = await dispatch(getEasebuzzTransactionDetails({ txnid }));
        
        // Extract data from response
        // Response structure: { status: true, msg: [{ easepayid: "...", status: "success", payment_source: "Easebuzz", card_type: "...", ... }] }
        if (transactionResponse && transactionResponse.status === true && 
            transactionResponse.msg && transactionResponse.msg.length > 0) {
          const transactionData = transactionResponse.msg[0];
          
          // Extract easepayid
          easebuzzPaymentId = transactionData.easepayid;
          console.log('✅ Extracted easepayid:', easebuzzPaymentId);
          
          // Extract payment status from API response
          // Map "success" to "Completed", "failure" to "Failed", etc.
          if (transactionData.status) {
            const apiStatus = transactionData.status.toLowerCase();
            if (apiStatus === 'success') {
              paymentStatus = 'Completed';
            } else if (apiStatus === 'failure' || apiStatus === 'failed') {
              paymentStatus = 'Failed';
            } else {
              paymentStatus = transactionData.status; // Use the actual status from API
            }
            console.log('✅ Extracted payment_status:', paymentStatus, '(from API status:', transactionData.status, ')');
          }
          
          // Extract payment method from API response
          // Priority: bank_name > payment_source > card_type
          if (transactionData.bank_name && transactionData.bank_name !== 'NA') {
            paymentMethod = transactionData.bank_name;
          } else if (transactionData.payment_source && transactionData.payment_source !== 'NA') {
            paymentMethod = transactionData.payment_source;
          } else if (transactionData.card_type && transactionData.card_type !== 'NA') {
            // If card_type is available and not "NA", use it
            paymentMethod = transactionData.card_type;
          }
          console.log('✅ Extracted payment_method:', paymentMethod);
          
        } else {
          console.warn('⚠️ Transaction details response format unexpected:', transactionResponse);
        }
      } catch (transactionError) {
        console.error('Error fetching transaction details:', transactionError);
        // Continue with status update even if transaction details fetch fails
      }

      const statusData = {
        booking_status: 'Confirmed',
        payment_status: paymentStatus,
        payment_method: paymentMethod,
        ticket_no: bookResult.TicketNo,
        travel_operator_pnr: bookResult.TravelOperatorPNR,
        payment_transaction_id: txnid,
        easebuzz_payment_id: easebuzzPaymentId
      };

      console.log('Updating booking status:', { bookingId, statusData });
      const result = await dispatch(updateBusBookingStatus(bookingId, statusData));
      
      if (result && result.success) {
        console.log('Booking status updated successfully');
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };


  // Handle payment success 
  const handlePaymentSuccess = async () => {
    try {
      // No payment data stored in local storage - process directly

      // 3. Book the bus (similar to Razorpay pattern - process after payment)
      const bookingRequest = getBookingRequest();
      if (!bookingRequest || Object.keys(bookingRequest).length === 0) {
        throw new Error('Booking request data not found. Please start over.');
      }

      const bookingResult = await dispatch(fetchBusBooking(bookingRequest));

      if (bookingResult?.BookResult?.ResponseStatus !== 1) {
        // Booking failed - redirect to booking failed page where refund will be processed
        throw new Error(bookingResult?.BookResult?.Error?.ErrorMessage || "Booking failed");
      }

      // 4. Get booking details first (GetBookingDetailResult)
      const busId = bookingResult.BookResult.BusId;
      const bookingDetailsRequest = getBookingDetailsRequest(busId);
      const busBookingDetails = await dispatch(fetchBusBookingDetails(bookingDetailsRequest));
      
      if (!busBookingDetails || !busBookingDetails.GetBookingDetailResult) {
        throw new Error("Failed to get booking details. Please try again.");
      }

      // 5. Save to database (pass busBookingDetails from GetBookingDetailResult)
      if (!user_id) {
        throw new Error("User not found. Please log in again.");
      }
      
      const bookingId = await saveBusBookingToDatabase({ 
        txnid, 
        dispatch, 
        user_id: user_id, // Pass user_id from Redux
        busBookingDetails: busBookingDetails 
      });
      if (!bookingId) {
        throw new Error("Failed to save booking to database");
      }

      // 6. Update booking status
      if (bookingResult?.BookResult) {
        await updateBookingStatus(bookingResult.BookResult, bookingId);
      }

      // 7. Prepare booking data (no local storage - pass via state only)
      const bookingData = prepareBookingData(bookingResult, bookingId);
      
      // Add API parameters needed for booking details API (from bookingRequest used earlier, not local storage)
      const requestData = getBookingRequest();
      bookingData.tokenId = requestData.TokenId;
      bookingData.endUserIp = requestData.EndUserIp;
      bookingData.traceId = requestData.TraceId;

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
      
      // Booking failed - redirect to booking failed page where refund will be processed
      setError(error.message || "Failed to process payment");
      setProcessing(false);
      toast.error(error.message || "Failed to process payment");
      setTimeout(() => {
        navigate(`/bus-booking-failed?txnid=${txnid}`, {
          state: { txnid },
          replace: true
        });
      }, 2000);
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

