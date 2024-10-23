import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';

const CruiseSearch = () => {
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
    navigate('/cruise-list');
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
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* Keep box shadow on focus */
          }

          @media (max-width: 768px) {
            .react-select__control {
              border: 1px solid #ccc; /* Optional: Add border for mobile if needed */
            }
          }
        `}
      </style>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="search-wrap">
              <div className="row gy-3 gx-md-1 gx-sm-1">
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
                {/* Form Fields */}
                <div className="col-12">
                  <div className="row gy-3 gx-md-3 gx-sm-2">
                    {/* From City Select */}
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <Select
                        id="fromCity"
                        options={cabOptions}
                        placeholder="Enter pickup city"
                        styles={customSelectStyles}
                      />
                    </div>
                    {/* To City Select */}
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <Select
                        id="toCity"
                        options={cabOptions}
                        placeholder="Select destination city"
                        styles={customSelectStyles}
                      />
                    </div>

                    {/* Journey Date Picker */}
                    <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12">
                      <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select Journey Date"
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

export default CruiseSearch;
