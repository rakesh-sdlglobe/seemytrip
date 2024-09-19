import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for date picker
import './FlightSearchBar.css'; // Make sure to import the CSS file
import EconomyDropdown from './EconomyDropdown';
import { Link } from 'react-router-dom';

const SearchComponent = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [isGuestsDropdownOpen, setGuestsDropdownOpen] = useState(false);

  const toggleGuestsDropdown = () => {
    setGuestsDropdownOpen(!isGuestsDropdownOpen);
  };

  const updateAdults = (action) => {
    if (action === 'add') setAdults(adults + 1);
    if (action === 'subtract' && adults > 0) setAdults(adults - 1);
  };

  const updateChildren = (action) => {
    if (action === 'add') setChildren(children + 1);
    if (action === 'subtract' && children > 0) setChildren(children - 1);
  };

  const updateInfants = (action) => {
    if (action === 'add') setInfants(infants + 1);
    if (action === 'subtract' && infants > 0) setInfants(infants - 1);
  };

  return (
    <div className="guests-dropdown">
      <button className="guests-button" onClick={toggleGuestsDropdown}>
        {adults} Adult, {children} Children, {infants} Infants
      </button>
      {isGuestsDropdownOpen && (
        <div className="guests-dropdown-options">
          <div className="dropdown-item">
            <button className="ctrl-btn" onClick={() => updateAdults('subtract')}>-</button>
            <span>{adults} Adults</span>
            <button className="ctrl-btn" onClick={() => updateAdults('add')}>+</button>
          </div>
          <div className="dropdown-item">
            <button className="ctrl-btn" onClick={() => updateChildren('subtract')}>-</button>
            <span>{children} Children</span>
            <button className="ctrl-btn" onClick={() => updateChildren('add')}>+</button>
          </div>
          <div className="dropdown-item">
            <button className="ctrl-btn" onClick={() => updateInfants('subtract')}>-</button>
            <span>{infants} Infants</span>
            <button className="ctrl-btn" onClick={() => updateInfants('add')}>+</button>
          </div>
        </div>
      )}
    </div>
  );
};



const FlightSearchBar = () => {
    const [departureDate, setDepartureDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
  return (
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <div className="search-wrap bg-white rounded-3 p-3">
        <div className="search-upper">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="flx-start mb-sm-0 mb-2">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="trip" id="return" defaultValue="option1" defaultChecked />
                <label className="form-check-label" htmlFor="return">Return</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="trip" id="oneway" defaultValue="option2" />
                <label className="form-check-label" htmlFor="oneway">One Way</label>
              </div>
            </div>
            <div className="flx-end d-flex align-items-center flex-wrap">
              <div className="px-sm-2 pb-3 pt-0 ps-0 mob-full">
                <SearchComponent />
              </div>
              <div className="ps-1 pb-3 pt-0 mob-full">
                <EconomyDropdown />
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-lg-2 g-3">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="row gy-3 gx-lg-2 gx-3">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                <div className="form-group hdd-arrow mb-0">
                  <select className="leaving form-control fw-bold">
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
                <div className="btn-flip-icon mt-md-0">
                  <button className="p-0 m-0 text-primary"><i className="fa-solid fa-right-left" /></button>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="form-group hdd-arrow mb-0">
                  <select className="goingto form-control fw-bold">
                    <option value>Select</option>
                    <option value="lv">Las Vegas</option>
                    <option value="la">Los Angeles</option>
                    <option value="kc">Kansas City</option>
                    <option value="no">New Orleans</option>
                    <option value="kc">Jacksonville</option>
                    <option value="lb">Long Beach</option>
                    <option value="cl">Columbus</option>
                    <option value="cn">Canada</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="row gy-3 gx-lg-2 gx-3">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="form-group mb-0">
                <DatePicker
                    className="form-control fw-bold choosedate"
                    selected={departureDate}
                    onChange={(date) => setDepartureDate(date)}
                    placeholderText="Departure.."
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="form-group mb-0">
                <DatePicker
                    className="form-control fw-bold choosedate"
                    selected={returnDate}
                    onChange={(date) => setReturnDate(date)}
                    placeholderText="Return.."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-12">
            <div className="form-group mb-0">
                <Link to="/flight-list">
              <button type="button" className="btn btn-primary full-width fw-medium">
                <i className="fa-solid fa-magnifying-glass me-2" />Search
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchBar;
