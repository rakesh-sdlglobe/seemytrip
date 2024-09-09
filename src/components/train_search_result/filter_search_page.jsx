import { Link } from "react-router-dom";

const FilterSearchPage = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-12">
      <div className="filter-searchBar bg-white rounded-3">
        <div className="filter-searchBar-head border-bottom">
          <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
            <div className="searchBar-headerfirst">
              <h6 className="fw-bold fs-5 m-0">Filters</h6>
              {/* <p className="text-md text-muted m-0">Showing 180 Flights</p> */}
            </div>
            <div className="searchBar-headerlast text-end">
              <Link to="#" className="text-md fw-medium text-primary active">Clear All</Link>
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
                    <input className="form-check-input" type="checkbox" id="ac" />
                    <label className="form-check-label" htmlFor="ac">AC</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="available" />
                    <label className="form-check-label" htmlFor="available">Available</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="departureAfter6pm" />
                    <label className="form-check-label" htmlFor="departureAfter6pm">Departure after 6 PM</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="arrivalBefore12pm" />
                    <label className="form-check-label" htmlFor="arrivalBefore12pm">Arrival before 12 PM</label>
                  </div>
                </li>
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
                    <input className="form-check-input" type="checkbox" id="freeCancellation" />
                    <label className="form-check-label" htmlFor="freeCancellation">Free Cancellation</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="tripGuarantee" />
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
                    <input className="form-check-input" type="checkbox" id="1stClassAC" />
                    <label className="form-check-label" htmlFor="1stClassAC">1st Class AC - 1A</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="2ndTierAC" />
                    <label className="form-check-label" htmlFor="2ndTierAC">2 Tier AC - 2A</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="3rdTierAC" />
                    <label className="form-check-label" htmlFor="3rdTierAC">3 Tier AC - 3A</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="sleeperSL" />
                    <label className="form-check-label" htmlFor="sleeperSL">Sleeper - SL</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="secondSitting" />
                    <label className="form-check-label" htmlFor="secondSitting">Second Sitting - 2S</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Facilities */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Facilities</h6>
            </div>
            <div className="searchBar-single-wrap">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="baggageFacility" />
                    <label className="form-check-label" htmlFor="baggageFacility">Baggage</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="inflightMealFacility" />
                    <label className="form-check-label" htmlFor="inflightMealFacility">In-flight Meal</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="inflightEntertainmentFacility" />
                    <label className="form-check-label" htmlFor="inflightEntertainmentFacility">In-flight Entertainment</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wifiFacility" />
                    <label className="form-check-label" htmlFor="wifiFacility">WiFi</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="powerUSBFacility" />
                    <label className="form-check-label" htmlFor="powerUSBFacility">Power/USB Port</label>
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
