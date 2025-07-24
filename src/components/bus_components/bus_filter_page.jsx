import { Link } from 'react-router-dom';
import React from 'react';

const BusFilterPage = ({ setLoading }) => {
  // Handler for any filter change
  const handleFilterChange = () => {
    setLoading(true);
    // Simulate data fetch delay (replace with real fetch logic)
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-12">
      <div className="filter-searchBar bg-white rounded-3">
        <div className="filter-searchBar-head border-bottom">
          <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
            <div className="searchBar-headerfirst">
              <h6 className="fw-bold fs-5 m-0">Filters</h6>
              <p className="text-md text-muted m-0">Showing 180 Buses</p>
            </div>
            <div className="searchBar-headerlast text-end">
              <Link to="#" className="text-md fw-medium text-primary active">Clear All</Link>
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
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="ac" onChange={handleFilterChange} />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="ac">AC</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="nonac" onChange={handleFilterChange} />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="nonac">Non-AC</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="sleeper" onChange={handleFilterChange} />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="sleeper">Sleeper</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="semiSleeper" onChange={handleFilterChange} />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="semiSleeper">Semi-Sleeper</label>
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
                    <input className="form-check-input" type="checkbox" id="wifi" onChange={handleFilterChange} />
                    <label className="form-check-label" htmlFor="wifi">Wi-Fi Available</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="charging" onChange={handleFilterChange} />
                    <label className="form-check-label" htmlFor="charging">Charging Points</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="snacks" onChange={handleFilterChange} />
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
                type="text"
                className="js-range-slider"
                name="price_range"
                defaultValue=""
                data-skin="round"
                data-type="double"
                data-min={100}
                data-max={5000}
                data-grid="false"
                onChange={handleFilterChange}
              />
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
                    <input className="form-check-input" type="checkbox" id="rating45" onChange={handleFilterChange} />
                    <label className="form-check-label" htmlFor="rating45">4.5+</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rating4" onChange={handleFilterChange} />
                    <label className="form-check-label" htmlFor="rating4">4+</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rating35" onChange={handleFilterChange} />
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
