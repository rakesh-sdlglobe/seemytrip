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
import Footer from './footer';

const FlightDetail = () => {
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
            <div className="header header-dark">
              <div className="container">
                <nav id="navigation" className="navigation navigation-landscape">
                  <div className="nav-header">
                    <Link className="nav-brand static-show" to="#"><img src={trainImage} className="logo" alt="" /></Link>
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
                      <li className="active"><Link to="home-stay.html"><i className="fa-solid fa-umbrella-beach me-2" />Stays</Link></li>
                      <li><Link to="home-flight.html"><i className="fa-solid fa-jet-fighter me-2" />Flights</Link></li>
                      <li><Link to="home-hotel.html"><i className="fa-solid fa-spa me-2" />Hotels</Link></li>
                      <li><Link to="home-rental.html"><i className="fa-solid fa-house-circle-check me-2" />Rental</Link></li>
                      <li><Link to="home-car.html"><i className="fa-solid fa-car me-2" />Cars</Link></li>
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
            {/* ============================ Hotel Details Start ================================== */}
            <section className="pt-3 gray-simple">
              <div className="container">
                <div className="row">
                  {/* Breadcrumb */}
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="#" className="text-primary">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#" className="text-primary">Flight</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Delhi To Los Angeles</li>
                      </ol>
                    </nav>
                  </div>
                  {/* Flight Info */}
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row">
                      <div className="col-xl-9 col-lg-8 col-md-12">
                        <div className="card border-0 mb-4">
                          <div className="card-body">
                            <div className="crd-block d-md-flex align-items-start justify-content-start">
                              <div className="crd-heaader-0 flex-shrink-0 mb-3 mb-md-0">
                                <div className="square--70 rounded-2 bg-light-primary text-primary fs-3"><i className="fa-solid fa-plane" /></div>
                              </div>
                              <div className="crd-heaader-first ps-md-3">
                                <div className="d-inline-flex align-items-center mb-1">
                                  <span className="label fw-medium bg-light-success text-success">Business Class</span>
                                </div>
                                <div className="d-block">
                                  <h4 className="mb-0">Delhi(DLH)<span className="text-muted-2 mx-3"><i className="fa-solid fa-arrow-right-arrow-left" /></span>Los Angeles(LOS)</h4>
                                  <div className="explotter-info">
                                    <p className="detail ellipsis-container fw-semibold">
                                      <span className="ellipsis-item__normal">17 Sep</span>
                                      <span className="separate ellipsis-item__normal" />
                                      <span className="ellipsis-item">2 Stop</span>
                                      <span className="separate ellipsis-item__normal" />
                                      <span className="ellipsis-item">06H 10Min</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Flight Info */}
                        <div className="card border-0 mb-4">
                          <div className="card-body">
                            <div className="flights-accordion">
                              <div className="flights-list-item">
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
                                                <img className="img-fluid" src="https://placehold.co/110x110" width={45} alt="img" />
                                              </div>
                                              <div className="d-end fl-title ps-2">
                                                <div className="text-dark fw-medium">Qutar Airways</div>
                                                <div className="text-sm text-muted">First Class</div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col">
                                            <div className="row gx-3 align-items-center">
                                              <div className="col-auto">
                                                <div className="text-dark fw-bold">07:40</div>
                                                <div className="text-muted text-sm fw-medium">DLH</div>
                                              </div>
                                              <div className="col text-center">
                                                <div className="flightLine departure">
                                                  <div />
                                                  <div />
                                                </div>
                                                <div className="text-muted text-sm fw-medium mt-3">Direct</div>
                                              </div>
                                              <div className="col-auto">
                                                <div className="text-dark fw-bold">12:20</div>
                                                <div className="text-muted text-sm fw-medium">LOS</div>
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
                                    <div className="row mt-4">
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
                                                <div className="text-muted text-sm fw-medium">LOS</div>
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
                                                <div className="text-muted text-sm fw-medium">DLH</div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-md-auto">
                                            <div className="text-dark fw-medium">5H 30M</div>
                                            <div className="text-muted text-sm fw-medium">2 Stop</div>
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
                        {/* Login Alert */}
                        <div className="col-xl-12 col-lg-12 col-md-12">
                          <div className="d-flex align-items-center justify-content-start py-3 px-3 rounded-2 bg-success mb-4">
                            <p className="text-light fw-semibold m-0"><i className="fa-solid fa-gift text-warning me-2" /><Link to="#" className="text-white text-decoration-underline">Login</Link> or <Link to="#" className="text-white text-decoration-underline">Register</Link> to earn upto 100 coins (approx 1.72 US$)
                              after check-out.
                            </p><p>
                            </p></div>
                        </div>
                        {/* Flight Details */}
                        <div className="col-xl-12 col-lg-12 col-md-12">
                          {/* Overview */}
                          <div className="card mb-4">
                            <div className="card-header">
                              <h6 className="fw-semibold mb-0">Overview</h6>
                            </div>
                            <div className="card-body">
                              <p className="mb-0">However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments. Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely since the sixteenth century.</p>
                            </div>
                          </div>
                        </div>
                        {/* Highlights */}
                        <div className="col-xl-12 col-lg-12 col-md-12">
                          <div className="card mb-4">
                            <div className="card-header">
                              <h6 className="fw-semibold mb-0">Highlights</h6>
                            </div>
                            <div className="card-body">
                              <ul className="row align-items-center p-0 g-3">
                                <li className="col-md-6">
                                  <i className="fa-solid fa-check text-success me-2" />A fantastic experience at the Niagara
                                  Falls
                                </li>
                                <li className="col-md-6">
                                  <i className="fa-solid fa-check text-success me-2" />Wonderful experience at the Harborfront
                                </li>
                                <li className="col-md-6">
                                  <i className="fa-solid fa-check text-success me-2" />Breathtaking views at the Night at
                                  Niagara Falls
                                </li>
                                <li className="col-md-6">
                                  <i className="fa-solid fa-check text-success me-2" />Splendid experiences with the City
                                  tours.
                                </li>
                                <li className="col-md-6">
                                  <i className="fa-solid fa-check text-success me-2" />All led out world this music while
                                  asked.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* Traveler Details */}
                        <div className="col-xl-12 col-lg-12 col-md-12">
                          {/* Overview */}
                          <div className="card">
                            <div className="card-header">
                              <h6 className="fw-semibold mb-0">Traveler Details</h6>
                            </div>
                            <div className="card-body">
                              <div className="bg-success bg-opacity-10 rounded-2 p-3 mb-3">
                                <p className="h6 text-md mb-0"><span className="badge bg-success me-2">New</span>Please enter your name as per your passport ID</p>
                              </div>
                              <div className="gray rounded-3 position-relative p-4 mb-3">
                                <div className="position-absolute top-50 end-0 translate-middle-y me-2">
                                  <Link to="#" className="text-primary fs-5"><i className="fa-solid fa-circle-xmark" /></Link>
                                </div>
                                <div className="row align-items-center row-cols-xl-5 row-cols-lg-3 row-cols-md-3 col-cols-2">
                                  <div className="col">
                                    <p className="text-dark fw-semibold lh-base">Name</p>
                                    <p className="text-muted-2 fw-medium lh-1">Daniel Puran</p>
                                  </div>
                                  <div className="col">
                                    <p className="text-dark fw-semibold lh-base">Passport</p>
                                    <p className="text-muted-2 fw-medium lh-1">BKP1256GH</p>
                                  </div>
                                  <div className="col">
                                    <p className="text-dark fw-semibold lh-base">Gender</p>
                                    <p className="text-muted-2 fw-medium lh-1">Male</p>
                                  </div>
                                  <div className="col">
                                    <p className="text-dark fw-semibold lh-base">Age</p>
                                    <p className="text-muted-2 fw-medium lh-1">42+</p>
                                  </div>
                                  <div className="col">
                                    <p className="text-dark fw-semibold lh-base">Nationality</p>
                                    <p className="text-muted-2 fw-medium lh-1">Indian</p>
                                  </div>
                                </div>
                              </div>
                              <div className="gray rounded-3 position-relative p-4 mb-4">
                                <div className="position-absolute top-50 end-0 translate-middle-y me-2">
                                  <Link to="#" className="text-primary fs-5"><i className="fa-solid fa-circle-xmark" /></Link>
                                </div>
                                <div className="row align-items-center row-cols-xl-5 row-cols-lg-3 row-cols-md-3 col-cols-2">
                                  <div className="col">
                                    <p className="text-dark fw-semibold lh-base">Name</p>
                                    <p className="text-muted-2 fw-medium lh-1">Smrithi Puran</p>
                                  </div>
                                  <div className="col">
                                    <p className="text-dark fw-semibold lh-base">Passport</p>
                                    <p className="text-muted-2 fw-medium lh-1">SPK6524GY</p>
                                  </div>
                                  <div className="col">
                                    <p className="text-dark fw-semibold lh-base">Gender</p>
                                    <p className="text-muted-2 fw-medium lh-1">Female</p>
                                  </div>
                                  <div className="col">
                                    <p className="text-dark fw-semibold lh-base">Age</p>
                                    <p className="text-muted-2 fw-medium lh-1">38+</p>
                                  </div>
                                  <div className="col">
                                    <p className="text-dark fw-semibold lh-base">Nationality</p>
                                    <p className="text-muted-2 fw-medium lh-1">Indian</p>
                                  </div>
                                </div>
                              </div>
                              <div className="full-width d-flex flex-column mb-4 position-relative">
                                <div className="row align-items-stat">
                                  <div className="col-xl-12 col-lg-12 col-md-12 mb-2">
                                    <h5>Add More Passengers</h5>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label className="form-label">First Name</label>
                                      <input type="text" className="form-control" placeholder="Your First Name" />
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label className="form-label">Last Name</label>
                                      <input type="text" className="form-control" placeholder="Your Last Name" />
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label className="form-label">Passport Number</label>
                                      <input type="text" className="form-control" placeholder="Passport Number Here" />
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label className="form-label">Passport Expire</label>
                                      <input type="text" className="form-control" placeholder="Passport Expire Date" />
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label className="form-label">Date of birth</label>
                                      <input className="form-control fw-bold" type="text" placeholder="Select Date.." id="basicDate" readOnly="readonly" />
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label className="form-label">Nationality</label>
                                      <select className="select form-control">
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
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label className="form-label">Gender</label>
                                      <div className="form-group">
                                        <div className="form-check form-check-inline">
                                          <input className="form-check-input" type="radio" name="gender" id="male" defaultValue="option1" />
                                          <label className="form-check-label" htmlFor="male">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                          <input className="form-check-input" type="radio" name="gender" id="female" defaultValue="option2" />
                                          <label className="form-check-label" htmlFor="female">Female</label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-12 col-md-12">
                                    <button className="btn btn-md px-5 btn-light-primary fw-medium" type="button">Add Passengers</button>
                                  </div>
                                </div>
                              </div>
                              <div className="full-width d-flex flex-column mb-2 position-relative">
                                <div className="row align-items-stat">
                                  <div className="col-xl-12 col-lg-12 col-md-12 mb-2">
                                    <h5>Personal Information</h5>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label className="form-label">Email Address</label>
                                      <input type="text" className="form-control" placeholder="Email Here" />
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label className="form-label">Mobile number</label>
                                      <input type="text" className="form-control" placeholder="Contact Number" />
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-12 col-md-12">
                                    <button className="btn btn-md full-width px-5 btn-primary fw-medium" type="button">Submit &amp; Proceed for Payment</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Sidebar */}
                      <div className="col-xl-3 col-lg-4 col-md-12">
                        <div className="card mb-4 mt-lg-0 mt-4">
                          <div className="card-header"><h4>Price Summary</h4></div>
                          <div className="card-body py-2">
                            <div className="price-summary">
                              <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2 px-0">
                                  Base Fare 
                                  <span className="fw-semibold text-dark">1470</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2 px-0">
                                  Discount
                                  <span className="fw-semibold text-success">-$45</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2 px-0">
                                  Other Services
                                  <span className="fw-semibold text-dark">$25</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-footer bg-white border-top py-3">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="fw-semibold text-muted-2 mb-0">Total Price</p>
                              <p className="fw-semibold text-primary mb-0">$1430</p>
                            </div>
                          </div>
                        </div>
                        <div className="card border rounded-3">
                          <div className="card-header">
                            <h4>Coupons &amp; Offers</h4>
                          </div>
                          <div className="card-body">
                            <div className="form-group position-relative">
                              <input type="text" className="form-control" placeholder="Have a Coupon Code?" defaultValue />
                              <Link to="#" className="position-absolute top-50 end-0 fw-semibold translate-middle text-primary disable">Apply</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Hotel Details End ================================== */}
            {/* ============================ Similar Flight Start ================================== */}
            <section className="py-5">
              <div className="container">
                <div className="row align-items-center justify-content-between mb-3">
                  <div className="col-8">
                    <div className="upside-heading">
                      <h5 className="fw-bold fs-6 m-0">Similar Flights</h5>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-end grpx-btn">
                      <Link to="#" className="btn btn-light-primary btn-md fw-medium">More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12 p-0">
                    <div className="main-carousel cols-3 arrow-hide">
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem mb-4">
                          <Link to="flight-search.html" className="card rounded-3 border m-0">
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
                                <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem mb-4">
                          <Link to="flight-search.html" className="card rounded-3 border m-0">
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
                                <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem mb-4">
                          <Link to="flight-search.html" className="card rounded-3 border m-0">
                            <div className="flight-thumb-wrapper">
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
                                <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem mb-4">
                          <Link to="flight-search.html" className="card rounded-3 border m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <h4 className="city fs-6 m-0 fw-bold">
                                  <span>Nashville</span>
                                  <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                      <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  <span>Denver</span>
                                </h4>
                                <p className="detail ellipsis-container">
                                  <span className="ellipsis-item__normal">Round-trip</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">3 days</span>
                                </p>
                              </div>
                              <div className="flight-foots">
                                <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="flight-search.html" className="card rounded-3 border m-0">
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
                                <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Similar Hotels End ================================== */}
            {/* ============================ Footer Start ================================== */}
           <Footer/>
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
            {/* {/**/} */}
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

    export default FlightDetail;