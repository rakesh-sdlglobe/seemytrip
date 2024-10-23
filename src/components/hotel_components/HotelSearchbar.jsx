import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import './Hotel.css';

const CustomModalHeader = ({ onClose }) => (
  <Modal.Header closeButton className="border-0">
    <Modal.Title className="fw-bold">Choose Members</Modal.Title>
  </Modal.Header>
);

const CustomModalBody = ({ adults, children, rooms, setAdults, setChildren, setRooms }) => (
  <Modal.Body className="p-4">
    {[
      { label: 'Adults', value: adults, setValue: setAdults },
      { label: 'Children', value: children, setValue: setChildren },
      { label: 'Rooms', value: rooms, setValue: setRooms },
    ].map(({ label, value, setValue }, index) => (
      <div key={index} className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-medium">{label}</span>
          <div className="d-flex align-items-center">
            <Button
              variant="outline-secondary"
              className="rounded-circle shadow-sm"
              onClick={() => setValue(value > (label === 'Children' ? 0 : 1) ? value - 1 : (label === 'Children' ? 0 : 1))}
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
);

const CustomModalFooter = ({ onConfirm }) => (
  <Modal.Footer className="border-0">
    <Button
      variant="primary"
      className="w-100 rounded-pill fw-medium"
      onClick={onConfirm}
    >
      Confirm
    </Button>
  </Modal.Footer>
);

export const HotelSearchbar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showGuestsModal, setShowGuestsModal] = useState(false);

  const handleShowGuestsModal = () => setShowGuestsModal(true);
  const handleCloseGuestsModal = () => setShowGuestsModal(false);
  const handleConfirmGuests = () => {
    setShowGuestsModal(false);
  };

  const hotelOptions = [
    { value: 'mum', label: 'Mumbai' },
    { value: 'dl', label: 'Delhi' },
    { value: 'blr', label: 'Bangalore' },
    { value: 'goa', label: 'Goa' },
    { value: 'hyd', label: 'Hyderabad' },
    { value: 'kol', label: 'Kolkata' },
    { value: 'jaipur', label: 'Jaipur' },
    { value: 'udaipur', label: 'Udaipur' },
  ];

  const customSelectStyles = {
    control: (provided,state) => ({
      ...provided,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Default box shadow
      border: 'none', // Remove border
      padding: '12px',
      backgroundColor: '#fff',
      // Add a slight transition for smoother visual changes
      transition: 'box-shadow 0.2s ease',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '4px',
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
          .custom-border {
             border-width: 0.5px; /* Adjust the border width as needed */
             border-color: #ccc;  /* Ensure the border color matches */
           }
             .custom-input {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 8px;
  padding: 12px;
  background-color: #fff;
}

.custom-input:focus {
  outline: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Darker shadow on focus */
}

.custom-button {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  background-color: #fff;
  cursor: pointer;
}

.custom-button:focus {
  outline: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.custom-select {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 8px;
}

.custom-select__control {
  box-shadow: none;
  border: none;
}

.custom-select__control {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important; /* Force box shadow */
  border: none !important; /* Ensure border is removed */
}


        `}
        
      </style>
      <div className="search-wrap with-label bg-white rounded-3 p-3 pt-4">
      <ul className="nav nav-pills primary-soft medium justify-content-center mb-3" id="tour-pills-tab" role="tablist">
                    {/* <li className="nav-item nav-item1">
                      <Link
                        className={`nav-link ${activeTab === 'Trains' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Trains')}
                      >
                        <i className="fa-solid fa-train me-2" />Trains
                      </Link>
                    </li> */}
                    <li className="nav-item nav-item1">
                      <Link className={`nav-link`} to='/offers'>
                        <i className="fa-solid fa-tags me-2" />Offers
                      </Link>
                    </li>
                    <li className="nav-item nav-item1">
                      <Link className={`nav-link`} to='/guides'>
                        <i className="fa-solid fa-book me-2" />Guides
                      </Link>
                    </li>
                    <li className="nav-item nav-item1">
                      <Link className={`nav-link`} to='/selfdrivecars'>
                        <i className="fa-solid fa-car me-2" />Self Drive
                      </Link>
                    </li>

                    <li className="nav-item nav-item1 ">
                      <Link
                        className={`nav-link`}
                      >
                        <i className="fa-solid fa-camera me-2" />Photographer
                      </Link>
                    </li>
                    <li className="nav-item nav-item1 ">
                      <Link
                        className={`nav-link`}
                      >
                        <i className="fa-solid fa-house-user me-2" />Home Stays & Villas
                      </Link>
                    </li>
                    <li className="nav-item nav-item1 ">
                      <Link
                        className={`nav-link`}
                      >
                        <i className="fa-solid fa-shield-alt me-2" />Travel Insurance
                      </Link>
                    </li>
                    <li className="nav-item nav-item1 ">
                      <Link
                        className={`nav-link`}
                      >
                        <i className="fa-solid fa-suitcase-rolling me-2" />Packages
                      </Link>
                    </li>
                    <li className="nav-item nav-item1 ">
                      <Link
                        className={`nav-link`}
                      >
                        <i className="fa-solid fa-gift me-2" />Gift Cards
                      </Link>
                    </li>

                  </ul>
        <div className="row gy-3 gx-md-3 gx-sm-2">
          <div className="col-xl-8 col-lg-7 col-md-12">
            <div className="row gy-3 gx-md-3 gx-sm-2">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                <div className="form-group hdd-arrow custom-border rounded-1 mb-0">
                  <div className="form-group hdd-arrow mb-0">
                  <Select
                      options={hotelOptions}
                      placeholder="Destination"
                      classNamePrefix="custom-select"
                      styles={customSelectStyles}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="form-group mb-0">
                  <label>Choose Date</label>
                  <div className="d-flex">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      placeholderText="Check-In"
                      className="form-control fw-bold custom-input"
                    />
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
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
                      {adults} Adults{adults > 1 ? 's' : ''}, {children} Child{children !== 1 ? 'ren' : ''}, {rooms} Room{rooms > 1 ? 's' : ''}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="form-group mb-0">
                  <Link to="/hotel-list-01">
                    <button type="button" className="btn btn-primary full-width rounded-1 fw-medium">
                      <i className="fa fa-search me-2" />Search
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Guests Modal */}
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
