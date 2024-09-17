import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
  radioHindden ='auto',
  ReturnLable = 'auto'
}) => {
  const [tripType, setTripType] = useState('one-way'); // State for radio buttons
  const [travellers, setTravellers] = useState(1); // State for number of travellers
  const [travelClass, setTravelClass] = useState('Economy'); // State for travel clas

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
    control: (provided) => ({ ...provided, boxShadow: 'none', borderRadius: '4px', backgroundColor: '#fff', padding: '12px' }),
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
          }

          .btn.full-width {
            width: 100%;
            font-weight: 500;
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
                          <option value={1}>Adult(12Y+)</option>
                          <option value={2}>Children(2Y-12Y)</option>
                          <option value={3}>Infants(below 2y)</option>
                          {/* Add more options as needed */}
                        </select>
                        &nbsp;&nbsp;
                        <select value={travelClass} onChange={handleTravelClassChange} className="form-select">
                          <option value="Economy">Economy</option>
                          <option value="Business">Business</option>
                          <option value="First Class">First Class</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                      {/* From Airport Select */}
                      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 position-relative">
                        <div className="form-group hdd-arrow mb-0">
                          {leavingLabel && (
                            <label className="text-light text-uppercase opacity-75">{leavingLabel}</label>
                          )}
                          <Select
                            id="fromAirport"
                            options={airportOptions}
                            value={fromAirport}
                            onChange={handleFromAirportChange}
                            placeholder="Select From Airport"
                            styles={customSelectStyles}
                          />
                        </div>
                      </div>

                      {/* To Airport Select */}
                      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <div className="form-group hdd-arrow mb-0">
                          {goingLabel && (
                            <label className="text-light text-uppercase opacity-75">{goingLabel}</label>
                          )}
                          <Select
                            id="toAirport"
                            options={airportOptions}
                            value={toAirport}
                            onChange={handleToAirportChange}
                            placeholder="Select To Airport"
                            styles={customSelectStyles}
                          />
                        </div>
                      </div>

                      {/* Journey Date Picker */}
                      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                        <div className="form-group mb-0">
                          {dateLabel && (
                            <label className="text-light text-uppercase opacity-75">{dateLabel}</label>
                          )}
                          <DatePicker
                            selected={journeyDate}
                            onChange={handleJourneyDateChange}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Journey Date"
                            className="form-control fw-bold"
                          />
                        </div>
                      </div>

                      {/* Return Date Picker */}
                      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                        <div className="form-group mb-0">
                          <label className="text-light text-uppercase opacity-75">{ReturnLable}</label>
                          <DatePicker
                            selected={returnDate}
                            onChange={handleReturnDateChange}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Return Date"
                            className="form-control fw-bold"
                          />
                        </div>
                      </div>

                      {/* Search Button */}
                      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                        <div className="form-group mb-0">
                          <button
                            className="btn full-width text-uppercase"
                            style={{
                              backgroundColor: buttonBackgroundColor,
                              color: buttonTextColor,
                            }}
                            onClick={handleSearch}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightSearch;
