import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header02 from '../header02';
import Footer from '../footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  bookInsurance,
  getInsurancePolicy,
  updateInsuranceBookingStatus
} from '../../store/Actions/insuranceAction';
import { getEasebuzzTransactionDetails } from '../../store/Actions/easebuzzPaymentActions';
import { selectUserProfile } from '../../store/Selectors/userSelector';
import { getUserProfile } from '../../store/Actions/userActions';

/**
 * Insurance Payment Success Page
 * Handles payment success callback from Easebuzz
 */
const Insurance_Payment_Success = () => {
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

  // Handle payment success - book insurance and generate policy
  const handlePaymentSuccess = async () => {
    try {
      console.log('🚀 Starting payment success processing...');
      
      // Retrieve booking data from localStorage
      const storedData = localStorage.getItem('insurance_booking_data');
      if (!storedData) {
        console.error('❌ No booking data found in localStorage');
        throw new Error('Booking data not found. Please start over.');
      }

      console.log('✅ Booking data found in localStorage');
      const bookingData = JSON.parse(storedData);
      console.log('📦 Parsed booking data:', {
        hasSelectedPlan: !!bookingData.selectedPlan,
        hasPassengerDetails: !!bookingData.passengerDetails,
        hasAuthData: !!bookingData.authData
      });

      const {
        selectedPlan,
        searchCriteria,
        passengerDetails,
        priceDetails,
        authData,
        traceId
      } = bookingData;

      // Validate required data
      if (!authData?.TokenId || !selectedPlan || !passengerDetails || passengerDetails.length === 0) {
        throw new Error('Invalid booking data. Please start over.');
      }

      // 1. Book insurance after payment success
      const bookingPayload = {
        TokenId: authData.TokenId,
        EndUserIp: authData.EndUserIp || '127.0.0.1',
        TraceId: traceId || '',
        ResultIndex: selectedPlan?.ResultIndex || 1,
        Passenger: passengerDetails
      };

      console.log('Booking insurance with payload:', bookingPayload);
      const bookingResult = await dispatch(bookInsurance(bookingPayload));

      if (!bookingResult || !bookingResult.Response) {
        throw new Error('Invalid response from insurance booking API');
      }

      if (bookingResult.Response.ResponseStatus !== 1) {
        const errorCode = bookingResult.Response.Error?.ErrorCode;
        const errorMessage = bookingResult.Response.Error?.ErrorMessage || 'Booking failed';
        
        // Check for trace ID expiration
        if (errorCode === 1001 || errorMessage.toLowerCase().includes('trace') || 
            errorMessage.toLowerCase().includes('expire') || errorMessage.toLowerCase().includes('invalid trace')) {
          throw new Error('Payment successful but booking failed. Your search session has expired. Please contact support.');
        }
        
        throw new Error(`Payment successful but booking failed: ${errorMessage} (Code: ${errorCode}). Please contact support.`);
      }

      // 2. Generate policy after successful booking
      const bookingId = bookingResult.Response?.Itinerary?.BookingId;
      if (!bookingId) {
        throw new Error('Booking ID not found in response');
      }

      const policyPayload = {
        EndUserIp: authData.EndUserIp || "127.0.0.1",
        TokenId: authData.TokenId || "",
        BookingId: bookingId,
      };

      console.log('Generating policy with payload:', policyPayload);
      const policyResponse = await dispatch(getInsurancePolicy(policyPayload));

      if (!policyResponse || !policyResponse.Response || policyResponse.Response.ResponseStatus !== 1) {
        const errorMessage = policyResponse?.Response?.Error?.ErrorMessage || 'Policy generation failed';
        throw new Error(`Payment and booking successful but policy generation failed: ${errorMessage}. Please contact support.`);
      }

      // 3. Get transaction details from Easebuzz to verify payment and get payment details
      let easebuzzPaymentId = null;
      let paymentStatus = 'Paid';
      let paymentMethod = 'Easebuzz';
      let bankRefNum = null;

      try {
        console.log('Fetching transaction details for txnid:', txnid);
        const transactionResponse = await dispatch(getEasebuzzTransactionDetails({ txnid }));
        
        console.log('Transaction response:', transactionResponse);
        
        if (transactionResponse && transactionResponse.status === true && 
            transactionResponse.msg && Array.isArray(transactionResponse.msg) && transactionResponse.msg.length > 0) {
          const transactionData = transactionResponse.msg[0];
          
          console.log('Transaction data:', transactionData);
          
          // Extract easepayid
          easebuzzPaymentId = transactionData.easepayid || null;
          console.log('✅ Extracted easepayid:', easebuzzPaymentId);
          
          // Extract bank reference number
          bankRefNum = transactionData.bank_ref_num || null;
          
          // Determine payment status from transaction data
          if (transactionData.status) {
            const apiStatus = transactionData.status.toLowerCase().trim();
            if (apiStatus === 'success') {
              paymentStatus = 'Paid';
            } else if (apiStatus === 'failure' || apiStatus === 'failed' || apiStatus === 'cancelled') {
              paymentStatus = 'Failed';
            }
          }
          
          // Also check error message for success confirmation
          if (transactionData.error_Message && 
              transactionData.error_Message.toLowerCase().includes('successful')) {
            paymentStatus = 'Paid';
          }
          
          // Extract payment method (priority: bank_name > payment_source > card_type)
          if (transactionData.bank_name && transactionData.bank_name !== 'NA' && transactionData.bank_name.trim() !== '') {
            paymentMethod = transactionData.bank_name;
          } else if (transactionData.payment_source && transactionData.payment_source !== 'NA' && transactionData.payment_source.trim() !== '') {
            paymentMethod = transactionData.payment_source;
          } else if (transactionData.card_type && transactionData.card_type !== 'NA' && transactionData.card_type.trim() !== '') {
            paymentMethod = transactionData.card_type;
          }
          
          console.log('✅ Payment details extracted:', {
            easebuzzPaymentId,
            paymentStatus,
            paymentMethod,
            bankRefNum
          });
        } else {
          console.warn('⚠️ Invalid transaction response structure:', transactionResponse);
        }
      } catch (transactionError) {
        console.error('❌ Error fetching transaction details:', transactionError);
        // Continue even if transaction details fetch fails - payment was already successful
      }

      // 4. Update booking status with payment and policy details
      const policyNumber = policyResponse.Response?.Itinerary?.PassengerInfo?.[0]?.PolicyNo || 
                         policyResponse.Response?.Itinerary?.PolicyNo || 
                         `POL${Date.now()}`;

      const statusUpdateData = {
        booking_status: 'Confirmed',
        payment_status: paymentStatus,
        policy_number: policyNumber,
        transaction_id: txnid,
        payment_method: paymentMethod,
        easebuzz_payment_id: easebuzzPaymentId,
        bank_ref_num: bankRefNum,
        total_premium: priceDetails.total || 0,
        base_premium: priceDetails.base || priceDetails.total || 0
      };

      try {
        await dispatch(updateInsuranceBookingStatus(bookingId, statusUpdateData));
        console.log('✅ Booking status updated successfully');
      } catch (updateError) {
        console.error('Error updating booking status:', updateError);
        // Don't fail the flow, just log the error
      }

      // 5. Clear stored booking data
      localStorage.removeItem('insurance_booking_data');

      // 6. Navigate to generate policy page
      setProcessing(false);
      toast.success('Payment successful! Policy generated.');
      setTimeout(() => {
        navigate('/insurance-generate-policy', {
          state: {
            bookingResponse: bookingResult,
            passengers: passengerDetails,
            priceDetails: priceDetails,
            policyResponse: policyResponse,
            paymentResponse: {
              txnid,
              easebuzz_payment_id: easebuzzPaymentId,
              payment_method: paymentMethod,
              bank_ref_num: bankRefNum,
              payment_status: paymentStatus
            },
            bookingId: bookingId
          },
          replace: true
        });
      }, 1000);

    } catch (error) {
      console.error("Payment processing error:", error);
      setError(error.message || "Failed to process payment");
      setProcessing(false);
      toast.error(error.message || "Failed to process payment");
      
      // Clear stored data on error
      localStorage.removeItem('insurance_booking_data');
      
      setTimeout(() => {
        navigate('/insurance-payment-failure', {
          state: { txnid, error: error.message },
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
                      onClick={() => navigate('/home-insurance')}
                    >
                      Go to Insurance Home
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
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
                  <p className="text-muted">Please wait while we confirm your booking and generate your policy...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Insurance_Payment_Success;

