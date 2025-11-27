import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchBusBookingDetails } from '../../store/Actions/busActions';
import { selectBusBookingDetails, selectBusBookingDetailsLoading } from '../../store/Selectors/busSelectors';
import logo from '../../assets/images/train-4 (1).png'

const Bus_Comfirmation_Page = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Redux selectors
  const bookingDetails = useSelector(selectBusBookingDetails);
  console.log("bookingDetails",bookingDetails);
  const bookingDetailsLoading = useSelector(selectBusBookingDetailsLoading);

  useEffect(() => {
    // Get booking data from location state only (no local storage)
    const bookingData = location.state?.bookingData || {};
    
    // Extract required parameters from bookingData passed from payment success page
    const busId = bookingData?.bookingResult?.BookResult?.BusId || 
                  bookingData?.blockData?.BusId;
    
    // Get API parameters from bookingData (should be passed from payment success)
    const TokenId = bookingData?.tokenId || bookingData?.blockData?.TokenId;
    const EndUserIp = bookingData?.endUserIp || bookingData?.blockData?.EndUserIp;

    if (!busId || !TokenId || !EndUserIp) {
      const errorMsg = "Booking details not found. Please check your booking or contact support.";
      setError(errorMsg);
      setLoading(false);
      toast.error(errorMsg);
      setTimeout(() => {
        navigate('/bus-list');
      }, 3000);
      return;
    }

    // Fetch booking details from API only (no local storage)
    const bookingDetailsData = {
      EndUserIp,
      TokenId,
      BusId: busId,
      IsBaseCurrencyRequired: false
    };

    console.log('Fetching booking details with:', bookingDetailsData);
    dispatch(fetchBusBookingDetails(bookingDetailsData))
      .then((response) => {
        console.log('Booking details API response:', response);
        // Don't set loading to false here - let Redux state handle it
      })
      .catch((err) => {
        console.error('Error fetching booking details:', err);
        setError('Failed to fetch booking details. Please try again.');
        setLoading(false);
        toast.error('Failed to fetch booking details.');
      });
  }, [location.state, navigate, dispatch]);

  // Update loading state based on Redux state
  useEffect(() => {
    if (!bookingDetailsLoading && bookingDetails) {
      setLoading(false);
      // Verify data structure
      if (bookingDetails.GetBookingDetailResult?.Itinerary) {
        console.log('Booking details loaded successfully');
      } else {
        console.warn('Booking details structure unexpected:', bookingDetails);
      }
    }
  }, [bookingDetailsLoading, bookingDetails]);

  // Format date
  const formatDate = (dateString) => {
    try {
      if (!dateString) return '';
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '';
      return date.toLocaleDateString('en-IN', { 
        day: '2-digit', 
        month: '2-digit',
        year: 'numeric'
      });
    } catch (error) {
      return '';
    }
  };

  // Format time
  const formatTime = (dateString) => {
    try {
      if (!dateString) return '';
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '';
      return date.toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
    } catch (error) {
      return '';
    }
  };

  // Format date and time together
  const formatDateTime = (dateString) => {
    try {
      if (!dateString) return '';
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '';
      return `${date.toLocaleDateString('en-IN', { 
        day: '2-digit', 
        month: '2-digit',
        year: 'numeric'
      })}, ${date.toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      })}`;
    } catch (error) {
      return '';
    }
  };

  // Generate random booking ID
  const generateBookingId = () => {
    return 'BUS' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  // Get booking details from API response only (no local storage)
  const getBookingDetails = () => {
    console.log('Raw bookingDetails from Redux:', bookingDetails);
    if (bookingDetails && bookingDetails.GetBookingDetailResult && bookingDetails.GetBookingDetailResult.Itinerary) {
      const itinerary = bookingDetails.GetBookingDetailResult.Itinerary;
      console.log('Extracted Itinerary:', itinerary);
      return itinerary;
    }
    console.warn('Booking details not found in expected structure');
    return {};
  };

  // Get all data from booking details API only (no local storage)
  const getTravelName = () => {
    const details = getBookingDetails();
    return details.TravelName || '';
  };

  const getBusType = () => {
    const details = getBookingDetails();
    return details.BusType || '';
  };

  const getBusId = () => {
    const details = getBookingDetails();
    return details.BusId || null;
  };

  const getTicketPrice = () => {
    const details = getBookingDetails();
    return details.InvoiceAmount ||  0;
  };

  const getOriginCity = () => {
    const details = getBookingDetails();
    return details.Origin || '';
  };

  const getDestinationCity = () => {
    const details = getBookingDetails();
    return details.Destination || '';
  };

  const getBoardingPoint = () => {
    const details = getBookingDetails();
    return details.BoardingPointdetails?.CityPointName || 
           details.BoardingPointdetails?.CityPointLocation || '';
  };

  const getDroppingPoint = () => {
    const details = getBookingDetails();
    // API response may not have DroppingPointdetails, use Destination as fallback
    return details.DroppingPointdetails?.CityPointName || 
           details.DroppingPointdetails?.CityPointLocation || 
           details.Destination || '';
  };

  const getPassengerDetails = () => {
    const details = getBookingDetails();
    return details.Passenger || [];
  };

  const getContactInfo = () => {
    const details = getBookingDetails();
    return {
      phone1: details.BoardingPointdetails?.CityPointContactNumber || '',
      phone2: '',
      landmark: details.BoardingPointdetails?.CityPointLandmark || ''
    };
  };

  const getTicketNo = () => {
    const details = getBookingDetails();
    return details.TicketNo || '';
  };

  const getPNR = () => {
    const details = getBookingDetails();
    return details.TravelOperatorPNR || '';
  };

  const getDepartureTime = () => {
    const details = getBookingDetails();
    return details.DepartureTime || '';
  };

  const getArrivalTime = () => {
    const details = getBookingDetails();
    return details.ArrivalTime || '';
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
                    <i className="fas fa-exclamation-triangle text-danger" style={{ fontSize: '64px' }}></i>
                    <h3 className="mt-3 mb-3">Error Loading Booking</h3>
                    <p className="text-muted">{error}</p>
                    <button 
                      className="btn btn-primary mt-3"
                      onClick={() => navigate('/bus-list')}
                    >
                      Go to Bus Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterDark />
      </div>
    );
  }

  if (loading || bookingDetailsLoading) {
    return (
      <div>
        <ToastContainer />
        <Header02 />
        <div className="clearfix" />
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
          <div className="text-center">
            <div className="spinner-border text-primary mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <h5>Loading confirmation details...</h5>
          </div>
        </div>
        <FooterDark />
      </div>
    );
  }

  const contactInfo = getContactInfo();

  return (
    <div>
      <ToastContainer />
      
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      
      <div id="main-wrapper">
        <Header02 />
        <div className="clearfix" />
        
        <section className="pt-4 gray-simple position-relative">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10 col-md-12">
                {/* Ticket Information Header Banner */}
                <div className="ticket-header-banner mb-4">
                  <div className="banner-top">
                    <div className="banner-left">
                      <div className="logo-container">
                        {/* <i className="fas fa-bus logo-icon"></i> */}
                        <span className="logo-text"><img src={logo} alt="" width={200} height={60} /></span>
                      </div>
                    </div>
                    <div className="banner-center">
                      <h2 className="banner-title">SeeMyTrip Ticket Information</h2>
                      <p className="banner-route">
                        {getOriginCity()}-{getDestinationCity()} on {formatDate(getDepartureTime())}
                      </p>
                    </div>
                    <div className="banner-right">
                      <div className="status-badge">
                        <i className="fas fa-star status-icon"></i>
                        <span className="status-text">Confirmed</span>
                      </div>
                    </div>
                  </div>
                  <div className="banner-divider"></div>
                  <div className="banner-bottom">
                    <div className="seat-confirmation-section">
                      <h3 className="seat-confirmation-title">Your Seat is Confirmed!</h3>
                      <p className="seat-confirmation-subtitle">Your booking has been successfully confirmed and your seat is reserved</p>
                    </div>
                    <div className="banner-divider"></div>
                    <div className="ticket-details">
                      <span className="ticket-info">
                        <strong>Ticket Number:</strong> {getTicketNo() || 'N/A'}
                      </span>
                      <span className="separator">|</span>
                      <span className="ticket-info">
                        <strong>PNR No:</strong> {getPNR() || 'N/A'}
                      </span>
                      <span className="separator">|</span>
                      <span className="ticket-info">
                        <strong>BUS ID:</strong> {getBusId() || 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>



                {/* Ticket Details Card */}
                <div className="card shadow-sm border-0">
                  <div className="card-header bg-primary text-white text-center py-3">
                    <h4 className="mb-0  fs-5 text-white">Ticket Details</h4>
                  </div>
                  <div className="card-body p-0">
                    
                    {/* Journey Date and Time */}
                    <div className="border-bottom border-1 border-dashed p-4">
                      <div className="d-flex align-items-center mb-3">
                        <i className="fas fa-calendar-alt text-primary me-3 fs-5"></i>
                        <span className="fw-semibold text-dark fs-6">Journey Date and Time</span>
                      </div>
                      <div className="ms-5">
                        <span className="text-muted">{formatDateTime(getDepartureTime())}</span>
                      </div>
                    </div>

                    {/* Travels and Ticket Price - Side by Side */}
                    <div className="border-bottom border-1 border-dashed p-4">
                      <div className="row g-0">
                        {/* Travels */}
                        <div className="col-md-6 pe-md-3">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-bus text-primary me-3 fs-5"></i>
                            <span className="fw-semibold text-dark fs-6">Travels</span>
                          </div>
                          <div className="ms-5">
                            <div className="fw-semibold text-dark mb-1">
                              {getTravelName()}
                            </div>
                            <div className="text-muted small mb-1">
                              {getBusType()}
                            </div>
                            {getBusId() && (
                              <div className="text-muted small">
                                Bus ID: {getBusId()}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Ticket Price */}
                        <div className="col-md-6 ps-md-3 border-start border-1">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-tag text-primary me-3 fs-5"></i>
                            <span className="fw-semibold text-dark fs-6">Ticket Price</span>
                          </div>
                          <div className="ms-5">
                            <div className="fw-bold text-success fs-5 mb-1">
                              Rs. {getTicketPrice() ? getTicketPrice().toFixed(2) : ''}
                            </div>
                            <div className="text-muted small">(inclusive of GST)</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ticket Number and Travel Operator PNR - Side by Side */}
                    <div className="border-bottom border-1 border-dashed p-4">
                      <div className="row g-0">
                        {/* Ticket Number */}
                        <div className="col-md-6 pe-md-3">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-ticket-alt text-primary me-3 fs-5"></i>
                            <span className="fw-semibold text-dark fs-6">Ticket Number</span>
                          </div>
                          <div className="ms-5">
                            <div className="fw-bold text-dark fs-5 mb-1">
                              {getTicketNo() || 'N/A'}
                            </div>
                            <div className="text-muted small">Your unique ticket identifier</div>
                          </div>
                        </div>
                        
                        {/* Travel Operator PNR */}
                        <div className="col-md-6 ps-md-3 border-start border-1">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-receipt text-primary me-3 fs-5"></i>
                            <span className="fw-semibold text-dark fs-6">Travel Operator PNR</span>
                          </div>
                          <div className="ms-5">
                            <div className="fw-bold text-dark fs-5 mb-1">
                              {getPNR() || 'N/A'}
                            </div>
                            <div className="text-muted small">Operator's booking reference</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Boarding Point and Dropping Point - Side by Side */}
                    <div className="border-bottom border-1 border-dashed p-4">
                      <div className="row g-0">
                        {/* Boarding Point */}
                        <div className="col-md-6 pe-md-3">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-map-marker-alt text-primary me-3 fs-5"></i>
                            <span className="fw-semibold text-dark fs-6">Boarding Point</span>
                          </div>
                          <div className="ms-5">
                            <div className="fw-semibold text-dark mb-2">
                              {getOriginCity()}
                            </div>
                            <div className="text-muted small mb-1">
                              {getBoardingPoint()}
                            </div>
                            {contactInfo.landmark && (
                              <div className="text-muted small mb-2">Landmark: {contactInfo.landmark}</div>
                            )}
                            {(contactInfo.phone1 || contactInfo.phone2) && (
                              <div className="mt-2">
                                {contactInfo.phone1 && (
                                  <span className="text-primary fw-medium me-3 small">{contactInfo.phone1}</span>
                                )}
                                {contactInfo.phone2 && (
                                  <span className="text-primary fw-medium small">{contactInfo.phone2}</span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Dropping Point */}
                        <div className="col-md-6 ps-md-3 border-start border-1">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-map-marker-alt text-primary me-3 fs-5"></i>
                            <span className="fw-semibold text-dark fs-6">Dropping Point</span>
                          </div>
                          <div className="ms-5">
                            <div className="fw-semibold text-dark mb-2">
                              {getDestinationCity()}
                            </div>
                            <div className="text-muted small mb-1">
                              {getDroppingPoint()}
                            </div>
                            <div className="text-muted small fw-medium mt-2">
                              DROPPING DATE & TIME: {formatDateTime(getArrivalTime())}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Passenger Details */}
                    <div className="p-4">
                      <div className="d-flex align-items-center mb-3">
                        <i className="fas fa-user text-primary me-3 fs-5"></i>
                        <span className="fw-semibold text-dark fs-6">Passenger Details</span>
                      </div>
                      <div className="ms-5">
                        {getPassengerDetails().length > 0 ? (
                          getPassengerDetails().map((passenger, index) => (
                            <div key={index} className="d-flex justify-content-between align-items-start py-3 border-bottom border-light">
                              <div className="flex-grow-1">
                                <div className="fw-semibold text-dark mb-1">
                                  {passenger.FirstName} {passenger.LastName}
                                </div>
                                <div className="text-muted small mb-2">
                                  {passenger.Age}Yrs, {
                                    (() => {
                                      if (passenger.Gender === 1 || passenger.Gender === '1' || passenger.Gender === 'MALE' || passenger.Gender === 'male') {
                                        return 'MALE';
                                      } else if (passenger.Gender === 2 || passenger.Gender === '2' || passenger.Gender === 'FEMALE' || passenger.Gender === 'female') {
                                        return 'FEMALE';
                                      } else {
                                        return 'OTHER';
                                      }
                                    })()
                                  }
                                </div>
                                <div className="mt-2">
                                  <div className="d-flex align-items-center mb-1">
                                    <i className="fas fa-phone-alt text-primary me-2 small"></i>
                                    <span className="text-muted small">{passenger.Phoneno || 'N/A'}</span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <i className="fas fa-envelope text-primary me-2 small"></i>
                                    <span className="text-muted small">{passenger.Email || 'N/A'}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-danger fw-semibold small ms-3">
                                Seat No: {passenger.Seat?.SeatName || 'DU' + (index + 1)}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center text-muted py-4">
                            <i className="fas fa-user-slash mb-3" style={{ fontSize: '2rem' }}></i>
                            <p>No passenger details available</p>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Action Buttons */}
                
                <div className="text-center mb-5 mt-4">
                  <button 
                    className="btn btn-primary btn-lg me-3"
                    onClick={() => window.print()}
                  >
                    <i className="fas fa-print me-2"></i>
                    Print Ticket
                  </button>
                  <button 
                    className="btn btn-outline-primary btn-lg me-3"
                    onClick={() => navigate('/my-booking')}
                  >
                    <i className="fas fa-list me-2"></i>
                    View My Bookings
                  </button>
                  <button 
                    className="btn btn-outline-success btn-lg"
                    onClick={() => navigate('/home-bus')}
                  >
                    <i className="fas fa-home me-2"></i>
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterDark />
    </div>

      <style jsx>{`
        /* Custom styles for dotted borders and mobile responsiveness */
        .border-dashed {
          border-style: dashed !important;
          border-color: #e9ecef !important;
        }
        
        .border-start {
          border-color: #e9ecef !important;
        }
        
        /* Content fade-in animation */
        .fade-in-content {
          animation: content-fade-in 0.8s ease-in-out forwards;
        }
        
        @keyframes content-fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Success card animations */
        .success-card {
          animation: card-bounce 0.6s ease-out 0.8s both;
        }
        
        @keyframes card-bounce {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(50px);
          }
          50% {
            transform: scale(1.05) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .success-icon {
          animation: icon-pulse 2s ease-in-out infinite 1.4s;
        }
        
        @keyframes icon-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        .booking-id {
          animation: slide-in 0.5s ease-out 1.6s both;
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @media print {
          .btn, .preloader, #preloader {
            display: none !important;
          }
          
          .card {
            box-shadow: none !important;
            border: 1px solid #000 !important;
          }
        }
        
        @media (max-width: 768px) {
          .border-start {
            border-left: none !important;
            border-top: 1px solid #e9ecef !important;
            padding-top: 1rem !important;
            margin-top: 1rem !important;
          }
          
          .pe-md-3 {
            padding-right: 0 !important;
          }
          
          .ps-md-3 {
            padding-left: 0 !important;
          }
        }

        /* Ticket Header Banner Styles */
        .ticket-header-banner {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(30, 58, 138, 0.3);
          color: white;
        }

        .banner-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          position: relative;
        }

        .banner-left {
          flex: 1;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-icon {
          font-size: 1.8rem;
          color: #fbbf24;
        }

        .logo-text {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
        }

        .banner-center {
          flex: 2;
          text-align: center;
        }

        .banner-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: white;
        }

        .banner-route {
          font-size: 1rem;
          margin: 0;
          opacity: 0.9;
          color: #e5e7eb;
        }

        .banner-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .status-icon {
          color: #fbbf24;
          font-size: 0.9rem;
        }

        .status-text {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .banner-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          margin: 0 2rem;
        }

        .banner-bottom {
          padding: 1rem 2rem;
          text-align: center;
        }

        .ticket-details {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .ticket-info {
          font-size: 1rem;
          color: white;
        }

        .separator {
          color: rgba(255, 255, 255, 0.5);
          font-weight: 300;
        }

        /* Mobile responsive styles for banner */
        @media (max-width: 768px) {
          .banner-top {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }

          .banner-left, .banner-center, .banner-right {
            flex: none;
            width: 100%;
          }

          .banner-center {
            order: 1;
          }

          .banner-left {
            order: 2;
          }

          .banner-right {
            order: 3;
          }

          .banner-title {
            font-size: 1.4rem;
          }

          .banner-route {
            font-size: 0.9rem;
          }

          .banner-bottom {
            padding: 1rem;
          }

          .ticket-details {
            flex-direction: column;
            gap: 0.5rem;
          }

          .separator {
            display: none;
          }
        }

        /* Seat Confirmation Section Styles */
        .seat-confirmation-section {
          text-align: center;
          padding: 1.5rem 0;
        }

        .seat-confirmation-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          margin: 0 0 0.5rem 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .seat-confirmation-subtitle {
          font-size: 1rem;
          color: #e5e7eb;
          margin: 0;
          opacity: 0.9;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .seat-confirmation-section {
            padding: 1rem 0;
          }
          
          .seat-confirmation-title {
            font-size: 1.5rem;
          }
          
          .seat-confirmation-subtitle {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Bus_Comfirmation_Page;
