import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Skeleton from './FilterSkeleton';

const BUS_TYPE_OPTIONS = [
  { id: 'ac', label: 'AC' },
  { id: 'nonac', label: 'Non-AC' },
  { id: 'sleeper', label: 'Sleeper' },
  { id: 'semiSleeper', label: 'Semi-Sleeper' },
];

// Time block options for departure and arrival
const TIME_BLOCKS = [
  { id: 'earlyMorning', label: 'Early Morning', range: '00:00 - 06:00', start: 0, end: 6 },
  { id: 'morning', label: 'Morning', range: '06:00 - 12:00', start: 6, end: 12 },
  { id: 'afternoon', label: 'Afternoon', range: '12:00 - 18:00', start: 12, end: 18 },
  { id: 'evening', label: 'Evening', range: '18:00 - 24:00', start: 18, end: 24 },
];

const BusFilterPage = ({ filters, onFilterChange, onClear, minPrice, maxPrice, loading = false, busResults = [] }) => {
  const [pickupPoints, setPickupPoints] = useState([]);
  const [droppingPoints, setDroppingPoints] = useState([]);
  const [showAllPickup, setShowAllPickup] = useState(false);
  const [showAllDropping, setShowAllDropping] = useState(false);
  const [activeFilter, setActiveFilter] = useState('busType');

  // Extract unique pickup and dropping points from bus results
  useEffect(() => {
    if (busResults && busResults.length > 0) {
      const pickupSet = new Set();
      const droppingSet = new Set();

      busResults.forEach(bus => {
        // Extract pickup points
        if (bus.BoardingPointsDetails && Array.isArray(bus.BoardingPointsDetails)) {
          bus.BoardingPointsDetails.forEach(point => {
            if (point.CityPointName) {
              pickupSet.add(point.CityPointName);
            }
          });
        }

        // Extract dropping points
        if (bus.DroppingPointsDetails && Array.isArray(bus.DroppingPointsDetails)) {
          bus.DroppingPointsDetails.forEach(point => {
            if (point.CityPointName) {
              droppingSet.add(point.CityPointName);
            }
          });
        }
      });

      setPickupPoints(Array.from(pickupSet).sort());
      setDroppingPoints(Array.from(droppingSet).sort());
    }
  }, [busResults]);

  // Show skeleton if loading
  if (loading) {
    return <Skeleton />;
  }

  // Handle bus type (multi-select)
  const handleBusType = (id) => {
    const newTypes = filters.busTypes.includes(id)
      ? filters.busTypes.filter((t) => t !== id)
      : [...filters.busTypes, id];
    onFilterChange({ busTypes: newTypes });
  };

  // Handler for checkbox change
  const handleCheckbox = (e) => {
    onFilterChange({ [e.target.id]: e.target.checked });
  };

  // Handler for departure time blocks
  const handleDepartureTime = (id) => {
    const newDepartureTimes = filters.departureTimes.includes(id)
      ? filters.departureTimes.filter((t) => t !== id)
      : [...filters.departureTimes, id];
    onFilterChange({ departureTimes: newDepartureTimes });
  };

  // Handler for arrival time blocks
  const handleArrivalTime = (id) => {
    const newArrivalTimes = filters.arrivalTimes.includes(id)
      ? filters.arrivalTimes.filter((t) => t !== id)
      : [...filters.arrivalTimes, id];
    onFilterChange({ arrivalTimes: newArrivalTimes });
  };

  // Handler for pickup points
  const handlePickupPoint = (point) => {
    const newPickupPoints = filters.pickupPoints?.includes(point)
      ? filters.pickupPoints.filter((p) => p !== point)
      : [...(filters.pickupPoints || []), point];
    onFilterChange({ pickupPoints: newPickupPoints });
  };

  // Handler for dropping points
  const handleDroppingPoint = (point) => {
    const newDroppingPoints = filters.droppingPoints?.includes(point)
      ? filters.droppingPoints.filter((p) => p !== point)
      : [...(filters.droppingPoints || []), point];
    onFilterChange({ droppingPoints: newDroppingPoints });
  };

  // Handler for price sort
  const handlePriceSort = (sortType) => {
    onFilterChange({ priceSort: sortType });
  };

  // Filter options with icons and labels
  const filterOptions = [
    { id: 'busType', label: 'Bus Type', icon: 'fas fa-bus' },
    { id: 'pickupPoints', label: 'Pickup Points', icon: 'fas fa-map-marker-alt' },
    { id: 'droppingPoints', label: 'Dropping Points', icon: 'fas fa-map-marker' },
    { id: 'departureTime', label: 'Departure Time', icon: 'fas fa-clock' },
    { id: 'arrivalTime', label: 'Arrival Time', icon: 'fas fa-clock' },
    { id: 'priceSort', label: 'Price Sort', icon: 'fas fa-sort' },
    { id: 'popularFilters', label: 'Popular Filters', icon: 'fas fa-star' },
    { id: 'customerRatings', label: 'Customer Ratings', icon: 'fas fa-star' },
  ];

  // Render filter content based on active filter
  const renderFilterContent = () => {
    switch (activeFilter) {
      case 'busType':
        return (
          <div className="filter-content">
            <div className="filter-options">
              {BUS_TYPE_OPTIONS.map(opt => (
                <div className="filter-option" key={opt.id}>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id={`mobile_${opt.id}`}
                    checked={filters.busTypes.includes(opt.id)}
                    onChange={() => handleBusType(opt.id)}
                  />
                  <label className="btn btn-sm btn-outline-secondary rounded-pill" htmlFor={`mobile_${opt.id}`}>
                    {opt.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'pickupPoints':
        return (
          <div className="filter-content">
            {pickupPoints.length > 0 ? (
              <div className="filter-options">
                {(showAllPickup ? pickupPoints : pickupPoints.slice(0, 6)).map(point => (
                  <div className="filter-option" key={point}>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={`mobile_pickup_${point}`}
                      checked={filters.pickupPoints?.includes(point) || false}
                      onChange={() => handlePickupPoint(point)}
                    />
                    <label className="btn btn-sm btn-outline-secondary rounded-pill" htmlFor={`mobile_pickup_${point}`}>
                      {point}
                    </label>
                  </div>
                ))}
                {pickupPoints.length > 6 && (
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-sm btn-link text-primary"
                      onClick={() => setShowAllPickup(!showAllPickup)}
                    >
                      {showAllPickup ? 'Show Less' : `Show More (${pickupPoints.length - 6} more)`}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-muted py-3">No pickup points available</div>
            )}
          </div>
        );

      case 'droppingPoints':
        return (
          <div className="filter-content">
            {droppingPoints.length > 0 ? (
              <div className="filter-options">
                {(showAllDropping ? droppingPoints : droppingPoints.slice(0, 6)).map(point => (
                  <div className="filter-option" key={point}>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={`mobile_dropping_${point}`}
                      checked={filters.droppingPoints?.includes(point) || false}
                      onChange={() => handleDroppingPoint(point)}
                    />
                    <label className="btn btn-sm btn-outline-secondary rounded-pill" htmlFor={`mobile_dropping_${point}`}>
                      {point}
                    </label>
                  </div>
                ))}
                {droppingPoints.length > 6 && (
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-sm btn-link text-primary"
                      onClick={() => setShowAllDropping(!showAllDropping)}
                    >
                      {showAllDropping ? 'Show Less' : `Show More (${droppingPoints.length - 6} more)`}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-muted py-3">No dropping points available</div>
            )}
          </div>
        );

      case 'departureTime':
        return (
          <div className="filter-content">
            <div className="filter-options">
              {TIME_BLOCKS.map(block => (
                <div className="filter-option" key={block.id}>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id={`mobile_departure_${block.id}`}
                    checked={filters.departureTimes.includes(block.id)}
                    onChange={() => handleDepartureTime(block.id)}
                  />
                  <label className="btn btn-sm btn-outline-secondary rounded-pill" htmlFor={`mobile_departure_${block.id}`}>
                    {block.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'arrivalTime':
        return (
          <div className="filter-content">
            <div className="filter-options">
              {TIME_BLOCKS.map(block => (
                <div className="filter-option" key={block.id}>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id={`mobile_arrival_${block.id}`}
                    checked={filters.arrivalTimes.includes(block.id)}
                    onChange={() => handleArrivalTime(block.id)}
                  />
                  <label className="btn btn-sm btn-outline-secondary rounded-pill" htmlFor={`mobile_arrival_${block.id}`}>
                    {block.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'priceSort':
        return (
          <div className="filter-content">
            <div className="filter-options">
              <div className="filter-option">
                <input
                  type="radio"
                  className="btn-check"
                  id="mobile_price_low_high"
                  name="mobile_price_sort"
                  checked={filters.priceSort === 'lowToHigh'}
                  onChange={() => handlePriceSort('lowToHigh')}
                />
                <label className="btn btn-sm btn-outline-secondary rounded-pill" htmlFor="mobile_price_low_high">
                  Low to High
                </label>
              </div>
              <div className="filter-option">
                <input
                  type="radio"
                  className="btn-check"
                  id="mobile_price_high_low"
                  name="mobile_price_sort"
                  checked={filters.priceSort === 'highToLow'}
                  onChange={() => handlePriceSort('highToLow')}
                />
                <label className="btn btn-sm btn-outline-secondary rounded-pill" htmlFor="mobile_price_high_low">
                  High to Low
                </label>
              </div>
            </div>
          </div>
        );

      case 'popularFilters':
        return (
          <div className="filter-content">
            <div className="filter-options">
              <div className="filter-option">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="mobile_wifi"
                  checked={filters.wifi}
                  onChange={handleCheckbox}
                />
                <label className="btn btn-sm btn-outline-secondary rounded-pill" htmlFor="mobile_wifi">
                  Wi-Fi Available
                </label>
              </div>
              <div className="filter-option">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="mobile_charging"
                  checked={filters.charging}
                  onChange={handleCheckbox}
                />
                <label className="btn btn-sm btn-outline-secondary rounded-pill" htmlFor="mobile_charging">
                  Charging Points
                </label>
              </div>
              <div className="filter-option">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="mobile_snacks"
                  checked={filters.snacks}
                  onChange={handleCheckbox}
                />
                <label className="btn btn-sm btn-outline-secondary rounded-pill" htmlFor="mobile_snacks">
                  Snacks Included
                </label>
              </div>
            </div>
          </div>
        );

      case 'customerRatings':
        return (
          <div className="filter-content">
            <div className="filter-options">
              <div className="filter-option">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="mobile_rating45"
                  checked={filters.rating45}
                  onChange={handleCheckbox}
                />
                <label className="btn btn-sm btn-outline-secondary rounded-pill" htmlFor="mobile_rating45">
                  4.5+
                </label>
              </div>
              <div className="filter-option">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="mobile_rating4"
                  checked={filters.rating4}
                  onChange={handleCheckbox}
                />
                <label className="btn btn-sm btn-outline-secondary rounded-pill" htmlFor="mobile_rating4">
                  4+
                </label>
              </div>
              <div className="filter-option">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="mobile_rating35"
                  checked={filters.rating35}
                  onChange={handleCheckbox}
                />
                <label className="btn btn-sm btn-outline-secondary rounded-pill" htmlFor="mobile_rating35">
                  3.5+
                </label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Horizontal Filter Bar */}
      <div className="d-lg-none">
        <div className="horizontal-filter-container">
          <div className="filter-tabs-scroll">
            <div className="filter-tabs-container">
              {filterOptions.map(option => (
                <div
                  key={option.id}
                  className={`filter-tab ${activeFilter === option.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(option.id)}
                >
                  <i className={option.icon}></i>
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="filter-content-container">
            {renderFilterContent()}
          </div>
        </div>
      </div>

      {/* Desktop Sidebar Filters */}
      <div className="col-xl-3 col-lg-4 col-md-12 d-none d-lg-block">
        <div className="filter-searchBar bg-white rounded-3">
          <div className="filter-searchBar-head border-bottom">
            <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
              <div className="searchBar-headerfirst">
                <h6 className="fw-bold fs-5 m-0">Filters</h6>
                <p className="text-md text-muted m-0">Showing Buses</p>
              </div>
              <div className="searchBar-headerlast text-end">
                <Link to="#" className="text-md fw-medium text-primary active" onClick={onClear}>Clear All</Link>
              </div>
            </div>
          </div>
          <div className="filter-searchBar-body">
            {/* Bus Types */}
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Bus Type</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                  {BUS_TYPE_OPTIONS.map(opt => (
                    <li className="col-6" key={opt.id}>
                      <input
                        type="checkbox"
                        className="btn-check"
                        id={opt.id}
                        checked={filters.busTypes.includes(opt.id)}
                        onChange={() => handleBusType(opt.id)}
                      />
                      <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor={opt.id}>{opt.label}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pickup Points */}
            {pickupPoints.length > 0 && (
              <div className="searchBar-single px-3 py-3 border-bottom">
                <div className="searchBar-single-title d-flex mb-3 justify-content-between align-items-center">
                  <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Pickup Points</h6>
                  {filters.pickupPoints && filters.pickupPoints.length > 0 && (
                    <button 
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => onFilterChange({ pickupPoints: [] })}
                      style={{ fontSize: '0.75rem' }}
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="searchBar-single-wrap">
                  <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                    {(showAllPickup ? pickupPoints : pickupPoints.slice(0, 4)).map(point => (
                      <li className="col-12" key={point}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`pickup_${point}`}
                            checked={filters.pickupPoints?.includes(point) || false}
                            onChange={() => handlePickupPoint(point)}
                          />
                          <label className="form-check-label" htmlFor={`pickup_${point}`}>
                            {point}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {pickupPoints.length > 4 && (
                    <div className="text-center mt-2">
                      <button
                        className="btn btn-sm btn-link text-primary p-0"
                        onClick={() => setShowAllPickup(!showAllPickup)}
                        style={{ fontSize: '0.8rem' }}
                      >
                        {showAllPickup ? 'Show Less' : `Show More (${pickupPoints.length - 4} more)`}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Dropping Points */}
            {droppingPoints.length > 0 && (
              <div className="searchBar-single px-3 py-3 border-bottom">
                <div className="searchBar-single-title d-flex mb-3 justify-content-between align-items-center">
                  <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Dropping Points</h6>
                  {filters.droppingPoints && filters.droppingPoints.length > 0 && (
                    <button 
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => onFilterChange({ droppingPoints: [] })}
                      style={{ fontSize: '0.75rem' }}
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="searchBar-single-wrap">
                  <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                    {(showAllDropping ? droppingPoints : droppingPoints.slice(0, 4)).map(point => (
                      <li className="col-12" key={point}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`dropping_${point}`}
                            checked={filters.droppingPoints?.includes(point) || false}
                            onChange={() => handleDroppingPoint(point)}
                          />
                          <label className="form-check-label" htmlFor={`dropping_${point}`}>
                            {point}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {droppingPoints.length > 4 && (
                    <div className="text-center mt-2">
                      <button
                        className="btn btn-sm btn-link text-primary p-0"
                        onClick={() => setShowAllDropping(!showAllDropping)}
                        style={{ fontSize: '0.8rem' }}
                      >
                        {showAllDropping ? 'Show Less' : `Show More (${droppingPoints.length - 4} more)`}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Departure Time */}
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Departure Time</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                  {TIME_BLOCKS.map(block => (
                    <li className="col-12" key={block.id}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`departure_${block.id}`}
                          checked={filters.departureTimes.includes(block.id)}
                          onChange={() => handleDepartureTime(block.id)}
                        />
                        <label className="form-check-label d-flex justify-content-between" htmlFor={`departure_${block.id}`}>
                          <span>{block.label}</span>
                          <small className="text-muted">{block.range}</small>
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Arrival Time */}
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Arrival Time</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                  {TIME_BLOCKS.map(block => (
                    <li className="col-12" key={block.id}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`arrival_${block.id}`}
                          checked={filters.arrivalTimes.includes(block.id)}
                          onChange={() => handleArrivalTime(block.id)}
                        />
                        <label className="form-check-label d-flex justify-content-between" htmlFor={`arrival_${block.id}`}>
                          <span>{block.label}</span>
                          <small className="text-muted">{block.range}</small>
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price Sort */}
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Price Sort</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                  <li className="col-6">
                    <input
                      type="radio"
                      className="btn-check"
                      id="priceLowToHigh"
                      name="priceSort"
                      checked={filters.priceSort === 'lowToHigh'}
                      onChange={() => handlePriceSort('lowToHigh')}
                    />
                    <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="priceLowToHigh">
                      Low to High
                    </label>
                  </li>
                  <li className="col-6">
                    <input
                      type="radio"
                      className="btn-check"
                      id="priceHighToLow"
                      name="priceSort"
                      checked={filters.priceSort === 'highToLow'}
                      onChange={() => handlePriceSort('highToLow')}
                    />
                    <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="priceHighToLow">
                      High to Low
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            {/* Popular Filters */}
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Popular Filters</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="wifi" checked={filters.wifi} onChange={handleCheckbox} />
                      <label className="form-check-label" htmlFor="wifi">Wi-Fi Available</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="charging" checked={filters.charging} onChange={handleCheckbox} />
                      <label className="form-check-label" htmlFor="charging">Charging Points</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="snacks" checked={filters.snacks} onChange={handleCheckbox} />
                      <label className="form-check-label" htmlFor="snacks">Snacks Included</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Customer Ratings */}
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Customer Ratings</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rating45" checked={filters.rating45} onChange={handleCheckbox} />
                      <label className="form-check-label" htmlFor="rating45">4.5+</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rating4" checked={filters.rating4} onChange={handleCheckbox} />
                      <label className="form-check-label" htmlFor="rating4">4+</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rating35" checked={filters.rating35} onChange={handleCheckbox} />
                      <label className="form-check-label" htmlFor="rating35">3.5+</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Styles */}
      <style jsx>{`
        .horizontal-filter-container {
          background: white;
          border-bottom: 1px solid #e0e0e0;
          position: sticky;
          top: 0;
        }

        .filter-tabs-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border-bottom: 1px solid #f0f0f0;
        }

        .filter-tabs-container {
          display: flex;
          gap: 0;
          padding: 0;
          min-width: max-content;
        }

        .filter-tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 12px 16px;
          font-size: 12px;
          color: #666;
          cursor: pointer;
          transition: all 0.2s ease;
          border-bottom: 3px solid transparent;
          white-space: nowrap;
          flex-shrink: 0;
          min-width: 80px;
        }

        .filter-tab:hover {
          color: #cd2c22;
          background-color: #f8f9fa;
        }

        .filter-tab.active {
          color: #cd2c22;
          border-bottom-color: #cd2c22;
          background-color: #fff5f5;
        }

        .filter-tab i {
          font-size: 14px;
          margin-bottom: 2px;
        }

        .filter-tab span {
          font-size: 11px;
          font-weight: 500;
          text-align: center;
          line-height: 1;
        }

        .filter-content-container {
          padding: 15px;
          background: white;
        }

        .filter-content {
          min-height: 100px;
        }

        .filter-options {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .filter-option {
          flex-shrink: 0;
        }

        .filter-option .btn {
          white-space: nowrap;
          font-size: 12px;
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid #dee2e6;
          background: white;
          color: #6c757d;
          transition: all 0.2s ease;
        }

        .filter-option .btn:hover {
          border-color: #cd2c22;
          color: #cd2c22;
        }

        .filter-option .btn-check:checked + .btn {
          background-color: #cd2c22;
          border-color: #cd2c22;
          color: white;
        }

        .filter-option .btn-check:checked + .btn:hover {
          background-color: #a52219;
          border-color: #a52219;
        }

        /* Hide scrollbar but keep functionality */
        .filter-tabs-scroll::-webkit-scrollbar {
          display: none;
        }

        .filter-tabs-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @media (max-width: 576px) {
          .filter-tab {
            padding: 10px 12px;
            min-width: 70px;
          }
          
          .filter-tab i {
            font-size: 12px;
          }
          
          .filter-tab span {
            font-size: 10px;
          }
          
          .filter-content-container {
            padding: 12px;
          }
          
          .filter-options {
            gap: 6px;
          }
          
          .filter-option .btn {
            font-size: 11px;
            padding: 5px 10px;
          }
        }
      `}</style>
    </>
  )
}

export default BusFilterPage;
 
