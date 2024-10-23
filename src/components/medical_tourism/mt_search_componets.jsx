import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const MtSearch = () => {
  const [tripType, setTripType] = useState('one-way');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [mobileNumber, setMobileNumber] = useState('');
  const [treatmentType, setTreatmentType] = useState('surgery');
  const navigate = useNavigate();

  const cityOptions = [
    { value: 'mum', label: 'Mumbai' },
    { value: 'dl', label: 'Delhi' },
    { value: 'blr', label: 'Bangalore' },
    { value: 'goa', label: 'Goa' },
    { value: 'hyd', label: 'Hyderabad' },
    { value: 'kol', label: 'Kolkata' },
    { value: 'jaipur', label: 'Jaipur' },
    { value: 'udaipur', label: 'Udaipur' },
  ];

  const treatmentOptions = [
    { value: 'surgery', label: 'Surgery' },
    { value: 'therapy', label: 'Therapy' },
    { value: 'diagnosis', label: 'Diagnosis' },
    { value: 'rehabilitation', label: 'Rehabilitation' },
  ];

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add box shadow
      borderRadius: '4px',
      backgroundColor: '#fff',
      padding: '12px',
      border: 'none', // Remove border
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
    navigate('/mt-list');
    console.log({
      tripType,
      startDate,
      endDate,
      mobileNumber,
      treatmentType,
    });
  };

  return (
    <>
      <style>
        {`
          .search-wrap {
            background-color: #f9f9f9;
            height: auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }

          @media (max-width: 768px) {
            .search-wrap {
              padding: 15px;
              margin-top: 15px;
            }
          }

          @media (max-width: 576px) {
            .search-wrap {
              padding: 10px;
              margin-top: 10px;
            }
          }

          .form-control {
            font-weight: bold;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box shadow */
            border: none; /* Remove border */
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
                    {/* Toggle Buttons for Treatment and Therapy */}
                    <div className="toggle-buttons">
                      <div
                        className={`toggle-button ${treatmentType === 'surgery' ? 'active' : ''}`}
                        onClick={() => setTreatmentType('surgery')}
                      >
                        Surgery
                      </div>
                      <div
                        className={`toggle-button ${treatmentType === 'therapy' ? 'active' : ''}`}
                        onClick={() => setTreatmentType('therapy')}
                      >
                        Therapy
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
                    {/* From City Select */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group hdd-arrow mb-0">
                        <Select
                          id="fromCity"
                          options={cityOptions}
                          placeholder="Current City"
                          styles={customSelectStyles}
                        />
                      </div>
                    </div>

                    {/* To City Select */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group hdd-arrow mb-0">
                        <Select
                          id="toCity"
                          options={cityOptions}
                          placeholder="Destination City (for treatment)"
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
                          placeholderText="Select Travel Date"
                          className="form-control fw-bold"
                        />
                      </div>
                    </div>

                    {/* Treatment Type Select */}
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group hdd-arrow mb-0">
                        <Select
                          id="treatmentType"
                          options={treatmentOptions}
                          placeholder="Treatment Type"
                          styles={customSelectStyles}
                          value={treatmentOptions.find(option => option.value === treatmentType)}
                          onChange={option => setTreatmentType(option.value)}
                        />
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group mb-0">
                        <input
                          type="text"
                          className="form-control"
                          style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} // Add box shadow
                          placeholder="Enter mobile number"
                          value={mobileNumber}
                          onChange={e => setMobileNumber(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Search Button */}
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group mb-0">
                        <button
                          className="btn full-width text-uppercase"
                          style={{
                            backgroundColor: '#cd2c22',
                            color: '#fff',
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

export default MtSearch;
