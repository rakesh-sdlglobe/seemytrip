import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchStations, fetchTrains } from '../../store/Actions/filterActions';
import { selectStations } from '../../store/Selectors/filterSelectors';
import { useNavigate } from 'react-router-dom';

const SearchComponent = ({
  onSearchResults = () => { },
  buttonText = 'Search',
  backgroundColor = '#f0f0f0',
  buttonBackgroundColor = '#007bff',
  buttonTextColor = '#ffffff',
  height = 'auto',
  leavingLabel = 'Leaving From',
  goingLabel = 'Going To',
  dateLabel = 'Journey Date',
  dropdownHindden = 'auto',
  checklabelColor = 'auto',
  hindenswap = 'auto',
}) => {
  const dispatch = useDispatch();
  const stations = useSelector(selectStations);
  const navigate = useNavigate()

  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [journeyDate, setJourneyDate] = useState(null);
  const [disabilityConcession, setDisabilityConcession] = useState(false);
  const [flexibleDate, setFlexibleDate] = useState(false);
  const [availableBerth, setAvailableBerth] = useState(false);
  const [railwayPassConcession, setRailwayPassConcession] = useState(false);

  useEffect(() => {
    dispatch(fetchStations());
  }, [dispatch]);

  const [generalSelection, setGeneralSelection] = useState(null);
  const [classSelection, setClassSelection] = useState(null);

  // Other existing state and handlers...

  const generalOptions = [
    { value: 'general', label: 'GENERAL' },
    { value: 'ladies', label: 'LADIES' },
    { value: 'lower_berth_sr_citizen', label: 'LOWER BERTH/SR.CITIZEN' },
    { value: 'person_with_disability', label: 'PERSON WITH DISABILITY' },
    { value: 'duty_pass', label: 'DUTY PASS' },
    { value: 'tatkal', label: 'TATKAL' },
    { value: 'premium_tatkal', label: 'PREMIUM TATKAL' },
    // Add more options as needed
  ];


  const classOptions = [
    { value: 'all', label: 'All Classes' },
    { value: 'anubhuti', label: 'Anubhuti Class (EA)' },
    { value: 'ac_first_class', label: 'AC First Class (1A)' },
    { value: 'vistadome_ac', label: 'Vistadome AC (EV)' },
    { value: 'exec_chair_car', label: 'Exec. Chair Car (EC)' },
    { value: 'ac_2_tier', label: 'AC 2 Tier (2A)' },
    { value: 'ac_3_economy', label: 'AC 3 Economy' },
    { value: 'vistadome_chair_car', label: 'Vistadome Chair Car (VC)' },
    { value: 'ac_chair', label: 'AC Chair (CC)' },
    { value: 'sleeper', label: 'Sleeper (SL)' },
  ];


  const handleFromStationChange = (selectedOption) => {
    setLeavingFrom(selectedOption);
  };

  const handleToStationChange = (selectedOption) => {
    setGoingTo(selectedOption);
  };

  const handleJourneyDateChange = (date) => {
    setJourneyDate(date);
  };

  const handleSwapLocations = () => {
    const temp = leavingFrom;
    setLeavingFrom(goingTo);
    setGoingTo(temp);
  };

  const handleSearch = () => {
    if (leavingFrom && goingTo && journeyDate) {
      dispatch(fetchTrains(leavingFrom.value, journeyDate));
      navigate('/flight-list-01')
    } else {
      alert('Please select all fields.');
    }
  };


  const stationOptions = stations.map((station) => ({
    value: station.id,
    label: station.name
  }));

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      boxShadow: 'none',
      borderRadius: '4px',
      backgroundColor: '#fff',
      padding: '12px'
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '4px'
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#999'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#333'
    })
  };

  return (
    <>
      <style>
        {`
          .search-component {
            background-color: ${backgroundColor};
            height: ${height};
            padding: 20px;
            background-size: cover;
            background-position: center;
          }

           @media (max-width: 1024px) {
            .search-component {
              height: 320px;
              padding: 15px;
            }
          }

          @media (max-width: 768px) {
            .search-component {
              height: 320px;
              padding: 15px;
            }
            .swap-icon-container {
              top: 52%; 
              left: calc(34% - 15px);  
            }
          }

          @media (max-width: 576px) {
            .search-component {
              height: 510px;
              padding: 10px;
            }
            .swap-button {
              // top: -132%; 
              // left: calc(300% - 15px);
              display: none;
            }
          }

          .form-control {
            font-weight: bold;
          }

          .btn.full-width {
            width: 100%;
            font-weight: 500;
          }
            
          .dropdown-container  {
            display:  ${dropdownHindden}; 
            align-items: center;
            margin-bottom: 20px;
          }

          .dropdown-container > div {
            margin-right: 15px;
          }

          .checkbox-group {
          margin-top: 10px;
            margin-bottom: 20px;
          }

          .checkbox-group label {
            color: ${checklabelColor};
            margin-right: 30px;
          }
          .checkbox{
            margin-right: 10px; 
            accent-color: #cd2c22;
          }
          .swap-icon-container {
            display: ${hindenswap};
            position: absolute; 
            top: 42%; 
            left: calc(34% - 15px); 
            z-index: 1; 
          }

          .swap-button {
            background: none; 
            border: none; 
            color: gray; 
            cursor: pointer; 
            padding: 0; 
            font-size: inherit; 
          }

          .swap-button i {
            font-size: 1.2em; 
          }
            
        `}
      </style>
      <div className="search-component">
        <div className="container">
          <div className="row justify-content-center align-items-center">

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="dropdown-container">
                <div className="general-dropdown">
                  <Select
                    options={generalOptions}
                    value={generalSelection}
                    onChange={setGeneralSelection}
                    placeholder="Quota"
                    styles={customSelectStyles}
                  />
                </div>
                <div className="class-dropdown">
                  <Select
                    options={classOptions}
                    value={classSelection}
                    onChange={setClassSelection}
                    placeholder="Class"
                    styles={customSelectStyles}
                  />
                </div>
              </div>
              <div className="swap-icon-container">
                <button
                  type="button"
                  className="btn swap-button"
                  onClick={handleSwapLocations}
                >
                  <i className="fas fa-exchange-alt" /> {/* Swap icon */}
                </button>
              </div>

              <div className="search-wrap position-relative">
                <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                  <div className="col-xl-8 col-lg-7 col-md-12">
                    <div className="row gy-3 gx-md-3 gx-sm-2">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                        <div className="form-group hdd-arrow mb-0">
                          {leavingLabel && (
                            <label className="text-light text-uppercase opacity-75">{leavingLabel}</label>
                          )}
                          <Select
                            id="fromStation"
                            options={stationOptions}
                            value={leavingFrom}
                            onChange={handleFromStationChange}
                            placeholder="From"
                            styles={customSelectStyles}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group hdd-arrow mb-0">
                          {goingLabel && (
                            <label className="text-light text-uppercase opacity-75">{goingLabel}</label>
                          )}
                          <Select
                            id="toStation"
                            options={stationOptions}
                            value={goingTo}
                            onChange={handleToStationChange}
                            placeholder="To"
                            styles={customSelectStyles}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-12">
                    <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                        <div className="form-group mb-0">
                          {dateLabel && (
                            <label className="text-light text-uppercase opacity-75">{dateLabel}</label>
                          )}
                          <DatePicker
                            selected={journeyDate}
                            onChange={handleJourneyDateChange}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="DD/MM/YYYY"
                            className="form-control fw-bold"
                          />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="form-group mb-0">
                          <button
                            type="button"
                            className="btn full-width fw-medium"
                            style={{ backgroundColor: buttonBackgroundColor, color: buttonTextColor }}
                            onClick={handleSearch}
                          >
                            <i className="fa-solid fa-magnifying-glass me-2" />
                            {buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkbox-group">
                  <label>
                    <input
                      className='checkbox'
                      type="checkbox"
                      checked={disabilityConcession}
                      onChange={() => setDisabilityConcession(!disabilityConcession)}
                    />
                    Person with Disability Concession
                  </label>
                  <label>
                    <input
                      className='checkbox'
                      type="checkbox"
                      checked={flexibleDate}
                      onChange={() => setFlexibleDate(!flexibleDate)}
                    />
                    Flexible with Date
                  </label>
                  <label>
                    <input
                      className='checkbox'
                      type="checkbox"
                      checked={availableBerth}
                      onChange={() => setAvailableBerth(!availableBerth)}
                    />
                    Train with Available Berth
                  </label>
                  <label>
                    <input
                      className='checkbox'
                      type="checkbox"
                      checked={railwayPassConcession}
                      onChange={() => setRailwayPassConcession(!railwayPassConcession)}
                    />
                    Railway Pass Concession
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
