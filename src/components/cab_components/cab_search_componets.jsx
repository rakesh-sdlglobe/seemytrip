import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const CabSearch = () => {
  const [tripType, setTripType] = useState('one-way');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [mobileNumber, setMobileNumber] = useState('');
  const [journeyType, setJourneyType] = useState('outstation');
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

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      boxShadow: 'none',
      borderRadius: '4px',
      backgroundColor: '#fff',
      padding: '12px',
      border: '1px solid #ccc', // Add border
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

  const handleSearch = () => {
    navigate('/cab-list')
    // Add search logic here
    console.log({
      tripType,
      startDate,
      endDate,
      mobileNumber,
      journeyType,
    });
  };

  return (
    <>
      <style>
        {`
          .search-wrap {
            background-color: #fff;
            height: auto;
            padding: 20px;
            border-radius: 8px; /* Add this line to round the corners */
          }

          @media (max-width: 768px) {
            .search-wrap {
              height: auto;
              padding: 15px;
              margin-top: 15px; /* Adjust margin for smaller screens if needed */
            }
          }

          @media (max-width: 576px) {
            .search-wrap {
              height: auto;
              padding: 10px;
              margin-top: 10px; /* Adjust margin for even smaller screens if needed */
            }
          }

          .form-control {
            font-weight: bold;
          }

          .btn.full-width {
            width: 100%;
            font-weight: 500;
          }

          .radiobutton {
            display: flex; 
            align-items: center;
            margin-bottom: 1rem;
            accent-color: #cd2c22;
          }

          .dropdown-container {
            display: flex;
            align-items: center;
          }

          .toggle-buttons {
            display: flex;
            margin-bottom: 1rem;
            align-items: center;
          }

          .toggle-button {
            padding: 10px 20px;
            margin-right: 10px;
            border: 1px solid #cd2c22;
            border-radius: 4px;
            cursor: pointer;
            background-color: #fff;
            color: #cd2c22;
            font-weight: 500;
            text-align: center;
          }

          .toggle-button.active {
            background-color: #cd2c22;
            color: #fff;
          }

          .toggle-radio-group {
            display: flex;
            align-items: center;
          }

          .toggle-radio-group label {
            margin-right: 15px;
            display: flex;
            align-items: center;
          }

          /* Ensure Select components have border on mobile */
          @media (max-width: 768px) {
            .react-select__control {
              border: 1px solid #ccc;
            }
          }
        `}
      </style>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="search-wrap position-relative">
              <div className="row gy-3 gx-md-1 gx-sm-1">
                {/* Toggle Buttons and Radio Buttons in a Single Row */}
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="d-flex flex-wrap justify-content-between toggle-radio-group">
                    {/* Toggle Buttons for OutStation and Local */}
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

                    {/* Radio Buttons for One Way and Round Trip */}
                    <div className="radiobutton">
                      <label className="me-3">
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
                    {/* From Airport Select */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group hdd-arrow mb-0">
                        <Select
                          id="fromAirport"
                          options={cabOptions}
                          placeholder="pickup"
                          styles={customSelectStyles}
                        />
                      </div>
                    </div>

                    {/* To Airport Select */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group hdd-arrow mb-0">
                        <Select
                          id="toAirport"
                          options={cabOptions}
                          placeholder="destination"
                          styles={customSelectStyles}
                        />
                      </div>
                    </div>

                    {/* Journey Date Picker */}
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group mb-0">
                        <DatePicker
                          selected={startDate}
                          onChange={date => setStartDate(date)}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Date"
                          className="form-control fw-bold"
                        />
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group mb-0">
                      <input
                          placeholder="Time" // This will show now
                          type="text"
                          className="form-control"
                          style={{ border: '1px solid #ccc' }} // Add border
                          value={mobileNumber}
                          onChange={e => setMobileNumber(e.target.value)}
                          onFocus={(e) => e.target.type = 'time'} // Change input type to 'time' on focus
                          onBlur={(e) => e.target.type = 'text'}  // Change back to 'text' on blur if no value
                        />

                      </div>
                    </div>


                    {/* Search Button */}
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group mb-0">
                        <button
                          className="btn full-width text-uppercase"
                          style={{
                            backgroundColor: '#cd2c22', // Adjust as needed
                            color: '#fff', // Adjust as needed
                          }}
                          onClick={handleSearch}
                        >
                          Search
                        </button>
                      </div>
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

export default CabSearch;
