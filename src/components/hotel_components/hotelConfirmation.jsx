import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Header02 from "../header02";
import { fetchHotelBookedDetail } from "../../store/Actions/hotelActions";
import { selectHotelBookedDetailsData } from "../../store/Selectors/hotelSelectors";
import Lottie from "lottie-react";
import successAnimation from "../../assets/animations/success.json";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

const HotelConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookedDetails = useSelector(selectHotelBookedDetailsData);
  const [booking, setBooking] = useState(null);
  const { ReservationId } = location.state || {};
  const reservationId = ReservationId || "61211";
  const [width, height] = useWindowSize();
  const [expandedTravelers, setExpandedTravelers] = useState({});

  // Mock data for demonstration
  const mockTravelers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      mobile: "+91 98765 43210"
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@email.com",
      mobile: "+91 98765 43211"
    }
  ];

  const mockPaymentDetails = {
    actualPrice: 15000,
    offer: -2000,
    tax: 1500,
    sgst: 750,
    totalPrice: 14250
  };

  useEffect(() => {
    if (reservationId) {
      const BookedDetailsRequest = {
        ReservationId: reservationId,
        Credential: null,
      };
      dispatch(fetchHotelBookedDetail(BookedDetailsRequest));
    }
  }, [reservationId, dispatch]);

  useEffect(() => {
    if (bookedDetails?.Bookings?.length > 0) {
      setBooking(bookedDetails.Bookings[0]);
    }
  }, [bookedDetails]);

  const toggleTravelerDetails = (travelerId) => {
    setExpandedTravelers(prev => ({
      ...prev,
      [travelerId]: !prev[travelerId]
    }));
  };

  if (!bookedDetails || !booking) {
    return (
      <div className="gray-simple min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted mt-3">Loading booking details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header02 />
      <Confetti width={width} height={height} numberOfPieces={150} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="gray-simple py-4"
      >
        <div className="container">
          {/* Success Animation and Header */}
          <div className="text-center mb-4">
            {/* <Lottie animationData={successAnimation} loop={false} style={{ height: 120, width: 120 }} /> */}
            <h1 className="display-4 fw-bold text-danger mb-3">
              Booking Confirmation
            </h1>
            <p className="text-muted fs-5">Your hotel reservation has been successfully confirmed</p>
          </div>

          {/* Main Container */}
          <div className="card shadow-lg border-0">
            {/* Reservation Details Header */}
            <div className="card-header bg-danger text-white py-3">
            <div className="w-100 d-flex justify-content-between align-items-start flex-wrap mb-3">
  {/* Left Side */}
 

  {/* Right Side */}
  <div className="text-end">
    <h2 className="h5 fw-bold mb-0">{bookedDetails?.ReservationName || "Hotel Booking"}</h2>
  </div>

  <div>
    <p className="mb-1 small text-white">
      <strong>Reservation ID:</strong> {reservationId}
    </p>
    <p className="mb-0 small text-white">
      <strong>Booking Ref:</strong> {bookedDetails?.ReservationReference || reservationId}
    </p>
  </div>
</div>

            </div>

            <div className="card-body p-4">
              {/* Hotel Details Section */}
              <section className="mb-4">
                <h3 className="h4 fw-bold text-dark mb-3">
                  <i className="fas fa-hotel text-danger me-2"></i>
                  Hotel Details
                </h3>
                <div className="row">
                  {/* Hotel Image - 40% width */}
                  <div className="col-lg-5 mb-3">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="bg-gradient-to-br from-danger to-danger-subtle rounded-top h-100 d-flex align-items-center justify-content-center" style={{minHeight: '180px'}}>
                        <div className="text-center text-white">
                          <i className="fas fa-hotel fa-3x mb-3"></i>
                          <p className="h5 fw-bold">{booking?.Booking?.PartnerName || "Hotel Name"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hotel Content - 60% width */}
                  <div className="col-lg-7">
                    <div className="row g-2">
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body py-2">
                            <h6 className="text-muted mb-1 small">Hotel Name</h6>
                            <p className="fw-bold mb-0 small">{booking?.Booking?.PartnerName || "Hotel Name"}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body py-2">
                            <h6 className="text-muted mb-1 small">Check-in</h6>
                            <p className="fw-bold mb-0 small">{booking?.Booking?.CheckIn || "Not specified"}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body py-2">
                            <h6 className="text-muted mb-1 small">Check-out</h6>
                            <p className="fw-bold mb-0 small">{booking?.Booking?.CheckOut || "Not specified"}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body py-2">
                            <h6 className="text-muted mb-1 small">Rooms</h6>
                            <p className="fw-bold mb-0 small">{booking?.Booking?.RoomCount || "1"}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body py-2">
                            <h6 className="text-muted mb-1 small">Guests</h6>
                            <p className="fw-bold mb-0 small">{booking?.Booking?.GuestCount || "2"}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body py-2">
                            <h6 className="text-muted mb-1 small">Status</h6>
                            <span className="badge bg-success small">✅ Confirmed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Traveler Details Section */}
              <section className="mb-4">
                <h3 className="h4 fw-bold text-dark mb-3">
                  <i className="fas fa-users text-danger me-2"></i>
                  Traveler Details
                </h3>
                <div className="row">
                  {mockTravelers.map((traveler, index) => (
                    <div key={traveler.id} className="col-12 mb-2">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body py-2">
                          {/* Traveler Header Row */}
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <h6 className="fw-bold text-dark mb-0">Traveler {traveler.id}</h6>
                            </div>
                            <div className="col-md-9">
                              {/* Empty space for traveler details when collapsed */}
                            </div>
                            <div className="col-md-1">
                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => toggleTravelerDetails(traveler.id)}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#traveler-${traveler.id}`}
                                aria-expanded="false"
                                aria-controls={`traveler-${traveler.id}`}
                              >
                                <i className={`fas fa-chevron-${expandedTravelers[traveler.id] ? 'up' : 'down'}`}></i>
                              </button>
                            </div>
                          </div>
                          
                          {/* Collapsible Details */}
                          <div className={`collapse ${expandedTravelers[traveler.id] ? 'show' : ''}`} id={`traveler-${traveler.id}`}>
                            <div className="border-top mt-3 pt-3">
                              <div className="row g-3">
                                <div className="col-md-4">
                                  <small className="text-muted d-block">Name</small>
                                  <span className="fw-bold">{traveler.name}</span>
                                </div>
                                <div className="col-md-4">
                                  <small className="text-muted d-block">Email</small>
                                  <span>{traveler.email}</span>
                                </div>
                                <div className="col-md-4">
                                  <small className="text-muted d-block">Mobile</small>
                                  <span>{traveler.mobile}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Payment Summary Section */}
              <section className="mb-4">
                <h3 className="h4 fw-bold text-dark mb-3">
                  <i className="fas fa-credit-card text-danger me-2"></i>
                  Payment Summary
                </h3>
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <div className="row g-2">
                      <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                          <span className="text-muted small">Actual Price:</span>
                          <span className="fw-bold">₹{mockPaymentDetails.actualPrice.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                          <span className="text-muted small">Offer:</span>
                          <span className="fw-bold text-success">₹{mockPaymentDetails.offer.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                          <span className="text-muted small">Tax & GST:</span>
                          <span className="fw-bold">₹{mockPaymentDetails.tax.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                          <span className="text-muted small">SGST:</span>
                          <span className="fw-bold">₹{mockPaymentDetails.sgst.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center py-3 bg-light rounded px-3">
                          <span className="h5 fw-bold text-dark mb-0">Total Price:</span>
                          <span className="h4 fw-bold text-danger mb-0">₹{mockPaymentDetails.totalPrice.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Action Buttons */}
              <section className="row g-3">
                <div className="col-md-6">
                  <button
                    onClick={() => navigate("/home-hotel")}
                    className="btn btn-danger btn-lg w-100 fw-bold"
                  >
                    <i className="fas fa-home me-2"></i>
                    Back to Hotel Home
                  </button>
                </div>
                <div className="col-md-6">
                  <button
                    onClick={() => navigate("/my-bookings")}
                    className="btn btn-outline-secondary btn-lg w-100 fw-bold"
                  >
                    <i className="fas fa-list me-2"></i>
                    View My Bookings
                  </button>
                </div>
              </section>
            </div>
          </div>

          {/* Additional Information */}
          <div className="card mt-3 border-0 shadow-sm">
            <div className="card-body">
              <h4 className="h5 fw-bold text-dark mb-3">
                <i className="fas fa-info-circle text-danger me-2"></i>
                Important Information
              </h4>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Carry a valid ID proof for check-in
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Standard check-in time is 2:00 PM onwards
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Check-out time is 11:00 AM
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      You will receive an email confirmation shortly
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HotelConfirmation;
