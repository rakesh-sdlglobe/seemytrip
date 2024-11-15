import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';

const BtSearch = () => {
  const [tripType, setTripType] = useState('one-way');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [mobileNumber, setMobileNumber] = useState('');
  const [journeyType, setJourneyType] = useState('outstation');
  const [carType, setCarType] = useState('executive');
  const navigate = useNavigate();

  const cabOptions = [
    { value: 'mum', label: 'Mumbai' },
    { value: 'dl', label: 'Delhi' },
    { value: 'blr', label: 'Bangalore' },
    { value: 'goa', label: 'Goa' },
    { value: 'hyd', label: 'Hyderabad' },
    { value: 'kol', label: 'Kolkata' },
    { value: 'jaipur', label: 'Jaipur' },
    { value: 'udaipur', label: 'Udaipur' },
  ];

  const carOptions = [
    { value: 'executive', label: 'Executive' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'premium', label: 'Premium' },
  ];

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      border: 'none',
      borderRadius: '8px',
      padding: '10px',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '8px',
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

  const handleSearch = () => {
    navigate('/bt-list');
    console.log({
      tripType,
      startDate,
      endDate,
      mobileNumber,
      journeyType,
      carType,
    });
  };

  return (
    <>
      <style>
        {`
          .search-wrap {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .form-control {
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border: none;
            border-radius: 8px;
            padding: 12px;
          }

          .btn.full-width {
            width: 100%;
            font-weight: 500;
            background-color: #cd2c22;
            color: #fff;
            border: none;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
          }

          .radiobutton label {
            font-weight: bold;
            color: #333;
          }

          .toggle-button {
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            color: #cd2c22;
            font-weight: 500;
            cursor: pointer;
            width: 150px;
            text-align: center;
          }

          .toggle-button.active {
            background-color: #cd2c22;
            color: #fff;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
          }

          .toggle-buttons {
            display: flex;
            gap: 10px;
            align-items: center;
          }

          .radiobutton {
            display: flex;
            align-items: center;
            gap: 20px;
          }
        `}
      </style>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="search-wrap position-relative">
              <div className="row gy-3 gx-md-1 gx-sm-1">
                <div className="col-xl-12">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="toggle-buttons">
                      <div
                        className={`toggle-button ${journeyType === 'outstation' ? 'active' : ''}`}
                        onClick={() => setJourneyType('outstation')}
                      >
                        OutStation
                      </div>
                      <div
                        className={`toggle-button ${journeyType === 'local' ? 'active' : ''}`}
                        onClick={() => setJourneyType('local')}
                      >
                        Local
                      </div>
                    </div>
                    <div className="radiobutton">
                      <label>
                        <input
                          type="radio"
                          value="one-way"
                          checked={tripType === 'one-way'}
                          onChange={() => setTripType('one-way')}
                        /> One Way
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="round-trip"
                          checked={tripType === 'round-trip'}
                          onChange={() => setTripType('round-trip')}
                        /> Round Trip
                      </label>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="col-xl-12">
                  <div className="row gy-3 gx-md-3 gx-sm-2">
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group mb-0">
                        <Select
                          id="fromCity"
                          options={cabOptions}
                          placeholder="From"
                          styles={customSelectStyles}
                        />
                      </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group mb-0">
                        <Select
                          id="toCity"
                          options={cabOptions}
                          placeholder="To"
                          styles={customSelectStyles}
                        />
                      </div>
                    </div>

                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group mb-0">
                        <DatePicker
                          selected={startDate}
                          onChange={date => setStartDate(date)}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Select Journey Date"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group mb-0">
                        <DatePicker
                          selected={endDate}
                          onChange={date => setEndDate(date)}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Return Date"
                          className="form-control"
                          disabled={tripType === 'one-way'}
                        />
                      </div>
                    </div>

                    {/* <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group mb-0">
                        <Select
                          id="carType"
                          options={carOptions}
                          placeholder="Car Type"
                          styles={customSelectStyles}
                        />
                      </div>
                    </div> */}

                    <div className="col-xl-2">
                      <button className="btn full-width" onClick={handleSearch}>
                        Search Flights
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtSearch;
