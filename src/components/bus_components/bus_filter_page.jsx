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

  return (
    <div className="col-xl-3 col-lg-4 col-md-12">
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
  )
}

export default BusFilterPage;
 
