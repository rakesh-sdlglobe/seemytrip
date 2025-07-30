import enGB from "date-fns/locale/en-GB"; // for dd/MM/yyyy format
import React, { useEffect, useMemo, useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Select from "react-select";
import { fetchCityHotels } from "../../store/Actions/hotelActions";
import { selectCityHotels } from "../../store/Selectors/hotelSelectors";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

registerLocale("en-GB", enGB);
// Memoized modal components to prevent unnecessary re-renders
const CustomModalHeader = React.memo(({ onClose }) => (
  <Modal.Header closeButton className="border-0">
    <Modal.Title className="fw-bold">Choose Members</Modal.Title>
  </Modal.Header>
));

// Remove handleSearch's localStorage logic, only navigate (or you can remove handleSearch entirely if not needed)
const handleSearch = (
  cityId,
  checkInDate,
  checkOutDate,
  Rooms,
  adults,
  children,
  age,
  selectedCity,
  navigate,
  roomsData
) => {
  // Store search parameters in localStorage
  const searchParams = {
    cityId,
    checkInDate: checkInDate ? checkInDate.toLocaleDateString("en-CA") : null,
    checkOutDate: checkOutDate
      ? checkOutDate.toLocaleDateString("en-CA")
      : null,
    Rooms,
    adults,
    children,
    selectedCity,
    roomsData,
  };

  // Store in localStorage to trigger the search in HotelSearchResult
  localStorage.setItem("hotelSearchParams", JSON.stringify(searchParams));

  // Navigate to search result page
  navigate(`/hotel-search-result`, {
    state: searchParams,
  });
};

const MAX_ROOMS = 5;
const MAX_ADULTS = 4;
const MAX_CHILDREN = 4;
const MAX_ChildAge = 12; // Assuming children are aged 0-12

const CustomModalBody = React.memo(
  ({ roomsData, setRoomsData, addRoom, removeRoom }) => (
    <Modal.Body className="p-4">
      <div className="mb-3 text-center fw-bold fs-5">
        Room: {roomsData.length}
      </div>
      {roomsData.map((room, idx) => (
        <div key={idx} className="mb-4 border rounded p-3 position-relative">
          {/* Cancel (x) icon for every room, always visible */}
          <button
            type="button"
            className="btn btn-link text-danger position-absolute"
            style={{
              top: 6,
              right: 8,
              fontSize: 22,
              lineHeight: 1,
              zIndex: 2,
              borderRadius: "50%",
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              background: "none",
              boxShadow: "none",
              border: "none",
            }}
            onClick={() => removeRoom(idx)}
            aria-label="Remove Room"
            title="Remove Room"
            disabled={roomsData.length === 1}
          >
            &times;
          </button>
          <div className="fw-medium mb-2">Room {idx + 1}</div>
          <div className="d-flex gap-3 align-items-center">
            <div>
              <label className="me-2">Adults</label>
              <select
                className="form-select d-inline-block w-auto"
                value={room.Adults}
                onChange={(e) => {
                  const updated = [...roomsData];
                  updated[idx].Adults = Number(e.target.value);
                  setRoomsData(updated);
                }}
              >
                {[...Array(MAX_ADULTS)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Adult{i + 1 > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="me-2">Children</label>
              <select
                className="form-select d-inline-block w-auto"
                value={room.Children}
                onChange={(e) => {
                  const updated = [...roomsData];
                  const newChildren = Number(e.target.value);
                  updated[idx].Children = newChildren;

                  // Preserve existing ages, only add/remove as needed
                  let prevPaxs = Array.isArray(updated[idx].Paxs)
                    ? updated[idx].Paxs
                    : [];
                  if (newChildren > prevPaxs.length) {
                    // Add new children with default age 1
                    prevPaxs = [
                      ...prevPaxs,
                      ...Array.from(
                        { length: newChildren - prevPaxs.length },
                        () => ({
                          Pax_type: "C",
                          Age: 1,
                        })
                      ),
                    ];
                  } else {
                    // Remove extra children
                    prevPaxs = prevPaxs.slice(0, newChildren);
                  }
                  updated[idx].Paxs = prevPaxs;

                  setRoomsData(updated);
                }}
              >
                {[...Array(MAX_CHILDREN + 1)].map((_, i) => (
                  <option key={i} value={i}>
                    {i} Child{i !== 1 ? "ren" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {room.Children > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px 0px",
                marginTop: 8,
                width: "100%",
              }}
            >
              {[...Array(room.Children)].map((_, paxIdx) => (
                <div
                  key={paxIdx}
                  style={{
                    flex: "0 0 50%",
                    maxWidth: "50%",
                    minWidth: 120,
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <label className="me-2">Age</label>
                  <select
                    className="form-select d-inline-block w-auto"
                    value={
                      room.Paxs && room.Paxs.length > paxIdx
                        ? room.Paxs[paxIdx]?.Age || 1 // Default to 1 if undefined
                        : 1 // Default to 1 if Paxs not set
                    }
                    onChange={(e) => {
                      const updated = [...roomsData];
                      updated[idx].Paxs = updated[idx].Paxs || [];
                      // Ensure Paxs array has enough elements
                      while (updated[idx].Paxs.length < room.Children) {
                        updated[idx].Paxs.push({ Pax_type: "C", Age: 1 });
                      }
                      updated[idx].Paxs[paxIdx].Age = Number(e.target.value);
                      setRoomsData(updated);
                    }}
                  >
                    {[...Array(MAX_ChildAge)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} Year{i + 1 !== 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </Modal.Body>
  )
);

// Updated Modal Footer with Add Room and Confirm buttons side by side, curved, with gap
const CustomModalFooter = React.memo(({ onConfirm, addRoom, roomsCount }) => (
  <Modal.Footer className="border-0 p-0">
    <div className="d-flex w-100 gap-3 px-3 pb-2">
      <button
        type="button"
        className="btn btn-outline-primary fw-medium"
        style={{
          width: "50%",
          borderRadius: "10px",
          height: 48,
        }}
        onClick={addRoom}
        disabled={roomsCount >= 5}
      >
        <i className="fa fa-plus" /> Add Room
      </button>
      <button
        type="button"
        className="btn btn-danger fw-medium confirm-btn"
        style={{
          width: "50%",
          borderRadius: "10px",
          color: "#fff",
          height: 48,
        }}
        onClick={onConfirm}
      >
        Confirm
      </button>
    </div>
    <style>
      {`
        .confirm-btn:hover, .confirm-btn:focus {
          color: #dc3545 !important;
          background-color: #fff !important;
          border-color: #dc3545 !important;
        }
      `}
    </style>
  </Modal.Footer>
));

export const HotelSearchbar = ({
  searchParams = {},
  onSearchSubmit,
  onPendingChange,
  backgroundColor = "#FFFFFFFF",
}) => {
  const dispatch = useDispatch();
  const cityHotels = useSelector(selectCityHotels);
  const [selectedCity, setSelectedCity] = useState(
    searchParams?.selectedCity || null
  );
  const [startDate, setStartDate] = useState(
    searchParams?.checkInDate ? new Date(searchParams.checkInDate) : null
  );
  const [endDate, setEndDate] = useState(
    searchParams?.checkOutDate ? new Date(searchParams.checkOutDate) : null
  );
  const [roomsData, setRoomsData] = useState(
    searchParams?.roomsData || [
      { RoomNo: 1, Adults: 1, Children: 0, Paxs: null },
    ]
  );
  const [showGuestsModal, setShowGuestsModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [calendarOpen, setCalendarOpen] = useState({
    start: false,
    end: false,
  });

  // Refs for automatic focus
  const citySelectRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const guestsButtonRef = useRef(null);
  const searchButtonRef = useRef(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedSearchParams = localStorage.getItem("hotelSearchParams");
    if (savedSearchParams) {
      try {
        const params = JSON.parse(savedSearchParams);
        setSelectedCity(params?.selectedCity || null);
        setStartDate(params?.checkInDate ? new Date(params.checkInDate) : null);
        setEndDate(params?.checkOutDate ? new Date(params.checkOutDate) : null);
        setRoomsData(
          params?.roomsData || [
            { RoomNo: 1, Adults: 1, Children: 0, Paxs: null },
          ]
        );
      } catch (e) {
        // If JSON is invalid, clear the localStorage key
        localStorage.removeItem("hotelSearchParams");
      }
    }
  }, [location]);

  // Add room handler
  const addRoom = () => {
    if (roomsData.length < MAX_ROOMS) {
      setRoomsData([
        ...roomsData,
        { RoomNo: roomsData.length + 1, Adults: 1, Children: 0, Paxs: null },
      ]);
    }
  };

  // Remove room handler
  const removeRoom = (idx) => {
    if (roomsData.length > 1) {
      setRoomsData(roomsData.filter((_, i) => i !== idx));
    }
  };

  const handleShowGuestsModal = () => setShowGuestsModal(true);
  const handleCloseGuestsModal = () => setShowGuestsModal(false);

  // Confirm handler
  const handleConfirmGuests = () => {
    localStorage.setItem(
      "hotelSearchParams",
      JSON.stringify({
        cityId: selectedCity?.value,
        selectedCity,
        checkInDate: startDate ? startDate.toLocaleDateString("en-CA") : null,
        checkOutDate: endDate ? endDate.toLocaleDateString("en-CA") : null,
        roomsData,
        Rooms: roomsData.length,
        adults: roomsData.reduce((sum, r) => sum + r.Adults, 0),
        children: roomsData.reduce((sum, r) => sum + r.Children, 0),
      })
    );
    setShowGuestsModal(false);

    // Auto-focus to search button after guests confirmation
    if (searchButtonRef.current) {
      setTimeout(() => {
        searchButtonRef.current.focus();
      }, 100);
    }
  };

  // Fetch cities on mount
  useEffect(() => {
    dispatch(fetchCityHotels());
  }, [dispatch]);

  // Transform city data into select options
  const cityOptions = useMemo(() => {
    // Sort by Count descending and take top 15
    const sortedCities = [...(cityHotels || [])]
      .sort((a, b) => b.Count - a.Count)
      .slice(0, 15); // Take top 15 most popular

    // If you want exactly 10-15 randomly:
    // const shuffled = [...(cityHotels || [])].sort(() => 0.5 - Math.random());
    // const randomSelection = shuffled.slice(0, Math.floor(Math.random() * 6) + 10);

    return sortedCities.map((city) => ({
      value: city.Id,
      label: city.Display,
      cityData: city,
    }));
  }, [cityHotels]);

  // Handle city selection with localStorage update
  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    const currentParams = JSON.parse(
      localStorage.getItem("hotelSearchParams") || "{}"
    );
    localStorage.setItem(
      "hotelSearchParams",
      JSON.stringify({
        ...currentParams,
        selectedCity: selectedOption,
        cityId: selectedOption?.value,
      })
    );
    if (onPendingChange) onPendingChange(); // <-- ADD THIS LINE

    // Auto-focus to start date after city selection
    if (selectedOption && startDateRef.current) {
      setTimeout(() => {
        const startDateInput = startDateRef.current.querySelector("input");
        if (startDateInput) {
          startDateInput.focus();
        }
      }, 100);
    }
  };

  // Handle input change for search
  const handleInputChange = (inputValue) => {
    dispatch(fetchCityHotels(inputValue));
    return inputValue; // Important to return the input value
  };
  // Custom styles for the Select component
  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      boxShadow: "none !important", // Add !important
      border: "none",
      padding: "12px",
      backgroundColor: "#fff",
      minHeight: "44px",
      borderRadius: "10px", // <-- Add this line to match your input
      fontWeight: "bold", // Make the input bold
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "10px", // <-- Optional: match dropdown menu too
      zIndex: 10,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#999",
      fontWeight: "bold", // Make the placeholder bold
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#333",
      fontWeight: "bold", // Make the selected value bold
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#d30000" // Slightly lighter dark red when selected
        : state.isFocused
        ? "#F4F5F5" // Cream when hovered (focus) and not selected
        : "#fff", // Default white
      color: state.isSelected ? "#fff" : "#333",
      fontWeight: "normal",
      fontSize: "16px",
      padding: "12px",
      cursor: "pointer",
      transition: "background 0.2s",
    }),
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        startDateRef.current &&
        !startDateRef.current.contains(event.target) &&
        endDateRef.current &&
        !endDateRef.current.contains(event.target)
      ) {
        setCalendarOpen({ start: false, end: false });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="hotel-searchbar"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <style>
          {`
            .custom-input {
              box-shadow: none;
              border: 1px solid #e0e0e0;   /* Add border for consistency */
              border-radius: 10px;          /* <-- increased value */
              padding: 12px;
              background-color: #fff;
              height: 60px;                 /* Match train search bar */
              font-size: 16px;              /* Match font size */
            }
            .custom-input:focus {
              outline: none;
              box-shadow: none;
            }
            .custom-button {
              box-shadow: none;
              border: none;
              border-radius: 8px;
              padding: 10px 15px;
              background-color: #fff;
              cursor: pointer;
              width: 100%;
              text-align: left;
              height: 44px;
            }
            .custom-button:focus {
              outline: none;
              box-shadow: none;
            }
            .custom-select__control {
              box-shadow: none !important;
              border: none !important;
            }
            .btn-danger.full-width {
              width: 100%;
              border-radius: 8px !important; /* Increased border-radius */
            }
            .btn-danger.full-width:hover, .btn-danger.full-width:focus {
              color: #dc3545 !important;
              background-color: #fff !important;
              border-color: #dc3545 !important;
            }
            .custom-input:disabled {
              background-color: #f8f9fa !important;
              color: #6c757d !important;
              cursor: not-allowed !important;
              opacity: 0.6;
            }
            .custom-input:disabled::placeholder {
              color: #adb5bd !important;
            }
            .hotel-search-container {
              width: 100%;
              background-color:rgb(236, 240, 240);      /* Bootstrap red, or use 'red' */
              background-size: cover;         /* Ensures any background image covers the area */
              border: 1px solid #e0e0e0;
              border-radius: 12px;
              height: 100px;
              padding: 0 16px;
              box-sizing: border-box;
              display: flex;
              align-items: center;
              /* Optional: add a background image if needed */
              /* background-image: url('your-image-url.jpg'); */
            }
            .calendar-popup {
              position: absolute;
              top: 100%;
              left: 0;
              width: 320px;
              box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15), 0 3px 8px rgba(0, 0, 0, 0.1);
              border-radius: 12px;
              background: white;
              z-index: 1000;
              overflow: hidden;
              padding: 15px;
              margin-top: 5px;
              border: none;
            }
            .calendar-popup {
              border: none !important;
              outline: none !important;
            }
            .react-calendar {
              border: none !important;
              box-shadow: none !important;
              outline: none !important;
            }
            .custom-input:focus {
              border: none !important;
              outline: none !important;
              box-shadow: none !important;
            }
            /* Make selected date in calendar red */
            .react-calendar__tile--active {
              background: #cd2c22 !important; /* Your preferred red */
              color: #fff !important;
            }
            .react-calendar__tile--active:enabled:hover,
            .react-calendar__tile--active:enabled:focus {
              background: #b30000 !important; /* A darker red on hover/focus */
              color: #fff !important;
            }
            .hotel-searchbar-bg-red {
              background: red;
              width: 100%;
              padding: 20px 0; /* Optional: add some vertical space */
            }
          `}
        </style>

        <div className="search-wrap with-label bg-red rounded-3 p-3 pt-4">
          <div className="container hotel-search-container">
            <div className="row gy-3 gx-md-3 gx-sm-2">
              <div className="col-xl-8 col-lg-7 col-md-12">
                <div className="row gy-3 gx-md-3 gx-sm-2">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                    <div className="form-group hdd-arrow rounded-1 mb-0">
                      {/* <label>Choose City, Hotel</label> */}
                      <Select
                        ref={citySelectRef}
                        options={cityOptions}
                        placeholder="Destination"
                        classNamePrefix="custom-select"
                        styles={customSelectStyles}
                        value={selectedCity}
                        onChange={handleCityChange}
                        onInputChange={handleInputChange}
                        isSearchable
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group mb-0">
                      {/* <label>Choose Date</label> */}
                      <div className="d-flex">
                        <div
                          ref={startDateRef}
                          style={{ position: "relative" }}
                        >
                          <input
                            type="text"
                            readOnly
                            className="form-control fw-bold custom-input"
                            value={
                              startDate
                                ? startDate.toLocaleDateString("en-GB")
                                : ""
                            }
                            onClick={() =>
                              setCalendarOpen({
                                ...calendarOpen,
                                start: !calendarOpen.start,
                                end: false,
                              })
                            }
                            placeholder="Check-In"
                          />
                          {calendarOpen.start && (
                            <div className="calendar-popup">
                              <Calendar
                                onChange={(date) => {
                                  setStartDate(date);
                                  setCalendarOpen({
                                    ...calendarOpen,
                                    start: false,
                                  });
                                  setTimeout(
                                    () =>
                                      setCalendarOpen((prev) => ({
                                        ...prev,
                                        end: true,
                                      })),
                                    200
                                  );
                                }}
                                value={startDate}
                                minDate={new Date()}
                                maxDate={(() => {
                                  const today = new Date();
                                  const maxDate = new Date(today);
                                  maxDate.setDate(today.getDate() + 365);
                                  return maxDate;
                                })()}
                                selectRange={false}
                                showNeighboringMonth={true}
                                showFixedNumberOfWeeks={false}
                                minDetail="month"
                              />
                            </div>
                          )}
                        </div>
                        <div ref={endDateRef} style={{ position: "relative" }}>
                          <input
                            type="text"
                            readOnly
                            className="form-control fw-bold ms-2 custom-input"
                            value={
                              endDate ? endDate.toLocaleDateString("en-GB") : ""
                            }
                            onClick={() =>
                              startDate &&
                              setCalendarOpen({
                                ...calendarOpen,
                                end: !calendarOpen.end,
                                start: false,
                              })
                            }
                            placeholder="Check-Out"
                            disabled={!startDate}
                          />
                          {calendarOpen.end && (
                            <div className="calendar-popup">
                              <Calendar
                                onChange={(date) => {
                                  setEndDate(date);
                                  setCalendarOpen({
                                    ...calendarOpen,
                                    end: false,
                                  });
                                }}
                                value={endDate}
                                minDate={startDate || new Date()}
                                maxDate={(() => {
                                  const today = new Date();
                                  const maxDate = new Date(today);
                                  maxDate.setDate(today.getDate() + 365);
                                  return maxDate;
                                })()}
                                selectRange={false}
                                showNeighboringMonth={true}
                                showFixedNumberOfWeeks={false}
                                minDetail="month"
                                tileDisabled={({ date }) => {
                                  if (!startDate) return false;
                                  return date < startDate;
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-12">
                <div className="row gy-3 gx-md-3 gx-sm-2">
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <div className="form-group mb-0">
                      {/* <label>Members</label> */}
                      <div className="booking-form__input">
                        <button
                          ref={guestsButtonRef}
                          onClick={handleShowGuestsModal}
                          className="form-control text-start custom-button"
                        >
                          <span style={{ fontWeight: "bold" }}>
                            {roomsData.reduce((sum, r) => sum + r.Adults, 0)}
                          </span>{" "}
                          Adult
                          {roomsData.reduce((sum, r) => sum + r.Adults, 0) !== 1
                            ? "s"
                            : ""}
                          ,{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {roomsData.reduce((sum, r) => sum + r.Children, 0)}
                          </span>{" "}
                          Child
                          {roomsData.reduce((sum, r) => sum + r.Children, 0) !==
                          1
                            ? "ren"
                            : ""}
                          ,{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {roomsData.length}
                          </span>{" "}
                          Room{roomsData.length !== 1 ? "s" : ""}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group mb-0">
                      {/* <Link to="/hotel-list-01"> */}
                      <button
                        ref={searchButtonRef}
                        type="button"
                        className="btn btn-danger full-width rounded-1 fw-medium"
                        onClick={() =>
                          handleSearch(
                            selectedCity?.value,
                            startDate,
                            endDate,
                            roomsData.length,
                            roomsData.reduce((sum, r) => sum + r.Adults, 0),
                            roomsData.reduce((sum, r) => sum + r.Children, 0),
                            null, // age
                            selectedCity,
                            navigate,
                            roomsData // <-- Pass roomsData here
                          )
                        }
                        disabled={!selectedCity || !startDate || !endDate}
                      >
                        <i className="fa fa-search me-2" />
                        Search
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal show={showGuestsModal} onHide={handleCloseGuestsModal} centered>
          <CustomModalHeader onClose={handleCloseGuestsModal} />
          <CustomModalBody
            roomsData={roomsData}
            setRoomsData={setRoomsData}
            addRoom={addRoom}
            removeRoom={removeRoom}
          />
          <CustomModalFooter
            onConfirm={handleConfirmGuests}
            addRoom={addRoom}
            roomsCount={roomsData.length}
          />
        </Modal>
      </div>
    </div>
  );
};

export default HotelSearchbar;
