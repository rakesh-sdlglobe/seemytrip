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
        // If arrival time is less than departure time, it means the flight crosses midnight
        arr.setDate(arr.getDate() + 1);
    }
    const duration = new Date(arr - dep);
    return `${duration.getUTCHours()}h ${duration.getUTCMinutes()}m`;
};

const FlightSearch = ({
  onSearchResults = () => {},
  buttonText = 'Search',
  backgroundColor = '#f0f0f0',
  buttonBackgroundColor = "auto",
  buttonTextColor = "auto",
  height = 'auto',
  leavingLabel = 'Leaving From',
  goingLabel = 'Going To',
  dateLabel = 'Journey Date'
}) => {
  // Helper function to find airport by name
  const findAirportByName = (name) => {
    return airportData.find(airport => airport.name === name);
  };

  // Initialize state from session storage
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
    // Save to session storage whenever state changes
    if (fromAirport) {
      sessionStorage.setItem('fromAirport', fromAirport.label);
    }
    if (toAirport) {
      sessionStorage.setItem('toAirport', toAirport.label);
    }
    if (journeyDate) {
      sessionStorage.setItem('journeyDate', format(journeyDate, 'dd/MM/yyyy'));
    }
  }, [fromAirport, toAirport, journeyDate]);

  const handleFromAirportChange = (selectedOption) => {
    setFromAirport(selectedOption);
  };

  const handleToAirportChange = (selectedOption) => {
    setToAirport(selectedOption);
  };

  const handleJourneyDateChange = (date) => {
    setJourneyDate(date);
  };

  const handleSearch = () => {
    if (!fromAirport || !toAirport || !journeyDate) {
      alert("Please select both airports and journey date.");
      return;
    }

    const results = findFlightsBetweenAirports(fromAirport.value, toAirport.value, journeyDate);
    onSearchResults(results);
  };

  const findFlightsBetweenAirports = (fromAirportId, toAirportId, date) => {
    const fromAirportName = airportData.find(airport => airport.id === fromAirportId)?.name;
    const toAirportName = airportData.find(airport => airport.id === toAirportId)?.name;

    // Filter flights based on selected airports and date
    const filteredFlights = flightData.filter(flight => {
      return flight.stops.some(stop => stop.airportId === fromAirportId) &&
             flight.stops.some(stop => stop.airportId === toAirportId);
    });

    // Map filtered flights to include seat availability, formatted stops, and duration
    const resultsWithSeats = filteredFlights.map(flight => {
      const seats = seatData.find(seat => seat.flightId === flight.flightId)?.classes || [];
      const formattedSeats = seats.map(seat => ({
        type: seat.classType,
        price: `₹${seat.price}`,
        status: seat.status,
        availability: `${seat.availability}%`
      }));

      // Format stops with airport names
      const formattedStops = flight.stops.map(stop => ({
        ...stop,
        airport: airportData.find(airport => airport.id === stop.airportId)?.name || 'Unknown'
      }));

      // Calculate and format duration
      const duration = calculateDuration(flight.departureTime, flight.arrivalTime);

      return {
        ...flight,
        fromAirport: fromAirportName,
        toAirport: toAirportName,
        seats: formattedSeats,
        stops: formattedStops,
        departureTime: flight.departureTime,
        arrivalTime: flight.arrivalTime,
        duration: duration // Add duration to results
      };
    });

    return resultsWithSeats;
  };

  const airportOptions = airportData.map(airport => ({
    value: airport.id,
    label: airport.name
  }));

  // Custom styles for react-select
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

          @media (max-width: 768px) {
            .search-component {
              height: 340px;
              padding: 15px;
            }
          }

          @media (max-width: 576px) {
            .search-component {
              height: 320px;
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
        `}
      </style>
      <div className="search-component">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
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
                            id="fromAirport"
                            options={airportOptions}
                            value={fromAirport}
                            onChange={handleFromAirportChange}
                            placeholder="Select From Airport"
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
                            id="toAirport"
                            options={airportOptions}
                            value={toAirport}
                            onChange={handleToAirportChange}
                            placeholder="Select To Airport"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightSearch;
