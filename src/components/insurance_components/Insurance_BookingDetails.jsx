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
  FaBan,
  FaSync,
  FaChevronRight,
  FaMoneyBillWave,
  FaReceipt
} from 'react-icons/fa';

export const RAZORPAY_KEY = process.env.REACT_APP_RAZORPAY_KEY_ID;

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
  const [activeTab, setActiveTab] = useState('price');

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
      alert('Copied to clipboard!');
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
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5 className="text-primary">Loading policy details...</h5>
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
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center p-5">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-4 mb-4">
                    <FaExclamationTriangle className="text-primary" size={40} />
                  </div>
                  <h2 className="text-primary mb-3 fw-bold">Error Loading Policy</h2>
                  <p className="text-muted mb-4">{error}</p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    {bookingId && (
                      <button 
                        className="btn btn-md btn-danger d-flex align-items-center"
                        onClick={handleRefreshBookingDetails}
                        disabled={isLoading || bookingDetailsLoading}
                      >
                        <FaSync className="me-2" />
                        Refresh Details
                      </button>
                    )}

                    <button 
                      className="btn btn-md btn-outline-danger"
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
              <div className="card border-0 shadow">
                <div className="card-body text-center p-5">
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex p-4 mb-4">
                    <FaExclamationTriangle className="text-warning" size={40} />
                  </div>
                  <h2 className="mb-3 fw-bold">No Policy Data Found</h2>
                  <p className="text-muted mb-4">Please generate an insurance policy first to view the details.</p>
                  <button 
                    className="btn btn-md btn-danger px-4"
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
        
        <div className="container-fluid py-4 bg-light min-vh-100">
          <div className="container-xl">
            {/* Review Header */}
            <div className="row mb-4">
              <div className="col-12">
                <div className="card border-0 shadow-sm bg-primary bg-opacity-10">
                  <div className="card-body text-center py-5">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                      <FaShieldAlt className="text-primary" size={40} />
                    </div>
                    <h3 className="text-primary mb-2 fw-bold">Review Your Insurance Details</h3>
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
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-white border-0 pt-4">
                    <h5 className="mb-0 fw-bold text-dark">Insurance Plan Overview</h5>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                          <div className="bg-primary bg-opacity-10 p-3 rounded me-3">
                            <FaShieldAlt className="text-primary" size={24} />
                          </div>
                          <div>
                            <h4 className="mb-0 fw-bold text-primary">
                              {(() => {
                                const price = selectedPlan?.Price?.OfferedPriceRoundedOff || selectedPlan?.Price?.OfferedPrice || 0;
                                const days = searchCriteria.days || 7;
                                return `₹${price} for ${days} DAYS`;
                              })()}
                            </h4>
                            <span className="badge bg-warning text-dark mt-1">
                              {searchCriteria.planCoverage === 4 ? 'India' : 
                              searchCriteria.planCoverage === 1 ? 'US' :
                              searchCriteria.planCoverage === 2 ? 'Non-US' :
                              searchCriteria.planCoverage === 3 ? 'WorldWide' :
                              searchCriteria.planCoverage === 5 ? 'Asia' :
                              searchCriteria.planCoverage === 6 ? 'Canada' :
                              searchCriteria.planCoverage === 7 ? 'Australia' :
                              searchCriteria.planCoverage === 8 ? 'Schenegen Countries' : 'Coverage'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="bg-light p-3 rounded">
                          <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">Start Date:</span>
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
                          <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">End Date:</span>
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
                          <div className="d-flex justify-content-between">
                            <span className="text-muted">No. of Passengers:</span>
                            <span className="fw-bold">{passengerDetails.length}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Passenger Details Review */}
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-white border-0">
                    <h5 className="mb-0 fw-bold text-dark">
                      <FaUser className="me-2 text-primary" />
                      Passenger Details
                    </h5>
                  </div>
                  <div className="card-body">
                    {passengerDetails.map((passenger, index) => (
                      <div key={index} className="border-bottom pb-3 mb-3">
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-primary bg-opacity-10 p-2 rounded me-2">
                            <FaUser className="text-primary" />
                          </div>
                          <h6 className="text-primary mb-0">Passenger {index + 1}</h6>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-2">
                              <small className="text-muted">Name</small>
                              <p className="mb-0 fw-medium">{passenger.Title} {passenger.FirstName} {passenger.LastName}</p>
                            </div>
                            <div className="mb-2">
                              <small className="text-muted">Gender</small>
                              <p className="mb-0">{passenger.Gender === '1' ? 'Male' : 'Female'}</p>
                            </div>
                            <div className="mb-2">
                              <small className="text-muted">Date of Birth</small>
                              <p className="mb-0">{passenger.DOBDay}/{passenger.DOBMonth}/{passenger.DOBYear}</p>
                            </div>
                            <div className="mb-2">
                              <small className="text-muted">Phone</small>
                              <p className="mb-0">{passenger.PhoneNumber}</p>
                            </div>
                            <div className="mb-2">
                              <small className="text-muted">Email</small>
                              <p className="mb-0">{passenger.EmailId}</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex align-items-center mb-3">
                              <div className="bg-success bg-opacity-10 p-2 rounded me-2">
                                <FaUserTie className="text-success" />
                              </div>
                              <h6 className="text-success mb-0">Beneficiary</h6>
                            </div>
                            <div className="mb-2">
                              <small className="text-muted">Name</small>
                              <p className="mb-0 fw-medium">{passenger.BeneficiaryTitle} {passenger.BeneficiaryFirstName} {passenger.BeneficiaryLastName}</p>
                            </div>
                            <div className="mb-2">
                              <small className="text-muted">Relation</small>
                              <p className="mb-0">{passenger.RelationShipToInsured}</p>
                            </div>
                            <div className="mb-2">
                              <small className="text-muted">Passport</small>
                              <p className="mb-0">{passenger.PassportNo}</p>
                            </div>
                            <div className="mb-2">
                              <small className="text-muted">Address</small>
                              <p className="mb-0 small">{passenger.AddressLine1}, {passenger.CityCode}, {passenger.State} - {passenger.PinCode}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Price Details & Payment */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm sticky-top" style={{ top: '100px' }}>
                  <div className="card-header bg-primary text-white">
                    <h6 className="mb-0">
                      <FaReceipt className="me-2" />
                      Price Details
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Base Premium</span>
                        <span>₹{priceDetails.basePrice || 0}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">Taxes & Fees</span>
                        <span>₹{(priceDetails.total || 0) - (priceDetails.basePrice || 0)}</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="fw-bold fs-5">Total Amount</span>
                        <span className="fw-bold fs-5 text-primary">₹{priceDetails.total || 0}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Button */}
                <div className="card border-0 shadow-sm mt-4">
                  <div className="card-body text-center">
                    <button
                      className="btn btn-success btn-lg w-100 py-3 fw-bold"
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
                    <p className="text-muted small mt-3 mb-0">
                      <FaShieldAlt className="me-1" />
                      Secure payment powered by Razorpay
                    </p>
                  </div>
                </div>

                {/* Support Info */}
                <div className="card border-0 shadow-sm mt-4">
                  <div className="card-body">
                    <h6 className="fw-bold mb-3">Need Help?</h6>
                    <div className="d-flex align-items-center mb-2">
                      <FaPhone className="text-muted me-2" />
                      <span className="small">+1-800-123-4567</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <FaEnvelope className="text-muted me-2" />
                      <span className="small">support@seemytrip.com</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <FaWhatsapp className="text-muted me-2" />
                      <span className="small">+1-800-123-4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="row mt-4">
              <div className="col-12">
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-outline-secondary d-flex align-items-center"
                    onClick={() => navigate('/insurance-booking')}
                  >
                    <FaArrowLeft className="me-2" />
                    Back to Edit Details
                  </button>
                  <button
                    className="btn btn-outline-danger"
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
      <style>
        {`
          .nav-scroll-container::-webkit-scrollbar {
            height: 6px;
          }
          
          .nav-scroll-container::-webkit-scrollbar-track {
            background: #f8f9fa;
            border-radius: 3px;
          }
          
          .nav-scroll-container::-webkit-scrollbar-thumb {
            background:#fad7da;
            border-radius: 3px;
          }
          
          .nav-scroll-container::-webkit-scrollbar-thumb:hover {
            background: #c82333;
          }
          
          .nav-scroll-container {
            scroll-behavior: smooth;
          }
          
          .nav-scroll-container .nav-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
          
          .nav-scroll-container .nav-link.active {
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transform: translateY(-1px);
          }
        `}
      </style>
      <Header02 />
      
      <div className="container-fluid py-4 bg-light min-vh-100">
        <div className="container-xl">
          {/* Success Header - Show only when coming from policy generation */}
          {/* {location.state?.showSuccessMessage && (
            <div className="row mb-4">
              <div className="col-12">
                <div className="card border-0 shadow-sm bg-success bg-opacity-10">
                  <div className="card-body text-center p-5">
                    <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex p-4 mb-3">
                      <FaCheckCircle className="text-success" size={40} />
                    </div>
                    <h2 className="text-success mb-2 fw-bold">🎉 Policy Generated Successfully!</h2>
                    <p className="text-muted mb-0">Your travel insurance policy has been generated and is now active and ready for use.</p>
                  </div>
                </div>
              </div>
            </div>
          )} */}
          

        <div className="row mb-4">
            <div className="col-12">
              <div className="card border-success">
                <div className="card-body text-center p-4">
                  <FaCheckCircle className="text-success mb-3" size={60} />
                   <h2 className="text-success mb-2">Policy Details</h2>
                   <p className="text-muted mb-0">View your travel insurance policy information and manage your booking.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="row">
            {/* Left Column - Policy Details */}
            <div className="col-lg-8 ">
              {/* Navigation Tabs */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-0">
                  <div className="nav-scroll-container" style={{
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                    padding: '0.5rem',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#fad7da #f8f9fa'
                  }}>
                    <div className="nav nav-pills d-flex flex-nowrap" style={{ minWidth: 'max-content' }}>
          
                     <div className="nav-item me-2">
                        <button 
                          className={`nav-link btn btn-sm d-flex align-items-center px-3 py-2 rounded-pill ${activeTab === 'price' ? 'active' : ''}`}
                          onClick={() => setActiveTab('price')}
                          style={{
                            whiteSpace: 'nowrap',
                            transition: 'all 0.3s ease',
                            minWidth: '140px',
                            justifyContent: 'center',
                            backgroundColor: activeTab === 'price' ? '#27A974' : '#ffffff',
                            color: activeTab === 'price' ? '#ffffff' : '#dc3545',
                            border: activeTab === 'price' ? '2px solid #27A974' : '2px solid #dc3545',
                            fontWeight: '500'
                          }}
                        >
                          <FaMoneyBillWave className="me-2" size={16} />
                          Price Summary
                        </button>
                      </div>
                      <div className="nav-item me-2">
                        <button 
                          className={`nav-link btn btn-sm d-flex align-items-center px-3 py-2 rounded-pill ${activeTab === 'summary' ? 'active' : ''}`}
                          onClick={() => setActiveTab('summary')}
                          style={{
                            whiteSpace: 'nowrap',
                            transition: 'all 0.3s ease',
                            minWidth: '120px',
                            justifyContent: 'center',
                            backgroundColor: activeTab === 'summary' ? '#007bff' : '#ffffff',
                            color: activeTab === 'summary' ? '#ffffff' : '#dc3545',
                            border: activeTab === 'summary' ? '2px solid #007bff' : '2px solid #dc3545',
                            fontWeight: '500'
                          }}
                        >
                          <FaInfoCircle className="me-2" size={16} />
                          Policy Summary
                        </button>
                      </div>
                   
                      <div className="nav-item me-2">
                        <button 
                          className={`nav-link btn btn-sm d-flex align-items-center px-3 py-2 rounded-pill ${activeTab === 'passenger' ? 'active' : ''}`}
                          onClick={() => setActiveTab('passenger')}
                          style={{
                            whiteSpace: 'nowrap',
                            transition: 'all 0.3s ease',
                            minWidth: '140px',
                            justifyContent: 'center',
                            backgroundColor: activeTab === 'passenger' ? '#17a2b8' : '#ffffff',
                            color: activeTab === 'passenger' ? '#ffffff' : '#dc3545',
                            border: activeTab === 'passenger' ? '2px solid #17a2b8' : '2px solid #dc3545',
                            fontWeight: '500'
                          }}
                        >
                          <FaUser className="me-2" size={16} />
                          Passenger Info
                        </button>
                      </div>
                      <div className="nav-item me-2">
                        <button 
                          className={`nav-link btn btn-sm d-flex align-items-center px-3 py-2 rounded-pill ${activeTab === 'coverage' ? 'active' : ''}`}
                          onClick={() => setActiveTab('coverage')}
                          style={{
                            whiteSpace: 'nowrap',
                            transition: 'all 0.3s ease',
                            minWidth: '120px',
                            justifyContent: 'center',
                            backgroundColor: activeTab === 'coverage' ? '#ffc107' : '#ffffff',
                            color: activeTab === 'coverage' ? '#212529' : '#dc3545',
                            border: activeTab === 'coverage' ? '2px solid #ffc107' : '2px solid #dc3545',
                            fontWeight: '500'
                          }}
                        >
                          <FaShieldAlt className="me-2" size={16} />
                          Coverage
                        </button>
                      </div>
                      <div className="nav-item me-2">
                        <button 
                          className={`nav-link btn btn-sm  d-flex align-items-center px-3 py-2 rounded-pill ${activeTab === 'documents' ? 'active' : ''}`}
                          onClick={() => setActiveTab('documents')}
                          style={{
                            whiteSpace: 'nowrap',
                            transition: 'all 0.3s ease',
                            minWidth: '120px',
                            justifyContent: 'center',
                            backgroundColor: activeTab === 'documents' ? '#6c757d' : '#ffffff',
                            color: activeTab === 'documents' ? '#ffffff' : '#dc3545',
                            border: activeTab === 'documents' ? '2px solid #6c757d' : '2px solid #dc3545',
                            fontWeight: '500'
                          }}
                        >
                          <FaFileAlt className="me-2" size={16} />
                          Documents
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

               {/* Price Summary Tab */}
               {activeTab === 'price' && (
                 <div className="card border-0 shadow-sm mb-4">
                   <div className="card-header bg-white border-0 pt-4">
                     <h5 className="mb-0 fw-bold">
                       <FaMoneyBillWave className="me-2 text-success" />
                       Price Summary
                     </h5>
                   </div>
                   <div className="card-body">
                     <div className="row">
                       <div className="col-md-8">
                         <div className="mb-4">
                           <h6 className="fw-bold text-primary mb-3">Premium Breakdown</h6>
                           <div className="bg-light p-3 rounded">
                             <div className="d-flex justify-content-between mb-2">
                               <span>Base Premium</span>
                               <span className="fw-bold">₹{passengerData.Price?.OfferedPrice || 0}</span>
                             </div>
                             <div className="d-flex justify-content-between mb-2">
                               <span className="text-muted">Service Tax </span>
                               <span className="text-muted">₹{passengerData.Price?.ServiceTax || 0}</span>
                             </div>
                             <div className="d-flex justify-content-between mb-2">
                               <span className="text-muted">Swachh Bharat Tax </span>
                               <span className="text-muted">₹{passengerData.Price?.SwachhBharatTax || 0}</span>
                             </div>
                             <div className="d-flex justify-content-between mb-2">
                               <span className="text-muted">Krishi Kalyan Tax </span>
                               <span className="text-muted">₹{passengerData.Price?.KrishiKalyanTax || 0}</span>
                             </div>
                             <hr />
                             <div className="d-flex justify-content-between">
                               <span className="fw-bold fs-5">Total Amount</span>
                               <span className="fw-bold fs-5 text-success">₹{passengerData.Price?.OfferedPrice || 0}</span>
                             </div>
                           </div>
                         </div>

                         <div className="mb-4">
                           <h6 className="fw-bold text-primary mb-3">Payment Information</h6>
                           <div className="row">
                             <div className="col-md-6">
                               <div className="p-3 border rounded">
                                 <label className="form-label fw-bold text-muted small">Payment Status</label>
                                 <div className="d-flex align-items-center">
                                   <span className={`badge ${statusInfo.class} fs-6 px-3 py-2`}>
                                     {statusInfo.text}
                                   </span>
                                 </div>
                               </div>
                             </div>
                             <div className="col-md-6">
                               <div className="p-3 border rounded">
                                 <label className="form-label fw-bold text-muted small">Payment Method</label>
                                 <p className="mb-0 fw-bold">Razorpay</p>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                       
                       <div className="col-md-4">
                         <div className="card bg-primary bg-opacity-10 border-0">
                           <div className="card-body text-center">
                             <FaReceipt className="text-primary mb-3" size={40} />
                             <h6 className="fw-bold text-primary mb-2">Total Premium</h6>
                             <h3 className="text-primary fw-bold mb-3">₹{passengerData.Price?.OfferedPrice || 0}</h3>
                             <p className="text-muted small mb-0">
                               All taxes and fees included
                             </p>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               )}

              {/* Policy Summary Card */}
              {activeTab === 'summary' && (
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-white border-0 pt-4">
                    <h5 className="mb-0 fw-bold ">
                      <FaShieldAlt className="me-2 text-primary" />
                      Policy Summary
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="p-3 bg-light rounded">
                          <label className="form-label fw-bold text-muted small">Policy Number</label>
                          <div className="d-flex align-items-center">
                            <p className="mb-0 fw-bold me-2 text-primary">
                              {passengerData?.PolicyNo || 
                              bookingDetailsData?.Response?.Itinerary?.PaxInfo?.[0]?.PolicyNo || 
                              'N/A'}
                            </p>
                            <button 
                              className="btn btn-sm btn-outline-danger"
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
                      <div className="col-sm-6">
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
                      <div className="col-sm-6">
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
                      <div className="col-sm-6">
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
                      <div className="col-sm-6">
                        <div className="p-3 bg-light rounded">
                          <label className="form-label fw-bold text-muted small">Plan Name</label>
                          <p className="mb-0 fw-bold text-dark">{itinerary?.PlanName || 'N/A'}</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="p-3 bg-light rounded">
                          <label className="form-label fw-bold text-muted small">Policy Status</label>
                          <div className="mt-1">
                            <span className={`badge ${statusInfo.class} fs-6 px-3 py-2`}>
                              {statusInfo.text}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="p-3 bg-light rounded">
                          <label className="form-label fw-bold text-muted small">Coverage Area</label>
                          <p className="mb-0">
                            <FaGlobe className="me-2 text-primary" />
                            {getCoverageText(itinerary?.PlanCoverage)}
                          </p>
                        </div>
                      </div>
                        <div className="col-sm-6">
                        <div className="p-3 bg-light rounded">
                          <label className="form-label fw-bold text-muted small">Invoice Number</label>
                          <p className="mb-0 fw-bold text-dark">{itinerary?.InvoiceNumber || 'N/A'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               )}



               {/* Passenger Information */}
              {activeTab === 'passenger' && (
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-white border-0">
                    <h6 className="mb-0 fw-bold ">
                      <FaUser className="me-2 text-primary" />
                      Passenger Information
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-uppercase text-muted small">Full Name</label>
                          <div className='d-flex align-items-center gap-1'>
                          <p className="mb-0 ">{passengerData.Title || 'N/A'}</p>
                          <p className="mb-0 ">{passengerData.FirstName || 'N/A'}</p>
                          <p className="mb-0 ">{passengerData.LastName || 'N/A'}</p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-uppercase text-muted small">Gender</label>
                          <p className="mb-0">{passengerData.Gender || 'N/A'}</p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-uppercase text-muted small">Date of Birth</label>
                          <p className="mb-0">
                            <FaCalendarAlt className="me-2 text-muted" />
                            {passengerData.DOBDay && passengerData.DOBMonth && passengerData.DOBYear 
                              ? `${passengerData.DOBDay}/${passengerData.DOBMonth}/${passengerData.DOBYear}`
                              : passengerData.DOB 
                              ? formatDate(passengerData.DOB)
                              : 'N/A'}
                          </p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-uppercase text-muted small">Relation To Insured</label>
                          <p className="mb-0">{passengerData.RelationShipToInsured || 'N/A'}</p>
                        </div>
                      </div>
                      <div className="col-sm-6">

                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-uppercase text-muted small">Major Destination</label>
                          <p className="mb-0">
                            <FaMapMarkerAlt className="me-2 text-primary" />
                            {passengerData.MajorDestination || 'N/A'}
                          </p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-uppercase text-muted small">Phone Number</label>
                          <p className="mb-0">
                            <FaPhone className="me-2 text-success" />
                            {passengerData.PhoneNumber || 'N/A'}
                          </p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-uppercase text-muted small">Passport Number</label>
                          <p className="mb-0">
                            <FaPassport className="me-2 text-info" />
                            {passengerData.PassportNo || 'N/A'}
                          </p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-uppercase text-muted small">Email Address</label>
                          <p className="mb-0">
                            <FaEnvelope className="me-2 text-warning" />
                            {passengerData.EmailId || 'N/A'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h6 className="fw-bold mb-3">
                      <FaHome className="me-2 text-primary" />
                      Address Details
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-uppercase text-muted small">Country</label>
                          <p className="mb-0">
                            <FaGlobe className="me-2 text-primary" />
                            {passengerData.Country || passengerData.CountryCode || 'N/A'}
                          </p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-uppercase text-muted small">State</label>
                          <p className="mb-0">{passengerData.State || 'N/A'}</p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-uppercase text-muted small">City</label>
                          <p className="mb-0">{passengerData.City || passengerData.CityCode || 'N/A'}</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-uppercase text-muted small">Address Line 1</label>
                          <p className="mb-0">
                            <FaHome className="me-2 text-primary" />
                            {passengerData.AddressLine1 || 'N/A'}
                          </p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-muted small">Address Line 2</label>
                          <p className="mb-0">{passengerData.AddressLine2 || 'N/A'}</p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-muted small">Pin Code</label>
                          <p className="mb-0">{passengerData.PinCode || 'N/A'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Beneficiary Information */}
              {activeTab === 'passenger' && (
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-white border-0">
                    <h6 className="mb-0 fw-bold ">
                      <FaUserTie className="me-2 text-success" />
                      Beneficiary Details
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-muted small">Name</label>
                          <p className="mb-0 fw-bold">
                            {passengerData.BeneficiaryName || 'N/A'}
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label mb-0 fw-bold text-muted small">Relation To Beneficiary</label>
                          <p className="mb-0">{passengerData.RelationToBeneficiary || 'N/A'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Policy Dates and Coverage */}
              {activeTab === 'coverage' && (
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-white border-0">
                      <h6 className="mb-0 fw-bold ">
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
              )}

              {/* Policy Document */}
              {activeTab === 'documents' && passengerData.DocumentURL && (
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-white border-0">
                    <h6 className="mb-0 fw-bold text-dark">
                      <FaFileAlt className="me-2 text-primary" />
                      Policy Document
                    </h6>
                  </div>
                  <div className="card-body text-center">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-4 mb-3">
                      <FaFileContract className="text-primary" size={40} />
                    </div>
                    <h6 className="mb-3 fw-bold">Your Policy Document is Ready</h6>
                    <p className="text-muted mb-4">
                      Download your insurance policy document for your records and travel requirements.
                    </p>
                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                      <button
                        className="btn btn-md btn-danger d-flex align-items-center"
                        onClick={() => window.open(passengerData.DocumentURL, '_blank')}
                      >
                        <FaDownload className="me-2" />
                        Download Policy
                      </button>
                      <button
                        className="btn btn-md btn-outline-danger d-flex align-items-center"
                        onClick={() => window.open(passengerData.DocumentURL, '_blank')}
                      >
                        <FaEye className="me-2" />
                        View Online
                      </button>
                      <button
                        className="btn btn-md btn-outline-secondary d-flex align-items-center"
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

            {/* Right Column - Actions & Information */}
            <div className="col-lg-4 col-md-12">
              {/* Quick Actions */}

              <div className=" col-md-6 card border-0 shadow-sm mb-4">
                <div className="card-header bg-white border-0">
                  <h6 className="mb-0 fw-bold">
                    <FaStar className="me-2 text-warning" />
                    Quick Actions
                  </h6>
                </div>
                <div className="card-body">
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-outline-danger d-flex align-items-center justify-content-center"
                      onClick={() => copyToClipboard(
                        passengerData?.PolicyNo || 
                        bookingDetailsData?.Response?.Itinerary?.PaxInfo?.[0]?.PolicyNo
                      )}
                    >
                      <FaCopy className="me-2" />
                      Copy Policy Number
                    </button>
                    <button
                      className="btn btn-outline-success d-flex align-items-center justify-content-center"
                      onClick={() => copyToClipboard(passengerData.ReferenceId)}
                    >
                      <FaCopy className="me-2" />
                      Copy Reference ID
                    </button>
                    <button
                      className="btn btn-outline-info d-flex align-items-center justify-content-center"
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
                    {/* <button
                      className="btn btn-outline-warning d-flex align-items-center justify-content-center"
                      onClick={() => {
                        // Save to bookmarks or favorites
                      }}
                    >
                      <FaBookmark className="me-2" />
                      Save to Favorites
                    </button> */}
                    <button
                      className="btn  btn-outline-danger d-flex align-items-center justify-content-center"
                      onClick={handleCancelInsurance}
                    >
                      <FaBan className="me-2" />
                      Cancel Insurance
                    </button>
                  </div>
                </div>
              </div>


                {/* Important Information */}
             <div className=" col-md-6 card border-0 shadow-sm">
                <div className="card-header bg-primary ">
                  <h6 className="mb-0 text-light">
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
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                {bookingId && (
                  <button
                    type="button"
                    className="btn btn-md btn-outline-danger d-flex align-items-center"
                    onClick={handleRefreshBookingDetails}
                    disabled={isLoading || bookingDetailsLoading}
                  >
                    <FaSync className="me-2" />
                    Refresh Details
                  </button>
                )}

                <button
                  type="button"
                  className="btn btn-md btn-danger d-flex align-items-center"
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

      <style jsx>{`
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

export default Insurance_BookingDetails;