import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  getEasebuzzTransactionDetails,
  initiateEasebuzzRefund 
} from '../../store/Actions/easebuzzPaymentActions';

/**
 * Bus Booking Failed Page
 * Handles booking failure after payment
 * Processes refund automatically when booking fails (no local storage used)
 */
const Bus_booking_failed = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  
  // Get txnid from URL params or location state
  const txnid = searchParams.get('txnid') || location.state?.txnid;
  
  const [processingRefund, setProcessingRefund] = useState(false);
  const [refundStatus, setRefundStatus] = useState(null);
  const refundProcessedRef = useRef(false);

  // Process refund when booking fails - Direct API call, no local storage
  const processRefund = async () => {
    try {
      if (!txnid) {
        throw new Error('Transaction ID not found');
      }

      if (refundProcessedRef.current) {
        console.log('Refund already processed, skipping');
        return { success: true, message: 'Refund already processed' };
      }

      refundProcessedRef.current = true;
      setProcessingRefund(true);
      console.log('🔄 Processing refund for transaction:', txnid);

      // Step 1: Get transaction details directly from API using txnid
      const transactionDetails = await dispatch(getEasebuzzTransactionDetails({ txnid }));
      
      if (!transactionDetails || !transactionDetails.status) {
        throw new Error('Failed to get transaction details');
      }

      // Extract easepayid and amount from response
      // Response structure: { status: true, msg: [{ easepayid: "...", amount: "..." }] }
      const transactionData = transactionDetails.msg && transactionDetails.msg[0];
      
      if (!transactionData) {
        throw new Error('Transaction data not found in response');
      }

      const easepayid = transactionData.easepayid;
      const amount = parseFloat(transactionData.amount || transactionData.net_amount_debit || 0);

      if (!easepayid) {
        throw new Error('easepayid not found in transaction details');
      }

      if (!amount || amount <= 0) {
        throw new Error('Invalid amount in transaction details');
      }

      console.log('📋 Transaction details:', { easepayid, amount });

      // Step 2: Initiate refund with full amount directly via API
      const refundData = {
        easebuzz_id: easepayid,
        refund_amount: amount
      };

      console.log('💸 Initiating refund:', refundData);
      const refundResult = await dispatch(initiateEasebuzzRefund(refundData));
      
      console.log('✅ Refund processed successfully:', refundResult);
      setProcessingRefund(false);
      return { success: true, refundResult, amount };
    } catch (error) {
      console.error('❌ Error processing refund:', error);
      setProcessingRefund(false);
      return { 
        success: false, 
        error: error.message || 'Failed to process refund' 
      };
    }
  };

  useEffect(() => {
    if (txnid) {
      toast.error('Booking failed. Processing refund...');
      
      // Process refund automatically when page loads (only once)
      if (!refundProcessedRef.current) {
        processRefund().then((result) => {
          setRefundStatus(result);
          if (result.success) {
            toast.info(`Refund of ₹${result.amount || 'amount'} has been initiated automatically.`);
          } else {
            toast.warning(`Refund initiation encountered an issue: ${result.error}`);
          }
        });
      }
    } else {
      toast.error('Booking failed. Transaction ID not found.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txnid]);

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
                  <h3 className="mt-3 mb-3">Booking Failed</h3>
                  <p className="text-muted mb-4">
                    We're sorry, but your booking could not be completed. 
                    {txnid && (
                      <span className="d-block mt-2">
                        Transaction ID: <strong>{txnid}</strong>
                      </span>
                    )}
                    {processingRefund && (
                      <span className="d-block mt-3">
                        <i className="fas fa-spinner fa-spin me-2"></i>
                        Processing refund...
                      </span>
                    )}
                    {refundStatus && refundStatus.success && !processingRefund && (
                      <span className="d-block mt-3 text-success">
                        <i className="fas fa-check-circle me-2"></i>
                        Refund of ₹{refundStatus.amount || 'amount'} has been initiated.
                      </span>
                    )}
                    {refundStatus && !refundStatus.success && !processingRefund && (
                      <span className="d-block mt-3 text-warning">
                        <i className="fas fa-exclamation-triangle me-2"></i>
                        Refund initiation issue: {refundStatus.error}
                      </span>
                    )}
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <button 
                      className="btn btn-primary"
                      onClick={() => navigate('/bus-list')}
                    >
                      <i className="fas fa-search me-2"></i>
                      Search Again
                    </button>
                    <button 
                      className="btn btn-outline-secondary"
                      onClick={() => navigate('/my-booking')}
                    >
                      <i className="fas fa-list me-2"></i>
                      My Bookings
                    </button>
                    <button 
                      className="btn btn-outline-primary"
                      onClick={() => navigate('/home-bus')}
                    >
                      <i className="fas fa-home me-2"></i>
                      Back to Home
                    </button>
                  </div>
                  {txnid && refundStatus && refundStatus.success && (
                    <div className="mt-4 p-3 bg-success bg-opacity-10 rounded border border-success">
                      <small className="text-success">
                        <i className="fas fa-check-circle me-1"></i>
                        Your refund has been initiated. The amount will be credited to your account within 5-7 business days.
                      </small>
                    </div>
                  )}
                  {txnid && (!refundStatus || !refundStatus.success) && (
                    <div className="mt-4 p-3 bg-light rounded">
                      <small className="text-muted">
                        <i className="fas fa-info-circle me-1"></i>
                        If money was deducted from your account, please contact support for refund assistance.
                      </small>
                    </div>
                  )}
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

export default Bus_booking_failed;