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

const Pricing = () => {
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
                      <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Home<span className="submenu-indicator" /></Link>
                        <ul className="nav-dropdown nav-submenu">
                          <li>
                            <Link to="index.html">Home version 01</Link>
                          </li>
                          <li>
                            <Link to="home-2.html">Home version 02</Link>
                          </li>
                          <li>
                            <Link to="home-3.html">Home version 03</Link>
                          </li>
                          <li>
                            <Link to="home-4.html">Home version 04</Link>
                          </li>
                          <li>
                            <Link to="home-5.html">Home version 05</Link>
                          </li>
                          <li>
                            <Link to="slider-home.html">Home version 06</Link>
                          </li>
                        </ul>
                      </li>
                      <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Listing<span className="submenu-indicator" /></Link>
                        <ul className="nav-dropdown nav-submenu">
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Hotel<span className="submenu-indicator" /></Link>
                            <ul className="nav-dropdown nav-submenu">
                              <li><Link to="hotel-list-01.html">Hotel list 01</Link></li>
                              <li><Link to="hotel-list-02.html">Hotel list 02</Link></li>
                              <li><Link to="hotel-list-03.html">Hotel list 03</Link></li>
                              <li><Link to="hotel-detail.html">Hotel Detail 01</Link></li>
                              <li><Link to="hotel-detail-2.html">Hotel Detail 02</Link></li>
                            </ul>
                          </li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Flight<span className="submenu-indicator" /></Link>
                            <ul className="nav-dropdown nav-submenu">
                              <li><Link to="Train-list-01.html">Flight List 01</Link></li>
                              <li><Link to="flight-list-02.html">Flight List 02</Link></li>
                              <li><Link to="Flight-detail.html">Flight Detail</Link></li>
                            </ul>
                          </li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Rental<span className="submenu-indicator" /></Link>
                            <ul className="nav-dropdown nav-submenu">
                              <li><Link to="property-list-01.html">Rental List 01</Link></li>
                              <li><Link to="property-list-02.html">Rental List 02</Link></li>
                              <li><Link to="property-list-03.html">Rental List 03</Link></li>
                              <li><Link to="rental-detail.html">Rental Detail</Link></li>
                            </ul>
                          </li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Car<span className="submenu-indicator" /></Link>
                            <ul className="nav-dropdown nav-submenu">
                              <li><Link to="car-list-01.html">Car List 01</Link></li>
                              <li><Link to="car-list-02.html">Car List 02</Link></li>
                              <li><Link to="car-list-03.html">Car List 03</Link></li>
                              <li><Link to="car-detail.html">Car Detail</Link></li>
                            </ul>
                          </li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Destination<span className="submenu-indicator" /></Link>
                            <ul className="nav-dropdown nav-submenu">
                              <li><Link to="destination-01.html">Destination List 01</Link></li>
                              <li><Link to="destination-02.html">Destination List 02</Link></li>
                              <li><Link to="destination-03.html">Destination List 03</Link></li>
                              <li><Link to="destination-detail.html">Destination Detail</Link></li>
                            </ul>
                          </li>
                          <li>
                            <Link to="join-us.html">Join with GeoTrip</Link>
                          </li>
                          <li>
                            <Link to="add-listing.html">Add Listing</Link>
                          </li>
                          <li>
                            <Link to="compare-listing.html">Compare Listing</Link>
                          </li>
                          <li>
                            <Link to="booking-page.html">Booking Page</Link>
                          </li>
                          <li>
                            <Link to="my-profile.html">User Dashboard</Link>
                          </li>
                        </ul>
                      </li>
                      <li><Link to="#" >Pages<span className="submenu-indicator" /></Link>
                        <ul className="nav-dropdown nav-submenu">
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Blog<span className="submenu-indicator" /></Link>
                            <ul className="nav-dropdown nav-submenu">
                              <li><Link to="classic-blog.html">Classic Blog</Link></li>
                              <li><Link to="blog.html">Blog Grid Style</Link></li>
                              <li><Link to="blog-detail.html">Single Blog</Link></li>
                            </ul>
                          </li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Authentication<span className="submenu-indicator" /></Link>
                            <ul className="nav-dropdown nav-submenu">
                              <li><Link to="login.html">Sign In</Link></li>
                              <li><Link to="register.html">Sign Up</Link></li>
                              <li><Link to="forgot-password.html">Forgot Password</Link></li>
                              <li><Link to="two-factor-auth.html">Two factor authentication</Link></li>
                            </ul>
                          </li>
                          <li><Link to="about-us.html">About Us</Link></li>
                          <li><Link to="career-page.html">Career Page</Link></li>
                          <li><Link to="help-center.html">Help Center</Link></li>
                          <li><Link to="faq.html">FAQ's</Link></li>
                          <li><Link to="404.html">Error Page</Link></li>
                          <li><Link to="pricing.html">Pricing</Link></li>
                          <li><Link to="privacy-policy.html">Privacy Policy</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Contact Us<span className="submenu-indicator" /></Link>
                            <ul className="nav-dropdown nav-submenu">
                              <li><Link to="contact-v1.html">Contact V.01</Link></li>
                              <li><Link to="contact-v2.html">Contact V0.2</Link></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Menu<span className="submenu-indicator" /></Link>
                        <ul className="nav-dropdown nav-submenu xxl-menu">
                          <li>
                            <Link to="home-stay.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-success fs-4"><i className="fa-solid fa-spa" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Stays</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="home-hotel.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-warning fs-4"><i className="fa-solid fa-hotel" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Hotel</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="home-flight.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-primary fs-4"><i className="fa-solid fa-plane" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Flight</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="home-rental.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-purple fs-4"><i className="fa-solid fa-eye" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Rental</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="home-car.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-seagreen fs-4"><i className="fa-brands fa-dropbox" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Cabs</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="home-stay.html">
                              <div className="mega-advance-menu">
                                <div className="mega-first square--50 rounded-2 gray-simple text-info fs-4"><i className="fa-solid fa-person-walking-luggage" /></div>
                                <div className="mega-last ps-2">
                                  <h6 className="lh-base fs-6 font--bold m-0">Home Destination</h6>
                                  <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li><Link to="../documantion/index.html" target="_blank">Docs</Link></li>
                    </ul>
                    <ul className="nav-menu nav-menu-social align-to-right">
                      <li className="currencyDropdown me-2">
                        <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></Link>
                      </li>
                      <li className="languageDropdown me-2">
                        <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src="https://placehold.co/100x100" className="img-fluid" width={17} alt="Country" /></Link>
                      </li>
                      <li className="list-buttons">
                        <Link to="#" className="bg-primary" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</Link>
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
            {/* ============================ Booking Title ================================== */}
            <section className="position-relative">
              <div className="bg-light-primary position-absolute end-0 start-0 top-0 ht-500" />
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-9 col-lg-11 col-md-12">
                    <div className="prc-capstion text-center">
                      <div className="prc-captions position-relative">
                        <h1 className="xl-heading">Plan That Fit Your <span className="position-relative z-4">Scale<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                              <svg width="185px" height="23px" viewBox="0 0 445.5 23">
                                <path className="fill-primary opacity-7" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z">
                                </path>
                              </svg>
                            </span></span>
                        </h1>
                        <p className="fs-5">Simple, transparent pricing that grows with you. Try any plan free for 30 days</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-9 col-lg-11 col-md-12">
                    <div className="slideToggle position-relative">
                      <label className="form-switch">
                        <span className="beforeinput me-2 font--medium text-primary">MONTHLY</span>
                        <input type="checkbox" id="js-contcheckbox" />
                        <i />
                        <span className="afterinput ms-2 font--medium">ANNUAL</span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Start Price Item */}
                <div className="row align-items-center justify-content-center g-4 mt-5">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="card shadow rounded-4">
                      {/* Card header */}
                      <div className="card-header d-flex justify-content-start align-items-center border-bottom py-3 px-4">
                        <span className="square--60 circle bg-light-purple" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Most Popular" data-bs-original-title="Most Popular">
                          <i className="fa-solid fa-wand-magic-sparkles fs-2 text-purple" />
                        </span>
                        <div className="ps-2">
                          <h6 className="text-uppercase fw-semibold lh-base">Standard Plan</h6>
                          <div className="hstack gap-2">
                            <div className="prcs-currency text-center">
                              <h2 className="fs-1 pricingtable__highlight js-montlypricing mb-0">$49</h2>
                              <h2 className="fs-1 pricingtable__highlight js-yearlypricing mb-0">$99</h2>
                            </div>
                            <span className="h6 mb-0">/ Per User</span>
                          </div>
                        </div>
                      </div>
                      {/* Card body */}
                      <div className="card-body p-4">
                        {/* List */}
                        <ul className="list-unstyled mb-0">
                          <li className="mb-3"><i className="fa-regular fa-circle-check text-success me-2" />Up to 05 users monthly
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-check text-success me-2" />Free 5 host &amp; domain
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-check text-success me-2" />Custom infrastructure
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-check text-success me-2" />Access to all our room
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-xmark text-danger me-2" />24/7 dedicated Support
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-xmark text-danger me-2" />Unlimited updates</li>
                          <li><i className="fa-regular fa-circle-xmark text-danger me-2" />Landing pages &amp; Web widgets</li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer bg-white py-3 px-4">
                        <Link to="#" className="btn btn-dark fw-medium w-100 mb-0">Get Started</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="card border border-danger rounded-4">
                      {/* Card header */}
                      <div className="card-header d-flex justify-content-start align-items-center border-bottom py-3 px-4">
                        <span className="square--60 circle bg-light-primary" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Most Popular" data-bs-original-title="Most Popular">
                          <i className="fa-solid fa-wand-magic-sparkles fs-2 text-primary" />
                        </span>
                        <div className="ps-2">
                          <h6 className="text-uppercase fw-semibold text-primary lh-base">Professional Plan</h6>
                          <div className="hstack gap-2">
                            <div className="prcs-currency text-center">
                              <h2 className="fs-1 pricingtable__highlight js-montlypricing mb-0">$129</h2>
                              <h2 className="fs-1 pricingtable__highlight js-yearlypricing mb-0">$149</h2>
                            </div>
                            <span className="h6 mb-0">/ Per User</span>
                          </div>
                        </div>
                      </div>
                      {/* Card body */}
                      <div className="card-body p-4">
                        {/* List */}
                        <ul className="list-unstyled mb-0">
                          <li className="mb-3"><i className="fa-regular fa-circle-check text-success me-2" />Up to 05 users monthly
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-check text-success me-2" />Free 5 host &amp; domain
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-check text-success me-2" />Custom infrastructure
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-check text-success me-2" />Access to all our room
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-xmark text-danger me-2" />24/7 dedicated Support
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-xmark text-danger me-2" />Unlimited updates</li>
                          <li><i className="fa-regular fa-circle-xmark text-danger me-2" />Landing pages &amp; Web widgets</li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer bg-white py-3 px-4">
                        <Link to="#" className="btn btn-primary fw-medium w-100 mb-0">Get Started</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="card shadow rounded-4">
                      {/* Card header */}
                      <div className="card-header d-flex justify-content-start align-items-center border-bottom py-3 px-4">
                        <span className="square--60 circle bg-light-success" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Most Popular" data-bs-original-title="Most Popular">
                          <i className="fa-solid fa-wand-magic-sparkles fs-2 text-success" />
                        </span>
                        <div className="ps-2">
                          <h6 className="text-uppercase fw-semibold lh-base">Platinum Plan</h6>
                          <div className="hstack gap-2">
                            <div className="prcs-currency text-center">
                              <h2 className="fs-1 pricingtable__highlight js-montlypricing mb-0">$149</h2>
                              <h2 className="fs-1 pricingtable__highlight js-yearlypricing mb-0">$199</h2>
                            </div>
                            <span className="h6 mb-0">/ Per User</span>
                          </div>
                        </div>
                      </div>
                      {/* Card body */}
                      <div className="card-body p-4">
                        {/* List */}
                        <ul className="list-unstyled mb-0">
                          <li className="mb-3"><i className="fa-regular fa-circle-check text-success me-2" />Up to 05 users monthly
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-check text-success me-2" />Free 5 host &amp; domain
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-check text-success me-2" />Custom infrastructure
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-check text-success me-2" />Access to all our room
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-xmark text-danger me-2" />24/7 dedicated Support
                          </li>
                          <li className="mb-3"><i className="fa-regular fa-circle-xmark text-danger me-2" />Unlimited updates</li>
                          <li><i className="fa-regular fa-circle-xmark text-danger me-2" />Landing pages &amp; Web widgets</li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer bg-white py-3 px-4">
                        <Link to="#" className="btn btn-dark fw-medium w-100 mb-0">Get Started</Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Price Item */}
              </div>
            </section>
            {/* ============================ Booking Title ================================== */}
            {/* ============================ Client Section ================================== */}
            <section className="p-0">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="gray-simple rounded-3 py-5 px-xl-5 px-4">
                      <h5 className="text-center mb-4 mb-md-5">Trusted by more than 900 companies around the world</h5>
                      <div className="row align-items-center justify-content-center gx-5 gy-4 row-cols-xl-5 row-cols-lg-5 row-cols-md-5 row-cols-sm-2 row-cols-3">
                        <div className="col">
                          <div className="client-thumb text-center"><img src="https://placehold.co/300x100" className="img-fluid" alt="" /></div>
                        </div>
                        <div className="col">
                          <div className="client-thumb text-center"><img src="https://placehold.co/300x100" className="img-fluid" alt="" /></div>
                        </div>
                        <div className="col">
                          <div className="client-thumb text-center"><img src="https://placehold.co/300x100" className="img-fluid" alt="" /></div>
                        </div>
                        <div className="col">
                          <div className="client-thumb text-center"><img src="https://placehold.co/300x100" className="img-fluid" alt="" /></div>
                        </div>
                        <div className="col">
                          <div className="client-thumb text-center"><img src="https://placehold.co/300x100" className="img-fluid" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Client Section ================================== */}
            {/* ============================ FAQ's Section ================================== */}
            <section>
              <div className="container">
                <div className="row mb-4">
                  <div className="col-12 text-center">
                    <h2>Frequently Asked Questions</h2>
                    <p className="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
                  </div>
                </div>
                <div className="row align-items-start">
                  <div className="col-xl-12 col-lg-12 col-md-12 mt-4">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="accordion-item border">
                        <h2 className="accordion-header rounded-2">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            How To Book A resort with Booer.com?
                          </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">In a professional context it often happens that private or corporate
                            clients corder a publication to be made and presented with the actual content still not being ready.
                            Think of a news blog that's filled with content hourly on the day of going live. However, reviewers
                            tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the
                            internet. The are likely to focus on the text, disregarding the layout and its elements.</div>
                        </div>
                      </div>
                      <div className="accordion-item border rounded-2">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Can We Pay After Check-out?
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">In a professional context it often happens that private or corporate
                            clients corder a publication to be made and presented with the actual content still not being ready.
                            Think of a news blog that's filled with content hourly on the day of going live. However, reviewers
                            tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the
                            internet. The are likely to focus on the text, disregarding the layout and its elements.</div>
                        </div>
                      </div>
                      <div className="accordion-item border rounded-2">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Is This Collaborate with Oyo?
                          </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">In a professional context it often happens that private or corporate
                            clients corder a publication to be made and presented with the actual content still not being ready.
                            Think of a news blog that's filled with content hourly on the day of going live. However, reviewers
                            tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the
                            internet. The are likely to focus on the text, disregarding the layout and its elements.</div>
                        </div>
                      </div>
                      <div className="accordion-item border rounded-2">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Can We get Any Transport For Walk?
                          </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">In a professional context it often happens that private or corporate
                            clients corder a publication to be made and presented with the actual content still not being ready.
                            Think of a news blog that's filled with content hourly on the day of going live. However, reviewers
                            tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the
                            internet. The are likely to focus on the text, disregarding the layout and its elements.</div>
                        </div>
                      </div>
                      <div className="accordion-item border rounded-2">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Can We Get Any Extra Services?
                          </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">In a professional context it often happens that private or corporate
                            clients corder a publication to be made and presented with the actual content still not being ready.
                            Think of a news blog that's filled with content hourly on the day of going live. However, reviewers
                            tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the
                            internet. The are likely to focus on the text, disregarding the layout and its elements.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ FAQ's Section End ================================== */}
            {/* ============================ Help & Support Start ================================== */}
            <div className="py-5 bg-primary">
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-8 col-lg-8 col-md-8">
                    <h4 className="text-light fw-bold lh-base fs-1 m-0">Still, have a question?</h4>
                    <p className="text-light opacity-75 mb-0">He moonlights difficult engrossed it, sportsmen. Interested has all
                      Devonshire difficulty gay assistance joy.</p>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3">
                    <div className="text-md-end">
                      <button className="btn btn-whites text-dark fw-medium" type="button">Contact Us<i className="fa-regular fa-paper-plane ms-2" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================ Help & Support End ================================== */}
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
                            <li><Link to="#" onClick={(e)=>{e.preventDefault()}}><i className="fa-brands fa-facebook" /></Link></li>
                            <li><Link to="#" onClick={(e)=>{e.preventDefault()}}><i className="fa-brands fa-linkedin" /></Link></li>
                            <li><Link to="#" onClick={(e)=>{e.preventDefault()}}><i className="fa-brands fa-google-plus" /></Link></li>
                            <li><Link to="#" onClick={(e)=>{e.preventDefault()}}><i className="fa-brands fa-twitter" /></Link></li>
                            <li><Link to="#" onClick={(e)=>{e.preventDefault()}}><i className="fa-brands fa-dribbble" /></Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="footer-widget">
                        <h4 className="widget-title">The Navigation</h4>
                        <ul className="footer-menu">
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Talent Marketplace</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Payroll Services</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Direct Contracts</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Hire Worldwide</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Hire in the USA</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>How to Hire</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="footer-widget">
                        <h4 className="widget-title">Our Resources</h4>
                        <ul className="footer-menu">
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Free Business tools</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Affiliate Program</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Success Stories</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Upwork Reviews</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Resources</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Help &amp; Support</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                      <div className="footer-widget">
                        <h4 className="widget-title">The Company</h4>
                        <ul className="footer-menu">
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>About Us</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Leadership</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Contact Us</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Investor Relations</Link></li>
                          <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Trust, Safety &amp; Security</Link></li>
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
                    {/* <div className="col-xl-6 col-lg-6 col-md-6">
                      <p className="mb-0">© 2023 GeoTrip Design by Themezhub.</p>
                    </div> */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <ul className="p-0 d-flex justify-content-start justify-content-md-end text-start text-md-end m-0">
                        <li><Link to="#">Terms of services</Link></li>
                        <li className="ms-3"><Link to="#">Privacy Policies</Link></li>
                        <li className="ms-3"><Link to="#">Cookies</Link></li>
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
            {/**/}
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
export default Pricing;