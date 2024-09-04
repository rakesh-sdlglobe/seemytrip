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


const MyBooking = () => {
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
                    <a className="nav-brand" href="#"><img src={trainImage} className="logo" alt="" /></a>
                    <div className="nav-toggle" />
                    <div className="mobile_nav">
                      <ul>
                        <li className="currencyDropdown me-2">
                          <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span className="fw-medium">INR</span></a>
                        </li>
                        <li className="languageDropdown me-2">
                          <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img src="https://placehold.co/100x100" className="img-fluid" width={17} alt="Country" /></a>
                        </li>
                        <li className="notificationsDropdown btn-group account-drop me-2">
                          <a href="#" className="nav-link" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa-regular fa-bell fs-6" /></a>
                          <div className="dropdown-menu pull-right animated flipInX">
                            <div className="px-3 py-3 border-bottom d-flex align-items-center justify-content-between">
                              <div className="d-inline-flex align-items-center">
                                <h5 className="fs-6 fw-semibold mb-0">Hi, Dhananjay</h5><span className="badge bg-light-danger text-danger ms-2">4 new</span>
                              </div>
                              <div className="headr-right"><a href="#" className="text-md text-danger">Clear All</a></div>
                            </div>
                            <div className="notification-grousp px-3 py-3">
                              <div className="single-notts mb-3">
                                <h6 className="fw-semibold">your booking invoice send to your mail id.</h6>
                                <p className="text-md text-muted mb-0 lh-1">05 hours ago</p>
                              </div>
                              <div className="single-notts mb-3">
                                <h6 className="fw-semibold">Book your next flight for London with 20% off!</h6>
                                <p className="text-md text-muted mb-0 lh-1">Valid 10 Aug 2023</p>
                              </div>
                              <div className="single-notts mb-3">
                                <h6 className="fw-semibold">Sunshine saving are here 🌞 save 30% or more on a stay</h6>
                                <p className="text-md text-muted mb-0 lh-1">05 hours ago</p>
                              </div>
                              <div className="single-notts mb-3">
                                <h6 className="fw-semibold">make your shimla tour with 4 guest 50% off</h6>
                                <p className="text-md text-muted mb-0 lh-1">valid 26 sep 2023</p>
                              </div>
                            </div>
                            <div className="notts-footer text-center border-top px-3 py-3">
                              <a href="#" className="text-sm fw-medium text-seegreen">See all incoming activity</a>
                            </div>
                          </div>
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
                      <li className="notificationsDropdown btn-group account-drop me-2">
                        <a href="#" className="nav-link" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa-regular fa-bell fs-6" /></a>
                        <div className="dropdown-menu pull-right animated flipInX">
                          <div className="px-3 py-3 border-bottom d-flex align-items-center justify-content-between">
                            <div className="d-inline-flex align-items-center">
                              <h5 className="fs-6 fw-semibold mb-0">Hi, Dhananjay</h5><span className="badge bg-light-danger text-danger ms-2">4 new</span>
                            </div>
                            <div className="headr-right"><a href="#" className="text-md text-danger">Clear All</a></div>
                          </div>
                          <div className="notification-grousp px-3 py-3">
                            <div className="single-notts mb-3">
                              <h6 className="fw-semibold">your booking invoice send to your mail id.</h6>
                              <p className="text-md text-muted mb-0 lh-1">05 hours ago</p>
                            </div>
                            <div className="single-notts mb-3">
                              <h6 className="fw-semibold">Book your next flight for London with 20% off!</h6>
                              <p className="text-md text-muted mb-0 lh-1">Valid 10 Aug 2023</p>
                            </div>
                            <div className="single-notts mb-3">
                              <h6 className="fw-semibold">Sunshine saving are here 🌞 save 30% or more on a stay</h6>
                              <p className="text-md text-muted mb-0 lh-1">05 hours ago</p>
                            </div>
                            <div className="single-notts mb-3">
                              <h6 className="fw-semibold">make your shimla tour with 4 guest 50% off</h6>
                              <p className="text-md text-muted mb-0 lh-1">valid 26 sep 2023</p>
                            </div>
                          </div>
                          <div className="notts-footer text-center border-top px-3 py-3">
                            <a href="#" className="text-sm fw-medium text-seegreen">See all incoming activity</a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="btn-group account-drop">
                          <button type="button" className="btn btn-order-by-filt" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="https://placehold.co/500x500" className="img-fluid" alt="" />
                          </button>
                          <div className="dropdown-menu pull-right animated flipInX">
                            <div className="drp_menu_headr">
                              <h4>Hi, Dhananjay</h4>
                              <div className="drp_menu_headr-right"><button type="button" className="btn btn-md fw-medium btn-whites text-dark">Logout</button></div>
                            </div>
                            <ul>
                              <li><a href="my-profile.html"><i className="fa-regular fa-id-card me-2" />My Profile<span className="notti_coun style-1">4</span></a></li>
                              <li><a href="my-booking.html"><i className="fa-solid fa-ticket me-2" />My Booking</a></li>
                              <li><a href="travelers.html"><i className="fa-solid fa-user-group me-2" />Travelers</a></li>
                              <li><a href="payment-detail.html"><i className="fa-solid fa-wallet me-2" />Payment Details</a></li>
                              <li><a href="my-wishlists.html"><i className="fa-solid fa-shield-heart me-2" />My Wishlist</a></li>
                              <li><a href="login.html"><i className="fa-solid fa-power-off me-2" />Sign Out</a></li>
                            </ul>
                          </div>
                        </div>
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
            {/* ============================ User Dashboard Menu ============================ */}
            <div className="dashboard-menus border-top d-none d-lg-block">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <ul className="user-Dashboard-menu">
                      <li><a href="my-profile.html"><i className="fa-regular fa-id-card me-2" />My Profile</a></li>
                      <li className="active"><a href="my-booking.html"><i className="fa-solid fa-ticket me-2" />My Booking</a></li>
                      <li><a href="travelers.html"><i className="fa-solid fa-user-group me-2" />Travelers</a></li>
                      <li><a href="payment-detail.html"><i className="fa-solid fa-wallet me-2" />Payment Details</a></li>
                      <li><a href="my-wishlists.html"><i className="fa-solid fa-shield-heart me-2" />My Wishlist</a></li>
                      <li><a href="settings.html"><i className="fa-solid fa-sliders me-2" />Settings</a></li>
                      <li><a href="delete-account.html"><i className="fa-solid fa-trash-can me-2" />Delete Profile</a></li>
                      <li><a href="login.html"><i className="fa-solid fa-power-off me-2" />Sign Out</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================ End user Dashboard Menu ============================ */}
            {/* ============================ Booking Page ================================== */}
            <section className="pt-5 gray-simple position-relative">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                    <button className="btn btn-dark fw-medium full-width d-block d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDashboard" aria-controls="offcanvasDashboard"><i className="fa-solid fa-gauge me-2" />Dashboard
                      Navigation</button>
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasDashboard" aria-labelledby="offcanvasScrollingLabel">
                      <div className="offcanvas-header gray-simple">
                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                      </div>
                      <div className="offcanvas-body p-0">
                        <ul className="user-Dashboard-longmenu">
                          <li><a href="my-profile.html"><i className="fa-regular fa-id-card me-2" />My Profile</a></li>
                          <li className="active"><a href="my-booking.html"><i className="fa-solid fa-ticket me-2" />My Booking</a>
                          </li>
                          <li><a href="travelers.html"><i className="fa-solid fa-user-group me-2" />Travelers</a></li>
                          <li><a href="payment-detail.html"><i className="fa-solid fa-wallet me-2" />Payment Details</a></li>
                          <li><a href="my-wishlists.html"><i className="fa-solid fa-shield-heart me-2" />My Wishlist</a></li>
                          <li><a href="settings.html"><i className="fa-solid fa-sliders me-2" />Settings</a></li>
                          <li><a href="delete-account.html"><i className="fa-solid fa-trash-can me-2" />Delete Profile</a></li>
                          <li><a href="login.html"><i className="fa-solid fa-power-off me-2" />Sign Out</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-start justify-content-between gx-xl-4">
                  <div className="col-xl-4 col-lg-4 col-md-12">
                    <div className="card rounded-2 me-xl-5 mb-4">
                      <div className="card-top bg-primary position-relative">
                        <div className="position-absolute end-0 top-0 mt-4 me-3"><a href="login.html" className="square--40 circle bg-light-dark text-light"><i className="fa-solid fa-right-from-bracket" /></a></div>
                        <div className="py-5 px-3">
                          <div className="crd-thumbimg text-center">
                            <div className="p-2 d-flex align-items-center justify-content-center brd"><img src="https://placehold.co/500x500" className="img-fluid circle" width={120} alt="" /></div>
                          </div>
                          <div className="crd-capser text-center">
                            <h5 className="mb-0 text-light fw-semibold">Adam K. Divliars</h5>
                            <span className="text-light opacity-75 fw-medium text-md"><i className="fa-solid fa-location-dot me-2" />California, USA</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-middle px-4 py-5">
                        <div className="crdapproval-groups">
                          <div className="crdapproval-single d-flex align-items-center justify-content-start mb-4">
                            <div className="crdapproval-item">
                              <div className="square--50 circle bg-light-success text-success"><i className="fa-solid fa-envelope-circle-check fs-5" /></div>
                            </div>
                            <div className="crdapproval-caps ps-2">
                              <p className="fw-semibold text-dark lh-2 mb-0">Verified Email</p>
                              <p className="text-md text-muted lh-1 mb-0">10 Aug 2022</p>
                            </div>
                          </div>
                          <div className="crdapproval-single d-flex align-items-center justify-content-start mb-4">
                            <div className="crdapproval-item">
                              <div className="square--50 circle bg-light-success text-success"><i className="fa-solid fa-phone-volume fs-5" /></div>
                            </div>
                            <div className="crdapproval-caps ps-2">
                              <p className="fw-semibold text-dark lh-2 mb-0">Verified Mobile Number</p>
                              <p className="text-md text-muted lh-1 mb-0">12 Aug 2022</p>
                            </div>
                          </div>
                          <div className="crdapproval-single d-flex align-items-center justify-content-start">
                            <div className="crdapproval-item">
                              <div className="square--50 circle bg-light-warning text-warning"><i className="fa-solid fa-file-invoice fs-5" /></div>
                            </div>
                            <div className="crdapproval-caps ps-2">
                              <p className="fw-semibold text-dark lh-2 mb-0">Complete Basic Info</p>
                              <p className="text-md text-muted lh-1 mb-0">Not Verified</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-middle mt-5 mb-4 px-4">
                        <div className="revs-wraps mb-3">
                          <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                            <span className="text-dark fw-semibold text-md">Complete Your Profile</span>
                            <span className="text-dark fw-semibold text-md">75%</span>
                          </div>
                          <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={87} aria-valuemin={0} aria-valuemax={100} style={{height: '7px'}}>
                            <div className="progress-bar bg-success" style={{width: '87%'}} />
                          </div>
                        </div>
                        <div className="crd-upgrades">
                          <button className="btn btn-light-primary fw-medium full-width rounded-2" type="button"><i className="fa-solid fa-sun me-2" />Upgrade Pro</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-12">
                    {/* Personal Information */}
                    <div className="card">
                      <div className="card-header">
                        <h4><i className="fa-solid fa-ticket me-2" />My Bookings</h4>
                      </div>
                      <div className="card-body">
                        <div className="row align-items-center justify-content-start">
                          <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                              <li className="col-md-3 col-6">
                                <input type="checkbox" className="btn-check" id="allbkk" defaultChecked />
                                <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="allbkk">All
                                  Booking (24)</label>
                              </li>
                              <li className="col-md-3 col-6">
                                <input type="checkbox" className="btn-check" id="processing" />
                                <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="processing">Processing (02)</label>
                              </li>
                              <li className="col-md-3 col-6">
                                <input type="checkbox" className="btn-check" id="cancelled" />
                                <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="cancelled">Cancelled (04)</label>
                              </li>
                              <li className="col-md-3 col-6">
                                <input type="checkbox" className="btn-check" id="completed" />
                                <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="completed">Completed (10)</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="row align-items-center justify-content-start">
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            {/* Single Item */}
                            <div className="card border br-dashed mb-4">
                              {/* Card header */}
                              <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                {/* Icon and Title */}
                                <div className="d-flex align-items-center">
                                  <div className="square--50 circle bg-light-purple text-purple flex-shrink-0"><i className="fa-solid fa-plane" /></div>
                                  {/* Title */}
                                  <div className="ms-2">
                                    <h6 className="card-title text-dark fs-5 mb-1">Chicago To San Francisco</h6>
                                    <ul className="nav nav-divider small">
                                      <li className="nav-item text-muted">Booking ID: BKR24530</li>
                                      <li className="nav-item ms-2"><span className="label bg-light-success text-success">Business
                                          class</span></li>
                                    </ul>
                                  </div>
                                </div>
                                {/* Button */}
                                <div className="mt-2 mt-md-0">
                                  <a href="#" className="btn btn-md btn-light-seegreen fw-medium mb-0">Manage Booking</a>
                                </div>
                              </div>
                              {/* Card body */}
                              <div className="card-body">
                                <div className="row g-3">
                                  <div className="col-sm-6 col-md-4">
                                    <span>Departure time</span>
                                    <h6 className="mb-0">Fri 12 Aug 14:00 PM</h6>
                                  </div>
                                  <div className="col-sm-6 col-md-4">
                                    <span>Arrival time</span>
                                    <h6 className="mb-0">Fri 12 Aug 18:00 PM</h6>
                                  </div>
                                  <div className="col-md-4">
                                    <span>Booked by</span>
                                    <h6 className="mb-0">Daniel Duekaza</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Single Item */}
                            <div className="card border br-dashed mb-4">
                              {/* Card header */}
                              <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                {/* Icon and Title */}
                                <div className="d-flex align-items-center">
                                  <div className="square--50 circle bg-light-danger text-danger flex-shrink-0"><i className="fa-solid fa-hotel" /></div>
                                  {/* Title */}
                                  <div className="ms-2">
                                    <h6 className="card-title text-dark fs-5 mb-1">Dorsett Singapore</h6>
                                    <ul className="nav nav-divider small">
                                      <li className="nav-item text-muted">Booking ID: BKR24532</li>
                                      <li className="nav-item ms-2"><span className="text-dark fw-medium">3Day/4N</span></li>
                                    </ul>
                                  </div>
                                </div>
                                {/* Button */}
                                <div className="mt-2 mt-md-0">
                                  <a href="#" className="btn btn-md btn-light-seegreen fw-medium mb-0">Manage Booking</a>
                                </div>
                              </div>
                              {/* Card body */}
                              <div className="card-body">
                                <div className="row g-3">
                                  <div className="col-sm-6 col-md-4">
                                    <span>Check-In</span>
                                    <h6 className="mb-0">Tue 10 Sep 10:00 AM</h6>
                                  </div>
                                  <div className="col-sm-6 col-md-4">
                                    <span>Check-Out</span>
                                    <h6 className="mb-0">Tue 14 Sep 18:00 PM</h6>
                                  </div>
                                  <div className="col-md-4">
                                    <span>Total Guest</span>
                                    <h6 className="mb-0">3 Adult . 2 Child</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Single Item */}
                            <div className="card border br-dashed mb-4">
                              {/* Card header */}
                              <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                {/* Icon and Title */}
                                <div className="d-flex align-items-center">
                                  <div className="square--50 circle bg-light-success text-success flex-shrink-0"><i className="fa-solid fa-car" /></div>
                                  {/* Title */}
                                  <div className="ms-2">
                                    <h6 className="card-title text-dark fs-5 mb-1">Dallas To San Denver</h6>
                                    <ul className="nav nav-divider small">
                                      <li className="nav-item text-muted">Booking ID: BKR24534</li>
                                      <li className="nav-item ms-2"><span className="text-dark fw-medium">Accord, BMW</span></li>
                                    </ul>
                                  </div>
                                </div>
                                {/* Button */}
                                <div className="mt-2 mt-md-0">
                                  <a href="#" className="btn btn-md btn-light-seegreen fw-medium mb-0">Manage Booking</a>
                                </div>
                              </div>
                              {/* Card body */}
                              <div className="card-body">
                                <div className="row g-3">
                                  <div className="col-sm-6 col-md-4">
                                    <span>Pickup address</span>
                                    <h6 className="mb-0">220K.V Jail Road</h6>
                                  </div>
                                  <div className="col-sm-6 col-md-4">
                                    <span>Drop address</span>
                                    <h6 className="mb-0">11185 Mary Ball Rd</h6>
                                  </div>
                                  <div className="col-md-4">
                                    <span>Booked by</span>
                                    <h6 className="mb-0">Daniel Duekaza</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Single Item */}
                            <div className="card border br-dashed mb-4">
                              {/* Card header */}
                              <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                {/* Icon and Title */}
                                <div className="d-flex align-items-center">
                                  <div className="square--50 circle bg-light-purple text-purple flex-shrink-0"><i className="fa-solid fa-plane" /></div>
                                  {/* Title */}
                                  <div className="ms-2">
                                    <h6 className="card-title text-dark fs-5 mb-1">Chicago To Houston<label className="badge text-danger bg-light-danger fw-medium text-md ms-2">Cancelled</label></h6>
                                    <ul className="nav nav-divider small">
                                      <li className="nav-item text-muted">Booking ID: BKR24530</li>
                                      <li className="nav-item ms-2"><span className="label bg-light-success text-success">Business
                                          class</span></li>
                                    </ul>
                                  </div>
                                </div>
                                {/* Button */}
                                <div className="mt-2 mt-md-0">
                                  <a href="#" className="btn btn-md btn-light-seegreen fw-medium mb-0">ReBooking</a>
                                </div>
                              </div>
                              {/* Card body */}
                              <div className="card-body">
                                <div className="row g-3">
                                  <div className="col-sm-6 col-md-4">
                                    <span>Departure time</span>
                                    <h6 className="mb-0">Fri 12 Aug 14:00 PM</h6>
                                  </div>
                                  <div className="col-sm-6 col-md-4">
                                    <span>Arrival time</span>
                                    <h6 className="mb-0">Fri 12 Aug 18:00 PM</h6>
                                  </div>
                                  <div className="col-md-4">
                                    <span>Booked by</span>
                                    <h6 className="mb-0">Daniel Duekaza</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Single Item */}
                            <div className="card border br-dashed mb-4">
                              {/* Card header */}
                              <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                {/* Icon and Title */}
                                <div className="d-flex align-items-center">
                                  <div className="square--50 circle bg-light-purple text-purple flex-shrink-0"><i className="fa-solid fa-plane" /></div>
                                  {/* Title */}
                                  <div className="ms-2">
                                    <h6 className="card-title text-dark fs-5 mb-1">Chicago To Houston<label className="badge text-info bg-light-info fw-medium text-md ms-2">Processing</label></h6>
                                    <ul className="nav nav-divider small">
                                      <li className="nav-item text-muted">Booking ID: BKR24528</li>
                                      <li className="nav-item ms-2"><span className="label bg-light-success text-success">Business
                                          class</span></li>
                                    </ul>
                                  </div>
                                </div>
                                {/* Button */}
                                <div className="mt-2 mt-md-0">
                                  <a href="#" className="btn btn-md btn-light-seegreen fw-medium mb-0">Edit Booking</a>
                                </div>
                              </div>
                              {/* Card body */}
                              <div className="card-body">
                                <div className="row g-3">
                                  <div className="col-sm-6 col-md-4">
                                    <span>Departure time</span>
                                    <h6 className="mb-0">Fri 12 Aug 14:00 PM</h6>
                                  </div>
                                  <div className="col-sm-6 col-md-4">
                                    <span>Arrival time</span>
                                    <h6 className="mb-0">Fri 12 Aug 18:00 PM</h6>
                                  </div>
                                  <div className="col-md-4">
                                    <span>Booked by</span>
                                    <h6 className="mb-0">Daniel Duekaza</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Single Item */}
                            <div className="card border br-dashed">
                              {/* Card header */}
                              <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                {/* Icon and Title */}
                                <div className="d-flex align-items-center">
                                  <div className="square--50 circle bg-light-purple text-purple flex-shrink-0"><i className="fa-solid fa-plane" /></div>
                                  {/* Title */}
                                  <div className="ms-2">
                                    <h6 className="card-title text-dark fs-5 mb-1">Chicago To Houston<label className="badge text-success bg-light-success fw-medium text-md ms-2">Completed</label>
                                    </h6>
                                    <ul className="nav nav-divider small">
                                      <li className="nav-item text-muted">Booking ID: BKR24530</li>
                                      <li className="nav-item ms-2"><span className="label bg-light-success text-success">Business
                                          class</span></li>
                                    </ul>
                                  </div>
                                </div>
                                {/* Button */}
                                <div className="mt-2 mt-md-0">
                                  <a href="#" className="btn btn-md btn-light-seegreen fw-medium mb-0">Give Feedback</a>
                                </div>
                              </div>
                              {/* Card body */}
                              <div className="card-body">
                                <div className="row g-3">
                                  <div className="col-sm-6 col-md-4">
                                    <span>Departure time</span>
                                    <h6 className="mb-0">Fri 12 Aug 14:00 PM</h6>
                                  </div>
                                  <div className="col-sm-6 col-md-4">
                                    <span>Arrival time</span>
                                    <h6 className="mb-0">Fri 12 Aug 18:00 PM</h6>
                                  </div>
                                  <div className="col-md-4">
                                    <span>Booked by</span>
                                    <h6 className="mb-0">Daniel Duekaza</h6>
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
            </section>
            {/* ============================ Booking Page End ================================== */}
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
            {/* Print Invoice */}
            <div className="modal modal-lg fade" id="invoice" tabIndex={-1} role="dialog" aria-labelledby="invoicemodal" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered invoice-pop-form" role="document">
                <div className="modal-content" id="invoicemodal">
                  <div className="modal-header">
                    <h4 className="modal-title fs-6">Download your invoice</h4>
                    <a href="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></a>
                  </div>
                  <div className="modal-body">
                    <div className="invoiceblock-wrap p-3">
                      {/* Header */}
                      <div className="invoice-header d-flex align-items-center justify-content-between mb-4">
                        <div className="inv-fliop01 d-flex align-items-center justify-content-start">
                          <div className="inv-fliop01">
                            <div className="square--60 circle bg-light-primary text-primary"><i className="fa-solid fa-file-invoice fs-2" /></div>
                          </div>
                          <div className="inv-fliop01 ps-3">
                            <span className="text-uppercase d-block fw-semibold text-md text-dark lh-2 mb-0">Invoice #3256425</span>
                            <span className="text-sm text-muted lh-2"><i className="fa-regular fa-calendar me-1" />Issued Date 12 Jul
                              2023</span>
                          </div>
                        </div>
                        <div className="inv-fliop02"><span className="label text-success bg-light-success">Paid</span></div>
                      </div>
                      {/* Invoice Body */}
                      <div className="invoice-body">
                        {/* Invoice Top Body */}
                        <div className="invoice-bodytop">
                          <div className="row align-items-start justify-content-between">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                              <div className="invoice-desc mb-2">
                                <h6>From</h6>
                                <p className="text-md lh-2 mb-0">#782 Baghambari, Poudery Colony<br />Shivpuras Town,
                                  Canada<br />QBH230542 USA</p>
                              </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-6">
                              <div className="invoice-desc mb-2">
                                <h6>To</h6>
                                <p className="text-md lh-2 mb-0">Dhananjay Verma/ Brijendra Mani<br />220 K.V Jail Road Hydel
                                  Colony<br />271001 Gonda, UP</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Invoice Mid Body */}
                        <div className="invoice-bodymid py-2">
                          <ul className="gray rounded-3 p-3 m-0">
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                              <span className="fw-medium text-sm text-muted-2 mb-0">Account No.:</span>
                              <span className="fw-semibold text-muted-2 text-md">************4562</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                              <span className="fw-medium text-sm text-muted-2 mb-0">Reference ID:</span>
                              <span className="fw-semibold text-muted-2 text-md">#2326524</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                              <span className="fw-medium text-sm text-muted-2 mb-0">Pay by:</span>
                              <span className="fw-semibold text-muted-2 text-md">25 Aug 2023</span>
                            </li>
                          </ul>
                        </div>
                        {/* Invoice bott Body */}
                        <div className="invoice-bodybott py-2 mb-2">
                          <div className="table-responsive border rounded-2">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col">Item</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Qut.</th>
                                  <th scope="col">Total Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">king Bed in Royal Resort</th>
                                  <td>$514</td>
                                  <td>03</td>
                                  <td>$514</td>
                                </tr>
                                <tr>
                                  <th scope="row">Breakfast for 3</th>
                                  <td>$214</td>
                                  <td>03</td>
                                  <td>$214</td>
                                </tr>
                                <tr>
                                  <th scope="row">Tax &amp; VAT</th>
                                  <td>$78</td>
                                  <td>-</td>
                                  <td>$772.40</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="invoice-bodyaction">
                          <div className="d-flex text-end justify-content-end align-items-center">
                            <a href="#" className="btn btn-sm btn-light-success fw-medium me-2">Download Invoice</a>
                            <a href="#" className="btn btn-sm btn-light-primary fw-medium me-2">Print Invoice</a>
                          </div>
                        </div>
                      </div>
                    </div>
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
 export default MyBooking;