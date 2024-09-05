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

const HomeRental = () => {
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
                      <li><Link to="home-stay.html"><i className="fa-solid fa-umbrella-beach me-2" />Stays</Link></li>
                      <li><Link to="home-flight.html"><i className="fa-solid fa-jet-fighter me-2" />Flights</Link></li>
                      <li><Link to="home-hotel.html"><i className="fa-solid fa-spa me-2" />Hotels</Link></li>
                      <li className="active"><Link to="home-rental.html"><i className="fa-solid fa-house-circle-check me-2" />Rental</Link></li>
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
            <div className="image-cover hero-header bg-white" style={{background: 'url(https://placehold.co/2200x1200)no-repeat'}} data-overlay={5}>
              <div className="container">
                {/* Search Form */}
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                    <div className="position-relative text-center mb-5">
                      <h1>Starts Your Trip with <span className="position-relative z-4">GeoTrip<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                            <svg width="185px" height="23px" viewBox="0 0 445.5 23">
                              <path className="fill-white opacity-7" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z">
                              </path>
                            </svg>
                          </span></span></h1>
                      <p className="fs-5 fw-light">Take a little break from the work strss of everyday. Discover plan trip and
                        explore beautiful destinations.</p>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="search-wrap with-label bg-white rounded-3 p-3 pt-4">
                      <div className="row gy-3 gx-md-3 gx-sm-2">
                        <div className="col-xl-8 col-lg-7 col-md-12">
                          <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                              <div className="form-group border rounded-1 mb-0">
                                <label>Where</label>
                                <select className="goingto form-control border-0" name="leaving[]" multiple="multiple">
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
                                <label>Choose Date</label>
                                <input type="text" className="form-control fw-bold" placeholder="Check-In & Check-Out" id="basicDate" readOnly="readonly" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-12">
                          <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                              <div className="form-group mb-0">
                                <label>Members</label>
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
                                <button type="button" className="btn btn-primary full-width rounded-1 fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
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
            {/* ============================ Offers Start ================================== */}
            <section className="py-5">
              <div className="container">
                <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="pop-touritems">
                      <div className="card bg-light-success rounded-3 p-4 m-0">
                        <div className="card-body py-3 px-1">
                          <div className="position-relative">
                            <div className="offers-pic"><img src="https://placehold.co/300x100" className="img-fluid rounded" width={150} alt="" /></div>
                          </div>
                          <div className="position-relative py-4 my-1">
                            <span className="mb-1 text-dark fw-medium">Flat</span>
                            <h4 className="mb-1 text-success">$899 off</h4>
                            <h6 className="fw-normal fw-medium">On Domestic Flights</h6>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="bg-light-success border border-2 border-success br-dashed rounded-2 px-3 py-2">
                              <h5 className="fw-bold user-select-all text-success mb-0">LOG125F</h5>
                            </div>
                            <Link to="#" className="nav-link text-success"><i className="fa-solid fa-arrow-right" /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="pop-touritems">
                      <div className="card bg-light-purple rounded-3 p-4 m-0">
                        <div className="card-body py-3 px-1">
                          <div className="position-relative">
                            <div className="offers-pic"><img src="https://placehold.co/300x100" className="img-fluid rounded" width={150} alt="" />
                            </div>
                          </div>
                          <div className="position-relative py-4 my-1">
                            <span className="mb-1 text-dark fw-medium">Flat</span>
                            <h4 className="mb-1 text-purple">$899 off</h4>
                            <h6 className="fw-normal fw-medium">On Domestic Flights</h6>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="bg-light-purple border border-2 border-purple br-dashed rounded-2 px-3 py-2">
                              <h5 className="fw-bold user-select-all text-purple mb-0">INT285</h5>
                            </div>
                            <Link to="#" className="nav-link text-purple"><i className="fa-solid fa-arrow-right" /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="pop-touritems">
                      <div className="card bg-light-danger rounded-3 p-4 m-0">
                        <div className="card-body py-3 px-1">
                          <div className="position-relative">
                            <div className="offers-pic"><img src="https://placehold.co/300x100" className="img-fluid rounded" width={150} alt="" /></div>
                          </div>
                          <div className="position-relative py-4 my-1">
                            <span className="mb-1 text-dark fw-medium">Flat</span>
                            <h4 className="mb-1 text-danger">$899 off</h4>
                            <h6 className="fw-normal fw-medium">On Domestic Flights</h6>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="bg-light-danger border border-2 border-danger br-dashed rounded-2 px-3 py-2">
                              <h5 className="fw-bold user-select-all text-danger mb-0">LOG125F</h5>
                            </div>
                            <Link to="#" className="nav-link text-danger"><i className="fa-solid fa-arrow-right" /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="pop-touritems">
                      <div className="card bg-light-warning rounded-3 p-4 m-0">
                        <div className="card-body py-3 px-1">
                          <div className="position-relative">
                            <div className="offers-pic"><img src="https://placehold.co/300x100" className="img-fluid rounded" width={150} alt="" /></div>
                          </div>
                          <div className="position-relative py-4 my-1">
                            <span className="mb-1 text-dark fw-medium">Flat</span>
                            <h4 className="mb-1 text-warning">$899 off</h4>
                            <h6 className="fw-normal fw-medium">On Domestic Flights</h6>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="bg-light-warning border border-2 border-warning br-dashed rounded-2 px-3 py-2">
                              <h5 className="fw-bold user-select-all text-warning mb-0">LOG125F</h5>
                            </div>
                            <Link to="#" className="nav-link text-warning"><i className="fa-solid fa-arrow-right" /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Offers End ================================== */}
            {/* ============================ Popular Hotels Start ================================== */}
            <section className="py-0">
              <div className="container">
                <div className="row align-items-center justify-content-between mb-3">
                  <div className="col-8">
                    <div className="upside-heading">
                      <h5 className="fw-bold fs-6 m-0">Explore Hot Rental Properties</h5>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-end grpx-btn">
                      <Link to="#" className="btn btn-light-primary btn-md fw-medium">More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12 p-0">
                    <div className="main-carousel cols-3 dots-full">
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 border br-dashed m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="d-flex align-items-start justify-content-start flex-column">
                                  <span className="city-destination label text-success bg-light-success mb-1">House</span>
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Apogee Property Advisors</span>
                                  </h4>
                                </div>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">3 Beds</span>
                                  <span className="ellipsis">2 Baths</span>
                                  <span className="ellipsis">2100 sqft</span>
                                  <span className="ellipsis">1 Store</span>
                                </div>
                              </div>
                              <div className="flight-footer">
                                <div className="epocsic">
                                  <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                                  <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                                </div>
                                <div className="rates">
                                  <div className="star-rates">
                                    <i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" />
                                  </div>
                                  <div className="rat-reviews">
                                    <strong>4.6</strong><span>(142 Reviews)</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 border br-dashed m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="d-flex align-items-start justify-content-start flex-column">
                                  <span className="city-destination label text-success bg-light-success mb-1">Villa</span>
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Haven Group Real Estate</span>
                                  </h4>
                                </div>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">3 Beds</span>
                                  <span className="ellipsis">2 Baths</span>
                                  <span className="ellipsis">2100 sqft</span>
                                  <span className="ellipsis">1 Store</span>
                                </div>
                              </div>
                              <div className="flight-footer">
                                <div className="epocsic">
                                  <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                                  <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                                </div>
                                <div className="rates">
                                  <div className="star-rates">
                                    <i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" />
                                  </div>
                                  <div className="rat-reviews">
                                    <strong>4.6</strong><span>(142 Reviews)</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 border br-dashed m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="d-flex align-items-start justify-content-start flex-column">
                                  <span className="city-destination label text-success bg-light-success mb-1">Apartment</span>
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Larkspur Partners Realty</span>
                                  </h4>
                                </div>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">3 Beds</span>
                                  <span className="ellipsis">2 Baths</span>
                                  <span className="ellipsis">2100 sqft</span>
                                  <span className="ellipsis">1 Store</span>
                                </div>
                              </div>
                              <div className="flight-footer">
                                <div className="epocsic">
                                  <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                                  <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                                </div>
                                <div className="rates">
                                  <div className="star-rates">
                                    <i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" />
                                  </div>
                                  <div className="rat-reviews">
                                    <strong>4.6</strong><span>(142 Reviews)</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 border br-dashed m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="d-flex align-items-start justify-content-start flex-column">
                                  <span className="city-destination label text-success bg-light-success mb-1">Condos</span>
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Agile Real Estate Group</span>
                                  </h4>
                                </div>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">3 Beds</span>
                                  <span className="ellipsis">2 Baths</span>
                                  <span className="ellipsis">2100 sqft</span>
                                  <span className="ellipsis">1 Store</span>
                                </div>
                              </div>
                              <div className="flight-footer">
                                <div className="epocsic">
                                  <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                                  <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                                </div>
                                <div className="rates">
                                  <div className="star-rates">
                                    <i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" />
                                  </div>
                                  <div className="rat-reviews">
                                    <strong>4.6</strong><span>(142 Reviews)</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 border br-dashed m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="d-flex align-items-start justify-content-start flex-column">
                                  <span className="city-destination label text-success bg-light-success mb-1">Building</span>
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Found Property Group</span>
                                  </h4>
                                </div>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">3 Beds</span>
                                  <span className="ellipsis">2 Baths</span>
                                  <span className="ellipsis">2100 sqft</span>
                                  <span className="ellipsis">1 Store</span>
                                </div>
                              </div>
                              <div className="flight-footer">
                                <div className="epocsic">
                                  <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                                  <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                                </div>
                                <div className="rates">
                                  <div className="star-rates">
                                    <i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" />
                                  </div>
                                  <div className="rat-reviews">
                                    <strong>4.6</strong><span>(142 Reviews)</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Popular Hotels End ================================== */}
            {/* ============================ Popular Location Start ================================== */}
            <section className="py-5">
              <div className="container">
                <div className="row align-items-center justify-content-between mb-3">
                  <div className="col-8">
                    <div className="upside-heading">
                      <h5 className="fw-bold fs-6 m-0">Explore Top Destinations</h5>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-end grpx-btn">
                      <Link to="#" className="btn btn-light-primary btn-md fw-medium">More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12 p-0">
                    <div className="main-carousel cols-4 dots-full">
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="cardCities cursor rounded-2">
                          <div className="cardCities-image ratio ratio-4">
                            <img src="https://placehold.co/650x850" className="img-fluid object-fit" alt="img" />
                          </div>
                          <div className="citiesCard-content d-flex flex-column justify-content-between text-center px-4 py-4">
                            <div className="cardCities-bg" />
                            <div className="citiesCard-topcaps">
                              <div className="d-flex align-items-center justify-content-center flex-wrap">
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">10 Hotels</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">25 Flights</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">17 Cars</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">22 Tours</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">36 Activities</div>
                              </div>
                            </div>
                            <div className="citiesCard-bottomcaps">
                              <h4 className="text-light fs-3 mb-3">San Jose</h4>
                              <button className="btn btn-whitener full-width fw-medium">Discover<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="cardCities cursor rounded-2">
                          <div className="cardCities-image ratio ratio-4">
                            <img src="https://placehold.co/650x850" className="img-fluid object-fit" alt="img" />
                          </div>
                          <div className="citiesCard-content d-flex flex-column justify-content-between text-center px-4 py-4">
                            <div className="cardCities-bg" />
                            <div className="citiesCard-topcaps">
                              <div className="d-flex align-items-center justify-content-center flex-wrap">
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">10 Hotels</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">25 Flights</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">17 Cars</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">22 Tours</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">36 Activities</div>
                              </div>
                            </div>
                            <div className="citiesCard-bottomcaps">
                              <h4 className="text-light fs-3 mb-3">Houston</h4>
                              <button className="btn btn-whitener full-width fw-medium">Discover<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="cardCities cursor rounded-2">
                          <div className="cardCities-image ratio ratio-4">
                            <img src="https://placehold.co/650x850" className="img-fluid object-fit" alt="img" />
                          </div>
                          <div className="citiesCard-content d-flex flex-column justify-content-between text-center px-4 py-4">
                            <div className="cardCities-bg" />
                            <div className="citiesCard-topcaps">
                              <div className="d-flex align-items-center justify-content-center flex-wrap">
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">10 Hotels</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">25 Flights</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">17 Cars</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">22 Tours</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">36 Activities</div>
                              </div>
                            </div>
                            <div className="citiesCard-bottomcaps">
                              <h4 className="text-light fs-3 mb-3">San Francisco</h4>
                              <button className="btn btn-whitener full-width fw-medium">Discover<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="cardCities cursor rounded-2">
                          <div className="cardCities-image ratio ratio-4">
                            <img src="https://placehold.co/650x850" className="img-fluid object-fit" alt="img" />
                          </div>
                          <div className="citiesCard-content d-flex flex-column justify-content-between text-center px-4 py-4">
                            <div className="cardCities-bg" />
                            <div className="citiesCard-topcaps">
                              <div className="d-flex align-items-center justify-content-center flex-wrap">
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">10 Hotels</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">25 Flights</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">17 Cars</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">22 Tours</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">36 Activities</div>
                              </div>
                            </div>
                            <div className="citiesCard-bottomcaps">
                              <h4 className="text-light fs-3 mb-3">San Diego</h4>
                              <button className="btn btn-whitener full-width fw-medium">Discover<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="cardCities cursor rounded-2">
                          <div className="cardCities-image ratio ratio-4">
                            <img src="https://placehold.co/800x800" className="img-fluid object-fit" alt="img" />
                          </div>
                          <div className="citiesCard-content d-flex flex-column justify-content-between text-center px-4 py-4">
                            <div className="cardCities-bg" />
                            <div className="citiesCard-topcaps">
                              <div className="d-flex align-items-center justify-content-center flex-wrap">
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">10 Hotels</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">25 Flights</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">17 Cars</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">22 Tours</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">36 Activities</div>
                              </div>
                            </div>
                            <div className="citiesCard-bottomcaps">
                              <h4 className="text-light fs-3 mb-3">Los Angeles</h4>
                              <button className="btn btn-whitener full-width fw-medium">Discover<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="cardCities cursor rounded-2">
                          <div className="cardCities-image ratio ratio-4">
                            <img src="https://placehold.co/800x800" className="img-fluid object-fit" alt="img" />
                          </div>
                          <div className="citiesCard-content d-flex flex-column justify-content-between text-center px-4 py-4">
                            <div className="cardCities-bg" />
                            <div className="citiesCard-topcaps">
                              <div className="d-flex align-items-center justify-content-center flex-wrap">
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">10 Hotels</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">25 Flights</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">17 Cars</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">22 Tours</div>
                                <div className="bg-transparents text-light text-xs rounded fw-medium p-2 m-1">36 Activities</div>
                              </div>
                            </div>
                            <div className="citiesCard-bottomcaps">
                              <h4 className="text-light fs-3 mb-3">New Orleans</h4>
                              <button className="btn btn-whitener full-width fw-medium">Discover<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Popular Location End ================================== */}
            {/* ============================ Popular Routes Start ================================== */}
            <section className="py-0">
              <div className="container">
                <div className="row align-items-center justify-content-between mb-3">
                  <div className="col-8">
                    <div className="upside-heading">
                      <h5 className="fw-bold fs-6 m-0">Explore Top Domestic Routes</h5>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-end grpx-btn">
                      <Link to="#" className="btn btn-light-primary btn-md fw-medium">More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12 p-0">
                    <div className="main-carousel cols-4 dots-full">
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="flight-search.html" className="card rounded-3 border br-dashed h-100 m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <h4 className="city fs-6 m-0 fw-bold">
                                  <span>New York</span>
                                  <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                      <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  <span>Los Angeles</span>
                                </h4>
                                <p className="detail ellipsis-container">
                                  <span className="ellipsis-item__normal">Round-trip</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">3 days</span>
                                </p>
                              </div>
                              <div className="flight-foots">
                                <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="flight-search.html" className="card rounded-3 border br-dashed h-100 m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <h4 className="city fs-6 m-0 fw-bold">
                                  <span>New York</span>
                                  <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                      <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  <span>Los Angeles</span>
                                </h4>
                                <p className="detail ellipsis-container">
                                  <span className="ellipsis-item__normal">Round-trip</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">3 days</span>
                                </p>
                              </div>
                              <div className="flight-foots">
                                <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="flight-search.html" className="card rounded-3 border br-dashed h-100 m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <h4 className="city fs-6 m-0 fw-bold">
                                  <span>New York</span>
                                  <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                      <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  <span>Los Angeles</span>
                                </h4>
                                <p className="detail ellipsis-container">
                                  <span className="ellipsis-item__normal">Round-trip</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">3 days</span>
                                </p>
                              </div>
                              <div className="flight-foots">
                                <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="flight-search.html" className="card rounded-3 border br-dashed h-100 m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <h4 className="city fs-6 m-0 fw-bold">
                                  <span>New York</span>
                                  <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                      <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  <span>Los Angeles</span>
                                </h4>
                                <p className="detail ellipsis-container">
                                  <span className="ellipsis-item__normal">Round-trip</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">3 days</span>
                                </p>
                              </div>
                              <div className="flight-foots">
                                <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="flight-search.html" className="card rounded-3 border br-dashed h-100 m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <h4 className="city fs-6 m-0 fw-bold">
                                  <span>New York</span>
                                  <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                      <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  <span>Los Angeles</span>
                                </h4>
                                <p className="detail ellipsis-container">
                                  <span className="ellipsis-item__normal">Round-trip</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">3 days</span>
                                </p>
                              </div>
                              <div className="flight-foots">
                                <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="flight-search.html" className="card rounded-3 border br-dashed h-100 m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <h4 className="city fs-6 m-0 fw-bold">
                                  <span>New York</span>
                                  <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                      <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  <span>Los Angeles</span>
                                </h4>
                                <p className="detail ellipsis-container">
                                  <span className="ellipsis-item__normal">Round-trip</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">3 days</span>
                                </p>
                              </div>
                              <div className="flight-foots">
                                <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Popular Routes End ================================== */}
            {/* ============================ Google & IOS App Start ================================== */}
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="card rounded-3 border-0 bg-light-primary border-1 m-0 appLink-card p-xl-4 p-3">
                      <div className="card-body">
                        <div className="row align-items-center justify-content-between">
                          <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12">
                            <div className="appLink-captions">
                              <div className="appLink-captions d-flex align-items-center justify-content-start">
                                <div className="d-inline-block">
                                  <img src="https://placehold.co/450x450" className="img-fluid" width={65} alt="" />
                                </div>
                                <div className="ps-3 d-block">
                                  <h2 className="fw-bold fs-2 mb-1">Download App Now!</h2>
                                  <p>Use Code <span className="text-primary text-uppercase fw-medium">Welcome</span>and get <span className="text-success text-uppercase fw-medium">Flat 20%</span> OFF* on your first domestic
                                    flight booking</p>
                                </div>
                              </div>
                              <div className="appLink-forms mt-4">
                                <form>
                                  <div className="row align-items-center justify-content-start g-0">
                                    <div className="col-xl-9 col-lg-10 col-md-10 col-sm-12">
                                      <div className="appLink-frmbox bg-white border br-dashed rounded-2 p-2">
                                        <div className="row align-items-center g-0">
                                          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                            <div className="form-group position-relative m-0">
                                              <input type="text" className="form-control form-control-md bold border-0 ps-5" placeholder="Enter Mobile Number" />
                                              <span className="position-absolute top-50 ms-4 translate-middle fw-medium text-dark">+91 -
                                              </span>
                                            </div>
                                          </div>
                                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                            <button type="button" className="btn btn-md btn-primary full-width fw-medium">Get App
                                              Link</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
                            <div className="appLink-buttons text-md-end mt-md-0 mt-4">
                              <div className="app-wrap">
                                <Link to="#" className="d-inline-flex">
                                  <div className="cardApp-box bg-dark border-primary d-inline-flex py-3 px-4 rounded align-items-center mb-3">
                                    <div className="cardApp-icon"><i className="fa-brands fa-google-play text-light fs-1" /></div>
                                    <div className="cardApp-caption text-start ps-3">
                                      <p className="text-light opacity-75 text-uppercase m-0">Get It On</p>
                                      <h5 className="fw-bold text-light fs-5 m-0">Google Play</h5>
                                    </div>
                                  </div>
                                </Link>
                                <Link to="#" className="d-inline-flex">
                                  <div className="cardApp-box bg-primary d-inline-flex py-3 px-4 rounded align-items-center">
                                    <div className="cardApp-icon"><i className="fa-brands fa-apple text-light fs-1" /></div>
                                    <div className="cardApp-caption text-start ps-3">
                                      <p className="text-light opacity-75 text-uppercase m-0">Download On The</p>
                                      <h5 className="fw-bold text-light fs-5 m-0">App Store</h5>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Google & IOS App End ================================== */}
            {/* ============================ Featured Rental Property Start ================================== */}
            <section className="py-0">
              <div className="container">
                <div className="row align-items-center justify-content-between mb-3">
                  <div className="col-8">
                    <div className="upside-heading">
                      <h5 className="fw-bold fs-6 m-0">Featured Rental In Australia</h5>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-end grpx-btn">
                      <Link to="#" className="btn btn-light-primary btn-md fw-medium">More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center gy-4 gx-3">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <Link className="recommend-module-card" to="#">
                      <div className="bokker-bg-full" style={{background: 'url(https://placehold.co/650x850)no-repeat'}} />
                      <div className="bokker-content">
                        <div className="bokker-content-text fs-4 lh-base">Discover great deals on hotels around the world</div>
                        <div className="bokker-content-button">Go Now</div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="d-flex align-items-start justify-content-start flex-column">
                              <span className="city-destination label text-success bg-light-success mb-1">House</span>
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>Red Coral Realty</span>
                              </h4>
                            </div>
                            <div className="detail ellipsis-container mt-3">
                              <span className="ellipsis">3 Beds</span>
                              <span className="ellipsis">2 Baths</span>
                              <span className="ellipsis">2100 sqft</span>
                            </div>
                          </div>
                          <div className="flight-footer">
                            <div className="epocsic">
                              <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$492</span>
                              </h5>
                            </div>
                            <div className="rates">
                              <div className="star-rates">
                                <i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" />
                              </div>
                              <div className="rat-reviews">
                                <strong>4.6</strong><span>(142 Reviews)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="d-flex align-items-start justify-content-start flex-column">
                              <span className="city-destination label text-success bg-light-success mb-1">Villa</span>
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>Bottom Line Realty</span>
                              </h4>
                            </div>
                            <div className="detail ellipsis-container mt-3">
                              <span className="ellipsis">3 Beds</span>
                              <span className="ellipsis">2 Baths</span>
                              <span className="ellipsis">2100 sqft</span>
                            </div>
                          </div>
                          <div className="flight-footer">
                            <div className="epocsic">
                              <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$492</span>
                              </h5>
                            </div>
                            <div className="rates">
                              <div className="star-rates">
                                <i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" />
                              </div>
                              <div className="rat-reviews">
                                <strong>4.6</strong><span>(142 Reviews)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="d-flex align-items-start justify-content-start flex-column">
                              <span className="city-destination label text-success bg-light-success mb-1">Apartment</span>
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>Acuta Real Estate</span>
                              </h4>
                            </div>
                            <div className="detail ellipsis-container mt-3">
                              <span className="ellipsis">3 Beds</span>
                              <span className="ellipsis">2 Baths</span>
                              <span className="ellipsis">2100 sqft</span>
                            </div>
                          </div>
                          <div className="flight-footer">
                            <div className="epocsic">
                              <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$492</span>
                              </h5>
                            </div>
                            <div className="rates">
                              <div className="star-rates">
                                <i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" />
                              </div>
                              <div className="rat-reviews">
                                <strong>4.6</strong><span>(142 Reviews)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Featured Rental Property End ================================== */}
            {/* ================================ Article Section Start ======================================= */}
            <section className="py-5">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Trending &amp; Popular Articles</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center g-4">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="blogGrid-wrap d-flex flex-column h-100">
                      <div className="blogGrid-pics">
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog img" /></Link>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Destination</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</Link></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="blogGrid-wrap d-flex flex-column h-100">
                      <div className="blogGrid-pics">
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog img" /></Link>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Journey</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</Link></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="blogGrid-wrap d-flex flex-column h-100">
                      <div className="blogGrid-pics">
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog img" /></Link>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Business</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</Link></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ================================ Article Section Start ======================================= */}
            {/* ============================ Call To Action Start ================================== */}
            <div className="position-relative bg-cover py-5 bg-dark" style={{background: 'url(assets/img/bg2.png)no-repeat'}}>
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="calltoAction-wraps position-relative py-5 px-4">
                      <div className="ht-40" />
                      <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-10 col-sm-11 text-center">
                          <div className="calltoAction-title mb-5">
                            <h4 className="text-light fs-2 fw-bold lh-base m-0">Subscribe &amp; Get<br />Special Discount with GeoTrip.com
                            </h4>
                          </div>
                          <div className="newsletter-forms mt-md-0 mt-4">
                            <form>
                              <div className="row align-items-center justify-content-between bg-white rounded-3 p-2 gx-0">
                                <div className="col-xl-9 col-lg-8 col-md-8">
                                  <div className="form-group m-0">
                                    <input type="text" className="form-control bold ps-1 border-0" placeholder="Enter Your Mail!" />
                                  </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4">
                                  <div className="form-group m-0">
                                    <button type="button" className="btn btn-primary fw-medium full-width">Submit<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="ht-40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================ Call To Action Start ================================== */}
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
            {/* Video Modal */}
            <div className="modal fade" id="popup-video" tabIndex={-1} role="dialog" aria-labelledby="popupvideo" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" id="popupvideo">
                  <iframe className="embed-responsive-item full-width" title="YouTube video: Example Title" height={480} src="https://www.youtube.com/embed/qN3OueBm9F4?rel=0" frameBorder={0} allowFullScreen />
                </div>
              </div>
            </div>
            {/* End Video Modal */}
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

export default HomeRental;