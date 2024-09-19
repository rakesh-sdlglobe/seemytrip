import { Link } from 'react-router-dom';

const CabFilterPage = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-12">
      <div className="filter-searchBar bg-white rounded-3">
        <div className="filter-searchBar-head border-bottom">
          <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
            <div className="searchBar-headerfirst">
              <h6 className="fw-bold fs-5 m-0">Filters</h6>
              <p className="text-md text-muted m-0">Showing 180 Cabs</p>
            </div>
            <div className="searchBar-headerlast text-end">
              <Link to="#" className="text-md fw-medium text-primary active">Clear All</Link>
            </div>
          </div>
        </div>
        <div className="filter-searchBar-body">
          {/* Cab Types */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Cab Type</h6>
            </div>
            <div className="searchBar-single-wrap">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="sedan" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="sedan">Sedan</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="suv" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="suv">SUV</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="hatchback" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="hatchback">Hatchback</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="luxury" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="luxury">Luxury</label>
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
                    <input className="form-check-input" type="checkbox" id="ac" />
                    <label className="form-check-label" htmlFor="ac">AC Available</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="nonac" />
                    <label className="form-check-label" htmlFor="nonac">Non-AC Available</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wifi" />
                    <label className="form-check-label" htmlFor="wifi">Wi-Fi Included</label>
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
                data-min={500}
                data-max={10000}
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
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rating45" />
                    <label className="form-check-label" htmlFor="rating45">4.5+</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rating4" />
                    <label className="form-check-label" htmlFor="rating4">4+</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rating35" />
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

export default CabFilterPage;