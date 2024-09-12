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


const BookingPage2= ()=>{
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
            {/* ============================ Booking Page ================================== */}
            <section className="pt-4 gray-simple position-relative">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div id="stepper" className="bs-stepper stepper-outline mb-5">
                      <div className="bs-stepper-header">
                        {/* Step 1 */}
                        <div className="step completed" data-target="#step-1">
                          <div className="text-center">
                            <button type="button" className="step-trigger mb-0" id="steppertrigger1">
                              <span className="bs-stepper-circle"><i className="fa-solid fa-check" /></span>
                            </button>
                            <h6 className="bs-stepper-label d-none d-md-block">Tour Review</h6>
                          </div>
                        </div>
                        <div className="line" />
                        {/* Step 2 */}
                        <div className="step active" data-target="#step-2">
                          <div className="text-center">
                            <button type="button" className="step-trigger mb-0" id="steppertrigger2">
                              <span className="bs-stepper-circle">2</span>
                            </button>
                            <h6 className="bs-stepper-label d-none d-md-block">Traveler Info</h6>
                          </div>
                        </div>
                        <div className="line" />
                        {/* Step 3 */}
                        <div className="step" data-target="#step-3">
                          <div className="text-center">
                            <button type="button" className="step-trigger mb-0" id="steppertrigger3">
                              <span className="bs-stepper-circle">3</span>
                            </button>
                            <h6 className="bs-stepper-label d-none d-md-block">Make Payment</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-start">
                  <div className="col-xl-12 col-lg-12 col-md-12 " style={{ marginLeft:"12rem" }}>
                    <div className="div-title d-flex align-items-center mb-3">
                      <h4>Guests Detail</h4>
                    </div>
                    <div className="row align-items-start">
                      <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="card mb-3">
                          <div className="card-header">
                            <h4>Guest 01</h4>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label className="form-label">First Name</label>
                                  <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label className="form-label">Last Name</label>
                                  <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label className="form-label">Date of Birth</label>
                                  <input type="date" className="form-control" />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label className="form-label">Passport Number</label>
                                  <input type="text" className="form-control" placeholder="Passport Number" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card mb-3">
                          <div className="card-header">
                            <h4>Guest 02</h4>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label className="form-label">First Name</label>
                                  <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label className="form-label">Last Name</label>
                                  <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label className="form-label">Date of Birth</label>
                                  <input type="date" className="form-control fw-semibold text-muted" />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label className="form-label">Passport Number</label>
                                  <input type="text" className="form-control" placeholder="Passport Number" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card mb-3">
                          <div className="card-header">
                            <h4>Guest 03</h4>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label className="form-label">First Name</label>
                                  <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label className="form-label">Last Name</label>
                                  <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label className="form-label">Date of Birth</label>
                                  <input type="date" className="form-control" />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label className="form-label">Passport Number</label>
                                  <input type="text" className="form-control" placeholder="Passport Number" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="side-block card rounded-2 p-3">
                          <h5 className="fw-semibold fs-6">Reservation Summary</h5>
                          <div className="mid-block rounded-2 border br-dashed p-2 mb-3">
                            <div className="row align-items-center justify-content-between g-2 mb-4">
                              <div className="col-6">
                                <div className="gray rounded-2 p-2">
                                  <span className="d-block text-muted-3 text-sm fw-medium text-uppercase mb-2">Check-In</span>
                                  <p className="text-dark fw-semibold lh-base text-md mb-0">27 Aug 2023</p>
                                  <span className="text-dark text-md">From 14:40</span>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="gray rounded-2 p-2">
                                  <span className="d-block text-muted-3 text-sm fw-medium text-uppercase mb-2">Check-Out</span>
                                  <p className="text-dark fw-semibold lh-base text-md mb-0">31 Aug 2023</p>
                                  <span className="text-dark text-md">By 11:50</span>
                                </div>
                              </div>
                            </div>
                            <div className="row align-items-center justify-content-between mb-4">
                              <div className="col-12">
                                <p className="text-muted-2 text-sm text-uppercase fw-medium mb-1">Total Length of Stay:</p>
                                <div className="d-flex align-items-center">
                                  <div className="square--30 circle text-seegreen bg-light-seegreen"><i className="fa-regular fa-calendar" /></div><span className="text-dark fw-semibold ms-2">3 Days \
                                    2 Night</span>
                                </div>
                              </div>
                            </div>
                            <div className="row align-items-center justify-content-between">
                              <div className="col-12">
                                <p className="text-muted-2 text-sm text-uppercase fw-medium mb-1">You Selected</p>
                                <div className="d-flex align-items-center flex-column">
                                  <p className="mb-0">King Bed Appolo Resort with 3 Rooms. <Link to="#" className="fw-medum text-primary">Change your Selection</Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bott-block d-block mb-3">
                            <h5 className="fw-semibold fs-6">Your Price Summary</h5>
                            <ul className="list-group list-group-borderless">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span className="fw-medium mb-0">Rooms &amp; Offers</span>
                                <span className="fw-semibold">$750.52</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span className="fw-medium mb-0">Total Discount<span className="badge rounded-1 text-bg-danger smaller mb-0 ms-2">10% off</span></span>
                                <span className="fw-semibold">-$7.50</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span className="fw-medium mb-0">8% Taxes % Fees</span>
                                <span className="fw-semibold">$10.10</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span className="fw-medium text-success mb-0">Total Price</span>
                                <span className="fw-semibold text-success">$772.40</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bott-block">
                            <button className="btn fw-medium btn-primary full-width" type="button">Request To Book</button>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="text-center d-flex align-items-center justify-content-center mt-4">
                      <Link to="/booking-page" className="btn btn-md btn-dark fw-semibold mx-2"><i className="fa-solid fa-arrow-left me-2" />Previous</Link>
                      <Link to="/booking-page-3" className="btn btn-md btn-primary fw-semibold mx-2">Make Your Payment<i className="fa-solid fa-arrow-right ms-2" /></Link>
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
                          <li><Link to="onClick={(e)=>{e.preventDefault()}}">Free Business tools</Link></li>
                          <li><Link to="onClick={(e)=>{e.preventDefault()}}">Affiliate Program</Link></li>
                          <li><Link to="onClick={(e)=>{e.preventDefault()}}">Success Stories</Link></li>
                          <li><Link to="onClick={(e)=>{e.preventDefault()}}">Upwork Reviews</Link></li>
                          <li><Link to="onClick={(e)=>{e.preventDefault()}}">Resources</Link></li>
                          <li><Link to="onClick={(e)=>{e.preventDefault()}}">Help &amp; Support</Link></li>
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


    export default BookingPage2;