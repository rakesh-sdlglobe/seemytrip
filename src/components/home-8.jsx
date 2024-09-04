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

const Home08 = () => {
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
                    <a className="nav-brand mob-show" href="#"><img src="assets/img/logo.png" className="logo" alt="" /></a>
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
                      <li className="list-buttons">
                        <a href="#" className="bg-primary" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</a>
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
                <div className="row justify-content-between align-items-center g-4">
                  {/* Banner Heading */}
                  <div className="col-cl-5 col-lg-6 col-md-12">
                    <div className="position-relative">
                      <h1>Book Your Perfect Escape with Geotrip</h1>
                      <p className="fs-5 fw-light mb-0">Take a little break from the work strss of everyday. Discover plan trip and explore beautiful destinations.</p>
                      <div className="d-flex align-items-start justify-content-start gap-3 flex-wrap mt-xl-5 mt-4">
                        <div className="bannrButton">
                          <button type="button" className="btn btn-whites fw-medium px-4 rounded-pill">Discover Place</button>
                        </div>
                        <div className="bannrHelp">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#popup-video" className="d-flex align-items-center justify-content-start gap-2">
                            <div className><div className="square--50 circle bg-white"><i className="fa-solid fa-play text-danger" /></div></div>
                            <div className="videoText fw-medium text-light">Watch Video</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Form */}
                  <div className="col-xl-5 col-lg-6 col-md-12">
                    <div className="searchableForm bg-transparents rounded-3 py-5 px-4">
                      <div className="searchableHead">
                        <ul className="nav nav-tabs medium justify-content-center" id="tour-pills-tab" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#hotels"><i className="fa-solid fa-hotel me-2" />Hotels</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="tab" href="#flights"><i className="fa-solid fa-jet-fighter me-2" />Flights</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#tours"><i className="fa-solid fa-globe me-2" />Tour</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#cabs"><i className="fa-solid fa-car me-2" />Cab</a>
                          </li>
                        </ul>
                      </div>
                      <div className="searchableCaps">
                        <div className="search-wrap">
                          <div className="tab-content p-xl-5 p-4">
                            <div className="tab-pane" id="hotels">
                              <div className="row gy-3 gx-md-3 gx-sm-3">
                                <div className="col-xl-12 col-lg-12 col-md-12">
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
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="form-group mb-0">
                                    <input type="text" className="form-control fw-bold" placeholder="Check-In & Check-Out" id="checkinout" readOnly="readonly" />
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
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
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="form-group mb-0">
                                    <button type="button" className="btn btn-primary full-width fw-medium">Search Hotels<i className="fa-solid fa-location-arrow ms-2" /></button>
                                  </div>
                                </div>
                              </div>	
                            </div>
                            <div className="tab-pane show active" id="flights">
                              <div className="row gx-lg-2 g-3">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="flx-start mb-sm-0 mb-2">
                                    <div className="form-check form-check-inline">
                                      <input className="form-check-input" type="radio" name="trip" id="return" defaultValue="option1" defaultChecked />
                                      <label className="form-check-label text-light" htmlFor="return">Return</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                      <input className="form-check-input" type="radio" name="trip" id="oneway" defaultValue="option2" />
                                      <label className="form-check-label text-light" htmlFor="oneway">One Way</label>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
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
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="form-group mb-0">
                                    <input className="form-control fw-bold choosedate" type="text" placeholder="Departure.." readOnly="readonly" />
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="form-group mb-0">
                                    <input className="form-control fw-bold choosedate" type="text" placeholder="Return.." readOnly="readonly" />
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
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
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="form-group mb-0">
                                    <button type="button" className="btn btn-primary full-width fw-medium">Search Flights<i className="fa-solid fa-location-arrow ms-2" /></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane" id="tours">
                              <div className="row gy-3 gx-md-2 gx-sm-2">
                                <div className="col-xl-12 col-lg-12 col-md-12">
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
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="form-group mb-0">
                                    <input type="text" className="form-control choosedate fw-bold" placeholder="Choose Date" readOnly="readonly" />
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
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
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="form-group mb-0">
                                    <button type="button" className="btn btn-primary full-width fw-medium">Discover Space<i className="fa-solid fa-location-arrow ms-2" /></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane" id="cabs">
                              <div className="row gy-3 gx-md-2 gx-sm-2">
                                <div className="col-xl-12 col-lg-12 col-md-12">
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
                                <div className="col-xl-12 col-lg-12 col-md-12">
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
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="form-group mb-0">
                                    <input type="text" className="form-control choosedate fw-bold" placeholder="Choose Pickup Date" readOnly="readonly" />
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="form-group mb-0">
                                    <button type="button" className="btn btn-primary full-width fw-medium">Search Cabs<i className="fa-solid fa-location-arrow ms-2" /></button>
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
            {/* ============================ Features Start ================================== */}
            <section className="border-bottom">
              <div className="container">
                <div className="row align-items-center justify-content-between g-4">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                    <div className="featuresBox-wrap">
                      <div className="featuresBox-icons mb-3">
                        <i className="fa-solid fa-sack-dollar fs-1 text-primary" />
                      </div>
                      <div className="featuresBox-captions">
                        <h4 className="fw-bold fs-5 lh-base mb-0">Easy Booking</h4>
                        <p className="m-0">Cicero famously orated against his political opponent Lucius Sergius Catilina.
                          Occasionally the first Oration against Catiline.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                    <div className="featuresBox-wrap">
                      <div className="featuresBox-icons mb-3">
                        <i className="fa-solid fa-umbrella-beach fs-1 text-primary" />
                      </div>
                      <div className="featuresBox-captions">
                        <h4 className="fw-bold fs-5 lh-base mb-0">Best Destinations</h4>
                        <p className="m-0">Cicero famously orated against his political opponent Lucius Sergius Catilina.
                          Occasionally the first Oration against Catiline.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                    <div className="featuresBox-wrap">
                      <div className="featuresBox-icons mb-3">
                        <i className="fa-solid fa-person-walking-luggage fs-1 text-primary" />
                      </div>
                      <div className="featuresBox-captions">
                        <h4 className="fw-bold fs-5 lh-base mb-0">Travel Guides</h4>
                        <p className="m-0">Cicero famously orated against his political opponent Lucius Sergius Catilina.
                          Occasionally the first Oration against Catiline.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                    <div className="featuresBox-wrap">
                      <div className="featuresBox-icons mb-3">
                        <i className="fa-solid fa-headset fs-1 text-primary" />
                      </div>
                      <div className="featuresBox-captions">
                        <h4 className="fw-bold fs-5 lh-base mb-0">Friendly Support</h4>
                        <p className="m-0">Cicero famously orated against his political opponent Lucius Sergius Catilina.
                          Occasionally the first Oration against Catiline.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Features End ================================== */}
            {/* ============================ Best Locations Design Start ================================== */}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Explore Popular Destination</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center gy-4 gx-3">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                      <div className="destination-blocks-pics p-1">
                        <a href="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></a>
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
                    <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                      <div className="destination-blocks-pics p-1">
                        <a href="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></a>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>Las Vegas</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">06 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">14 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                      <div className="destination-blocks-pics p-1">
                        <a href="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></a>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>San Antonio</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">09 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">16 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                      <div className="destination-blocks-pics p-1">
                        <a href="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></a>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>Houston</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">07 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">18 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                      <div className="destination-blocks-pics p-1">
                        <a href="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></a>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>San Francisco</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">4 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">12 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                      <div className="destination-blocks-pics p-1">
                        <a href="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></a>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>Nashville</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">16 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">7 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                      <div className="destination-blocks-pics p-1">
                        <a href="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></a>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>Philadelphia</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">14 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">10 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                      <div className="destination-blocks-pics p-1">
                        <a href="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></a>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>San Diego</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">12 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">32 Hotels</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Best Locations Design Start ================================== */}
            {/* ============================ Popular Routes Design Start ================================== */}
            <section className="gray-simple">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Explore Popular Routes</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center gy-4 gx-3">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                        <div className="flight-thumb-wrapper">
                          <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                            <div className="label bg-success text-light d-inline-flex align-items-center justify-content-center">
                              <span className="svg-icon text-light svg-icon-2hx me-1">
                                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                  <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                </svg>
                              </span>Featured
                            </div>
                          </div>
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
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>San Diego</span>
                              <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                  <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>San Jose</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 days</span>
                            </p>
                          </div>
                          <div className="flight-foots">
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                        <div className="flight-thumb-wrapper">
                          <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                            <div className="label bg-success text-light d-inline-flex align-items-center justify-content-center">
                              <span className="svg-icon text-light svg-icon-2hx me-1">
                                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                  <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                </svg>
                              </span>Featured
                            </div>
                          </div>
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>Dallas</span>
                              <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                  <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>Philadelphia</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 days</span>
                            </p>
                          </div>
                          <div className="flight-foots">
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>Denver</span>
                              <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                  <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>Nashville</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 days</span>
                            </p>
                          </div>
                          <div className="flight-foots">
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>Chicago</span>
                              <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                  <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>San Francisco</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 days</span>
                            </p>
                          </div>
                          <div className="flight-foots">
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                        <div className="flight-thumb-wrapper">
                          <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                            <div className="label bg-success text-light d-inline-flex align-items-center justify-content-center">
                              <span className="svg-icon text-light svg-icon-2hx me-1">
                                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                  <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                </svg>
                              </span>Featured
                            </div>
                          </div>
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>Houston</span>
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
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>San Antonio</span>
                              <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                  <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>Columbus</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 days</span>
                            </p>
                          </div>
                          <div className="flight-foots">
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="pop-touritem">
                      <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                        <div className="flight-thumb-wrapper">
                          <div className="popFlights-item-overHidden">
                            <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="touritem-middle position-relative p-3">
                          <div className="touritem-flexxer">
                            <h4 className="city fs-6 m-0 fw-bold">
                              <span>Los Angeles</span>
                              <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                  <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>Canada</span>
                            </h4>
                            <p className="detail ellipsis-container">
                              <span className="ellipsis-item__normal">Round-trip</span>
                              <span className="separate ellipsis-item__normal" />
                              <span className="ellipsis-item">3 days</span>
                            </p>
                          </div>
                          <div className="flight-foots">
                            <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                            </h5>
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
            {/* ============================ Popular Routes Design Start ================================== */}
            {/* ============================ Flexible features End ================================== */}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-5 col-lg-5 col-md-12 position-relative pe-xl-5 pe-lg-4 pe-md-4 pb-xl-5 pb-lg-4 pb-md-4">
                    <div className="position-relative mb-lg-0 mb-4">
                      <img src="https://placehold.co/1000x1100" className="img-fluid rounded-3 position-relative z-1" alt="" />
                      <div className="position-absolute bottom-0 start-0 z-index-1 mb-4 ms-5">
                        <div className="bg-body d-flex d-inline-block rounded-3 position-relative p-3 z-2">
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
                    <figure className="position-absolute bottom-0 end-0 d-none d-md-block mb-n5 me-n4">
                      <svg height={400} className="fill-primary opacity-25" viewBox="0 0 340 340">
                        <circle cx="194.2" cy="2.2" r="2.2" />
                        <circle cx="2.2" cy="2.2" r="2.2" />
                        <circle cx="218.2" cy="2.2" r="2.2" />
                        <circle cx="26.2" cy="2.2" r="2.2" />
                        <circle cx="242.2" cy="2.2" r="2.2" />
                        <circle cx="50.2" cy="2.2" r="2.2" />
                        <circle cx="266.2" cy="2.2" r="2.2" />
                        <circle cx="74.2" cy="2.2" r="2.2" />
                        <circle cx="290.2" cy="2.2" r="2.2" />
                        <circle cx="98.2" cy="2.2" r="2.2" />
                        <circle cx="314.2" cy="2.2" r="2.2" />
                        <circle cx="122.2" cy="2.2" r="2.2" />
                        <circle cx="338.2" cy="2.2" r="2.2" />
                        <circle cx="146.2" cy="2.2" r="2.2" />
                        <circle cx="170.2" cy="2.2" r="2.2" />
                        <circle cx="194.2" cy="26.2" r="2.2" />
                        <circle cx="2.2" cy="26.2" r="2.2" />
                        <circle cx="218.2" cy="26.2" r="2.2" />
                        <circle cx="26.2" cy="26.2" r="2.2" />
                        <circle cx="242.2" cy="26.2" r="2.2" />
                        <circle cx="50.2" cy="26.2" r="2.2" />
                        <circle cx="266.2" cy="26.2" r="2.2" />
                        <circle cx="74.2" cy="26.2" r="2.2" />
                        <circle cx="290.2" cy="26.2" r="2.2" />
                        <circle cx="98.2" cy="26.2" r="2.2" />
                        <circle cx="314.2" cy="26.2" r="2.2" />
                        <circle cx="122.2" cy="26.2" r="2.2" />
                        <circle cx="338.2" cy="26.2" r="2.2" />
                        <circle cx="146.2" cy="26.2" r="2.2" />
                        <circle cx="170.2" cy="26.2" r="2.2" />
                        <circle cx="194.2" cy="50.2" r="2.2" />
                        <circle cx="2.2" cy="50.2" r="2.2" />
                        <circle cx="218.2" cy="50.2" r="2.2" />
                        <circle cx="26.2" cy="50.2" r="2.2" />
                        <circle cx="242.2" cy="50.2" r="2.2" />
                        <circle cx="50.2" cy="50.2" r="2.2" />
                        <circle cx="266.2" cy="50.2" r="2.2" />
                        <circle cx="74.2" cy="50.2" r="2.2" />
                        <circle cx="290.2" cy="50.2" r="2.2" />
                        <circle cx="98.2" cy="50.2" r="2.2" />
                        <circle cx="314.2" cy="50.2" r="2.2" />
                        <circle cx="122.2" cy="50.2" r="2.2" />
                        <circle cx="338.2" cy="50.2" r="2.2" />
                        <circle cx="146.2" cy="50.2" r="2.2" />
                        <circle cx="170.2" cy="50.2" r="2.2" />
                        <circle cx="194.2" cy="74.2" r="2.2" />
                        <circle cx="2.2" cy="74.2" r="2.2" />
                        <circle cx="218.2" cy="74.2" r="2.2" />
                        <circle cx="26.2" cy="74.2" r="2.2" />
                        <circle cx="242.2" cy="74.2" r="2.2" />
                        <circle cx="50.2" cy="74.2" r="2.2" />
                        <circle cx="266.2" cy="74.2" r="2.2" />
                        <circle cx="74.2" cy="74.2" r="2.2" />
                        <circle cx="290.2" cy="74.2" r="2.2" />
                        <circle cx="98.2" cy="74.2" r="2.2" />
                        <circle cx="314.2" cy="74.2" r="2.2" />
                        <circle cx="122.2" cy="74.2" r="2.2" />
                        <circle cx="338.2" cy="74.2" r="2.2" />
                        <circle cx="146.2" cy="74.2" r="2.2" />
                        <circle cx="170.2" cy="74.2" r="2.2" />
                        <circle cx="194.2" cy="98.2" r="2.2" />
                        <circle cx="2.2" cy="98.2" r="2.2" />
                        <circle cx="218.2" cy="98.2" r="2.2" />
                        <circle cx="26.2" cy="98.2" r="2.2" />
                        <circle cx="242.2" cy="98.2" r="2.2" />
                        <circle cx="50.2" cy="98.2" r="2.2" />
                        <circle cx="266.2" cy="98.2" r="2.2" />
                        <circle cx="74.2" cy="98.2" r="2.2" />
                        <circle cx="290.2" cy="98.2" r="2.2" />
                        <circle cx="98.2" cy="98.2" r="2.2" />
                        <circle cx="314.2" cy="98.2" r="2.2" />
                        <circle cx="122.2" cy="98.2" r="2.2" />
                        <circle cx="338.2" cy="98.2" r="2.2" />
                        <circle cx="146.2" cy="98.2" r="2.2" />
                        <circle cx="170.2" cy="98.2" r="2.2" />
                        <circle cx="194.2" cy="122.2" r="2.2" />
                        <circle cx="2.2" cy="122.2" r="2.2" />
                        <circle cx="218.2" cy="122.2" r="2.2" />
                        <circle cx="26.2" cy="122.2" r="2.2" />
                        <circle cx="242.2" cy="122.2" r="2.2" />
                        <circle cx="50.2" cy="122.2" r="2.2" />
                        <circle cx="266.2" cy="122.2" r="2.2" />
                        <circle cx="74.2" cy="122.2" r="2.2" />
                        <circle cx="290.2" cy="122.2" r="2.2" />
                        <circle cx="98.2" cy="122.2" r="2.2" />
                        <circle cx="314.2" cy="122.2" r="2.2" />
                        <circle cx="122.2" cy="122.2" r="2.2" />
                        <circle cx="338.2" cy="122.2" r="2.2" />
                        <circle cx="146.2" cy="122.2" r="2.2" />
                        <circle cx="170.2" cy="122.2" r="2.2" />
                        <circle cx="194.2" cy="146.2" r="2.2" />
                        <circle cx="2.2" cy="146.2" r="2.2" />
                        <circle cx="218.2" cy="146.2" r="2.2" />
                        <circle cx="26.2" cy="146.2" r="2.2" />
                        <circle cx="242.2" cy="146.2" r="2.2" />
                        <circle cx="50.2" cy="146.2" r="2.2" />
                        <circle cx="266.2" cy="146.2" r="2.2" />
                        <circle cx="74.2" cy="146.2" r="2.2" />
                        <circle cx="290.2" cy="146.2" r="2.2" />
                        <circle cx="98.2" cy="146.2" r="2.2" />
                        <circle cx="314.2" cy="146.2" r="2.2" />
                        <circle cx="122.2" cy="146.2" r="2.2" />
                        <circle cx="338.2" cy="146.2" r="2.2" />
                        <circle cx="146.2" cy="146.2" r="2.2" />
                        <circle cx="170.2" cy="146.2" r="2.2" />
                        <circle cx="194.2" cy="170.2" r="2.2" />
                        <circle cx="2.2" cy="170.2" r="2.2" />
                        <circle cx="218.2" cy="170.2" r="2.2" />
                        <circle cx="26.2" cy="170.2" r="2.2" />
                        <circle cx="242.2" cy="170.2" r="2.2" />
                        <circle cx="50.2" cy="170.2" r="2.2" />
                        <circle cx="266.2" cy="170.2" r="2.2" />
                        <circle cx="74.2" cy="170.2" r="2.2" />
                        <circle cx="290.2" cy="170.2" r="2.2" />
                        <circle cx="98.2" cy="170.2" r="2.2" />
                        <circle cx="314.2" cy="170.2" r="2.2" />
                        <circle cx="122.2" cy="170.2" r="2.2" />
                        <circle cx="338.2" cy="170.2" r="2.2" />
                        <circle cx="146.2" cy="170.2" r="2.2" />
                        <circle cx="170.2" cy="170.2" r="2.2" />
                        <circle cx="194.2" cy="194.2" r="2.2" />
                        <circle cx="2.2" cy="194.2" r="2.2" />
                        <circle cx="218.2" cy="194.2" r="2.2" />
                        <circle cx="26.2" cy="194.2" r="2.2" />
                        <circle cx="242.2" cy="194.2" r="2.2" />
                        <circle cx="50.2" cy="194.2" r="2.2" />
                        <circle cx="266.2" cy="194.2" r="2.2" />
                        <circle cx="74.2" cy="194.2" r="2.2" />
                        <circle cx="290.2" cy="194.2" r="2.2" />
                        <circle cx="98.2" cy="194.2" r="2.2" />
                        <circle cx="314.2" cy="194.2" r="2.2" />
                        <circle cx="122.2" cy="194.2" r="2.2" />
                        <circle cx="338.2" cy="194.2" r="2.2" />
                        <circle cx="146.2" cy="194.2" r="2.2" />
                        <circle cx="170.2" cy="194.2" r="2.2" />
                        <circle cx="194.2" cy="218.2" r="2.2" />
                        <circle cx="2.2" cy="218.2" r="2.2" />
                        <circle cx="218.2" cy="218.2" r="2.2" />
                        <circle cx="26.2" cy="218.2" r="2.2" />
                        <circle cx="242.2" cy="218.2" r="2.2" />
                        <circle cx="50.2" cy="218.2" r="2.2" />
                        <circle cx="266.2" cy="218.2" r="2.2" />
                        <circle cx="74.2" cy="218.2" r="2.2" />
                        <circle cx="290.2" cy="218.2" r="2.2" />
                        <circle cx="98.2" cy="218.2" r="2.2" />
                        <circle cx="314.2" cy="218.2" r="2.2" />
                        <circle cx="122.2" cy="218.2" r="2.2" />
                        <circle cx="338.2" cy="218.2" r="2.2" />
                        <circle cx="146.2" cy="218.2" r="2.2" />
                        <circle cx="170.2" cy="218.2" r="2.2" />
                        <circle cx="194.2" cy="242.2" r="2.2" />
                        <circle cx="2.2" cy="242.2" r="2.2" />
                        <circle cx="218.2" cy="242.2" r="2.2" />
                        <circle cx="26.2" cy="242.2" r="2.2" />
                        <circle cx="242.2" cy="242.2" r="2.2" />
                        <circle cx="50.2" cy="242.2" r="2.2" />
                        <circle cx="266.2" cy="242.2" r="2.2" />
                        <circle cx="74.2" cy="242.2" r="2.2" />
                        <circle cx="290.2" cy="242.2" r="2.2" />
                        <circle cx="98.2" cy="242.2" r="2.2" />
                        <circle cx="314.2" cy="242.2" r="2.2" />
                        <circle cx="122.2" cy="242.2" r="2.2" />
                        <circle cx="338.2" cy="242.2" r="2.2" />
                        <circle cx="146.2" cy="242.2" r="2.2" />
                        <circle cx="170.2" cy="242.2" r="2.2" />
                        <circle cx="194.2" cy="266.2" r="2.2" />
                        <circle cx="2.2" cy="266.2" r="2.2" />
                        <circle cx="218.2" cy="266.2" r="2.2" />
                        <circle cx="26.2" cy="266.2" r="2.2" />
                        <circle cx="242.2" cy="266.2" r="2.2" />
                        <circle cx="50.2" cy="266.2" r="2.2" />
                        <circle cx="266.2" cy="266.2" r="2.2" />
                        <circle cx="74.2" cy="266.2" r="2.2" />
                        <circle cx="290.2" cy="266.2" r="2.2" />
                        <circle cx="98.2" cy="266.2" r="2.2" />
                        <circle cx="314.2" cy="266.2" r="2.2" />
                        <circle cx="122.2" cy="266.2" r="2.2" />
                        <circle cx="338.2" cy="266.2" r="2.2" />
                        <circle cx="146.2" cy="266.2" r="2.2" />
                        <circle cx="170.2" cy="266.2" r="2.2" />
                        <circle cx="194.2" cy="290.2" r="2.2" />
                        <circle cx="2.2" cy="290.2" r="2.2" />
                        <circle cx="218.2" cy="290.2" r="2.2" />
                        <circle cx="26.2" cy="290.2" r="2.2" />
                        <circle cx="242.2" cy="290.2" r="2.2" />
                        <circle cx="50.2" cy="290.2" r="2.2" />
                        <circle cx="266.2" cy="290.2" r="2.2" />
                        <circle cx="74.2" cy="290.2" r="2.2" />
                        <circle cx="290.2" cy="290.2" r="2.2" />
                        <circle cx="98.2" cy="290.2" r="2.2" />
                        <circle cx="314.2" cy="290.2" r="2.2" />
                        <circle cx="122.2" cy="290.2" r="2.2" />
                        <circle cx="338.2" cy="290.2" r="2.2" />
                        <circle cx="146.2" cy="290.2" r="2.2" />
                        <circle cx="170.2" cy="290.2" r="2.2" />
                        <circle cx="194.2" cy="314.2" r="2.2" />
                        <circle cx="2.2" cy="314.2" r="2.2" />
                        <circle cx="218.2" cy="314.2" r="2.2" />
                        <circle cx="26.2" cy="314.2" r="2.2" />
                        <circle cx="242.2" cy="314.2" r="2.2" />
                        <circle cx="50.2" cy="314.2" r="2.2" />
                        <circle cx="266.2" cy="314.2" r="2.2" />
                        <circle cx="74.2" cy="314.2" r="2.2" />
                        <circle cx="290.2" cy="314.2" r="2.2" />
                        <circle cx="98.2" cy="314.2" r="2.2" />
                        <circle cx="314.2" cy="314.2" r="2.2" />
                        <circle cx="122.2" cy="314.2" r="2.2" />
                        <circle cx="338.2" cy="314.2" r="2.2" />
                        <circle cx="146.2" cy="314.2" r="2.2" />
                        <circle cx="170.2" cy="314.2" r="2.2" />
                        <circle cx="194.2" cy="338.2" r="2.2" />
                        <circle cx="2.2" cy="338.2" r="2.2" />
                        <circle cx="218.2" cy="338.2" r="2.2" />
                        <circle cx="26.2" cy="338.2" r="2.2" />
                        <circle cx="242.2" cy="338.2" r="2.2" />
                        <circle cx="50.2" cy="338.2" r="2.2" />
                        <circle cx="266.2" cy="338.2" r="2.2" />
                        <circle cx="74.2" cy="338.2" r="2.2" />
                        <circle cx="290.2" cy="338.2" r="2.2" />
                        <circle cx="98.2" cy="338.2" r="2.2" />
                        <circle cx="314.2" cy="338.2" r="2.2" />
                        <circle cx="122.2" cy="338.2" r="2.2" />
                        <circle cx="338.2" cy="338.2" r="2.2" />
                        <circle cx="146.2" cy="338.2" r="2.2" />
                        <circle cx="170.2" cy="338.2" r="2.2" />
                      </svg>
                    </figure>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="row gy-xl-5 g-4">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="fbxer-wraps">
                          <div className="fbxerWraps-icons mb-3">
                            <div className="square--70 circle bg-light-primary"><i className="fa-solid fa-gifts text-primary fs-3" />
                            </div>
                          </div>
                          <div className="fbxerWraps-caps">
                            <h5 className="fw-bold fs-6">Get Superb Deals</h5>
                            <p className="fw-light fs-6 m-0">Just fill up a page with draft copy about the client’s business and
                              they will actually read it and comment on it. They will be drawn to it, fiercely. Do it the wrong
                              way.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="fbxer-wraps">
                          <div className="fbxerWraps-icons mb-3">
                            <div className="square--70 circle bg-light-info"><i className="fa-solid fa-gifts text-info fs-3" /></div>
                          </div>
                          <div className="fbxerWraps-caps">
                            <h5 className="fw-bold fs-6">100% Transparency Price</h5>
                            <p className="fw-light fs-6 m-0">Just fill up a page with draft copy about the client’s business and
                              they will actually read it and comment on it. They will be drawn to it, fiercely. Do it the wrong
                              way.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="fbxer-wraps">
                          <div className="fbxerWraps-icons mb-3">
                            <div className="square--70 circle bg-light-success"><i className="fa-solid fa-gifts text-success fs-3" />
                            </div>
                          </div>
                          <div className="fbxerWraps-caps">
                            <h5 className="fw-bold fs-6">Pure Trusted &amp; Free</h5>
                            <p className="fw-light fs-6 m-0">Just fill up a page with draft copy about the client’s business and
                              they will actually read it and comment on it. They will be drawn to it, fiercely. Do it the wrong
                              way.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="fbxer-wraps">
                          <div className="fbxerWraps-icons mb-3">
                            <div className="square--70 circle bg-light-warning"><i className="fa-solid fa-gifts text-warning fs-3" />
                            </div>
                          </div>
                          <div className="fbxerWraps-caps">
                            <h5 className="fw-bold fs-6">Travel With Confidence</h5>
                            <p className="fw-light fs-6 m-0">Just fill up a page with draft copy about the client’s business and
                              they will actually read it and comment on it. They will be drawn to it, fiercely. Do it the wrong
                              way.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Flexible features End ================================== */}
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
                    <div className="card border-0 rounded-3">
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
                    <div className="card border-0 rounded-3">
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
                    <div className="card border-0 rounded-3">
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
                    <div className="card border-0 rounded-3">
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
            <div className="py-5 bg-primary">
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <h4 className="text-light fw-bold lh-base m-0">Join our Newsletter To Keep Up To Date With Us!</h4>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-6">
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
              </div>
            </div>
            {/* ============================ Call To Action Start ================================== */}
            {/* ============================ Footer Start ================================== */}
            <footer className="footer skin-light-footer">
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-4">
                      <div className="footer-widget">
                        <div className="d-flex align-items-start flex-column mb-3">
                          <div className="d-inline-block"><img src="assets/img/logo.png" className="img-fluid" width={160} alt="Footer Logo" />
                          </div>
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
                            <p className="text-muted-2 fw-medium">Our Partners</p>
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

export default Home08;