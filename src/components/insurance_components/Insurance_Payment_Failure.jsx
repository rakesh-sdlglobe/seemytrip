import React, { useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import Header02 from '../header02';
import Footer from '../footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Insurance Payment Failure Page
 * Handles payment failure callback from Easebuzz
 */
const Insurance_Payment_Failure = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const txnid = searchParams.get('txnid');
  const errorMessage = location.state?.error;

  useEffect(() => {
    // Clear stored booking data on failure
    localStorage.removeItem('insurance_booking_data');

    if (txnid) {
      toast.error(errorMessage || 'Payment failed. Please try again.');
    } else {
      toast.error('Payment transaction not found.');
    }
  }, [txnid, errorMessage]);

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
                  <h3 className="mt-3 mb-3">Payment Failed</h3>
                  <p className="text-muted mb-4">
                    We're sorry, but your payment could not be processed.
                    {errorMessage && (
                      <span className="d-block mt-2 text-danger">
                        {errorMessage}
                      </span>
                    )}
                    {txnid && (
                      <span className="d-block mt-2">
                        Transaction ID: <strong>{txnid}</strong>
                      </span>
                    )}
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <button 
                      className="btn btn-primary"
                      onClick={() => navigate('/home-insurance')}
                    >
                      <i className="fas fa-search me-2"></i>
                      Search Insurance Again
                    </button>
                    <button 
                      className="btn btn-outline-secondary"
                      onClick={() => navigate('/my-insurance-bookings')}
                    >
                      <i className="fas fa-list me-2"></i>
                      My Insurance Bookings
                    </button>
                    <button 
                      className="btn btn-outline-primary"
                      onClick={() => navigate('/insurance-search')}
                    >
                      <i className="fas fa-home me-2"></i>
                      Back to Insurance Home
                    </button>
                  </div>
                  {txnid && (
                    <div className="mt-4 p-3 bg-light rounded">
                      <small className="text-muted">
                        <i className="fas fa-info-circle me-1"></i>
                        If money was deducted from your account, it will be refunded within 5-7 business days.
                      </small>
                    </div>
                  )}
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

export default Insurance_Payment_Failure;

