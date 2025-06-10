import React from 'react';
import { Link } from 'react-router-dom';

const HotelsFilters = ({ filters, onFilterChange, onClearAll }) => {
  return (
    <div className="filter-searchBar bg-white rounded-3" style={{ boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)" }}>
      <div className="filter-searchBar-head border-bottom">
        <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
          <div className="searchBar-headerfirst">
            <h6 className="fw-bold fs-5 m-0">Filters</h6>
            <p className="text-md text-muted m-0">Showing 180 Hotels</p>
          </div>
          <div className="searchBar-headerlast text-end">
            <Link
              to="#"
              className="text-md fw-medium text-primary active"
              onClick={onClearAll}
            >
              Clear All
            </Link>
          </div>
        </div>
      </div>
      <div className="filter-searchBar-body">
        {/* Bed types */}
        <div className="searchBar-single px-3 py-3 border-bottom">
          <div className="searchBar-single-title d-flex mb-3">
            <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Bed Type</h6>
          </div>
          <div className="searchBar-single-wrap">
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
              <li className="col-6">
                <input 
                  type="checkbox" 
                  className="btn-check" 
                  id="doubleBed"
                  checked={filters.bedTypes.doubleBed}
                  onChange={onFilterChange}
                />
                <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="doubleBed">1 Double Bed</label>
              </li>
              <li className="col-6">
                <input 
                  type="checkbox" 
                  className="btn-check" 
                  id="twoBeds"
                  checked={filters.bedTypes.twoBeds}
                  onChange={onFilterChange}
                />
                <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="twoBeds">2 Beds</label>
              </li>
              <li className="col-6">
                <input 
                  type="checkbox" 
                  className="btn-check" 
                  id="singleBed"
                  checked={filters.bedTypes.singleBed}
                  onChange={onFilterChange}
                />
                <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="singleBed">1 Single Bed</label>
              </li>
              <li className="col-6">
                <input 
                  type="checkbox" 
                  className="btn-check" 
                  id="threeBeds"
                  checked={filters.bedTypes.threeBeds}
                  onChange={onFilterChange}
                />
                <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="threeBeds">3 Beds</label>
              </li>
              <li className="col-6">
                <input 
                  type="checkbox" 
                  className="btn-check" 
                  id="kingBed"
                  checked={filters.bedTypes.kingBed}
                  onChange={onFilterChange}
                />
                <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="kingBed">King Bed</label>
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
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="freeCancellation"
                    checked={filters.popularFilters.freeCancellation}
                    onChange={onFilterChange}
                  />
                  <label className="form-check-label" htmlFor="freeCancellation">Free Cancellation Available</label>
                </div>
              </li>
              <li className="col-12">
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="bookAtOne"
                    checked={filters.popularFilters.bookAtOne}
                    onChange={onFilterChange}
                  />
                  <label className="form-check-label" htmlFor="bookAtOne">Book @ ₹1</label>
                </div>
              </li>
              <li className="col-12">
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="payAtHotel"
                    checked={filters.popularFilters.payAtHotel}
                    onChange={onFilterChange}
                  />
                  <label className="form-check-label" htmlFor="payAtHotel">Pay At Hotel Available</label>
                </div>
              </li>
              <li className="col-12">
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="freeBreakfast"
                    checked={filters.popularFilters.freeBreakfast}
                    onChange={onFilterChange}
                  />
                  <label className="form-check-label" htmlFor="freeBreakfast">Free Breakfast Included</label>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing */}
        <div className="searchBar-single px-3 py-3 border-bottom">
          <div className="searchBar-single-title d-flex mb-3">
            <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Pricing Range in US$</h6>
          </div>
          <div className="searchBar-single-wrap">
            <input 
              type="text" 
              className="js-range-slider" 
              name="my_range" 
              defaultValue={filters.priceRange} 
              data-skin="round" 
              data-type="double" 
              data-min={0} 
              data-max={1000} 
              data-grid="false" 
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
                <div className="form-check lg">
                  <div className="frm-slicing d-flex align-items-center">
                    <div className="frm-slicing-first">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="fourfive"
                        checked={filters.customerRating === 4.5}
                        onChange={(e) => onFilterChange({ target: { id: 'customerRating', value: e.target.checked ? 4.5 : null } })}
                      />
                      <label className="form-check-label" htmlFor="fourfive" />
                    </div>
                    <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                      <div className="frms-flex d-flex align-items-center">
                        <div className="frm-slicing-ico text-md">
                          <i className="fa fa-star text-warning" />
                        </div>
                        <div className="frm-slicing-title ps-1"><span className="text-dark fw-bold">4.5+</span></div>
                      </div>
                      <div className="text-end"><span className="text-md text-muted-2 opacity-75">16</span></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Amenities */}
        <div className="searchBar-single px-3 py-3 border-bottom">
          <div className="searchBar-single-title d-flex mb-3">
            <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Amenities</h6>
          </div>
          <div className="searchBar-single-wrap">
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
              <li className="col-12">
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="freeWifi"
                    checked={filters.amenities.freeWifi}
                    onChange={onFilterChange}
                  />
                  <label className="form-check-label" htmlFor="freeWifi">Free Wifi</label>
                </div>
              </li>
              <li className="col-12">
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="breakfast"
                    checked={filters.amenities.breakfast}
                    onChange={onFilterChange}
                  />
                  <label className="form-check-label" htmlFor="breakfast">4 Breakfast included</label>
                </div>
              </li>
              <li className="col-12">
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="pool"
                    checked={filters.amenities.pool}
                    onChange={onFilterChange}
                  />
                  <label className="form-check-label" htmlFor="pool">Pool</label>
                </div>
              </li>
              <li className="col-12">
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="parking"
                    checked={filters.amenities.parking}
                    onChange={onFilterChange}
                  />
                  <label className="form-check-label" htmlFor="parking">Free Parking</label>
                </div>
              </li>
              <li className="col-12">
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="airConditioning"
                    checked={filters.amenities.airConditioning}
                    onChange={onFilterChange}
                  />
                  <label className="form-check-label" htmlFor="airConditioning">Air Conditioning</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsFilters;
