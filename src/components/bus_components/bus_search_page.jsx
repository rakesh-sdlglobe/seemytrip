import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';

const BusSearch = () => {
  const [startDate, setStartDate] = useState(null);
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
    control: (provided, state) => ({
      ...provided,
      boxShadow: state.isFocused ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
      border: 'none', // Remove border
      borderRadius: '4px',
      backgroundColor: '#fff',
      padding: '12px',
      width: '100%', // Ensure full width
      '&:hover': {
        border: 'none', // Remove border on hover
      },
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
    navigate('/bus-list');
  };

  return (
    <>
      <style>
        {`
          .search-wrap {
            background-color: #fff;
            height: auto;
            padding: 20px;
            border-radius: 8px;
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
            width: 100%; /* Ensure full width */
            border: none; /* Remove border */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add box shadow */
            border-radius: 4px; /* Round corners */
            padding: 12px; /* Add padding */
          }

          .form-control:focus {
            outline: none; /* Remove default focus outline */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Keep box shadow on focus */
          }

          .btn.full-width {
            width: 100%;
            font-weight: 500;
          }

          .react-select__control {
            border: none; /* Remove border */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add box shadow */
            border-radius: 4px; /* Round corners */
          }

          .react-select__control:focus {
            outline: none; /* Remove default focus outline */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Keep box shadow on focus */
          }
        `}
      </style>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="search-wrap">
              <div className="row gy-3 gx-md-1 gx-sm-1">

                {/* Form Fields */}
                <div className="col-12">
                  <div className="row gy-3 gx-md-3 gx-sm-2">
                    {/* From City Select */}
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <Select
                        id="fromCity"
                        options={cabOptions}
                        placeholder="From"
                        styles={customSelectStyles}
                      />
                    </div>
                    {/* To City Select */}
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <Select
                        id="toCity"
                        options={cabOptions}
                        placeholder="To"
                        styles={customSelectStyles}
                      />
                    </div>

                    {/* Journey Date Picker */}
                    <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12">
                      <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Journey Date"
                        className="form-control"
                      />
                    </div>

                    {/* Search Button */}
                    <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12">
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
    </>
  );
};

export default BusSearch;
