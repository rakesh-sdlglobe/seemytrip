
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Header02 from '../header02';
import Footer from '../footer';
import { getInsuranceBookingDetails, bookInsurance, getInsurancePolicy, updateInsuranceBookingStatus } from '../../store/Actions/insuranceAction';
import { getEncryptedItem } from '../../utils/encryption';
import { loadRazorpayScript } from '../../utils/loadRazorpay';
import { 
  FaShieldAlt, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaUserTie, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCreditCard,
  FaFileContract,
  FaExclamationTriangle,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
  FaArrowLeft,
  FaDownload,
  FaPrint,
  FaEye,
  FaUser,
  FaPassport,
  FaIdCard,
  FaHome,
  FaGlobe,
  FaFileAlt,
  FaClock,
  FaCheckDouble,
  FaInfoCircle,
  FaCopy,
  FaShare,
  FaBookmark,
  FaBan
} from 'react-icons/fa';

export const RAZORPAY_KEY = process.env.REACT_APP_RAZORPAY_KEY_ID;

/**
 * Insurance Booking Details Component
 * 
 * This component displays insurance booking details and can fetch data from:
 * 1. Navigation state (when coming from policy generation)
 * 2. localStorage (cached policy data)
 * 3. API call using BookingId (new functionality)
 * 
 * API Usage:
 * - Pass BookingId as URL parameter: /insurance-booking-details?bookingId=2013507
 * - Or pass BookingId in navigation state: { bookingId: "2013507" }
 * 
 * The component uses Redux for API authentication and state management.
 * Authentication is handled automatically by the Redux action.
 */
const Insurance_BookingDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  
  // Redux state
  const { 
    bookingDetailsLoading, 
    bookingDetailsData, 
    bookingDetailsError
  } = useSelector(state => state.insurance);
  
  // Local state management
  const [policyData, setPolicyData] = useState(null);
  const [passengerData, setPassengerData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookingId, setBookingId] = useState(null);
  
  // Review and payment state
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState({});
  const [passengerDetails, setPassengerDetails] = useState([]);
  const [priceDetails, setPriceDetails] = useState({});
  const [authData, setAuthData] = useState({});
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isGeneratingPolicy, setIsGeneratingPolicy] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);

  // Function to fetch booking details from API
  const fetchBookingDetails = async (bookingId) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Prepare the API payload as per the Postman data structure
      const bookingDetailsPayload = {
        EndUserIp: "", // This should ideally come from user's actual IP
        TokenId: "", // Will be set by Redux action from auth data
        BookingId: bookingId
      };
      
      // Call the Redux action to fetch booking details
      const response = await dispatch(getInsuranceBookingDetails(bookingDetailsPayload));

      if (response && response.Response && response.Response.ResponseStatus === 1) {
        // Success - set the data
        setPolicyData(response);
        const passengerInfo = response.Response?.Itinerary?.PaxInfo?.[0];
        setPassengerData(passengerInfo);
      } else {
        // Handle error response
        const errorCode = response?.Response?.Error?.ErrorCode;
        const errorMessage = response?.Response?.Error?.ErrorMessage || 'Failed to fetch booking details';
        setError(`Failed to fetch booking details: ${errorMessage}`);
      }
    } catch (error) {
      setError('Failed to fetch booking details. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Load policy data from navigation state, localStorage, or API
  useEffect(() => {
    const loadPolicyData = () => {
      try {
        setIsLoading(true);
        
        // Check if we have a BookingId in URL params or location state
        const urlParams = new URLSearchParams(window.location.search);
        const urlBookingId = urlParams.get('bookingId');
        const stateBookingId = location.state?.bookingId;
        const currentBookingId = urlBookingId || stateBookingId;
        
        if (currentBookingId) {
          setBookingId(currentBookingId);
          // Fetch from API using the BookingId
          fetchBookingDetails(currentBookingId);
          return;
        }
        
        // Check if this is review mode (coming from booking page)
        if (location.state && location.state.selectedPlan) {
          setIsReviewMode(true);
          setSelectedPlan(location.state.selectedPlan);
          setSearchCriteria(location.state.searchCriteria || {});
          setPassengerDetails(location.state.passengerDetails || []);
          setPriceDetails(location.state.priceDetails || {});
          setAuthData(location.state.authData || {});
          setIsLoading(false);
          return;
        }
        
        // Get data from navigation state only
        if (location.state && location.state.policyResponse) {
          setPolicyData(location.state.policyResponse);
          setPassengerData(location.state.policyResponse.Response?.Itinerary?.PaxInfo?.[0]);
          setIsLoading(false);
        } else {
          setError('No policy data found. Please provide a BookingId or generate a policy first.');
          setIsLoading(false);
        }
      } catch (error) {
        setError('Failed to load policy data');
        setIsLoading(false);
      }
    };

    loadPolicyData();
  }, [location.state, dispatch]);



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
      if (!authData.TokenId) {
        alert('Authentication required. Please search for insurance plans again.');
        navigate('/home-insurance');
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
        } else {
          // Unknown error
          alert('Booking failed. Please try again.');
        }
      } else {
        // No response or invalid response
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      alert('Booking failed. Please try again.');
    }
  };

  // Initiate payment after successful booking
  const initiatePayment = async (bookingResult, authData) => {
    try {
      setIsProcessingPayment(true);
      
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
          console.log('Payment response:', response);
          try {
            // Payment successful, now generate policy
            await generatePolicyAfterPayment(response, bookingResult, authData);
          } catch (error) {
            console.error('Error generating policy after payment:', error);
            alert('Payment successful but policy generation failed. Please contact support.');
            setIsProcessingPayment(false);
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
      
      // Handle payment failure
      paymentObject.on('payment.failed', function (response) {
        console.error('Payment failed:', response);
        alert(`Payment failed! Reason: ${response.error.description || 'Unknown error'}`);
        setIsProcessingPayment(false);
      });

      paymentObject.open();

    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Failed to initiate payment. Please try again.');
      setIsProcessingPayment(false);
    }
  };

  // Generate policy after successful payment
  const generatePolicyAfterPayment = async (paymentResponse, bookingResult, authData) => {
    try {
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
            paymentResponse: paymentResponse
          }
        });
      } else {
        // Handle error response
        const errorCode = policyResponse?.Response?.Error?.ErrorCode;
        const errorMessage = policyResponse?.Response?.Error?.ErrorMessage || 'Policy generation failed';
        alert(`Payment successful but policy generation failed: ${errorMessage}`);
        setIsGeneratingPolicy(false);
        setIsProcessingPayment(false);
      }

    } catch (error) {
      console.error('Error generating policy:', error);
      alert('Payment successful but policy generation failed. Please contact support.');
      setIsGeneratingPolicy(false);
      setIsProcessingPayment(false);
    }
  };

  // Handle navigation to insurance home
  const handleGoHome = () => {
    navigate('/insurance-search');
  };

  // Handle manual refresh of booking details
  const handleRefreshBookingDetails = () => {
    if (bookingId) {
      fetchBookingDetails(bookingId);
    } else {
      setError('No BookingId available to refresh data');
    }
  };

  // Handle cancel insurance - navigate to dedicated cancel page
  const handleCancelInsurance = () => {
    // Navigate to the dedicated cancel page with booking ID
    const currentBookingId = bookingId || itinerary?.BookingId;
    if (currentBookingId) {
      navigate('/insurance-cancel', {
        state: { bookingId: currentBookingId }
      });
    } else {
      // If no booking ID available, still navigate to cancel page
      navigate('/insurance-cancel');
    }
  };

  // Handle Redux state changes
  useEffect(() => {
    if (bookingDetailsData && !policyData) {
      setPolicyData(bookingDetailsData);
      const passengerInfo = bookingDetailsData.Response?.Itinerary?.PaxInfo?.[0];
      setPassengerData(passengerInfo);
    }
  }, [bookingDetailsData, policyData]);

  // Additional effect to handle Redux data when it becomes available
  useEffect(() => {
    if (bookingDetailsData && bookingDetailsData.Response?.Itinerary?.PaxInfo?.[0]) {
      const passengerInfo = bookingDetailsData.Response.Itinerary.PaxInfo[0];
      if (passengerInfo.PolicyNo) {
        setPassengerData(passengerInfo);
      }
    }
  }, [bookingDetailsData]);

  // Handle Redux errors
  useEffect(() => {
    if (bookingDetailsError && !error) {
      setError(bookingDetailsError);
    }
  }, [bookingDetailsError, error]);

  // Copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // You could add a toast notification here
    });
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get coverage text
  const getCoverageText = (coverageCode) => {
    const coverageMap = {
      1: 'United States',
      2: 'Non-US International',
      3: 'Worldwide',
      4: 'India',
      5: 'Asia',
      6: 'Canada',
      7: 'Australia',
      8: 'Schengen Countries'
    };
    return coverageMap[coverageCode] || 'Coverage';
  };

  // Get policy status
  const getPolicyStatus = (status) => {
    if (status === 1) return { text: 'Active', class: 'bg-success' };
    if (status === 14) return { text: 'Confirmed', class: 'bg-success' };
    return { text: 'Pending', class: 'bg-warning' };
  };

  // Show loading state (combine local and Redux loading states)
  if (isLoading || bookingDetailsLoading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5>Loading policy details...</h5>
          {bookingId && (
            <p className="text-muted">Fetching details for Booking ID: {bookingId}</p>
          )}
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
                  <h2 className="text-danger mb-3">Error Loading Policy</h2>
                  <p className="text-muted mb-4">{error}</p>
                  <div className="d-flex gap-3 justify-content-center">
                    {bookingId && (
                      <button 
                        className="btn btn-outline-primary"
                        onClick={handleRefreshBookingDetails}
                        disabled={isLoading || bookingDetailsLoading}
                      >
                        <FaArrowRight className="me-2" />
                        Refresh Details
                      </button>
                    )}

                    <button 
                      className="btn btn-primary"
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

  // Show main content
  if (!isReviewMode && (!policyData || !passengerData)) {
    return (
      <>
        <Header02 />
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body text-center p-5">
                  <FaExclamationTriangle className="text-warning mb-3" size={60} />
                  <h2 className="mb-3">No Policy Data Found</h2>
                  <p className="text-muted mb-4">Please generate an insurance policy first to view the details.</p>
                  <button 
                    className="btn btn-primary"
                    onClick={handleGoHome}
                  >
                    Go to Insurance Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Render review mode content
  if (isReviewMode) {
    return (
      <>
        <Header02 />
        
        <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container-xl">
            {/* Review Header */}
            <div className="row mb-4">
              <div className="col-12">
                <div className="card border-primary">
                  <div className="card-body text-center py-4">
                    <FaShieldAlt className="text-primary mb-3" size={48} />
                    <h3 className="text-primary mb-2">Review Your Insurance Details</h3>
                    <p className="text-muted mb-0">
                      Please review your details and proceed with payment to complete your insurance booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4">
              {/* Left Column - Review Details */}
              <div className="col-lg-8">
                {/* Insurance Plan Overview */}
                <div className="card shadow-sm mb-4">
                  <div className="card-body row align-items-center">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <h4 className="mb-0 fw-bold text-primary">
                            {(() => {
                              const price = selectedPlan?.Price?.OfferedPriceRoundedOff || selectedPlan?.Price?.OfferedPrice || 0;
                              const days = searchCriteria.days || 7;
                              return `${price}K ${days} DAYS`;
                            })()}
                          </h4>
                          <p className="mb-0 text-warning fw-bold">
                            {searchCriteria.planCoverage === 4 ? 'India' : 
                             searchCriteria.planCoverage === 1 ? 'US' :
                             searchCriteria.planCoverage === 2 ? 'Non-US' :
                             searchCriteria.planCoverage === 3 ? 'WorldWide' :
                             searchCriteria.planCoverage === 5 ? 'Asia' :
                             searchCriteria.planCoverage === 6 ? 'Canada' :
                             searchCriteria.planCoverage === 7 ? 'Australia' :
                             searchCriteria.planCoverage === 8 ? 'Schenegen Countries' : 'Coverage'}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text-end">
                        <div className="mb-1">
                          <span className="text-muted">Start Date : </span>
                          <span className="fw-bold">
                            {(() => {
                              if (searchCriteria.departDate) {
                                return new Date(searchCriteria.departDate).toLocaleDateString('en-GB', { 
                                  day: '2-digit', 
                                  month: 'short', 
                                  year: 'numeric' 
                                });
                              }
                              return 'N/A';
                            })()}
                          </span>
                        </div>
                        <div className="mb-1">
                          <span className="text-muted">End Date : </span>
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

                {/* Passenger Details Review */}
                <div className="card shadow-sm">
                  <div className="card-header bg-white">
                    <h5 className="mb-0">Passenger Details</h5>
                  </div>
                  <div className="card-body">
                    {passengerDetails.map((passenger, index) => (
                      <div key={index} className="border-bottom pb-3 mb-3">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="text-primary mb-2">Passenger {index + 1}</h6>
                            <p className="mb-1">
                              <strong>Name:</strong> {passenger.Title} {passenger.FirstName} {passenger.LastName}
                            </p>
                            <p className="mb-1">
                              <strong>Gender:</strong> {passenger.Gender === '1' ? 'Male' : 'Female'}
                            </p>
                            <p className="mb-1">
                              <strong>DOB:</strong> {passenger.DOBDay}/{passenger.DOBMonth}/{passenger.DOBYear}
                            </p>
                            <p className="mb-1">
                              <strong>Phone:</strong> {passenger.PhoneNumber}
                            </p>
                            <p className="mb-1">
                              <strong>Email:</strong> {passenger.EmailId}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <h6 className="text-primary mb-2">Beneficiary</h6>
                            <p className="mb-1">
                              <strong>Name:</strong> {passenger.BeneficiaryTitle} {passenger.BeneficiaryFirstName} {passenger.BeneficiaryLastName}
                            </p>
                            <p className="mb-1">
                              <strong>Relation:</strong> {passenger.RelationShipToInsured}
                            </p>
                            <p className="mb-1">
                              <strong>Passport:</strong> {passenger.PassportNo}
                            </p>
                            <p className="mb-1">
                              <strong>Address:</strong> {passenger.AddressLine1}, {passenger.CityCode}, {passenger.State} - {passenger.PinCode}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Price Details & Payment */}
              <div className="col-lg-4">
                <div className="card shadow-sm sticky-top" style={{ top: '100px' }}>
                  <div className="card-header bg-primary">
                    <h6 className="mb-0 text-light">Price Details</h6>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Age Group 0.0 - 70 Yrs</span>
                        <span>₹{priceDetails.basePrice}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">(0.0 to 70 Yrs X {passengerDetails.length})</span>
                        <span>₹{priceDetails.total}</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="fw-bold fs-5">Total Price</span>
                        <span className="fw-bold fs-5 text-primary">₹{priceDetails.total}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Button */}
                <div className="card shadow-sm mt-4">
                  <div className="card-body text-center">
                    <button
                      className="btn btn-success btn-lg w-100"
                      onClick={handleBookAndPay}
                      disabled={isProcessingPayment || isGeneratingPolicy}
                    >
                      {isProcessingPayment ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Processing Payment...
                        </>
                      ) : isGeneratingPolicy ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Generating Policy...
                        </>
                      ) : (
                        <>
                          <FaCreditCard className="me-2" />
                          Pay & Book Now
                        </>
                      )}
                    </button>
                    <p className="text-muted small mt-2 mb-0">
                      Secure payment powered by Razorpay
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="row mt-4">
              <div className="col-12">
                <div className="d-flex justify-content-between">
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
        </div>
        <Footer />
      </>
    );
  }

  const itinerary = policyData.Response?.Itinerary;
  const statusInfo = getPolicyStatus(passengerData.PolicyStatus);

  return (
    <>
      <Header02 />
      
      <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container-xl">
          {/* Success Header - Show only when coming from policy generation */}
          {location.state?.showSuccessMessage && (
            <div className="row mb-4">
              <div className="col-12">
                <div className="card border-success">
                  <div className="card-body text-center p-4">
                    <FaCheckCircle className="text-success mb-3" size={60} />
                    <h2 className="text-success mb-2">🎉 Policy Generated Successfully!</h2>
                    <p className="text-muted mb-0">Your travel insurance policy has been generated and is now active and ready for use.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="row">
            {/* Left Column - Policy Details */}
            <div className="col-lg-8">
              {/* Policy Summary Card */}
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0 text-white">
                    <FaShieldAlt className="me-2" />
                    Policy Summary
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="p-3 bg-light rounded">
                        <label className="form-label fw-bold text-muted small">Policy Number</label>
                        <div className="d-flex align-items-center">
                          <p className="mb-0 fw-bold me-2 text-primary">
                            {passengerData?.PolicyNo || 
                             bookingDetailsData?.Response?.Itinerary?.PaxInfo?.[0]?.PolicyNo || 
                             'N/A'}
                          </p>
                          <button 
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => copyToClipboard(
                              passengerData?.PolicyNo || 
                              bookingDetailsData?.Response?.Itinerary?.PaxInfo?.[0]?.PolicyNo
                            )}
                            title="Copy Policy Number"
                          >
                            <FaCopy size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 bg-light rounded">
                        <label className="form-label fw-bold text-muted small">Booking ID</label>
                        <div className="d-flex align-items-center">
                          <p className="mb-0 fw-bold me-2 text-info">
                            {itinerary?.BookingId || bookingId || 'N/A'}
                          </p>
                          <button 
                            className="btn btn-sm btn-outline-info"
                            onClick={() => copyToClipboard(itinerary?.BookingId || bookingId)}
                            title="Copy Booking ID"
                          >
                            <FaCopy size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 bg-light rounded">
                        <label className="form-label fw-bold text-muted small">Insurance ID</label>
                        <div className="d-flex align-items-center">
                          <p className="mb-0 fw-bold me-2 text-warning">
                            {passengerData?.InsuranceId || itinerary?.InsuranceId || 'N/A'}
                          </p>
                          <button 
                            className="btn btn-sm btn-outline-warning"
                            onClick={() => copyToClipboard(passengerData?.InsuranceId || itinerary?.InsuranceId)}
                            title="Copy Insurance ID"
                          >
                            <FaCopy size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 bg-light rounded">
                        <label className="form-label fw-bold text-muted small">Reference ID</label>
                        <div className="d-flex align-items-center">
                          <p className="mb-0 fw-bold me-2 text-secondary">
                            {passengerData.ReferenceId || 'N/A'}
                          </p>
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => copyToClipboard(passengerData.ReferenceId)}
                            title="Copy Reference ID"
                          >
                            <FaCopy size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 bg-light rounded">
                        <label className="form-label fw-bold text-muted small">Plan Name</label>
                        <p className="mb-0 fw-bold text-dark">{itinerary?.PlanName || 'N/A'}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 bg-light rounded">
                        <label className="form-label fw-bold text-muted small">Policy Status</label>
                        <div className="mt-1">
                          <span className={`badge ${statusInfo.class} fs-6 px-3 py-2`}>
                            {statusInfo.text}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 bg-light rounded">
                        <label className="form-label fw-bold text-muted small">Coverage Area</label>
                        <p className="mb-0">
                          <FaGlobe className="me-2 text-primary" />
                          {getCoverageText(itinerary?.PlanCoverage)}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 bg-light rounded">
                        <label className="form-label fw-bold text-muted small">Invoice Number</label>
                        <p className="mb-0 fw-bold text-dark">{itinerary?.InvoiceNumber || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Passenger Information */}
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-white">
                  <h6 className="mb-0">
                    <FaUser className="me-2 text-primary" />
                    Passenger Information
                  </h6>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Full Name</label>
                        <p className="mb-0 fw-bold">
                          {passengerData.Title} {passengerData.FirstName} {passengerData.LastName}
                        </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Gender</label>
                        <p className="mb-0">{passengerData.Gender}</p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Date of Birth</label>
                        <p className="mb-0">
                          <FaCalendarAlt className="me-2 text-muted" />
                          {formatDate(passengerData.DOB)}
                        </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Passport Number</label>
                        <p className="mb-0">
                          <FaPassport className="me-2 text-muted" />
                          {passengerData.PassportNo || 'N/A'}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Email Address</label>
                        <p className="mb-0">
                          <FaEnvelope className="me-2 text-muted" />
                          {passengerData.EmailId}
                        </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Phone Number</label>
                        <p className="mb-0">
                          <FaPhone className="me-2 text-muted" />
                          {passengerData.PhoneNumber}
                        </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Address</label>
                        <p className="mb-0">
                          <FaHome className="me-2 text-muted" />
                          {passengerData.AddressLine1}, {passengerData.City}, {passengerData.State} - {passengerData.PinCode}
                        </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Major Destination</label>
                        <p className="mb-0">
                          <FaMapMarkerAlt className="me-2 text-muted" />
                          {passengerData.MajorDestination}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Policy Dates and Coverage */}
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-white">
                  <h6 className="mb-0">
                    <FaCalendarAlt className="me-2 text-primary" />
                    Policy Coverage Period
                  </h6>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="text-center p-3 border rounded">
                        <FaCalendarAlt className="text-primary mb-2" size={30} />
                        <h6 className="fw-bold">Start Date</h6>
                        <p className="mb-0 text-primary fw-bold">
                          {formatDate(itinerary?.PolicyStartDate)}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center p-3 border rounded">
                        <FaClock className="text-warning mb-2" size={30} />
                        <h6 className="fw-bold">End Date</h6>
                        <p className="mb-0 text-warning fw-bold">
                          {formatDate(itinerary?.PolicyEndDate)}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center p-3 border rounded">
                        <FaCheckDouble className="text-success mb-2" size={30} />
                        <h6 className="fw-bold">Status</h6>
                        <span className={`badge ${statusInfo.class} fs-6`}>
                          {statusInfo.text}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Policy Document */}
              {passengerData.DocumentURL && (
                <div className="card shadow-sm mb-4">
                  <div className="card-header bg-white">
                    <h6 className="mb-0">
                      <FaFileAlt className="me-2 text-primary" />
                      Policy Document
                    </h6>
                  </div>
                  <div className="card-body text-center">
                    <FaFileContract className="text-primary mb-3" size={60} />
                    <h6 className="mb-3">Your Policy Document is Ready</h6>
                    <p className="text-muted mb-4">
                      Download your insurance policy document for your records and travel requirements.
                    </p>
                    <div className="d-flex flex-sm-column felx-md-row flex-lg-row gap-3 justify-content-center">
                      <button
                        className="btn btn-primary"
                        onClick={() => window.open(passengerData.DocumentURL, '_blank')}
                      >
                        <FaDownload className="me-2" />
                        Download Policy
                      </button>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => window.open(passengerData.DocumentURL, '_blank')}
                      >
                        <FaEye className="me-2" />
                        View Online
                      </button>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => window.print()}
                      >
                        <FaPrint className="me-2" />
                        Print
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Price Details & Actions */}
            <div className="col-lg-4">
              {/* Price Summary */}
              <div className="card shadow-sm mb-4" >
                <div className="card-header bg-success text-white">
                  <h6 className="mb-0 text-white">
                    <FaCreditCard className="me-2" />
                    Price Summary
                  </h6>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Base Premium</span>
                      <span>₹{passengerData.Price?.OfferedPrice || 0}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Service Tax</span>
                      <span>₹{passengerData.Price?.ServiceTax || 0}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Swachh Bharat Tax</span>
                      <span>₹{passengerData.Price?.SwachhBharatTax || 0}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Krishi Kalyan Tax</span>
                      <span>₹{passengerData.Price?.KrishiKalyanTax || 0}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <span className="fw-bold fs-5">Total Amount</span>
                      <span className="fw-bold fs-5 text-success">₹{passengerData.Price?.OfferedPrice || 0}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-white">
                  <h6 className="mb-0">
                    <FaStar className="me-2 text-warning" />
                    Quick Actions
                  </h6>
                </div>
                <div className="card-body">
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => copyToClipboard(
                        passengerData?.PolicyNo || 
                        bookingDetailsData?.Response?.Itinerary?.PaxInfo?.[0]?.PolicyNo
                      )}
                    >
                      <FaCopy className="me-2" />
                      Copy Policy Number
                    </button>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => copyToClipboard(passengerData.ReferenceId)}
                    >
                      <FaCopy className="me-2" />
                      Copy Reference ID
                    </button>
                    <button
                      className="btn btn-outline-info"
                      onClick={() => {
                        const policyNo = passengerData?.PolicyNo || bookingDetailsData?.Response?.Itinerary?.PaxInfo?.[0]?.PolicyNo;
                        const shareText = `My Insurance Policy: ${policyNo} - ${itinerary?.PlanName}`;
                        if (navigator.share) {
                          navigator.share({
                            title: 'Insurance Policy',
                            text: shareText
                          });
                        } else {
                          copyToClipboard(shareText);
                        }
                      }}
                    >
                      <FaShare className="me-2" />
                      Share Policy
                    </button>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => {
                        // Save to bookmarks or favorites
                      }}
                    >
                      <FaBookmark className="me-2" />
                      Save to Favorites
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={handleCancelInsurance}
                    >
                      <FaBan className="me-2" />
                      Cancel Insurance
                    </button>
                  </div>
                </div>
              </div>

              {/* Important Information */}
              <div className="card shadow-sm">
                <div className="card-header bg-info text-white">
                  <h6 className="mb-0 text-white">
                    <FaInfoCircle className="me-2" />
                    Important Information
                  </h6>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <h6 className="fw-bold">Cancellation Policy</h6>
                    <p className="small text-muted mb-0">
                      Cancellation charge: ₹{itinerary?.CancellationCharge || 0}
                    </p>
                  </div>
                  <div className="mb-3">
                    <h6 className="fw-bold">Age Limits</h6>
                    <p className="small text-muted mb-0">
                      Min: {passengerData.MinAge || 1} years, Max: {passengerData.MaxAge || 0} years
                    </p>
                  </div>
                  <div className="mb-3">
                    <h6 className="fw-bold">Supplier</h6>
                    <p className="small text-muted mb-0">
                      {itinerary?.SupplierName || 'N/A'}
                    </p>
                  </div>
                  <div className="mb-0">
                    <h6 className="fw-bold">Created On</h6>
                    <p className="small text-muted mb-0">
                      {formatDate(itinerary?.CreatedOn)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="row mt-4">
            <div className="col-12 text-center">
              <div className="d-flex gap-3 justify-content-center">
                {bookingId && (
                  <button
                    type="button"
                    className="btn btn-outline-info btn-lg"
                    onClick={handleRefreshBookingDetails}
                    disabled={isLoading || bookingDetailsLoading}
                  >
                    <FaArrowRight className="me-2" />
                    Refresh Details
                  </button>
                )}

                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={handleGoHome}
                >
                  Go to Insurance Home
                  <FaArrowRight className="ms-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Insurance_BookingDetails;