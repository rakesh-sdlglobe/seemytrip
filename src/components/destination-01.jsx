import '../assets/css/bootstrap.min.css';
import '../assets/css/animation.css';
import '../assets/css/dropzone.min.css';
import '../assets/css/flatpickr.min.css';
import '../assets/css/flickity.min.css';
import '../assets/css/lightbox.min.css';
import '../assets/css/magnifypopup.css';
import '../assets/css/select2.min.css';
import '../assets/css/rangeSlider.min.css';
import '../assets/css/prism.css';
import '../assets/css/bootstrap-icons.css';
import '../assets/css/fontawesome.css';
import '../assets/css/style.css';
import { trainImage } from '../assets/images';
import { Link } from 'react-router-dom';
import Footer from './footer';

const Destination01 = () => {
      return (
        <div>
          {/* ============================================================== */}
          {/* Preloader - style you can find in spinners.css */}
          {/* ============================================================== */}
          <div id="preloader">
            <div className="preloader"><span /><span /></div>
          </div>
          {/* ============================================================== */}
          {/* Main wrapper - style you can find in pages.scss */}
          {/* ============================================================== */}
          <div id="main-wrapper">
            {/* ============================================================== */}
            {/* Top header  */}
            {/* ============================================================== */}
            {/* Start Navigation */}
            <div className="header header-light">
              <div className="container">
                <nav id="navigation" className="navigation navigation-landscape">
                  <div className="nav-header">
                    <Link className="nav-brand" to="#"><img src={trainImage} className="logo" alt="" /></Link>
                    <div className="nav-toggle" />
                    <div className="mobile_nav">
                      <ul>
                        <li className="currencyDropdown me-2">
                          <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></Link>
                        </li>
                        <li className="languageDropdown me-2">
                          <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src="https://placehold.co/100x100" className="img-fluid" width={17} alt="Country" /></Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-light-primary text-primary rounded" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6" /></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nav-menus-wrapper" style={{transitionProperty: 'none'}}>
                    <ul className="nav-menu">
                      <li className="active"><Link to="home-stay.html"><i className="fa-solid fa-umbrella-beach me-2" />Stays</Link></li>
                      <li><Link to="home-flight.html"><i className="fa-solid fa-jet-fighter me-2" />Flights</Link></li>
                      <li><Link to="home-hotel.html"><i className="fa-solid fa-spa me-2" />Hotels</Link></li>
                      <li><Link to="home-rental.html"><i className="fa-solid fa-house-circle-check me-2" />Rental</Link></li>
                      <li><Link to="home-car.html"><i className="fa-solid fa-car me-2" />Cars</Link></li>
                    </ul>
                    <ul className="nav-menu nav-menu-social align-to-right">
                      <li className="currencyDropdown me-2">
                        <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></Link>
                      </li>
                      <li className="languageDropdown me-2">
                        <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src="https://placehold.co/100x100" className="img-fluid" width={17} alt="Country" /></Link>
                      </li>
                      <li className="list-buttons">
                        <Link to="#" data-bs-toggle="modal" data-bs-target="#login" className="bg-primary"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            {/* End Navigation */}
            <div className="clearfix" />
            {/* ============================================================== */}
            {/* Top header  */}
            {/* ============================================================== */}
            {/* ============================ Hero Banner  Start================================== */}
            <div className="py-5 bg-primary position-relative">
              <div className="container">
                {/* Search Form */}
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="search-wrap position-relative">
                      <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                        <div className="col-xl-8 col-lg-7 col-md-12">
                          <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                              <div className="form-group mb-0">
                                <label className="text-light text-uppercase opacity-75">Where</label>
                                <select className="goingto form-control fw-bold" name="leaving[]" multiple="multiple">
                                  <option value="ny">New York</option>
                                  <option value="sd">San Diego</option>
                                  <option value="sj">San Jose</option>
                                  <option value="ph">Philadelphia</option>
                                  <option value="nl">Nashville</option>
                                  <option value="sf">San Francisco</option>
                                  <option value="hu">Houston</option>
                                  <option value="sa">San Antonio</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                              <div className="form-group mb-0">
                                <label className="text-light text-uppercase opacity-75">Checkin &amp; Checkout</label>
                                <input type="text" className="form-control fw-bold" placeholder="Check-In & Check-Out" id="checkinout" readOnly="readonly" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-12">
                          <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                              <div className="form-group mb-0">
                                <label className="text-light text-uppercase opacity-75">Guests &amp; Rooms</label>
                                <div className="booking-form__input guests-input mixer-auto">
                                  <button name="guests-btn" id="guests-input-btn">1 Guest</button>
                                  <div className="guests-input__options" id="guests-input-options">
                                    <div>
                                      <span className="guests-input__ctrl minus" id="adults-subs-btn"><i className="fa-solid fa-minus" /></span>
                                      <span className="guests-input__value"><span id="guests-count-adults">1</span>Adults</span>
                                      <span className="guests-input__ctrl plus" id="adults-add-btn"><i className="fa-solid fa-plus" /></span>
                                    </div>
                                    <div>
                                      <span className="guests-input__ctrl minus" id="children-subs-btn"><i className="fa-solid fa-minus" /></span>
                                      <span className="guests-input__value"><span id="guests-count-children">0</span>Children</span>
                                      <span className="guests-input__ctrl plus" id="children-add-btn"><i className="fa-solid fa-plus" /></span>
                                    </div>
                                    <div>
                                      <span className="guests-input__ctrl minus" id="room-subs-btn"><i className="fa-solid fa-minus" /></span>
                                      <span className="guests-input__value"><span id="guests-count-room">0</span>Rooms</span>
                                      <span className="guests-input__ctrl plus" id="room-add-btn"><i className="fa-solid fa-plus" /></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group mb-0">
                                <button type="button" className="btn btn-whites text-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </row> */}
              </div>
            </div>
            {/* ============================ Hero Banner End ================================== */}
            {/* ============================ Searching Destination Lists Start ================================== */}
            <section className="gray-simple">
              <div className="container">
                <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
                  {/* Sidebar */}
                  <div className="col-xl-3 col-lg-4 col-md-12">
                    <div className="filter-searchBar bg-white rounded-3">
                      <div className="filter-searchBar-head border-bottom">
                        <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
                          <div className="searchBar-headerfirst">
                            <h6 className="fw-bold fs-5 m-0">Filters</h6>
                            <p className="text-md text-muted m-0">Showing 180 Hotels</p>
                          </div>
                          <div className="searchBar-headerlast text-end">
                            <Link to="#" className="text-md fw-medium text-primary active">Clear All</Link>
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
                                <input type="checkbox" className="btn-check" id="doublebed" />
                                <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="doublebed">1 Double
                                  Bed</label>
                              </li>
                              <li className="col-6">
                                <input type="checkbox" className="btn-check" id="2bed" />
                                <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="2bed">2 Beds</label>
                              </li>
                              <li className="col-6">
                                <input type="checkbox" className="btn-check" id="singlebed" />
                                <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="singlebed">1 Single
                                  Bed</label>
                              </li>
                              <li className="col-6">
                                <input type="checkbox" className="btn-check" id="3beds" />
                                <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="3beds">3
                                  Beds</label>
                              </li>
                              <li className="col-6">
                                <input type="checkbox" className="btn-check" id="kingbed" />
                                <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="kingbed">King
                                  Bed</label>
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
                                  <input className="form-check-input" type="checkbox" id="fsq" />
                                  <label className="form-check-label" htmlFor="fsq">Free Cancellation Available</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="bk1" />
                                  <label className="form-check-label" htmlFor="bk1">Book @ ₹1</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="payh" />
                                  <label className="form-check-label" htmlFor="payh">Pay At Hotel Available</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="brks" />
                                  <label className="form-check-label" htmlFor="brks">Free Breakfast Included</label>
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
                            <input type="text" className="js-range-slider" name="my_range" defaultValue data-skin="round" data-type="double" data-min={0} data-max={1000} data-grid="false" />
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
                                      <input className="form-check-input" type="checkbox" id="fourfive" />
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
                              <li className="col-12">
                                <div className="form-check lg">
                                  <div className="frm-slicing d-flex align-items-center">
                                    <div className="frm-slicing-first">
                                      <input className="form-check-input" type="checkbox" id="fourplus" />
                                      <label className="form-check-label" htmlFor="fourplus" />
                                    </div>
                                    <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                                      <div className="frms-flex d-flex align-items-center">
                                        <div className="frm-slicing-ico text-md">
                                          <i className="fa fa-star text-warning" />
                                        </div>
                                        <div className="frm-slicing-title ps-1"><span className="text-dark fw-bold">4+</span></div>
                                      </div>
                                      <div className="text-end"><span className="text-md text-muted-2 opacity-75">10</span></div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check lg">
                                  <div className="frm-slicing d-flex align-items-center">
                                    <div className="frm-slicing-first">
                                      <input className="form-check-input" type="checkbox" id="threefive" />
                                      <label className="form-check-label" htmlFor="threefive" />
                                    </div>
                                    <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                                      <div className="frms-flex d-flex align-items-center">
                                        <div className="frm-slicing-ico text-md">
                                          <i className="fa fa-star text-warning" />
                                        </div>
                                        <div className="frm-slicing-title ps-1"><span className="text-dark fw-bold">3.5+</span></div>
                                      </div>
                                      <div className="text-end"><span className="text-md text-muted-2 opacity-75">08</span></div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check lg">
                                  <div className="frm-slicing d-flex align-items-center">
                                    <div className="frm-slicing-first">
                                      <input className="form-check-input" type="checkbox" id="threeplus" />
                                      <label className="form-check-label" htmlFor="threeplus" />
                                    </div>
                                    <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                                      <div className="frms-flex d-flex align-items-center">
                                        <div className="frm-slicing-ico text-md">
                                          <i className="fa fa-star text-warning" />
                                        </div>
                                        <div className="frm-slicing-title ps-1"><span className="text-dark fw-bold">3+</span></div>
                                      </div>
                                      <div className="text-end"><span className="text-md text-muted-2 opacity-75">26</span></div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Star Ratings */}
                        <div className="searchBar-single px-3 py-3 border-bottom">
                          <div className="searchBar-single-title d-flex mb-3">
                            <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Star Ratings</h6>
                          </div>
                          <div className="searchBar-single-wrap">
                            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                              <li className="col-12">
                                <div className="form-check lg">
                                  <div className="frm-slicing d-flex align-items-center">
                                    <div className="frm-slicing-first">
                                      <input className="form-check-input" type="checkbox" id="fivestar" />
                                      <label className="form-check-label" htmlFor="fivestar" />
                                    </div>
                                    <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                                      <div className="frms-flex d-flex align-items-center">
                                        <div className="frm-slicing-ico text-md">
                                          <i className="fa fa-star text-warning" />
                                          <i className="fa fa-star text-warning" />
                                          <i className="fa fa-star text-warning" />
                                          <i className="fa fa-star text-warning" />
                                          <i className="fa fa-star text-warning" />
                                        </div>
                                      </div>
                                      <div className="text-end"><span className="text-md text-muted-2 opacity-75">16</span></div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check lg">
                                  <div className="frm-slicing d-flex align-items-center">
                                    <div className="frm-slicing-first">
                                      <input className="form-check-input" type="checkbox" id="fourstar" />
                                      <label className="form-check-label" htmlFor="fourstar" />
                                    </div>
                                    <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                                      <div className="frms-flex d-flex align-items-center">
                                        <div className="frm-slicing-ico text-md">
                                          <i className="fa fa-star text-warning" />
                                          <i className="fa fa-star text-warning" />
                                          <i className="fa fa-star text-warning" />
                                          <i className="fa fa-star text-warning" />
                                        </div>
                                      </div>
                                      <div className="text-end"><span className="text-md text-muted-2 opacity-75">16</span></div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check lg">
                                  <div className="frm-slicing d-flex align-items-center">
                                    <div className="frm-slicing-first">
                                      <input className="form-check-input" type="checkbox" id="threestar" />
                                      <label className="form-check-label" htmlFor="threestar" />
                                    </div>
                                    <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                                      <div className="frms-flex d-flex align-items-center">
                                        <div className="frm-slicing-ico text-md">
                                          <i className="fa fa-star text-warning" />
                                          <i className="fa fa-star text-warning" />
                                          <i className="fa fa-star text-warning" />
                                        </div>
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
                                  <input className="form-check-input" type="checkbox" id="wififree" />
                                  <label className="form-check-label" htmlFor="wififree">Free Wifi</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="bkrsdt" />
                                  <label className="form-check-label" htmlFor="bkrsdt">4 Breakfast included</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="pool" />
                                  <label className="form-check-label" htmlFor="pool">Pool</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="parking" />
                                  <label className="form-check-label" htmlFor="parking">Free Parking</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="acrion" />
                                  <label className="form-check-label" htmlFor="acrion">Air Conditioning</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Popular Filters */}
                        <div className="searchBar-single px-3 py-3">
                          <div className="searchBar-single-title d-flex mb-3">
                            <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Fun things To Do</h6>
                          </div>
                          <div className="searchBar-single-wrap">
                            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="beach" />
                                  <label className="form-check-label" htmlFor="beach">Beach</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="ftns" />
                                  <label className="form-check-label" htmlFor="ftns">Fitness center</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="cylc" />
                                  <label className="form-check-label" htmlFor="cylc">Cycling</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="anms" />
                                  <label className="form-check-label" htmlFor="anms">Animation Show</label>
                                </div>
                              </li>
                              <li className="col-12">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="shpc" />
                                  <label className="form-check-label" htmlFor="shpc">Shopping center</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* All List */}
                  <div className="col-xl-9 col-lg-8 col-md-12">
                    <div className="row align-items-center justify-content-between">
                      <div className="col-xl-4 col-lg-4 col-md-4">
                        <h5 className="fw-bold fs-6 mb-lg-0 mb-3">Showing 280 Search Results</h5>
                      </div>
                      <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="d-flex align-items-center justify-content-start justify-content-lg-end flex-wrap">
                          <div className="flsx-first me-2">
                            <div className="bg-white rounded py-2 px-3">
                              <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="mapoption" />
                                <label className="form-check-label ms-1" htmlFor="mapoption">Map</label>
                              </div>
                            </div>
                          </div>
                          <div className="flsx-first mt-sm-0 mt-2">
                            <ul className="nav nav-pills nav-fill p-1 small lights blukker bg-primary rounded-3 shadow-sm" id="filtersblocks" role="tablist">
                              <li className="nav-item" role="presentation">
                                <button className="nav-link active rounded-3" id="trending" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Our Trending</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button className="nav-link rounded-3" id="mostpopular" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Most Popular</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button className="nav-link rounded-3" id="lowprice" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Lowest Price</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center g-4 mt-2">
                      {/* Single List */}
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="card list-layout-block rounded-3 p-3">
                          <div className="row">
                            <div className="col-xl-4 col-lg-3 col-md">
                              <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                <img className="img-fluid h-100 object-fit" src="https://placehold.co/1200x800" alt="img" />
                              </div>
                            </div>
                            <div className="col-xl col-lg col-md">
                              <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                <div className="d-flex align-items-center justify-content-start mb-1">
                                  <span className="label bg-light-success text-success">Denver</span>
                                </div>
                                <h4 className="fs-5 fw-bold mb-1">Wetlands Walking Tour</h4>
                                <ul className="row gx-2 p-0 excortio">
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md">Southwark</p>
                                  </li>
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md fw-bold">.</p>
                                  </li>
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md">9km from Towndown</p>
                                  </li>
                                </ul>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">Parking</span>
                                  <span className="ellipsis">WiFi</span>
                                  <span className="ellipsis">Eating</span>
                                  <span className="ellipsis">Cooling</span>
                                  <span className="ellipsis">Pet</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
                              <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
                                <div className="col-auto text-start text-md-end">
                                  <div className="text-md text-dark fw-medium">Exceptional</div>
                                  <div className="text-md text-muted-2">3,014 reviews</div>
                                </div>
                                <div className="col-auto">
                                  <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                </div>
                              </div>
                              <div className="position-relative mt-auto full-width">
                                <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                                  <span className="label bg-light-danger text-danger">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                                  <div className="text-muted-2 fw-medium text-decoration-line-through me-2">US$79</div>
                                  <div className="text-dark fw-bold fs-3">$5000</div>
                                </div>
                                <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                                  <Link to="#" className="btn btn-md btn-primary full-width fw-medium px-lg-4">See Availability<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Single List */}
                      {/* Single List */}
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="card list-layout-block rounded-3 p-3">
                          <div className="row">
                            <div className="col-xl-4 col-lg-3 col-md">
                              <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                <img className="img-fluid h-100 object-fit" src="https://placehold.co/1200x800" alt="img" />
                              </div>
                            </div>
                            <div className="col-xl col-lg col-md">
                              <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                <div className="d-flex align-items-center justify-content-start mb-1">
                                  <span className="label bg-light-success text-success">Denver</span>
                                </div>
                                <h4 className="fs-5 fw-bold mb-1">Wetlands Walking Tour</h4>
                                <ul className="row gx-2 p-0 excortio">
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md">Southwark</p>
                                  </li>
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md fw-bold">.</p>
                                  </li>
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md">9km from Towndown</p>
                                  </li>
                                </ul>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">Parking</span>
                                  <span className="ellipsis">WiFi</span>
                                  <span className="ellipsis">Eating</span>
                                  <span className="ellipsis">Cooling</span>
                                  <span className="ellipsis">Pet</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
                              <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
                                <div className="col-auto text-start text-md-end">
                                  <div className="text-md text-dark fw-medium">Exceptional</div>
                                  <div className="text-md text-muted-2">3,014 reviews</div>
                                </div>
                                <div className="col-auto">
                                  <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                </div>
                              </div>
                              <div className="position-relative mt-auto full-width">
                                <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                                  <span className="label bg-light-danger text-danger">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                                  <div className="text-muted-2 fw-medium text-decoration-line-through me-2">US$79</div>
                                  <div className="text-dark fw-bold fs-3">$5000</div>
                                </div>
                                <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                                  <Link to="#" className="btn btn-md btn-primary full-width fw-medium px-lg-4">See Availability<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Single List */}
                      {/* Offer Coupon Box */}
                      <div className="col-xl-12 col-lg12 col-md-12">
                        <div className="d-md-flex bg-success rounded-2 align-items-center justify-content-between px-3 py-3">
                          <div className="d-md-flex align-items-center justify-content-start">
                            <div className="flx-icon-first mb-md-0 mb-3">
                              <div className="square--60 circle bg-white"><i className="fa-solid fa-gift fs-3 text-success" /></div>
                            </div>
                            <div className="flx-caps-first ps-2">
                              <h6 className="fs-5 fw-medium text-light mb-0">Start Exploring The World</h6>
                              <p className="text-light mb-0">Book FlightsEffortless and Earn $50+ for each booking with Booking.com
                              </p>
                            </div>
                          </div>
                          <div className="flx-last text-md-end mt-md-0 mt-4"><button type="button" className="btn btn-whites fw-medium full-width text-dark px-xl-4">Get Started</button></div>
                        </div>
                      </div>
                      {/* Single List */}
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="card list-layout-block rounded-3 p-3">
                          <div className="row">
                            <div className="col-xl-4 col-lg-3 col-md">
                              <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                <img className="img-fluid h-100 object-fit" src="https://placehold.co/1200x800" alt="img" />
                              </div>
                            </div>
                            <div className="col-xl col-lg col-md">
                              <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                <div className="d-flex align-items-center justify-content-start mb-1">
                                  <span className="label bg-light-success text-success">Denver</span>
                                </div>
                                <h4 className="fs-5 fw-bold mb-1">Wetlands Walking Tour</h4>
                                <ul className="row gx-2 p-0 excortio">
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md">Southwark</p>
                                  </li>
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md fw-bold">.</p>
                                  </li>
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md">9km from Towndown</p>
                                  </li>
                                </ul>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">Parking</span>
                                  <span className="ellipsis">WiFi</span>
                                  <span className="ellipsis">Eating</span>
                                  <span className="ellipsis">Cooling</span>
                                  <span className="ellipsis">Pet</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
                              <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
                                <div className="col-auto text-start text-md-end">
                                  <div className="text-md text-dark fw-medium">Exceptional</div>
                                  <div className="text-md text-muted-2">3,014 reviews</div>
                                </div>
                                <div className="col-auto">
                                  <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                </div>
                              </div>
                              <div className="position-relative mt-auto full-width">
                                <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                                  <span className="label bg-light-danger text-danger">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                                  <div className="text-muted-2 fw-medium text-decoration-line-through me-2">US$79</div>
                                  <div className="text-dark fw-bold fs-3">$5000</div>
                                </div>
                                <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                                  <Link to="#" className="btn btn-md btn-primary full-width fw-medium px-lg-4">See Availability<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Single List */}
                      {/* Single List */}
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="card list-layout-block rounded-3 p-3">
                          <div className="row">
                            <div className="col-xl-4 col-lg-3 col-md">
                              <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                <img className="img-fluid h-100 object-fit" src="https://placehold.co/1200x800" alt="img" />
                              </div>
                            </div>
                            <div className="col-xl col-lg col-md">
                              <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                <div className="d-flex align-items-center justify-content-start mb-1">
                                  <span className="label bg-light-success text-success">Denver</span>
                                </div>
                                <h4 className="fs-5 fw-bold mb-1">Wetlands Walking Tour</h4>
                                <ul className="row gx-2 p-0 excortio">
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md">Southwark</p>
                                  </li>
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md fw-bold">.</p>
                                  </li>
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md">9km from Towndown</p>
                                  </li>
                                </ul>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">Parking</span>
                                  <span className="ellipsis">WiFi</span>
                                  <span className="ellipsis">Eating</span>
                                  <span className="ellipsis">Cooling</span>
                                  <span className="ellipsis">Pet</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
                              <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
                                <div className="col-auto text-start text-md-end">
                                  <div className="text-md text-dark fw-medium">Exceptional</div>
                                  <div className="text-md text-muted-2">3,014 reviews</div>
                                </div>
                                <div className="col-auto">
                                  <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                </div>
                              </div>
                              <div className="position-relative mt-auto full-width">
                                <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                                  <span className="label bg-light-danger text-danger">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                                  <div className="text-muted-2 fw-medium text-decoration-line-through me-2">US$79</div>
                                  <div className="text-dark fw-bold fs-3">$5000</div>
                                </div>
                                <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                                  <Link to="#" className="btn btn-md btn-primary full-width fw-medium px-lg-4">See Availability<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Single List */}
                      {/* Single List */}
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="card list-layout-block rounded-3 p-3">
                          <div className="row">
                            <div className="col-xl-4 col-lg-3 col-md">
                              <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                <img className="img-fluid h-100 object-fit" src="https://placehold.co/1200x800" alt="img" />
                              </div>
                            </div>
                            <div className="col-xl col-lg col-md">
                              <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                <div className="d-flex align-items-center justify-content-start mb-1">
                                  <span className="label bg-light-success text-success">Denver</span>
                                </div>
                                <h4 className="fs-5 fw-bold mb-1">Wetlands Walking Tour</h4>
                                <ul className="row gx-2 p-0 excortio">
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md">Southwark</p>
                                  </li>
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md fw-bold">.</p>
                                  </li>
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md">9km from Towndown</p>
                                  </li>
                                </ul>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">Parking</span>
                                  <span className="ellipsis">WiFi</span>
                                  <span className="ellipsis">Eating</span>
                                  <span className="ellipsis">Cooling</span>
                                  <span className="ellipsis">Pet</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
                              <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
                                <div className="col-auto text-start text-md-end">
                                  <div className="text-md text-dark fw-medium">Exceptional</div>
                                  <div className="text-md text-muted-2">3,014 reviews</div>
                                </div>
                                <div className="col-auto">
                                  <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                </div>
                              </div>
                              <div className="position-relative mt-auto full-width">
                                <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                                  <span className="label bg-light-danger text-danger">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                                  <div className="text-muted-2 fw-medium text-decoration-line-through me-2">US$79</div>
                                  <div className="text-dark fw-bold fs-3">$5000</div>
                                </div>
                                <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                                  <Link to="#" className="btn btn-md btn-primary full-width fw-medium px-lg-4">See Availability<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Single List */}
                      {/* Single List */}
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="card list-layout-block rounded-3 p-3">
                          <div className="row">
                            <div className="col-xl-4 col-lg-3 col-md">
                              <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                <img className="img-fluid h-100 object-fit" src="https://placehold.co/1200x800" alt="img" />
                              </div>
                            </div>
                            <div className="col-xl col-lg col-md">
                              <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                <div className="d-flex align-items-center justify-content-start mb-1">
                                  <span className="label bg-light-success text-success">Denver</span>
                                </div>
                                <h4 className="fs-5 fw-bold mb-1">Wetlands Walking Tour</h4>
                                <ul className="row gx-2 p-0 excortio">
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md">Southwark</p>
                                  </li>
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md fw-bold">.</p>
                                  </li>
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md">9km from Towndown</p>
                                  </li>
                                </ul>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">Parking</span>
                                  <span className="ellipsis">WiFi</span>
                                  <span className="ellipsis">Eating</span>
                                  <span className="ellipsis">Cooling</span>
                                  <span className="ellipsis">Pet</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
                              <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
                                <div className="col-auto text-start text-md-end">
                                  <div className="text-md text-dark fw-medium">Exceptional</div>
                                  <div className="text-md text-muted-2">3,014 reviews</div>
                                </div>
                                <div className="col-auto">
                                  <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                </div>
                              </div>
                              <div className="position-relative mt-auto full-width">
                                <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                                  <span className="label bg-light-danger text-danger">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                                  <div className="text-muted-2 fw-medium text-decoration-line-through me-2">US$79</div>
                                  <div className="text-dark fw-bold fs-3">$5000</div>
                                </div>
                                <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                                  <Link to="#" className="btn btn-md btn-primary full-width fw-medium px-lg-4">See Availability<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Single List */}
                      {/* Single List */}
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="card list-layout-block rounded-3 p-3">
                          <div className="row">
                            <div className="col-xl-4 col-lg-3 col-md">
                              <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                <img className="img-fluid h-100 object-fit" src="https://placehold.co/1200x800" alt="img" />
                              </div>
                            </div>
                            <div className="col-xl col-lg col-md">
                              <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                <div className="d-flex align-items-center justify-content-start mb-1">
                                  <span className="label bg-light-success text-success">Denver</span>
                                </div>
                                <h4 className="fs-5 fw-bold mb-1">Wetlands Walking Tour</h4>
                                <ul className="row gx-2 p-0 excortio">
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md">Southwark</p>
                                  </li>
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md fw-bold">.</p>
                                  </li>
                                  <li className="col-auto">
                                    <p className="text-muted-2 text-md">9km from Towndown</p>
                                  </li>
                                </ul>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">Parking</span>
                                  <span className="ellipsis">WiFi</span>
                                  <span className="ellipsis">Eating</span>
                                  <span className="ellipsis">Cooling</span>
                                  <span className="ellipsis">Pet</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
                              <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
                                <div className="col-auto text-start text-md-end">
                                  <div className="text-md text-dark fw-medium">Exceptional</div>
                                  <div className="text-md text-muted-2">3,014 reviews</div>
                                </div>
                                <div className="col-auto">
                                  <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                </div>
                              </div>
                              <div className="position-relative mt-auto full-width">
                                <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                                  <span className="label bg-light-danger text-danger">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                                  <div className="text-muted-2 fw-medium text-decoration-line-through me-2">US$79</div>
                                  <div className="text-dark fw-bold fs-3">$5000</div>
                                </div>
                                <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                                  <Link to="#" className="btn btn-md btn-primary full-width fw-medium px-lg-4">See Availability<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Single List */}
                      <div className="col-xl-12 col-lg-12 col-12">
                        <div className="pags card py-2 px-5">
                          <nav aria-label="Page navigation example">
                            <ul className="pagination m-0 p-0">
                              <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Previous">
                                  <span aria-hidden="true"><i className="fa-solid fa-arrow-left-long" /></span>
                                </Link>
                              </li>
                              <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                              <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                              <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                              <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Next">
                                  <span aria-hidden="true"><i className="fa-solid fa-arrow-right-long" /></span>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Destination Searches Lists End ================================== */}
            {/* ============================ Footer Start ================================== */}
             <Footer/>
            {/* ============================ Footer End ================================== */}
            {/* Log In Modal */}
            <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
                <div className="modal-content" id="loginmodal">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6">Sign In / Register</h4>
                    <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
                  </div>
                  <div className="modal-body">
                    <div className="modal-login-form py-4 px-md-3 px-0">
                      <form>
                        <div className="form-floating mb-4">
                          <input type="email" className="form-control" placeholder="name@example.com" />
                          <label>User Name</label>
                        </div>
                        <div className="form-floating mb-4">
                          <input type="password" className="form-control" placeholder="Password" />
                          <label>Password</label>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary full-width font--bold btn-lg">Log In</button>
                        </div>
                        <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                          <div className="modal-flex-first">
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="checkbox" id="savepassword" defaultValue="option1" />
                              <label className="form-check-label" htmlFor="savepassword">Save Password</label>
                            </div>
                          </div>
                          <div className="modal-flex-last">
                            <Link to="#" onClick={(e)=>{e.preventDefault()}} className="text-primary fw-medium">Forget Password?</Link>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="prixer px-3">
                      <div className="devider-wraps position-relative">
                        <div className="devider-text text-muted-2 text-md">Sign In with More Methods</div>
                      </div>
                    </div>
                    <div className="social-login py-4 px-2">
                      <ul className="row align-items-center justify-content-between g-3 p-0 m-0">
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 full-width"><i className="fa-brands fa-facebook color--facebook fs-2" /></Link></li>
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-whatsapp color--whatsapp fs-2" /></Link></li>
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-linkedin color--linkedin fs-2" /></Link></li>
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-dribbble color--dribbble fs-2" /></Link></li>
                        <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-twitter color--twitter fs-2" /></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="modal-footer align-items-center justify-content-center">
                    <p>Don't have an account yet?<Link to="signup.html" className="text-primary fw-medium ms-1">Sign Up</Link></p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Modal */}
            {/* Choose Currency Modal */}
            <div className="modal modal-lg fade" id="currencyModal" tabIndex={-1} aria-labelledby="currenyModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6" id="currenyModalLabel">Select Your Currency</h4>
                    <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
                  </div>
                  <div className="modal-body">
                    <div className="allCurrencylist">
                      <div className="suggestedCurrencylist-wrap mb-4">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">Suggested Currency For you</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">United State Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Pound Sterling</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency active" to="#">
                                <div className="text-dark text-md fw-medium">Indian Rupees</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Euro</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Australian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Thai Baht</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="suggestedCurrencylist-wrap">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">All Currencies</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">United State Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Property currency</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Argentine Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Azerbaijani Manat</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Australian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Bahraini Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Brazilian Real</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Bulgarian Lev</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Canadian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Chilean Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Colombian Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Danish Krone</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Egyptian Pound</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Hungarian Forint</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Japanese Yen</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Jordanian Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Kuwaiti Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Malaysian Ringgit</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCurrency" to="#">
                                <div className="text-dark text-md fw-medium">Singapore Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Choose Countries Modal */}
            <div className="modal modal-lg fade" id="countryModal" tabIndex={-1} aria-labelledby="countryModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6" id="countryModalLabel">Select Your Country</h4>
                    <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
                  </div>
                  <div className="modal-body">
                    <div className="allCountrieslist">
                      <div className="suggestedCurrencylist-wrap mb-4">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">Suggested Countries For you</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">United State Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Pound Sterling</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry active" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Indian Rupees</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Euro</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Thai Baht</div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="suggestedCurrencylist-wrap">
                        <div className="d-inline-block mb-0 ps-3">
                          <h5 className="fs-6 fw-bold">All Countries</h5>
                        </div>
                        <div className="suggestedCurrencylists">
                          <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">United State Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Property currency</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Argentine Peso</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Azerbaijani Manat</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Bahraini Dinar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Brazilian Real</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Bulgarian Lev</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Canadian Dollar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Chilean Peso</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Colombian Peso</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Danish Krone</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Egyptian Pound</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Hungarian Forint</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Japanese Yen</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Jordanian Dinar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Kuwaiti Dinar</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Malaysian Ringgit</div>
                              </Link>
                            </li>
                            <li className="col">
                              <Link className="selectCountry" to="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Singapore Dollar</div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link id="back2Top" className="top-scroll" title="Back to top" to="#"><i className="fa-solid fa-sort-up" /></Link>
          </div>
          {/* ============================================================== */}
          {/* End Wrapper */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* All Jquery */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* This page plugins */}
          {/* ============================================================== */}
        </div>
      );
    }

    export default Destination01;