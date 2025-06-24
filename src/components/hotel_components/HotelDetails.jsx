import { useState, useMemo, useEffect } from "react";
import {
  FaWifi,
  FaConciergeBell,
  FaGlassCheers,
  FaUtensils,
  FaShoppingBag,
  FaSuitcaseRolling,
  FaShower,
  FaClock,
  FaChair,
  FaTshirt,
  FaUsers,
  FaWheelchair,
  FaTicketAlt,
  FaSmoking,
  FaNewspaper,
  FaTv,
  FaLock,
  FaBed,
  FaCoffee,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaShareAlt,
  FaMapMarkerAlt,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaBath,
} from "react-icons/fa";


import { Button } from "../../components/ui/button";
import { ImageComponent } from "../../components/ui/image";
import { useLocation } from 'react-router-dom';
import { HotelDescription } from "../../components/ui/description";
// import { DialogContent } from "../../components/ui/dialog";
import { useNavigate } from 'react-router-dom';

const amenityIconMap = {
  "Free WiFi": FaWifi,
  "Concierge services": FaConciergeBell,
  "Nightclub": FaGlassCheers,
  "Restaurant": FaUtensils,
  "Elevator/lift": FaSuitcaseRolling,
  "Shopping on site": FaShoppingBag,
  "Porter/bellhop": FaSuitcaseRolling,
  "Roll-in shower": FaShower,
  "Luggage storage": FaSuitcaseRolling,
  "Express check-in": FaClock,
  "Outdoor furniture": FaChair,
  "24-hour front desk": FaClock,
  "Laundry facilities": FaTshirt,
  "Multilingual staff": FaUsers,
  "Accessible bathroom": FaWheelchair,
  "Coffee shop or café": FaCoffee,
  "In-room accessibility": FaWheelchair,
  "Tours/ticket assistance": FaTicketAlt,
  "Designated smoking areas": FaSmoking,
  "Free newspapers in lobby": FaNewspaper,
  "Number of bars/lounges -": FaGlassCheers,
  "Coffee/tea in common areas": FaCoffee,
  "Television in common areas": FaTv,
  "Dry cleaning/laundry service": FaTshirt,
  "Safe-deposit box at front desk": FaLock,
  "Breakfast available (surcharge)": FaUtensils,
  "Wheelchair accessible path of travel": FaWheelchair,
};



export default function HotelDetails() {
  const location = useLocation();
  const { cityId, checkInDate, checkOutDate, Rooms, adults, children } = location.state || {};
  const navigate = useNavigate();

  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Tab state: 0=Overview,1=Amenities,2=Rooms,3=Reviews
  const [activeTab, setActiveTab] = useState(0);

  // Room selection
  const [selectedRoomId, setSelectedRoomId] = useState();

  // Booking form state
  const [checkIn, setCheckIn] = useState(checkInDate);
  const [checkOut, setCheckOut] = useState(checkOutDate);
  const [roomCount, setRoomCount] = useState(Rooms);
  const [guestCount, setGuestCount] = useState(adults + children);

  const { state } = useLocation();
  const { details } = state || {};
  console.log("HotelDetails component loaded with details:", details);

  // Use images from details.HotelDetail.HotelImages or fallback to empty array
  const images = details.HotelDetail?.HotelImages || [];

  // Carousel controls
  const nextImage = () =>
    setCurrentImageIndex((i) => (i + 1) % (images.length || 1));
  const prevImage = () =>
    setCurrentImageIndex((i) => (i - 1 + (images.length || 1)) % (images.length || 1));

  // Room selection logic
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hotelRooms = details.HotelDetail?.HotelRooms || [];

  // Set default selected room id only once when hotelRooms change and selectedRoomId is not set
  useEffect(() => {
    if (!selectedRoomId && hotelRooms.length > 0) {
      setSelectedRoomId(hotelRooms[0].id);
    }
  }, [selectedRoomId, hotelRooms]);

  const selectedRoom = useMemo(
    () => hotelRooms.find((r) => r.id === selectedRoomId),
    [selectedRoomId, hotelRooms]
  );

  const handleNavigateToImages = (HotelProviderSearchId) => {
    navigate('/hotel-images', {
      state: { HotelProviderSearchId }
    });
  };

  // Price calculation
  const nights =
    (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
  const roomRate = selectedRoom ? selectedRoom.ServicePrice || 0 : 0;
  const subtotal = nights * roomRate * roomCount;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + tax;

  return (
    <div className="bg-light min-vh-100">
      {/* Nav */}
      <nav className="navbar navbar-light bg-white shadow-sm border-bottom">
        <div className="container d-flex justify-content-between">
          <Button variant="link" onClick={() => navigate(-1)}>
            <FaChevronLeft /> Back to Search
          </Button>
          <div>
            <Button variant="link" className="me-2">
              <FaShareAlt /> Share
            </Button>
            <Button variant="link">
              <FaHeart /> Save
            </Button>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            {/* Header */}
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h1 className="mb-1">{details.HotelDetail?.HotelName}</h1>
                <p className="text-muted mb-2">
                  <FaMapMarkerAlt /> {details.HotelDetail?.HotelAddress.Address}
                </p>
                <div className="d-flex align-items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        details.HotelDetail?.TripAdvisorDetail?.Rating && i < Math.floor(details.HotelDetail.TripAdvisorDetail.Rating)
                          ? "text-warning me-1"
                          : "text-secondary me-1"
                      }
                    />
                  ))}
                  <small className="text-muted ms-2">5 Star Hotel</small>
                  {details.HotelDetail?.TripAdvisorDetail?.Rating && (
                    <span className="badge bg-success ms-3">
                      Excellent {details.HotelDetail.TripAdvisorDetail.Rating}/5
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Carousel */}
            <div className="position-relative mb-4">
              <ImageComponent
                src={images[currentImageIndex]}
                alt="Hotel"
                className="w-100 rounded"
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <button
                className="btn btn-secondary position-absolute top-50 start-0 translate-middle-y"
                onClick={prevImage}
                disabled={images.length === 0}
              >
                <FaChevronLeft />
              </button>
              <button
                className="btn btn-secondary position-absolute top-50 end-0 translate-middle-y"
                onClick={nextImage}
                disabled={images.length === 0}
              >
                <FaChevronRight />
              </button>
              <div className="position-absolute bottom-0 w-100 px-3 pb-3 d-flex justify-content-between align-items-end">
                <div>
                  {images.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      style={{
                        width: 8,
                        height: 8,
                        margin: "0 4px",
                        display: "inline-block",
                        borderRadius: "50%",
                        background:
                          idx === currentImageIndex ? "#fff" : "rgba(255,255,255,0.5)",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
                <Button variant="secondary"
                  onClick={() => { handleNavigateToImages(details.HotelDetail?.HotelProviderSearchId) }}
                  disabled={images.length === 0}
                >View All Photos</Button>
              </div>
            </div>

            {/* Tabs */}
            <ul className="nav nav-tabs mb-4">
              {["Overview", "Amenities", "Rooms", "Reviews"].map((tab, idx) => (
                <li className="nav-item" key={tab}>
                  <button
                    className={`nav-link ${activeTab === idx ? "active" : ""}`}
                    onClick={() => setActiveTab(idx)}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>

            {/* Tab Contents */}
            {activeTab === 0 && (
              // Overview
              <div className="mb-5">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h4>About This Hotel</h4>
                    <HotelDescription description={details.HotelDetail?.Description} />
                    <div className="row mt-4">
                      <div className="col-md-6">
                        <h5>Hotel Highlights</h5>
                        <ul className="list-unstyled">
                          {(details.HotelDetail?.Highlights || [
                            "Beachfront location",
                            "Full-service spa",
                            "Multiple restaurants",
                            "24/7 room service",
                          ]).map((item) => (
                            <li key={item}>
                              <FaCheckCircle className="text-success me-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h5>Nearby Attractions</h5>
                        <HotelDescription
                          description={details.HotelDetail?.Attractions?.join('')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="mb-5">
                {details.HotelDetail?.Amenities?.length > 0 ? (
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h4>Hotel Amenities</h4>
                      <div className="row">
                        {details.HotelDetail.Amenities.map((amen, i) => {
                          const IconComponent = amenityIconMap[amen.Description] || FaLock;
                          return (
                            <div key={i} className="col-6 col-md-3 mb-3">
                              <div className="d-flex align-items-center">
                                <IconComponent className="me-2" size={18} />
                                <span>{amen.Description}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted">No amenities listed.</p>
                )}
              </div>
            )}

            {activeTab === 2 && (
              // Rooms
              (hotelRooms.length > 0 ? (
                hotelRooms.map((room, index) => {
                  const isSelected = room.id === selectedRoomId;
                  const service = details.HotelDetail?.HotelServices?.[index];
                  const originalPrice = service?.ServicePrice ?? 0;
                  const discount = room.discountPct ?? 0;
                  const finalPrice = originalPrice - (originalPrice * discount) / 100;

                  return (
                    <div
                      key={room.id}
                      className={`card mb-3 ${isSelected ? "border-primary" : ""}`}
                    >
                      <div className="row g-0">
                        <div className="col-md-4">
                          <ImageComponent
                            src={room.Image?.ImageUrl}
                            alt={room.Name}
                            className="img-fluid rounded-start"
                          />
                        </div>
                        <div className="col-md-5">
                          <div className="card-body">
                            <h5 className="card-title">{room.Name}</h5>
                            <p className="mb-1"><FaUsers className="me-1" /> {room.occupancy}</p>
                            <p className="mb-1"><FaBed className="me-1" /> {room.bed}</p>
                            <p className="mb-2"><FaBath className="me-1" /> {room.size}</p>
                            <div>
                              {room.RoomAmentities?.map((a) => (
                                <span key={a} className="badge bg-secondary me-1">
                                  {a}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 text-end p-3">
                          {discount > 0 && (
                            <span className="badge bg-danger">{discount}% OFF</span>
                          )}
                          <p className="text-muted text-decoration-line-through mb-1">
                            ₹{originalPrice.toLocaleString()}
                          </p>
                          <h5 className="text-success">
                            ₹{finalPrice.toLocaleString()}
                          </h5>
                          <Button
                            variant={isSelected ? "primary" : "outline-primary"}
                            className="w-100 mt-2"
                            onClick={() => setSelectedRoomId(room.id)}
                          >
                            {isSelected ? "Selected" : "Select Room"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-muted">No rooms available.</p>
              ))
            )}

            {activeTab === 3 && (
              // Reviews
              <div className="mb-5"> {/* Added mb-5 for consistent spacing */}
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h4>Guest Reviews</h4>
                    <div className="d-flex align-items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-warning me-1" />
                      ))}
                      <strong className="ms-2">
                        {details.HotelDetail?.ReviewScore
                          ? `${details.HotelDetail.ReviewScore}/5 (${details.HotelDetail.ReviewCount} reviews)`
                          : "No reviews"}
                      </strong>
                    </div>
                    {(details.HotelDetail?.Reviews || []).map((r, i) => (
                      <div key={i} className="card mb-3">
                        <div className="card-body d-flex">
                          <img
                            src={r.avatar}
                            alt={r.name}
                            className="rounded-circle me-3"
                            width={40}
                            height={40}
                          />
                          <div>
                            <div className="d-flex justify-content-between">
                              <strong>{r.name}</strong>
                              <small className="text-muted">{r.date}</small>
                            </div>
                            <div className="mb-2">
                              {[...Array(5)].map((_, j) => (
                                <FaStar
                                  key={j}
                                  className={
                                    j < r.rating ? "text-warning" : "text-secondary"
                                  }
                                />
                              ))}
                            </div>
                            <p className="mb-0">{r.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4">
            <div className="card mb-4 sticky-top">
              <div className="card-body">
                <h5 className="card-title">Book Your Stay</h5>
                <div className="row g-3 mb-3">
                  <div className="col-6">
                    <label className="form-label">Check-in</label>
                    <input
                      type="date"
                      className="form-control"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label">Check-out</label>
                    <input
                      type="date"
                      className="form-control"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-6">
                    <label className="form-label">Rooms</label>
                    <select
                      className="form-select"
                      value={roomCount}
                      onChange={(e) => setRoomCount(+e.target.value)}
                    >
                      {[1, 2, 3].map((n) => (
                        <option key={n} value={n}>
                          {n} Room{n > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Guests</label>
                    <select
                      className="form-select"
                      value={guestCount}
                      onChange={(e) => setGuestCount(+e.target.value)}
                    >
                      {[1, 2, 3].map((g) => (
                        <option key={g} value={g}>
                          {g} Guest{g > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <hr />
                <ul className="list-unstyled mb-3">
                  <li className="d-flex justify-content-between">
                    Room Rate ({nights} night{nights > 1 ? "s" : ""})
                    <strong>₹{details.HotelDetail?.HotelServices[0]?.ServicePrice.toLocaleString()}</strong>
                  </li>
                  <li className="d-flex justify-content-between">
                    Taxes & Fees
                    <strong>₹{details.HotelDetail?.HotelServices[0]?.TotalPrice.toLocaleString()}</strong>
                  </li>
                </ul>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total</strong>
                  <strong>₹{details.HotelDetail?.HotelServices[0]?.ServicePrice.toLocaleString()}</strong>
                </div>
                <button className="btn btn-primary w-100">Book Now</button>
                <p className="text-center text-muted small mt-2">
                  Free cancellation until 24 hours before check-in
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h6>Need Help?</h6>
                <p className="mb-1">
                  <FaPhone className="me-2 text-primary" />
                  +91 832 123 4567
                </p>
                <p className="mb-1">
                  <FaEnvelope className="me-2 text-primary" />
                  info@grandcoastal.com
                </p>
                <p>
                  <FaClock className="me-2 text-primary" />
                  24/7 Customer Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}