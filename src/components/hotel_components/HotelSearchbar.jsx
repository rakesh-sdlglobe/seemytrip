import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Hotel.css';
import { Link } from 'react-router-dom';

export const HotelSearchbar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showGuestsOptions, setShowGuestsOptions] = useState(false);
  const guestsDropdownRef = useRef(null);

  const toggleGuestsOptions = () => {
    setShowGuestsOptions((prevState) => !prevState); // Correct toggle logic
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guestsDropdownRef.current && !guestsDropdownRef.current.contains(event.target)) {
        setShowGuestsOptions(false); // Close dropdown when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
                    <option value="ny">New York</option>
                    <option value="sd">San Diego</option>
                    <option value="sj">San Jose</option>
                    <option value="ph">Philadelphia</option>
                    <option value="nl">Nashville</option>
                    <option value="sf">San Francisco</option>
                    <option value="hu">Houston</option>
                    <option value="sa">San Antonio</option>
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
                  <div className="booking-form__input guests-input" ref={guestsDropdownRef}>
                    <button
                      name="guests-btn"
                      id="guests-input-btn"
                      onClick={toggleGuestsOptions}
                      className="form-control text-start"
                    >
                      {adults} Adult{adults > 1 ? 's' : ''}, {children} Child{children !== 1 ? 'ren' : ''}, {rooms} Room{rooms > 1 ? 's' : ''}
                    </button>
                    {showGuestsOptions && (
                      <div className="guests-input__options bg-white shadow rounded-3 p-2 position-absolute" style={{ zIndex: 1000 }}>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="guests-input__ctrl minus" onClick={() => setAdults(adults > 1 ? adults - 1 : 1)}>
                            <i className="fa fa-minus" />
                          </span>
                          <span className="guests-input__value">{adults} Adult{adults > 1 ? 's' : ''}</span>
                          <span className="guests-input__ctrl plus" onClick={() => setAdults(adults + 1)}>
                            <i className="fa fa-plus" />
                          </span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="guests-input__ctrl minus" onClick={() => setChildren(children > 0 ? children - 1 : 0)}>
                            <i className="fa fa-minus" />
                          </span>
                          <span className="guests-input__value">{children} Child{children !== 1 ? 'ren' : ''}</span>
                          <span className="guests-input__ctrl plus" onClick={() => setChildren(children + 1)}>
                            <i className="fa fa-plus" />
                          </span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="guests-input__ctrl minus" onClick={() => setRooms(rooms > 1 ? rooms - 1 : 1)}>
                            <i className="fa fa-minus" />
                          </span>
                          <span className="guests-input__value">{rooms} Room{rooms > 1 ? 's' : ''}</span>
                          <span className="guests-input__ctrl plus" onClick={() => setRooms(rooms + 1)}>
                            <i className="fa fa-plus" />
                          </span>
                        </div>
                      </div>
                    )}
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
    </div>
  );
};
