
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Header02 from '../header02';
import Footer from '../footer';
import { getInsuranceBookingDetails } from '../../store/Actions/insuranceAction';
import { getEncryptedItem } from '../../utils/encryption';
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
  FaBookmark
} from 'react-icons/fa';

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
    bookingDetailsError,
    authData 
  } = useSelector(state => state.insurance);
  
  // Local state management
  const [policyData, setPolicyData] = useState(null);
  const [passengerData, setPassengerData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookingId, setBookingId] = useState(null);

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

  // Handle navigation back to policy generation
  const handleBackToPolicy = () => {
    navigate('/insurance-generate-policy');
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
                      className="btn btn-outline-secondary"
                      onClick={handleBackToPolicy}
                    >
                      Back to Policy Generation
                    </button>
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
  if (!policyData || !passengerData) {
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
                    onClick={handleBackToPolicy}
                  >
                    Generate Policy
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
        <div className="container">
          {/* Success Header */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card border-success">
                <div className="card-body text-center p-4">
                  <FaCheckCircle className="text-success mb-3" size={60} />
                  <h2 className="text-success mb-2">Insurance Policy Generated Successfully!</h2>
                  <p className="text-muted mb-0">Your travel insurance policy is now active and ready for use.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="row">
            {/* Left Column - Policy Details */}
            <div className="col-lg-8">
              {/* Policy Summary Card */}
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">
                    <FaShieldAlt className="me-2" />
                    Policy Summary
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Policy Number</label>
                        <div className="d-flex align-items-center">
                          <p className="mb-0 fw-bold me-2">
                            {passengerData?.PolicyNo || 
                             bookingDetailsData?.Response?.Itinerary?.PaxInfo?.[0]?.PolicyNo || 
                             'N/A'}
                          </p>
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => copyToClipboard(
                              passengerData?.PolicyNo || 
                              bookingDetailsData?.Response?.Itinerary?.PaxInfo?.[0]?.PolicyNo
                            )}
                            title="Copy Policy Number"
                          >
                            <FaCopy size={14} />
                          </button>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Reference ID</label>
                        <div className="d-flex align-items-center">
                          <p className="mb-0 fw-bold me-2">{passengerData.ReferenceId || 'N/A'}</p>
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => copyToClipboard(passengerData.ReferenceId)}
                            title="Copy Reference ID"
                          >
                            <FaCopy size={14} />
                          </button>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Invoice Number</label>
                        <p className="mb-0 fw-bold">{itinerary?.InvoiceNumber || 'N/A'}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Plan Name</label>
                        <p className="mb-0 fw-bold">{itinerary?.PlanName || 'N/A'}</p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Coverage Area</label>
                        <p className="mb-0">
                          <FaGlobe className="me-2 text-primary" />
                          {getCoverageText(itinerary?.PlanCoverage)}
                        </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Policy Status</label>
                        <span className={`badge ${statusInfo.class} fs-6`}>
                          {statusInfo.text}
                        </span>
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
                    <div className="d-flex gap-3 justify-content-center">
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
              <div className="card shadow-sm mb-4 sticky-top" style={{ top: '100px' }}>
                <div className="card-header bg-success text-white">
                  <h6 className="mb-0">
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
                  </div>
                </div>
              </div>

              {/* Important Information */}
              <div className="card shadow-sm">
                <div className="card-header bg-info text-white">
                  <h6 className="mb-0">
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
                      Min: {passengerData.MinAge || 0} years, Max: {passengerData.MaxAge || 0} years
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
                  className="btn btn-outline-secondary btn-lg"
                  onClick={handleBackToPolicy}
                >
                  <FaArrowLeft className="me-2" />
                  Back to Policy Generation
                </button>
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