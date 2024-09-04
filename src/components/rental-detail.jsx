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


const RentalDetails = () => {
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
                      <li className="active"><a href="home-stay.html"><i className="fa-solid fa-umbrella-beach me-2" />Stays</a></li>
                      <li><a href="home-flight.html"><i className="fa-solid fa-jet-fighter me-2" />Flights</a></li>
                      <li><a href="home-hotel.html"><i className="fa-solid fa-spa me-2" />Hotels</a></li>
                      <li><a href="home-rental.html"><i className="fa-solid fa-house-circle-check me-2" />Rental</a></li>
                      <li><a href="home-car.html"><i className="fa-solid fa-car me-2" />Cars</a></li>
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
            {/* ============================ Hotel Details Start ================================== */}
            <section className="pt-3 gray-simple">
              <div className="container">
                <div className="row">
                  {/* Breadcrumb */}
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#" className="text-primary">Home</a></li>
                        <li className="breadcrumb-item"><a href="#" className="text-primary">Rental</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Vashundhara Real Estate</li>
                      </ol>
                    </nav>
                  </div>
                  {/* Gallery & Info */}
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="card border-0 p-3 mb-4">
                      <div className="crd-heaader d-md-flex align-items-center justify-content-between mb-3">
                        <div className="crd-heaader-first">
                          <div className="d-inline-flex align-items-center mb-1">
                            <span className="label fw-medium bg-light-success text-success">Apartment</span>
                          </div>
                          <div className="d-block">
                            <h4 className="mb-0">Vashundhara Real Estate</h4>
                            <div className="explotter">
                              <p className="detail ellipsis-container fw-semibold">
                                <span className="ellipsis-item__normal">3 Beds</span>
                                <span className="separate ellipsis-item__normal" />
                                <span className="ellipsis-item">2 Baths</span>
                                <span className="separate ellipsis-item__normal" />
                                <span className="ellipsis-item">2200 SqFt</span>
                                <span className="separate ellipsis-item__normal" />
                                <span className="ellipsis-item">2022</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="crd-heaader-last my-md-0 my-2">
                          <div className="drix-wrap d-flex flex-column align-items-md-end align-items-start text-end">
                            <div className="drix-first d-flex align-items-center text-end mb-2">
                              <a href="#" className="bg-light-info text-info rounded-1 fw-medium text-sm px-3 py-2 lh-base"><i className="fa-solid fa-bookmark me-2" />Bookmark</a>
                              <a href="#" className="bg-light-danger text-danger rounded-1 fw-medium text-sm px-3 py-2 lh-base ms-2"><i className="fa-solid fa-share-nodes me-2" />Share</a>
                            </div>
                            <div className="drix-last">
                              <span className="label bg-light-success text-success">Free Cancellation within a week</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="crd-body">
                        <div className="row align-items-center justify-content-between">
                          <div className="col-xl-8 col-lg-7 col-md-12">
                            <div className="galleryGrid typeGrid_2 mb-lg-0 mb-3">
                              <div className="galleryGrid__item relative d-flex">
                                <a href="https://placehold.co/1200x800" data-lightbox="roadtrip"><img src="https://placehold.co/1200x800" alt="image" className="rounded-2 img-fluid" /></a>
                              </div>
                              <div className="galleryGrid__item position-relative">
                                <a href="https://placehold.co/1200x800" data-lightbox="roadtrip"><img src="https://placehold.co/1200x800" alt="image" className="rounded-2 img-fluid" /></a>
                                <div className="position-absolute end-0 bottom-0 mb-3 me-3">
                                  <a href="https://placehold.co/1200x800" data-lightbox="roadtrip" className="btn btn-md btn-whites fw-medium text-dark"><i className="fa-solid fa-caret-right me-1" />16 More Photos</a>
                                </div>
                              </div>
                              <div className="galleryGrid__item">
                                <a href="https://placehold.co/1200x800" data-lightbox="roadtrip"><img src="https://placehold.co/1200x800" alt="image" className="rounded-2 img-fluid" /></a>
                              </div>
                              <div className="galleryGrid__item">
                                <a href="https://placehold.co/1200x800" data-lightbox="roadtrip"><img src="https://placehold.co/1200x800" alt="image" className="rounded-2 img-fluid" /></a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-5 col-md-12">
                            <div className="card border br-dashed">
                              <div className="card-header">
                                <div className="crd-heady102 d-flex align-items-center justify-content-start">
                                  <div className="square--30 circle bg-light-primary text-primary flex-shrink-0"><i className="fa-solid fa-percent" /></div>
                                  <div className="crd-heady102Title lh-1 ps-2"><span className="text-sm fw-semibold text-dark text-uppercase lh-1 mb-0">Login not to get upto 20%
                                      lower price</span></div>
                                </div>
                                <div className="crd-heady103">
                                  <a href="#" className="btn btn-primary btn-sm px-4 fw-semibold text-uppercase">Login</a>
                                </div>
                              </div>
                              <div className="card-body">
                                <div className="d-block mb-3">
                                  <div className="d-flex align-items-center justify-content-start">
                                    <div className="text-dark fw-bold fs-3 me-2">$3000</div>
                                    <div className="text-muted-2 fw-medium text-decoration-line-through me-2">US$4500</div>
                                    <div className="text-warning fw-semibold">40% Off</div>
                                  </div>
                                  <div className="d-flex align-items-start justify-content-start">
                                    <div className="text-muted-2 text-md">inclusive of all taxes</div>
                                  </div>
                                </div>
                                <div className="d-block">
                                  <div className="form-group">
                                    <label className="form-label">Your name</label>
                                    <input type="text" className="form-control" defaultValue="Enter Your Name" />
                                  </div>
                                  <div className="form-group mb-4">
                                    <label className="form-label">Mobile number</label>
                                    <input type="text" className="form-control" defaultValue="Contact Number" />
                                  </div>
                                  <div className="form-group mb-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="crd-heady102 d-flex align-items-center justify-content-start">
                                        <div className="square--30 circle bg-light-success text-success"><i className="fa-solid fa-percent" /></div>
                                        <div className="crd-heady102Title lh-1 ps-2"><span className="text-sm fw-semibold text-dark text-uppercase lh-1 mb-0">oyofestive40 coupon
                                            applied</span></div>
                                      </div>
                                      <div className="crd-heady103">
                                        <span className="text-dark fw-semibold text-uppercase">-$1780</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-group mb-2">
                                    <button type="button" className="btn btn-primary full-width fw-medium">Contact Agents</button>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer bg-white">
                                <div className="row align-items-center justify-content-start gx-2">
                                  <div className="col-auto">
                                    <div className="square--40 rounded-2 bg-seegreen text-light">4.8</div>
                                  </div>
                                  <div className="col-auto text-start">
                                    <div className="text-md text-dark fw-medium">Exceptional</div>
                                    <div className="text-md text-muted-2">3,014 reviews</div>
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
                      <p className="text-light fw-semibold m-0"><i className="fa-solid fa-gift text-warning me-2" /><a href="#" className="text-white text-decoration-underline">Login</a> or <a href="#" className="text-white text-decoration-underline">Register</a> to earn upto 100 coins (approx 1.72 US$)
                        after check-out.
                      </p><p>
                      </p></div>
                  </div>
                  {/* Cab Details */}
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
                  {/* Cab Information */}
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="card mb-4">
                      <div className="card-header">
                        <h4 className="fs-5 mb-0">Cab Information</h4>
                      </div>
                      <div className="card-body">
                        <div className="row align-items-start">
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <ul className="row align-items-center p-0 mb-0 gx-4 gx-lg-5">
                              <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                  <span className="fw-medium text-dark">User</span>
                                  <span className="fw-medium text-muted">4 Guest</span>
                                </div>
                              </li>
                              <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                  <span className="fw-medium text-dark">Modal</span>
                                  <span className="fw-medium text-muted">Maruti</span>
                                </div>
                              </li>
                              <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                  <span className="fw-medium text-dark">Make</span>
                                  <span className="fw-medium text-muted">2020</span>
                                </div>
                              </li>
                              <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                  <span className="fw-medium text-dark">Fuel</span>
                                  <span className="fw-medium text-muted">Diesel</span>
                                </div>
                              </li>
                              <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                  <span className="fw-medium text-dark">Mileage</span>
                                  <span className="fw-medium text-muted">16Km/L</span>
                                </div>
                              </li>
                              <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                  <span className="fw-medium text-dark">Version</span>
                                  <span className="fw-medium text-muted">2nd Top</span>
                                </div>
                              </li>
                              <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                  <span className="fw-medium text-dark">Condition</span>
                                  <span className="fw-medium text-muted">Full AC</span>
                                </div>
                              </li>
                              <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                  <span className="fw-medium text-dark">luggage</span>
                                  <span className="fw-medium text-muted">2 luggage bags</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Inclusions & Exclusions */}
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="card mb-4">
                      <div className="card-header">
                        <h4 className="fs-5 mb-0">Inclusions &amp; Exclusions</h4>
                      </div>
                      <div className="card-body">
                        <div className="expott-info mb-4">
                          <h5>Inclusions</h5>
                          <ul className="row align-items-center p-0 g-3">
                            <li className="col-md-6">
                              <i className="fa-regular fa-circle-dot text-success me-2" />State tax
                            </li>
                            <li className="col-md-6">
                              <i className="fa-regular fa-circle-dot text-success me-2" /> Toll charge
                            </li>
                            <li className="col-md-6">
                              <i className="fa-regular fa-circle-dot text-success me-2" />Driver Allowance
                            </li>
                            <li className="col-md-6">
                              <i className="fa-regular fa-circle-dot text-success me-2" />Only one pickup and drop
                            </li>
                            <li className="col-md-6">
                              <i className="fa-regular fa-circle-dot text-success me-2" />Inter-city Transfers
                            </li>
                          </ul>
                        </div>
                        <div className="expott-info">
                          <h5>Exclusions</h5>
                          <ul className="row align-items-center p-0 g-3">
                            <li className="col-md-6">
                              <i className="fa-regular fa-circle-dot text-danger me-2" />Fare beyond 600kms
                            </li>
                            <li className="col-md-6">
                              <i className="fa-regular fa-circle-dot text-danger me-2" />Airport entry charge
                            </li>
                            <li className="col-md-6">
                              <i className="fa-regular fa-circle-dot text-danger me-2" />Dinner
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Guests Reviews */}
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="card mb-4">
                      <div className="card-header">
                        <h4 className="fs-5 mb-0">Guests Reviews</h4>
                      </div>
                      <div className="card-body">
                        <div className="row align-items-center mb-4">
                          <div className="col-xl-2 col-lg-3 col-md-4">
                            <div className="rounded-3 bg-primary full-width">
                              <div className="py-4 px-3 text-center">
                                <h3 className="text-light display-2 fw-semibold mb-0">92</h3>
                                <p className="text-light lh-base m-0">Extraordinary 786 Reviews</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-10 col-lg-9 col-md-8">
                            <div className="row align-items-start">
                              <div className="col-xl-12 col-lg-12 col-md-12">
                                <ul className="row align-items-center p-0 mb-0 gy-3 gx-4">
                                  <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="revs-wraps">
                                      <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                                        <span className="text-dark fw-semibold text-md">Dishes</span>
                                        <span className="text-dark fw-semibold text-md">8.7</span>
                                      </div>
                                      <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={87} aria-valuemin={0} aria-valuemax={100} style={{height: '7px'}}>
                                        <div className="progress-bar bg-primary" style={{width: '87%'}} />
                                      </div>
                                    </div>
                                  </li>
                                  <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="revs-wraps">
                                      <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                                        <span className="text-dark fw-semibold text-md">Swimming</span>
                                        <span className="text-dark fw-semibold text-md">9.2</span>
                                      </div>
                                      <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} style={{height: '7px'}}>
                                        <div className="progress-bar bg-primary" style={{width: '92%'}} />
                                      </div>
                                    </div>
                                  </li>
                                  <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="revs-wraps">
                                      <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                                        <span className="text-dark fw-semibold text-md">Rooms</span>
                                        <span className="text-dark fw-semibold text-md">8.8</span>
                                      </div>
                                      <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} style={{height: '7px'}}>
                                        <div className="progress-bar bg-primary" style={{width: '88%'}} />
                                      </div>
                                    </div>
                                  </li>
                                  <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="revs-wraps">
                                      <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                                        <span className="text-dark fw-semibold text-md">Location</span>
                                        <span className="text-dark fw-semibold text-md">8.9</span>
                                      </div>
                                      <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} style={{height: '7px'}}>
                                        <div className="progress-bar bg-primary" style={{width: '89%'}} />
                                      </div>
                                    </div>
                                  </li>
                                  <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="revs-wraps">
                                      <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                                        <span className="text-dark fw-semibold text-md">Services</span>
                                        <span className="text-dark fw-semibold text-md">9.2</span>
                                      </div>
                                      <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} style={{height: '7px'}}>
                                        <div className="progress-bar bg-primary" style={{width: '92%'}} />
                                      </div>
                                    </div>
                                  </li>
                                  <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="revs-wraps">
                                      <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                                        <span className="text-dark fw-semibold text-md">Cleanliness</span>
                                        <span className="text-dark fw-semibold text-md">8.6</span>
                                      </div>
                                      <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{height: '7px'}}>
                                        <div className="progress-bar bg-primary" style={{width: '86%'}} />
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="gstRevws-groups">
                              {/* Single Reviwws */}
                              <div className="single-gstRevws rounded-2 border p-2 d-flex align-items-start mb-3">
                                <div className="single-gstRevws-thumb">
                                  <div className="rounded-2 overflow-hidden w-25 h-25">
                                    <img src="https://placehold.co/500x500" className="img-fluid" alt="" />
                                  </div>
                                </div>
                                <div className="single-gstRevws-caps ps-3">
                                  <div className="gstRevws-head d-flex align-items-start justify-content-between">
                                    <div className="dfls-headers">
                                      <h5 className="h6 text-dark fw-semibold mb-0">Adam Bluecart</h5>
                                      <p className="text-md mb-0">Canada</p>
                                    </div>
                                    <div className="dfls-arrios"><span className="text-muted text-md">10 July 2023</span></div>
                                  </div>
                                  <div className="dfls-secription">
                                    <p className="mb-0">In a free hour, But in certain circumstances and owing to the claims of
                                      duty or the obligations of business when our power of choice is untrammelled and when
                                      nothing prevents our being able to do what we like best, every pleasure is to be
                                      welcomed and every pain avoided.</p>
                                  </div>
                                </div>
                              </div>
                              {/* Single Reviwws */}
                              <div className="single-gstRevws rounded-2 border p-2 d-flex align-items-start mb-3">
                                <div className="single-gstRevws-thumb">
                                  <div className="rounded-2 bg-light-purple d-flex align-items-center justify-content-center overflow-hidden w-25 h-25">
                                    <h3 className="m-0 fs-1 fw-semibold text-purple">K</h3>
                                  </div>
                                </div>
                                <div className="single-gstRevws-caps ps-3">
                                  <div className="gstRevws-head d-flex align-items-start justify-content-between">
                                    <div className="dfls-headers">
                                      <h5 className="h6 text-dark fw-semibold mb-0">Adam Bluecart</h5>
                                      <p className="text-md mb-0">Canada</p>
                                    </div>
                                    <div className="dfls-arrios"><span className="text-muted text-md">10 July 2023</span></div>
                                  </div>
                                  <div className="dfls-secription">
                                    <p className="mb-0">In a free hour, But in certain circumstances and owing to the claims of
                                      duty or the obligations of business when our power of choice is untrammelled and when
                                      nothing prevents our being able to do what we like best, every pleasure is to be
                                      welcomed and every pain avoided.</p>
                                  </div>
                                </div>
                              </div>
                              {/* Single Reviwws */}
                              <div className="single-gstRevws rounded-2 border p-2 d-flex align-items-start mb-3">
                                <div className="single-gstRevws-thumb">
                                  <div className="rounded-2 overflow-hidden w-25 h-25">
                                    <img src="https://placehold.co/500x500" className="img-fluid" alt="" />
                                  </div>
                                </div>
                                <div className="single-gstRevws-caps ps-3">
                                  <div className="gstRevws-head d-flex align-items-start justify-content-between">
                                    <div className="dfls-headers">
                                      <h5 className="h6 text-dark fw-semibold mb-0">Adam Bluecart</h5>
                                      <p className="text-md mb-0">Canada</p>
                                    </div>
                                    <div className="dfls-arrios"><span className="text-muted text-md">10 July 2023</span></div>
                                  </div>
                                  <div className="dfls-secription">
                                    <p className="mb-0">In a free hour, But in certain circumstances and owing to the claims of
                                      duty or the obligations of business when our power of choice is untrammelled and when
                                      nothing prevents our being able to do what we like best, every pleasure is to be
                                      welcomed and every pain avoided.</p>
                                  </div>
                                </div>
                              </div>
                              {/* Single Reviwws */}
                              <div className="show-morerewsbox mb-3">
                                <div className="text-center" role="alert">
                                  <a href="#" className="fw-medium text-primary">Load More Guest Reviews<i className="fa-solid fa-caret-down ms-2" /></a>
                                </div>
                              </div>
                              {/* submit Reviews */}
                              <div className="sbms-rewsbox">
                                <div className="alert alert-success text-center" role="alert">
                                  Login your account to submit reviews <a href="#" className="text-dark">Login</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* FAQ */}
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row align-items-start justify-content-between gx-3">
                      <div className="col-xl-3 col-lg-4 col-md-4">
                        <div className="position-relative mb-4">
                          <h4 className="lh-base">FAQ Regarding The Royal Plaza Scout</h4>
                        </div>
                        <div className="position-relative mb-4">
                          <button className="btn btn-md btn-primary fw-medium" type="button">Submit Request</button>
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-8 col-md-8">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                How To Book A resort with Booer.com?
                              </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">In a professional context it often happens that private or corporate
                                clients corder a publication to be made and presented with the actual content still not being
                                ready. Think of a news blog that's filled with content hourly on the day of going live. However,
                                reviewers tend to be distracted by comprehensible content, say, a random text copied from a
                                newspaper or the internet. The are likely to focus on the text, disregarding the layout and its
                                elements.</div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Can We Pay After Check-out?
                              </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">In a professional context it often happens that private or corporate
                                clients corder a publication to be made and presented with the actual content still not being
                                ready. Think of a news blog that's filled with content hourly on the day of going live. However,
                                reviewers tend to be distracted by comprehensible content, say, a random text copied from a
                                newspaper or the internet. The are likely to focus on the text, disregarding the layout and its
                                elements.</div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Is This Collaborate with Oyo?
                              </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">In a professional context it often happens that private or corporate
                                clients corder a publication to be made and presented with the actual content still not being
                                ready. Think of a news blog that's filled with content hourly on the day of going live. However,
                                reviewers tend to be distracted by comprehensible content, say, a random text copied from a
                                newspaper or the internet. The are likely to focus on the text, disregarding the layout and its
                                elements.</div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Can We get Any Transport For Walk?
                              </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">In a professional context it often happens that private or corporate
                                clients corder a publication to be made and presented with the actual content still not being
                                ready. Think of a news blog that's filled with content hourly on the day of going live. However,
                                reviewers tend to be distracted by comprehensible content, say, a random text copied from a
                                newspaper or the internet. The are likely to focus on the text, disregarding the layout and its
                                elements.</div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                Can We Get Any Extra Services?
                              </button>
                            </h2>
                            <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">In a professional context it often happens that private or corporate
                                clients corder a publication to be made and presented with the actual content still not being
                                ready. Think of a news blog that's filled with content hourly on the day of going live. However,
                                reviewers tend to be distracted by comprehensible content, say, a random text copied from a
                                newspaper or the internet. The are likely to focus on the text, disregarding the layout and its
                                elements.</div>
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
            {/* ============================ Similar Hotels Start ================================== */}
            <section className="py-5">
              <div className="container">
                <div className="row align-items-center justify-content-between mb-3">
                  <div className="col-8">
                    <div className="upside-heading">
                      <h5 className="fw-bold fs-6 m-0">Similar Hotels &amp; Resorts</h5>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-end grpx-btn">
                      <a href="#" className="btn btn-light-primary btn-md fw-medium">More<i className="fa-solid fa-arrow-trend-up ms-2" /></a>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12 p-0">
                    <div className="main-carousel cols-3 arrow-hide">
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <a href="#" className="card rounded-3 border m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="d-flex align-items-start justify-content-start flex-column">
                                  <span className="city-destination label text-success bg-light-success mb-1">House</span>
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Equitable Property Group</span>
                                  </h4>
                                </div>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">3 Beds</span>
                                  <span className="ellipsis">2 Baths</span>
                                  <span className="ellipsis">2100 sqft</span>
                                  <span className="ellipsis">1 Store</span>
                                </div>
                              </div>
                              <div className="flight-footer">
                                <div className="epocsic">
                                  <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                                  <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
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
                          </a>
                        </div>	
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <a href="#" className="card rounded-3 border m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="d-flex align-items-start justify-content-start flex-column">
                                  <span className="city-destination label text-success bg-light-success mb-1">Villa</span>
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Apogee Property Advisors</span>
                                  </h4>
                                </div>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">3 Beds</span>
                                  <span className="ellipsis">2 Baths</span>
                                  <span className="ellipsis">2100 sqft</span>
                                  <span className="ellipsis">1 Store</span>
                                </div>
                              </div>
                              <div className="flight-footer">
                                <div className="epocsic">
                                  <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                                  <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
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
                          </a>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <a href="#" className="card rounded-3 border m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="d-flex align-items-start justify-content-start flex-column">
                                  <span className="city-destination label text-success bg-light-success mb-1">Apartment</span>
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Landmark Realty Group</span>
                                  </h4>
                                </div>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">3 Beds</span>
                                  <span className="ellipsis">2 Baths</span>
                                  <span className="ellipsis">2100 sqft</span>
                                  <span className="ellipsis">1 Store</span>
                                </div>
                              </div>
                              <div className="flight-footer">
                                <div className="epocsic">
                                  <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                                  <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
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
                          </a>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <a href="#" className="card rounded-3 border m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="d-flex align-items-start justify-content-start flex-column">
                                  <span className="city-destination label text-success bg-light-success mb-1">Condos</span>
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Cobblestone Realty Partners</span>
                                  </h4>
                                </div>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">3 Beds</span>
                                  <span className="ellipsis">2 Baths</span>
                                  <span className="ellipsis">2100 sqft</span>
                                  <span className="ellipsis">1 Store</span>
                                </div>
                              </div>
                              <div className="flight-footer">
                                <div className="epocsic">
                                  <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                                  <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
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
                          </a>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <a href="#" className="card rounded-3 border m-0">
                            <div className="flight-thumb-wrapper">
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="d-flex align-items-start justify-content-start flex-column">
                                  <span className="city-destination label text-success bg-light-success mb-1">Building</span>
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Magnolia Group Real Estate</span>
                                  </h4>
                                </div>
                                <div className="detail ellipsis-container mt-3">
                                  <span className="ellipsis">3 Beds</span>
                                  <span className="ellipsis">2 Baths</span>
                                  <span className="ellipsis">2100 sqft</span>
                                  <span className="ellipsis">1 Store</span>
                                </div>
                              </div>
                              <div className="flight-footer">
                                <div className="epocsic">
                                  <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                                  <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span></h5>
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
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Similar Hotels End ================================== */}
            {/* ============================ Footer Start ================================== */}
            <footer className="footer skin-dark-footer">
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-4">
                      <div className="footer-widget">
                        <div className="d-flex align-items-start flex-column mb-3">
                          <div className="d-inline-block"><img src="assets/img/logo-light.png" className="img-fluid" width={160} alt="Footer Logo" />
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
export default RentalDetails;