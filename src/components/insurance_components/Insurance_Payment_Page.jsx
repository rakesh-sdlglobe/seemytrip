import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Header02 from '../header02';
import Footer from '../footer';
import { bookInsurance, getInsurancePolicy, updateInsuranceBookingStatus } from '../../store/Actions/insuranceAction';
import { loadRazorpayScript } from '../../utils/loadRazorpay';
import { 
  FaCreditCard,
  FaExclamationTriangle,
  FaArrowLeft
} from 'react-icons/fa';

export const RAZORPAY_KEY = process.env.REACT_APP_RAZORPAY_KEY_ID;

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
  const { 
    bookingLoading, 
    bookingError
  } = useSelector(state => state.insurance);
  
  // Local state management
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState({});
  const [passengerDetails, setPassengerDetails] = useState([]);
  const [priceDetails, setPriceDetails] = useState({});
  const [authData, setAuthData] = useState({});
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isGeneratingPolicy, setIsGeneratingPolicy] = useState(false);
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

  // Load Razorpay SDK
  const loadRazorpay = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet.");
      return false;
    }
    return true;
  };

  // Handle booking and payment
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

      // Prepare booking payload
      const bookingPayload = {
        TokenId: authData.TokenId,
        EndUserIp: authData.EndUserIp || '127.0.0.1',
        TraceId: location.state?.traceId || '',
        ResultIndex: selectedPlan?.ResultIndex || 1,
        Passenger: passengerDetails
      };
      
      console.log("💳 Payment Page: Preparing booking payload:", JSON.stringify(bookingPayload, null, 2));
      console.log("💳 Payment Page: Passenger details:", JSON.stringify(passengerDetails, null, 2));
      
      const result = await dispatch(bookInsurance(bookingPayload));
      
      if (result && result.Response) {
        if (result.Response.ResponseStatus === 1) {
          // Success - now initiate payment
          await initiatePayment(result, authData);
        } else if (result.Response.Error && result.Response.Error.ErrorCode !== 0) {
          // Handle error response with detailed error info
          const errorCode = result.Response.Error.ErrorCode;
          const errorMessage = result.Response.Error.ErrorMessage;
          alert(`Booking failed: ${errorMessage} (Code: ${errorCode})`);
          setIsProcessingPayment(false);
        } else {
          // Unknown error
          alert('Booking failed. Please try again.');
          setIsProcessingPayment(false);
        }
      } else {
        // No response or invalid response
        alert('Booking failed. Please try again.');
        setIsProcessingPayment(false);
      }
    } catch (error) {
      alert('Booking failed. Please try again.');
      setIsProcessingPayment(false);
    }
  };

  // Initiate payment after successful booking
  const initiatePayment = async (bookingResult, authData) => {
    try {
      // Load Razorpay SDK
      const razorpayLoaded = await loadRazorpay();
      if (!razorpayLoaded) {
        setIsProcessingPayment(false);
        return;
      }

      // Calculate total amount from price details - use exact API price
      const totalAmount = priceDetails.total || 0;
      const amountInPaise = Math.round(totalAmount * 100); // Convert to paise

      // Get passenger details for payment
      const leadPassenger = passengerDetails.find(p => p.RelationShipToInsured === 'Self') || passengerDetails[0];
      
      if (!leadPassenger) {
        alert('No passenger details found for payment');
        setIsProcessingPayment(false);
        return;
      }

      // Prepare Razorpay options
      const options = {
        key: RAZORPAY_KEY,
        amount: amountInPaise,
        currency: 'INR',
        name: 'SeeMyTrip',
        description: 'Insurance Policy Payment',
        handler: async function (response) {
          try {
            await generatePolicyAfterPayment(response, bookingResult, authData);
          } catch (error) {
            alert('Payment successful but policy generation failed. Please contact support.');
            setIsProcessingPayment(false);
            setIsGeneratingPolicy(false);
          }
        },
        theme: {
          color: '#3399cc',
        },
        prefill: {
          name: `${leadPassenger.Title} ${leadPassenger.FirstName} ${leadPassenger.LastName}`,
          email: leadPassenger.EmailId || '',
          contact: leadPassenger.PhoneNumber || '',
        },
      };

      // Open Razorpay payment modal
      const paymentObject = new window.Razorpay(options);
      
      paymentObject.on('payment.failed', function (response) {
        alert(`Payment failed! Reason: ${response.error.description || 'Unknown error'}`);
        setIsProcessingPayment(false);
        setIsGeneratingPolicy(false);
      });

      paymentObject.open();

    } catch (error) {
      alert('Failed to initiate payment. Please try again.');
      setIsProcessingPayment(false);
      setIsGeneratingPolicy(false);
    }
  };

  // Generate policy after successful payment
  const generatePolicyAfterPayment = async (paymentResponse, bookingResult, authData) => {
    try {
      // Switch from processing payment to generating policy
      setIsProcessingPayment(false);
      setIsGeneratingPolicy(true);

      // Prepare policy generation payload
      const policyPayload = {
        EndUserIp: authData.EndUserIp || "127.0.0.1",
        TokenId: authData.TokenId || "",
        BookingId: bookingResult.Response?.Itinerary?.BookingId || 0,
      };

      // Call the policy generation API
      const policyResponse = await dispatch(getInsurancePolicy(policyPayload));

      if (policyResponse && policyResponse.Response && policyResponse.Response.ResponseStatus === 1) {
        // Success - policy generated, now update booking status in database
        const bookingId = bookingResult.Response?.Itinerary?.BookingId;
        const policyNumber = policyResponse.Response?.Itinerary?.PassengerInfo?.[0]?.PolicyNo || 
                           policyResponse.Response?.Itinerary?.PolicyNo || 
                           `POL${Date.now()}`;
        
        // Update booking status with payment and policy details
        try {
          const statusUpdateData = {
            booking_status: 'Confirmed',
            payment_status: 'Paid',
            policy_number: policyNumber,
            transaction_id: paymentResponse.razorpay_payment_id,
            payment_method: 'Razorpay',
            razorpay_payment_id: paymentResponse.razorpay_payment_id,
            total_premium: priceDetails.total || 0,
            base_premium: priceDetails.base || priceDetails.total || 0
          };
          
          console.log("💳 Updating booking status with:", statusUpdateData);
          await dispatch(updateInsuranceBookingStatus(bookingId, statusUpdateData));
          console.log("✅ Booking status updated successfully");
        } catch (updateError) {
          console.error("❌ Failed to update booking status:", updateError);
          // Don't fail the flow, just log the error
        }
        
        // Navigate to generate policy page
        navigate('/insurance-generate-policy', { 
          state: {
            bookingResponse: bookingResult,
            passengers: passengerDetails,
            priceDetails: priceDetails,
            policyResponse: policyResponse,
            paymentResponse: paymentResponse,
            bookingId: bookingId
          }
        });
      } else {
        // Handle error response
        const errorCode = policyResponse?.Response?.Error?.ErrorCode;
        const errorMessage = policyResponse?.Response?.Error?.ErrorMessage || 'Policy generation failed';
        alert(`Payment successful but policy generation failed: ${errorMessage}`);
        setIsGeneratingPolicy(false);
      }

    } catch (error) {
      alert('Payment successful but policy generation failed. Please contact support.');
      setIsGeneratingPolicy(false);
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
                      <h4 className="mb-2 fw-bold text-primary">
                        {(() => {
                          const price = selectedPlan?.Price?.OfferedPriceRoundedOff || selectedPlan?.Price?.OfferedPrice || 0;
                          const days = searchCriteria.days || 7;
                          return `${price}K ${days} DAYS`;
                        })()}
                      </h4>
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
                        onClick={() => navigate('/insurance-booking')}
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
                  <div className="mb-3">
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
                      <span className="fw-bold fs-5">Total Price</span>
                      <span className="fw-bold fs-5 text-primary">₹{priceDetails.total}</span>
                    </div>
                  </div>
                  
                  {/* Payment Button */}
                  <button
                    className="btn btn-success btn-lg w-100"
                    onClick={handleBookAndPay}
                    disabled={isProcessingPayment || isGeneratingPolicy}
                  >
                    {isProcessingPayment ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Processing Payment...
                      </>
                    ) : isGeneratingPolicy ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Generating Policy...
                      </>
                    ) : (
                      <>
                        <FaCreditCard className="me-2" />
                        Pay ₹{priceDetails.total} & Book Now
                      </>
                    )}
                  </button>
                  <p className="text-muted small mt-2 mb-0 text-center">
                    Secure payment powered by Razorpay
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="row mt-4">
              <div className="d-flex justify-content-between flex-lg-row flex-md-row flex-sm-column gap-sm-2 gap-md-2 gap-lg-2">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => navigate('/insurance-booking')}
                >
                  <FaArrowLeft className="me-2" />
                  Back to Edit Details
                </button>
                <button
                  className="btn btn-outline-primary"
                  onClick={handleGoHome}
                >
                  Cancel Booking
                </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Insurance_Payment_Page;
