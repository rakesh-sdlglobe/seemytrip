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
import Footer from './footer';
import Header02 from './header02';

const Home03 = () => {
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
            <div className="image-cover hero-header bg-white" style={{background: 'url(https://placehold.co/2200x1200)no-repeat'}} data-overlay={6}>
              <div className="container">
                {/* Search Form */}
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12">
                    <div className="position-relative text-center mb-5">
                      <h1>Discover Beautiful Place with <span className="position-relative z-4">GeoTrip<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
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
                                <input type="text" className="form-control fw-bold" placeholder="Check-In & Check-Out" id="checkinout" readOnly="readonly" />
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
            {/* ============================ Popular Flights Routes Start ================================== */}
            <section className="gray-simple pt-5">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Offers For Flights Routes</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12 p-0">
                    <div className="main-carousel cols-4 dots-full">
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="card rounded-3 border-0 m-0 fltsOffers-card">
                          <div className="card-body">
                            <div className="d-inline-flex mb-3"><span className="label bg-danger text-light">20% Discount</span></div>
                            <div className="fltsOffers-flex d-flex align-items-center justify-content-between">
                              <div className="fltsOffers-firster">
                                <h6 className="text-dark fw-bold fs-6 m-0">DHL</h6>
                                <p className="text-muted-2 text-md m-0">Delhi</p>
                              </div>
                              <div className="fltsOffers-middler text-muted fs-5"><i className="fa-solid fa-jet-fighter" /></div>
                              <div className="fltsOffers-ender">
                                <h6 className="text-dark fw-bold fs-6 m-0">NWK</h6>
                                <p className="text-muted-2 text-md m-0">New York</p>
                              </div>
                            </div>
                            <div className="fltsFlite-name d-flex flex-column align-items-center justify-content-center my-3">
                              <p className="text-muted m-0">Travel Between</p>
                              <h6 className="fw-bold text-dhani">20 Sep, Fri - 10 Oct, Tue</h6>
                            </div>
                            <div className="fltsFlite-name d-flex align-items-center justify-content-center mb-1">
                              <img src="https://placehold.co/300x100" className="img-fluid" width={120} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="card rounded-3 border-0 m-0 fltsOffers-card">
                          <div className="card-body">
                            <div className="d-inline-flex mb-3"><span className="label bg-warning text-light">New Flight</span></div>
                            <div className="fltsOffers-flex d-flex align-items-center justify-content-between">
                              <div className="fltsOffers-firster">
                                <h6 className="text-dark fw-bold fs-6 m-0">DHL</h6>
                                <p className="text-muted-2 text-md m-0">Delhi</p>
                              </div>
                              <div className="fltsOffers-middler text-muted fs-5"><i className="fa-solid fa-jet-fighter" /></div>
                              <div className="fltsOffers-ender">
                                <h6 className="text-dark fw-bold fs-6 m-0">NWK</h6>
                                <p className="text-muted-2 text-md m-0">New York</p>
                              </div>
                            </div>
                            <div className="fltsFlite-name d-flex flex-column align-items-center justify-content-center my-3">
                              <p className="text-muted m-0">Travel Between</p>
                              <h6 className="fw-bold text-dhani">20 Sep, Fri - 10 Oct, Tue</h6>
                            </div>
                            <div className="fltsFlite-name d-flex align-items-center justify-content-center mb-1">
                              <img src="https://placehold.co/300x100" className="img-fluid" width={120} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="card rounded-3 border-0 m-0 fltsOffers-card">
                          <div className="card-body">
                            <div className="d-inline-flex mb-3"><span className="label bg-danger text-light">30% Discount</span></div>
                            <div className="fltsOffers-flex d-flex align-items-center justify-content-between">
                              <div className="fltsOffers-firster">
                                <h6 className="text-dark fw-bold fs-6 m-0">DHL</h6>
                                <p className="text-muted-2 text-md m-0">Delhi</p>
                              </div>
                              <div className="fltsOffers-middler text-muted fs-5"><i className="fa-solid fa-jet-fighter" /></div>
                              <div className="fltsOffers-ender">
                                <h6 className="text-dark fw-bold fs-6 m-0">NWK</h6>
                                <p className="text-muted-2 text-md m-0">New York</p>
                              </div>
                            </div>
                            <div className="fltsFlite-name d-flex flex-column align-items-center justify-content-center my-3">
                              <p className="text-muted m-0">Travel Between</p>
                              <h6 className="fw-bold text-dhani">20 Sep, Fri - 10 Oct, Tue</h6>
                            </div>
                            <div className="fltsFlite-name d-flex align-items-center justify-content-center mb-1">
                              <img src="https://placehold.co/300x100" className="img-fluid" width={120} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="card rounded-3 border-0 m-0 fltsOffers-card">
                          <div className="card-body">
                            <div className="d-inline-flex mb-3"><span className="label bg-success text-light">Recommended</span></div>
                            <div className="fltsOffers-flex d-flex align-items-center justify-content-between">
                              <div className="fltsOffers-firster">
                                <h6 className="text-dark fw-bold fs-6 m-0">DHL</h6>
                                <p className="text-muted-2 text-md m-0">Delhi</p>
                              </div>
                              <div className="fltsOffers-middler text-muted fs-5"><i className="fa-solid fa-jet-fighter" /></div>
                              <div className="fltsOffers-ender">
                                <h6 className="text-dark fw-bold fs-6 m-0">NWK</h6>
                                <p className="text-muted-2 text-md m-0">New York</p>
                              </div>
                            </div>
                            <div className="fltsFlite-name d-flex flex-column align-items-center justify-content-center my-3">
                              <p className="text-muted m-0">Travel Between</p>
                              <h6 className="fw-bold text-dhani">20 Sep, Fri - 10 Oct, Tue</h6>
                            </div>
                            <div className="fltsFlite-name d-flex align-items-center justify-content-center mb-1">
                              <img src="https://placehold.co/300x100" className="img-fluid" width={120} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="card rounded-3 border-0 m-0 fltsOffers-card">
                          <div className="card-body">
                            <div className="d-inline-flex mb-3"><span className="label bg-warning text-light">Trending</span></div>
                            <div className="fltsOffers-flex d-flex align-items-center justify-content-between">
                              <div className="fltsOffers-firster">
                                <h6 className="text-dark fw-bold fs-6 m-0">DHL</h6>
                                <p className="text-muted-2 text-md m-0">Delhi</p>
                              </div>
                              <div className="fltsOffers-middler text-muted fs-5"><i className="fa-solid fa-jet-fighter" /></div>
                              <div className="fltsOffers-ender">
                                <h6 className="text-dark fw-bold fs-6 m-0">NWK</h6>
                                <p className="text-muted-2 text-md m-0">New York</p>
                              </div>
                            </div>
                            <div className="fltsFlite-name d-flex flex-column align-items-center justify-content-center my-3">
                              <p className="text-muted m-0">Travel Between</p>
                              <h6 className="fw-bold text-dhani">20 Sep, Fri - 10 Oct, Tue</h6>
                            </div>
                            <div className="fltsFlite-name d-flex align-items-center justify-content-center mb-1">
                              <img src="https://placehold.co/300x100" className="img-fluid" width={120} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="card rounded-3 border-0 m-0 fltsOffers-card">
                          <div className="card-body">
                            <div className="d-inline-flex mb-3"><span className="label bg-danger text-light">20% Discount</span></div>
                            <div className="fltsOffers-flex d-flex align-items-center justify-content-between">
                              <div className="fltsOffers-firster">
                                <h6 className="text-dark fw-bold fs-6 m-0">DHL</h6>
                                <p className="text-muted-2 text-md m-0">Delhi</p>
                              </div>
                              <div className="fltsOffers-middler text-muted fs-5"><i className="fa-solid fa-jet-fighter" /></div>
                              <div className="fltsOffers-ender">
                                <h6 className="text-dark fw-bold fs-6 m-0">NWK</h6>
                                <p className="text-muted-2 text-md m-0">New York</p>
                              </div>
                            </div>
                            <div className="fltsFlite-name d-flex flex-column align-items-center justify-content-center my-3">
                              <p className="text-muted m-0">Travel Between</p>
                              <h6 className="fw-bold text-dhani">20 Sep, Fri - 10 Oct, Tue</h6>
                            </div>
                            <div className="fltsFlite-name d-flex align-items-center justify-content-center mb-1">
                              <img src="https://placehold.co/300x100" className="img-fluid" width={120} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Popular Flights Routes End ================================== */}
            {/* ============================ Popular Tours Package Start ================================== */}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Super Saver Packages</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center gy-4 gx-xl-4 gx-3">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper p-2 pb-0">
                          <div className="popFlights-item-overHidden rounded-3">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="tourist-wooks position-relative mb-3">
                              <ul className="activities-flex">
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-jet-fighter" /></div>
                                    <div className="actv-wrap-caps">3 Flights</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-building-wheat" /></div>
                                    <div className="actv-wrap-caps">2 Hotels</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-person-walking-luggage" /></div>
                                    <div className="actv-wrap-caps">0 Activity</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-bus" /></div>
                                    <div className="actv-wrap-caps">2 Transfers</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="explot">
                              <h4 className="city fs-title m-0 fw-bold">
                                <span>Amazing Goa Trip Package with Flights</span>
                              </h4>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <strong><i className="fa-solid fa-star text-warning me-1" />4.6</strong><span>(142
                                    Reviews)</span>
                                </div>
                              </div>
                            </div>
                            <div className="touritem-amenties my-4">
                              <ul className="activities-flex">
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Amman</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">1N</span>Petra</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Dhaka</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="booking-wrapes d-flex align-items-start justify-content-start flex-column">
                            <h5 className="fs-5 low-price m-0">$<span className="price text-primary">492</span></h5>
                            <div className="text-muted-2 text-sm">For 2 Person</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper p-2 pb-0">
                          <div className="popFlights-item-overHidden rounded-3">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="tourist-wooks position-relative mb-3">
                              <ul className="activities-flex">
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-jet-fighter" /></div>
                                    <div className="actv-wrap-caps">3 Flights</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-building-wheat" /></div>
                                    <div className="actv-wrap-caps">2 Hotels</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-person-walking-luggage" /></div>
                                    <div className="actv-wrap-caps">0 Activity</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-bus" /></div>
                                    <div className="actv-wrap-caps">2 Transfers</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="explot">
                              <h4 className="city fs-title m-0 fw-bold">
                                <span>Electrifying Trip to Goa</span>
                              </h4>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <strong><i className="fa-solid fa-star text-warning me-1" />4.6</strong><span>(142
                                    Reviews)</span>
                                </div>
                              </div>
                            </div>
                            <div className="touritem-amenties my-4">
                              <ul className="activities-flex">
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Amman</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">1N</span>Petra</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Dhaka</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="booking-wrapes d-flex align-items-start justify-content-start flex-column">
                            <h5 className="fs-5 low-price m-0">$<span className="price text-primary">569</span></h5>
                            <div className="text-muted-2 text-sm">For 2 Person</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper p-2 pb-0">
                          <div className="popFlights-item-overHidden rounded-3">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="tourist-wooks position-relative mb-3">
                              <ul className="activities-flex">
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-jet-fighter" /></div>
                                    <div className="actv-wrap-caps">3 Flights</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-building-wheat" /></div>
                                    <div className="actv-wrap-caps">2 Hotels</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-person-walking-luggage" /></div>
                                    <div className="actv-wrap-caps">0 Activity</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-bus" /></div>
                                    <div className="actv-wrap-caps">2 Transfers</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="explot">
                              <h4 className="city fs-title m-0 fw-bold">
                                <span>Thrilling Holiday in Goa</span>
                              </h4>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <strong><i className="fa-solid fa-star text-warning me-1" />4.6</strong><span>(142
                                    Reviews)</span>
                                </div>
                              </div>
                            </div>
                            <div className="touritem-amenties my-4">
                              <ul className="activities-flex">
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Amman</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">1N</span>Petra</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Dhaka</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="booking-wrapes d-flex align-items-start justify-content-start flex-column">
                            <h5 className="fs-5 low-price m-0">$<span className="price text-primary">479</span></h5>
                            <div className="text-muted-2 text-sm">For 2 Person</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper p-2 pb-0">
                          <div className="popFlights-item-overHidden rounded-3">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="tourist-wooks position-relative mb-3">
                              <ul className="activities-flex">
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-jet-fighter" /></div>
                                    <div className="actv-wrap-caps">3 Flights</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-building-wheat" /></div>
                                    <div className="actv-wrap-caps">2 Hotels</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-person-walking-luggage" /></div>
                                    <div className="actv-wrap-caps">0 Activity</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-bus" /></div>
                                    <div className="actv-wrap-caps">2 Transfers</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="explot">
                              <h4 className="city fs-title m-0 fw-bold">
                                <span>All Inclusive Romantic Goa 6N Holiday</span>
                              </h4>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <strong><i className="fa-solid fa-star text-warning me-1" />4.6</strong><span>(142
                                    Reviews)</span>
                                </div>
                              </div>
                            </div>
                            <div className="touritem-amenties my-4">
                              <ul className="activities-flex">
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Amman</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">1N</span>Petra</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Dhaka</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="booking-wrapes d-flex align-items-start justify-content-start flex-column">
                            <h5 className="fs-5 low-price m-0">$<span className="price text-primary">399</span></h5>
                            <div className="text-muted-2 text-sm">For 2 Person</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper p-2 pb-0">
                          <div className="popFlights-item-overHidden rounded-3">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="tourist-wooks position-relative mb-3">
                              <ul className="activities-flex">
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-jet-fighter" /></div>
                                    <div className="actv-wrap-caps">3 Flights</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-building-wheat" /></div>
                                    <div className="actv-wrap-caps">2 Hotels</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-person-walking-luggage" /></div>
                                    <div className="actv-wrap-caps">0 Activity</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-bus" /></div>
                                    <div className="actv-wrap-caps">2 Transfers</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="explot">
                              <h4 className="city fs-title m-0 fw-bold">
                                <span>Intimate Weekend Getaway to Goa</span>
                              </h4>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <strong><i className="fa-solid fa-star text-warning me-1" />4.6</strong><span>(142
                                    Reviews)</span>
                                </div>
                              </div>
                            </div>
                            <div className="touritem-amenties my-4">
                              <ul className="activities-flex">
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Amman</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">1N</span>Petra</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Dhaka</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="booking-wrapes d-flex align-items-start justify-content-start flex-column">
                            <h5 className="fs-5 low-price m-0">$<span className="price text-primary">456</span></h5>
                            <div className="text-muted-2 text-sm">For 2 Person</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="pop-touritem">
                      <Link to="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper p-2 pb-0">
                          <div className="popFlights-item-overHidden rounded-3">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="tourist-wooks position-relative mb-3">
                              <ul className="activities-flex">
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-jet-fighter" /></div>
                                    <div className="actv-wrap-caps">3 Flights</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-building-wheat" /></div>
                                    <div className="actv-wrap-caps">2 Hotels</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-person-walking-luggage" /></div>
                                    <div className="actv-wrap-caps">0 Activity</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-ico"><i className="fa-solid fa-bus" /></div>
                                    <div className="actv-wrap-caps">2 Transfers</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="explot">
                              <h4 className="city fs-title m-0 fw-bold">
                                <span>Luxurious Honeymoon in Goa</span>
                              </h4>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <strong><i className="fa-solid fa-star text-warning me-1" />4.6</strong><span>(142
                                    Reviews)</span>
                                </div>
                              </div>
                            </div>
                            <div className="touritem-amenties my-4">
                              <ul className="activities-flex">
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Amman</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">1N</span>Petra</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="actv-wrap">
                                    <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Dhaka</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="booking-wrapes d-flex align-items-start justify-content-start flex-column">
                            <h5 className="fs-5 low-price m-0">$<span className="price text-primary">362</span></h5>
                            <div className="text-muted-2 text-sm">For 2 Person</div>
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
            {/* ============================ Popular Tours Package Start ================================== */}
            {/* ============================ Best Locations Design Start ================================== */}
            <section className="gray-simple">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Trending Destination For Stay</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center gy-4 gx-3">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>Chicago</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>San Diego</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>San Jose</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>New York</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>San Francisco</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>Los Angeles</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>New Orleans</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>Long Beach</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Best Locations Design Start ================================== */}
            {/* ============================ Best Discount Start ================================== */}
            <section>
              <div className="container">
                <div className="row g-4 justify-content-between">
                  <div className="col-xl-6 col-lg-6 col-md-6 py-3">
                    <div className="cardOffer cursor rounded-3 position-relative z-0">
                      <div className="cardOffer-image ratio ratio-full">
                        <img className="img-fluid object-fit" src="https://placehold.co/1500x1000" alt="img" />
                      </div>
                      <div className="cardOffer-content p-5">
                        <p className="text-light fw-medium m-0">Family Package</p>
                        <h4 className="fs-1 text-light">Save $80 For 3 Night</h4>
                        <div className="d-inline-flex align-items-center justify-content-center py-2 px-4 cpnCode rounded-2">
                          <span className="text-light fw-bold me-2">Code:</span><span className="text-warning fw-medium">WELCOME</span>
                        </div>
                        <div className="d-flex mt-5">
                          <Link to="#" className="btn btn-whitener fw-medium px-5">Experiences<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 py-3">
                    <div className="cardOffer cursor rounded-3 position-relative z-0">
                      <div className="cardOffer-image ratio ratio-full">
                        <img className="img-fluid object-fit" src="https://placehold.co/1500x1000" alt="img" />
                      </div>
                      <div className="cardOffer-content p-5">
                        <p className="text-light fw-medium m-0">Hot Summer Sale</p>
                        <h4 className="fs-1 text-light">Upto US$50 Discount</h4>
                        <div className="d-inline-flex align-items-center justify-content-center py-2 px-4 cpnCode rounded-2">
                          <span className="text-light fw-bold me-2">Code:</span><span className="text-success fw-medium">WELCOME</span>
                        </div>
                        <div className="d-flex mt-5">
                          <Link to="#" className="btn btn-whitener fw-medium px-5">Experiences<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Best Discount End ================================== */}
            {/* ============================ Our Reviews Start ================================== */}
            <section className="gray">
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
                    <div className="card border-0 rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" /></div>
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
                    <div className="card border-0 rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" /></div>
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
                    <div className="card border-0 rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" /></div>
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
                    <div className="card border-0 rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" /></div>
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
                    <div className="card border-0 rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" /></div>
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
            {/* ================================ Article Section Start ======================================= */}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Trending &amp; Popular Articles</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center g-4">
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
            <div className="position-relative bg-cover bg-primary" style={{background: 'url(https://placehold.co/2200x1200)no-repeat'}} data-overlay={5}>
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
  
    export default Home03;