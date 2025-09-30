import { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  FaWifi,
} from "react-icons/fa";

import { logout } from "../../store/Actions/authActions";
import { logoutEmailUser } from "../../store/Actions/emailAction";
import { logoutMobileUser } from "../../store/Actions/mobileOtpAction";
import {
  selectGoogleUser,
  selectGoogleUserName,
  selectUser,
} from "../../store/Selectors/authSelectors";
import {
  selectEmailUser,
  selectEmailUserName,
  statedata,
} from "../../store/Selectors/emailSelector";
import { selectPhoneNumber } from "../../store/Selectors/mobileSelector";

import AuthPopup from "../../components/auth/AuthPopup";
import { getEncryptedItem } from "../../utils/encryption";
import { fetchHotelDetails } from "../../store/Actions/hotelActions";
import { json, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { HotelDescription } from "../../components/ui/description";
import { ImageComponent } from "../../components/ui/image";
import {
  selectHotelDetails,
  selectHotelDetailsImages,
} from "../../store/Selectors/hotelSelectors";
import { useNavigate } from "react-router-dom";
import Header02 from "../header02";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { HotelSearchbar } from "./HotelSearchbar";
import HotelDetailsSkeleton from "./HotelDetailsSkeleton";
// import { Button as BsButton } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const amenityIconMap = {
  "Free WiFi": FaWifi,
  "Concierge services": FaConciergeBell,
  Nightclub: FaGlassCheers,
  Restaurant: FaUtensils,
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
  const dispatch = useDispatch();
  const { checkInDate, checkOutDate, Rooms, adults, children } = location.state || {};
  const navigate = useNavigate();
  const details = useSelector(selectHotelDetails);
  const images = useSelector(selectHotelDetailsImages);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0); // Default to "Rooms" tab
  // Ref for tab content to detect scroll
  const tabContentRef = useRef(null);
  // Booking form state
  const [checkIn, setCheckIn] = useState(checkInDate);
  const [checkOut, setCheckOut] = useState(checkOutDate);
  const emailUserName = useSelector(selectEmailUserName) || "Traveller";
  const googleUserName = useSelector(selectGoogleUserName);
  const emailuser = useSelector(selectEmailUser);
  const googleUser = useSelector(selectGoogleUser);
  const phoneNumber = useSelector(selectPhoneNumber);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  // Local state to track authentication status
  const [localAuthState, setLocalAuthState] = useState({
    isLoggedIn: false,
    user: null,
  });
  // selected Room data
  const [seletedRoomState, setseletedRoomState] = useState({
    hotel: null,
    room: null,
    package: null,
    image: "",
  });
  // Check localStorage for authentication data on component mount and when Redux state changes
  useEffect(() => {
    const checkLocalAuth = () => {
      try {
        const token = localStorage.getItem("authToken");
        const user1 = getEncryptedItem("user1");

        if (token && user1) {
          console.log("Header02: Found auth data in localStorage:", {
            token: !!token,
            user1,
          });
          setLocalAuthState({
            isLoggedIn: true,
            user1,
          });
        } else {
          console.log("Header02: No auth data found in localStorage");
          setLocalAuthState({
            isLoggedIn: false,
            user1: null,
          });
        }
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        setLocalAuthState({
          isLoggedIn: false,
          user1: null,
        });
      }
    };

    checkLocalAuth();
    console.log("details is working... ", details);

    // Listen for storage changes (when localStorage is updated from other parts of the app)
    const handleStorageChange = (e) => {
      if (e.key === "authToken" || e.key === "user1") {
        console.log("Header02: Storage changed:", e.key);
        checkLocalAuth();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [googleUser, emailuser, phoneNumber]); // Re-run when Redux auth state changes
  // Initial load effect
  useEffect(() => {
    const searchParams = JSON.parse(
      localStorage.getItem("hotelDetailsParams") || "{}"
    );
    const {
      cityId,
      checkInDate,
      checkOutDate,
      Rooms,
      adults,
      children,
      HotelProviderSearchId,
    } = searchParams;

    if (
      HotelProviderSearchId &&
      cityId &&
      checkInDate &&
      checkOutDate &&
      Rooms &&
      adults
    ) {
      dispatch(
        fetchHotelDetails(HotelProviderSearchId, {
          cityId: cityId,
          checkInDate: checkInDate,
          checkOutDate: checkOutDate,
          Rooms: Rooms,
          adults: adults,
          children: children,
        })
      );
    }
  }, [dispatch]);
  // Carousel controls
  const nextImage = () =>
    setCurrentImageIndex((i) => (i + 1) % (images.length || 1));
  const prevImage = () =>
    setCurrentImageIndex(
      (i) => (i - 1 + (images.length || 1)) % (images.length || 1)
    );

  const handleNavigateToImages = (HotelProviderSearchId) => {
    navigate("/hotel-images", {
      state: { HotelProviderSearchId },
    });
  };

  const isLoggedIn =
    Boolean(googleUser || phoneNumber || emailuser) ||
    localAuthState.isLoggedIn;

  const handleBooking = (roomDetails) => {
    if (!isLoggedIn) {
      // Show login popup if not logged in
      setseletedRoomState(roomDetails);
      setShowAuthPopup(true);
      return;
    }

    // Store the selected room data in localStorage for confirmation page
    const bookingData = {
      hotel: details.HotelDetail,
      room: roomDetails.room,
      package: roomDetails.package,
      image: roomDetails.image,
      roomPrice: roomDetails.room.ServicePrice,
      hotelName: details.HotelDetail.HotelName,
      hotelAddress: details.HotelDetail.HotelAddress,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      rooms: Rooms,
      adults: adults,
      children: children
    };
    
    localStorage.setItem("selectedHotelBooking", JSON.stringify(bookingData));
    navigate("/hotel-review", { state: roomDetails });
  };
  useEffect(() => {
    console.log("Header02: Auth state debug:", {
      googleUser,
      phoneNumber,
      emailuser,
      localAuthState,
      isLoggedIn,
      emailUserName,
      googleUserName,
    });
  }, [
    googleUser,
    phoneNumber,
    emailuser,
    localAuthState,
    isLoggedIn,
    emailUserName,
    googleUserName,
  ]);

  // Listen for custom auth state change events
  useEffect(() => {
    const handleAuthStateChange = (e) => {
      if (e.detail) {
        setLocalAuthState({
          isLoggedIn: e.detail.isLoggedIn,
          user: e.detail.user,
        });
      }
    };

    window.addEventListener("authStateChanged", handleAuthStateChange);
    return () => {
      window.removeEventListener("authStateChanged", handleAuthStateChange);
    };
  }, []);

  const handleAuthSuccess = useCallback(() => {
    console.log("Header02: Authentication successful, updating state...");
    setShowAuthPopup(false);
    
    setTimeout(() => {
      const token = localStorage.getItem("authToken");
      const user = getEncryptedItem("user1");
      if (token && user) {
        console.log("Header02: Setting auth state after success:", user);
        setLocalAuthState({
          isLoggedIn: true,
          user,
        });
        localStorage.setItem("userloginemail", user.emailuser);
        
        // Store the selected room data in localStorage for confirmation page
        const bookingData = {
          hotel: details.HotelDetail,
          room: seletedRoomState.room,
          package: seletedRoomState.package,
          image: seletedRoomState.image,
          roomPrice: seletedRoomState.room.ServicePrice,
          hotelName: details.HotelDetail.HotelName,
          hotelAddress: details.HotelDetail.HotelAddress,
          checkInDate: checkInDate,
          checkOutDate: checkOutDate,
          rooms: Rooms,
          adults: adults,
          children: children
        };
        
        localStorage.setItem("selectedHotelBooking", JSON.stringify(bookingData));
        navigate("/hotel-review", { state: seletedRoomState });

        window.dispatchEvent(
          new CustomEvent("authStateChanged", {
            detail: { isLoggedIn: true, user },
          })
        );
      }
    }, 100);
  }, [navigate, seletedRoomState, details, checkInDate, checkOutDate, Rooms, adults, children]);

  // Add at the top, after other imports
  // Add these states for modal
  const [showRoomModal, setShowRoomModal] = useState(false);
  const [modalRoomName, setModalRoomName] = useState("");
  const [modalMainDetails, setModalMainDetails] = useState([]);
  const [modalMoreDetails, setModalMoreDetails] = useState([]);

  const openRoomModal = (roomName, main, more) => {
    // First close the modal to reset state
    setShowRoomModal(false);
    
    // Use setTimeout to ensure state is cleared before setting new values
    setTimeout(() => {
      setModalRoomName(roomName);
      setModalMainDetails(main || []);
      setModalMoreDetails(more || []);
      setShowRoomModal(true);
    }, 100);
  };

  const searchParams = JSON.parse(
    localStorage.getItem("hotelSearchParams") || "{}"
  );
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (details && details.HotelDetail) {
      setTimeout(() => setShowSkeleton(false), 1000); // 1 second delay
    }
  }, [details]);

  // Add useEffect for ESC key functionality
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && showRoomModal) {
        setShowRoomModal(false);
      }
    };

    if (showRoomModal) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [showRoomModal]);

  // Add cleanup effect for modal state
  useEffect(() => {
    if (!showRoomModal) {
      // Reset modal state when modal is closed
      setModalRoomName("");
      setModalMainDetails([]);
      setModalMoreDetails([]);
    }
  }, [showRoomModal]);

  return (
    <>
      {showSkeleton ? (
        <HotelDetailsSkeleton />
      ) : (
        <>
          <Header02 />
          <HotelSearchbar
            searchParams={searchParams}
            backgroundColor="#cd2c22"
          />
          <div
            className="container py-1"
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
                      <FaMapMarkerAlt />{" "}
                      {details.HotelDetail?.HotelAddress.Address}
                    </p>
                    <div className="d-flex align-items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            details.HotelDetail?.TripAdvisorDetail?.Rating &&
                            i <
                              Math.floor(
                                details.HotelDetail.TripAdvisorDetail.Rating
                              )
                              ? "text-warning me-1"
                              : "text-secondary me-1"
                          }
                        />
                      ))}
                      <small className="text-muted ms-2">5 Star Hotel</small>
                      {details.HotelDetail?.TripAdvisorDetail?.Rating && (
                        <span className="badge bg-success ms-3">
                          Excellent{" "}
                          {details.HotelDetail.TripAdvisorDetail.Rating}/5
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
                    style={{ height: "483px", objectFit: "cover" }}
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
                              idx === currentImageIndex
                                ? "#fff"
                                : "rgba(255,255,255,0.5)",
                            cursor: "pointer",
                          }}
                        />
                      ))}
                    </div>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        handleNavigateToImages(
                          details.HotelDetail?.HotelProviderSearchId
                        );
                      }}
                      disabled={images.length === 0}
                    >
                      View All Photos
                    </Button>
                  </div>
                </div>

                {/* Tabs Section Container */}
                <div
                  className="hotel-tabs-container card mb-4 p-0"
                  style={{
                    width: "calc(100vw - 120px)",
                    minWidth: 900,
                    maxWidth: 1120,
                    background: "#fff",
                    borderRadius: "1rem",
                    overflow: "hidden",
                  }}
                >
                  {/* Tabs */}
                  <ul className="nav nav-tabs mb-1">
                    {["Rooms", "Amenities", "Overview", "Reviews", "Map"].map(
                      (tab, idx) => (
                        <li className="nav-item" key={tab}>
                          <button
                            className={`nav-link  ${
                              activeTab === idx
                                ? "active custom-active-tab"
                                : ""
                            }`}
                            onClick={() => setActiveTab(idx)}
                          >
                            {tab}
                          </button>
                        </li>
                      )
                    )}
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
                    {activeTab === 0 &&
                      // Rooms
                      (details.HotelDetail?.HotelServices.length > 0 ? (
                        details.HotelDetail?.HotelServices.map(
                          (room, index) => {
                            // Example data extraction (adjust as per your data structure)
                            var RoomName =
                              room.Rooms.length > 0
                                ? room.Rooms[0].RoomName
                                : "Room Name Not Available";
                            var RoomFyi =
                              room.Rooms.length > 0 ? room.Rooms[0].FYI : [];
                            var roomDetails =
                              details.HotelDetail?.HotelRooms?.filter(
                                (x) =>
                                  x.Name.toLowerCase() ===
                                  RoomName.toLowerCase()
                              ).length > 0
                                ? details.HotelDetail?.HotelRooms?.filter(
                                    (x) =>
                                      x.Name.toLowerCase() ===
                                      RoomName.toLowerCase()
                                  )[0] || {}
                                : {};

                            const descriptionLines = (
                              roomDetails?.Description || ""
                            )
                              .split(/<br\s*\/?>/i)
                              .map((line) =>
                                line
                                  .replace(/<[^>]+>/g, "")
                                  .replace(/&nbsp;/g, "")
                                  .trim()
                              )
                              .filter(Boolean);

                            const mainDetails = descriptionLines.slice(0, 4); // e.g. size, view, bed, bathroom
                            const moreDetails = descriptionLines.slice(4); // e.g. amenities

                            var includes =
                              RoomFyi.length > 0
                                ? RoomFyi
                                : room.Includes || [];
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
                                      src={
                                        roomDetails?.Image?.ImageUrl ||
                                        details.HotelDetail?.HotelImages?.[0]
                                      }
                                      alt={RoomName}
                                      className="img-fluid rounded-top"
                                      style={{
                                        objectFit: "cover",
                                        width: "100%",
                                        height: 140,
                                      }}
                                    />
                                    <div className="card-body p-3">
                                      <div className="d-flex align-items-center justify-content-between mb-2">
                                        <h3 className="h5 mb-2">{RoomName}</h3>
                                      </div>
                                      
                                      {/* Move Room details text to the right */}
                                      
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
                                    <div
                                      className="details-container d-flex flex-row p-3"
                                      style={{
                                        minWidth: 500,
                                        border: "none",
                                        boxShadow: "none",
                                      }}
                                    >
                                      {/* Room Package Details (60%) */}
                                      <div style={{ width: "60%" }}>
                                        <b className="d-block mb-2">
                                          {RoomName}
                                        </b>
                                        {/* BoardName */}
                                        {room.BoardName && (
                                          <div className="text-muted small mb-1">
                                            {room.BoardName}
                                          </div>
                                        )}

                                        {/* Refundable/Non Refundable */}
                                        {room.RefundableText &&
                                        room.RefundableText !==
                                          "Not Available" ? (
                                          <div className="text-success small mb-2">
                                            {room.RefundableText}
                                            
                                          </div>
                                        ) : (
                                          <div className="text-danger small mb-2">
                                            Non - Refundable
                                          </div>
                                        )}
                                        <ul className="list-unstyled mb-2">
                                          {includes.map((d, i) => (
                                            <li key={d + i} className="mb-1">
                                              {d}
                                            </li>
                                          ))}
                                        </ul>
                                        <div className="text-start">
                                        <span
                                          role="button"
                                          className="text-primary small"
                                          style={{ textDecoration: "none", cursor: "pointer" }}
                                          onClick={() => openRoomModal(RoomName, mainDetails, moreDetails)}
                                        >
                                          Room details
                                        </span>
                                      </div>
                                      </div>
                                      {/* Price Container (40%) */}
                                      <div
                                        style={{
                                          width: "40%",
                                          display: "flex",
                                          flexDirection: "column",
                                          alignItems: "flex-start",
                                          justifyContent: "space-between",
                                          paddingLeft: 24,
                                        }}
                                      >
                                        <div>
                                          <h2
                                            className="mb-1 fw-bold "
                                            style={{ fontSize: 28 }}
                                          >
                                            ₹{" "}
                                            {Number(room.Charges) > 0
                                              ? (
                                                  Number(room.ServicePrice) -
                                                  Number(room.Charges)
                                                ).toLocaleString()
                                              : room.ServicePrice.toLocaleString()}
                                          </h2>
                                          {console.log("**********", room)}
                                          {Number(room.Charges) > 0 && (
                                            <>
                                              <div className="text-muted small mb-2">
                                                +₹{" "}
                                                {room.Charges.toLocaleString()}{" "}
                                                taxes & fees Per Night
                                              </div>
                                            </>
                                          )}

                                          <button
                                            className="btn btn-primary w-50 mb-2"
                                            onClick={() =>
                                              handleBooking({
                                                hotel: details.HotelDetail,
                                                room: room,
                                                package: includes,
                                                image:
                                                  roomDetails?.Image
                                                    ?.ImageUrl ||
                                                  details.HotelDetail
                                                    ?.HotelImages?.[0],
                                              })
                                            }
                                          >
                                            Select Room
                                          </button>
                                          
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )
                      ) : (
                        <p className="text-muted">No rooms available.</p>
                      ))}

                    {activeTab === 1 && (
                      <div className="mb-5">
                        {details.HotelDetail?.Amenities?.length > 0 ? (
                          <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                              <h4>Hotel Amenities</h4>
                              <div className="row">
                                {details.HotelDetail.Amenities.map(
                                  (amen, i) => {
                                    const IconComponent =
                                      amenityIconMap[amen.Description] ||
                                      FaLock;
                                    return (
                                      <div
                                        key={i}
                                        className="col-6 col-md-3 mb-3"
                                      >
                                        <div className="d-flex align-items-center">
                                          <IconComponent
                                            className="me-2"
                                            size={18}
                                          />
                                          <span>{amen.Description}</span>
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <p className="text-muted">No amenities listed.</p>
                        )}
                      </div>
                    )}

                    {activeTab === 2 && (
                      // Overview
                      <div className="mb-5">
                        <div className="card mb-4 shadow-sm">
                          <div className="card-body">
                            <h4>About This Hotel</h4>
                            <HotelDescription
                              description={details.HotelDetail?.Description}
                            />
                            <div className="row mt-4">
                              <div className="col-md-6">
                                <h5>Hotel Highlights</h5>
                                <ul className="list-unstyled">
                                  {(
                                    details.HotelDetail?.Highlights || [
                                      "Beachfront location",
                                      "Full-service spa",
                                      "Multiple restaurants",
                                      "24/7 room service",
                                    ]
                                  ).map((item) => (
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
                                  description={details.HotelDetail?.Attractions?.join(
                                    ""
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            {(details.HotelDetail?.Reviews || []).map(
                              (r, i) => (
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
                                        <small className="text-muted">
                                          {r.date}
                                        </small>
                                      </div>
                                      <div className="mb-2">
                                        {[...Array(5)].map((_, j) => (
                                          <FaStar
                                            key={j}
                                            className={
                                              j < r.rating
                                                ? "text-warning"
                                                : "text-secondary"
                                            }
                                          />
                                        ))}
                                      </div>
                                      <p className="mb-0">{r.comment}</p>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 4 && (
                      <div style={{ overflow: "hidden" }}>
                        <div
                          style={{
                            height: 350,
                            width: "100%",
                            overflow: "hidden",
                          }}
                        >
                          <MapContainer
                            center={[
                              parseFloat(
                                details.HotelDetail?.HotelAddress?.Latitude
                              ) || 25.08047,
                              parseFloat(
                                details.HotelDetail?.HotelAddress?.Longitude
                              ) || 55.13652,
                            ]}
                            zoom={15}
                            style={{ height: "100%", width: "100%" }}
                            scrollWheelZoom={true}
                            zoomControl={true}
                            dragging={true}
                          >
                            <TileLayer
                              attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                            />
                            <Marker
                              position={[
                                parseFloat(
                                  details.HotelDetail?.HotelAddress?.Latitude
                                ) || 25.08047,
                                parseFloat(
                                  details.HotelDetail?.HotelAddress?.Longitude
                                ) || 55.13652,
                              ]}
                            >
                              <Popup>
                                <div>
                                  <h6 className="fw-bold">
                                    {details.HotelDetail?.HotelName}
                                  </h6>
                                  <p className="mb-1">
                                    {details.HotelDetail?.HotelAddress?.Address}
                                  </p>
                                  <p className="mb-0 text-muted">
                                    {details.HotelDetail?.HotelAddress?.City},{" "}
                                    {details.HotelDetail?.HotelAddress?.Country}
                                  </p>
                                </div>
                              </Popup>
                            </Marker>
                          </MapContainer>
                        </div>
                        {/* Hotel name, rating, and address below the map */}
                        <div className="mt-3 text-center">
                          <h4 className="fw-bold mb-1">
                            {details.HotelDetail?.HotelName}
                          </h4>
                          <div className="d-flex justify-content-center align-items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={
                                  details.HotelDetail?.TripAdvisorDetail
                                    ?.Rating &&
                                  i <
                                    Math.floor(
                                      details.HotelDetail.TripAdvisorDetail
                                        .Rating
                                    )
                                    ? "text-warning me-1"
                                    : "text-secondary me-1"
                                }
                              />
                            ))}
                            {details.HotelDetail?.TripAdvisorDetail?.Rating && (
                              <span className="ms-2 text-muted">
                                {details.HotelDetail.TripAdvisorDetail.Rating}/5
                              </span>
                            )}
                          </div>
                          <div className="text-muted">
                            {details.HotelDetail?.HotelAddress?.Address},{" "}
                            {details.HotelDetail?.HotelAddress?.City},{" "}
                            {details.HotelDetail?.HotelAddress?.Country}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}

              {/* <div className="col-lg-4">
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


                    <button onClick={() => handleBooking({
                      hotel: details.HotelDetail,
                      room: details.HotelDetail?.HotelServices[0],
                      package: details.HotelDetail?.HotelServices[0]?.Rooms?.length > 0 ? details.HotelDetail?.HotelServices[0]?.Rooms[0].FYI.length > 0 ? details.HotelDetail?.HotelServices[0]?.Rooms[0].FYI : details.HotelDetail?.HotelServices[0]?.Includes || [] : [],
                      image: details.HotelDetail?.HotelRooms?.filter(x => x.Name.toLowerCase() === (details.HotelDetail?.HotelServices[0]?.Rooms?.length > 0 ? details.HotelDetail?.HotelServices[0]?.Rooms[0].RoomName.toLowerCase() : "")).length > 0 ? details.HotelDetail?.HotelRooms?.filter(x => x.Name.toLowerCase() === (details.HotelDetail?.HotelServices[0]?.Rooms?.length > 0 ? details.HotelDetail?.HotelServices[0]?.Rooms[0].RoomName.toLowerCase() : ""))[0].Image?.ImageUrl : ""
                    })
                    } className="btn btn-primary w-100">Book Now</button>
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
              </div> */}
            </div>
          </div>
        </>
      )}
      <AuthPopup
        isOpen={showAuthPopup}
        onClose={() => setShowAuthPopup(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      {/* Room Details Modal */}
      <div
        className="modal fade"
        id="roomDetailsModal"
        tabIndex="-1"
        aria-labelledby="roomDetailsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="roomDetailsModalLabel">
                {modalRoomName} Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h6>Main Details</h6>
              <ul>
                {modalMainDetails.map((line, i) => (
                  <li key={line + i}>{line}</li>
                ))}
              </ul>
              {modalMoreDetails.length > 0 && (
                <>
                  <h6>More Details</h6>
                  <div className="row">
                    <div className="col-6">
                      <ul>
                        {modalMoreDetails
                          .slice(0, Math.ceil(modalMoreDetails.length / 2))
                          .map((line, i) => (
                            <li key={line + i}>{line}</li>
                          ))}
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul>
                        {modalMoreDetails
                          .slice(Math.ceil(modalMoreDetails.length / 2))
                          .map((line, i) => (
                            <li key={line + i}>{line}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {showRoomModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1050,
          }}
          onClick={() => setShowRoomModal(false)}
        >
          <div
            style={{
              width: "900px",
              maxWidth: "95vw",
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Highlighted Header */}
            <div
              style={{
                background: "#dc3545",
                color: "#fff",
                padding: "16px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5 className="mb-0 fw-bold">{modalRoomName} Details</h5>
              <button
                className="btn btn-sm btn-outline-light"
                onClick={() => setShowRoomModal(false)}
                style={{
                  border: "1px solid #fff",
                  color: "#fff",
                  background: "transparent",
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: "20px", maxHeight: "65vh", overflowY: "auto" }}>
              {modalMainDetails.length > 0 && (
                <>
                  <h6 className="fw-bold mb-3">Room Details</h6>
                  <ul className="mb-4">
                    {modalMainDetails.map((line, i) => (
                      <li key={`main-${i}`} className="mb-2">{line}</li>
                    ))}
                  </ul>
                </>
              )}

              {modalMoreDetails.length > 0 && (
                <>
                  <h6 className="fw-bold mb-3">Description</h6>
                  <div className="row">
                    <div className="col-12">
                      <ul>
                        {modalMoreDetails
                          .slice(0, Math.ceil(modalMoreDetails.length ))
                          .map((line, i) => (
                            <li key={`more-left-${i}`} className="mb-2">{line}</li>
                          ))}
                      </ul>
                    </div>
                    <div className="col-6">
                      {/* <ul>
                        {modalMoreDetails
                          .slice(Math.ceil(modalMoreDetails.length / 2))
                          .map((line, i) => (
                            <li key={`more-right-${i}`}>{line}</li>
                          ))}
                      </ul> */}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
