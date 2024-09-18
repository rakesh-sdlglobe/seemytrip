import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

  return (
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <div className="search-wrap with-label bg-white rounded-3 p-3 pt-4">
        <div className="row gy-3 gx-md-3 gx-sm-2">
          <div className="col-xl-8 col-lg-7 col-md-12">
            <div className="row gy-3 gx-md-3 gx-sm-2">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                <div className="form-group hdd-arrow border rounded-1 mb-0">
                  <label>Where</label>
                  <select className="goingto form-control border-0">
                    <option value>Select</option>
                    <option value="mum">Mumbai</option>
                    <option value="dl">Delhi</option>
                    <option value="blr">Bangalore</option>
                    <option value="goa">Goa</option>
                    <option value="hyd">Hyderabad</option>
                    <option value="kol">Kolkata</option>
                    <option value="jaipur">Jaipur</option>
                    <option value="udaipur">Udaipur</option>
                  </select>
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
                      className="form-control fw-bold"
                    />
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      placeholderText="Check-Out"
                      className="form-control fw-bold ms-2"
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
                      className="form-control text-start"
                    >
                      {adults} Adult{adults > 1 ? 's' : ''}, {children} Child{children !== 1 ? 'ren' : ''}, {rooms} Room{rooms > 1 ? 's' : ''}
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
