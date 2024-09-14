import React from 'react'
import Header02 from '../header02';
import { D, Indigo } from '../../assets/images';
import { Link } from 'react-router-dom';
import FooterDark from '../footer-dark';

export const FlightBookingpage01 = () => {
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
                <h6 className="bs-stepper-label d-none d-md-block">Flight Review</h6> {/* Changed from Journey Review */}
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
            <div className="step" data-target="#step-3">
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
            <div className="card p-3 mb-xl-0 mb-lg-0 mb-3 " >
              {/* Booking Info */}
              <div className="card-box list-layout-block border br-dashed rounded-3 p-2">
                <div className="row">
                  <div className="col-xl-4 col-lg-3 col-md">
                    <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                      <img className="img-fluid h-100 object-fit" src={Indigo} alt="img" />
                    </div>
                  </div>
                  <div className="col-xl col-lg col-md ">
                    <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                      <h4 className="fs-5 fw-bold mb-1">Indigo Airlines</h4> {/* Dynamic Flight Name */}
                      <ul className="row g-2 p-0">
                        <li className="col-auto">
                          <p className="text-muted-2 text-md">DEL, BLR </p> {/* Source and Destination */}
                        </li>
                      </ul>
                      <div className="position-relative mt-3">
                        <div className="d-flex flex-wrap align-items-center">
                          <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                            <div className="export-icon text-muted-2"><i className="fa-solid fa-plane" /></div>
                            <div className="export ps-2">
                              <span className="mb-0 text-muted-2 fw-semibold me-1">First</span><span className="mb-0 text-muted-2 text-md">Class</span> {/* Flight Class */}
                            </div>
                          </div>
                          <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                            <div className="export-icon text-muted-2"><i className="fa-solid fa-clock" /></div>
                            <div className="export ps-2">
                              <span className="mb-0 text-muted-2 fw-semibold me-1">4h 40m</span><span className="mb-0 text-muted-2 text-md">Duration</span> {/* Flight Duration */}
                            </div>
                          </div>
                          <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                            <div className="export-icon text-muted-2"><i className="fa-solid fa-route" /></div>
                            <div className="export ps-2">
                              <span className="mb-0 text-muted-2 fw-semibold me-1">2 Stops</span> {/* Flight Stops */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flight Details */}
              <div className="flight-boxyhc mt-4">
                <h4 className="fs-5">Flight Details</h4>
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
                                  <div className="d-start fl-pic">
                                    <img className="img-fluid" src={Indigo} width={45} alt="img" />
                                  </div>
                                  <div className="d-end fl-title ps-2">
                                    <div className="text-dark fw-medium">Indigo</div>
                                    <div className="text-sm text-muted">First Class</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col">
                                <div className="row gx-3 align-items-center">
                                  <div className="col-auto">
                                    <div className="text-dark fw-bold">07:40</div>
                                    <div className="text-muted text-sm fw-medium">DEL</div> {/* Flight Source */}
                                  </div>
                                  <div className="col text-center">
                                    <div className="flightLine departure">
                                      <div />
                                      <div />
                                    </div>
                                    <div className="text-muted text-sm fw-medium mt-3">Direct</div> {/* Flight Type */}
                                  </div>
                                  <div className="col-auto">
                                    <div className="text-dark fw-bold">12:20</div>
                                    <div className="text-muted text-sm fw-medium">BLR</div> {/* Flight Destination */}
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-auto">
                                <div className="text-dark fw-medium">4H 40M</div> {/* Flight Duration */}
                                <div className="text-muted text-sm fw-medium">2 Stops</div> {/* Stops */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="flight-boxyhc mt-4">
                <h4 className="fs-5">Flight Ticket Cancellation Policy</h4>
                <div className="effloration-wrap">
                  <p>All Prices are in Indian Rupees and are subject to change without prior notice. For flight bookings, the full amount will be payable at the time of booking.</p>
                  <ul className="row align-items-center g-1 mb-0 p-0">
                    <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-circle-dot me-2" />Free Cancellation: Till 10 days before the travel date – 100% refund.</span></li>
                    <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-circle-dot me-2" />10 to 15 Days Before Travel: 75% refund + Non-Refundable Component.</span></li>
                    <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-circle-dot me-2" />Within 10 Days of Travel: 50% refund + Non-Refundable Component.</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="card rounded-3 mb-3 p-3 position-sticky top-0" style={{ top: "6rem" }}>
              <div className="row">
                <div className="col">
                  <div className="card-header mb-2">
                    <h5 className="card-title mb-0">Price Summary</h5>
                  </div>
                </div>
                <div className="col-auto align-self-end">
                  {/* <a className="text-muted fs-sm" href="#">
                    <i className="feather feather-edit me-1" />
                    Edit
                  </a> */}
                </div>
              </div>
              <ul className="list-group list-group-borderless mb-4">
                <li className="list-group-item d-flex justify-content-between align-items-start text-dark">
                  <span className="fw-medium">Base Fare</span>
                  <span className="mb-0">₹5,000.00</span> {/* Base Fare */}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start text-dark">
                  <span className="fw-medium">GST</span>
                  <span className="mb-0">₹500.00</span> {/* GST */}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start text-dark">
                  <span className="fw-medium">Other Charges</span>
                  <span className="mb-0">₹200.00</span> {/* Other Charges */}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start fw-bold text-dark fs-md">
                  <span className="fw-bold">Grand Total</span>
                  <span className="mb-0">₹5,700.00</span> {/* Grand Total */}
                </li>
              </ul>
              <Link to="/flight-Bookingpage02" className="btn btn-lg btn-block btn-outline-danger mb-1">Proceed to Payment</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="text-center d-flex align-items-center justify-content-center mt-4">
                <Link to="/flight-Bookingpage02" className="btn btn-md btn-primary fw-semibold">Next<i className="fa-solid fa-arrow-right ms-2" /></Link>
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
