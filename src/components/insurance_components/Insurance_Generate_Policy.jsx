import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header02 from '../header02';
import Footer from '../footer';
import { FaCheckCircle, FaArrowLeft, FaEye } from 'react-icons/fa';

const Insurance_Generate_Policy = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get policy number from navigation state
  const policyNumber = location.state?.policyResponse?.Response?.Itinerary?.PaxInfo?.[0]?.PolicyNo ||
                      location.state?.bookingResponse?.Response?.Itinerary?.PaxInfo?.[0]?.PolicyNo;
  
  // Get booking ID for navigation
  const bookingId = location.state?.bookingResponse?.Response?.Itinerary?.BookingId ||
                   location.state?.bookingId;

  return (
    <>
      <Header02 />
      
      <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container-xl">
          {/* Success Header */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card border-success">
                <div className="card-body text-center py-5">
                  <FaCheckCircle className="text-success mb-4" size={80} />
                  <h2 className="text-success mb-3">🎉 Policy Generated Successfully!</h2>
                  <p className="text-muted mb-4 fs-5">
                    Your travel insurance policy has been generated and payment is confirmed.
                  </p>
                  
                  {/* Policy Number Display */}
                  {policyNumber && (
                    <div className="mb-4">
                      <p className="text-muted mb-2">Policy Number:</p>
                      <h4 className="text-primary fw-bold">{policyNumber}</h4>
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="d-flex gap-3 justify-content-center">
                    <button
                      className="btn btn-md btn-danger btn-lg"
                      onClick={() => navigate('/insurance-booking-details', { 
                        state: { 
                          bookingId: bookingId,
                          showSuccessMessage: true
                        }
                      })}
                    >
                      <FaEye className="me-2" />
                      View Details
                    </button>
                    <button
                      className="btn btn-md btn-outline-primary"
                      onClick={() => navigate('/home-insurance')}
                    >
                      <FaArrowLeft className="me-2" />
                      Back to Home
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Insurance_Generate_Policy;