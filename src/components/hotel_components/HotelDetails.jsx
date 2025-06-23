import { useState, useMemo } from "react";
import {
  MapPin, Star, Wifi, Car, Coffee, Utensils,
  Waves, Dumbbell, Wind, Shield, Users, Bed,
  Bath, ChevronLeft, ChevronRight, Heart, Share2,
  Phone, Mail, Clock, CheckCircle
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { ImageComponent } from "../../components/ui/image";
import { useLocation } from 'react-router-dom';
import { HotelDescription } from "../../components/ui/description";
// import { DialogContent } from "../../components/ui/dialog";
import { useNavigate } from 'react-router-dom';

export default function HotelDetails() {
  const location = useLocation();
  const { cityId, checkInDate, checkOutDate, Rooms, adults, children } = location.state || {};
  const navigate = useNavigate();
  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Tab state: 0=Overview,1=Amenities,2=Rooms,3=Reviews
  const [activeTab, setActiveTab] = useState(0);

  // Room selection
  const [selectedRoomId, setSelectedRoomId] = useState("deluxe");

  // Booking form state
  const [checkIn, setCheckIn] = useState(checkInDate);
  const [checkOut, setCheckOut] = useState(checkOutDate);
  const [roomCount, setRoomCount] = useState(Rooms);
  const [guestCount, setGuestCount] = useState(adults + children);

  const hotelImages = [
    "https://source.unsplash.com/800x600/?hotel,beach",
    "https://source.unsplash.com/800x600/?resort,goa",
    "https://source.unsplash.com/800x600/?luxury,hotel-room",
    "https://source.unsplash.com/800x600/?spa,relaxation",
    "https://source.unsplash.com/800x600/?swimmingpool,resort",
  ];

  const amenities = [
    { icon: Wifi, name: "Free WiFi" },
    { icon: Car, name: "Free Parking" },
    { icon: Coffee, name: "Coffee Shop" },
    { icon: Utensils, name: "Restaurant" },
    { icon: Waves, name: "Swimming Pool" },
    { icon: Dumbbell, name: "Fitness Center" },
    { icon: Wind, name: "Air Conditioning" },
    { icon: Shield, name: "24/7 Security" },
  ];

  const roomTypes = [
    {
      id: "deluxe",
      name: "Deluxe Room",
      price: 4500,
      originalPrice: 6000,
      discountPct: 25,
      size: "320 sq ft",
      occupancy: "2 Adults",
      bed: "1 King Bed",
      amenities: ["Free WiFi", "AC", "TV", "Mini Bar"],
      image: "https://source.unsplash.com/400x300/?hotel-room,deluxe",
    },
    {
      id: "suite",
      name: "Executive Suite",
      price: 7200,
      originalPrice: 9000,
      discountPct: 20,
      size: "450 sq ft",
      occupancy: "2 Adults + 1 Child",
      bed: "1 King Bed + Sofa",
      amenities: ["Free WiFi", "AC", "TV", "Mini Bar", "Balcony"],
      image: "https://source.unsplash.com/400x300/?hotel-suite,luxury",
    },
    {
      id: "premium",
      name: "Premium Sea View",
      price: 9800,
      originalPrice: 12000,
      discountPct: 18,
      size: "500 sq ft",
      occupancy: "3 Adults",
      bed: "1 King Bed + 1 Single",
      amenities: ["Free WiFi", "AC", "TV", "Mini Bar", "Sea View", "Balcony"],
      image: "https://source.unsplash.com/400x300/?sea-view,room",
    },
  ];

  const reviews = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      date: "2 days ago",
      comment: "Excellent hotel with great location. Staff was very helpful and rooms were clean.",
      avatar: "https://i.pravatar.cc/40?img=11",
    },
    {
      name: "Priya Sharma",
      rating: 4,
      date: "1 week ago",
      comment: "Good value for money. The pool area is beautiful and breakfast was delicious.",
      avatar: "https://i.pravatar.cc/40?img=32",
    },
    {
      name: "Michael Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment: "Amazing stay! The sea view from our room was breathtaking. Will definitely come back.",
      avatar: "https://i.pravatar.cc/40?img=56",
    },
  ];

  const { state } = useLocation()
  const { details } = state || {}
  console.log("HotelDetails component loaded with details:", details);

  // Carousel controls
  const nextImage = () =>
    setCurrentImageIndex((i) => (i + 1) % hotelImages.length);
  const prevImage = () =>
    setCurrentImageIndex((i) =>
      (i - 1 + hotelImages.length) % hotelImages.length
    );

  // Lookup selected room data
  const selectedRoom = useMemo(
    () => roomTypes.find((r) => r.id === selectedRoomId),
    [selectedRoomId]
  );

  const handleNavigateToImages = (HotelProviderSearchId) => {
    navigate('/hotel-images', {
      state: {
        HotelProviderSearchId
      }
    })
  }

  // Simple price calculation: nights * room price * rooms
  const nights =
    (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
  const roomRate = selectedRoom ? selectedRoom.price : 0;
  const subtotal = nights * roomRate * roomCount;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + tax;

  return (
    <div className="bg-light min-vh-100">
      {/* Nav */}
      <nav className="navbar navbar-light bg-white shadow-sm border-bottom">
        <div className="container d-flex justify-content-between">
          <Button variant="link" onClick={() => navigate(-1)}>
            <ChevronLeft /> Back to Search
          </Button>
          <div>
            <Button variant="link" className="me-2">
              <Share2 /> Share
            </Button>
            <Button variant="link">
              <Heart /> Save
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
                  <MapPin /> {details.HotelDetail?.HotelAddress.Address}
                </p>
                <div className="d-flex align-items-center">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa fa-star text-${i <= Math.floor(details.HotelDetail?.TripAdvisorDetail.Rating) ? 'warning' : 'muted'} text-xs`}
                    />
                  ))}
                  <small className="text-muted ms-2">5 Star Hotel</small>
                  <span className="badge bg-success ms-3">
                    Excellent {details.HotelDetail?.TripAdvisorDetail.Rating}/5
                  </span>
                </div>
              </div>
            </div>

            {/* Carousel */}
            <div className="position-relative mb-4">
              <ImageComponent
                src={details.HotelDetail?.HotelImages?.[currentImageIndex]}
                alt="Hotel"
                className="w-100 rounded"
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <button
                className="btn btn-secondary position-absolute top-50 start-0 translate-middle-y"
                onClick={prevImage}
              >
                <ChevronLeft />
              </button>
              <button
                className="btn btn-secondary position-absolute top-50 end-0 translate-middle-y"
                onClick={nextImage}
              >
                <ChevronRight />
              </button>
              <div className="position-absolute bottom-0 w-100 px-3 pb-3 d-flex justify-content-between align-items-end">
                <div>
                  {hotelImages.map((_, idx) => (
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
              /* Overview */
              <div className="mb-5">
                <h4>About This Hotel</h4>
                {/* <p>
                 {details.HotelDetail?.Description || "This luxurious beachfront hotel offers a perfect blend of comfort and elegance. Enjoy stunning sea views, world-class amenities, and exceptional service."}
                </p> */}
                <HotelDescription description={details.HotelDetail?.Description} />
                <div className="row">
                  <div className="col-md-6">
                    <h5>Hotel Highlights</h5>
                    <ul className="list-unstyled">
                      {[
                        "Beachfront location",
                        "Full-service spa",
                        "Multiple restaurants",
                        "24/7 room service",
                      ].map((item) => (
                        <li key={item}>
                          <CheckCircle className="text-success me-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>Nearby Attractions</h5>
                    <ul className="list-unstyled">
                      {[
                        "Calangute Beach – 0.1 km",
                        "Baga Beach – 2.5 km",
                        "Fort Aguada – 5.2 km",
                        "Panaji City – 15 km",
                      ].map((item) => (
                        <li key={item}>
                          <MapPin className="me-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              /* Amenities */
              <div className="mb-5">
                <h4>Hotel Amenities</h4>
                <div className="row">
                  {amenities.map((amen, i) => {
                    const Icon = amen.icon;
                    return (
                      <div key={i} className="col-6 col-md-3 mb-3">
                        <div className="d-flex align-items-center">
                          <Icon className="me-2" size={18} />
                          <span>{amen.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 2 && (
              /* Rooms */
              <div className="mb-5">
                <h4>Available Rooms</h4>
                {details.HotelDetail?.HotelRooms.map((room) => {
                  const isSelected = room.id === selectedRoomId;
                  return (
                    <div
                      key={room.id}
                      className={`card mb-3 ${isSelected ? "border-primary" : ""}`}
                    >
                      <div className="row g-0">
                        <div className="col-md-4">
                          <ImageComponent
                            src={room.Image.ImageUrl}
                            alt={room.name}
                            className="img-fluid rounded-start"
                          />
                        </div>
                        <div className="col-md-5">
                          <div className="card-body">
                            <h5 className="card-title">{room.Name}</h5>
                            <p className="mb-1">
                              <Users className="me-1" /> {room.occupancy}
                            </p>
                            <p className="mb-1">
                              <Bed className="me-1" /> {room.bed}
                            </p>
                            <p className="mb-2">
                              <Bath className="me-1" /> {room.size}
                            </p>
                            <div>
                              {room.RoomAmentities.map((a) => (
                                <span key={a} className="badge bg-secondary me-1">
                                  {a}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 text-end p-3">
                          <span className="badge bg-danger">
                            {room.discountPct}% OFF
                          </span>
                          <p className="text-muted text-decoration-line-through mb-1">
                            ₹{room.LoggedLBookPrice.toLocaleString()}
                          </p>
                          <h5 className="text-success">
                            ₹{room.LoggedLBookPrice.toLocaleString()}
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
                })}
              </div>
            )}

            {activeTab === 3 && (
              /* Reviews */
              <div className="mb-5">
                <h4>Guest Reviews</h4>
                <div className="d-flex align-items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-warning me-1" />
                  ))}
                  <strong className="ms-2">4.5/5 (324 reviews)</strong>
                </div>
                {reviews.map((r, i) => (
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
                            <Star
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
                  <Phone className="me-2 text-primary" />
                  +91 832 123 4567
                </p>
                <p className="mb-1">
                  <Mail className="me-2 text-primary" />
                  info@grandcoastal.com
                </p>
                <p>
                  <Clock className="me-2 text-primary" />
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
