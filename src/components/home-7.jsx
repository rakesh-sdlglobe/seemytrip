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
import { Link } from 'react-router-dom';
import Header02 from './header02';
import Footer from './footer';

const Home07 = () => {
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
            <Header02/>
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
                      <h1>Book Your Perfect Escape</h1>
                      <p className="fs-5 fw-light">Take a little break from the work strss of everyday. Discover plan trip and
                        explore beautiful destinations.</p>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="navTabbs d-flex align-items-center justify-content-center w-100 mb-2">
                      <ul className="nav nav-pills lights medium justify-content-center mb-3" id="tour-pills-tab" role="tablist">
                        <li className="nav-item">
                          <Link className="nav-link active" data-bs-toggle="tab" to="#hotels"><i className="fa-solid fa-hotel me-2" />Hotels</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-bs-toggle="tab" to="#flights"><i className="fa-solid fa-jet-fighter me-2" />Flights</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-bs-toggle="tab" to="#tours"><i className="fa-solid fa-globe me-2" />Tour</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-bs-toggle="tab" to="#cabs"><i className="fa-solid fa-car me-2" />Cab</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="search-wrap bg-transparents rounded-3 p-3">
                      <div className="tab-content">
                        <div className="tab-pane show active" id="hotels">
                          <div className="row gy-2 gx-md-2 gx-sm-2">
                            <div className="col-xl-8 col-lg-7 col-md-12">
                              <div className="row gy-3 gx-md-2 gx-sm-2">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                  <div className="form-group hdd-arrow mb-0">
                                    <select className="goingto form-control fw-bold hdd-arrow">
                                      <option value>Select</option>
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
                                    <input type="text" className="form-control fw-bold" placeholder="Check-In & Check-Out" id="checkinout" readOnly="readonly" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-12">
                              <div className="row gy-3 gx-md-2 gx-sm-2">
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                  <div className="form-group mb-0">
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
                                    <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>	
                        </div>
                        <div className="tab-pane" id="flights">
                          <div className="row gx-lg-2 g-3">
                            <div className="col-xl-5 col-lg-5 col-md-12">
                              <div className="row gy-3 gx-lg-2 gx-3">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                  <div className="form-group hdd-arrow mb-0">
                                    <select className="leaving form-control fw-bold">
                                      <option value>Select</option>
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
                                  <div className="btn-flip-icon mt-md-0">
                                    <button className="p-0 m-0 text-primary"><i className="fa-solid fa-right-left" /></button>
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                  <div className="form-groupp hdd-arrow mb-0">
                                    <select className="goingto form-control fw-bold">
                                      <option value>Select</option>
                                      <option value="lv">Las Vegas</option>
                                      <option value="la">Los Angeles</option>
                                      <option value="kc">Kansas City</option>
                                      <option value="no">New Orleans</option>
                                      <option value="kc">Jacksonville</option>
                                      <option value="lb">Long Beach</option>
                                      <option value="cl">Columbus</option>
                                      <option value="cn">Canada</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12">
                              <div className="row gy-3 gx-lg-2 gx-3">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                  <div className="form-group mb-0">
                                    <input className="form-control fw-bold choosedate" type="text" placeholder="Departure.." readOnly="readonly" />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                  <div className="form-group mb-0">
                                    <input className="form-control fw-bold choosedate" type="text" placeholder="Return.." readOnly="readonly" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-12">
                              <div className="form-groupp hdd-arrow mb-0">
                                <select className="occupant form-control fw-bold">
                                  <option value>Select</option>
                                  <option value="lv">01 Adult</option>
                                  <option value="la">02 Adult</option>
                                  <option value="kc">03 Adult</option>
                                  <option value="no">04 Adult</option>
                                  <option value="kc">05 Adult</option>
                                  <option value="lb">06 Adult</option>
                                  <option value="cl">07 Adult</option>
                                  <option value="cn">08 Adult</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-1 col-lg-1 col-md-12">
                              <div className="form-group mb-0">
                                <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass fs-5" /></button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="tours">
                          <div className="row gy-3 gx-md-2 gx-sm-2">
                            <div className="col-xl-8 col-lg-7 col-md-12">
                              <div className="row gy-3 gx-md-2 gx-sm-2">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                  <div className="form-group hdd-arrow mb-0">
                                    <select className="goingto form-control fw-bold">
                                      <option value>Select</option>
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
                                    <input type="text" className="form-control choosedate fw-bold" placeholder="Choose Date" readOnly="readonly" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-12">
                              <div className="row gy-3 gx-md-2 gx-sm-2">
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                  <div className="form-group hdd-arrow mb-0">
                                    <select className="tour form-control fw-bold">
                                      <option value>Select</option>
                                      <option value="ny">Family Package</option>
                                      <option value="sd">Honymoon Package</option>
                                      <option value="sj">Group Package</option>
                                      <option value="ph">Desert</option>
                                      <option value="nl">History</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                  <div className="form-group mb-0">
                                    <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="cabs">
                          <div className="row gy-3 gx-md-2 gx-sm-2">
                            <div className="col-xl-8 col-lg-7 col-md-12">
                              <div className="row gy-3 gx-md-2 gx-sm-2">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                  <div className="form-group hdd-arrow mb-0">
                                    <select className="pickup form-control fw-bold">
                                      <option value>Select</option>
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
                                  <div className="form-group hdd-arrow mb-0">
                                    <select className="drop form-control fw-bold">
                                      <option value>Select</option>
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
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-12">
                              <div className="row gy-3 gx-md-2 gx-sm-2">
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                  <div className="form-group mb-0">
                                    <input type="text" className="form-control choosedate fw-bold" placeholder="Choose Pickup Date" readOnly="readonly" />
                                  </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                  <div className="form-group mb-0">
                                    <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                                  </div>
                                </div>
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
            <section className="pt-5">
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
                            <img src="https://placehold.co/650x850" className="img-fluid object-fit" alt="image" />
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
                            <img src="https://placehold.co/650x850" className="img-fluid object-fit" alt="image" />
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
                            <img src="https://placehold.co/650x850" className="img-fluid object-fit" alt="image" />
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
                            <img src="https://placehold.co/650x850" className="img-fluid object-fit" alt="image" />
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
                            <img src="https://placehold.co/800x800" className="img-fluid object-fit" alt="image" />
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
                            <img src="https://placehold.co/800x800" className="img-fluid object-fit" alt="image" />
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
            {/* ============================ Locations Design Start ================================== */}
            <section className="gray-simple">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Popular Location To Stay</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-3">
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">New York</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">10 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">5 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">Los Angeles</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">12 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">4 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">San Diego</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">08 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">6 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">San Francisco</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">32 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">12 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">Houston</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">22 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">16 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">San Jose</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">25 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">15 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">Denver</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">29 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">14 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                      <div className="destination-card-wraps position-relative">
                        <div className="destination-card-thumbs">
                          <div className="destinations-pics"><Link to="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></Link>
                          </div>
                        </div>
                        <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                          <div className="exploterr-text">
                            <h3 className="text-light fw-bold mb-1">California</h3>
                            <p className="detail ellipsis-container text-light">
                              <span className="ellipsis-item__normal">22 hotels</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">12 Rental</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Locations Design Start ================================== */}
            {/* ============================ All car List Start ================================== */}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Our Awesome Vehicles</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center gy-4 gx-xl-3 gx-lg-4 gx-4">
                  {/* Single */}
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 shadow-wrap m-0">
                        <div className="flight-thumb-wrapper">
                          <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                            <div className="label bg-primary text-light d-inline-flex align-items-center justify-content-center">
                              <span className="svg-icon text-light svg-icon-2hx me-1">
                                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                  <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                </svg>
                              </span>600Kms included. After that $15/Kms
                            </div>
                          </div>
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-4 m-0 fw-bold">
                              <span>Carmy Accord</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">SEDAN</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">AC</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">5 Seats</span>
                            </p>
                            <div className="touritem-centrio mt-4">
                              <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                  Cancellation Till 10 Aug 23</span></div>
                              <div className="aments-lists mt-2">
                                <div className="detail ellipsis-container mt-1">
                                  <span className="ellipsis">Manual</span>
                                  <span className="ellipsis">1 Large bag</span>
                                  <span className="ellipsis">1 Small bag</span>
                                  <span className="ellipsis">Diesel</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="trsms-foots mt-4">
                            <div className="flts-flex d-flex align-items-end justify-content-between">
                              <div className="flts-flex-strat">
                                <div className="d-flex align-items-center justify-content-start">
                                  <span className="label bg-light-danger text-danger">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div className="text-dark fw-bold fs-4">US$59</div>
                                  <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                </div>
                              </div>
                              <div className="flts-flex-end">
                                <div className="row align-items-center justify-content-end gx-2">
                                  <div className="col-auto text-start text-md-end">
                                    <div className="text-md text-dark fw-medium">Exceptional</div>
                                    <div className="text-md text-muted-2">3,014 reviews</div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Single */}
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 shadow-wrap m-0">
                        <div className="flight-thumb-wrapper">
                          <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                            <div className="label bg-primary text-light d-inline-flex align-items-center justify-content-center">
                              <span className="svg-icon text-light svg-icon-2hx me-1">
                                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                  <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                </svg>
                              </span>600Kms included. After that $15/Kms
                            </div>
                          </div>
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-4 m-0 fw-bold">
                              <span>Audi, BMW</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Hatchback</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">AC</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">5 Seats</span>
                            </p>
                            <div className="touritem-centrio mt-4">
                              <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                  Cancellation Till 10 Aug 23</span></div>
                              <div className="aments-lists mt-2">
                                <div className="detail ellipsis-container mt-1">
                                  <span className="ellipsis">Manual</span>
                                  <span className="ellipsis">1 Large bag</span>
                                  <span className="ellipsis">1 Small bag</span>
                                  <span className="ellipsis">Diesel</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="trsms-foots mt-4">
                            <div className="flts-flex d-flex align-items-end justify-content-between">
                              <div className="flts-flex-strat">
                                <div className="d-flex align-items-center justify-content-start">
                                  <span className="label bg-light-danger text-danger">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div className="text-dark fw-bold fs-4">US$59</div>
                                  <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                </div>
                              </div>
                              <div className="flts-flex-end">
                                <div className="row align-items-center justify-content-end gx-2">
                                  <div className="col-auto text-start text-md-end">
                                    <div className="text-md text-dark fw-medium">Exceptional</div>
                                    <div className="text-md text-muted-2">3,014 reviews</div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Single */}
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 shadow-wrap m-0">
                        <div className="flight-thumb-wrapper">
                          <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                            <div className="label bg-primary text-light d-inline-flex align-items-center justify-content-center">
                              <span className="svg-icon text-light svg-icon-2hx me-1">
                                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                  <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                </svg>
                              </span>600Kms included. After that $15/Kms
                            </div>
                          </div>
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-4 m-0 fw-bold">
                              <span>Ertiga, Xylo</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">LUX</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">AC</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">5 Seats</span>
                            </p>
                            <div className="touritem-centrio mt-4">
                              <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                  Cancellation Till 10 Aug 23</span></div>
                              <div className="aments-lists mt-2">
                                <div className="detail ellipsis-container mt-1">
                                  <span className="ellipsis">Manual</span>
                                  <span className="ellipsis">1 Large bag</span>
                                  <span className="ellipsis">1 Small bag</span>
                                  <span className="ellipsis">Diesel</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="trsms-foots mt-4">
                            <div className="flts-flex d-flex align-items-end justify-content-between">
                              <div className="flts-flex-strat">
                                <div className="d-flex align-items-center justify-content-start">
                                  <span className="label bg-light-danger text-danger">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div className="text-dark fw-bold fs-4">US$59</div>
                                  <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                </div>
                              </div>
                              <div className="flts-flex-end">
                                <div className="row align-items-center justify-content-end gx-2">
                                  <div className="col-auto text-start text-md-end">
                                    <div className="text-md text-dark fw-medium">Exceptional</div>
                                    <div className="text-md text-muted-2">3,014 reviews</div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Single */}
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 shadow-wrap m-0">
                        <div className="flight-thumb-wrapper">
                          <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                            <div className="label bg-primary text-light d-inline-flex align-items-center justify-content-center">
                              <span className="svg-icon text-light svg-icon-2hx me-1">
                                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                  <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                </svg>
                              </span>600Kms included. After that $15/Kms
                            </div>
                          </div>
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-4 m-0 fw-bold">
                              <span>Suv, Innova Crysta</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">SUV</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">AC</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">5 Seats</span>
                            </p>
                            <div className="touritem-centrio mt-4">
                              <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                  Cancellation Till 10 Aug 23</span></div>
                              <div className="aments-lists mt-2">
                                <div className="detail ellipsis-container mt-1">
                                  <span className="ellipsis">Manual</span>
                                  <span className="ellipsis">1 Large bag</span>
                                  <span className="ellipsis">1 Small bag</span>
                                  <span className="ellipsis">Diesel</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="trsms-foots mt-4">
                            <div className="flts-flex d-flex align-items-end justify-content-between">
                              <div className="flts-flex-strat">
                                <div className="d-flex align-items-center justify-content-start">
                                  <span className="label bg-light-danger text-danger">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div className="text-dark fw-bold fs-4">US$59</div>
                                  <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                </div>
                              </div>
                              <div className="flts-flex-end">
                                <div className="row align-items-center justify-content-end gx-2">
                                  <div className="col-auto text-start text-md-end">
                                    <div className="text-md text-dark fw-medium">Exceptional</div>
                                    <div className="text-md text-muted-2">3,014 reviews</div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Single */}
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 shadow-wrap m-0">
                        <div className="flight-thumb-wrapper">
                          <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                            <div className="label bg-primary text-light d-inline-flex align-items-center justify-content-center">
                              <span className="svg-icon text-light svg-icon-2hx me-1">
                                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                  <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                </svg>
                              </span>600Kms included. After that $15/Kms
                            </div>
                          </div>
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-4 m-0 fw-bold">
                              <span>Toyota Aygo</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">SEDAN</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">AC</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">5 Seats</span>
                            </p>
                            <div className="touritem-centrio mt-4">
                              <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                  Cancellation Till 10 Aug 23</span></div>
                              <div className="aments-lists mt-2">
                                <div className="detail ellipsis-container mt-1">
                                  <span className="ellipsis">Manual</span>
                                  <span className="ellipsis">1 Large bag</span>
                                  <span className="ellipsis">1 Small bag</span>
                                  <span className="ellipsis">Diesel</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="trsms-foots mt-4">
                            <div className="flts-flex d-flex align-items-end justify-content-between">
                              <div className="flts-flex-strat">
                                <div className="d-flex align-items-center justify-content-start">
                                  <span className="label bg-light-danger text-danger">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div className="text-dark fw-bold fs-4">US$59</div>
                                  <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                </div>
                              </div>
                              <div className="flts-flex-end">
                                <div className="row align-items-center justify-content-end gx-2">
                                  <div className="col-auto text-start text-md-end">
                                    <div className="text-md text-dark fw-medium">Exceptional</div>
                                    <div className="text-md text-muted-2">3,014 reviews</div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Single */}
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 shadow-wrap m-0">
                        <div className="flight-thumb-wrapper">
                          <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                            <div className="label bg-primary text-light d-inline-flex align-items-center justify-content-center">
                              <span className="svg-icon text-light svg-icon-2hx me-1">
                                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                  <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                </svg>
                              </span>600Kms included. After that $15/Kms
                            </div>
                          </div>
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-4 m-0 fw-bold">
                              <span>Ford Focus</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">LUX</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">AC</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">5 Seats</span>
                            </p>
                            <div className="touritem-centrio mt-4">
                              <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                  Cancellation Till 10 Aug 23</span></div>
                              <div className="aments-lists mt-2">
                                <div className="detail ellipsis-container mt-1">
                                  <span className="ellipsis">Manual</span>
                                  <span className="ellipsis">1 Large bag</span>
                                  <span className="ellipsis">1 Small bag</span>
                                  <span className="ellipsis">Diesel</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="trsms-foots mt-4">
                            <div className="flts-flex d-flex align-items-end justify-content-between">
                              <div className="flts-flex-strat">
                                <div className="d-flex align-items-center justify-content-start">
                                  <span className="label bg-light-danger text-danger">15% Off</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div className="text-dark fw-bold fs-4">US$59</div>
                                  <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                </div>
                              </div>
                              <div className="flts-flex-end">
                                <div className="row align-items-center justify-content-end gx-2">
                                  <div className="col-auto text-start text-md-end">
                                    <div className="text-md text-dark fw-medium">Exceptional</div>
                                    <div className="text-md text-muted-2">3,014 reviews</div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="text-center position-relative mt-5">
                      <button type="button" className="btn btn-light-primary fw-medium px-5">Explore More<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ All car List Start ================================== */}
            {/* ============================ Video Helps End ================================== */}
            <section className="bg-cover" style={{background: 'url(https://placehold.co/2200x800)no-repeat'}} data-overlay={5}>
              <div className="ht-150" />
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="video-play-wrap text-center">
                      <div className="video-play-btn d-flex align-items-center justify-content-center">
                        <Link to="https://www.youtube.com/watch?v=A8EI6JaFbv4" data-bs-toggle="modal" data-bs-target="#popup-video" className="square--90 circle bg-white fs-2 text-primary"><i className="fa-solid fa-play" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ht-150" />
            </section>
            {/* ============================ Video Helps End ================================== */}
            {/* ============================ Our Reviews Start ================================== */}
            <section className="gray-simple bg-cover" style={{background: 'url(assets/img/reviewbg.png)no-repeat'}}>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Loving Reviews By Our Customers</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-4 g-3">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" />
                          </div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Aman Diwakar</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" />
                          </div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Kunal M. Thakur</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" />
                          </div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Divya Talwar</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" />
                          </div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Karan Maheshwari</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" />
                          </div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Ritika Mathur</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Our Reviews End ================================== */}
            {/* ============================ Flexible features End ================================== */}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Why Move To GeoTrip.com</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-5 col-lg-5 col-md-6">
                    <div className="position-relative">
                      <img src="https://placehold.co/1000x1100" className="img-fluid rounded-3 position-relative z-1" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="featuresList-box">
                      <div className="featuresList-single mb-4">
                        <div className="featuresList-counter d-inline-block mb-3"><span className="bg-success text-light rounded-pill fw-medium py-1 px-3">01</span></div>
                        <div className="featuresList-caption">
                          <h5 className="fw-bold fs-6 mb-2">Get The Superb Discount</h5>
                          <p className="fw-light fs-6">Rigid proponents of content strategy may shun the use of dummy copy but then
                            designers might want to ask them to provide style sheets.</p>
                        </div>
                      </div>
                      <div className="featuresList-single mb-4">
                        <div className="featuresList-counter d-inline-block mb-3"><span className="bg-warning text-light rounded-pill fw-medium py-1 px-3">02</span></div>
                        <div className="featuresList-caption">
                          <h5 className="fw-bold fs-6 mb-2">100% Price Transparency</h5>
                          <p className="fw-light fs-6">Rigid proponents of content strategy may shun the use of dummy copy but then
                            designers might want to ask them to provide style sheets.</p>
                        </div>
                      </div>
                      <div className="featuresList-single mb-4">
                        <div className="featuresList-counter d-inline-block mb-3"><span className="bg-purple text-light rounded-pill fw-medium py-1 px-3">03</span></div>
                        <div className="featuresList-caption">
                          <h5 className="fw-bold fs-6 mb-2">Top Class destination</h5>
                          <p className="fw-light fs-6">Rigid proponents of content strategy may shun the use of dummy copy but then
                            designers might want to ask them to provide style sheets.</p>
                        </div>
                      </div>
                      <div className="featuresList-single">
                        <div className="featuresList-counter d-inline-block mb-3"><span className="bg-primary text-light rounded-pill fw-medium py-1 px-3">04</span></div>
                        <div className="featuresList-caption">
                          <h5 className="fw-bold fs-6 mb-2">Friendly Chat Support</h5>
                          <p className="fw-light fs-6">Rigid proponents of content strategy may shun the use of dummy copy but then
                            designers might want to ask them to provide style sheets.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Flexible features End ================================== */}
            {/* ================================ Article Section Start ======================================= */}
            <section className="pt-0">
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
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog image" /></Link>
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
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog image" /></Link>
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
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog image" /></Link>
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
            <div className="position-relative bg-cover py-5 bg-primary" style={{background: 'url(https://placehold.co/2200x1200)no-repeat'}} data-overlay={5}>
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
                                    <button type="button" className="btn btn-dark fw-medium full-width">Submit<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
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
                  <iframe className="embed-responsive-item full-width" height={480} src="https://www.youtube.com/embed/qN3OueBm9F4?rel=0" frameBorder={0} allowFullScreen />
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

    export default Home07;