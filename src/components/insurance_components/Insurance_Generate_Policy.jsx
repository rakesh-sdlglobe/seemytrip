import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Header02 from '../header02';
import Footer from '../footer';
import { setEncryptedItem, getEncryptedItem } from '../../utils/encryption';
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
  FaIdCard
} from 'react-icons/fa';
import { getInsurancePolicy } from '../../store/Actions/insuranceAction';

const Insurance_Generate_Policy = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // State management
  const [bookingData, setBookingData] = useState(null);
  const [passengerData, setPassengerData] = useState([]);
  const [priceDetails, setPriceDetails] = useState({});
  const [isGeneratingPolicy, setIsGeneratingPolicy] = useState(false);
  const [policyGenerated, setPolicyGenerated] = useState(false);
  const [policyResponse, setPolicyResponse] = useState(null);
  const [error, setError] = useState(null);

  // Load data from navigation state or localStorage
  useEffect(() => {
    const loadData = () => {
      try {
        // Get data from navigation state only
        if (location.state) {
          setBookingData(location.state.bookingResponse);
          setPassengerData(location.state.passengers || []);
          setPriceDetails(location.state.priceDetails || {});
        }
      } catch (error) {
        setError('Failed to load booking data');
      }
    };

    loadData();
  }, [location.state]);

  // Handle policy generation
  const handleGeneratePolicy = async () => {
    if (!bookingData) {
      setError('No booking data available');
      return;
    }

    try {
      setIsGeneratingPolicy(true);
      setError(null);

      // Prepare policy generation payload using the actual API structure
      const policyPayload = {
        EndUserIp: "183.83.197.45", // This should come from the actual user's IP
        TokenId: bookingData.Response?.TraceId || "",
        BookingId: bookingData.Response?.Itinerary?.BookingId || 0,
        GenerateInsurancePolicy: true
      };

      // Call the actual policy generation API using Redux action
      const policyResponse = await dispatch(getInsurancePolicy(policyPayload));

      if (policyResponse && policyResponse.Response && policyResponse.Response.ResponseStatus === 1) {
        // Success - policy generated
        setPolicyGenerated(true);
        setPolicyResponse(policyResponse);
        
        // No localStorage storage - data will be passed via navigation state
      } else {
        // Handle error response
        const errorCode = policyResponse?.Response?.Error?.ErrorCode;
        const errorMessage = policyResponse?.Response?.Error?.ErrorMessage || 'Policy generation failed';
        setError(`Policy generation failed: ${errorMessage}`);
      }

    } catch (error) {
      setError('Failed to generate policy. Please try again.');
    } finally {
      setIsGeneratingPolicy(false);
    }
  };

  // Handle navigation to next step
  const handleContinue = () => {
    navigate('/insurance-booking-details', { 
      state: { 
        policyResponse: policyResponse,
        bookingData: bookingData,
        passengers: passengerData,
        priceDetails: priceDetails,
        policyGenerated: true,
        searchParams: location.state?.searchParams,
        authData: location.state?.authData,
        traceId: location.state?.traceId
      } 
    });
  };

  // Handle going back
  const handleBack = () => {
    navigate('/insurance-booking-page', { 
      state: { 
        planId: location.state?.planId,
        passengers: passengerData,
        priceDetails: priceDetails,
        searchParams: location.state?.searchParams,
        authData: location.state?.authData,
        traceId: location.state?.traceId
      } 
    });
  };

  // Show loading state
  if (!bookingData) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5>Loading booking details...</h5>
        </div>
      </div>
    );
  }

  // Show error state
  if (error && !policyGenerated) {
    return (
      <>
        <Header02 />
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card border-danger">
                <div className="card-body text-center p-5">
                  <FaExclamationTriangle className="text-danger mb-3" size={60} />
                  <h2 className="text-danger mb-3">Error Loading Data</h2>
                  <p className="text-muted mb-4">{error}</p>
                  <div className="d-flex gap-3 justify-content-center">
                                         <button 
                       className="btn btn-outline-secondary"
                       onClick={() => navigate('/insurance-booking-page')}
                     >
                       Back to Booking
                     </button>
                    <button 
                      className="btn btn-primary"
                      onClick={() => window.location.reload()}
                    >
                      Try Again
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

  const itinerary = bookingData.Response?.Itinerary;
  const paxInfo = itinerary?.PaxInfo?.[0];

  return (
    <>
      <Header02 />
      
      <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          {/* 4-Step Navigation */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex align-items-center">
                  <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '30px', height: '30px' }}>
                    1
                  </div>
                  <span className="text-muted">Passenger Details</span>
                </div>
                <FaArrowRight className="text-muted mx-2" />
                <div className="d-flex align-items-center">
                  <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '30px', height: '30px' }}>
                    2
                  </div>
                  <span className="fw-bold text-success">Generate Policy</span>
                </div>
                <FaArrowRight className="text-muted mx-2" />
                <div className="d-flex align-items-center">
                  <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '30px', height: '30px' }}>
                    3
                  </div>
                  <span className="text-muted">Booking details</span>
                </div>
                <FaArrowRight className="text-muted mx-2" />
                <div className="d-flex align-items-center">
                  <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '30px', height: '30px' }}>
                    4
                  </div>
                  <span className="text-muted">Confirmation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="row">
            {/* Left Column - Policy Details */}
            <div className="col-lg-8">
              {/* Booking Summary */}
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-white">
                  <h5 className="mb-0">
                    <FaShieldAlt className="me-2 text-primary" />
                    Insurance Policy Details
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Plan Name</label>
                        <p className="mb-0 fw-bold">{itinerary?.PlanName || 'N/A'}</p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Plan Coverage</label>
                        <p className="mb-0">
                          {itinerary?.PlanCoverage === 4 ? 'India' : 
                           itinerary?.PlanCoverage === 1 ? 'US' :
                           itinerary?.PlanCoverage === 2 ? 'Non-US' :
                           itinerary?.PlanCoverage === 3 ? 'WorldWide' :
                           itinerary?.PlanCoverage === 5 ? 'Asia' :
                           itinerary?.PlanCoverage === 6 ? 'Canada' :
                           itinerary?.PlanCoverage === 7 ? 'Australia' :
                           itinerary?.PlanCoverage === 8 ? 'Schenegen Countries' : 'Coverage'}
                        </p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Policy Start Date</label>
                        <p className="mb-0">
                          {itinerary?.PolicyStartDate ? 
                            new Date(itinerary.PolicyStartDate).toLocaleDateString('en-GB', { 
                              day: '2-digit', 
                              month: 'short', 
                              year: 'numeric' 
                            }) : 'N/A'
                          }
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Booking ID</label>
                        <p className="mb-0 fw-bold">{itinerary?.BookingId || 'N/A'}</p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Insurance ID</label>
                        <p className="mb-0">{itinerary?.InsuranceId || 'N/A'}</p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold text-muted">Policy End Date</label>
                        <p className="mb-0">
                          {itinerary?.PolicyEndDate ? 
                            new Date(itinerary.PolicyEndDate).toLocaleDateString('en-GB', { 
                              day: '2-digit', 
                              month: 'short', 
                              year: 'numeric' 
                            }) : 'N/A'
                          }
                        </p>
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
                  {paxInfo && (
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Name</label>
                          <p className="mb-0">
                            {paxInfo.Title} {paxInfo.FirstName} {paxInfo.LastName}
                          </p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Gender</label>
                          <p className="mb-0">{paxInfo.Gender}</p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Date of Birth</label>
                          <p className="mb-0">
                            {paxInfo.DOB ? 
                              new Date(paxInfo.DOB).toLocaleDateString('en-GB', { 
                                day: '2-digit', 
                                month: 'short', 
                                year: 'numeric' 
                              }) : 'N/A'
                            }
                          </p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Passport Number</label>
                          <p className="mb-0">{paxInfo.PassportNo || 'N/A'}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Email</label>
                          <p className="mb-0">{paxInfo.EmailId}</p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Phone</label>
                          <p className="mb-0">{paxInfo.PhoneNumber}</p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Address</label>
                          <p className="mb-0">
                            {paxInfo.AddressLine1}, {paxInfo.City}, {paxInfo.State} - {paxInfo.PinCode}
                          </p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted">Major Destination</label>
                          <p className="mb-0">{paxInfo.MajorDestination}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Policy Generation Section */}
              <div className="card shadow-sm">
                <div className="card-header bg-white">
                  <h6 className="mb-0">
                    <FaFileContract className="me-2 text-primary" />
                    Generate Insurance Policy
                  </h6>
                </div>
                <div className="card-body">
                  {!policyGenerated ? (
                    <div className="text-center py-4">
                      <FaShieldAlt className="text-primary mb-3" size={60} />
                      <h5 className="mb-3">Ready to Generate Policy</h5>
                      <p className="text-muted mb-4">
                        Your insurance booking has been confirmed. Click the button below to generate your insurance policy document.
                      </p>
                      <button
                        className="btn btn-primary btn-lg px-5"
                        onClick={handleGeneratePolicy}
                        disabled={isGeneratingPolicy}
                      >
                        {isGeneratingPolicy ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Generating Policy...
                          </>
                        ) : (
                          <>
                            <FaFileContract className="me-2" />
                            Generate Policy Now
                          </>
                        )}
                      </button>
                    </div>
                                     ) : (
                     <div className="text-center py-4">
                       <FaCheckCircle className="text-success mb-3" size={60} />
                       <h5 className="text-success mb-3">Policy Generated Successfully!</h5>
                       <p className="text-muted mb-4">
                         Your insurance policy has been generated. You can now view your complete booking details and policy information.
                       </p>
                       
                       {/* Policy Details Display */}
                       {policyResponse && policyResponse.Response && policyResponse.Response.Itinerary && (
                         <div className="text-start mb-4 p-3 bg-light rounded">
                           <h6 className="fw-bold mb-3">Generated Policy Details:</h6>
                           <div className="row">
                             <div className="col-md-6">
                               <p><strong>Policy Number:</strong> {policyResponse.Response.Itinerary.PaxInfo?.[0]?.PolicyNo || 'N/A'}</p>
                               <p><strong>Reference ID:</strong> {policyResponse.Response.Itinerary.PaxInfo?.[0]?.ReferenceId || 'N/A'}</p>
                               <p><strong>Invoice Number:</strong> {policyResponse.Response.Itinerary.InvoiceNumber || 'N/A'}</p>
                             </div>
                             <div className="col-md-6">
                               <p><strong>Policy Status:</strong> <span className="badge bg-success">Active</span></p>
                               <p><strong>Generated On:</strong> {policyResponse.Response.Itinerary.InvoiceCreatedOn ? 
                                 new Date(policyResponse.Response.Itinerary.InvoiceCreatedOn).toLocaleDateString('en-GB') : 'N/A'}</p>
                               <p><strong>Document Available:</strong> {policyResponse.Response.Itinerary.PaxInfo?.[0]?.DocumentURL ? 'Yes' : 'No'}</p>
                             </div>
                           </div>
                         </div>
                       )}
                       
                       <div className="d-flex gap-3 justify-content-center">
                         <button
                           className="btn btn-outline-primary"
                           onClick={() => {
                             const docUrl = policyResponse?.Response?.Itinerary?.PaxInfo?.[0]?.DocumentURL;
                             if (docUrl) {
                               window.open(docUrl, '_blank');
                             }
                           }}
                           disabled={!policyResponse?.Response?.Itinerary?.PaxInfo?.[0]?.DocumentURL}
                         >
                           <FaDownload className="me-2" />
                           Download Policy
                         </button>
                         <button
                           className="btn btn-primary"
                           onClick={handleContinue}
                         >
                           View Booking Details
                           <FaArrowRight className="ms-2" />
                         </button>
                       </div>
                     </div>
                   )}
                </div>
              </div>
            </div>

            {/* Right Column - Price Details */}
            <div className="col-lg-4">
              <div className="card shadow-sm sticky-top" style={{ top: '100px' }}>
                <div className="card-header bg-primary text-white">
                  <h6 className="mb-0">Price Details</h6>
                </div>
                <div className="card-body">
                  {/* Policy Details */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Policy Number:</span>
                      <span className="fw-bold">{paxInfo?.PolicyNo || 'N/A'}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Reference ID:</span>
                      <span className="fw-bold">{paxInfo?.ReferenceId || 'N/A'}</span>
                    </div>
                    <hr />
                  </div>

                  {/* Cost Breakdown */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Base Premium</span>
                      <span>₹{paxInfo?.Price?.OfferedPrice || 0}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Service Tax</span>
                      <span>₹{paxInfo?.Price?.ServiceTax || 0}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Swachh Bharat Tax</span>
                      <span>₹{paxInfo?.Price?.SwachhBharatTax || 0}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Krishi Kalyan Tax</span>
                      <span>₹{paxInfo?.Price?.KrishiKalyanTax || 0}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <span className="fw-bold fs-5">Total Amount</span>
                      <span className="fw-bold fs-5 text-primary">₹{paxInfo?.Price?.OfferedPrice || 0}</span>
                    </div>
                  </div>

                  {/* Policy Status */}
                  <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">Policy Status:</span>
                      <span className={`badge ${paxInfo?.PolicyStatus === 1 ? 'bg-success' : 'bg-warning'}`}>
                        {paxInfo?.PolicyStatus === 1 ? 'Active' : 'Pending'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="row mt-4">
            <div className="col-12 text-center">
              <div className="d-flex gap-3 justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg"
                  onClick={handleBack}
                >
                  <FaArrowLeft className="me-2" />
                  Back to Booking
                </button>
                {policyGenerated && (
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={handleContinue}
                  >
                    View Booking Details
                    <FaArrowRight className="ms-2" />
                  </button>
                )}
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
