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


const SliderHome = () => {
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
            <div className="header header-transparent theme">
              <div className="container">
                <nav id="navigation" className="navigation navigation-landscape">
                  <div className="nav-header">
                    <a className="nav-brand static-show" href="#"><img src="assets/img/logo-light.png" className="logo" alt="" /></a>
                    <a className="nav-brand mob-show" href="#"><img src={trainImage} className="logo" alt="" /></a>
                    <div className="nav-toggle" />
                    <div className="mobile_nav">
                      <ul>
                        <li className="currencyDropdown me-2">
                          <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></a>
                        </li>
                        <li className="languageDropdown me-2">
                          <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src="https://placehold.co/100x100" className="img-fluid" width={17} alt="Country" /></a>
                        </li>
                        <li>
                          <a href="#" className="bg-light-primary text-primary rounded" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nav-menus-wrapper" style={{transitionProperty: 'none'}}>
                    <ul className="nav-menu">
                      <li><a href="JavaScript:Void(0);">Home<span className="submenu-indicator" /></a>
                        <ul className="nav-dropdown nav-submenu">
                          <li>
                            <a href="index.html">Home version 01</a>
                          </li>
                          <li>
                            <a href="home-2.html">Home version 02</a>
                          </li>
                          <li>
                            <a href="home-3.html">Home version 03</a>
                          </li>
                          <li>
                            <a href="home-4.html">Home version 04</a>
                          </li>
                          <li>
                            <a href="home-5.html">Home version 05</a>
                          </li>
                          <li>
                            <a href="slider-home.html">Home version 06</a>
                          </li>
                        </ul>
                      </li>
                      <li><a href="JavaScript:Void(0);">Listing<span className="submenu-indicator" /></a>
                        <ul className="nav-dropdown nav-submenu">
                          <li><a href="JavaScript:Void(0);">Hotel<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="hotel-list-01.html">Hotel list 01</a></li>
                              <li><a href="hotel-list-02.html">Hotel list 02</a></li>
                              <li><a href="hotel-list-03.html">Hotel list 03</a></li>
                              <li><a href="hotel-detail.html">Hotel Detail 01</a></li>
                              <li><a href="hotel-detail-2.html">Hotel Detail 02</a></li>
                            </ul>
                          </li>
                          <li><a href="JavaScript:Void(0);">Flight<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="flight-list-01.html">Flight List 01</a></li>
                              <li><a href="flight-list-02.html">Flight List 02</a></li>
                              <li><a href="Flight-detail.html">Flight Detail</a></li>
                            </ul>
                          </li>
                          <li><a href="JavaScript:Void(0);">Rental<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="property-list-01.html">Rental List 01</a></li>
                              <li><a href="property-list-02.html">Rental List 02</a></li>
                              <li><a href="property-list-03.html">Rental List 03</a></li>
                              <li><a href="rental-detail.html">Rental Detail</a></li>
                            </ul>
                          </li>
                          <li><a href="JavaScript:Void(0);">Car<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="car-list-01.html">Car List 01</a></li>
                              <li><a href="car-list-02.html">Car List 02</a></li>
                              <li><a href="car-list-03.html">Car List 03</a></li>
                              <li><a href="car-detail.html">Car Detail</a></li>
                            </ul>
                          </li>
                          <li><a href="JavaScript:Void(0);">Destination<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="destination-01.html">Destination List 01</a></li>
                              <li><a href="destination-02.html">Destination List 02</a></li>
                              <li><a href="destination-03.html">Destination List 03</a></li>
                              <li><a href="destination-detail.html">Destination Detail</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="join-us.html">Join with GeoTrip</a>
                          </li>
                          <li>
                            <a href="add-listing.html">Add Listing</a>
                          </li>
                          <li>
                            <a href="compare-listing.html">Compare Listing</a>
                          </li>
                          <li>
                            <a href="booking-page.html">Booking Page</a>
                          </li>
                          <li>
                            <a href="my-profile.html">User Dashboard</a>
                          </li>
                        </ul>
                      </li>
                      <li><a href="JavaScript:Void(0);">Pages<span className="submenu-indicator" /></a>
                        <ul className="nav-dropdown nav-submenu">
                          <li><a href="JavaScript:Void(0);">Blog<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="classic-blog.html">Classic Blog</a></li>
                              <li><a href="blog.html">Blog Grid Style</a></li>
                              <li><a href="blog-detail.html">Single Blog</a></li>
                            </ul>
                          </li>
                          <li><a href="JavaScript:Void(0);">Authentication<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="login.html">Sign In</a></li>
                              <li><a href="register.html">Sign Up</a></li>
                              <li><a href="forgot-password.html">Forgot Password</a></li>
                              <li><a href="two-factor-auth.html">Two factor authentication</a></li>
                            </ul>
                          </li>
                          <li><a href="about-us.html">About Us</a></li>
                          <li><a href="career-page.html">Career Page</a></li>
                          <li><a href="help-center.html">Help Center</a></li>
                          <li><a href="faq.html">FAQ's</a></li>
                          <li><a href="404.html">Error Page</a></li>
                          <li><a href="pricing.html">Pricing</a></li>
                          <li><a href="privacy-policy.html">Privacy Policy</a></li>
                          <li><a href="JavaScript:Void(0);">Contact Us<span className="submenu-indicator" /></a>
                            <ul className="nav-dropdown nav-submenu">
                              <li><a href="contact-v1.html">Contact V.01</a></li>
                              <li><a href="contact-v2.html">Contact V0.2</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="JavaScript:Void(0);">Menu<span className="submenu-indicator" /></a>
                        <ul className="nav-dropdown nav-submenu xxl-menu">
                          <li>
                            <a href="home-stay.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-success fs-4"><i className="fa-solid fa-spa" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Stays</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="home-hotel.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-warning fs-4"><i className="fa-solid fa-hotel" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Hotel</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="home-flight.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-primary fs-4"><i className="fa-solid fa-plane" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Flight</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="home-rental.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-purple fs-4"><i className="fa-solid fa-eye" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Rental</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="home-car.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-seagreen fs-4"><i className="fa-brands fa-dropbox" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Cabs</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="home-stay.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-info fs-4"><i className="fa-solid fa-person-walking-luggage" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Destination</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li><a href="../documantion/index.html" target="_blank">Docs</a></li>
                    </ul>
                    <ul className="nav-menu nav-menu-social align-to-right">
                      <li className="currencyDropdown me-2">
                        <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></a>
                      </li>
                      <li className="languageDropdown me-2">
                        <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src="https://placehold.co/100x100" className="img-fluid" width={17} alt="Country" /></a>
                      </li>
                      <li className="list-buttons light">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</a>
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
            <div id="myCarousel" className="carousel slide carousel-fade mb-6">
              <div className="carousel-inner">
                <div className="carousel-item active bg-cover" style={{background: 'url(https://placehold.co/2200x1200)no-repeat'}} data-overlay={6}>
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Starts Your Trip with <span className="position-relative z-4">GeoTrip<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                            <svg width="185px" height="23px" viewBox="0 0 445.5 23">
                              <path className="fill-white opacity-7" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z">
                              </path>
                            </svg>
                          </span></span></h1>
                      <p className="fs-5 fw-light">Take a little break from the work strss of everyday. Discover plan trip and
                        explore beautiful destinations.</p>
                      <p className="mt-5"><a className="btn btn-primary px-5" href="#">Explore More<i className="fa-solid fa-arrow-trend-up ms-2" /></a></p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item bg-cover" style={{background: 'url(https://placehold.co/2200x1200)no-repeat'}} data-overlay={6}>
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Explore The World <span className="position-relative z-4">Around<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                            <svg width="185px" height="23px" viewBox="0 0 445.5 23">
                              <path className="fill-white opacity-7" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z">
                              </path>
                            </svg>
                          </span></span> You</h1>
                      <p className="fs-5 fw-light">Take a little break from the work strss of everyday. Discover plan trip and
                        explore beautiful destinations.</p>
                      <p className="mt-5"><a className="btn btn-primary px-5" href="#">Explore More<i className="fa-solid fa-arrow-trend-up ms-2" /></a></p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item bg-cover" style={{background: 'url(https://placehold.co/2200x1200)no-repeat'}} data-overlay={6}>
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Discover Beautiful Place with <span className="position-relative z-4">GeoTrip<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                            <svg width="185px" height="23px" viewBox="0 0 445.5 23">
                              <path className="fill-white opacity-7" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z">
                              </path>
                            </svg>
                          </span></span></h1>
                      <p className="fs-5 fw-light">Take a little break from the work strss of everyday. Discover plan trip and
                        explore beautiful destinations.</p>
                      <p className="mt-5"><a className="btn btn-primary px-5" href="#">Explore More<i className="fa-solid fa-arrow-trend-up ms-2" /></a></p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* ============================ Hero Banner End ================================== */}
            {/* ============================ Hero Search Start ================================== */}
            <div className="search-explore-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="search-wrap with-label overio">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="fliore">
                            <div className="rounded-top-3 d-inline-flex overflow-hidden">
                              <ul className="nav nav-tabs simple-tabs medium border-0 justify-content-center" id="tour-pills-tab" role="tablist">
                                <li className="nav-item">
                                  <a className="nav-link active" data-bs-toggle="tab" href="#hotels"><i className="fa-solid fa-hotel me-2" />Hotels</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" data-bs-toggle="tab" href="#flights"><i className="fa-solid fa-jet-fighter me-2" />Flights</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" data-bs-toggle="tab" href="#tours"><i className="fa-solid fa-globe me-2" />Tour</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" data-bs-toggle="tab" href="#cabs"><i className="fa-solid fa-car me-2" />Cab</a>
                                </li>
                              </ul>
                            </div>
                            <div className="tab-content bg-white rounded-bottom-3 shadow-wrap p-3">
                              <div className="tab-pane show active" id="hotels">
                                <div className="row gy-3 gx-md-3 gx-sm-2">
                                  <div className="col-xl-8 col-lg-7 col-md-12">
                                    <div className="row gy-3 gx-md-3 gx-sm-2">
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
                                    <div className="row gy-3 gx-md-3 gx-sm-2">
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
                                <div className="row gy-3 gx-md-3 gx-sm-2">
                                  <div className="col-xl-8 col-lg-7 col-md-12">
                                    <div className="row gy-3 gx-md-3 gx-sm-2">
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
                                    <div className="row gy-3 gx-md-3 gx-sm-2">
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
                                <div className="row gy-3 gx-md-3 gx-sm-2">
                                  <div className="col-xl-8 col-lg-7 col-md-12">
                                    <div className="row gy-3 gx-md-3 gx-sm-2">
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
                                    <div className="row gy-3 gx-md-3 gx-sm-2">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================ Hero Search End ================================== */}
            {/* =========================== Tours Offers Start ====================================== */}
            <section className="pt-5 pb-0">
              <div className="container">
                <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-3 g-4">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="pop-touritems">
                      <a href="#" className="card rounded-3 border br-dashed border-2 m-0">
                        <div className="offers-container d-flex align-items-center justify-content-start p-2">
                          <div className="offers-flex position-relative">
                            <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2"><span className="label text-light bg-danger fw-medium">20% Off</span></div>
                            <div className="offers-pic"><img src="https://placehold.co/800x800" className="img-fluid rounded" width={110} alt="" />
                            </div>
                          </div>
                          <div className="offers-captions ps-3">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>Los Angeles</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3D/4N</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 Person</span>
                            </p>
                            <div className="booking-wrapes d-flex align-items-center justify-content-between">
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$849 -
                                  $999</span></h5>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="pop-touritems">
                      <a href="#" className="card rounded-3 border br-dashed border-2 m-0">
                        <div className="offers-container d-flex align-items-center justify-content-start p-2">
                          <div className="offers-flex position-relative">
                            <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2"><span className="label text-light bg-danger fw-medium">15% Off</span></div>
                            <div className="offers-pic"><img src="https://placehold.co/800x800" className="img-fluid rounded" width={110} alt="" />
                            </div>
                          </div>
                          <div className="offers-captions ps-3">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>United Kingdom</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3D/4N</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">2 Person</span>
                            </p>
                            <div className="booking-wrapes d-flex align-items-center justify-content-between">
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$399 -
                                  $599</span></h5>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="pop-touritems">
                      <a href="#" className="card rounded-3 border br-dashed border-2 m-0">
                        <div className="offers-container d-flex align-items-center justify-content-start p-2">
                          <div className="offers-flex position-relative">
                            <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2"><span className="label text-light bg-danger fw-medium">30% Off</span></div>
                            <div className="offers-pic"><img src="https://placehold.co/800x800" className="img-fluid rounded" width={110} alt="" />
                            </div>
                          </div>
                          <div className="offers-captions ps-3">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>France</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3D/4N</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 Person</span>
                            </p>
                            <div className="booking-wrapes d-flex align-items-center justify-content-between">
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$569 -
                                  $799</span></h5>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* =========================== Tours Offers End ====================================== */}
            {/* ============================ Popular Attraction Start ================================== */}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Best Attraction In USA</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center gy-4 gx-xl-3 gx-lg-4 gx-4">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper p-2 pb-0">
                          <div className="popFlights-item-overHidden rounded-3">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="explot">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>Kansas City</span>
                              </h4>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>260 Things To Do</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper p-2 pb-0">
                          <div className="popFlights-item-overHidden rounded-3">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="explot">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>Los Angeles</span>
                              </h4>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>240 Things To Do</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper p-2 pb-0">
                          <div className="popFlights-item-overHidden rounded-3">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="explot">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>San Antonio</span>
                              </h4>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>312 Things To Do</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper p-2 pb-0">
                          <div className="popFlights-item-overHidden rounded-3">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="explot">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>San Francisco</span>
                              </h4>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>220 Things To Do</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper p-2 pb-0">
                          <div className="popFlights-item-overHidden rounded-3">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="explot">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>Nashville</span>
                              </h4>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>180 Things To Do</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper p-2 pb-0">
                          <div className="popFlights-item-overHidden rounded-3">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="explot">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>Philadelphia</span>
                              </h4>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>612 Things To Do</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper p-2 pb-0">
                          <div className="popFlights-item-overHidden rounded-3">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="explot">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>San Jose</span>
                              </h4>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>145 Things To Do</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 border br-dashed m-0">
                        <div className="flight-thumb-wrapper p-2 pb-0">
                          <div className="popFlights-item-overHidden rounded-3">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="explot">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>San Diego</span>
                              </h4>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>310 Things To Do</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
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
            {/* ============================ Popular Attraction Start ================================== */}
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
                          <div className="destinations-pics"><a href="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></a>
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
                          <div className="destinations-pics"><a href="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></a>
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
                          <div className="destinations-pics"><a href="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></a>
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
                          <div className="destinations-pics"><a href="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></a>
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
                          <div className="destinations-pics"><a href="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></a>
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
                          <div className="destinations-pics"><a href="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></a>
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
                          <div className="destinations-pics"><a href="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></a>
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
                          <div className="destinations-pics"><a href="#"><img src="https://placehold.co/800x800" className="img-fluid" alt="" /></a>
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
            {/* ============================ Popular Venues Start ================================== */}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Hot &amp; Trending Venues</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center gy-4 gx-xl-3 gx-3">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <div className="card rounded-3 border m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="d-flex align-items-center justify-content-between">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>Long Beach</span>
                              </h4>
                              <span className="city-rates"><i className="fa-solid fa-star text-warning me-1" /><span className="fw-bold text-dark">4.8</span></span>
                            </div>
                            <div className="detail ellipsis-container mt-2">
                              <p className="m-0 text-md">Cicero famously orated against his political opponent Lucius Sergius
                                Catilina.</p>
                            </div>
                            <div className="flight-footer">
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$492 -
                                  $799</span></h5>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>120 Rooms</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="booking-wrapes d-flex align-items-center mt-3">
                            <button className="btn btn-md btn-light-primary fw-medium rounded full-width me-2">Request Book<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            <button className="btn btn-md btn-light-success fs-5 px-3 rounded ms-1"><i className="fa-solid fa-heart" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <div className="card rounded-3 border m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="d-flex align-items-center justify-content-between">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>Jacksonville</span>
                              </h4>
                              <span className="city-rates"><i className="fa-solid fa-star text-warning me-1" /><span className="fw-bold text-dark">4.7</span></span>
                            </div>
                            <div className="detail ellipsis-container mt-2">
                              <p className="m-0 text-md">Cicero famously orated against his political opponent Lucius Sergius
                                Catilina.</p>
                            </div>
                            <div className="flight-footer">
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$492 -
                                  $799</span></h5>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>78 Rooms</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="booking-wrapes d-flex align-items-center mt-3">
                            <button className="btn btn-md btn-light-primary fw-medium rounded full-width me-2">Request Book<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            <button className="btn btn-md btn-light-success fs-5 px-3 rounded ms-1"><i className="fa-solid fa-heart" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <div className="card rounded-3 border m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="d-flex align-items-center justify-content-between">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>Kansas City</span>
                              </h4>
                              <span className="city-rates"><i className="fa-solid fa-star text-warning me-1" /><span className="fw-bold text-dark">4.9</span></span>
                            </div>
                            <div className="detail ellipsis-container mt-2">
                              <p className="m-0 text-md">Cicero famously orated against his political opponent Lucius Sergius
                                Catilina.</p>
                            </div>
                            <div className="flight-footer">
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$492 -
                                  $799</span></h5>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>65 Rooms</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="booking-wrapes d-flex align-items-center mt-3">
                            <button className="btn btn-md btn-light-primary fw-medium rounded full-width me-2">Request Book<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            <button className="btn btn-md btn-light-success fs-5 px-3 rounded ms-1"><i className="fa-solid fa-heart" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <div className="card rounded-3 border m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="d-flex align-items-center justify-content-between">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>Los Angeles</span>
                              </h4>
                              <span className="city-rates"><i className="fa-solid fa-star text-warning me-1" /><span className="fw-bold text-dark">4.6</span></span>
                            </div>
                            <div className="detail ellipsis-container mt-2">
                              <p className="m-0 text-md">Cicero famously orated against his political opponent Lucius Sergius
                                Catilina.</p>
                            </div>
                            <div className="flight-footer">
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$492 -
                                  $799</span></h5>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>23 Rooms</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="booking-wrapes d-flex align-items-center mt-3">
                            <button className="btn btn-md btn-light-primary fw-medium rounded full-width me-2">Request Book<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            <button className="btn btn-md btn-light-success fs-5 px-3 rounded ms-1"><i className="fa-solid fa-heart" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <div className="card rounded-3 border m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="d-flex align-items-center justify-content-between">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>San Antonio</span>
                              </h4>
                              <span className="city-rates"><i className="fa-solid fa-star text-warning me-1" /><span className="fw-bold text-dark">4.7</span></span>
                            </div>
                            <div className="detail ellipsis-container mt-2">
                              <p className="m-0 text-md">Cicero famously orated against his political opponent Lucius Sergius
                                Catilina.</p>
                            </div>
                            <div className="flight-footer">
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$492 -
                                  $799</span></h5>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>45 Rooms</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="booking-wrapes d-flex align-items-center mt-3">
                            <button className="btn btn-md btn-light-primary fw-medium rounded full-width me-2">Request Book<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            <button className="btn btn-md btn-light-success fs-5 px-3 rounded ms-1"><i className="fa-solid fa-heart" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <div className="card rounded-3 border m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="d-flex align-items-center justify-content-between">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>Philadelphia</span>
                              </h4>
                              <span className="city-rates"><i className="fa-solid fa-star text-warning me-1" /><span className="fw-bold text-dark">4.8</span></span>
                            </div>
                            <div className="detail ellipsis-container mt-2">
                              <p className="m-0 text-md">Cicero famously orated against his political opponent Lucius Sergius
                                Catilina.</p>
                            </div>
                            <div className="flight-footer">
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$492 -
                                  $799</span></h5>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>35 Rooms</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="booking-wrapes d-flex align-items-center mt-3">
                            <button className="btn btn-md btn-light-primary fw-medium rounded full-width me-2">Request Book<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            <button className="btn btn-md btn-light-success fs-5 px-3 rounded ms-1"><i className="fa-solid fa-heart" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <div className="card rounded-3 border m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="d-flex align-items-center justify-content-between">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>San Jose</span>
                              </h4>
                              <span className="city-rates"><i className="fa-solid fa-star text-warning me-1" /><span className="fw-bold text-dark">4.9</span></span>
                            </div>
                            <div className="detail ellipsis-container mt-2">
                              <p className="m-0 text-md">Cicero famously orated against his political opponent Lucius Sergius
                                Catilina.</p>
                            </div>
                            <div className="flight-footer">
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$492 -
                                  $799</span></h5>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>48 Rooms</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="booking-wrapes d-flex align-items-center mt-3">
                            <button className="btn btn-md btn-light-primary fw-medium rounded full-width me-2">Request Book<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            <button className="btn btn-md btn-light-success fs-5 px-3 rounded ms-1"><i className="fa-solid fa-heart" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <div className="card rounded-3 border m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <div className="d-flex align-items-center justify-content-between">
                              <h4 className="city fs-6 m-0 fw-bold">
                                <span>San Diego</span>
                              </h4>
                              <span className="city-rates"><i className="fa-solid fa-star text-warning me-1" /><span className="fw-bold text-dark">4.7</span></span>
                            </div>
                            <div className="detail ellipsis-container mt-2">
                              <p className="m-0 text-md">Cicero famously orated against his political opponent Lucius Sergius
                                Catilina.</p>
                            </div>
                            <div className="flight-footer">
                              <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$492 -
                                  $799</span></h5>
                              <div className="rates">
                                <div className="rat-reviews">
                                  <span>85 Rooms</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="booking-wrapes d-flex align-items-center mt-3">
                            <button className="btn btn-md btn-light-primary fw-medium rounded full-width me-2">Request Book<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            <button className="btn btn-md btn-light-success fs-5 px-3 rounded ms-1"><i className="fa-solid fa-heart" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Popular Venues Start ================================== */}
            {/* ============================ Video Helps End ================================== */}
            <section className="bg-cover" style={{background: 'url(https://placehold.co/2200x800)no-repeat'}} data-overlay={5}>
              <div className="ht-150" />
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="video-play-wrap text-center">
                      <div className="video-play-btn d-flex align-items-center justify-content-center">
                        <a href="https://www.youtube.com/watch?v=A8EI6JaFbv4" data-bs-toggle="modal" data-bs-target="#popup-video" className="square--90 circle bg-white fs-2 text-primary"><i className="fa-solid fa-play" /></a>
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
                    <div className="card border rounded-3">
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
                    <div className="card border rounded-3">
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
                    <div className="card border rounded-3">
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
                    <div className="card border rounded-3">
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
            {/* ============================ Our Experience End ================================== */}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-5 col-lg-5 col-md-6">
                    <div className="position-relative">
                      <img src="https://placehold.co/1000x1100" className="img-fluid rounded-3 position-relative z-1" alt="" />
                      <div className="position-absolute bottom-0 start-0 z-index-1 mb-4 ms-2">
                        <div className="bg-body d-flex d-inline-block rounded-3 position-relative p-3 z-2 shadow-wrap">
                          {/* Avatar group */}
                          <div className="me-4">
                            <h6 className="fw-normal">Client</h6>
                            {/* Avatar group */}
                            <ul className="avatar-group mb-0">
                              <li className="avatar avatar-md">
                                <img className="avatar-img circle" src="https://placehold.co/500x500" alt="avatar" />
                              </li>
                              <li className="avatar avatar-md">
                                <img className="avatar-img circle" src="https://placehold.co/500x500" alt="avatar" />
                              </li>
                              <li className="avatar avatar-md">
                                <img className="avatar-img circle" src="https://placehold.co/500x500" alt="avatar" />
                              </li>
                              <li className="avatar avatar-md">
                                <img className="avatar-img circle" src="https://placehold.co/500x500" alt="avatar" />
                              </li>
                              <li className="avatar avatar-md">
                                <div className="avatar-img circle bg-primary">
                                  <span className="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/* Rating */}
                          <div>
                            <h6 className="fw-normal mb-3">Rating</h6>
                            <h6 className="m-0">4.5<i className="fa-solid fa-star text-warning ms-1" /></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="bestExperience-block">
                      <p className="fw-medium text-primary text-md text-uppercase mb-0">Memories</p>
                      <h2 className="fw-bold lh-base">Our Attractive Experience And Services For you!</h2>
                      <p className="fw-light fs-6">Using dummy content or fake information in the Web design process can Fake data
                        can ensure a nice looking layout but it doesn’t reflect what a living, breathing application must
                        endure. Real data does. result in products with unrealistic assumptions and potentially serious design
                        flaws. A seemingly elegant design can quickly begin to bloat with unexpected content or break under the
                        weight of actual activity. </p>
                      <div className="d-inline-flex mt-4">
                        <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple me-3">
                          <h6 className="fw-bold fs-3 m-0">33</h6>
                          <p className="m-0 text-sm text-muted-2">Year Esperience</p>
                        </div>
                        <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple me-3">
                          <h6 className="fw-bold fs-3 m-0">78</h6>
                          <p className="m-0 text-sm text-muted-2">Destination Collaboration</p>
                        </div>
                        <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple">
                          <h6 className="fw-bold fs-3 m-0">25K</h6>
                          <p className="m-0 text-sm text-muted-2">Happy Customers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Our Experience End ================================== */}
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
                        <a href="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog image" /></a>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Destination</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><a href="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</a></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <a className="text-primary fw-medium" href="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="blogGrid-wrap d-flex flex-column h-100">
                      <div className="blogGrid-pics">
                        <a href="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog image" /></a>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Journey</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><a href="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</a></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <a className="text-primary fw-medium" href="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="blogGrid-wrap d-flex flex-column h-100">
                      <div className="blogGrid-pics">
                        <a href="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog image" /></a>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Business</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><a href="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</a></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <a className="text-primary fw-medium" href="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></a>
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
            <footer className="footer skin-dark-footer">
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-4">
                      <div className="footer-widget">
                        <div className="d-flex align-items-start flex-column mb-3">
                          <div className="d-inline-block"><img src="assets/img/logo-light.png" className="img-fluid" width={160} alt="Footer Logo" /></div>
                        </div>
                        <div className="footer-add pe-xl-3">
                          <p>We make your dream more beautiful &amp; enjoyful with lots of happiness.</p>
                        </div>
                        <div className="foot-socials">
                          <ul>
                            <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-facebook" /></a></li>
                            <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-linkedin" /></a></li>
                            <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-google-plus" /></a></li>
                            <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-twitter" /></a></li>
                            <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-dribbble" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="footer-widget">
                        <h4 className="widget-title">The Navigation</h4>
                        <ul className="footer-menu">
                          <li><a href="JavaScript:Void(0);">Talent Marketplace</a></li>
                          <li><a href="JavaScript:Void(0);">Payroll Services</a></li>
                          <li><a href="JavaScript:Void(0);">Direct Contracts</a></li>
                          <li><a href="JavaScript:Void(0);">Hire Worldwide</a></li>
                          <li><a href="JavaScript:Void(0);">Hire in the USA</a></li>
                          <li><a href="JavaScript:Void(0);">How to Hire</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="footer-widget">
                        <h4 className="widget-title">Our Resources</h4>
                        <ul className="footer-menu">
                          <li><a href="JavaScript:Void(0);">Free Business tools</a></li>
                          <li><a href="JavaScript:Void(0);">Affiliate Program</a></li>
                          <li><a href="JavaScript:Void(0);">Success Stories</a></li>
                          <li><a href="JavaScript:Void(0);">Upwork Reviews</a></li>
                          <li><a href="JavaScript:Void(0);">Resources</a></li>
                          <li><a href="JavaScript:Void(0);">Help &amp; Support</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                      <div className="footer-widget">
                        <h4 className="widget-title">The Company</h4>
                        <ul className="footer-menu">
                          <li><a href="JavaScript:Void(0);">About Us</a></li>
                          <li><a href="JavaScript:Void(0);">Leadership</a></li>
                          <li><a href="JavaScript:Void(0);">Contact Us</a></li>
                          <li><a href="JavaScript:Void(0);">Investor Relations</a></li>
                          <li><a href="JavaScript:Void(0);">Trust, Safety &amp; Security</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-widget">
                        <h4 className="widget-title">Payment Methods</h4>
                        <div className="pmt-wrap">
                          <img src="https://placehold.co/300x50" className="img-fluid" alt="" />
                        </div>
                        <div className="our-prtwrap mt-4">
                          <div className="prtn-title">
                            <p className="text-light opacity-75 fw-medium">Our Partners</p>
                          </div>
                          <div className="prtn-thumbs d-flex align-items-center justify-content-start">
                            <div className="pmt-wrap pe-4">
                              <img src="https://placehold.co/300x100" className="img-fluid" alt="" />
                            </div>
                            <div className="pmt-wrap pe-4">
                              <img src="https://placehold.co/300x100" className="img-fluid" alt="" />
                            </div>
                            <div className="pmt-wrap pe-4">
                              <img src="https://placehold.co/300x100" className="img-fluid" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom border-top">
                <div className="container">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <p className="mb-0">© 2023 GeoTrip Design by Themezhub.</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <ul className="p-0 d-flex justify-content-start justify-content-md-end text-start text-md-end m-0">
                        <li><a href="#">Terms of services</a></li>
                        <li className="ms-3"><a href="#">Privacy Policies</a></li>
                        <li className="ms-3"><a href="#">Cookies</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* ============================ Footer End ================================== */}
            {/* Log In Modal */}
            <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
                <div className="modal-content" id="loginmodal">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6">Sign In / Register</h4>
                    <a href="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></a>
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
                            <a href="JavaScript:Void(0);" className="text-primary fw-medium">Forget Password?</a>
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
                        <li className="col"><a href="#" className="square--60 border br-dashed rounded-2 full-width"><i className="fa-brands fa-facebook color--facebook fs-2" /></a></li>
                        <li className="col"><a href="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-whatsapp color--whatsapp fs-2" /></a></li>
                        <li className="col"><a href="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-linkedin color--linkedin fs-2" /></a></li>
                        <li className="col"><a href="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-dribbble color--dribbble fs-2" /></a></li>
                        <li className="col"><a href="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-twitter color--twitter fs-2" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="modal-footer align-items-center justify-content-center">
                    <p>Don't have an account yet?<a href="signup.html" className="text-primary fw-medium ms-1">Sign Up</a></p>
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
                    <a href="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></a>
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
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">United State Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Pound Sterling</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency active" href="#">
                                <div className="text-dark text-md fw-medium">Indian Rupees</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Euro</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Australian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Thai Baht</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </a>
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
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">United State Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Property currency</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Argentine Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Azerbaijani Manat</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Australian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Bahraini Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Brazilian Real</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Bulgarian Lev</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Canadian Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Chilean Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Colombian Peso</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Danish Krone</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Egyptian Pound</div>
                                <div className="text-muted-2 text-md text-uppercase">USD</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Hungarian Forint</div>
                                <div className="text-muted-2 text-md text-uppercase">GBP</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Japanese Yen</div>
                                <div className="text-muted-2 text-md text-uppercase">EUR</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Jordanian Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">Inr</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Kuwaiti Dinar</div>
                                <div className="text-muted-2 text-md text-uppercase">aud</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Malaysian Ringgit</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCurrency" href="#">
                                <div className="text-dark text-md fw-medium">Singapore Dollar</div>
                                <div className="text-muted-2 text-md text-uppercase">thb</div>
                              </a>
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
                    <a href="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></a>
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
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">United State Dollar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Pound Sterling</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry active" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Indian Rupees</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Euro</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Thai Baht</div>
                              </a>
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
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">United State Dollar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Property currency</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Argentine Peso</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Azerbaijani Manat</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Bahraini Dinar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Brazilian Real</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Bulgarian Lev</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Canadian Dollar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Chilean Peso</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Colombian Peso</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Danish Krone</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Egyptian Pound</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Hungarian Forint</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Japanese Yen</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Jordanian Dinar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Kuwaiti Dinar</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Malaysian Ringgit</div>
                              </a>
                            </li>
                            <li className="col">
                              <a className="selectCountry" href="#">
                                <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                                <div className="text-dark text-md fw-medium ps-2">Singapore Dollar</div>
                              </a>
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
            <a id="back2Top" className="top-scroll" title="Back to top" href="#"><i className="fa-solid fa-sort-up" /></a>
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
export default SliderHome;