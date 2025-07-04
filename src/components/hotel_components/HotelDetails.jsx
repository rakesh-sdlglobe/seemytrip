import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaChair,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaCoffee,
  FaConciergeBell,
  FaEnvelope,
  FaGlassCheers,
  FaHeart,
  FaLock,
  FaMapMarkerAlt,
  FaNewspaper,
  FaPhone,
  FaShareAlt,
  FaShoppingBag,
  FaShower,
  FaSmoking,
  FaStar,
  FaSuitcaseRolling,
  FaTicketAlt,
  FaTshirt,
  FaTv,
  FaUsers,
  FaUtensils,
  FaWheelchair,
  FaWifi
} from "react-icons/fa";


import { useLocation } from 'react-router-dom';
import { Button } from "../../components/ui/button";
import { HotelDescription } from "../../components/ui/description";
import { ImageComponent } from "../../components/ui/image";
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

  // Tab state: 0=Rooms,1=Amenities,2=Overview,3=Reviews
  const [activeTab, setActiveTab] = useState(0); // Default to "Rooms" tab

  // Ref for tab content to detect scroll
  const tabContentRef = useRef(null);

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

      <div
        className="container py-5"
        style={{
          border: "1px solid #dee2e6",
          borderRadius: "1rem",
          background: "#fff",
          padding: "10px",
          boxShadow: "none",
        }}
      >
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
                style={{ height: '483px', objectFit: 'cover' }}
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

            {/* Tabs Section Container */}
            <div
              className="hotel-tabs-container card mb-4 p-0"
              style={{
                width: 'calc(100vw - 120px)',
                minWidth: 900,
                maxWidth: 1120,
                background: '#fff',
                borderRadius: '1rem',
                overflow: 'hidden',
              }}
            >
              {/* Tabs */}
              <ul className="nav nav-tabs mb-1">
                {['Rooms', 'Amenities', 'Overview', 'Reviews'].map((tab, idx) => (
                  <li className="nav-item" key={tab}>
                    <button
                      className={`nav-link  ${activeTab === idx ? "active custom-active-tab" : ""}`}
                      onClick={() => setActiveTab(idx)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
              <style>
                {`
                  .custom-active-tab,
                  .nav-tabs .nav-link.active {
                    background: #dc3545 !important;
                    color: #fff !important;
                    border: none !important;
                  }
                  .nav-tabs .nav-link {
                    background: transparent;
                    border: none;
                    transition: background 0.2s, color 0.2s;
                  }
                  .nav-tabs .nav-link:hover {
                    color: #dc3545;
                  }
                  .hotel-tabs-container {
                    border-radius: 1rem;
                    overflow: hidden;
                    background: #fff;
                  }
                `}
              </style>

              {/* Tab Contents */}
              <div
                ref={tabContentRef}
                style={{
                  maxHeight: 500,
                  overflowY: "auto",
                  padding: 24,
                  transition: "all 0.2s",
                }}
              >
                {activeTab === 2 && (
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

                {activeTab === 0 && (
                  // Rooms
                  hotelRooms.length > 0 ? (
                    hotelRooms.map((room, index) => {
                      // Example data extraction (adjust as per your data structure)
                      const descriptionLines = (room.Description || "")
                        .split(/<br\s*\/?>/i)
                        .map(line => line.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, '').trim())
                        .filter(Boolean);

                      const mainDetails = descriptionLines.slice(0, 4); // e.g. size, view, bed, bathroom
                      const moreDetails = descriptionLines.slice(4); // e.g. amenities

                      // Package/offer data (replace with your actual data)
                      const packages = room.Packages || [
                        {
                          title: "Room With Free Cancellation | Breakfast only",
                          details: [
                            "Book with ₹ 0 Payment",
                            "15% off on session of Spa",
                            "Early Check-In upto 2 hours (subject to availability)",
                            "Late Check-Out upto 2 hours (subject to availability)",
                            "15% off on Food & Beverage services",
                            "15% Off on Laundry service",
                            "Complimentary Welcome Drink on arrival",
                            "Free Breakfast",
                            "Bed, Breakfast and More",
                            "Free Cancellation before 08 Jul 01:59 PM"
                          ],
                          price: 12000,
                          taxes: 2160,
                          offer: "Login Now and get this for ₹11,880 or less"
                        }
                      ];

                      return (
                        // Add border to parent container
                        <div
                          key={room.id || index}
                          className="d-flex flex-row mb-4 gap-3"
                          style={{
                            border: "1px solid #dee2e6",
                            borderRadius: "0.75rem",
                            background: "#fff",
                            padding: 0,
                          }}
                        >
                          {/* Left Container */}
                          <div style={{ width: "30%", minWidth: 260 }}>
                            {/* Add border to left container, remove card shadow */}
                            <div
                              className="card h-100"
                              style={{
                                border: "1px solid #dee2e6",
                                boxShadow: "none",
                                borderRadius: "0.75rem 0 0 0.75rem",
                              }}
                            >
                              <img
                                src={room.Image?.ImageUrl}
                                alt={room.Name}
                                className="img-fluid rounded-top"
                                style={{ objectFit: "cover", width: "100%", height: 140 }}
                              />
                              <div className="card-body p-3">
                                <h3 className="h5 mb-2">{room.Name}</h3>
                                <ul className="list-unstyled mb-2">
                                  {mainDetails.map((line, i) => (
                                    <li key={line + i} className="mb-1">{line}</li>
                                  ))}
                                </ul>
                                <div className="border-top pt-2 mt-2">
                                  <div className="row">
                                    {(() => {
                                      // Remove empty, comma, and semicolon-only lines
                                      const cleanDetails = moreDetails
                                        .map(line => line.replace(/[,;]$/, '').trim())
                                        .filter(line => line && line !== ',' && line !== ';');

                                      const half = Math.ceil(cleanDetails.length / 2);
                                      const firstHalf = cleanDetails.slice(0, half);
                                      const secondHalf = cleanDetails.slice(half);

                                      return (
                                        <>
                                          <div className="col-6">
                                            <ul style={{ listStyleType: "disc", paddingLeft: 24 }} className="mb-0">
                                              {firstHalf.map((line, i) => (
                                                <li key={line + i} className="small">{line}</li>
                                              ))}
                                            </ul>
                                          </div>
                                          <div className="col-6">
                                            <ul style={{ listStyleType: "disc", paddingLeft: 24 }} className="mb-0">
                                              {secondHalf.map((line, i) => (
                                                <li key={line + i} className="small">{line}</li>
                                              ))}
                                            </ul>
                                          </div>
                                        </>
                                      );
                                    })()}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Right Container (70% width, scrollable if overflow) */}
                          <div
                            style={{
                              width: "70%",
                              overflowX: "auto",
                              border: "none",
                              boxShadow: "none",
                              borderRadius: "0 0.75rem 0.75rem 0",
                            }}
                          >
                            <div className="d-flex flex-column gap-3">
                              {packages.map((pkg, pkgIdx) => (
                                <div
                                  key={pkg.title + pkgIdx}
                                  className="details-container d-flex flex-row p-3"
                                  style={{
                                    minWidth: 500,
                                    border: "none",
                                    boxShadow: "none",
                                  }}
                                >
                                  {/* Room Package Details (60%) */}
                                  <div style={{ width: "60%" }}>
                                    <b className="d-block mb-2">{pkg.title}</b>
                                    <ul className="list-unstyled mb-2">
                                      {pkg.details.map((d, i) => (
                                        <li key={d + i} className="mb-1">
                                          {d}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  {/* Price Container (40%) */}
                                  <div
                                    style={{
                                      width: "40%",
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "flex-start",
                                      justifyContent: "space-between",
                                      paddingLeft: 24
                                    }}
                                  >
                                    <div>
                                      <h2 className="mb-1 fw-bold " style={{ fontSize: 28 }}>
                                        ₹ {pkg.price.toLocaleString()}
                                      </h2>
                                      <div className="text-muted small mb-2">
                                        +₹ {pkg.taxes.toLocaleString()} taxes & fees Per Night
                                      </div>
                                      <button className="btn btn-primary w-50 mb-2">
                                        Select Package
                                      </button>
                                      <div className="text-center">
                                        <span className="text-primary small">{pkg.offer}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-muted">No rooms available.</p>
                  )
                )}

                {activeTab === 3 && (
                  // Reviews
                  <div className="mb-5">
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
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4">
            <div className="card mb-2">
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