import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchStations, fetchTrains } from '../../store/Actions/filterActions';
import { selectStations } from '../../store/Selectors/filterSelectors';
import { useNavigate, useLocation } from 'react-router-dom';
import { Entering, IRCTC_Logo, Leaving, Calendar1 } from '../../assets/images';

const SearchComponent = ({
  onSearchResults = () => { },
  buttonText = 'Search',
  backgroundColor = '#FFFFFFFF',
  highlightsContainer= "display:visible",
  authorizedContainer = "display:visible",
  buttonBackgroundColor = '#007bff',
  buttonTextColor = '#ffffff',
  height = 'auto',
  leavingLabel = 'Leaving From',
  goingLabel = 'Going To',
  dateLabel = 'Journey Date',
  dropdownHindden = 'auto',
  checklabelColor = 'auto',
  hindenswap = 'auto',
  initialValues = null,
  customStyles = {},
}) => {
  const dispatch = useDispatch();
  const stations = useSelector(selectStations);
  const navigate = useNavigate()
  const location = useLocation();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [leavingFrom, setLeavingFrom] = useState(initialValues?.from || '');
  const [goingTo, setGoingTo] = useState(initialValues?.to || '');
  const [journeyDate, setJourneyDate] = useState(initialValues?.date ? new Date(initialValues?.date) : null);
  const [disabilityConcession, setDisabilityConcession] = useState(false);
  const [flexibleDate, setFlexibleDate] = useState(false);
  const [availableBerth, setAvailableBerth] = useState(false);
  const [railwayPassConcession, setRailwayPassConcession] = useState(false);
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);

  const highlights = [
    {
      text: "Free cancellation and get a full refund",
      icon: "fa-solid fa-rotate-left"
    },
    {
      text: "Over 1 million bookings made",
      icon: "fa-solid fa-check-circle"
    },
    {
      text: "Get 10% off on your first booking",
      icon: "fa-solid fa-tag"
    }
  ];

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
      navigate('/Train-list-01', {
        state: {
          from: leavingFrom,
          to: goingTo,
          date: journeyDate
        }
      });
    } else {
      alert('Please select all fields.');
    }
  };


  const stationOptions = stations.map((station) => ({
    value: station.id,
    label: station.name
  }));

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      border: '1px solid #e0e0e0',
      padding: '12px',
      minWidth: '200px',
      fontSize: '16px',
      fontWeight: 'bold',
      paddingLeft: '50px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.0)',
      '&:hover': {
        // borderColor: '#d20000',
        paddingLeft: '50px',
      }
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      minWidth: '250px',
      fontSize: '15px',
      overflow: 'hidden', // Ensures content respects border radius
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
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHighlightIndex((prev) => 
        prev === highlights.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>
        {`
          ${customStyles.swapIcon || ''}
          .search-component {
            background-color: ${backgroundColor};
            height: 100px;
            padding: 15px;
            background-size: cover;
            background-position: center;
          }

           @media (max-width: 1024px) {
            .search-component {
              height: 320px;
              padding: 15px;å
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
            height:60px;
            color: #333;
            border: none;
            border-radius: 12px;
            background: #ffffff !important;
            padding: 12px;
            font-size: 16px;
            transition: all 0.3s ease;
          }

          .form-control::placeholder {
            color: #999;
            font-size: 15px;
          }

          .form-control:focus {
            background: #ffffff !important;
            box-shadow: none;
            outline: none;
          }
  
          .btn.full-width {
            width: 100%;
            font-weight: 500;
            //  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Button shadow */
             border-radius:10px !important;
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
            top: 20%; 
            left: calc(34% - 10px); 
            z-index: 1;
          }

          .swap-button {
            background: none; 
            border: none; 
            color: #17181c; 
            cursor: pointer; 
            padding: 0; 
            padding: 0; 
            font-size: inherit; 
            padding: 0;
            font-size: inherit; 
          }

          .swap-button i {
            font-size: 1.2em; 
          }
            // .react-datepicker-wrapper .form-control:focus,
            // .react-datepicker-wrapper .form-control:active {
            //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Keep the box shadow on focus */
            //   outline: none; /* Optional: remove the default outline */
            // }
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

              // .react-calendar__tile:enabled:hover,
              // .react-calendar__tile:enabled:focus {
              //   background-color: #f8f8f8;
              // }

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
            // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Keep shadow on focus */
            outline: none;
          }
          .form-control:hover {
            border:1px solid #e0e0e0;
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

            .highlights-container {
              position: absolute;
              top: 100%;
              left: 15px;
              width: 100%;
              overflow: hidden;
              height: 24px;
              margin-top: 10px;
            }

            .highlight-item {
              display: flex;
              align-items: center;
              gap: 8px;
              color: #666;
              font-size: 13px;
              animation: slideIn 0.5s ease-out;
              white-space: nowrap;
              font-weight: bold;
            }

            .highlight-item i {
              color: #d20000;
            }

            @keyframes slideIn {
              from {
                transform: translateY(100%);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }

            .authorized-partner {
              display: flex;
              align-items: center;
              gap: 8px;
              color: #000075;
              font-size: 13px;
              position: absolute;
              right: 15px;
              top: 100%;
              margin-top: 10px;
            }

            .authorized-partner img {
              height: 20px;
              width: auto;
            }

            .search-wrap {
              background-color: #ffffff !important;
              padding: 14px;
              border-radius: 12px;
              box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
            }

            .field-container {
              position: relative;
              padding: 16px;
              border-bottom: 1px solid #e0e0e0;
            }

            .field-container:last-child {
              border-bottom: none;
            }

            .field-label {
              font-size: 12px;
              color: #666;
              margin-bottom: 4px;
            }

            .field-value {
              font-size: 16px;
              font-weight: bold;
              color: #000;
            }

            .form-control {
              font-weight: bold;
              color: #000;
              border: none;
              background: transparent;
              padding: 12px;
              font-size: 16px;
              border:1px solid #e0e0e0;
            }

            .select__dropdown-indicator {
              display: none;
            }

            .separator {
              height: 2px;
              background-color: #e0e0e0;
              margin: 8px 0;
            }

            .field-separator {
              width: 1px;
              height: 40px;
              background-color: #cccccc;
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
            }

            .input-icon {
              position: absolute;
              left: 16px;
              top: 45%;
              transform: translateY(-50%);
              z-index: 1;
              width: 20px;
              height: 20px;
            }

            .input-icon img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }

            // Move input text to the right
            .icon-select .select__control {
              padding-left: 50px !important;
            }

            .icon-input input {
              padding-left: 45px !important;
            }

            .field-value {
              text-align: right;
              padding-right: 15px;
            }

            .field-label {
              text-align: right;
              padding-right: 15px;
            }

            // Adjust the Select component text alignment
            .select__single-value,
            .select__placeholder {
              padding-right: 15px;
              margin-left: auto !important;
              margin-right: 8px !important;
            }

            // Custom styles for the select control
            .select__control {
              display: flex;
              justify-content: flex-end;
            }

            // Add padding to the value container
            .select__value-container {
              padding-right: 15px !important;
              justify-content: flex-end;
            }
              .new-wrap{
              background:#f4f5f5;
               padding: 14px;
              border-radius: 12px;
              box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
              
              }

          // Remove default focus styles for the calendar input
          .icon-input input:focus {
            background: #f4f5f5 !important;
            border-bottom: 2px solid #d20000;
            box-shadow: none;
            outline: none;
          }
        `}
      </style>
      <div className="search-component" style={{ height:"150px" }}>
        <div className="container">
          <div className="row justify-content-center align-items-center">

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              {/* <div className="dropdown-container">
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
              </div> */}
              <div className="swap-icon-container">
                <button
                  type="button"
                  className="btn swap-button"
                  onClick={handleSwapLocations}
                >
                  <i class="fa-solid fa-arrow-right-arrow-left"></i> {/* Swap icon */}
                </button>
              </div>

              <div className="position-relative new-wrap">
                <div className="row align-items-end gy-3 gx-md-3 gx-sm-2" >
                  <div className="col-xl-8 col-lg-7 col-md-12" >
                    <div className="row gy-3 gx-md-3 gx-sm-2">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                        <div className="form-group hdd-arrow mb-0 me-2 position-relative">
                          <div className="input-icon">
                            <img src={Entering} alt="From" style={{width:'30px'}}/>
                          </div>
                          {leavingLabel && (
                            <label className="text-light text-uppercase opacity-75">{leavingLabel}</label>
                          )}
                          <Select
                            className="icon-select"
                            id="fromStation"
                            options={stationOptions}
                            value={leavingFrom}
                            onChange={handleFromStationChange}
                            placeholder="From"
                            styles={customSelectStyles}
                            components={{
                              DropdownIndicator: () => null,
                              IndicatorSeparator: () => null
                            }}
                          />
                        </div>
                        {/* <div className="field-separator"></div> */}
                      </div>
                      <div className="highlights-container" style={{display:highlightsContainer}} >
                            <div className="highlight-item" key={currentHighlightIndex}>
                              <i className={highlights[currentHighlightIndex].icon}></i>
                              <span>{highlights[currentHighlightIndex].text}</span>
                            </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                        <div className="form-group hdd-arrow mb-0 ms-2 position-relative">
                          <div className="input-icon">
                            <img src={Leaving} alt="To" style={{width:'30px'}} />
                          </div>
                          {goingLabel && (
                            <label className="text-light text-uppercase opacity-75">{goingLabel}</label>
                          )}
                          <Select
                            className="icon-select"
                            id="toStation"
                            options={stationOptions}
                            value={goingTo}
                            onChange={handleToStationChange}
                            placeholder="To"
                            styles={customSelectStyles}
                            components={{
                              DropdownIndicator: () => null,
                              IndicatorSeparator: () => null
                            }}
                          />
                        </div>
                        <div className="field-separator"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-12">
                    <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                        <div className="form-group mb-0 position-relative">
                          <div className="input-icon">
                            <img src={Calendar1} alt="Calendar" />
                          </div>
                          {dateLabel && (
                            <label className="text-light text-uppercase opacity-75">{dateLabel}</label>
                          )}
                          <div className="calendar-wrapper icon-input">
                            <input
                              type="text"
                              readOnly
                              className="form-control"
                              value={journeyDate ? journeyDate.toLocaleDateString() : ''}
                              onClick={() => setCalendarOpen(!calendarOpen)}
                              placeholder="Date"
                            />
                            {calendarOpen && (
                              <div className="calendar-popup">
                               <Calendar
                                  onChange={(date) => {
                                    setJourneyDate(date);
                                    setCalendarOpen(false);
                                  }}
                                  value={journeyDate}
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
                <div className="authorized-partner" style={{ display:authorizedContainer }}>
                  <img src={IRCTC_Logo} alt="IRCTC Logo" />
                  <span style={{fontWeight:'bold'}}>IRCTC </span>
                  <span>Authorized Partner</span>
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
