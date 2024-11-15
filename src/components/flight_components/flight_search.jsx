import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { airportData } from './model/airportData';
import { flightData } from './model/flightData';
import { seatData } from './model/seatData';
import { format, parse } from 'date-fns';

// Utility function to calculate duration
const calculateDuration = (departureTime, arrivalTime) => {
  const dep = new Date(`1970-01-01T${departureTime}:00Z`);
  const arr = new Date(`1970-01-01T${arrivalTime}:00Z`);
  if (arr < dep) {
    arr.setDate(arr.getDate() + 1); // Crosses midnight
  }
  const duration = new Date(arr - dep);
  return `${duration.getUTCHours()}h ${duration.getUTCMinutes()}m`;
};

const FlightSearch = ({
  onSearchResults = () => { },
  buttonText = 'Search',
  backgroundColor = '#f0f0f0',
  buttonBackgroundColor = "auto",
  buttonTextColor = "auto",
  height = 'auto',
  leavingLabel = 'Leaving From',
  goingLabel = 'Going To',
  dateLabel = 'Journey Date',
  dropdownHindden = 'auto',
  radioHindden = 'auto',
  ReturnLable = 'auto'
}) => {
  const [tripType, setTripType] = useState('one-way'); // State for radio buttons
  const [travellers, setTravellers] = useState(1); // State for number of travellers
  const [travelClass, setTravelClass] = useState('Economy'); // State for travel class

  const [returnDate, setReturnDate] = useState(null);

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
  };

  const findAirportByName = (name) => {
    return airportData.find(airport => airport.name === name);
  };

  const [fromAirport, setFromAirport] = useState(() => {
    const storedFromAirport = sessionStorage.getItem('fromAirport');
    return storedFromAirport ? { value: findAirportByName(storedFromAirport)?.id, label: storedFromAirport } : null;
  });
  const [showJourneyCalendar, setShowJourneyCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);
  
  const [toAirport, setToAirport] = useState(() => {
    const storedToAirport = sessionStorage.getItem('toAirport');
    return storedToAirport ? { value: findAirportByName(storedToAirport)?.id, label: storedToAirport } : null;
  });

  const [journeyDate, setJourneyDate] = useState(() => {
    const storedDate = sessionStorage.getItem('journeyDate');
    return storedDate ? parse(storedDate, 'dd/MM/yyyy', new Date()) : null;
  });

  useEffect(() => {
    if (fromAirport) sessionStorage.setItem('fromAirport', fromAirport.label);
    if (toAirport) sessionStorage.setItem('toAirport', toAirport.label);
    if (journeyDate) sessionStorage.setItem('journeyDate', format(journeyDate, 'dd/MM/yyyy'));
  }, [fromAirport, toAirport, journeyDate]);

  const handleFromAirportChange = (selectedOption) => setFromAirport(selectedOption);
  const handleToAirportChange = (selectedOption) => setToAirport(selectedOption);
  const handleJourneyDateChange = (date) => setJourneyDate(date);
  const handleSearch = () => {
    if (!fromAirport || !toAirport || !journeyDate) {
      alert("Please select both airports and journey date.");
      return;
    }
    const results = findFlightsBetweenAirports(fromAirport.value, toAirport.value, journeyDate);
    onSearchResults(results);
  };

  const handleTravellersChange = (event) => setTravellers(event.target.value);
  const handleTravelClassChange = (event) => setTravelClass(event.target.value);

  const findFlightsBetweenAirports = (fromAirportId, toAirportId, date) => {
    const fromAirportName = airportData.find(airport => airport.id === fromAirportId)?.name;
    const toAirportName = airportData.find(airport => airport.id === toAirportId)?.name;

    const filteredFlights = flightData.filter(flight => {
      return flight.stops.some(stop => stop.airportId === fromAirportId) &&
        flight.stops.some(stop => stop.airportId === toAirportId);
    });

    const resultsWithEconomyPrice = filteredFlights.map(flight => {
      const seatInfo = seatData.find(seat => seat.flightId === flight.flightId);
      const economyPrice = seatInfo?.classes.find(cls => cls.classType === 'Economy')?.price || 'Not Available';
      const formattedStops = flight.stops.map(stop => ({
        ...stop,
        airport: airportData.find(airport => airport.id === stop.airportId)?.name || 'Unknown'
      }));
      const duration = calculateDuration(flight.departureTime, flight.arrivalTime);

      return {
        ...flight,
        fromAirport: fromAirportName,
        toAirport: toAirportName,
        economyPrice: `₹${economyPrice}`,
        stops: formattedStops,
        departureTime: flight.departureTime,
        arrivalTime: flight.arrivalTime,
        duration: duration
      };
    });

    return resultsWithEconomyPrice;
  };

  const airportOptions = airportData.map(airport => ({ value: airport.id, label: airport.name }));
  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      border: 'none',
      borderRadius: '4px',
      padding: '8px'
    }),
    menu: (provided) => ({ ...provided, borderRadius: '4px' }),
    placeholder: (provided) => ({ ...provided, color: '#999' }),
    singleValue: (provided) => ({ ...provided, color: '#333' })
  };

  return (
    <>
      <style>
        {`
          .search-component {
            background-color: ${backgroundColor};
            height: ${height};
            padding: 20px;
          }

          @media (max-width: 768px) {
            .search-component {
              height: 330px;
              padding: 15px;
            }
          }

          @media (max-width: 576px) {
            .search-component {
              height: 450px;
              padding: 10px;
            }
          }

          .form-control {
            font-weight: bold;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border: none;
            padding: 12px;
            border-radius: 4px;
          }

          .btn.full-width {
            width: 100%;
            font-weight: 500;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border: none;
            padding: 12px;
          }
            .btn.full-width:hover {
    background-color: #cd2c22 !important;
}
          .radiobutton{
            display:  ${radioHindden}; 
            align-items: center;
            accent-color: #cd2c22;
          }
          .dropdown-container  {
            display:  ${dropdownHindden}; 
            align-items: center;
          }
            .calendar-popup {
              position: absolute;
              bottom: 40%;
              transform: translateY(-10px);
              z-index: 1000;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
              padding: 10px;
              background-color: white;
            }

            .form-control {
              width: 100%;
              max-width: 100%; /* Keeps width responsive without affecting other elements */
              padding: 12px;
            }
              .react-calendar__tile--active {
              background: #d20000;
              color: white;
            }
               .react-calendar__tile {
              border-radius: 8px; /* Makes each tile rounded */
              padding: 10px; /* Adds padding to tiles */
              margin: 4px; /* Spacing between tiles */
            }
          .form-control:focus {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Keep shadow on focus */
            outline: none;
          }
        `}
      </style>

      <div className="search-component">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="search-wrap position-relative">
                <div className="row align-items-end gy-3 gx-md-1 gx-sm-1">
                  {/* Radio Buttons for One Way and Round Trip */}
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="d-flex justify-content-between">
                      <div className='radiobutton'>
                        <label>
                          <input
                            type="radio"
                            value="one-way"
                            checked={tripType === 'one-way'}
                            onChange={() => setTripType('one-way')}
                          /> One Way
                        </label>
                        &nbsp;&nbsp;
                        <label>
                          <input
                            type="radio"
                            value="round-trip"
                            checked={tripType === 'round-trip'}
                            onChange={() => setTripType('round-trip')}
                          /> Round Trip
                        </label>
                      </div>
                      <div className='dropdown-container'>
                        <select value={travellers} onChange={handleTravellersChange} className="form-select">
                          <option value={1}>Adults(12Y+)</option>
                          <option value={2}>Children(2Y-12Y)</option>
                          <option value={3}>Infants(below 2y)</option>
                          {/* Add more options as needed */}
                        </select>
                        &nbsp;&nbsp;
                        <select value={travelClass} onChange={handleTravelClassChange} className="form-select">
                          <option value="Economy">Economy</option>
                          <option value="Business">Business</option>
                          <option value="First">First Class</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Select Fields */}
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <label>{leavingLabel}</label>
                    <Select
                      value={fromAirport}
                      onChange={handleFromAirportChange}
                      options={airportOptions}
                      styles={customSelectStyles}
                      placeholder="From"
                    />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <label>{goingLabel}</label>
                    <Select
                      value={toAirport}
                      onChange={handleToAirportChange}
                      options={airportOptions}
                      styles={customSelectStyles}
                      placeholder="To"
                    />
                  </div>

                  {/* Date Pickers */}
                  <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                    <label>{dateLabel}</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Journey Date"
                      value={journeyDate ? format(journeyDate, 'dd/MM/yyyy') : ''}
                      readOnly
                      onClick={() => setShowJourneyCalendar(!showJourneyCalendar)}
                    />
                    {showJourneyCalendar && (
                      <Calendar
                        onChange={(date) => {
                          handleJourneyDateChange(date);
                          setShowJourneyCalendar(false);
                        }}
                        value={journeyDate}
                        className="calendar-popup"
                      />
                    )}
                  </div>


                                  {tripType === 'round-trip' && (
                  <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                    <label>{ReturnLable}</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Return Date"
                      value={returnDate ? format(returnDate, 'dd/MM/yyyy') : ''}
                      readOnly
                      onClick={() => setShowReturnCalendar(!showReturnCalendar)}
                    />
                    {showReturnCalendar && (
                      <Calendar
                        onChange={(date) => {
                          handleReturnDateChange(date);
                          setShowReturnCalendar(false);
                        }}
                        value={returnDate}
                        className="calendar-popup"
                      />
                    )}
                  </div>
                )}


                  {/* Search Button */}
                  <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                    <button
                      className="btn btn-danger full-width"
                      onClick={handleSearch}
                      style={{
                        backgroundColor: buttonBackgroundColor,
                        color: buttonTextColor,
                      }}
                    >
                      {buttonText}
                    </button>
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

export default FlightSearch;
