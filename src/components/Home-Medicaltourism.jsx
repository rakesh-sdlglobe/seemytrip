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
import Header02 from './header02';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';
import FlightSearch from './flight_components/flight_search';
import { useState } from 'react';
import { AirIndia, Bangalore, Delhi, Hyderbad, Indigo, indigo, Mumbai, Vistara } from '../assets/images';
import FooterDark from './footer-dark';
import HorizontalContainer from './flight_components/HorizontalContainer';

const MedicalTrourism = () => {
  const [flightResults, setFlightResults] = useState([]);
  const navigate = useNavigate();

  const handleSearchResults = (data) => {
    console.log('Search results:', data); // Check if flight results are coming
    setFlightResults(data);
    navigate('/flight-list', { state: { flightResults: data } });
  };

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
        <Header02 />
        {/* End Navigation */}
        <div className="clearfix" />
        {/* ============================================================== */}
        {/* Top header  */}
        {/* ============================================================== */}
        {/* ============================ Hero Banner  Start================================== */}
        <div className="image-cover hero-header bg-white" style={{ background: 'url(../images/medical.png)no-repeat' }} data-overlay={6}>
          <div className="container">
            {/* Search Form */}
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                <div className="position-relative text-center mb-5">
                  <h1>Starts Your Trip with <span className="position-relative z-4">See My Trip<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
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
                <div className="search-wrap bg-white rounded-3 p-3">
                  {/* <div className="search-upper">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="flx-start mb-sm-0 mb-2">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="trip" id="return" defaultValue="option1" defaultChecked />
                          <label className="form-check-label" htmlFor="return">Return</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="trip" id="oneway" defaultValue="option2" />
                          <label className="form-check-label" htmlFor="oneway">One Way</label>
                        </div>
                      </div>
                      <div className="flx-end d-flex align-items-center flex-wrap">
                        <div className="px-sm-2 pb-3 pt-0 ps-0 mob-full">
                          <div className="booking-form__input guests-input">
                            <i className="fa-solid fa-user-clock text-muted me-2" /><button name="guests-btn" id="guests-input-btn">1
                              Guest</button>
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
                        <div className="ps-1 pb-3 pt-0 mob-full">
                          <div className="dropdowns">
                            <div className="selections">
                              <i className="fa-solid fa-basket-shopping text-muted me-2" /><span className="selected">Economy</span>
                              <div className="caret" />
                            </div>
                            <ul className="menu">
                              <li className="active">Economy</li>
                              <li>Premium Economy</li>
                              <li>Premium Economy</li>
                              <li>Business/First</li>
                              <li>Business</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row gx-lg-2 g-3">
                        <div className="col-xl-6 col-lg-6 col-md-12">
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
                          <div className="form-group mb-0">
                            <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                          </div>
                        </div>
                      </div> */}
                  <FlightSearch
                    onSearchResults={handleSearchResults}
                    backgroundColor="#ffffff"
                    buttonBackgroundColor="#cd2c22"
                    buttonTextColor="#ffffff"
                    height="160px"
                    leavingLabel={null}
                    goingLabel={null}
                    dateLabel={null}
                    ReturnLable={null}
                    dropdownHindden="flex"
                  />
                </div>
              </div>
            </div>

            {/* </row> */}
          </div>
        </div>
        {/* ============================ Hero Banner End ================================== */}

        {/* Train Status start */}
        <HorizontalContainer />
        {/* Train Status End  */}
        {/* ============================ Offers Start ================================== */}
        <section className="pt-4 pb-0">
          <div className="container">
            <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="pop-touritems">
                  <Link to="#" className="card rounded-3 border br-dashed border-2 m-0">
                    <div className="offers-container d-flex align-items-center justify-content-start p-2">
                      <div className="offers-flex position-relative">
                        <div className="offers-pic bg-light-success p-3 rounded-3 d-flex align-items-center justify-content-center h-100">
                          <img src={Indigo} className="img-fluid rounded" width={70} alt="" />
                        </div>
                      </div>
                      <div className="offers-captions ps-3">
                        <h4 className="city fs-4 m-0 fw-bold">
                          <span>30% Off</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">On Domestic Flight For USA</span>
                        </p>
                        <div className="booking-wrapes d-flex align-items-center justify-content-between">
                          <p className="fs-5 low-price m-0"><span className="tag-span">Valid 31 March 2023</span></p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="pop-touritems">
                  <Link to="#" className="card rounded-3 border br-dashed border-2 m-0">
                    <div className="offers-container d-flex align-items-center justify-content-start p-2">
                      <div className="offers-flex position-relative">
                        <div className="offers-pic bg-light-warning p-3 rounded-3 d-flex align-items-center justify-content-center h-100">
                          <img src={AirIndia} className="img-fluid rounded" width={70} alt="" />
                        </div>
                      </div>
                      <div className="offers-captions ps-3">
                        <h4 className="city fs-4 m-0 fw-bold">
                          <span>40% Off</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">On International Routes</span>
                        </p>
                        <div className="booking-wrapes d-flex align-items-center justify-content-between">
                          <p className="fs-5 low-price m-0"><span className="tag-span">Valid 31 March 2023</span></p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="pop-touritems">
                  <Link to="#" className="card rounded-3 border br-dashed border-2 m-0">
                    <div className="offers-container d-flex align-items-center justify-content-start p-2">
                      <div className="offers-flex position-relative">
                        <div className="offers-pic bg-light-info p-3 rounded-3 d-flex align-items-center justify-content-center h-100">
                          <img src={Vistara} className="img-fluid rounded" width={70} alt="" />
                        </div>
                      </div>
                      <div className="offers-captions ps-3">
                        <h4 className="city fs-4 m-0 fw-bold">
                          <span>15% Off</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">On National Routes</span>
                        </p>
                        <div className="booking-wrapes d-flex align-items-center justify-content-between">
                          <p className="fs-5 low-price m-0"><span className="tag-span">Valid 31 March 2023</span></p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Offers End ================================== */}
        {/* ============================ Popular Domestic Routes Start ================================== */}
        <section className="py-5">
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
            <div className="row justify-content-center gy-4 gx-3">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed h-100 m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src={Hyderbad} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>Bangalore</span>
                          <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                              <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                            </svg>
                          </span>
                          <span>Hyderbad</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">Round-trip</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3 days</span>
                        </p>
                      </div>
                      <div className="flight-foots">
                        <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">₹5,792</span>
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed h-100 m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src={Mumbai} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>Delhi</span>
                          <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                              <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                            </svg>
                          </span>
                          <span>Mumbai</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">Round-trip</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3 days</span>
                        </p>
                      </div>
                      <div className="flight-foots">
                        <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">₹6,492</span>
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed h-100 m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src={Bangalore} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>Mumbai</span>
                          <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                              <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                            </svg>
                          </span>
                          <span>Bangalore</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">Round-trip</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3 days</span>
                        </p>
                      </div>
                      <div className="flight-foots">
                        <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">₹5,492</span>
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed h-100 m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src={Delhi} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>Hyderbad</span>
                          <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                              <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                            </svg>
                          </span>
                          <span>Delhi</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">Round-trip</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3 days</span>
                        </p>
                      </div>
                      <div className="flight-foots">
                        <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">₹4,492</span>
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Popular Domestic Routes End ================================== */}
        {/* ============================ Popular Destination Start ================================== */}
        {/* <section className="pt-0 pb-5">
          <div className="container">
            <div className="row align-items-center justify-content-between mb-3">
              <div className="col-8">
                <div className="upside-heading">
                  <h5 className="fw-bold fs-6 m-0">Browse Popular Destinations</h5>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                      <h4 className="text-light fs-3 mb-3">Chicago</h4>
                      <button className="btn btn-whitener full-width fw-medium">Discover<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                      <h4 className="text-light fs-3 mb-3">Las Vegas</h4>
                      <button className="btn btn-whitener full-width fw-medium">Discover<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
        </section> */}
        {/* ============================ Popular Destination End ================================== */}
        {/* ============================ Google & IOS App Start ================================== */}
        <section className="pt-0 pb-5">
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
                              {/* <img src="https://placehold.co/450x450" className="img-fluid" width={65} alt="" /> */}
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
        {/* <section className="py-0">
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
                            <span>Pagoda Partners Realty</span>
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
                          <span className="city-destination label text-success bg-light-success mb-1">House</span>
                          <h4 className="city fs-6 m-0 fw-bold">
                            <span>Strive Partners Realty</span>
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
                            <span>Larkspur Partners Realty</span>
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
                            <span>Agile Real Estate Group</span>
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
        </section> */}
        {/* ============================ Featured Rental Property End ================================== */}
        {/* ============================== Popular Destination List Start ========================= */}
        {/* <section className="py-5">
          <div className="container">
            <div className="row align-items-center justify-content-between mb-3">
              <div className="col-8">
                <div className="upside-heading">
                  <h5 className="fw-bold fs-6 m-0">All International Routes</h5>
                </div>
              </div>
              <div className="col-4">
                <div className="text-end grpx-btn">
                  <Link to="#" className="btn btn-light-primary btn-md fw-medium">More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="destinationList-wrap">
                  <div className="tabs-control-slider">
                    <ul className="nav nav-pills medium" id="pills-tab" role="tablist">
                      <li className="nav-item mb-2" role="presentation">
                        <button className="nav-link active" id="pills-flsfirst-tab" data-bs-toggle="pill" data-bs-target="#pills-flsfirst" type="button" role="tab" aria-controls="pills-flsfirst" aria-selected="true">Flights To Popular Countries</button>
                      </li>
                      <li className="nav-item mb-2" role="presentation">
                        <button className="nav-link" id="pills-flssecond-tab" data-bs-toggle="pill" data-bs-target="#pills-flssecond" type="button" role="tab" aria-controls="pills-flssecond" aria-selected="false">Flights To Popular Destinations</button>
                      </li>
                      <li className="nav-item mb-2" role="presentation">
                        <button className="nav-link" id="pills-flsthird-tab" data-bs-toggle="pill" data-bs-target="#pills-flsthird" type="button" role="tab" aria-controls="pills-flsthird" aria-selected="false">Popular Flights</button>
                      </li>
                      <li className="nav-item mb-2" role="presentation">
                        <button className="nav-link" id="pills-flsfourth-tab" data-bs-toggle="pill" data-bs-target="#pills-flsfourth" type="button" role="tab" aria-controls="pills-flsfourth" aria-selected="false">Popular Airlines</button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content pt-2" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-flsfirst" role="tabpanel" aria-labelledby="pills-flsfirst-tab" tabIndex={0}>
                      <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>France</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Turkey</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Japan</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Itly</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Poland</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>South Korea</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Spain</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Maxico</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Austria</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Canada</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Thailand</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>New York</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Russia</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Vietnaam</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Denver</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Liverpool</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Indonesia</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Chaina</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Zarmeny</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Purtugal</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>India</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Malaysia</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Pakistan</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Los Vegas</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Singapure</span></Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-flssecond" role="tabpanel" aria-labelledby="pills-flssecond-tab" tabIndex={0}>
                      <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>France</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Turkey</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Japan</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Itly</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Poland</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>South Korea</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Spain</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Maxico</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Austria</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Canada</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Thailand</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>New York</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Russia</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Vietnaam</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Denver</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Liverpool</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Indonesia</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Chaina</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Zarmeny</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Purtugal</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>India</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Malaysia</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Pakistan</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Los Vegas</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Singapure</span></Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-flsthird" role="tabpanel" aria-labelledby="pills-flsthird-tab" tabIndex={0}>
                      <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>France</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Turkey</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Japan</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Itly</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Poland</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>South Korea</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Spain</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Maxico</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Austria</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Canada</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Thailand</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>New York</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Russia</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Vietnaam</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Denver</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Liverpool</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Indonesia</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Chaina</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Zarmeny</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Purtugal</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>India</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Malaysia</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Pakistan</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Los Vegas</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Singapure</span></Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-flsfourth" role="tabpanel" aria-labelledby="pills-flsfourth-tab" tabIndex={0}>
                      <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>France</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Turkey</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Japan</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Itly</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Poland</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>South Korea</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Spain</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Maxico</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Austria</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Canada</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Thailand</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>New York</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Russia</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Vietnaam</span></Link>
                            </li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Denver</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Liverpool</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Indonesia</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Chaina</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Zarmeny</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Purtugal</span></Link></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="flightsLists-Wraps p-0">
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>India</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Malaysia</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Pakistan</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Los Vegas</span></Link></li>
                            <li><Link to="#" className="text-md text-muted-2"><span>Flight</span> To <span>Singapure</span></Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* ============================== Popular Destination List End ========================= */}
        {/* ============================ Call To Action Start ================================== */}
        {/* <div className="position-relative bg-cover py-5 bg-primary" style={{ background: 'url(https://placehold.co/2200x1200)no-repeat' }} data-overlay={5}>
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
        </div> */}
        {/* ============================ Call To Action Start ================================== */}
        {/* ============================ Footer Start ================================== */}
        <FooterDark />
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
                        <Link to="#" onClick={(e) => { e.preventDefault() }} className="text-primary fw-medium">Forget Password?</Link>
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


export default MedicalTrourism;