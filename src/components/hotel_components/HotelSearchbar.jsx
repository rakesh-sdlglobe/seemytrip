import React, { useState, useEffect, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB"; // for dd/MM/yyyy format
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCityHotels } from '../../store/Actions/hotelActions';
import { selectCityHotels } from '../../store/Selectors/hotelSelectors';
import { useNavigate } from 'react-router-dom';



registerLocale("en-GB", enGB);
// Memoized modal components to prevent unnecessary re-renders
const CustomModalHeader = React.memo(({ onClose }) => (
  <Modal.Header closeButton className="border-0">
    <Modal.Title className="fw-bold">Choose Members</Modal.Title>
  </Modal.Header>
));

const handleSearch = (cityId, checkInDate, checkOutDate, Rooms, adults, children, selectedCity, navigate) => {
  console.log("Search clicked with parameters:");
  console.log("City ID:", cityId);
  console.log("Check-in Date:", checkInDate);
  console.log("Check-out Date:", checkOutDate);
  console.log("Rooms:", Rooms);
  console.log("Adults:", adults);
  console.log("Children:", children);
  console.log("Selected City Data:", selectedCity);

  if (!cityId || !checkInDate || !checkOutDate) {
    console.error("Missing required search parameters");
    return;
  }
  
  const formattedCheckIn = checkInDate ? checkInDate.toLocaleDateString('en-CA') : null;
  const formattedCheckOut = checkOutDate ? checkOutDate.toLocaleDateString('en-CA') : null;

  localStorage.setItem("hotelSearchParams", JSON.stringify({
    cityId,
    checkInDate: formattedCheckIn,
    checkOutDate: formattedCheckOut,
    Rooms,
    adults,
    children,
    selectedCity
  }));

  navigate(`/hotel-search-result`, {
    state: {
      cityId,
      checkInDate: formattedCheckIn,
      checkOutDate: formattedCheckOut,
      Rooms,
      adults,
      children,
      selectedCity
    }
  });
}

const CustomModalBody = React.memo(({ adults, children, rooms, setAdults, setChildren, setRooms }) => (
  <Modal.Body className="p-4">
    {[
      { label: 'Adults', value: adults, setValue: setAdults, min: 1 },
      { label: 'Children', value: children, setValue: setChildren, min: 0 },
      { label: 'Rooms', value: rooms, setValue: setRooms, min: 1 },
    ].map(({ label, value, setValue, min }, index) => (
      <div key={label} className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-medium">{label}</span>
          <div className="d-flex align-items-center">
            <Button
              variant="outline-secondary"
              className="rounded-circle shadow-sm"
              onClick={() => setValue(Math.max(value - 1, min))}
            >
              <i className="fa fa-minus" />
            </Button>
            <span className="mx-3">{value}</span>
            <Button
              variant="outline-secondary"
              className="rounded-circle shadow-sm"
              onClick={() => setValue(value + 1)}
            >
              <i className="fa fa-plus" />
            </Button>
          </div>
        </div>
        {index < 2 && <hr />}
      </div>
    ))}
  </Modal.Body>
));

const CustomModalFooter = React.memo(({ onConfirm }) => (
  <Modal.Footer className="border-0">
    <Button
      variant="danger"
      className="w-100 rounded-pill fw-medium"
      onClick={onConfirm}
    >
      Confirm
    </Button>
  </Modal.Footer>
));

export const HotelSearchbar = () => {
  const dispatch = useDispatch();
  const cityHotels = useSelector(selectCityHotels);
  const [selectedCity, setSelectedCity] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showGuestsModal, setShowGuestsModal] = useState(false);
  const navigate = useNavigate();

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

  // Handle city selection
  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    console.log('Selected city:', selectedOption);
  };

  // Handle input change for search
  const handleInputChange = (inputValue) => {
    dispatch(fetchCityHotels(inputValue));
    return inputValue; // Important to return the input value
  };

  const handleShowGuestsModal = () => setShowGuestsModal(true);
  const handleCloseGuestsModal = () => setShowGuestsModal(false);
  const handleConfirmGuests = () => setShowGuestsModal(false);

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
                    <DatePicker
                      selected={startDate}
                      onChange={setStartDate}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      dateFormat={"dd/MM/yyyy"}
                      minDate={new Date()}
                      placeholderText="Check-In"
                      className="form-control fw-bold custom-input"
                    />
                    <DatePicker
                      selected={endDate}
                      onChange={setEndDate}
                      selectsEnd
                      startDate={startDate}
                      dateFormat={"dd/MM/yyyy"}
                      endDate={endDate}
                      minDate={startDate}
                      placeholderText="Check-Out"
                      className="form-control fw-bold ms-2 custom-input"
                    />
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
                      onClick={handleShowGuestsModal}
                      className="form-control text-start custom-button"
                    >
                      {adults} Adult{adults !== 1 ? 's' : ''}, {children} Child{children !== 1 ? 'ren' : ''}, {rooms} Room{rooms !== 1 ? 's' : ''}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="form-group mb-0">
                  {/* <Link to="/hotel-list-01"> */}
                    <button 
                        type="button" 
                        className="btn btn-danger full-width rounded-1 fw-medium"
                        onClick={() => handleSearch(selectedCity?.value, startDate, endDate, rooms, adults, children,selectedCity, navigate)}
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
          adults={adults}
          children={children}
          rooms={rooms}
          setAdults={setAdults}
          setChildren={setChildren}
          setRooms={setRooms}
        />
        <CustomModalFooter onConfirm={handleConfirmGuests} />
      </Modal>
    </div>
  );
};

export default HotelSearchbar;