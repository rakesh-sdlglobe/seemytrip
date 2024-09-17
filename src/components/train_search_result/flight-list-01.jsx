// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Header02 from '../header02';
// import Footer from '../footer';
// import SerchComponent from './search_component';
// import FilterSearchPage from './filter_search_page';
// import TopFilter from './top_filter';
// import TrainSearchResultList from './train_search-result';
// import  trainData  from './train_data'; // Adjust the import path as needed
// import { setFilter, clearFilters } from '../../store/Actions/filterActions';

// const FlightList01 = () => {
//   const [trains, setTrains] = useState([]);
//   const dispatch = useDispatch();
//   const filters = useSelector(state => state.filters);
//   const [searchParams, setSearchParams] = useState({ leavingFrom: '', goingTo: '' });

//   // Fetch train data based on search parameters
//   useEffect(() => {
//     console.log(trainData);

//     const fetchTrains = async () => {
//       try {
//         const data = await trainData(searchParams.leavingFrom, searchParams.goingTo);
//         console.log(data);
//         setTrains(data);
//       } catch (error) {
//         console.error('Error fetching train data:', error);
//       }
//     };

//     fetchTrains();
//   }, [searchParams]); // Dependency array, fetch data when searchParams change

//   // Handle filter change
//   const handleFilterChange = (e) => {
//     const { id, checked } = e.target;
//     dispatch(setFilter(id, checked));
//   };

//   // Clear all filters
//   const handleClearAll = () => {
//     dispatch(clearFilters());
//   };

//   // Filter train data based on filters
//   const filteredTrains = trains.filter(train => {
//     let isMatch = true;

//     const departureHour = parseInt(train.departure.split(':')[0], 10);
//     const arrivalHour = parseInt(train.arrival.split(':')[0], 10);

//     if (filters.ac) {
//       isMatch = isMatch && train.classes.some(cls => ['1A', '2A', '3A'].includes(cls.type));
//     }
//     if (filters.departureEarlyMorning) {
//       isMatch = isMatch && departureHour >= 0 && departureHour < 6;
//     }
//     if (filters.departureMorning) {
//       isMatch = isMatch && departureHour >= 6 && departureHour < 12;
//     }
//     if (filters.departureMidDay) {
//       isMatch = isMatch && departureHour >= 12 && departureHour < 18;
//     }
//     if (filters.departureNight) {
//       isMatch = isMatch && departureHour >= 18 && departureHour < 24;
//     }
//     if (filters.arrivalEarlyMorning) {
//       isMatch = isMatch && arrivalHour >= 0 && arrivalHour < 6;
//     }
//     if (filters.arrivalMorning) {
//       isMatch = isMatch && arrivalHour >= 6 && arrivalHour < 12;
//     }
//     if (filters.arrivalMidDay) {
//       isMatch = isMatch && arrivalHour >= 12 && arrivalHour < 18;
//     }
//     if (filters.arrivalNight) {
//       isMatch = isMatch && arrivalHour >= 18 && arrivalHour < 24;
//     }
//     if (filters['SL']) {
//       isMatch = isMatch && train.classes.some(cls => ['SL'].includes(cls.type));
//     }
//     if (filters['3A']) {
//       isMatch = isMatch && train.classes.some(cls => ['3A'].includes(cls.type));
//     }
//     if (filters['2A']) {
//       isMatch = isMatch && train.classes.some(cls => ['2A'].includes(cls.type));
//     }
//     if (filters['1A']) {
//       isMatch = isMatch && train.classes.some(cls => ['1A'].includes(cls.type));
//     }

//     return isMatch;
//   });

//   return (
//     <div>
//       {/* Preloader */}
//       <div id="preloader">
//         <div className="preloader"><span /><span /></div>
//       </div>
//       <div id="main-wrapper">
//         <Header02 />
//         <div className="clearfix" />
//         <SerchComponent onSearch={setSearchParams} />
//         <section className="gray-simple">
//           <div className="container">
//             <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
//               <FilterSearchPage filters={filters} onFilterChange={handleFilterChange} handleClearAll={handleClearAll} />
//               <div className="col-xl-9 col-lg-8 col-md-12">
//                 <TopFilter />
//                 <TrainSearchResultList filters={filters} trainData={filteredTrains} />
//               </div>
//             </div>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default FlightList01;


// FlightList01.js
import React, { useState } from 'react';
import Header02 from '../header02'; // Ensure this path is correct
import Footer from '../footer'; // Ensure this path is correct
import SearchComponent from './search_component'; // Ensure this path is correct
import FilterSearchPage from './filter_search_page'; // Ensure this path is correct
import TopFilter from './top_filter'; // Ensure this path is correct
import TrainSearchResultList from './train_search-result'; // Ensure this path is correctimport { useLocation } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const FlightList01 = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState(location.state?.results || []);
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
    SL: false,
    '3A': false,
    '2A': false,
    '1A': false,
  });

  const handleSearchResults = (results) => {
    console.log('Received search results in FlightList01:', results);
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
      SL: false,
      '3A': false,
      '2A': false,
      '1A': false,
    });
  };

  const filteredTrains = searchResults.filter(train => {
    let isMatch = true;

    if (filters.ac) {
      isMatch = isMatch && train.classes.some(seat => ['1A', '2A', '3A'].includes(seat.type));
    }
    // Assuming other filters don’t rely on departure and arrival times
    if (filters.SL) {
      isMatch = isMatch && train.classes.some(seat => ['SL'].includes(seat.type));
    }
    if (filters['3A']) {
      isMatch = isMatch && train.classes.some(seat => ['3A'].includes(seat.type));
    }
    if (filters['2A']) {
      isMatch = isMatch && train.classes.some(seat => ['2A'].includes(seat.type));
    }
    if (filters['1A']) {
      isMatch = isMatch && train.classes.some(seat => ['1A'].includes(seat.type));
    }

    return isMatch;
  });

  console.log('Filtered Trains:', filteredTrains); // Debug log

  return (
    <div>
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      <div id="main-wrapper">
        <Header02 />
        <div className="clearfix" />
        <SearchComponent onSearchResults={handleSearchResults} backgroundColor="#cd2c22" height="160px" leavingLabel={null}      // Custom label for 'Leaving From'
          goingLabel={null}          // Custom label for 'Going To'
          dateLabel={null} 
          buttonBackgroundColor="#ffffff"
           buttonTextColor="#cd2c22"
          />
        <section className="gray-simple">
          <div className="container">
            <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
              <FilterSearchPage filters={filters} onFilterChange={handleFilterChange} handleClearAll={handleClearAll} />
              <div className="col-xl-9 col-lg-8 col-md-12">
                {/* <TopFilter /> */}
                <TrainSearchResultList filters={filters} trainData={filteredTrains} />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default FlightList01;
