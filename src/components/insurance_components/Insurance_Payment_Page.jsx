import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Header02 from '../header02';
import Footer from '../footer';
import { 
  initiateEasebuzzPayment, 
  clearEasebuzzPaymentState 
} from '../../store/Actions/easebuzzPaymentActions';
import { 
  selectInitiatePaymentLoading, 
  selectInitiatePaymentError 
} from '../../store/Selectors/easebuzzPaymentSelectors';
import { API_URL } from '../../store/Actions/authActions';
import { 
  FaCreditCard,
  FaExclamationTriangle,
  FaArrowLeft
} from 'react-icons/fa';

/**
 * Insurance Payment Page Component
 * 
 * This component handles the review and payment flow for insurance booking.
 * It receives data from the booking page and processes payment and booking.
 */
const Insurance_Payment_Page = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  
  // Redux state
  const paymentLoading = useSelector(selectInitiatePaymentLoading);
  const paymentError = useSelector(selectInitiatePaymentError);
  
  // Local state management
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState({});
  const [passengerDetails, setPassengerDetails] = useState([]);
  const [priceDetails, setPriceDetails] = useState({});
  const [authData, setAuthData] = useState({});
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load data from navigation state
  useEffect(() => {
    if (location.state && location.state.selectedPlan) {
      setSelectedPlan(location.state.selectedPlan);
      setSearchCriteria(location.state.searchCriteria || {});
      setPassengerDetails(location.state.passengerDetails || []);
      setPriceDetails(location.state.priceDetails || {});
      setAuthData(location.state.authData || {});
      setIsLoading(false);
    } else {
      setError('No booking data found. Please complete the booking form first.');
      setIsLoading(false);
    }
  }, [location.state]);

  // Cleanup effect to reset loading states when component unmounts
  useEffect(() => {
    return () => {
      setIsProcessingPayment(false);
      dispatch(clearEasebuzzPaymentState());
    };
  }, [dispatch]);

  // Generate unique transaction ID
  const generateTransactionId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `INS_${timestamp}_${random}`;
  };

  // Handle payment first, then booking
  const handleBookAndPay = async () => {
    try {
      // Show spinner immediately when button is clicked
      setIsProcessingPayment(true);
      
      if (!authData.TokenId) {
        alert('Authentication required. Please search for insurance plans again.');
        navigate('/home-insurance');
        setIsProcessingPayment(false);
        return;
      }

      // First initiate payment - booking will happen after payment success
      await initiatePayment();
    } catch (error) {
      alert('Failed to initiate payment. Please try again.');
      setIsProcessingPayment(false);
    }
  };

  // Initiate Easebuzz payment - redirects to payment page
  const initiatePayment = async () => {
    try {
      // Clear any previous payment errors
      dispatch(clearEasebuzzPaymentState());

      // Calculate total amount from price details
      const totalAmount = priceDetails.total || 0;
      
      if (!totalAmount || totalAmount <= 0) {
        alert('Invalid payment amount');
        setIsProcessingPayment(false);
        return;
      }

      // Get passenger details for payment
      const leadPassenger = passengerDetails.find(p => p.RelationShipToInsured === 'Self') || passengerDetails[0];
      
      if (!leadPassenger) {
        alert('No passenger details found for payment');
        setIsProcessingPayment(false);
        return;
      }

      // Validate required fields
      if (!leadPassenger.EmailId || !leadPassenger.PhoneNumber) {
        alert('Please provide valid email and phone number for payment');
        setIsProcessingPayment(false);
        return;
      }

      // Generate transaction ID
      const txnid = generateTransactionId();

      // Prepare product info
      const planName = selectedPlan?.PlanName || 'Insurance Policy';
      const productinfo = `Insurance ${planName.substring(0, 80)}`.trim();

      // Prepare callback URLs
      const backendUrl = API_URL.replace('/api', '');
      const surl = `${backendUrl}/api/easebuzzPayment/payment_callback?txnid=${txnid}&status=success&type=insurance`;
      const furl = `${backendUrl}/api/easebuzzPayment/payment_callback?txnid=${txnid}&status=failure&type=insurance`;

      // Store booking data in localStorage before redirect (for success page)
      const bookingDataToStore = {
        selectedPlan,
        searchCriteria,
        passengerDetails,
        priceDetails,
        authData,
        traceId: location.state?.traceId || '',
        txnid,
        timestamp: Date.now()
      };
      localStorage.setItem('insurance_booking_data', JSON.stringify(bookingDataToStore));

      // Call Redux action to initiate payment
      const response = await dispatch(initiateEasebuzzPayment({
        txnid,
        amount: parseFloat(totalAmount).toFixed(2),
        productinfo,
        firstname: `${leadPassenger.FirstName} ${leadPassenger.LastName}`.trim() || 'Customer',
        phone: leadPassenger.PhoneNumber,
        email: leadPassenger.EmailId,
        surl,
        furl
      }));

      if (response && response.success) {
        // Backend returns the paymentUrl directly
        const paymentUrl = response.paymentUrl;
        
        if (paymentUrl) {
          // Redirect to Easebuzz payment page
          window.location.href = paymentUrl;
        } else {
          alert('Payment link not received. Please try again.');
          setIsProcessingPayment(false);
        }
      } else {
        setIsProcessingPayment(false);
      }
    } catch (error) {
      console.error('Payment initiation error:', error);
      alert(error.message || 'Failed to initiate payment. Please try again.');
      setIsProcessingPayment(false);
    }
  };


  const handleGoHome = () => {
    navigate('/insurance-search');
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5>Loading payment details...</h5>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <>
        <Header02 />
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card border-danger">
                <div className="card-body text-center p-5">
                  <FaExclamationTriangle className="text-danger mb-3" size={60} />
                  <h2 className="text-danger mb-3">Error Loading Payment Details</h2>
                  <p className="text-muted mb-4">{error}</p>
                  <div className="d-flex gap-3 justify-content-center">
                    <button 
                      className="btn btn-primary"
                      onClick={() => navigate('/insurance-booking')}
                    >
                      Back to Booking
                    </button>
                    <button 
                      className="btn btn-outline-primary"
                      onClick={handleGoHome}
                    >
                      Go to Insurance Home
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header02 />
      
      <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container-xl">
          {/* Payment Header */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card border-primary">
                <div className="card-body text-center py-4">
                  <FaCreditCard className="text-primary mb-3" size={48} />
                  <h3 className="text-primary mb-2">Insurance Payment Page</h3>
                  <p className="text-muted mb-0">
                    Review your details and complete your insurance payment to secure your policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Left Column - Review Details */}
            <div className="col-md-8">
              {/* Insurance Plan Overview */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h3 className="mb-1 fw-bold text-dark">
                        {selectedPlan?.PlanName || 'Insurance Plan'}
                      </h3>
                      <p className="mb-2 text-warning fw-bold">
                        {searchCriteria.planCoverage === 4 ? 'India' : 
                         searchCriteria.planCoverage === 1 ? 'US' :
                         searchCriteria.planCoverage === 2 ? 'Non-US' :
                         searchCriteria.planCoverage === 3 ? 'WorldWide' :
                         searchCriteria.planCoverage === 5 ? 'Asia' :
                         searchCriteria.planCoverage === 6 ? 'Canada' :
                         searchCriteria.planCoverage === 7 ? 'Australia' :
                         searchCriteria.planCoverage === 8 ? 'Schenegen Countries' : 'Coverage'}
                      </p>
                      <button 
                        className="btn btn-link p-0 text-decoration-underline"
                        onClick={() => navigate('/insurance-booking', {
                          state: {
                            selectedPlan: selectedPlan,
                            searchCriteria: searchCriteria,
                            passengerDetails: passengerDetails,
                            priceDetails: priceDetails,
                            authData: authData,
                            traceId: location.state?.traceId || '',
                            termsAccepted: true, // Terms were already accepted
                            isEditing: true // Flag to indicate we're coming back to edit
                          }
                        })}
                      >
                        Change Passenger Details
                      </button>
                    </div>
                    <div className="col-md-6">
                      <div className="text-end">
                        <div className="mb-1">
                          <span className="text-muted">Start Date: </span>
                          <span className="fw-bold">
                            {searchCriteria.departDate ? 
                              new Date(searchCriteria.departDate).toLocaleDateString('en-GB', { 
                                day: '2-digit', 
                                month: 'short', 
                                year: 'numeric' 
                              }) : 'N/A'}
                          </span>
                        </div>
                        <div className="mb-1">
                          <span className="text-muted">End Date: </span>
                          <span className="fw-bold">
                            {(() => {
                              // If returnDate exists, use it; otherwise calculate it from departDate and duration
                              if (searchCriteria.returnDate) {
                                return new Date(searchCriteria.returnDate).toLocaleDateString('en-GB', { 
                                  day: '2-digit', 
                                  month: 'short', 
                                  year: 'numeric' 
                                });
                              } else if (searchCriteria.departDate && searchCriteria.duration) {
                                const endDate = new Date(searchCriteria.departDate);
                                endDate.setDate(endDate.getDate() + (searchCriteria.duration - 1));
                                return endDate.toLocaleDateString('en-GB', { 
                                  day: '2-digit', 
                                  month: 'short', 
                                  year: 'numeric' 
                                });
                              }
                              return 'N/A';
                            })()}
                          </span>
                        </div>
                        <div className="mb-2">
                          <span className="text-muted">No. of Paxes: </span>
                          <span className="fw-bold">{passengerDetails.length}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Passenger Details Review */}
              <div className="card shadow-sm">
                <div className="card-header">
                  <h5 className="mb-0">Passenger Details</h5>
                </div>
                <div className="card-body">
                  {passengerDetails.map((passenger, index) => (
                    <div key={index} className="border-bottom pb-3 mb-3">
                      <h6 className="text-primary mb-3">
                        Passenger {index + 1}
                        <small className="text-muted ms-2">(Age: 0-70 years)</small>
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <h6 className="text-secondary mb-2">Insured Details</h6>
                          <p className="mb-1"><strong>Name:</strong> {passenger.Title} {passenger.FirstName} {passenger.LastName}</p>
                          <p className="mb-1"><strong>D.O.B:</strong> {passenger.DOBDay}/{passenger.DOBMonth}/{passenger.DOBYear}</p>
                          <p className="mb-1"><strong>Gender:</strong> {passenger.Gender === '1' ? 'Male' : 'Female'}</p>
                          <p className="mb-1"><strong>Relation:</strong> {passenger.RelationShipToInsured}</p>
                          <p className="mb-1"><strong>Destination:</strong> {passenger.MajorDestination}</p>
                          <p className="mb-1"><strong>Email:</strong> {passenger.EmailId}</p>
                          <p className="mb-1"><strong>Mobile:</strong> {passenger.PhoneNumber}</p>
                        </div>
                        <div className="mt-sm-4 col-sm-6">
                        <p className="mb-1"><strong>Country:</strong> {passenger.CountryCode || 'N/A'}</p>
                        <p className="mb-1"><strong>State:</strong> {passenger.State}</p>
                          <p className="mb-1"><strong>City:</strong> {passenger.CityCode}</p>
                          <p className="mb-1"><strong>Address 1:</strong> {passenger.AddressLine1}</p>
                          <p className="mb-1"><strong>Address 2:</strong> {passenger.AddressLine2 || 'N/A'}</p>
                          <p className="mb-1"><strong>Pin Code:</strong> {passenger.PinCode}</p>
                          <p className="mb-1"><strong>Passport No:</strong> {passenger.PassportNo}</p>
                      </div>
                      </div>
                      <div className='row'>
                        <h6 className="text-secondary mt-2">Beneficiary Details</h6>
                          <p className="mb-1"><strong>Name:</strong> {passenger.BeneficiaryTitle} {passenger.BeneficiaryFirstName} {passenger.BeneficiaryLastName}</p>
                          <p className="mb-1"><strong>Relation To Beneficiary:</strong> {passenger.RelationToBeneficiary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Price Details & Payment */}
            <div className="col-md-4">
              <div className="card shadow-sm sticky-top" style={{ top: '100px' }}>
                <div className="card-header bg-primary">
                  <h6 className="mb-0 text-light">Price Details</h6>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Age Group 0-70 Yrs</span>
                      <span>₹{priceDetails.basePrice}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">({passengerDetails.length} passengers)</span>
                      <span>₹{priceDetails.total}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between mb-4">
                      <h4>Total Price</h4>
                      <h4 className="text-primary">₹{priceDetails.total}</h4>
                    </div>
                  
                  {/* Payment Button */}
                  {paymentError && (
                    <div className="alert alert-danger mb-3">
                      <small>{paymentError}</small>
                    </div>
                  )}
                  <button
                    className="btn btn-success btn-lg w-100"
                    onClick={handleBookAndPay}
                    disabled={isProcessingPayment || paymentLoading}
                  >
                    {isProcessingPayment || paymentLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <FaCreditCard className="me-2" />
                        Pay ₹{priceDetails.total} & Book Now
                      </>
                    )}
                  </button>
                  <p className="text-muted small mt-2 mb-0 text-center">
                    Secure payment powered by Easebuzz
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
            <div className="d-flex justify-content-between flex-column flex-sm-row mt-2 gap-2">
                <button
                  className="btn  btn-outline-primary"
                  onClick={() => navigate('/insurance-booking', {
                    state: {
                      selectedPlan: selectedPlan,
                      searchCriteria: searchCriteria,
                      passengerDetails: passengerDetails,
                      priceDetails: priceDetails,
                      authData: authData,
                      traceId: location.state?.traceId || '',
                      termsAccepted: true, // Terms were already accepted
                      isEditing: true // Flag to indicate we're coming back to edit
                    }
                  })}
                >
                  <FaArrowLeft className="me-2" />
                  Back to Edit Details
                </button>
                <button
                  className="btn  btn-outline-primary"
                  onClick={handleGoHome}
                >
                  Cancel Booking
                </button>
          </div>
        </div>
      </div>
        <style jsx>{`

        .btn{
          height: 48px;
          padding: 0px 10px;
        }
        @media (max-width: 576px) {
          .btn{
            height: 40px;
            padding: 0px 10px;
          }
        }
        
        `}</style>
      <Footer />
    </>
  );
};

export default Insurance_Payment_Page;
