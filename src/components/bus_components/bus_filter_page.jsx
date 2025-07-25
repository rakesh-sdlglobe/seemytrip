import { Link } from 'react-router-dom';
import React from 'react';

const BUS_TYPE_OPTIONS = [
  { id: 'ac', label: 'AC' },
  { id: 'nonac', label: 'Non-AC' },
  { id: 'sleeper', label: 'Sleeper' },
  { id: 'semiSleeper', label: 'Semi-Sleeper' },
];

const BusFilterPage = ({ filters, onFilterChange, onClear, minPrice, maxPrice }) => {
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

  // Handler for min price
  const handleMinPrice = (e) => {
    let value = Number(e.target.value);
    if (value > filters.priceMax) value = filters.priceMax;
    onFilterChange({ priceMin: value });
  };

  // Handler for max price
  const handleMaxPrice = (e) => {
    let value = Number(e.target.value);
    if (value < minPrice) value = minPrice;
    onFilterChange({ priceMax: value });
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
          {/* Pricing */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Pricing Range in ₹</h6>
            </div>
            <div className="searchBar-single-wrap">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={filters.priceMax}
                onChange={handleMaxPrice}
                style={{ width: '100%' }}
              />
              <div>
                <span>₹{minPrice}</span> to <span>₹{filters.priceMax}</span>
              </div>
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
  );
};

export default BusFilterPage;
