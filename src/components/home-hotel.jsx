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
import { Link } from 'react-router-dom';
import Footer from './footer';
import { HotelSearchbar } from './hotel_components/HotelSearchbar';
import { Bangalore, Delhi, Hotel01, Hotel02, Hotel03, Hotel04, Hyderbad, Mumbai } from '../assets/images';
import AppApk from './App_apk_promotion';

const HomeHotel = () => {
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
        <div className="image-cover hero-header bg-white" style={{ background: 'url(../images/hotel.png)no-repeat' }} data-overlay={5}>
          <div className="container">
            {/* Search Form */}
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                <div className="position-relative text-center mb-5">
                  <h1>Start Your Trip with <span className="position-relative z-4">See My Trip<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                    <svg width="185px" height="23px" viewBox="0 0 445.5 23">
                      <path className="fill-white opacity-7" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z">
                      </path>
                    </svg>
                  </span></span></h1>
                  <p className="fs-5 fw-light">Take a little break from the everyday work stress. Plan a trip and explore beautiful destinations!</p>
                </div>
              </div>
             <HotelSearchbar/>
            </div>
            {/* </row> */}
          </div>
        </div>
        {/* ============================ Hero Banner End ================================== */}
        {/* ============================ Offers Start ================================== */}
        {/* <section className="py-5">
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
                        <h4 className="mb-1 text-success">₹899 off</h4>
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
                        <h4 className="mb-1 text-purple">₹899 off</h4>
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
                        <h4 className="mb-1 text-danger">₹899 off</h4>
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
                        <h4 className="mb-1 text-warning">₹899 off</h4>
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
        </section> */}
        {/* ============================ Offers End ================================== */}
        {/* ============================ Popular Hotels Start ================================== */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center mb-3">
              <div className="col-8">
                <div className="upside-heading">
                  <h5 className="fw-bold fs-6 m-0">Explore Top Hotels &amp; Resorts</h5>
                </div>
              </div>
              <div className="col-4">
                <div className="text-end grpx-btn">
                  <Link to="#" className="btn btn-light-primary btn-md fw-medium">More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                </div>
              </div>
              {/* single card */}
              <div className='mt-3'></div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src={Hotel01} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>Hydebad</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">Delhi</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3.5 Km From Delhi</span>
                        </p>
                        <div className="touritem-centrio mt-4">
                          <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                            Cancellation Till 10 Aug 23</span></div>
                          <div className="aments-lists mt-2">
                            <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="trsms-foots mt-4">
                        <div className="flts-flex d-flex align-items-end justify-content-between">
                          <div className="flts-flex-strat">
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="label bg-seegreen text-light">15% Off</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="text-dark fw-bold fs-4">₹5,999</div>
                              <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">₹4,879</div>
                            </div>
                            <div className="d-flex align-items-start flex-column">
                              <div className="text-muted-2 text-sm">Per Night</div>
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
              {/* single card */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src={Hotel02} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>Mumbai</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">Delhi</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3.5 Km From Delhi</span>
                        </p>
                        <div className="touritem-centrio mt-4">
                          <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                            Cancellation Till 10 Aug 23</span></div>
                          <div className="aments-lists mt-2">
                            <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="trsms-foots mt-4">
                        <div className="flts-flex d-flex align-items-end justify-content-between">
                          <div className="flts-flex-strat">
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="label bg-seegreen text-light">15% Off</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="text-dark fw-bold fs-4">₹5,999</div>
                              <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">₹5,999</div>
                            </div>
                            <div className="d-flex align-items-start flex-column">
                              <div className="text-muted-2 text-sm">Per Night</div>
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
              {/* single card */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src={Hotel03} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>Bangalore</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">Delhi</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3.5 Km From Delhi</span>
                        </p>
                        <div className="touritem-centrio mt-4">
                          <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                            Cancellation Till 10 Aug 23</span></div>
                          <div className="aments-lists mt-2">
                            <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="trsms-foots mt-4">
                        <div className="flts-flex d-flex align-items-end justify-content-between">
                          <div className="flts-flex-strat">
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="label bg-seegreen text-light">15% Off</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="text-dark fw-bold fs-4">₹5,999</div>
                              <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">₹5,999</div>
                            </div>
                            <div className="d-flex align-items-start flex-column">
                              <div className="text-muted-2 text-sm">Per Night</div>
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
              {/* signge card */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src={Hotel04} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>Delhi</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">Delhi</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3.5 Km From Delhi</span>
                        </p>
                        <div className="touritem-centrio mt-4">
                          <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                            Cancellation Till 10 Aug 23</span></div>
                          <div className="aments-lists mt-2">
                            <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="trsms-foots mt-4">
                        <div className="flts-flex d-flex align-items-end justify-content-between">
                          <div className="flts-flex-strat">
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="label bg-seegreen text-light">15% Off</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="text-dark fw-bold fs-4">₹5,999</div>
                              <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">₹5,999</div>
                            </div>
                            <div className="d-flex align-items-start flex-column">
                              <div className="text-muted-2 text-sm">Per Night</div>
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
          </div>
        </section>
        {/* ============================ Popular Hotels End ================================== */}
        {/* ============================ Popular Location Start ================================== */}
        {/* <section className="py-5">
          <div className="container">
            <div className="row align-items-center mb-3">
              <div className="col-8">
                <div className="upside-heading">
                  <h5 className="fw-bold fs-6 m-0">Explore Top Destination</h5>
                </div>
              </div>
              <div className="col-4">
                <div className="text-end grpx-btn">
                  <Link to="#" className="btn btn-light-primary btn-md fw-medium">More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                </div>
              </div>
              
              <div className='mt-3'></div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed">
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
              
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed">
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
              
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed">
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
              
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed">
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
            </div>
          </div>
        </section> */}
        {/* ============================ Popular Location End ================================== */}
        {/* ============================ Popular Routes Start ================================== */}
        {/* <section className="py-5">
          <div className="container">
            <div className="row align-items-center mb-3">
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
              
              <div className='mt-3'></div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
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
                        <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US₹492</span></h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
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
                        <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US₹492</span></h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
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
                        <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US₹492</span></h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
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
                        <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US₹492</span></h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* ============================ Popular Routes End ================================== */}
        {/* ============================ Google & IOS App Start ================================== */}
        <section className="py-5">
           <AppApk/>
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
                <Link className="recommend-module-card" to="#">
                  <div className="bokker-bg-full" style={{ background: 'url(https://placehold.co/650x850)no-repeat' }} />
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
                          <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">₹492</span>
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
                          <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">₹492</span>
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
                            <span>Closers Group Real Estate</span>
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
                          <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">₹492</span>
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
        {/* ================================ Article Section Start ======================================= */}
        {/* <section className="py-5">
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
        </section> */}
        {/* ================================ Article Section Start ======================================= */}
        {/* ============================ Call To Action Start ================================== */}
        <div className="position-relative bg-cover py-5 bg-dark" style={{ background: 'url(assets/img/bg2.png)no-repeat' }}>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="calltoAction-wraps position-relative py-5 px-4">
                  <div className="ht-40" />
                  <div className="row align-items-center justify-content-center">
                    <div className="col-xl-8 col-lg-9 col-md-10 col-sm-11 text-center">
                      <div className="calltoAction-title mb-5">
                        <h4 className="text-light fs-2 fw-bold lh-base m-0">Subscribe &amp; Get<br />Special Discount with See My Trip.com
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
        <Link id="back2Top" className="top-scroll" title="Back to top" to="#"><i className="fa-solid fa-sort-up" /></Link>
      </div>
    </div>
  );
}

export default HomeHotel;