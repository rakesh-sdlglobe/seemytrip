// components/FlightList01.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header02 from '../header02';
import Footer from '../footer';
import SerchComponent from './search_component';
import FilterSearchPage from './filter_search_page';
import TopFilter from './top_filter';
import TrainSearchResultList from './train_search-result';
import trainData from './train_data'; // Adjust the import path as needed
import { setFilter, clearFilters } from '../../store/Actions/filterActions';

const FlightList01 = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  // Handle filter change
  const handleFilterChange = (e) => {
    const { id, checked } = e.target;
    dispatch(setFilter(id, checked));
  };

  // Clear all filters
  const handleClearAll = () => {
    dispatch(clearFilters());
  };

  // Filter train data based on filters
  const filteredTrains = trainData.filter(train => {
    let isMatch = true;

    const departureHour = parseInt(train.departure.split(':')[0], 10);
    const arrivalHour = parseInt(train.arrival.split(':')[0], 10);

    if (filters.ac) {
      isMatch = isMatch && train.classes.some(cls => ['1A', '2A', '3A'].includes(cls.type));
    }
    if (filters.departureEarlyMorning) {
      isMatch = isMatch && departureHour >= 0 && departureHour < 6;
    }
    if (filters.departureMorning) {
      isMatch = isMatch && departureHour >= 6 && departureHour < 12;
    }
    if (filters.departureMidDay) {
      isMatch = isMatch && departureHour >= 12 && departureHour < 18;
    }
    if (filters.departureNight) {
      isMatch = isMatch && departureHour >= 18 && departureHour < 24;
    }
    if (filters.arrivalEarlyMorning) {
      isMatch = isMatch && arrivalHour >= 0 && arrivalHour < 6;
    }
    if (filters.arrivalMorning) {
      isMatch = isMatch && arrivalHour >= 6 && arrivalHour < 12;
    }
    if (filters.arrivalMidDay) {
      isMatch = isMatch && arrivalHour >= 12 && arrivalHour < 18;
    }
    if (filters.arrivalNight) {
      isMatch = isMatch && arrivalHour >= 18 && arrivalHour < 24;
    }
    if (filters['SL']) {
      isMatch = isMatch && train.classes.some(cls => ['SL'].includes(cls.type));
    }
    if (filters['3A']) {
      isMatch = isMatch && train.classes.some(cls => ['3A'].includes(cls.type));
    }
    if (filters['2A']) {
      isMatch = isMatch && train.classes.some(cls => ['2A'].includes(cls.type));
    }
    if (filters['1A']) {
      isMatch = isMatch && train.classes.some(cls => ['1A'].includes(cls.type));
    }

    return isMatch;
  });

  return (
    <div>
      {/* Preloader */}
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      <div id="main-wrapper">
        <Header02 />
        <div className="clearfix" />
        <SerchComponent />
        <section className="gray-simple">
          <div className="container">
            <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
              <FilterSearchPage filters={filters} onFilterChange={handleFilterChange} handleClearAll={handleClearAll} />
              <div className="col-xl-9 col-lg-8 col-md-12">
                <TopFilter />
                <TrainSearchResultList filters={filters} trainData={filteredTrains} />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default FlightList01;
