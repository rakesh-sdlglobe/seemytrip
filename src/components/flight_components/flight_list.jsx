import React, { useState, useEffect } from 'react';
import FooterDark from '../footer-dark'; // Ensure this path is correct
import Header02 from '../header02'; // Ensure this path is correct
import FlightSearch from './flight_search'; // Ensure this path is correct
import FlightFilter from './flight_filter'; // Ensure this path is correct
import { useLocation } from 'react-router-dom';
import TopFilter from './top_filter';
import FlightSearchResult from './flight_search_result';

const FlightList = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState({
    ac: false,
    departureEarlyMorning: false,
    departureMorning: false,
    departureMidDay: false,
    departureNight: false,
    arrivalEarlyMorning: false,
    arrivalMorning: false,
    arrivalMidDay: false,
    arrivalNight: false,
    // Add other flight filters as needed
  });

  useEffect(() => {
    // Log location state and set search results
    const { flightResults } = location.state || {};
    console.log('Received flightResults:', flightResults);
    
    if (flightResults) {
      setSearchResults(flightResults);
    } else {
      console.log('No flight results found in location state.');
    }
  }, [location.state]);

  const handleSearchResults = (results) => {
    console.log('Received search results in FlightList:', results);
    setSearchResults(results);
  };

  const handleFilterChange = (e) => {
    const { id, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [id]: checked
    }));
  };

  const handleClearAll = () => {
    setFilters({
      ac: false,
      departureEarlyMorning: false,
      departureMorning: false,
      departureMidDay: false,
      departureNight: false,
      arrivalEarlyMorning: false,
      arrivalMorning: false,
      arrivalMidDay: false,
      arrivalNight: false,
      // Reset other filters as needed
    });
  };

  const filteredFlights = searchResults.filter(flight => {
    let isMatch = true;

    // Apply filters to flight data
    if (filters.ac) {
      isMatch = isMatch && flight.classes.some(seat => ['Economy', 'Business'].includes(seat.type)); // Example filter for classes
    }
    if (filters.departureEarlyMorning) {
      isMatch = isMatch && flight.departureTime >= '00:00' && flight.departureTime < '06:00';
    }
    if (filters.departureMorning) {
      isMatch = isMatch && flight.departureTime >= '06:00' && flight.departureTime < '12:00';
    }
    if (filters.departureMidDay) {
      isMatch = isMatch && flight.departureTime >= '12:00' && flight.departureTime < '18:00';
    }
    if (filters.departureNight) {
      isMatch = isMatch && flight.departureTime >= '18:00' && flight.departureTime < '24:00';
    }
    if (filters.arrivalEarlyMorning) {
      isMatch = isMatch && flight.arrivalTime >= '00:00' && flight.arrivalTime < '06:00';
    }
    if (filters.arrivalMorning) {
      isMatch = isMatch && flight.arrivalTime >= '06:00' && flight.arrivalTime < '12:00';
    }
    if (filters.arrivalMidDay) {
      isMatch = isMatch && flight.arrivalTime >= '12:00' && flight.arrivalTime < '18:00';
    }
    if (filters.arrivalNight) {
      isMatch = isMatch && flight.arrivalTime >= '18:00' && flight.arrivalTime < '24:00';
    }

    return isMatch;
  });

  console.log('Filtered Flights:', filteredFlights); // Debug log

  return (
    <div>
      {/* Preloader */}
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>

      {/* Main wrapper */}
      <div id="main-wrapper">
        {/* Top header */}
        <Header02 />
        <div className="clearfix" />

        {/* Flight Search Component */}
        <FlightSearch
          onSearchResults={handleSearchResults}
          backgroundColor="#cd2c22"
          height="130px"
          leavingLabel={null}
          goingLabel={null}
          dateLabel={null}
          buttonBackgroundColor="#cd2c22"
          buttonTextColor="#ffffff"
          dropdownHindden= "none"
          radioHindden = "none"
          ReturnLable = {null}
        />

        {/* Flight Filter and Results */}
        <section className="gray-simple">
          <div className="container">
            <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
              {/* Sidebar Filter Options */}
              <FlightFilter filters={filters} onFilterChange={handleFilterChange} handleClearAll={handleClearAll} />

              {/* Flight Search Results */}
              <div className="col-xl-9 col-lg-8 col-md-12">
                {/* <TopFilter /> */}
                <FlightSearchResult flightData={filteredFlights} filters={filters} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterDark />

        {/* Back to Top Button */}
        <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="fa-solid fa-sort-up" />
        </a>
      </div>
    </div>
  );
};

export default FlightList;