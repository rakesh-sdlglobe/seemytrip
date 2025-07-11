import enGB from "date-fns/locale/en-GB"; // for dd/MM/yyyy format
import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Select from 'react-select';
import { fetchCityHotels } from '../../store/Actions/hotelActions';
import { selectCityHotels } from '../../store/Selectors/hotelSelectors';



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
  selectedCity,
  navigate,
  roomsData
) => {
  // Only navigate, do not store to localStorage here
  const formattedCheckIn = checkInDate ? checkInDate.toLocaleDateString('en-CA') : null;
  const formattedCheckOut = checkOutDate ? checkOutDate.toLocaleDateString('en-CA') : null;

  navigate(`/hotel-search-result`, {
    state: {
      cityId,
      checkInDate: formattedCheckIn,
      checkOutDate: formattedCheckOut,
      Rooms,
      adults,
      children,
      selectedCity,
      roomsData
    }
  });
}

const MAX_ROOMS = 5;
const MAX_ADULTS = 4;
const MAX_CHILDREN = 4;

const CustomModalBody = React.memo(({ roomsData, setRoomsData, addRoom, removeRoom }) => (
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
            borderRadius: '50%',
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            background: 'none',
            boxShadow: 'none',
            border: 'none'
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
              value={room.adults}
              onChange={e => {
                const updated = [...roomsData];
                updated[idx].adults = Number(e.target.value);
                setRoomsData(updated);
              }}
            >
              {[...Array(MAX_ADULTS)].map((_, i) => (
                <option key={i+1} value={i+1}>{i+1} Adult{i+1 > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="me-2">Children</label>
            <select
              className="form-select d-inline-block w-auto"
              value={room.children}
              onChange={e => {
                const updated = [...roomsData];
                updated[idx].children = Number(e.target.value);
                setRoomsData(updated);
              }}
            >
              {[...Array(MAX_CHILDREN+1)].map((_, i) => (
                <option key={i} value={i}>{i} Child{i !== 1 ? 'ren' : ''}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    ))}
  </Modal.Body>
));

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

export const HotelSearchbar = ({ searchParams = {} }) => {
  const dispatch = useDispatch();
  const cityHotels = useSelector(selectCityHotels);
  const [selectedCity, setSelectedCity] = useState(searchParams.selectedCity || null);
  const [startDate, setStartDate] = useState(searchParams.checkInDate ? new Date(searchParams.checkInDate) : null);
  const [endDate, setEndDate] = useState(searchParams.checkOutDate ? new Date(searchParams.checkOutDate) : null);
  const [roomsData, setRoomsData] = useState(searchParams.roomsData || [{ adults: 1, children: 0 }]);
  const [showGuestsModal, setShowGuestsModal] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

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
      const params = JSON.parse(savedSearchParams);
      setSelectedCity(params.selectedCity);
      setStartDate(params.checkInDate ? new Date(params.checkInDate) : null);
      setEndDate(params.checkOutDate ? new Date(params.checkOutDate) : null);
      setRoomsData(params.roomsData || [{ adults: 1, children: 0 }]);
      if (typeof params.adults === 'number') setAdults(params.adults);
      if (typeof params.children === 'number') setChildren(params.children);
      if (typeof params.Rooms === 'number') setRooms(params.Rooms);
    }
  }, [location]);

  // Save roomsData to localStorage on change
  useEffect(() => {
    const currentParams = JSON.parse(localStorage.getItem("hotelSearchParams") || "{}");
    localStorage.setItem("hotelSearchParams", JSON.stringify({
      ...currentParams,
      roomsData,
      Rooms: roomsData.length,
      adults: roomsData.reduce((sum, r) => sum + r.adults, 0),
      children: roomsData.reduce((sum, r) => sum + r.children, 0),
    }));
  }, [roomsData]);

  // Add room handler
  const addRoom = () => {
    if (roomsData.length < MAX_ROOMS) {
      setRoomsData([...roomsData, { adults: 1, children: 0 }]);
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
    localStorage.setItem("hotelSearchParams", JSON.stringify({
      cityId: selectedCity?.value,
      selectedCity,
      checkInDate: startDate ? startDate.toLocaleDateString('en-CA') : null,
      checkOutDate: endDate ? endDate.toLocaleDateString('en-CA') : null,
      roomsData,
      Rooms: roomsData.length,
      adults: roomsData.reduce((sum, r) => sum + r.adults, 0),
      children: roomsData.reduce((sum, r) => sum + r.children, 0),
    }));
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

  return sortedCities.map(city => ({
    value: city.Id,
    label: city.Display,
    cityData: city
  }));
}, [cityHotels]);

  // Handle city selection with localStorage update
  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    const currentParams = JSON.parse(localStorage.getItem("hotelSearchParams") || "{}");
    localStorage.setItem("hotelSearchParams", JSON.stringify({
      ...currentParams,
      selectedCity: selectedOption,
      cityId: selectedOption?.value
    }));
    
    // Auto-focus to start date after city selection
    if (selectedOption && startDateRef.current) {
      setTimeout(() => {
        const startDateInput = startDateRef.current.querySelector('input');
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

  // Handle date changes with localStorage update
  const handleDateChange = (date, isStartDate) => {
    if (isStartDate) {
      setStartDate(date);
      // If end date is earlier than new start date, clear it
      if (endDate && date) {
        const startDateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const endDateOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        if (endDateOnly < startDateOnly) {
          setEndDate(null);
        }
      }
      // Auto-focus to end date after start date selection
      if (date && endDateRef.current) {
        setTimeout(() => {
          const endDateInput = endDateRef.current.querySelector('input');
          if (endDateInput) {
            endDateInput.focus();
          }
        }, 100);
      }
    } else {
      setEndDate(date);
      // Validate checkout date and refocus if invalid
      if (date && startDate) {
        const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const checkDateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        if (checkDateOnly < startDateOnly) {
          // Clear invalid date and refocus
          setEndDate(null);
          setTimeout(() => {
            const endDateInput = endDateRef.current.querySelector('input');
            if (endDateInput) {
              endDateInput.focus();
            }
          }, 100);
          return; // Don't save invalid date
        }
      }
      // Auto-focus to guests button after valid end date selection
      if (date && guestsButtonRef.current) {
        setTimeout(() => {
          guestsButtonRef.current.focus();
        }, 100);
      }
    }
    const currentParams = JSON.parse(localStorage.getItem("hotelSearchParams") || "{}");
    localStorage.setItem("hotelSearchParams", JSON.stringify({
      ...currentParams,
      checkInDate: isStartDate ? date?.toLocaleDateString('en-CA') : currentParams.checkInDate,
      checkOutDate: !isStartDate ? date?.toLocaleDateString('en-CA') : currentParams.checkOutDate
    }));
  };

  // Function to filter out invalid dates for checkout
  const filterCheckoutDates = (date) => {
    // If no start date is selected, allow all future dates
    if (!startDate) {
      return date >= new Date();
    }
    // Allow dates that are on or after the start date (for same day bookings)
    // Compare dates by setting time to 00:00:00 for accurate comparison
    const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const checkDateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return checkDateOnly >= startDateOnly;
  };

  // Handle guest changes with localStorage update
  const handleGuestChange = (type, value) => {
    const currentParams = JSON.parse(localStorage.getItem("hotelSearchParams") || "{}");
    switch(type) {
      case 'adults':
        setAdults(value);
        break;
      case 'children':
        setChildren(value);
        break;
      case 'rooms':
        setRooms(value);
        break;
    }
    localStorage.setItem("hotelSearchParams", JSON.stringify({
      ...currentParams,
      [type]: value
    }));
  };

  // Custom styles for the Select component
  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      border: 'none',
      padding: '12px',
      backgroundColor: '#fff',
      minHeight: '44px',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '4px',
      zIndex: 10,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#999',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#333',
    }),
  };

  return (
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <style>
        {`
          .custom-input {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: none;
            border-radius: 8px;
            padding: 12px;
            background-color: #fff;
            height: 44px;
          }
          .custom-input:focus {
            outline: none;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          }
          .custom-button {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          }
          .custom-select__control {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
            border: none !important;
          }
          .btn-danger.full-width {
            width: 100%;
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
        `}
      </style>
      
      <div className="search-wrap with-label bg-white rounded-3 p-3 pt-4">
        <div className="row gy-3 gx-md-3 gx-sm-2">
          <div className="col-xl-8 col-lg-7 col-md-12">
            <div className="row gy-3 gx-md-3 gx-sm-2">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                <div className="form-group hdd-arrow rounded-1 mb-0">
                  <label>Choose City, Hotel</label>
                  <Select
                    ref={citySelectRef}
                    options={cityOptions}
                    placeholder="Destination"
                    classNamePrefix="custom-select"
                    styles={customSelectStyles}
                    value={selectedCity}
                    onChange={handleCityChange}
                    onInputChange={handleInputChange}
                    isClearable
                    isSearchable
                  />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="form-group mb-0">
                  <label>Choose Date</label>
                  <div className="d-flex">
                    <div ref={startDateRef}>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => handleDateChange(date, true)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat={"dd/MM/yyyy"}
                        minDate={new Date()}
                        placeholderText="Check-In"
                        className="form-control fw-bold custom-input"
                      />
                    </div>
                    <div ref={endDateRef}>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => handleDateChange(date, false)}
                        dateFormat={"dd/MM/yyyy"}
                        minDate={startDate || new Date()}
                        filterDate={filterCheckoutDates}
                        placeholderText="Check-Out"
                        className="form-control fw-bold ms-2 custom-input"
                        disabled={!startDate}
                      />
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
                  <label>Members</label>
                  <div className="booking-form__input">
                    <button
                      ref={guestsButtonRef}
                      onClick={handleShowGuestsModal}
                      className="form-control text-start custom-button"
                    >
                      {roomsData.reduce((sum, r) => sum + r.adults, 0)} Adult
                      {roomsData.reduce((sum, r) => sum + r.adults, 0) !== 1 ? 's' : ''},{" "}
                      {roomsData.reduce((sum, r) => sum + r.children, 0)} Child
                      {roomsData.reduce((sum, r) => sum + r.children, 0) !== 1 ? 'ren' : ''},{" "}
                      {roomsData.length} Room{roomsData.length !== 1 ? 's' : ''}
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
                            roomsData.reduce((sum, r) => sum + r.adults, 0),
                            roomsData.reduce((sum, r) => sum + r.children, 0),
                            selectedCity,
                            navigate,
                            roomsData // <-- Pass roomsData here
                          )
                        }
                        disabled={!selectedCity || !startDate || !endDate}
                    > 
                      <i className="fa fa-search me-2" />Search
                    </button>
                  {/* </Link> */}
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
  );
};

export default HotelSearchbar;