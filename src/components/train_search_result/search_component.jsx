import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
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
  const [calendarOpen, setCalendarOpen] = useState(false);
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
      navigate('/Train-list-01')
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
      // boxShadow: 'none',
      borderRadius: '4px',
      backgroundColor: '#fff',
      border: 'none',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '12px',
      minWidth: '200px', // Added minimum width
    fontSize: '15px'
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '4px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      minWidth: '250px', // Made dropdown menu wider
    fontSize: '15px'
    }),
    option: (provided, state) => ({
      ...provided,
      padding: '12px 15px', // Increased padding
      backgroundColor: state.isSelected ? '#d20000' : state.isFocused ? '#f5f5f5' : '#fff',
      color: state.isSelected ? '#fff' : '#333',
      '&:hover': {
        backgroundColor: '#f5f5f5'
      }
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#999',
      fontSize: '15px'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#333',
      fontSize: '15px'
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
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Shadow for inputs */
            border: none; /* Remove border */
            padding: 12px; /* Add padding */
            border-radius: 4px; /* Rounded corners */
            min-width:100%;
          }

          .btn.full-width {
            width: 100%;
            font-weight: 500;
             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Button shadow */
             border-radius:6px !important;
          }
            
          .dropdown-container {
            display: ${dropdownHindden}; 
            align-items: center;
            margin-bottom: 20px;
            gap: 20px; // Added gap between dropdowns
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
            .react-datepicker-wrapper .form-control:focus,
            .react-datepicker-wrapper .form-control:active {
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Keep the box shadow on focus */
              outline: none; /* Optional: remove the default outline */
            }
            .calendar-wrapper {
              position: relative;
            }

            .calendar-popup {
              position: absolute;
              top: 100%; // Changed from bottom: 100% to top: 100%
              left: 0;
              width: 320px; // Reduced width for single month
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
              border-radius: 12px;
              background: white;
              z-index: 1000; // Increased z-index to ensure it stays on top
              overflow: hidden;
              padding: 15px;
              margin-top: 5px; // Add some space between input and calendar
            }

            .react-calendar {
              width: 100%;
              border: none;
              background: white;
              font-family: Arial, sans-serif;
              line-height: 1.125em;
            }
              .react-calendar__navigation {
                margin-bottom: 20px;
              }

              .react-calendar__navigation button {
                min-width: 44px;
                background: none;
                font-size: 16px;
                padding: 8px;
                border-radius: 8px;
              }

              .react-calendar__navigation button:enabled:hover,
              .react-calendar__navigation button:enabled:focus {
                background-color: #f8f8f8;
              }

              .react-calendar__month-view__weekdays {
                text-align: center;
                text-transform: uppercase;
                font-weight: bold;
                font-size: 0.9em;
                padding: 8px 0;
              }

              .react-calendar__month-view__days__day {
                padding: 12px 8px !important;
                font-size: 14px;
              }

              .react-calendar__tile {
                border-radius: 8px;
                padding: 12px;
                margin: 4px;
                font-weight: 500;
              }

              .react-calendar__tile:enabled:hover,
              .react-calendar__tile:enabled:focus {
                background-color: #f8f8f8;
              }

              .react-calendar__tile--active {
                background: #d20000 !important;
                color: white;
              }

              .react-calendar__tile--now {
                background: #ffe8e8;
              }

              .react-calendar__month-view__days__day--weekend {
                color: #d20000;
              }

              .react-calendar__month-view__days__day--neighboringMonth {
                color: #969696;
              }

          .form-control:focus {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Keep shadow on focus */
            outline: none;
          }
            .react-calendar__tile {
              border-radius: 8px; /* Makes each tile rounded */
              padding: 10px; /* Adds padding to tiles */
              margin: 4px; /* Spacing between tiles */
            }
            .react-calendar__tile--active {
              background: #d20000;
              color: white;
            }
            @media (max-width: 576px) {
              .calendar-popup {
                width: 90vw; /* Adjust width for mobile */
                left: 5vw; /* Center on mobile */
              }
            }
             
            .search-wrap{
              background-color:${backgroundColor} !important;
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
                    className='class'
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
                        <div className="form-group hdd-arrow mb-0 me-2">
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
                        <div className="form-group hdd-arrow mb-0 ms-2">
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
                        <div className="form-group mb-0 ">
                          {dateLabel && (
                            <label className="text-light text-uppercase opacity-75">{dateLabel}</label>
                          )}
                         <div className="calendar-wrapper">
                          <input
                            type="text"
                            readOnly
                            className="form-control"
                            value={journeyDate ? journeyDate.toLocaleDateString() : ''}
                            onClick={() => setCalendarOpen(!calendarOpen)}
                            placeholder="DD/MM/YYYY"
                          />
                          {calendarOpen && (
                            <div className="calendar-popup">
                             <Calendar
                                onChange={(date) => {
                                  setJourneyDate(date);
                                  setCalendarOpen(false);
                                }}
                                value={journeyDate}
                                 // Show two months
                                selectRange={false}
                                showNeighboringMonth={true}
                                showFixedNumberOfWeeks={false}
                              />
                            </div>
                          )}
                        </div>

                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="form-group mb-0">
                          <button
                            type="button"
                            className="btn full-width fw-medium"
                            style={{ backgroundColor: buttonBackgroundColor, color: buttonTextColor, }}
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
