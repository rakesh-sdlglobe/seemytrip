

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectGoogleUser } from "../../store/Selectors/authSelectors";
import {
  selectSearchParams,
  selectStations,
  selectLoading,
  selectTrains,
} from "../../store/Selectors/trainSelectors";
import Modal from "./Modal";
import { fetchTrainSchedule, fetchTrains } from "../../store/Actions/trainActions";
import { toast } from "react-toastify";
import SkeletonLoader from "./SkeletonLoader";
import NearbyDates from "./TrainNearbyDates";
import CalendarNearbyDates from "./CalendarNearbyDates";
import AuthPopup from "../auth/AuthPopup";

// --- MOVE THIS OUTSIDE ---
const MobileFilterModal = ({
  showMobileModal,
  setShowMobileModal,
  filters,
  setFilters,
}) => {
  const [modalFilters, setModalFilters] = React.useState(filters);

  React.useEffect(() => {
    setModalFilters(filters);
  }, [filters, showMobileModal]);

  const handleModalFilterChange = React.useCallback((e) => {
    e.stopPropagation(  );
    const { id, type, checked, name, value } = e.target;
    setModalFilters(prevFilters => {
      if (type === "checkbox") {
        return { ...prevFilters, [id]: checked };
      } else if (type === "radio") {
        return { ...prevFilters, [name]: value };
      }
      return prevFilters;
    });
  }, []);

  const handleApplyFilters = () => {
    setFilters(modalFilters);
    setShowMobileModal(null);
  };

  const handleClearModalFilters = () => {
    setModalFilters({
      ac: false,
      available: false,
      departureEarlyMorning: false,
      departureMorning: false,
      departureMidDay: false,
      departureNight: false,
      arrivalEarlyMorning: false,
      arrivalMorning: false,
      arrivalMidDay: false,
      arrivalNight: false,
      freeCancellation: false,
      tripGuarantee: false,
      "1A": false,
      "2A": false,
      "3A": false,
      "3E": false,
      SL: false,
      quota: "GN"
    });
  };

  return showMobileModal === "filter" && (
    <div className="mobile-filter-modal-overlay">
      <div className="mobile-filter-modal-content">
        <div className="mobile-filter-modal-header border-bottom d-flex justify-content-between align-items-center p-3">
          <h5 className="mb-0">Filters</h5>
          <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowMobileModal(null)}></button>
        </div>
        <div className="mobile-filter-modal-body p-3">
          {/* Quick Filters */}
          <div className="searchBar-single mb-4">
            <h6 className="sidebar-subTitle fs-6 fw-medium mb-3">Quick Filters</h6>
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 list-unstyled">
              <li className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="ac"
                    checked={modalFilters.ac || false}
                    onChange={handleModalFilterChange}
                  />
                  <label className="form-check-label" htmlFor="ac">
                    AC
                  </label>
                </div>
              </li>
              <li className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="available"
                    checked={modalFilters.available || false}
                    onChange={handleModalFilterChange}
                  />
                  <label className="form-check-label" htmlFor="available">
                    Available
                  </label>
                </div>
              </li>
            </ul>
          </div>
          {/* Quota */}
          <div className="searchBar-single mb-4">
            <h6 className="sidebar-subTitle fs-6 fw-medium mb-3">Quota</h6>
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 list-unstyled">
              {["GN", "TQ", "PT", "LD"].map((q) => (
                <li className="col-12" key={q}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="quota"
                      id={q}
                      value={q} // Add value for radio buttons
                      checked={modalFilters.quota === q}
                      onChange={handleModalFilterChange}
                    />
                    <label className="form-check-label" htmlFor={q}>
                      {q === "GN"
                        ? "General"
                        : q === "TQ"
                        ? "Tatkal"
                        : q === "PT"
                        ? "Premium Tatkal"
                        : "Ladies"}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Journey Class */}
          <div className="searchBar-single mb-4">
            <h6 className="sidebar-subTitle fs-6 fw-medium mb-3">Journey Class</h6>
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 list-unstyled">
              {["1A", "2A", "3A", "3E", "SL"].map((cls) => (
                <li className="col-12" key={cls}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={cls}
                      checked={modalFilters[cls] || false}
                      onChange={handleModalFilterChange}
                    />
                    <label className="form-check-label" htmlFor={cls}>
                      {cls === "1A"
                        ? "1A (First Class AC)"
                        : cls === "2A"
                        ? "2A (Second Class AC)"
                        : cls === "3A"
                        ? "3A (Third Class AC)"
                        : cls === "3E"
                        ? "3E (AC 3 tier Economy)"
                        : "SL (Sleeper Class)"}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Departure Time Filters */}
          <div className="searchBar-single mb-4">
            <h6 className="sidebar-subTitle fs-6 fw-medium mb-3">Departure Time</h6>
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 list-unstyled">
              {[
                { id: "departureEarlyMorning", label: "Early Morning (00:00 - 06:00)" },
                { id: "departureMorning", label: "Morning (06:00 - 12:00)" },
                { id: "departureMidDay", label: "Mid Day (12:00 - 18:00)" },
                { id: "departureNight", label: "Night (18:00 - 24:00)" },
              ].map((item) => (
                <li className="col-12" key={item.id}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={item.id}
                      checked={modalFilters[item.id] || false}
                      onChange={handleModalFilterChange}
                    />
                    <label className="form-check-label" htmlFor={item.id}>
                      {item.label}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrival Time Filters */}
          <div className="searchBar-single mb-4">
            <h6 className="sidebar-subTitle fs-6 fw-medium mb-3">Arrival Time</h6>
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 list-unstyled">
              {[
                { id: "arrivalEarlyMorning", label: "Early Morning (00:00 - 06:00)" },
                { id: "arrivalMorning", label: "Morning (06:00 - 12:00)" },
                { id: "arrivalMidDay", label: "Mid Day (12:00 - 18:00)" },
                { id: "arrivalNight", label: "Night (18:00 - 24:00)" },
              ].map((item) => (
                <li className="col-12" key={item.id}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={item.id}
                      checked={modalFilters[item.id] || false}
                      onChange={handleModalFilterChange}
                    />
                    <label className="form-check-label" htmlFor={item.id}>
                      {item.label}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Other Filters */}
          <div className="searchBar-single mb-4">
            <h6 className="sidebar-subTitle fs-6 fw-medium mb-3">Other Filters</h6>
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 list-unstyled">
              <li className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="freeCancellation"
                    checked={modalFilters.freeCancellation || false}
                    onChange={handleModalFilterChange}
                  />
                  <label className="form-check-label" htmlFor="freeCancellation">
                    Free Cancellation
                  </label>
                </div>
              </li>
              <li className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="tripGuarantee"
                    checked={modalFilters.tripGuarantee || false}
                    onChange={handleModalFilterChange}
                  />
                  <label className="form-check-label" htmlFor="tripGuarantee">
                    Trip Guarantee
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mobile-filter-modal-footer p-3 border-top d-flex justify-content-between">
          <button type="button" className="btn btn-outline-secondary flex-grow-1 me-2" onClick={handleClearModalFilters}>Clear All</button>
          <button
            type="button"
            className="btn btn-primary flex-grow-1 ms-2"
            style={{ background: "#cd2c22", border: "none" }}
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
        </div>
      </div>
      <style>{`
        .mobile-filter-modal-overlay {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: flex-end;
          z-index: 1050;
          overflow-y: auto;
        }
        .mobile-filter-modal-content {
          background: white;
          width: 100%;
          max-height: 90vh;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.3);
          animation: slideInUp 0.3s forwards;
        }
        .mobile-filter-modal-body {
          flex-grow: 1;
          overflow-y: auto;
        }
        .mobile-filter-modal-header {
          position: sticky;
          top: 0;
          background: white;
          z-index: 10;
        }
        .mobile-filter-modal-footer {
          position: sticky;
          bottom: 0;
          background: white;
          z-index: 10;
          box-shadow: 0 -2px 8px rgba(0,0,0,0.1);
        }
        @keyframes slideInUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
// --- END MOVE ---

const TrainSearchResultList = ({
  filters, // These are the actively applied filters
  setFilters, // Function to update the actively applied filters
  onFilterChange, // This is your existing handler for desktop/immediate filter changes
  handleClearAll,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux State Selectors
  const isAuthenticated = useSelector(selectGoogleUser) || JSON.parse(localStorage.getItem("user"));
  const stationsList = useSelector(selectStations);
  const reduxLoading = useSelector(selectLoading);
  const reduxSearchParams = useSelector(selectSearchParams);
  const reduxTrainData = useSelector(selectTrains);

  // Local Component State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrainNumber, setSelectedTrainNumber] = useState(null);
  const [selectedTrainFromStnCode, setSelectedTrainFromStnCode] = useState(null);
  const [selectedTrainToStnCode, setSelectedTrainToStnCode] = useState(null);
  const [expandedTrainId, setExpandedTrainId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(() => {
    const params = reduxSearchParams.date
      ? reduxSearchParams
      : JSON.parse(localStorage.getItem("trainSearchParams") || "{}");
    return params.date ? new Date(params.date) : new Date();
  });
  const [sortBy, setSortBy] = useState("departure");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [showMobileModal, setShowMobileModal] = useState(null); // "filter" or "sort"

  // Derived State from Redux / Local Storage
  const currentSearchParams = useMemo(() => {
    if (reduxSearchParams && Object.keys(reduxSearchParams).length > 0) {
      return reduxSearchParams;
    }
    try {
      return JSON.parse(localStorage.getItem("trainSearchParams") || "{}");
    } catch (e) {
      console.error("Failed to parse trainSearchParams from localStorage:", e);
      return {};
    }
  }, [reduxSearchParams]);

  const currentTrainData = useMemo(() => {
    if (reduxTrainData && reduxTrainData.length > 0) {
      return reduxTrainData;
    }
    try {
      return JSON.parse(localStorage.getItem("trains") || "[]");
    } catch (e) {
      console.error("Failed to parse trains from localStorage:", e);
      return [];
    }
  }, [reduxTrainData]);

  const isLoading = reduxLoading;
  const { date: journeyDateFromParams, formattedTrainDate } = currentSearchParams;

  const actualJourneyDate = useMemo(() => {
    return journeyDateFromParams ? new Date(journeyDateFromParams) : new Date();
  }, [journeyDateFromParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper Functions
  const formattedJourneyDate = useCallback((dateObj) => {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
  }, []);

  const formatDateToDayDDMONTH = useCallback((dateObj) => {
    return dateObj.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  }, []);

  const totalDuration = useCallback((duration) => {
    if (!duration) return "";
    const [hours, minutes] = duration.split(":").map((timePart) => parseInt(timePart, 10));
    return hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;
  }, []);

  const getStationName = useCallback(
    (stationCode) => {
      const station = stationsList?.find((stn) => stn?.split(" - ")[1] === stationCode);
      return station?.split(" - ")[0];
    },
    [stationsList]
  );

  const convertTo12HourFormat = useCallback((time) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
  }, []);

  const calculateArrival = useCallback((trainObj, journeyDateString) => {
    const { departureTime, duration } = trainObj;
    if (!departureTime || !duration) return { formattedArrivalTime: '', formattedArrivalDate: '' };

    const dateObj = new Date(journeyDateString);

    const [depHours, depMinutes] = departureTime.split(":").map(Number);
    dateObj.setHours(depHours, depMinutes, 0, 0);

    const [durHours, durMinutes] = duration.split(":").map(Number);
    dateObj.setHours(dateObj.getHours() + durHours);
    dateObj.setMinutes(dateObj.getMinutes() + durMinutes);

    const formattedArrivalTime = dateObj.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const formattedArrivalDate = dateObj.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });

    return { formattedArrivalTime, formattedArrivalDate };
  }, []);

  const getTrainArrival = useCallback((train, dateString, type) => {
    const { formattedArrivalTime, formattedArrivalDate } = calculateArrival(train, dateString);
    return type === "time" ? formattedArrivalTime : formattedArrivalDate;
  }, [calculateArrival]);

  // Handlers
  const handleDateSelect = useCallback(
    async (newDate) => {
      try {
        const { fromStnCode, toStnCode } = currentSearchParams;

        if (!fromStnCode || !toStnCode) {
          toast.error("Source and Destination stations are required for a search!", {
            position: "bottom-center",
            autoClose: 3000,
            theme: "colored",
          });
          return;
        }

        const formattedDateForApi = formattedJourneyDate(newDate);
        const newFormattedTrainDate = formatDateToDayDDMONTH(newDate);

        const updatedSearchParams = {
          ...currentSearchParams,
          date: newDate.toISOString(), // Store as ISO string
          formattedTrainDate: newFormattedTrainDate,
        };
        localStorage.setItem("trainSearchParams", JSON.stringify(updatedSearchParams));

        dispatch(fetchTrains(formattedDateForApi, fromStnCode, toStnCode));
        setSelectedDate(newDate); // Update local state for the calendar UI
      } catch (error) {
        console.error("Error fetching trains:", error);
        toast.error("Failed to fetch trains for the selected date.", {
          position: "bottom-center",
          autoClose: 3000,
          theme: "colored",
        });
      }
    },
    [dispatch, formattedJourneyDate, formatDateToDayDDMONTH, currentSearchParams]
  );

  const handleBooking = useCallback(
    (train, classInfo) => {
      const isAvailable =
        classInfo?.avlDayList?.[0]?.availablityType === "1" ||
        classInfo.avlDayList?.[0]?.availablityType === "2" ||
        classInfo.avlDayList?.[0]?.availablityType === "3";

      if (!isAvailable) {
        toast.error("Booking not allowed for this status.", {
          position: "bottom-center",
          autoClose: 2500,
          theme: "colored",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
        return;
      }

      const bookingData = {
        arrivalTime: getTrainArrival(train, actualJourneyDate.toISOString(), "time"),
        arrivalDate: getTrainArrival(train, actualJourneyDate.toISOString(), "date"),
        departureTime: convertTo12HourFormat(train?.departureTime),
        departureDate: formattedTrainDate, // Use the formatted date from currentSearchParams
        distance: train?.distance,
        duration: totalDuration(train?.duration),
        fromStnCode: train?.fromStnCode,
        journeyDate: formattedJourneyDate(actualJourneyDate), // Use the actual Date object
        toStnCode: train?.toStnCode,
        fromStnName: getStationName(train?.fromStnCode),
        toStnName: getStationName(train?.toStnCode),
        trainName: train?.trainName,
        trainNumber: train?.trainNumber,
        trainType: train?.trainType,
        classinfo: classInfo,
      };

      setBookingData(bookingData);
      if (isAuthenticated) {
        navigate("/trainbookingdetails", { state: { trainData: bookingData } });
      } else {
        setShowAuthPopup(true);
      }
    },
    [
      isAuthenticated,
      navigate,
      setShowAuthPopup,
      getTrainArrival,
      convertTo12HourFormat,
      formattedTrainDate,
      totalDuration,
      formattedJourneyDate,
      getStationName,
      actualJourneyDate,
    ]
  );

  const getFormattedSeatsData = useCallback((train, index) => {
    const availabilityStatus = train.availabilities[index]?.avlDayList?.[0]?.availablityStatus;
    const availablityType = train.availabilities[index]?.avlDayList?.[0]?.availablityType;

    if (availablityType === "0" || availablityType === "4" || availablityType === "5" || !availabilityStatus) {
      return availabilityStatus || "Not Available";
    } else if (availablityType === "1") {
      let seats = parseInt(availabilityStatus.split("-")[1], 10);
      return !isNaN(seats) ? `AVL ${seats}` : "AVL";
    } else if (availablityType === "2" && availabilityStatus.includes("RAC")) {
      let seats = parseInt(availabilityStatus.split("RAC")[2], 10);
      return !isNaN(seats) ? `RAC ${seats}` : "RAC";
    } else if (availablityType === "3" && availabilityStatus.includes("WL")) {
      let seats = parseInt(availabilityStatus.split("WL")[2], 10);
      return !isNaN(seats) ? `WL ${seats}` : "WL";
    } else {
      return "NOT AVAILABLE";
    }
  }, []);

  const openModel = useCallback(
    (trainNumber, trainFromStnCode, trainToStnCode) => {
      setSelectedTrainNumber(trainNumber);
      setSelectedTrainFromStnCode(trainFromStnCode);
      setSelectedTrainToStnCode(trainToStnCode);
      dispatch(fetchTrainSchedule(trainNumber));
      setIsModalOpen(true);
    },
    [dispatch]
  );

  const closeModel = useCallback(() => {
    setIsModalOpen(false);
    setSelectedTrainNumber(null);
    setSelectedTrainFromStnCode(null);
    setSelectedTrainToStnCode(null);
  }, []);

  const toggleNearbyDates = useCallback((trainNumber) => {
    setExpandedTrainId(prevId => prevId === trainNumber ? null : trainNumber);
  }, []);

  const getOriginalTrainData = useCallback(
    (trainNumber) => {
      let originalTrain = currentTrainData.find((train) => train.trainNumber === trainNumber);

      if (!originalTrain) {
        console.warn(`Original train data not found for train number: ${trainNumber}`);
        return null;
      }

      const trainCopy = { ...originalTrain };
      trainCopy.arrivalTime = getTrainArrival(trainCopy, actualJourneyDate.toISOString(), "time");
      trainCopy.departureTime = convertTo12HourFormat(trainCopy.departureTime);
      trainCopy.duration = totalDuration(trainCopy.duration);
      trainCopy.fromStnName = getStationName(trainCopy.fromStnCode);
      trainCopy.toStnName = getStationName(trainCopy.toStnCode);

      return trainCopy;
    },
    [currentTrainData, getTrainArrival, convertTo12HourFormat, totalDuration, getStationName, actualJourneyDate]
  );

  const getSortedTrains = useCallback((trains) => {
    return [...trains].sort((a, b) => {
      switch (sortBy) {
        case "departure":
          const depTimeA = new Date(`2000/01/01 ${a.departureTime}`).getTime();
          const depTimeB = new Date(`2000/01/01 ${b.departureTime}`).getTime();
          return sortOrder === "asc" ? depTimeA - depTimeB : depTimeB - depTimeA;
        case "arrival":
          const arrivalA = new Date(`2000/01/01 ${getTrainArrival(a, actualJourneyDate.toISOString(), "time")}`).getTime();
          const arrivalB = new Date(`2000/01/01 ${getTrainArrival(b, actualJourneyDate.toISOString(), "time")}`).getTime();
          return sortOrder === "asc" ? arrivalA - arrivalB : arrivalB - arrivalA;
        case "duration":
          const [hoursA, minsA] = (a.duration || "0:0").split(":").map(Number);
          const [hoursB, minsB] = (b.duration || "0:0").split(":").map(Number);
          const durationA = hoursA * 60 + minsA;
          const durationB = hoursB * 60 + minsB;
          return sortOrder === "asc" ? durationA - durationB : durationB - durationA;
        case "name":
          return sortOrder === "asc"
            ? a.trainName.localeCompare(b.trainName)
            : b.trainName.localeCompare(a.trainName);
        default:
          return 0;
      }
    });
  }, [sortBy, sortOrder, getTrainArrival, actualJourneyDate]);

  // Place these helpers above useMemo
  const getMinutes = (timeStr) => {
    if (!timeStr) return 0;
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
  };

  const isInRange = (time, start, end) => {
    return time >= start && time < end;
  };

  // Filtered Train Data (Memoized)
  const filteredTrainData = useMemo(() => {
    const applyFilters = (trains, currentFilters) => {
      return trains
        .map((train) => {
          // Filter availabilities by quota, class, and other filters
          const filteredAvailabilities = (train.availabilities || []).filter((avl) => {
            const seatClass = avl.enqClass;
            const isAnyClassSelected =
              currentFilters["1A"] ||
              currentFilters["2A"] ||
              currentFilters["3A"] ||
              currentFilters["3E"] ||
              currentFilters.SL;
            const isClassMatch =
              !isAnyClassSelected ||
              ((currentFilters["1A"] && seatClass === "1A") ||
                (currentFilters["2A"] && seatClass === "2A") ||
                (currentFilters["3A"] && seatClass === "3A") ||
                (currentFilters["3E"] && seatClass === "3E") ||
                (currentFilters.SL && seatClass === "SL"));
            const isQuotaMatch = currentFilters.quota ? avl.quota === currentFilters.quota : true;
            const isAvailabilityMatch =
              !currentFilters.available ||
              avl.avlDayList?.[0]?.availablityType === "1" ||
              avl.avlDayList?.[0]?.availablityType === "2";
            // Other Filters
            const isFreeCancellationMatch =
              !currentFilters.freeCancellation || avl.freeCancellation === true;
            const isTripGuaranteeMatch =
              !currentFilters.tripGuarantee || avl.tripGuarantee === true;

            return (
              isClassMatch &&
              isQuotaMatch &&
              isAvailabilityMatch &&
              isFreeCancellationMatch &&
              isTripGuaranteeMatch
            );
          });

          // Departure Time Filter
          let isDepartureTimeMatch = true;
          if (
            currentFilters.departureEarlyMorning ||
            currentFilters.departureMorning ||
            currentFilters.departureMidDay ||
            currentFilters.departureNight
          ) {
            const depMinutes = getMinutes(train.departureTime);
            isDepartureTimeMatch =
              (currentFilters.departureEarlyMorning && isInRange(depMinutes, 0, 360)) ||
              (currentFilters.departureMorning && isInRange(depMinutes, 360, 720)) ||
              (currentFilters.departureMidDay && isInRange(depMinutes, 720, 1080)) ||
              (currentFilters.departureNight && isInRange(depMinutes, 1080, 1440));
          }

          // Arrival Time Filter
          let isArrivalTimeMatch = true;
          if (
            currentFilters.arrivalEarlyMorning ||
            currentFilters.arrivalMorning ||
            currentFilters.arrivalMidDay ||
            currentFilters.arrivalNight
          ) {
            const arrTime = getTrainArrival(train, actualJourneyDate.toISOString(), "time");
            let arr24 = arrTime;
            if (arrTime && (arrTime.includes("AM") || arrTime.includes("PM"))) {
              const [time, period] = arrTime.split(" ");
              let [h, m] = time.split(":").map(Number);
              if (period === "PM" && h !== 12) h += 12;
              if (period === "AM" && h === 12) h = 0;
              arr24 = `${h}:${m.toString().padStart(2, "0")}`;
            }
            const arrMinutes = getMinutes(arr24 && typeof arr24 === "string" ? arr24.replace(/[^0-9:]/g, "") : "");
            isArrivalTimeMatch =
              (currentFilters.arrivalEarlyMorning && isInRange(arrMinutes, 0, 360)) ||
              (currentFilters.arrivalMorning && isInRange(arrMinutes, 360, 720)) ||
              (currentFilters.arrivalMidDay && isInRange(arrMinutes, 720, 1080)) ||
              (currentFilters.arrivalNight && isInRange(arrMinutes, 1080, 1440));
          }

          // Only return the train if it has at least one matching availability and matches time filters
          if (
            filteredAvailabilities.length > 0 &&
            isDepartureTimeMatch &&
            isArrivalTimeMatch
          ) {
            return { ...train, availabilities: filteredAvailabilities };
          }
          return null;
        })
        .filter(Boolean);
    };

    return applyFilters([...currentTrainData], filters);
  }, [currentTrainData, filters, getTrainArrival, actualJourneyDate]);

  // --- Mobile Filter/Sort Buttons ---
  const FilterSortBarMobile = () => (
    <div className="d-lg-none fixed-bottom bg-white border-top py-2 px-3 d-flex justify-content-between" style={{ zIndex: 1050 }}>
      <button className="btn btn-outline-primary flex-fill me-2" onClick={() => setShowMobileModal("filter")}>
        <i className="fas fa-filter me-2"></i>Filter
      </button>
      <button className="btn btn-outline-primary flex-fill" onClick={() => setShowMobileModal("sort")}>
        <i className="fas fa-sort me-2"></i>Sort
      </button>
    </div>
  );

  // --- MOBILE SORT MODAL ---
  const MobileSortModal = () => {
    // Local state for sortBy and sortOrder within the modal
    const [modalSortBy, setModalSortBy] = useState(sortBy);
    const [modalSortOrder, setModalSortOrder] = useState(sortOrder);

    const handleApplySort = (id, currentOrder) => {
      setSortBy(id);
      setSortOrder(currentOrder);
      setShowMobileModal(null); // Close the modal
    };

    return showMobileModal === "sort" && (
      <div className="mobile-filter-modal-overlay">
        <div className="mobile-filter-modal-content">
          <div className="mobile-filter-modal-header border-bottom d-flex justify-content-between align-items-center p-3">
            <h5 className="mb-0">Sort Options</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowMobileModal(null)}></button>
          </div>
          <div className="mobile-filter-modal-body p-3">
            <div className="mb-4">
              <h6 className="sidebar-subTitle fs-6 fw-medium mb-3">Sort by:</h6>
              <div className="btn-group d-flex flex-wrap" role="group">
                {[
                  { id: 'departure', label: 'Departure', icon: 'fa-clock' },
                  { id: 'arrival', label: 'Arrival', icon: 'fa-clock' },
                  { id: 'duration', label: 'Duration', icon: 'fa-hourglass-half' },
                  { id: 'name', label: 'Train Name', icon: 'fa-train' },
                ].map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`btn btn-sm ${modalSortBy === option.id ? 'btn-primary' : 'btn-outline-primary'} flex-grow-1`}
                    onClick={() => {
                      let newOrder = 'asc';
                      if (modalSortBy === option.id) {
                        newOrder = modalSortOrder === 'asc' ? 'desc' : 'asc';
                      }
                      setModalSortBy(option.id);
                      setModalSortOrder(newOrder);
                      handleApplySort(option.id, newOrder); // Apply sort and close modal
                    }}
                    style={{
                      borderRadius: '6px',
                      margin: '3px',
                      padding: '8px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      fontSize: '0.875rem'
                    }}
                  >
                    <i className={`fas ${option.icon}`}></i>
                    {option.label}
                    {modalSortBy === option.id && (
                      <i className={`fas fa-sort-${modalSortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .mobile-filter-modal-overlay {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: flex-end;
            z-index: 1050;
            overflow-y: auto;
          }
          .mobile-filter-modal-content {
            background: white;
            width: 100%;
            max-height: 90vh;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            display: flex;
            flex-direction: column;
            box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.3);
            animation: slideInUp 0.3s forwards;
          }
          .mobile-filter-modal-body {
            flex-grow: 1;
            overflow-y: auto;
          }
          .mobile-filter-modal-header {
            position: sticky;
            top: 0;
            background: white;
            z-index: 10;
          }
          @keyframes slideInUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    );
  };

  return (
    <div className="row align-items-center g-4 mt-0">
      {/* Offer Coupon Box */}
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="d-md-flex bg-success rounded-2 align-items-center justify-content-between px-3 py-3">
          <div className="d-md-flex align-items-center justify-content-start">
            <div className="mb-md-0 mb-3">
              <div className="square--60 circle bg-white">
                <i className="fa-solid fa-gift fs-3 text-success" />
              </div>
            </div>
            <div className="ps-2">
              <h6 className="fs-5 fw-medium text-light mb-0">Start Your Train Journey</h6>
              <p className="text-light mb-0">Book Train Tickets Easily and Enjoy Special Discounts with Our Platform</p>
            </div>
          </div>
          <div className="text-md-end mt-md-0 mt-4">
            <button type="button" className="btn btn-white fw-medium full-width text-dark px-xl-4">Get Started</button>
          </div>
        </div>
      </div>

      {/* Suggested Dates Section */}
      <div className="col-12">
        <div className="bg-white rounded-3">
          <CalendarNearbyDates
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
          />
        </div>
      </div>

      {/* Sorting Section (Desktop Only) */}
      <div className="col-12 mb-3 d-none d-lg-block">
        <div className="bg-white rounded-3 p-3">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="d-flex align-items-center">
              <span className="me-3 text-muted">Sort by:</span>
              <div className="btn-group" role="group">
                {[
                  { id: "departure", label: "Departure", icon: "fa-clock" },
                  { id: "arrival", label: "Arrival", icon: "fa-clock" },
                  { id: "duration", label: "Duration", icon: "fa-hourglass-half" },
                  { id: "name", label: "Train Name", icon: "fa-train" },
                ].map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`btn btn-sm ${
                      sortBy === option.id ? "btn-primary" : "btn-outline-primary"
                    }`}
                    onClick={() => {
                      if (sortBy === option.id) {
                        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                      } else {
                        setSortBy(option.id);
                        setSortOrder("asc");
                      }
                    }}
                    style={{
                      borderRadius: "6px",
                      margin: "0 3px",
                      padding: "4px 12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "0.875rem",
                    }}
                  >
                    <i className={`fas ${option.icon}`}></i>
                    {option.label}
                    {sortBy === option.id && (
                      <i
                        className={`fas fa-sort-${
                          sortOrder === "asc" ? "up" : "down"
                        } ms-1`}
                      ></i>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-muted">
              <i className="fas fa-train me-2"></i>
              {filteredTrainData.length} Trains found
            </div>
          </div>
        </div>
      </div>

      {/* Train List or No Trains Found Message */}
      {isLoading ? (
        <SkeletonLoader />
      ) : filteredTrainData?.length > 0 ? (
        getSortedTrains(filteredTrainData)?.map((train) => (
          <div key={train.trainNumber} className="col-xl-12 col-lg-12 col-md-12">
            <div
              className="train-availability-card bg-white rounded-3 p-4 pb-2 hover-shadow"
              style={{
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                transition: "all 0.3s ease",
                border: "1px solid #eee",
              }}
            >
              <div className="row gy-4 align-items-center justify-content-between">
                {/* Train Info Header */}
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="train-name me-4">
                      <small>#{train.trainNumber}</small>
                      <h5 className="mb-2 fw-bold" style={{ color: "#2c3e50" }}>
                        {train.trainName}
                      </h5>
                      <div className="text-muted small d-flex align-items-center">
                        <i className="fas fa-calendar-alt me-2"></i>
                        <b style={{ color: "black" }}> Runs on: </b>
                        <span
                          className="mx-1"
                          style={{
                            fontWeight: train?.runningSun === "Y" ? "bold" : "normal",
                            color: train?.runningSun === "Y" ? "#d20000" : "inherit",
                          }}
                        >
                          S
                        </span>
                        <span
                          className="mx-1"
                          style={{
                            fontWeight: train?.runningMon === "Y" ? "bold" : "normal",
                            color: train?.runningMon === "Y" ? "#d20000" : "inherit",
                          }}
                        >
                          M
                        </span>
                        <span
                          className="mx-1"
                          style={{
                            fontWeight: train?.runningTue === "Y" ? "bold" : "normal",
                            color: train?.runningTue === "Y" ? "#d20000" : "inherit",
                          }}
                        >
                          T
                        </span>
                        <span
                          className="mx-1"
                          style={{
                            fontWeight: train?.runningWed === "Y" ? "bold" : "normal",
                            color: train?.runningWed === "Y" ? "#d20000" : "inherit",
                          }}
                        >
                          W
                        </span>
                        <span
                          className="mx-1"
                          style={{
                            fontWeight: train?.runningThu === "Y" ? "bold" : "normal",
                            color: train?.runningThu === "Y" ? "#d20000" : "inherit",
                          }}
                        >
                          T
                        </span>
                        <span
                          className="mx-1"
                          style={{
                            fontWeight: train?.runningFri === "Y" ? "bold" : "normal",
                            color: train?.runningFri === "Y" ? "#d20000" : "inherit",
                          }}
                        >
                          F
                        </span>
                        <span
                          className="mx-1"
                          style={{
                            fontWeight: train?.runningSat === "Y" ? "bold" : "normal",
                            color: train?.runningSat === "Y" ? "#d20000" : "inherit",
                          }}
                        >
                          S
                        </span>
                      </div>
                    </div>

                    <div
                      className="journey-details flex-grow-1 mx-4 p-3"
                      style={{
                        background:
                          "linear-gradient(to right,rgb(234, 245, 255), #ffffff,rgb(234, 245, 255)",
                        borderRadius: "12px",
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="text-center">
                          <div
                            className="text-primary fw-bold"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {getStationName(train.fromStnCode)}
                          </div>
                          <div className="h4 mb-0 ">
                            {convertTo12HourFormat(train.departureTime)}
                          </div>
                          <div className="text-black-50">{formattedTrainDate}</div>
                        </div>

                        <div className="flex-grow-1 px-4">
                          <div className="journey-line position-relative">
                            <div className="duration text-center mb-2">
                              <span
                                className="badge bg-light text-dark px-3 py-2"
                                style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
                              >
                                {totalDuration(train.duration)}
                              </span>
                            </div>
                            <div
                              className="line d-flex align-items-center"
                              style={{
                                height: "2px",
                                position: "relative",
                              }}
                            >
                              {/* Start dot */}
                              <div
                                style={{
                                  width: "8px",
                                  height: "8px",
                                  backgroundColor: "#333333",
                                  borderRadius: "50%",
                                  position: "absolute",
                                  left: "-4px",
                                  zIndex: "1",
                                }}
                              ></div>
                              {/* Connecting line */}
                              <div
                                style={{
                                  height: "2px",
                                  flex: "1",
                                  backgroundColor: "#e0e0e0",
                                }}
                              ></div>
                              {/* End dot */}
                              <div
                                style={{
                                  width: "8px",
                                  height: "8px",
                                  backgroundColor: "#333333",
                                  borderRadius: "50%",
                                  position: "absolute",
                                  right: "-4px",
                                  zIndex: "1",
                                }}
                              ></div>
                            </div>
                            <div className="view-route text-center mt-2">
                              <button
                                className="badge bg-light text-danger px-3 py-2"
                                style={{
                                  boxShadow: "0 2px 4px rgba(36, 36, 36, 0.49)",
                                  border: "none",
                                  fontWeight: "bold",
                                }}
                                onClick={() =>
                                  openModel(train.trainNumber, train.fromStnCode, train.toStnCode)
                                }
                              >
                                View Route
                              </button>
                              <Modal
                                isOpen={isModalOpen}
                                onClose={closeModel}
                                trainNumber={selectedTrainNumber}
                                selectedTrainFromStnCode={selectedTrainFromStnCode}
                                selectedTrainToStnCode={selectedTrainToStnCode}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <div
                            className="text-primary fw-bold"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {getStationName(train.toStnCode)}
                          </div>
                          <div className="h4 mb-0 ">
                            {getTrainArrival(train, actualJourneyDate.toISOString(), "time")}
                          </div>
                          <div className="text-black-50">
                            {getTrainArrival(train, actualJourneyDate.toISOString(), "date")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="availability-section position-relative">
                    <button
                      className="scroll-arrow scroll-left"
                      onClick={(e) => {
                        const container = e.target.closest(".availability-section").querySelector(".scroll-container");
                        container.scrollBy({ left: -200, behavior: "smooth" });
                      }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>

                    <div className="scroll-container">
                      <div className="row text-center g-3 justify-content-start flex-nowrap">
                        {train.availabilities?.[0]?.avlDayList?.[0]?.availablityStatus === "TRAIN DEPARTED" ? (
                          <div
                            style={{
                              width: "100%",
                              backgroundColor: "#F1F5F8",
                              color: "gray",
                              fontWeight: "bold",
                              textAlign: "center",
                              fontSize: "1.1rem",
                              padding: "5px",
                              borderRadius: "10px",
                            }}
                          >
                            TRAIN DEPARTED
                          </div>
                        ) : (
                          train.availabilities?.map((cls, index) => (
                            <div key={index} className="col-auto">
                              <div
                                className="availability-card p-2 position-relative"
                                style={{
                                  minWidth: "140px",
                                  background:
                                    cls.avlDayList?.[0]?.availablityType === "1" ||
                                    cls.avlDayList?.[0]?.availablityType === "2"
                                      ? "linear-gradient(125deg, #e8f5e9, #F2F7EC)"
                                      : cls.avlDayList?.[0]?.availablityType === "3"
                                      ? "linear-gradient(145deg, #fff3e0,rgb(249, 231, 204))"
                                      : "linear-gradient(145deg, rgb(247, 247, 247), rgb(255, 255, 255))",
                                  border: `0.3px solid ${
                                    cls.avlDayList?.[0]?.availablityType === "1" ||
                                    cls.avlDayList?.[0]?.availablityType === "2"
                                      ? "green"
                                      : cls.avlDayList?.[0]?.availablityType === "3"
                                      ? "orange"
                                      : "gray"
                                  }`,
                                  borderRadius: "10px",
                                  cursor: "pointer",
                                  transition: "transform 0.2s ease",
                                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                                  margin: "0 4px",
                                }}
                                onClick={() => handleBooking(train, cls)}
                              >
                                {(cls.quota === "TQ" || cls.quota === "PT") && (
                                  <div
                                    className="position-absolute badge bg-danger"
                                    style={{
                                      top: "-10px",
                                      right: "10px",
                                      fontSize: "0.7rem",
                                      padding: "4px 8px",
                                      zIndex: "1",
                                    }}
                                  >
                                    {cls.quota === "TQ" ? "TATKAL" : "PREMIUM"}
                                  </div>
                                )}
                                <div className="d-flex justify-content-between align-items-center">
                                  <h6 className="mb-0 " style={{ color: "black" }}>
                                    {cls.enqClass}
                                  </h6>
                                  {cls.totalFare > 0 && (
                                    <div className="price">₹ {cls.totalFare}</div>
                                  )}
                                </div>
                                <div className="availability">
                                  <b
                                    style={{
                                      fontSize: "1.1rem",
                                      color:
                                        cls.avlDayList?.[0]?.availablityType === "1" ||
                                        cls.avlDayList?.[0]?.availablityType === "2"
                                          ? "green"
                                          : cls.avlDayList?.[0]?.availablityType === "3"
                                          ? "#E86716"
                                          : "gray",
                                    }}
                                  >
                                    {getFormattedSeatsData(train, index)}
                                  </b>
                                  <div
                                    className="status-badge mb-1"
                                    style={{
                                      color: cls.availableSeats ? "#2e7d32" : "#c62828",
                                      fontSize: "0.7rem",
                                    }}
                                  >
                                    {(cls.avlDayList?.[0]?.availablityType === "1" ||
                                    cls.avlDayList?.[0]?.availablityType === "2") ? (
                                      <span style={{ color: "green", display: "flex", alignItems: "center" }}>
                                        <i className="fas fa-shield-alt me-1"></i>
                                        <span style={{ marginLeft: "5px" }}>Travel Guarantee</span>
                                      </span>
                                    ) : cls.avlDayList?.[0]?.availablityType === "3" ? (
                                      "50% chances"
                                    ) : (
                                      "."
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    <button
                      className="scroll-arrow scroll-right"
                      onClick={(e) => {
                        const container = e.target.closest(".availability-section").querySelector(".scroll-container");
                        container.scrollBy({ left: 200, behavior: "smooth" });
                      }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>

                  <style>
                    {`
                      .availability-section {
                        position: relative;
                      }

                      .scroll-container {
                        overflow-x: auto;
                        scrollbar-width: none; /* Firefox */
                        -ms-overflow-style: none; /* IE and Edge */
                        scroll-behavior: smooth;
                        padding: 10px 0;
                      }

                      .scroll-container::-webkit-scrollbar {
                        display: none; /* Chrome, Safari, Opera */
                      }

                      .scroll-arrow {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background: white;
                        border: 1px solid #e0e0e0;
                        color: #666;
                        display: none;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        z-index: 10;
                        transition: all 0.3s ease;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                      }

                      .scroll-arrow:hover {
                        background: #f8f9fa;
                        color: #333;
                      }

                      .scroll-left {
                        left: 0;
                      }

                      .scroll-right {
                        right: 0;
                      }

                      @media (max-width: 768px) {
                        .scroll-arrow {
                          display: flex;
                        }

                        .availability-section {
                          margin: 0 -10px;
                        }

                        .scroll-container {
                          padding: 10px;
                        }

                        .availability-card {
                          margin: 0 4px !important;
                        }
                      }
                    `}
                  </style>

                  {/* Nearby Dates Section */}
                  <div className="d-flex justify-content-between align-items-center w-100 px-1">
                    <button
                      className="d-flex align-items-center gap-1 py-0 px-1"
                      onClick={() => toggleNearbyDates(train.trainNumber)}
                      style={{
                        border: "none",
                        background: "none",
                        borderRadius: "6px",
                        color: expandedTrainId === train.trainNumber ? "#1976d2" : "#6c757d",
                        transition: "all 0.3s ease",
                        fontSize: "0.95rem",
                        padding: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      <i className={`fas fa-calendar-alt fa-sm`}></i>
                      <span className="mx-1 mt-1">Check Nearby Dates</span>
                      <i
                        className={`fas fa-chevron-${
                          expandedTrainId === train.trainNumber ? "up" : "down"
                        } fa-sm`}
                        style={{
                          transform:
                            expandedTrainId === train.trainNumber
                              ? "rotate(180deg)"
                              : "rotate(0)",
                          transition: "transform 0.3s ease",
                        }}
                      ></i>
                    </button>
                  </div>

                  {/* Collapsible Nearby Dates Section */}
                  <div
                    style={{
                      maxHeight:
                        expandedTrainId === train.trainNumber ? "500px" : "0",
                      overflow: "hidden",
                      transition: "all 0.3s ease-in-out",
                      width: "100%",
                    }}
                  >
                    {expandedTrainId === train.trainNumber && (
                      <div className="bg-light p-3 rounded-3 mt-2">
                        <NearbyDates
                          train={getOriginalTrainData(train.trainNumber)}
                          onClose={() => setExpandedTrainId(null)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-12 text-center mt-5">
          <div className="no-train-found-wrapper">
            <i className="fas fa-train fa-5x text-muted mb-3"></i>
            <h3 className="text-muted">No Trains Found Between These Stations</h3>
            <p className="text-muted">
              Please try adjusting your search filters or check back later for updated results.
            </p>
          </div>
        </div>
      )}
      {showAuthPopup && (
        <AuthPopup
          isOpen={showAuthPopup}
          onClose={() => setShowAuthPopup(false)}
          onSuccess={() => {
            setShowAuthPopup(false);
            if (bookingData) {
              navigate("/trainbookingdetails", { state: { trainData: bookingData } });
            }
          }}
        />
      )}
      <FilterSortBarMobile />
      <MobileFilterModal
        showMobileModal={showMobileModal}
        setShowMobileModal={setShowMobileModal}
        filters={filters}
        setFilters={setFilters}
      />
      <MobileSortModal />
    </div>
  );
};

// Add mobile-specific styles
const mobileStyles = `
@media screen and (max-width: 768px) {
  /* Train card styles */
  .train-availability-card {
    padding: 15px !important;
    margin-bottom: 15px !important;
  }

  /* Train info header */
  .train-name {
    text-align: left !important;
    margin-right: 0 !important;
    margin-bottom: 15px !important;
  }

  .train-name h5 {
    font-size: 1.1rem !important;
  }

  .train-name .text-muted {
    font-size: 0.75rem !important;
  }

  /* Journey details section */
  .journey-details {
    margin: 10px 0 !important;
    padding: 12px !important;
  }

  .journey-details .d-flex {
    gap: 8px !important;
  }

  .journey-details .text-primary {
    font-size: 0.7rem !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80px;
  }

  .journey-details .h4 {
    font-size: 0.9rem !important;
    margin: 4px 0 !important;
  }

  .journey-details .text-black-50 {
    font-size: 0.65rem !important;
  }

  /* Duration badge */
  .duration .badge {
    font-size: 0.7rem !important;
    padding: 4px 8px !important;
  }

  /* View route button */
  .view-route .badge {
    font-size: 0.7rem !important;
    padding: 4px 10px !important;
  }

  /* Availability cards */
  .availability-card {
    min-width: 110px !important;
    padding: 8px !important;
    margin: 4px !important;
  }

  .availability-card h6 {
    font-size: 0.8rem !important;
  }

  .availability-card .price {
    font-size: 0.8rem !important;
  }

  .availability-card b {
    font-size: 0.9rem !important;
  }

  .availability-card .status-badge {
    font-size: 0.6rem !important;
  }

  .position-absolute.badge {
    font-size: 0.6rem !important;
    padding: 3px 6px !important;
    top: -8px !important;
    right: 5px !important;
  }

  /* Nearby dates section */
  .d-flex.justify-content-between.align-items-center.w-100 {
    padding: 0 10px !important;
  }

  .d-flex.justify-content-between.align-items-center.w-100 button {
    font-size: 0.85rem !important;
    padding: 8px !important;
  }

  /* Running days display */
  .text-muted.small.d-flex {
    flex-wrap: wrap !important;
    gap: 2px !important;
  }

  .text-muted.small.d-flex span {
    font-size: 0.7rem !important;
    margin: 0 1px !important;
  }

  .text-muted.small.d-flex b {
    font-size: 0.7rem !important;
    margin-right: 4px !important;
  }

  /* Sort section responsiveness */
  .bg-white.rounded-3.p-3 .btn-group {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 5px !important;
    width: 100% !important;
  }

  .bg-white.rounded-3.p-3 .btn-group button {
    width: 100% !important;
    margin: 0 !important;
    padding: 6px !important;
    font-size: 0.75rem !important;
  }

  /* Train departed message */
  div[style*="backgroundColor: #F1F5F8"] {
    font-size: 0.9rem !important;
    padding: 8px !important;
  }

  /* Row spacing */
  .row.gy-4 {
    gap: 10px !important;
  }

  /* Offer banner responsiveness */
  .bg-success.rounded-2 {
    padding: 12px !important;
  }

  .bg-success.rounded-2 h6 {
    font-size: 1rem !important;
  }

  .bg-success.rounded-2 p {
    font-size: 0.8rem !important;
  }

  .square--60 {
    width: 40px !important;
    height: 40px !important;
  }

  .square--60 i {
    font-size: 1.2rem !important;
  }

  /* Ensure train card content wraps and doesn't overflow */
  .train-availability-card .row,
  .train-availability-card .d-flex {
    flex-wrap: wrap !important;
    overflow-x: auto;
    word-break: break-word;
  }

  .train-availability-card {
    overflow-x: auto;
    max-width: 100vw;
    box-sizing: border-box;
  }

  /* Prevent availability cards from overflowing */
  .availability-section .row {
    flex-wrap: nowrap !important;
    overflow-x: auto;
  }

  /* Mobile button styles */
  .train-action-row-mobile {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .train-action-btn {
    flex: 1;
    margin: 0 4px;
    padding: 10px 0;
    font-size: 0.9rem;
    font-weight: 500;
    color: #333;
    background: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    gap: 6px;
  }

  .train-action-btn:hover {
    background: #e2e6ea;
    border-color: #ccc;
  }

  .train-action-btn i {
    font-size: 1.1rem;
  }
}
`;

// Append mobile-specific styles to the document head only once
if (!document.getElementById("mobile-styles-train-search-result")) {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = mobileStyles;
  styleSheet.id = "mobile-styles-train-search-result"; // Add an ID to prevent duplicate injection
  document.head.appendChild(styleSheet);
}

export default TrainSearchResultList;