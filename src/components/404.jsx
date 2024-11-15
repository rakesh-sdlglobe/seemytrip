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

const PageNotFound = () =>{
      return (
        <div>
         
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
            <div className="header header-theme">
              <div className="container">
                <nav id="navigation" className="navigation navigation-landscape">
                  <div className="nav-header">
                    <Link className="nav-brand static-show" to="#"><img src="assets/img/logo-light.png" className="logo" alt="" /></Link>
                    <Link className="nav-brand mob-show" to="#"><img src="assets/img/logo.png" className="logo" alt="" /></Link>
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
                      <li><Link to="#" onClick={(e)=>{e.preventDefault()}}>Pages<span className="submenu-indicator" /></Link>
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
                      <li className="list-buttons light">
                        <Link to="#" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</Link>
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
            {/* ============================ 404 Start ================================== */}
            <section className="position-relative">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-7 col-lg-9 col-md-12">
                    <div className="404-capstion text-center my-4">
                      <div className="404-captions">
                        <img src="assets/img/404.png" className="img-fluid mb-3" alt="" />
                        <h1 className="display-1 fw-bold mb-0">404</h1>
                        <h2>Ohhh ho, something went wrong!</h2>
                        <p className="fs-6">Cicero famously orated against his political opponent.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ 404 End ================================== */}
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


    export default PageNotFound;