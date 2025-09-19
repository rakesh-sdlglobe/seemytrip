import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaMale,
  FaFemale,
  FaUser,
  FaBus,
  FaMapMarkerAlt,
  FaChair,
  FaExclamationTriangle,
  FaTimes,
} from "react-icons/fa";
import { fetchBusSeatLayout } from "../../store/Actions/busActions";
import { getEncryptedItem, setEncryptedItem } from "../../utils/encryption";
import {
  selectBusAuthData,
  selectBusSearchList,
  selectBusSearchLayoutList,
  selectBusSeatLayoutLoading,
  selectBusBoardingPoints,
  selectBusBookingDetails,
} from "../../store/Selectors/busSelectors";
import { useNavigate } from "react-router-dom";

import BoardingPointsPage from "./BoardingPointsPage";
import BusBookingModal from "./BusBookingModal";
import AuthPopup from "../auth/AuthPopup";

const BusSeatLayoutPage = ({ seatLayout: propSeatLayout, currentBus }) => {
  const dispatch = useDispatch();
  const authData = useSelector(selectBusAuthData);
  const searchList = useSelector(selectBusSearchList);
  const seatLayoutData = useSelector(selectBusSearchLayoutList);
  const loading = useSelector(selectBusSeatLayoutLoading);
  const busBookingDetails = useSelector(selectBusBookingDetails);
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [selectedBoarding, setSelectedBoarding] = useState("");
  const [selectedDropping, setSelectedDropping] = useState("");
  const [activeTab, setActiveTab] = useState("seat");
  const [hoveredSeat, setHoveredSeat] = useState(null);
  const [priceFilter, setPriceFilter] = useState("All");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [boardingSubTab, setBoardingSubTab] = useState("boarding");
  const [isNarrow, setIsNarrow] = useState(window.innerWidth < 560);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [pendingBooking, setPendingBooking] = useState(false);

  // Handle screen resize for 1200px breakpoint
  useEffect(() => {
    const handleResize = () => setIsNarrow(window.innerWidth < 560);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to proceed with booking
  const proceedWithBooking = () => {
    // Store current bus data in localStorage
    setEncryptedItem("selectedBusData", currentBus);
    setShowBookingModal(true);
  };

  // Handle authentication popup close
  const handleAuthClose = () => {
    setShowAuthPopup(false);
    
    // Check if user is now authenticated after popup closes
    if (pendingBooking) {
      const token = localStorage.getItem('authToken');
      const user1 = getEncryptedItem('user1');
      
      if (token && user1) {
        console.log('User authenticated after popup, proceeding with bus booking');
        proceedWithBooking();
      } else {
        console.log('User still not authenticated, clearing pending booking');
      }
      setPendingBooking(false);
    }
  };

  // Save boarding point to localStorage when it changes
  useEffect(() => {
    if (selectedBoarding) {
      setEncryptedItem("selectedBoardingPoint", selectedBoarding);
    }
  }, [selectedBoarding]);

  // Save dropping point to localStorage when it changes
  useEffect(() => {
    if (selectedDropping) {
      setEncryptedItem("selectedDroppingPoint", selectedDropping);
    }
  }, [selectedDropping]);

  // Get search parameters from localStorage
  const getSearchParams = () => {
    return getEncryptedItem("busSearchparams") || {};
  };

  // Clear old localStorage data and fetch seat layout data when component mounts
  useEffect(() => {
    // Clear old boarding and dropping points from localStorage
    localStorage.removeItem("selectedBoardingPoint");
    localStorage.removeItem("selectedDroppingPoint");

    const searchParams = getSearchParams();
    const { TokenId, EndUserIp } = searchParams;

    if (TokenId && EndUserIp && searchList?.BusSearchResult?.TraceId) {
      // Find the current bus result index from the search list
      const currentBus = searchList.BusSearchResult.BusResults?.find(
        (bus) => bus.ResultIndex === searchParams.ResultIndex
      );

      if (currentBus) {
        dispatch(
          fetchBusSeatLayout(
            TokenId,
            EndUserIp,
            currentBus.ResultIndex,
            searchList.BusSearchResult.TraceId
          )
        );
      }
    }
  }, [dispatch, searchList]);

  // Fetch booking details from Redux store and localStorage
  useEffect(() => {
    // Only set booking details from Redux or localStorage (for initial load),
    // but do NOT persist any gender info to localStorage
    const parsedData = getEncryptedItem("busBookingData");
    if (parsedData) {
        let passengerData = null;
        if (parsedData.blockData?.Passenger) {
          passengerData = parsedData.blockData.Passenger;
        } else if (parsedData.bookingResult?.BookResult?.Passenger) {
          passengerData = parsedData.bookingResult.BookResult.Passenger;
        } else if (parsedData.GetBookingDetailResult?.Itinerary?.Passenger) {
          passengerData = parsedData.GetBookingDetailResult.Itinerary.Passenger;
        }
        if (passengerData) {
          setBookingDetails({ Passenger: passengerData });
        }
    }
    if (busBookingDetails?.GetBookingDetailResult?.Itinerary?.Passenger) {
      const passengerData = busBookingDetails.GetBookingDetailResult.Itinerary.Passenger;
      setBookingDetails({ Passenger: passengerData });
    }
  }, [busBookingDetails]);

  // Listen for localStorage changes
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "busBookingData") {
        if (e.newValue) {
          try {
            const parsedData = JSON.parse(e.newValue);
            if (parsedData.GetBookingDetailResult?.Itinerary?.Passenger) {
              const passengerData = parsedData.GetBookingDetailResult.Itinerary.Passenger;
              setBookingDetails({ Passenger: passengerData });
            }
          } catch (error) {
            console.error("Error parsing updated localStorage data:", error);
          }
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Determine seat status from API seat object
  const getSeatStatusFromAPI = (seat) => {
    // Determine if it's a seater or sleeper based on SeatType
    const isSeater = seat.SeatType === 1 || seat.SeatType === "1" || seat.SeatType === "Seater";
    const seatType = isSeater ? "Seater" : "Sleeper";

    // Check multiple possible booking status indicators
    const isBooked =
      seat.IsBooked === true ||
      seat.Status === "Booked" ||
      seat.SeatStatus === false ||
      seat.IsAvailable === false ||
      seat.BookingStatus === "Booked" ||
      seat.SeatStatus === "Booked" ||
      seat.IsOccupied === true ||
      seat.Occupied === true ||
      seat.Booked === true ||
      seat.Available === false ||
      seat.Availability === false ||
      seat.IsReserved === true ||
      seat.Reserved === true ||
      seat.IsBlocked === true ||
      seat.Blocked === true ||
      seat.Status === "Occupied" ||
      seat.Status === "Reserved" ||
      seat.Status === "Blocked" ||
      seat.Status === "Unavailable";

    if (isBooked) {
      return `booked${seatType}`;
    }

    // Check for gender-specific seats
    if (seat.Gender === "Female" || seat.IsLadiesSeat === true) {
      return `female${seatType}`;
    }

    if (seat.Gender === "Male" || seat.IsMalesSeat === true) {
      return `male${seatType}`;
    }

    // Default to available
    return `available${seatType}`;
  };

  // Determine seat status from HTML class
  const getSeatStatusFromClass = (className) => {
    if (className.includes("bhseat")) return "bookedSleeper";
    if (className.includes("hseat")) return "availableSleeper";
    return "availableSleeper";
  };

  // Process seat layout data from API
  const processSeatLayoutData = useMemo(() => {
    if (
      !seatLayoutData ||
      !seatLayoutData.GetBusSeatLayOutResult ||
      !seatLayoutData.GetBusSeatLayOutResult.SeatLayoutDetails
    ) {
      return { upperDeck: [], lowerDeck: [], prices: ["All"] };
    }

    const seatLayoutDetails =
      seatLayoutData.GetBusSeatLayOutResult.SeatLayoutDetails;

    const seatLayout = seatLayoutDetails.SeatLayout;
    const upperDeck = [];
    const lowerDeck = [];
    const prices = new Set(["All"]);

    // Helper function to extract price value
    const extractPrice = (priceData) => {
      if (typeof priceData === "number") return priceData;
      if (typeof priceData === "string") return parseFloat(priceData) || 0;
      if (priceData && typeof priceData === "object") {
        // Handle price object with multiple properties
        return (
          priceData.PublishedPriceRoundedOff ||
          priceData.OfferedPriceRoundedOff ||
          priceData.BasePrice ||
          priceData.PublishedPrice ||
          priceData.OfferedPrice ||
          0
        );
      }
      return 0;
    };

    // Process seat details from the API response
    if (
      seatLayout &&
      seatLayout.SeatDetails &&
      Array.isArray(seatLayout.SeatDetails)
    ) {
      seatLayout.SeatDetails.forEach((row, rowIndex) => {
        if (Array.isArray(row)) {
          row.forEach((seat, colIndex) => {
            if (seat) {
              const priceValue = extractPrice(seat.Price || seat.Fare);
              const seatStatus = getSeatStatusFromAPI(seat);
              const seatData = {
                id: `${rowIndex}-${colIndex}`,
                label:
                  seat.SeatNumber ||
                  seat.SeatName ||
                  `${rowIndex + 1}${String.fromCharCode(65 + colIndex)}`,
                price: priceValue,
                status: seatStatus,
                seatType: seat.SeatType === 1 || seat.SeatType === "1" || seat.SeatType === "Seater" ? "Seater" : "Sleeper",
                seatInfo: seat, // Store the original seat data
                row: rowIndex,
                col: colIndex,
              };

              // Determine if it's upper or lower deck based on IsUpper property
              const isUpper = seat.IsUpper === true || seat.IsUpper === "true";
              if (isUpper) {
                upperDeck.push(seatData);
              } else {
                lowerDeck.push(seatData);
              }

              if (priceValue > 0) {
                prices.add(priceValue);
              }
            }
          });
        }
      });
    }

    // If no seats found in SeatDetails, try to parse from HTMLLayout
    if (
      upperDeck.length === 0 &&
      lowerDeck.length === 0 &&
      seatLayoutDetails.HTMLLayout
    ) {
      return parseHTMLSeatLayout(seatLayoutDetails.HTMLLayout, prices);
    }

    // If still no seats found, check if there are other possible structures
    if (upperDeck.length === 0 && lowerDeck.length === 0) {
      // Check if seats might be in a different property
      if (seatLayoutDetails.Seats && Array.isArray(seatLayoutDetails.Seats)) {
        seatLayoutDetails.Seats.forEach((seat, index) => {
          if (seat) {
            const priceValue = extractPrice(seat.Price || seat.Fare);
            const seatStatus = getSeatStatusFromAPI(seat);
            const seatData = {
              id: `seat-${index}`,
              label: seat.SeatNumber || seat.SeatName || `Seat${index + 1}`,
              price: priceValue,
              status: seatStatus,
              seatType: seat.SeatType === 1 || seat.SeatType === "1" || seat.SeatType === "Seater" ? "Seater" : "Sleeper",
              seatInfo: seat,
            };

            // Distribute seats between upper and lower deck
            if (index % 2 === 0) {
              upperDeck.push(seatData);
            } else {
              lowerDeck.push(seatData);
            }

            if (priceValue > 0) {
              prices.add(priceValue);
            }
          }
        });
      }
    }

    return {
      upperDeck,
      lowerDeck,
      prices: Array.from(prices).sort((a, b) => (a === "All" ? -1 : a - b)),
    };
  }, [seatLayoutData]);

  // Parse HTML layout as fallback
  const parseHTMLSeatLayout = (htmlLayout, prices) => {
    const upperDeck = [];
    const lowerDeck = [];

    // Helper function to extract price value (same as in processSeatLayoutData)
    const extractPrice = (priceData) => {
      if (typeof priceData === "number") return priceData;
      if (typeof priceData === "string") return parseFloat(priceData) || 0;
      if (priceData && typeof priceData === "object") {
        return (
          priceData.PublishedPriceRoundedOff ||
          priceData.OfferedPriceRoundedOff ||
          priceData.BasePrice ||
          priceData.PublishedPrice ||
          priceData.OfferedPrice ||
          0
        );
      }
      return 0;
    };

    // Find the positions of upper and lower deck sections
    const upperSectionStart = htmlLayout.indexOf('<div class=\'outerseat\'>');
    const lowerSectionStart = htmlLayout.indexOf('<div class=\'outerlowerseat\'>');

    // Extract seat information from HTML
    const seatRegex =
      /id="([^"]+)"[^>]*class="([^"]+)"[^>]*onclick="[^"]*'([^']+)'[^"]*'([^']+)'[^"]*'([^']+)'/g;
    let match;
    let seatId = 1;

    while ((match = seatRegex.exec(htmlLayout)) !== null) {
      const [fullMatch, id, className, seatNumber, price] = match;
      const seatPrice = extractPrice(price);
      const seatPosition = match.index; // Position of this seat in the HTML

      const seatData = {
        id: seatId++,
        label: seatNumber,
        price: seatPrice,
        status: getSeatStatusFromClass(className),
        seatType: "Sleeper", // Default to sleeper for HTML layout
        seatInfo: { id, className, seatNumber, price: seatPrice },
      };

      // Determine deck based on which section the seat appears in
      // If seat appears after upper section start but before lower section start, it's upper deck
      // If seat appears after lower section start, it's lower deck
      if (seatPosition > upperSectionStart && (lowerSectionStart === -1 || seatPosition < lowerSectionStart)) {
        upperDeck.push(seatData);
      } else if (lowerSectionStart !== -1 && seatPosition > lowerSectionStart) {
        lowerDeck.push(seatData);
      } else {
        // Fallback: if we can't determine, put in upper deck
        upperDeck.push(seatData);
      }

      if (seatPrice > 0) {
        prices.add(seatPrice);
      }
    }

    return {
      upperDeck,
      lowerDeck,
      prices: Array.from(prices).sort((a, b) => (a === "All" ? -1 : a - b)),
    };
  };

  const { upperDeck, lowerDeck, prices } = processSeatLayoutData;

  const allSeats = [...upperDeck, ...lowerDeck];

  const toggleSelect = (seat) => {
    if (seat.status.toLowerCase().includes("booked")) return;

    const newSelectedSeats = selectedSeats.includes(seat.label)
      ? selectedSeats.filter((s) => s !== seat.label)
      : [...selectedSeats, seat.label];

    setSelectedSeats(newSelectedSeats);

    // Store selected seats in localStorage
    setEncryptedItem("selectedSeats", newSelectedSeats);

    // Store original seat layout data for block request
    if (seatLayoutData && seatLayoutData.GetBusSeatLayOutResult) {
      const originalSeatLayout = seatLayoutData.GetBusSeatLayOutResult.SeatLayoutDetails;
      setEncryptedItem("originalSeatLayoutData", originalSeatLayout);
    }

    // Also store simplified seat data for compatibility
    const simplifiedSeatLayoutData = {
      seats: allSeats.map(s => ({
        label: s.label,
        seatIndex: s.id,
        rowNo: s.rowNo || "001",
        columnNo: s.columnNo || "001",
        isUpper: s.isUpper || false,
        isLadiesSeat: s.status === "femaleSleeper" || s.status === "femaleSeater",
        isMalesSeat: s.status === "maleSleeper" || s.status === "maleSeater",
        seatType: s.seatType || "Sleeper",
        price: s.price,
        height: s.height || 1,
        width: s.width || 1,
        originalSeatInfo: s.seatInfo // Store original seat info
      }))
    };
    setEncryptedItem("seatLayoutData", simplifiedSeatLayoutData);
  };

  const getSeatClass = (seat) => {
    const base = "seat";
    const isHighlighted = priceFilter !== "All" && seat.price === priceFilter;
    const seatTypeClass = seat.seatType === "Seater" ? "seater" : "sleeper";

    if (selectedSeats.includes(seat.label))
      return `${base} selected ${seat.status} ${seatTypeClass} ${isHighlighted ? "highlight" : ""
        }`;
    return `${base} ${seat.status} ${seatTypeClass} ${isHighlighted ? "highlight" : ""}`;
  };

  const total = selectedSeats.reduce((acc, label) => {
    const s = allSeats.find((seat) => seat.label === label);
    return acc + (s ? s.price : 0);
  }, 0);

  const renderRow = (deck, indices) => (
    <div className="d-flex gap-3 flex-column justify-content-center mb-3">
      {indices.map((i) => {
        const seat = deck[i];
        if (!seat) return null;

        // Ensure price is always a number or string
        const displayPrice =
          typeof seat.price === "number"
            ? seat.price
            : typeof seat.price === "string"
              ? parseFloat(seat.price) || 0
              : 0;

        // Determine deck prefix (U for Upper, L for Lower)
        const deckPrefix = upperDeck.includes(seat) ? "U" : "L";
        const seatNumber = `${deckPrefix}${seat.label}`;

        // Determine which icon to show based on seat status and type
        const getSeatIcon = () => {
          // For seater seats, show chair icon
          if (seat.seatType === "Seater") {
            if (seat.status === "maleSeater")
              return <FaMale className="seat-icon" />;
            if (seat.status === "femaleSeater")
              return <FaFemale className="seat-icon" />;
            return <FaChair className="seat-icon" />;
          }

          // For sleeper seats, show user icon
          if (seat.status === "maleSleeper" || seat.status === "maleSeater")
            return <FaMale className="seat-icon" />;
          if (seat.status === "femaleSleeper" || seat.status === "femaleSeater")
            return <FaFemale className="seat-icon" />;
          return <FaUser className="seat-icon" />;
        };

        // Check if seat is booked and find passenger gender
        let bookedGender = null;
        if (seat.status.includes('booked') && bookingDetails?.Passenger) {
          const passenger = bookingDetails.Passenger.find(p => p.Seat?.SeatName === seat.label);
          if (passenger) {
            const gender = passenger.Gender;
            if (gender === 1 || gender === "1" || gender === "MALE" || gender === "Male") {
              bookedGender = "Male";
            } else if (gender === 2 || gender === "2" || gender === "FEMALE" || gender === "Female") {
              bookedGender = "Female";
            } else {
              bookedGender = "Other";
            }
          }
        }

        return (
          <div key={seat.id} className="seat-wrapper-item">
            <div
              className={`${getSeatClass(seat)} seat-container`}
              onClick={() => toggleSelect(seat)}
              onMouseEnter={() => setHoveredSeat(seat.label)}
              onMouseLeave={() => setHoveredSeat(null)}
              data-seat-number={seatNumber}
              data-price={displayPrice}
            >
              {getSeatIcon()}
              {hoveredSeat === seat.label && (
                <div className="seat-tooltip">
                  <div className="tooltip-content">
                    <div className="tooltip-seat">{seatNumber}</div>
                    <div className="tooltip-status">
                      {seat.status.includes('booked') ? (
                        <>
                          <div>Sold</div>
                          {bookedGender && <div>Booked ({bookedGender})</div>}
                        </>
                      ) : seat.status.includes('female') ? 'Female Only' :
                        seat.status.includes('male') ? 'Male Only' :
                          'Available'}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="seat-price">₹{displayPrice}</div>
          </div>
        );
      })}
    </div>
  );

  // Get boarding and dropping points from current bus data
  const getBoardingPoints = useMemo(() => {
    if (
      !currentBus ||
      !currentBus.BoardingPointsDetails ||
      currentBus.BoardingPointsDetails.length === 0
    ) {
      return [];
    }

    return currentBus.BoardingPointsDetails.map((point) => ({
      location: point.CityPointName,
      time: point.CityPointTime,
      phone: "7303093510", // Default phone number since it's not in the data
      address: point.CityPointLocation || "",
    }));
  }, [currentBus]);

  const getDroppingPoints = useMemo(() => {
    if (
      !currentBus ||
      !currentBus.DroppingPointsDetails ||
      currentBus.DroppingPointsDetails.length === 0
    ) {
      return [];
    }

    return currentBus.DroppingPointsDetails.map((point) => ({
      location: point.CityPointName,
      time: point.CityPointTime,
      address: point.CityPointLocation || "",
      note: point.CityPointLocation || "",
    }));
  }, [currentBus]);

  const boardingPoints = getBoardingPoints;
  const droppingPoints = getDroppingPoints;

  if (loading) {
    return (
      <div className="seat-wrapper">
        <style jsx>{`
          .skeleton-seat {
            width: 40px;
            height: 55px;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
            border-radius: 8px;
            margin: 2px;
          }

          .skeleton-seat.sleeper {
            border-radius: 12px 12px 8px 8px;
            width: 42px;
            height: 58px;
          }

          .skeleton-seat.seater {
            border-radius: 8px;
            width: 45px;
            height: 50px;
          }

          .skeleton-price {
            width: 40px;
            height: 20px;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
            border-radius: 4px;
            margin: 2px auto;
          }

          .skeleton-deck-title {
            width: 120px;
            height: 24px;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
            border-radius: 4px;
            margin-bottom: 20px;
          }

          .skeleton-filter {
            width: 80px;
            height: 32px;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
            border-radius: 20px;
            margin: 4px;
          }

          .skeleton-tab {
            width: 120px;
            height: 40px;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
            border-radius: 8px 8px 0 0;
            margin: 0 10px;
          }

          .skeleton-instructions-title {
            width: 100px;
            height: 24px;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
            border-radius: 4px;
            margin-bottom: 15px;
          }

          .skeleton-instruction-row {
            width: 100%;
            height: 40px;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
            border-radius: 4px;
            margin-bottom: 8px;
          }

          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }

          .skeleton-wrapper-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
          }

          .skeleton-row {
            display: flex;
            gap: 3px;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 12px;
          }

          .skeleton-deck-container {
            display: flex;
            flex-direction: column;
            background: white;
            align-items: center;
            border-radius: 12px;
            padding: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
          }

          .skeleton-filters {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 25px;
            justify-content: center;
          }

          .skeleton-tabs {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
            justify-content: center;
            border-bottom: 2px solid #e9ecef;
            padding-bottom: 10px;
          }

          .skeleton-instructions {
            background: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .skeleton-seats-grid {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .skeleton-seats-column {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .skeleton-seat-row {
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: center;
          }
        `}</style>

        {/* Skeleton Tabs */}
        <div className="skeleton-tabs">
          <div className="skeleton-tab"></div>
          <div className="skeleton-tab"></div>
        </div>

        {/* Skeleton Filters */}
        <div className="skeleton-filters">
          <div className="skeleton-filter"></div>
          <div className="skeleton-filter"></div>
          <div className="skeleton-filter"></div>
          <div className="skeleton-filter"></div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-6">
                <div className="skeleton-deck-container">
                  <div className="skeleton-deck-title"></div>
                  <div className="skeleton-seats-grid">
                    <div className="skeleton-seats-column">
                      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="skeleton-seat-row">
                          <div className="skeleton-seat sleeper"></div>
                          <div className="skeleton-price"></div>
                        </div>
                      ))}
                    </div>
                    <div className="skeleton-seats-column">
                      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="skeleton-seat-row">
                          <div className="skeleton-seat sleeper"></div>
                          <div className="skeleton-price"></div>
                        </div>
                      ))}
                    </div>
                    <div className="skeleton-seats-column">
                      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="skeleton-seat-row">
                          <div className="skeleton-seat sleeper"></div>
                          <div className="skeleton-price"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="skeleton-deck-container">
                  <div className="skeleton-deck-title"></div>
                  <div className="skeleton-seats-grid">
                    <div className="skeleton-seats-column">
                      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="skeleton-seat-row">
                          <div className="skeleton-seat sleeper"></div>
                          <div className="skeleton-price"></div>
                        </div>
                      ))}
                    </div>
                    <div className="skeleton-seats-column">
                      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="skeleton-seat-row">
                          <div className="skeleton-seat sleeper"></div>
                          <div className="skeleton-price"></div>
                        </div>
                      ))}
                    </div>
                    <div className="skeleton-seats-column">
                      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="skeleton-seat-row">
                          <div className="skeleton-seat sleeper"></div>
                          <div className="skeleton-price"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="skeleton-instructions">
              <div className="skeleton-instructions-title"></div>
              <div className="skeleton-instruction-row"></div>
              <div className="skeleton-instruction-row"></div>
              <div className="skeleton-instruction-row"></div>
              <div className="skeleton-instruction-row"></div>
              <div className="skeleton-instruction-row"></div>
              <div className="skeleton-instruction-row"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="seat-wrapper">
      <style jsx>{`
        .seat-wrapper {
          padding: 4px;
          font-family: "Poppins", sans-serif;
          background: #f8f9fa;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .tabs {
          display: flex;
          gap: 20px;
          margin-bottom: 10px;
          cursor: pointer;
          width: 100%;
          justify-content: center;
          border-bottom: 2px solid #e9ecef;
          padding-bottom: 10px;
        }

        .tabs div {
          padding: 12px 24px;
          border-bottom: 3px solid transparent;
          font-weight: 500;
          color: #6c757d;
          transition: all 0.3s ease;
          border-radius: 8px 8px 0 0;
        }

        .tabs div:hover {
          color: #cd2c22;
          background: rgba(205, 44, 34, 0.1);
        }

        .tabs .active {
          border-bottom: 3px solid #cd2c22;
          font-weight: 600;
          color: #cd2c22;
          background: rgba(205, 44, 34, 0.1);
        }

        /* Sub-tabs for Boarding/Dropping under 1200px */
        .boarding-subtabs {
          display: flex;
          gap: 12px;
          justify-content: space-around;
          margin-bottom: 16px;
          border-bottom: 2px solid #e9ecef;
          padding-bottom: 8px;
          width: 100%;
        }

        .boarding-subtabs .subtab {
          padding: 8px 16px;
          border-bottom: 3px solid transparent;
          color: #6c757d;
          border-radius: 6px 6px 0 0;
          cursor: pointer;
          user-select: none;
        }

        .boarding-subtabs .subtab.active {
          color: #cd2c22;
          background: rgba(205, 44, 34, 0.08);
          border-bottom-color: #cd2c22;
          font-weight: 600;
        }

        .tabs div.disabled {
          color: #adb5bd;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .seat {
          padding: 12px 8px;
          width: 40px;
          height: 55px;
          text-align: center;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        /* Seater seat design - rectangular with rounded corners */
        .seat.seater {
          border-radius: 8px;
          width: 45px;
          height: 50px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Sleeper seat design - more rounded, pillow-like appearance */
        .seat.sleeper {
          border-radius: 12px 12px 8px 8px;
          width: 42px;
          height: 58px;
          position: relative;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
        }

        .seat.sleeper::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 8px;
          background: inherit;
          border-radius: 4px;
          opacity: 0.8;
        }

        /* Add subtle texture to sleeper seats */
        .seat.sleeper::after {
          content: '';
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 1px;
        }

        /* Male seats - both seater and sleeper */
        .maleSleeper, .maleSeater {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          border: 2px solid #1976d2;
          color: #0d47a1;
        }

        /* Female seats - both seater and sleeper */
        .femaleSleeper, .femaleSeater {
          background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%);
          border: 2px solid #e91e63;
          color: #c2185b;
        }

        /* Booked seats - both seater and sleeper */
        .bookedSleeper, .bookedSeater {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border: 2px solid #6c757d;
          color: #6c757d;
          cursor: not-allowed;
          opacity: 0.7;
        }

        /* Female booked seats - both seater and sleeper */
        .femaleBookedSleeper, .femaleBookedSeater {
          background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%);
          border: 2px solid #e91e63;
          color: #c2185b;
          cursor: not-allowed;
          opacity: 0.7;
        }

        /* Available seats - both seater and sleeper */
        .availableSleeper, .availableSeater {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border: 2px solid #28a745;
          color: #155724;
        }

        .availableSleeper:hover, .availableSeater:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
        }

        .selected {
          background: linear-gradient(
            135deg,
            #cd2c22 0%,
            #b30000 100%
          ) !important;
          color: white !important;
          border: 2px solid #cd2c22 !important;
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(205, 44, 34, 0.4);
        }

        .highlight {
          border: 3px solid #ffc107 !important;
          box-shadow: 0 0 10px rgba(255, 193, 7, 0.5);
        }

        .seat-wrapper-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .seat-price {
          font-size: 11px;
          font-weight: 600;
          color: #495057;
          text-align: center;
          background: white;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid #dee2e6;
        }

        .seat-container {
          position: relative;
        }

        .seat-icon {
          font-size: 14px;
        }

        /* Make chair icon slightly smaller for seater seats */
        .seat.seater .seat-icon {
          font-size: 12px;
        }

        .seat-tooltip {
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          background: #343a40;
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          z-index: 1000;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          min-width: 80px;
        }

        .tooltip-content {
          text-align: center;
        }

        .tooltip-seat {
          font-weight: 700;
          margin-bottom: 2px;
        }

        .tooltip-price {
          color: #ffc107;
          font-size: 11px;
        }

        .tooltip-status {
          color: #ffffff;
          font-size: 10px;
          font-weight: 500;
          margin: 2px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .seat-tooltip::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #343a40;
        }

        .filters {
          margin-bottom: 25px;
        }

        .filters .btn {
          border-radius: 20px;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          margin-right: 8px;
          margin-bottom: 8px;
        }

        .filters .btn-outline-secondary {
          border-color: #6c757d;
          color: #6c757d;
        }

        .filters .btn-outline-secondary:hover {
          background-color: #6c757d;
          color: white;
          border-color: #6c757d;
        }

        .filters .btn-danger {
          background-color: #cd2c22;
          border-color: #cd2c22;
        }

        .deck-container {
          display: flex;
          flex-direction: column;
          background: white;
          align-items: center;
          border-radius: 12px;
          padding: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .deck-title {
          font-size: 18px;
          font-weight: 600;
          color: #343a40;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .deck-title::before {
          content: "";
          width: 4px;
          height: 20px;
          background: #cd2c22;
          border-radius: 2px;
        }



        .seat-instructions {
          background: white;
          border-radius: 12px;
          padding: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .seat-instructions h4 {
          font-size: 18px;
          font-weight: 600;
          color: #343a40;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .seat-instructions table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }

        .seat-instructions th,
        .seat-instructions td {
          padding: 12px;
          text-align: left;
          border: 1px solid #dee2e6;
        }

        .seat-instructions th {
          background: #f8f9fa;
          font-weight: 600;
          color: #495057;
        }

        .seat-instructions td div {
          margin: 0 auto;
          width: 40px;
          height: 40px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          border: 2px solid transparent;
        }

        .seat-instructions .seat.seater {
          width: 45px;
          height: 50px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .seat-instructions .seat.sleeper {
          width: 42px;
          height: 58px;
          border-radius: 12px 12px 8px 8px;
          position: relative;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
        }

        .seat-instructions .seat.sleeper::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 8px;
          background: inherit;
          border-radius: 4px;
          opacity: 0.8;
        }

        .seat-instructions .seat.sleeper::after {
          content: '';
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 1px;
        }

        .available-seat {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border: 2px solid #28a745;
          color: #155724;
        }

        /* Ensure available-seat has visible border in instruction table */
        .seat-instructions .available-seat {
          border: 2px solid #28a745 !important;
        }

        /* Add borders to all seat types in instruction table */
        .seat-instructions .maleSleeper,
        .seat-instructions .femaleSleeper,
        .seat-instructions .bookedSleeper,
        .seat-instructions .selected {
          border: 2px solid;
        }

        /* Specific colors for instruction table seat types */
        .seat-instructions .maleSleeper {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          border-color: #1976d2;
          color: #0d47a1;
        }

        .seat-instructions .femaleSleeper {
          background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%);
          border-color: #e91e63;
          color: #c2185b;
        }

        .seat-instructions .bookedSleeper {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-color: #6c757d;
          color: #6c757d;
        }

        .seat-instructions .selected {
          background: linear-gradient(135deg, #cd2c22 0%, #b30000 100%);
          border-color: #cd2c22;
          color: white;
        }

        .seat-type-icon {
          font-size: 16px;
          color: inherit;
        }

        /* Adjust icon size for seater seats in instructions */
        .seat-instructions .seat.seater .seat-type-icon {
          font-size: 14px;
        }

        .total-section {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          margin-top: 20px;
        }

        .total-amount {
          font-size: 24px;
          font-weight: 700;
          color: #cd2c22;
        }

        // .boarding-points-wrapper {
        //   display: flex;
        //   flex-direction: column;
        //   gap: 20px;
        // }

        // .boarding-points-container {
        //   background: #f1f7ff; // light blue for visibility
        //   border-radius: 12px;
        //   padding: 20px;
        //   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        //   margin-top: 20px;
        // }

        // .point-item {
        //   border: 2px solid #e9ecef;
        //   border-radius: 8px;
        //   padding: 15px;
        //   margin-bottom: 15px;
        //   transition: all 0.3s ease;
        //   cursor: pointer;
        // }

        // .point-item:hover {
        //   border-color: #cd2c22;
        //   background: rgba(205, 44, 34, 0.05);
        // }

        // .point-item input[type="radio"]:checked + .point-content {
        //   border-color: #cd2c22;
        //   background: rgba(205, 44, 34, 0.1);
        // }



 

        // .point-time {
        //   background: #cd2c22;
        //   color: white;
        //   padding: 4px 8px;
        //   border-radius: 4px;
        //   font-size: 12px;
        //   font-weight: 600;
        // }


        /* Custom Alert Styles */
        .custom-alert-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
        }

        .custom-alert {
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          max-width: 400px;
          width: 90%;
          border: 2px solid #cd2c22;
        }

        .alert-header {
          background: #cd2c22;
          color: white;
          padding: 15px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 10px 10px 0 0;
        }

        .alert-icon {
          font-size: 18px;
          color: white;
        }

        .alert-title {
          font-weight: 600;
          font-size: 16px;
          flex: 1;
        }

        .alert-close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 16px;
          cursor: pointer;
          padding: 5px;
        }

        .alert-body {
          padding: 20px;
          color: #333;
          font-size: 14px;
          text-align: center;
        }

        .alert-footer {
          padding: 15px 20px 20px;
          text-align: center;
        }

        .alert-ok-btn {
          background: #cd2c22;
          color: white;
          border: none;
          padding: 10px 30px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 768px) {
          .seat-wrapper {
            padding: 15px;
          }

          .tabs {
            flex-direction: column;
            gap: 10px;
          }

          .tabs div {
            text-align: center;
          }

          .seat {
            width: 35px;
            height: 50px;
            font-size: 11px;
          }

          .filters .btn {
            font-size: 12px;
            padding: 6px 12px;
          }


 

        }

        /* New 1200px responsive rules */
        @media (max-width: 1200px) {

          .tabs {
            justify-content: center;
          }

          .deck-title { font-size: 16px; }
          .filters .btn { font-size: 13px; }
        }
          @media (max-width: 576px) {
            .scroll-bar {
              overflow-x: auto;
              scrollbar-width: thin;
              scrollbar-color: #cd2c22 #f8f9fa;
            }
          }
      `}</style>

      <div className="tabs">
        <div
          className={activeTab === "seat" ? "active" : ""}
          onClick={() => setActiveTab("seat")}
        >
          <FaBus className="me-2" />
          Select Seat
        </div>
        <div
          className={`${activeTab === "boarding" ? "active" : ""} ${selectedSeats.length === 0 ? "disabled" : ""
            }`}
          onClick={() => {
            if (selectedSeats.length > 0) {
              setActiveTab("boarding");
            } else {
              setAlertMessage("Please select at least one seat to continue.");
              setShowAlert(true);
            }
          }}
        >
          <FaMapMarkerAlt className="me-2" />
          Select Pickup & Drop Points
        </div>
      </div>

      {activeTab === "seat" && (
        <>
          <div className="filters d-flex gap-2 flex-wrap">
            {prices.map((p) => (
              <button
                key={p}
                className={`btn btn-sm ${priceFilter === p ? "btn-danger" : "btn-outline-primary"
                  }`}
                onClick={() => setPriceFilter(p)}
              >
                {p === "All" ? "All Prices" : `₹${p}`}
              </button>
            ))}
          </div>

          <div className="row">
            <div className=" col-xl-7 col-lg-12 col-md-8 col-sm-12 mb-3 col-12 " >
              {upperDeck.length === 0 && lowerDeck.length === 0 ? (
                <div className="deck-container">
                  <h4 className="deck-title">
                    <FaBus className="text-primary" />
                    No Seats Available
                  </h4>
                  <p className="text-muted">No seat layout data is currently available.</p>
                </div>
              ) : (
                <div className="d-flex gap-2 scroll-bar" >
                  <div className="col-xl-6 col-md-6 col-lg-6 col-sm-6">
                    <div className="deck-container">
                      <h4 className="deck-title">
                        <FaBus className="text-primary" />
                        Lower Deck
                      </h4>
                      <div className="d-flex gap-5 gap-lg-4 gap-xl-4 gap-md-4">
                        <div>{renderRow(lowerDeck, [2, 5, 8, 11, 14, 17, 20])}</div>
                        <div className="d-flex gap-3 gap-xl-2 gap-lg-3 gap-md-1  ">
                          {renderRow(lowerDeck, [1, 4, 7, 10, 13, 16, 19])}
                          {renderRow(lowerDeck, [0, 3, 6, 9, 12, 15, 18])}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-xl-6 col-md-6 col-lg-6 col-sm-6">
                    <div className="deck-container">
                      <h4 className="deck-title text-nowrap">
                        <FaBus className="text-primary " />
                        Upper Deck
                      </h4>
                      <div className="d-flex gap-5 gap-lg-5 gap-xl-4 gap-md-4 ">
                        <div>{renderRow(upperDeck, [2, 5, 8, 11, 14, 17, 20])}</div>
                        <div className="d-flex gap-3 gap-lg-3 gap-xl-2 gap-md-2 ">
                          {renderRow(upperDeck, [1, 4, 7, 10, 13, 16, 19])}
                          {renderRow(upperDeck, [0, 3, 6, 9, 12, 15, 18])}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className=" col-xl-5 col-lg-12 col-md-4">
              <div className="seat-instructions">
                <h4>
                  <FaUser className="text-primary" />
                  Seat Types
                </h4>
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>Available Seater</td>
                      <td>
                        <div className="available-seat seat seater availableSeater">
                          <FaChair className="seat-type-icon" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Available Sleeper</td>
                      <td>
                        <div className="available-seat seat sleeper availableSleeper">
                          <FaUser className="seat-type-icon" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Male Only</td>
                      <td>
                        <div className="maleSleeper seat sleeper">
                          <FaMale className="seat-type-icon" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Female Only</td>
                      <td>
                        <div className="femaleSleeper seat sleeper">
                          <FaFemale className="seat-type-icon" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Booked</td>
                      <td>
                        <div className="bookedSleeper seat sleeper">
                          <FaUser className="seat-type-icon" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Selected</td>
                      <td>
                        <div className="selected seat sleeper">
                          <FaUser className="seat-type-icon" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* <div className="total-section text-center">
            <h5 className="mb-2">Total Amount</h5>
            <div className="total-amount">₹{total}</div>
            <p className="text-muted mb-0">
              {selectedSeats.length} seat{selectedSeats.length !== 1 ? "s" : ""}{" "}
              selected
            </p>
          </div> */}
        </>
      )}

      {selectedSeats.length > 0 && activeTab === "seat" && (
        <div
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            color: "white",
            padding: "16px 0",
            background:"#fb6666",
            textAlign: "center",
            boxShadow: "0 -2px 10px rgba(0,0,0,0.15)",
          }}
        >
          <button
            className="btn btn-light"
            style={{ fontWeight: 600, fontSize: 18 }}
            onClick={() => setActiveTab("boarding")}
          >
            Select Boarding & Dropping Point
          </button>
        </div>
      )}

      {activeTab === "boarding" && (
        <>
          {isNarrow ? (
            <>
              <div className="boarding-subtabs">
                <div
                  className={`subtab ${boardingSubTab === "boarding" ? "active" : ""}`}
                  onClick={() => setBoardingSubTab("boarding")}
                >
                  Boarding Points
                </div>
                <div
                  className={`subtab ${boardingSubTab === "dropping" ? "active" : ""}`}
                  onClick={() => setBoardingSubTab("dropping")}
                >
                  Dropping Points
                </div>
              </div>
              {boardingSubTab === "boarding" ? (
                <BoardingPointsPage
                  boardingPoints={boardingPoints}
                  selectedBoarding={selectedBoarding}
                  onBoardingChange={setSelectedBoarding}
                  showContactInfo={true}
                  hideHeadings={true}
                />
              ) : (
                <BoardingPointsPage
                  droppingPoints={droppingPoints}
                  selectedDropping={selectedDropping}
                  onDroppingChange={setSelectedDropping}
                  showContactInfo={false}
                  hideHeadings={true}
                />
              )}
            </>
          ) : (
            <div
              className="d-flex gap-2  boarding-dropping-row"
            >
              <div style={{ flex: 1 }}>
                <BoardingPointsPage
                  boardingPoints={boardingPoints}
                  selectedBoarding={selectedBoarding}
                  onBoardingChange={setSelectedBoarding}
                  showContactInfo={true}
                />
              </div>
              <div style={{ flex: 1 }}>
                <BoardingPointsPage
                  droppingPoints={droppingPoints}
                  selectedDropping={selectedDropping}
                  onDroppingChange={setSelectedDropping}
                  showContactInfo={false}
                />
              </div>
            </div>
          )}
        </>
      )}

      {activeTab === "boarding" && (
        <div className="d-flex justify-content-end mt-3">
          <button
            className="btn btn-danger"
            onClick={() => {
              // Check if seats are selected
              if (selectedSeats.length === 0) {
                setAlertMessage("Please select at least one seat before proceeding.");
                setShowAlert(true);
                return;
              }

              // Check if both boarding and dropping points are selected
              if (!selectedBoarding || !selectedDropping) {
                setAlertMessage("Please select both boarding and dropping points before proceeding.");
                setShowAlert(true);
                return;
              }

              // Additional validation to ensure points are actually selected
              if (selectedBoarding.trim() === "" || selectedDropping.trim() === "") {
                setAlertMessage("Please select both boarding and dropping points before proceeding.");
                setShowAlert(true);
                return;
              }

              // Check if user is authenticated
              const token = localStorage.getItem('authToken');
              const user1 = getEncryptedItem('user1');
              
              console.log('Bus booking authentication check:', { 
                hasToken: !!token, 
                hasUser1: !!user1,
                busName: currentBus?.BusName || 'Unknown Bus'
              });
              
              if (!token || !user1) {
                // User is not authenticated, show authentication popup
                console.log('User not authenticated, showing auth popup for bus booking');
                setPendingBooking(true);
                setShowAuthPopup(true);
                return;
              }
              
              console.log('User authenticated, proceeding with bus booking');
              // Only open modal if both boarding and dropping points are selected and user is authenticated
              if (selectedBoarding.trim() && selectedDropping.trim()) {
                proceedWithBooking();
              }
            }}
            style={{ padding: "12px 30px", fontSize: "16px", fontWeight: "600"  }}
          >
            Book Now
          </button>
        </div>
      )}

      <BusBookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        currentBus={currentBus}
        selectedSeats={selectedSeats}
        selectedBoarding={selectedBoarding}
        selectedDropping={selectedDropping}
      />

      {/* Custom Alert Modal */}
      {showAlert && (
        <div className="custom-alert-overlay">
          <div className="custom-alert">
            <div className="alert-header">
              <FaExclamationTriangle className="alert-icon" />
              <span className="alert-title">Please Complete</span>
              <button
                className="alert-close-btn"
                onClick={() => setShowAlert(false)}
              >
                <FaTimes />
              </button>
            </div>
            <div className="alert-body">
              {alertMessage}
            </div>
            <div className="alert-footer">
              <button
                className="alert-ok-btn"
                onClick={() => setShowAlert(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Authentication Popup */}
      <AuthPopup 
        isOpen={showAuthPopup} 
        onClose={handleAuthClose} 
        mode="login" 
      />

    </div>
  );
};

export default BusSeatLayoutPage;
