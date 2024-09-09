import { Link } from "react-router-dom";

const FilterSearchPage = ({ filters, onFilterChange, handleClearAll }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-12">
      <div className="filter-searchBar bg-white rounded-3">
        <div className="filter-searchBar-head border-bottom">
          <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
            <div className="searchBar-headerfirst">
              <h6 className="fw-bold fs-5 m-0">Filters</h6>
            </div>
            <div className="searchBar-headerlast text-end">
              <Link to="#" className="text-md fw-medium text-primary active" onClick={handleClearAll}>Clear All</Link>
            </div>
          </div>
        </div>
        <div className="filter-searchBar-body">
          {/* Quick Filters */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Quick Filters</h6>
            </div>
            <div className="searchBar-single-wrap">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="ac" checked={filters.ac} onChange={onFilterChange} />
                    <label className="form-check-label" htmlFor="ac">AC</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="available" checked={filters.available} onChange={onFilterChange} />
                    <label className="form-check-label" htmlFor="available">Available</label>
                  </div>
                </li>
                {/* <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="departureAfter6pm" checked={filters.departureAfter6pm} onChange={onFilterChange} />
                    <label className="form-check-label" htmlFor="departureAfter6pm">Departure after 6 PM</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="arrivalBefore12pm" checked={filters.arrivalBefore12pm} onChange={onFilterChange} />
                    <label className="form-check-label" htmlFor="arrivalBefore12pm">Arrival before 12 PM</label>
                  </div>
                </li> */}
                {/* Departure Time Filters */}
                <div className="searchBar-single-title d-flex mb-1 mt-3">
                  <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Departure Time</h6>
                </div>
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="departureEarlyMorning" checked={filters.departureEarlyMorning} onChange={onFilterChange} />
                      <label className="form-check-label" htmlFor="departureEarlyMorning">Early Morning (00:00 - 06:00)</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="departureMorning" checked={filters.departureMorning} onChange={onFilterChange} />
                      <label className="form-check-label" htmlFor="departureMorning">Morning (06:00 - 12:00)</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="departureMidDay" checked={filters.departureMidDay} onChange={onFilterChange} />
                      <label className="form-check-label" htmlFor="departureMidDay">Mid Day (12:00 - 18:00)</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="departureNight" checked={filters.departureNight} onChange={onFilterChange} />
                      <label className="form-check-label" htmlFor="departureNight">Night (18:00 - 24:00)</label>
                    </div>
                  </li>
                </ul>

                {/* Arrival Time Filters */}
                <div className="searchBar-single-title d-flex mb-1 mt-3">
                  <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Arrival Time</h6>
                </div>
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="arrivalEarlyMorning" checked={filters.arrivalEarlyMorning} onChange={onFilterChange} />
                      <label className="form-check-label" htmlFor="arrivalEarlyMorning">Early Morning (00:00 - 06:00)</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="arrivalMorning" checked={filters.arrivalMorning} onChange={onFilterChange} />
                      <label className="form-check-label" htmlFor="arrivalMorning">Morning (06:00 - 12:00)</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="arrivalMidDay" checked={filters.arrivalMidDay} onChange={onFilterChange} />
                      <label className="form-check-label" htmlFor="arrivalMidDay">Mid Day (12:00 - 18:00)</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="arrivalNight" checked={filters.arrivalNight} onChange={onFilterChange} />
                      <label className="form-check-label" htmlFor="arrivalNight">Night (18:00 - 24:00)</label>
                    </div>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          {/* Ticket Types */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Ticket Types</h6>
            </div>
            <div className="searchBar-single-wrap">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="freeCancellation" checked={filters.freeCancellation} onChange={onFilterChange} />
                    <label className="form-check-label" htmlFor="freeCancellation">Free Cancellation</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="tripGuarantee" checked={filters.tripGuarantee} onChange={onFilterChange} />
                    <label className="form-check-label" htmlFor="tripGuarantee">Trip Guarantee</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Journey Class Filters */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Journey Class Filters</h6>
            </div>
            <div className="searchBar-single-wrap">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="1A" checked={filters['1A']} onChange={onFilterChange} />
                    <label className="form-check-label" htmlFor="1A">1st AC</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="2A" checked={filters['2A']} onChange={onFilterChange} />
                    <label className="form-check-label" htmlFor="2A">2nd AC</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="3A" checked={filters['3A']} onChange={onFilterChange} />
                    <label className="form-check-label" htmlFor="3A">3rd AC</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="SL" checked={filters['SL']} onChange={onFilterChange} />
                    <label className="form-check-label" htmlFor="SL">Sleeper</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="GN" checked={filters['GN']} onChange={onFilterChange} />
                    <label className="form-check-label" htmlFor="GN">General</label>
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

export default FilterSearchPage;
