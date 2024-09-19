import { D, trainImage } from '../../assets/images';
import { Link } from 'react-router-dom';
import Header02 from '../header02';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FooterDark from '../footer-dark';

const BookingPage = () => {
  // const location = useLocation();
  // const [trainData, setTrainData] = useState(null);

  // useEffect(() => {
  //   // Retrieve trainData from state or sessionStorage
  //   if (location.state && location.state.trainData) {
  //     setTrainData(location.state.trainData);
  //   } else {
  //     const storedTrainData = sessionStorage.getItem('trainData');
  //     if (storedTrainData) {
  //       setTrainData(JSON.parse(storedTrainData));
  //     }
  //   }
  // }, [location.state]);

  // if (!trainData) {
  //   return <div>Loading...</div>; // Show loading or fallback if no train data
  // }
  return (
    <div>
      <meta charSet="utf-8" />
      {/* ============================================================== */}
      {/* Preloader */}
      {/* ============================================================== */}
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      {/* ============================================================== */}
      {/* Main wrapper */}
      {/* ============================================================== */}
      <div id="main-wrapper">
        {/* ============================================================== */}
        {/* Top header */}
        {/* ============================================================== */}
        {/* Start Navigation */}
        <Header02 />
        {/* End Navigation */}
        <div className="clearfix" />
        {/* ============================================================== */}
        {/* Booking Page */}
        {/* ============================================================== */}
        <section className="pt-4 gray-simple position-relative">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div id="stepper" className="bs-stepper stepper-outline mb-5">
                  <div className="bs-stepper-header">
                    {/* Step 1 */}
                    <div className="step active" data-target="#step-1">
                      <div className="text-center">
                        <button type="button" className="step-trigger mb-0" id="steppertrigger1">
                          <span className="bs-stepper-circle">1</span>
                        </button>
                        <h6 className="bs-stepper-label d-none d-md-block">Journey Review</h6>
                      </div>
                    </div>
                    <div className="line" />
                    {/* Step 2 */}
                    {/* <div className="step" data-target="#step-2">
                      <div className="text-center">
                        <button type="button" className="step-trigger mb-0" id="steppertrigger2">
                          <span className="bs-stepper-circle">2</span>
                        </button>
                        <h6 className="bs-stepper-label d-none d-md-block">Traveler Info</h6>
                      </div>
                    </div>
                    <div className="line" /> */}
                    {/* Step 3 */}
                    <div className="step" data-target="#step-2">
                      <div className="text-center">
                        <button type="button" className="step-trigger mb-0" id="steppertrigger3">
                          <span className="bs-stepper-circle">2</span>
                        </button>
                        <h6 className="bs-stepper-label d-none d-md-block">Make Payment</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="row align-items-start">
                  <div className="col-xl-8 col-lg-8 col-md-12">
                    <div className="card p-3 mb-xl-0 mb-lg-0 mb-3 " style={{ marginLeft: "10rem" }}>
                      {/* Booking Info */}
                      <div className="card-box list-layout-block border br-dashed rounded-3 p-2">
                        <div className="row">
                          <div className="col-xl-4 col-lg-3 col-md">
                            <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                              <img className="img-fluid h-100 object-fit" src={D} alt="img" />
                            </div>
                          </div>
                          <div className="col-xl col-lg col-md ">
                            <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                              <h4 className="fs-5 fw-bold mb-1">Duronto Express</h4> {/* Dynamic Train Name */}

                              <ul className="row g-2 p-0">
                                <li className="col-auto">
                                  <p className="text-muted-2 text-md">NewDelhi, Bangalore </p> {/* Source and Destination */}
                                </li>
                                {/* <li className="col-auto">
                                      <p className="text-muted-2 text-md fw-bold">.</p>
                                    </li> */}
                                {/* <li className="col-auto">
                                      <p className="text-muted-2 text-md">Approx. 9.8 km to Railway Station</p> 
                                    </li> */}
                              </ul>

                              {/* <div className="d-flex align-items-center mb-3">
                                    <div className="col-auto">
                                      <div className="square--40 rounded-2 bg-primary text-light fw-semibold">4.8</div> 
                                    </div>
                                    <div className="col-auto text-start ps-2">
                                      <div className="text-md text-dark fw-medium">Exceptional</div>
                                      <div className="text-md text-muted-2">3,014 reviews</div> 
                                    </div>
                                  </div> */}

                              <div className="position-relative mt-3">
                                <div className="d-flex flex-wrap align-items-center">
                                  <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                    <div className="export-icon text-muted-2"><i className="fa-solid fa-chair" /></div>
                                    <div className="export ps-2">
                                      <span className="mb-0 text-muted-2 fw-semibold me-1">AC</span><span className="mb-0 text-muted-2 text-md">Class</span> {/* Train Class */}
                                    </div>
                                  </div>
                                  <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                    <div className="export-icon text-muted-2"><i className="fa-solid fa-ticket-alt" /></div>
                                    <div className="export ps-2">
                                      <span className="mb-0 text-muted-2 fw-semibold me-1">Lower</span><span className="mb-0 text-muted-2 text-md">Berth</span>
                                    </div>
                                  </div>
                                  <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                    <div className="export-icon text-muted-2"><i className="fa-solid fa-clock" /></div>
                                    <div className="export ps-2">
                                      <span className="mb-0 text-muted-2 fw-semibold me-1">6h</span><span className="mb-0 text-muted-2 text-md">Duration</span> {/* Train Journey Duration */}
                                    </div>
                                  </div>
                                  {/* <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                        <div className="export-icon text-muted-2"><i className="fa-solid fa-calendar-day" /></div>
                                        <div className="export ps-2 text-muted-2">
                                          <span className="mb-0 text-muted-2 fw-semibold me-1">Daily</span><span className="mb-0 text-muted-2 text-md">Service</span> 
                                        </div>
                                      </div> */}
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      {/* Flight info */}
                      <div className="flight-boxyhc mt-4">
                        <h4 className="fs-5">Train Detail</h4>
                        <div className="flights-accordion">
                          <div className="flights-list-item bg-white border rounded-3 p-2">
                            <div className="row gy-4 align-items-center justify-content-between">
                              <div className="col">
                                <div className="row">
                                  <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="d-flex align-items-center mb-2">
                                      <span className="label bg-light-primary text-primary me-2">Departure</span>
                                      <span className="text-muted text-sm">26 Jun 2023</span>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="row gx-lg-5 gx-3 gy-4 align-items-center">
                                      <div className="col-sm-auto">
                                        <div className="d-flex align-items-center justify-content-start">
                                          {/* <div className="d-start fl-pic">
                                                <img className="img-fluid" src="https://placehold.co/110x110" width={45} alt="img" />
                                              </div> */}
                                          <div className="d-end fl-title ps-2">
                                            <div className="text-dark fw-medium">Duronto Express Train</div>
                                            <div className="text-sm text-muted">First Class</div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="row gx-3 align-items-center">
                                          <div className="col-auto">
                                            <div className="text-dark fw-bold">07:40</div>
                                            <div className="text-muted text-sm fw-medium">DEL</div>
                                          </div>
                                          <div className="col text-center">
                                            <div className="flightLine return">
                                              <div />
                                              <div />
                                            </div>
                                            <div className="text-muted text-sm fw-medium mt-3">Direct</div>
                                          </div>
                                          <div className="col-auto">
                                            <div className="text-dark fw-bold">12:20</div>
                                            <div className="text-muted text-sm fw-medium">BLR</div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-auto">
                                        <div className="text-dark fw-medium">4H 40M</div>
                                        <div className="text-muted text-sm fw-medium">2 Stop</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="row mt-4">
                                      <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="d-flex align-items-center mb-2">
                                          <span className="label bg-light-success text-success me-2">Return</span>
                                          <span className="text-muted text-sm">26 Jun 2023</span>
                                        </div>
                                      </div>
                                      <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="row gx-lg-5 gx-3 gy-4 align-items-center">
                                          <div className="col-sm-auto">
                                            <div className="d-flex align-items-center justify-content-start">
                                              <div className="d-start fl-pic">
                                                <img className="img-fluid" src="https://placehold.co/110x110" width={45} alt="img" />
                                              </div>
                                              <div className="d-end fl-title ps-2">
                                                <div className="text-dark fw-medium">Qutar Airways</div>
                                                <div className="text-sm text-muted">Business</div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col">
                                            <div className="row gx-3 align-items-center">
                                              <div className="col-auto">
                                                <div className="text-dark fw-bold">14:10</div>
                                                <div className="text-muted text-sm fw-medium">DEL</div>
                                              </div>
                                              <div className="col text-center">
                                                <div className="flightLine return">
                                                  <div />
                                                  <div />
                                                </div>
                                                <div className="text-muted text-sm fw-medium mt-3">Direct</div>
                                              </div>
                                              <div className="col-auto">
                                                <div className="text-dark fw-bold">19:30</div>
                                                <div className="text-muted text-sm fw-medium">DOH</div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-md-auto">
                                            <div className="text-dark fw-medium">5H 30M</div>
                                            <div className="text-muted text-sm fw-medium">2 Stop</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Good to Know */}
                      <div className="flight-boxyhc mt-4">
                        <h4 className="fs-5">Train Ticket Cancellation Policy</h4>
                        <div className="effloration-wrap">
                          <p>All Prices are in Indian Rupees and are subject to change without prior notice. In the case FIT
                            Train inclusive package, the full amount of the Trains will be payable at the time of booking.
                          </p>
                          <ul className="row align-items-center g-1 mb-0 p-0">
                            <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-circle-dot me-2" />Free Cancellation: Till 10 days before the travel date – 100% refund.
                            </span></li>
                            <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-circle-dot me-2" />10 to 15 Days Before Travel: 75% refund + Non-Refundable Component.</span></li>
                            <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-circle-dot me-2" />15 to 30 Days Before Travel: 30% refund + Non-Refundable Component.
                              Component</span></li>
                            <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-circle-dot me-2" />Within 10 Days of Travel: No refund.</span></li>
                            {/* <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-circle-dot me-2" />10Hotel / Air: 100% in case of non-refundable
                                    ticket / Hotel Room</span></li>
                                <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-circle-dot me-2" />10Cruise / Visa: On Actuals</span></li> */}
                          </ul>
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
                  <Link to="/booking-page-3" className="btn btn-md btn-primary fw-semibold">Next<i className="fa-solid fa-arrow-right ms-2" /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Booking Page End ================================== */}
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


export default BookingPage;