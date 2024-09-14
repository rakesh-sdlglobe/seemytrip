import React from 'react'

const FlightFilter = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-12">
      <div className="filter-searchBar bg-white rounded-3">
        <div className="filter-searchBar-head border-bottom">
          <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
            <div className="searchBar-headerfirst">
              <h6 className="fw-bold fs-5 m-0">Filters</h6>
              <p className="text-md text-muted m-0">Showing 180 Flights</p>
            </div>
            <div className="searchBar-headerlast text-end">
              <a href="#" className="text-md fw-medium text-primary active">Clear All</a>
            </div>
          </div>
        </div>
        <div className="filter-searchBar-body">
          {/* Departure & Return */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Departure</h6>
            </div>
            <div className="searchBar-single-wrap mb-4">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="before6am" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="before6am">Before 6AM</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="6am12pm" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="6am12pm">6AM -
                    12PM</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="12pm6pm" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="12pm6pm">12PM -
                    6PM</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="after6pm" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="after6pm">After
                    6PM</label>
                </li>
              </ul>
            </div>
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Return</h6>
            </div>
            <div className="searchBar-single-wrap">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="before6am1" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="before6am1">Before 6AM</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="6am12pm1" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="6am12pm1">6AM -
                    12PM</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="12pm6pm1" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="12pm6pm1">12PM
                    - 6PM</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="after6pm1" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="after6pm1">After 6PM</label>
                </li>
              </ul>
            </div>
          </div>
          {/* Onward Stops */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Onward Stops</h6>
            </div>
            <div className="searchBar-single-wrap">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="direct" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="direct">Direct</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="1stop" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="1stop">1
                    Stop</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="2stop" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="2stop">2+
                    Stop</label>
                </li>
              </ul>
            </div>
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Return Stops</h6>
            </div>
            <div className="searchBar-single-wrap">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="direct1" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="direct1">Direct</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="1stop1" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="1stop1">1
                    Stop</label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="2stop1" />
                  <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="2stop1">2+
                    Stop</label>
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
              <input type="text" className="js-range-slider" name="my_range" defaultValue data-skin="round" data-type="double" data-min={0} data-max={1000} data-grid="false" />
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
                    <input className="form-check-input" type="checkbox" id="baggage" />
                    <label className="form-check-label" htmlFor="baggage">Baggage</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="inflightmeal" />
                    <label className="form-check-label" htmlFor="inflightmeal">In-flight Meal</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="inflightenter" />
                    <label className="form-check-label" htmlFor="inflightenter">In-flight Entertainment</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="flswifi" />
                    <label className="form-check-label" htmlFor="flswifi">WiFi</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="flusbport" />
                    <label className="form-check-label" htmlFor="flusbport">Power/USB Port</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Popular Flights */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex align-items-center justify-content-between mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Preferred Airlines</h6>
              <a href="#" className="text-md fw-medium text-muted active">Reset</a>
            </div>
            <div className="searchBar-single-wrap">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                <li className="col-12">
                  <div className="form-check lg">
                    <div className="frm-slicing d-flex align-items-center">
                      <div className="frm-slicing-first">
                        <input className="form-check-input" type="checkbox" id="baggage8" />
                        <label className="form-check-label" htmlFor="baggage8" />
                      </div>
                      <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                        <div className="frms-flex d-flex align-items-center">
                          <div className="frm-slicing-img"><img src="https://placehold.co/110x110" className="img-fluid" width={25} alt="" /></div>
                          <div className="frm-slicing-title ps-2"><span className="text-muted-2">Air India</span></div>
                        </div>
                        <div className="text-end"><span className="text-md text-muted-2 opacity-75">$390.00</span></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check lg">
                    <div className="frm-slicing d-flex align-items-center">
                      <div className="frm-slicing-first">
                        <input className="form-check-input" type="checkbox" id="baggage1" />
                        <label className="form-check-label" htmlFor="baggage1" />
                      </div>
                      <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                        <div className="frms-flex d-flex align-items-center">
                          <div className="frm-slicing-img"><img src="https://placehold.co/110x110" className="img-fluid" width={25} alt="" /></div>
                          <div className="frm-slicing-title ps-2"><span className="text-muted-2">Jal Airlines</span></div>
                        </div>
                        <div className="text-end"><span className="text-md text-muted-2 opacity-75">$310.00</span></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check lg">
                    <div className="frm-slicing d-flex align-items-center">
                      <div className="frm-slicing-first">
                        <input className="form-check-input" type="checkbox" id="baggage2" />
                        <label className="form-check-label" htmlFor="baggage2" />
                      </div>
                      <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                        <div className="frms-flex d-flex align-items-center">
                          <div className="frm-slicing-img"><img src="https://placehold.co/110x110" className="img-fluid" width={25} alt="" /></div>
                          <div className="frm-slicing-title ps-2"><span className="text-muted-2">Indigo</span></div>
                        </div>
                        <div className="text-end"><span className="text-md text-muted-2 opacity-75">$390.00</span></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check lg">
                    <div className="frm-slicing d-flex align-items-center">
                      <div className="frm-slicing-first">
                        <input className="form-check-input" type="checkbox" id="baggage3" />
                        <label className="form-check-label" htmlFor="baggage3" />
                      </div>
                      <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                        <div className="frms-flex d-flex align-items-center">
                          <div className="frm-slicing-img"><img src="https://placehold.co/110x110" className="img-fluid" width={25} alt="" /></div>
                          <div className="frm-slicing-title ps-2"><span className="text-muted-2">Air Asia</span></div>
                        </div>
                        <div className="text-end"><span className="text-md text-muted-2 opacity-75">$410.00</span></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check lg">
                    <div className="frm-slicing d-flex align-items-center">
                      <div className="frm-slicing-first">
                        <input className="form-check-input" type="checkbox" id="baggage4" />
                        <label className="form-check-label" htmlFor="baggage4" />
                      </div>
                      <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                        <div className="frms-flex d-flex align-items-center">
                          <div className="frm-slicing-img"><img src="https://placehold.co/110x110" className="img-fluid" width={25} alt="" /></div>
                          <div className="frm-slicing-title ps-2"><span className="text-muted-2">Vistara</span></div>
                        </div>
                        <div className="text-end"><span className="text-md text-muted-2 opacity-75">$370.00</span></div>
                      </div>
                    </div>
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


export default FlightFilter;