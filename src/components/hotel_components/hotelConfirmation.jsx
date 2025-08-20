import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import Header02 from "../header02";
import {
  fetchHotelBookedDetail,
  fetchHotelsImages,
} from "../../store/Actions/hotelActions";
import {
  selectHotelBookedDetailsData,
  selectHotelsImages,
  selectIsGetBookingDetails,
} from "../../store/Selectors/hotelSelectors";
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
  const hotelImages = useSelector(selectHotelsImages);
  const [booking, setBooking] = useState(null);
  const {
    ReservationId,
    totalPrice: locationTotalPrice,
    travelers: locationTravelers,
  } = location.state || {};
  // const reservationId = ReservationId;
  const [width, height] = useWindowSize();
  const [travelers, setTravelers] = useState([]);
  const [hotelImageUrl, setHotelImageUrl] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [hotelData, setHotelData] = useState(null);
  const calledOnce = useRef(false);

  useEffect(() => {
    if (ReservationId && !calledOnce.current) {
      const BookedDetailsRequest = {
        ReservationId,
        Credential: null,
      };
      dispatch(fetchHotelBookedDetail(BookedDetailsRequest));
      calledOnce.current = true; // prevent second call
    }
  }, [ReservationId, dispatch]);

  useEffect(() => {
    if (bookedDetails?.Bookings?.length > 0) {
      setBooking(bookedDetails.Bookings[0]);
    }
  }, [bookedDetails]);

  useEffect(() => {
    // Get travelers from multiple sources
    const storedTravelers = localStorage.getItem(
      "hotelTravelersForConfirmation"
    );
    const confirmationData = localStorage.getItem("hotelConfirmationData");

    if (locationTravelers && locationTravelers.length > 0) {
      setTravelers(locationTravelers);
    } else if (storedTravelers) {
      setTravelers(JSON.parse(storedTravelers));
    } else if (confirmationData) {
      const parsed = JSON.parse(confirmationData);
      setTravelers(parsed.travelers || []);
    }
  }, [locationTravelers]);

  useEffect(() => {
    // Get hotel data from localStorage
    const selectedHotelBooking = localStorage.getItem("selectedHotelBooking");
    if (selectedHotelBooking) {
      setHotelData(JSON.parse(selectedHotelBooking));
    }
  }, []);

  useEffect(() => {
    if (booking?.Booking?.HotelProviderSearchId) {
      dispatch(fetchHotelsImages(booking.Booking.HotelProviderSearchId));
    }
  }, [booking, dispatch]);

  useEffect(() => {
    // Get hotel image from multiple sources
    const fallbackImage =
      hotelData?.image || booking?.Booking?.HotelImage || null;
    if (hotelImages?.Gallery && hotelImages.Gallery.length > 0) {
      setHotelImageUrl(hotelImages.Gallery[0].ImageUrl);
    } else if (fallbackImage) {
      setHotelImageUrl(fallbackImage);
    } else {
      setHotelImageUrl(null);
    }
  }, [hotelImages, booking, hotelData]);

  useEffect(() => {
    // Get total price from multiple sources
    const storedTotalPrice = localStorage.getItem("hotelTotalPrice");
    const confirmationData = localStorage.getItem("hotelConfirmationData");

    if (locationTotalPrice) {
      setTotalPrice(locationTotalPrice);
    } else if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice));
    } else if (confirmationData) {
      const parsed = JSON.parse(confirmationData);
      setTotalPrice(parsed.totalPrice || 0);
    } else if (hotelData?.roomPrice) {
      setTotalPrice(hotelData.roomPrice);
    } else if (booking?.Booking?.PaymentDetails?.totalPrice) {
      setTotalPrice(booking.Booking.PaymentDetails.totalPrice);
    } else {
      setTotalPrice(0);
    }
  }, [locationTotalPrice, booking, hotelData]);

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
            <p className="text-muted fs-5">
              Your hotel reservation has been successfully confirmed
            </p>
          </div>

          {/* Main Container */}
          <div className="card shadow-lg border-0">
            {/* Reservation Details Header */}
            <div className="card-header bg-danger text-white py-3">
              <div className="w-100 d-flex justify-content-between align-items-start flex-wrap mb-3">
                <div className="text-end">
                  <h2 className="h5 fw-bold mb-0">
                    {bookedDetails?.ReservationName || "Hotel Booking"}
                  </h2>
                </div>
                <div>
                  {/* <p className="mb-1 small text-white">
                    <strong>Reservation ID:</strong> {reservationId}
                  </p> */}
                  <p className="mb-0 small text-white">
                    <strong>Booking Ref:</strong>{" "}
                    {bookedDetails?.ReservationReference}
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
                      <div
                        className="bg-gradient-to-br from-danger to-danger-subtle rounded-top h-100 d-flex align-items-center justify-content-center"
                        style={{ minHeight: "200px" }}
                      >
                        {hotelImageUrl ? (
                          <img
                            src={hotelImageUrl}
                            alt={
                              hotelData?.hotelName ||
                              booking?.Booking?.PartnerName ||
                              "Hotel"
                            }
                            className="img-fluid rounded"
                            style={{
                              maxHeight: 200,
                              objectFit: "cover",
                              width: "100%",
                            }}
                          />
                        ) : (
                          <div className="text-center text-white">
                            <i className="fas fa-hotel fa-3x mb-3"></i>
                            <p className="h5 fw-bold">
                              {hotelData?.hotelName ||
                                booking?.Booking?.PartnerName ||
                                "Hotel Name"}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hotel Content - 60% width */}
                  <div className="col-lg-7">
                    <div className="row g-2">
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body py-2">
                            <h6 className="text-muted mb-1 small">
                              Hotel Name
                            </h6>
                            <p className="fw-bold mb-0 small">
                              {hotelData?.hotelName ||
                                booking?.Booking?.PartnerName ||
                                "Hotel Name"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body py-2">
                            <h6 className="text-muted mb-1 small">Check-in</h6>
                            <p className="fw-bold mb-0 small">
                              {hotelData?.checkInDate ||
                                booking?.Booking?.CheckIn ||
                                "Not specified"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body py-2">
                            <h6 className="text-muted mb-1 small">Check-out</h6>
                            <p className="fw-bold mb-0 small">
                              {hotelData?.checkOutDate ||
                                booking?.Booking?.CheckOut ||
                                "Not specified"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body py-2">
                            <h6 className="text-muted mb-1 small">Rooms</h6>
                            <p className="fw-bold mb-0 small">
                              {hotelData?.rooms ||
                                booking?.Booking?.RoomCount ||
                                "1"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body py-2">
                            <h6 className="text-muted mb-1 small">Guests</h6>
                            <p className="fw-bold mb-0 small">
                              {hotelData?.adults ||
                                booking?.Booking?.GuestCount ||
                                "2"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body py-2">
                            <h6 className="text-muted mb-1 small">Status</h6>
                            <span className="badge bg-success small">
                              ✅ Confirmed
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Traveler Details Section - Column Format */}
              <section className="mb-4">
                <h3 className="h4 fw-bold text-dark mb-3">
                  <i className="fas fa-users text-danger me-2"></i>
                  Traveler Details
                </h3>
                <div className="d-flex flex-column">
                  {travelers.length === 0 ? (
                    <div className="alert alert-warning">
                      No travelers found for this booking.
                    </div>
                  ) : (
                    travelers.map((traveler, index) => (
                      <div key={traveler.id || index} className="mb-2">
                        <div className="border rounded p-2 h-100">
                          <div className="fw-bold text-dark mb-1">
                            Traveler {index + 1}{" "}
                            {traveler.PaxType === "Child"
                              ? "(Child)"
                              : "(Adult)"}
                          </div>
                          <div>
                            <small className="text-muted d-block">Name</small>
                            <span className="fw-bold">
                              {traveler.Forename} {traveler.Surname}
                            </span>
                          </div>
                          <div>
                            <small className="text-muted d-block">Email</small>
                            <span>{traveler.PaxEmail}</span>
                          </div>
                          <div>
                            <small className="text-muted d-block">Mobile</small>
                            <span>{traveler.PaxMobile}</span>
                          </div>
                          <div>
                            <small className="text-muted d-block">Room</small>
                            <span>Room {traveler.RoomID}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </section>

              {/* Payment Summary Section - Only Total Price */}
              <section className="mb-4">
                <h3 className="h4 fw-bold text-dark mb-3">
                  <i className="fas fa-credit-card text-danger me-2"></i>
                  Payment Summary
                </h3>
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center py-3 bg-light rounded px-3">
                      <span className="h5 fw-bold text-dark mb-0">
                        Total Price:
                      </span>
                      <span className="h4 fw-bold text-danger mb-0">
                        ₹{totalPrice ? totalPrice.toLocaleString() : "N/A"}
                      </span>
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
