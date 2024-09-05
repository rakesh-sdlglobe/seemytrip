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

const DestinationDetail = () => {
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
                    <Link className="nav-brand static-show" to="#"><img src="assets/img/logo-light.png" className="logo" alt="" /></Link>
                    <Link className="nav-brand mob-show" to="#"><img src={trainImage} className="logo" alt="" /></Link>
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
            {/* ============================ breadcrumbs  Start================================== */}
            <div className="py-2 gray-simple position-relative">
              <div className="container">
                {/* Search Form */}
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to="#" className="text-primary">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#" className="text-primary">Hotel in Denver, USA</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Royal Plaza on Scotts</li>
                      </ol>
                    </nav>
                  </div>
                </div>
                {/* </row> */}
              </div>
            </div>
            {/* ============================ Breadcrumbs End ================================== */}
            {/* ============================ Destination Detail Start ================================== */}
            <section className="pt-3">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="card border-0 p-3 mb-4">
                      <div className="crd-heaader d-md-flex align-items-center justify-content-between">
                        <div className="crd-heaader-first">
                          <div className="d-block">
                            <h4 className="mb-0">Swiss Paris Delight Group Departure Oman Air Special</h4>
                            <div className="exlops">
                              <p className="detail ellipsis-container fw-semibold">
                                <span className="ellipsis-item__normal">4D/5N</span>
                                <span className="separate ellipsis-item__normal" />
                                <span className="ellipsis-item">2N Paris</span>
                                <span className="separate ellipsis-item__normal" />
                                <span className="ellipsis-item">2N Zurich</span>
                                <span className="separate ellipsis-item__normal" />
                                <span className="ellipsis-item">1N Engelberg</span>
                                <span className="separate ellipsis-item__normal" />
                                <span className="ellipsis-item label text-success bg-light-success">25 Group</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="crd-heaader-last my-md-0 my-2">
                          <div className="drix-first d-flex align-items-center pe-2 text-end mb-2">
                            <Link to="#" className="bg-light-info text-info rounded-1 fw-medium text-sm px-3 py-2 lh-base"><i className="fa-solid fa-bookmark me-2" />Bookmark</Link>
                            <Link to="#" className="bg-light-danger text-danger rounded-1 fw-medium text-sm px-3 py-2 lh-base ms-2"><i className="fa-solid fa-share-nodes me-2" />Share</Link>
                          </div>
                        </div>
                      </div>
                      <div className="galleryGrid typeGrid_2 mb-lg-0 mb-3">
                        <div className="galleryGrid__item relative d-flex">
                          <Link to="https://placehold.co/1200x800" data-lightbox="roadtrip"><img src="https://placehold.co/1200x800" alt="img" className="rounded-2 img-fluid" /></Link>
                        </div>
                        <div className="galleryGrid__item position-relative">
                          <Link to="https://placehold.co/1200x800" data-lightbox="roadtrip"><img src="https://placehold.co/1200x800" alt="img" className="rounded-2 img-fluid" /></Link>
                          <div className="position-absolute end-0 bottom-0 mb-3 me-3">
                            <Link to="https://placehold.co/1200x800" data-lightbox="roadtrip" className="btn btn-md btn-whites fw-medium text-dark"><i className="fa-solid fa-caret-right me-1" />16
                              More Photos</Link>
                          </div>
                        </div>
                        <div className="galleryGrid__item">
                          <Link to="https://placehold.co/1200x800" data-lightbox="roadtrip"><img src="https://placehold.co/1200x800" alt="img" className="rounded-2 img-fluid" /></Link>
                        </div>
                        <div className="galleryGrid__item">
                          <Link to="https://placehold.co/1200x800" data-lightbox="roadtrip"><img src="https://placehold.co/1200x800" alt="img" className="rounded-2 img-fluid" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 mb-5">
                    <ul className="nav nav-pills primary nav-fill gap-2 p-2  bg-light-primary rounded-2" id="pillstour-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-2 active" id="pills-overview-tab" data-bs-toggle="pill" data-bs-target="#pills-overview" type="button" role="tab" aria-controls="pills-overview" aria-selected="true">Overview</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-2" id="pills-itinerary-tab" data-bs-toggle="pill" data-bs-target="#pills-itinerary" type="button" role="tab" aria-controls="pills-itinerary" aria-selected="false">Itinerary</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-2" id="pills-hotfly-tab" data-bs-toggle="pill" data-bs-target="#pills-hotfly" type="button" role="tab" aria-controls="pills-hotfly" aria-selected="false">Hotels &amp; Transfers</button>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row">
                      {/* Details */}
                      <div className="col-xl-9 col-lg-9 col-md-12">
                        <div className="tab-content" id="pillstour-tabContent">
                          {/* Overview Info */}
                          <div className="tab-pane fade show active" id="pills-overview" role="tabpanel" aria-labelledby="pills-overview-tab" tabIndex={0}>
                            <div className="overview-wrap full-width">
                              <div className="card mb-4 border rounded-3">
                                <div className="card-header">
                                  <h4 className="fs-5">Overview</h4>
                                </div>
                                <div className="card-body">
                                  <p className="mb-0">Are you looking for a dreamy trip? Do you want to be lost in the joy of
                                    beautiful places led with snow? Well, we are here to take you to one of the best trips you
                                    have ever had on this amazing Canada 7 days itinerary. Canada is a place you wanna be. With
                                    spellbinding beauty that will capture your soul, Canada is one of the best and the craziest
                                    place you can ever visit. This trip will take you Toronto where you will get to witness the
                                    biggest waterfall in the world – the grand Niagara Falls. You will be amazed by its mammoth
                                    size which will provoke a thought that how small are we all on this planet and in this
                                    universe. The magical rainbows created as the water falls from a staggering height will
                                    touch your heart. The amazing stay in Canada comes with all the amenities that you could
                                    ever need in this package.</p>
                                </div>
                              </div>
                              <div className="card mb-4 border rounded-3">
                                <div className="card-header">
                                  <h4 className="fs-5">Tour Highlights</h4>
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
                              <div className="card border rounded-3 mb-4">
                                <div className="card-header">
                                  <h4 className="fs-5">Inclusions &amp; Exclusions</h4>
                                </div>
                                <div className="card-body">
                                  <div className="expott-info mb-4">
                                    <h5>Inclusions</h5>
                                    <ul className="row align-items-center p-0 g-3">
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-success me-2" />Meal Plan
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-success me-2" />Breakfast
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-success me-2" />Services
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-success me-2" />Station/Airport Pick and Drop
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-success me-2" />Inter-city Transfers
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-success me-2" />Sightseeing
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-success me-2" />Charges
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-success me-2" />Vancouver Coach Package
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-success me-2" />Lunch on the Coach
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-success me-2" />Entrance Fees
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-success me-2" />6 Nights’ Accommodation at the
                                        hotel
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-success me-2" />Road taxes
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-success me-2" />Parking fees
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-success me-2" />Airfare
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="expott-info">
                                    <h5>Exclusions</h5>
                                    <ul className="row align-items-center p-0 g-3">
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-danger me-2" />Meal Plan
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-danger me-2" />Lunch
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-danger me-2" />Dinner
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-danger me-2" />Charges
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-danger me-2" />Personal Expenses
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-danger me-2" />Visa
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-danger me-2" />Driver allowance
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-danger me-2" />Guide charges
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-danger me-2" />Government Service Tax
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-danger me-2" />City Taxes
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-danger me-2" />Personal Travels
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-danger me-2" />Extra Stay
                                      </li>
                                      <li className="col-md-6">
                                        <i className="fa-regular fa-circle-dot text-danger me-2" />Overseas Medi-Claim Insurance.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="card border rounded-3">
                                <div className="card-header">
                                  <h4 className="fs-5 mb-0">Guests Reviews</h4>
                                </div>
                                <div className="card-body">
                                  <div className="row align-items-center mb-4">
                                    <div className="col-xl-3 col-lg-4 col-md-4">
                                      <div className="rounded-3 bg-primary full-width">
                                        <div className="py-4 px-3 text-center">
                                          <h3 className="text-light display-2 fw-semibold mb-0">92</h3>
                                          <p className="text-light lh-base m-0">Extraordinary 786 Reviews</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-8 col-md-8">
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
                                              <div className="dfls-arrios"><span className="text-muted text-md">10 July 2023</span>
                                              </div>
                                            </div>
                                            <div className="dfls-secription">
                                              <p className="mb-0">In a free hour, But in certain circumstances and owing to the
                                                claims of
                                                duty or the obligations of business when our power of choice is untrammelled and
                                                when
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
                                              <div className="dfls-arrios"><span className="text-muted text-md">10 July 2023</span>
                                              </div>
                                            </div>
                                            <div className="dfls-secription">
                                              <p className="mb-0">In a free hour, But in certain circumstances and owing to the
                                                claims of
                                                duty or the obligations of business when our power of choice is untrammelled and
                                                when
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
                                              <div className="dfls-arrios"><span className="text-muted text-md">10 July 2023</span>
                                              </div>
                                            </div>
                                            <div className="dfls-secription">
                                              <p className="mb-0">In a free hour, But in certain circumstances and owing to the
                                                claims of
                                                duty or the obligations of business when our power of choice is untrammelled and
                                                when
                                                nothing prevents our being able to do what we like best, every pleasure is to be
                                                welcomed and every pain avoided.</p>
                                            </div>
                                          </div>
                                        </div>
                                        {/* Single Reviwws */}
                                        <div className="show-morerewsbox mb-3">
                                          <div className="text-center" role="alert">
                                            <Link to="#" className="fw-medium text-primary">Load More Guest Reviews<i className="fa-solid fa-caret-down ms-2" /></Link>
                                          </div>
                                        </div>
                                        {/* submit Reviews */}
                                        <div className="sbms-rewsbox">
                                          <div className="alert alert-success text-center" role="alert">
                                            Login your account to submit reviews <Link to="#" className="text-dark">Login</Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Itinerary */}
                          <div className="tab-pane fade" id="pills-itinerary" role="tabpanel" aria-labelledby="pills-itinerary-tab" tabIndex={0}>
                            {/* Itinerary */}
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                              <div className="accordion-item border">
                                <h2 className="accordion-header rounded-2">
                                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-day1" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <span className="fw-bold me-2">Day 01</span>Toronto: Arrival, Transfer to Niagara and Leisure
                                    Day
                                  </button>
                                </h2>
                                <div id="flush-day1" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body">
                                    <div className="exportial mb-3">
                                      <span className="label text-success bg-light-success me-2">Arrival</span><span className="label text-success bg-light-success">Leisure Day</span>
                                    </div>
                                    <div className="exportial mb-2">
                                      <ul className="d-flex flex-wrap align-items-center p-0">
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-mug-saucer text-muted me-2" />Sightseeing</li>
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-spa text-muted me-2" />Breakfast</li>
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-bed text-muted me-2" />Stay Included</li>
                                      </ul>
                                    </div>
                                    <div className="exportial mb-3">
                                      <p className="mb-0">After safe landing at the Toronto International Airport, you will be
                                        escorted to the hotel of Niagara Falls after a meet and greet. Upon reaching the hotel,
                                        our representative will support you with the check-in process. You will then take rest
                                        for the noon in your rooms. Later in the evening, we will visit Niagara Falls and you
                                        will be enchanted by the views and the colorful rainbows at the falls. After that, you
                                        can go and see other places in Toronto on your own. But don’t miss the magical sight of
                                        Niagara Falls at night. Later, we will get back to the hotel and stay overnight.</p>
                                    </div>
                                    <div className="exportial">
                                      <div className="row align-items-center justify-content-center g-3">
                                        <div className="col-md-3 col-6">
                                          <div className="expoiller-thumb">
                                            <img src="https://placehold.co/1200x800" className="img-fluid rounded-2" alt="" />
                                          </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                          <div className="expoiller-thumb">
                                            <img src="https://placehold.co/1200x800" className="img-fluid rounded-2" alt="" />
                                          </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                          <div className="expoiller-thumb">
                                            <img src="https://placehold.co/1200x800" className="img-fluid rounded-2" alt="" />
                                          </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                          <div className="expoiller-thumb">
                                            <img src="https://placehold.co/1200x800" className="img-fluid rounded-2" alt="" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item border rounded-2">
                                <h2 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-day2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <span className="fw-bold me-2">Day 02</span>Toronto: Niagara-on-the-Lake Sightseeing Tour
                                  </button>
                                </h2>
                                <div id="flush-day2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body">
                                    <div className="exportial mb-3">
                                      <span className="label text-success bg-light-success me-2">Transfers</span><span className="label text-success bg-light-success">Leisure Day</span>
                                    </div>
                                    <div className="exportial mb-2">
                                      <ul className="d-flex flex-wrap align-items-center p-0">
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-mug-saucer text-muted me-2" />Sightseeing</li>
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-spa text-muted me-2" />Breakfast</li>
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-bed text-muted me-2" />Stay Included</li>
                                      </ul>
                                    </div>
                                    <div className="exportial">
                                      <p className="mb-0">After safe landing at the Toronto International Airport, you will be
                                        escorted to the hotel of Niagara Falls after a meet and greet. Upon reaching the hotel,
                                        our representative will support you with the check-in process. You will then take rest
                                        for the noon in your rooms. Later in the evening, we will visit Niagara Falls and you
                                        will be enchanted by the views and the colorful rainbows at the falls. After that, you
                                        can go and see other places in Toronto on your own. But don’t miss the magical sight of
                                        Niagara Falls at night. Later, we will get back to the hotel and stay overnight.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item border rounded-2">
                                <h2 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-day3" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <span className="fw-bold me-2">Day 03</span>Toronto: Arrival and Leisure Day
                                  </button>
                                </h2>
                                <div id="flush-day3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body">
                                    <div className="exportial mb-3">
                                      <span className="label text-success bg-light-success me-2">City Hall.</span><span className="label text-success bg-light-success">Adventurous day</span>
                                    </div>
                                    <div className="exportial mb-2">
                                      <ul className="d-flex flex-wrap align-items-center p-0">
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-mug-saucer text-muted me-2" />Sightseeing</li>
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-spa text-muted me-2" />Breakfast</li>
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-bed text-muted me-2" />Stay Included</li>
                                      </ul>
                                    </div>
                                    <div className="exportial">
                                      <p className="mb-0">After safe landing at the Toronto International Airport, you will be
                                        escorted to the hotel of Niagara Falls after a meet and greet. Upon reaching the hotel,
                                        our representative will support you with the check-in process. You will then take rest
                                        for the noon in your rooms. Later in the evening, we will visit Niagara Falls and you
                                        will be enchanted by the views and the colorful rainbows at the falls. After that, you
                                        can go and see other places in Toronto on your own. But don’t miss the magical sight of
                                        Niagara Falls at night. Later, we will get back to the hotel and stay overnight.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item border rounded-2">
                                <h2 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-day4" aria-expanded="false" aria-controls="flush-collapseFour">
                                    <span className="fw-bold me-2">Day 04</span>Toronto: Sightseeing City Tour
                                  </button>
                                </h2>
                                <div id="flush-day4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body">
                                    <div className="exportial mb-3">
                                      <span className="label text-success bg-light-success me-2">Train journey</span><span className="label text-success bg-light-success">Leisure Day</span>
                                    </div>
                                    <div className="exportial mb-2">
                                      <ul className="d-flex flex-wrap align-items-center p-0">
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-mug-saucer text-muted me-2" />Sightseeing</li>
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-spa text-muted me-2" />Breakfast</li>
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-bed text-muted me-2" />Stay Included</li>
                                      </ul>
                                    </div>
                                    <div className="exportial">
                                      <p className="mb-0">After safe landing at the Toronto International Airport, you will be
                                        escorted to the hotel of Niagara Falls after a meet and greet. Upon reaching the hotel,
                                        our representative will support you with the check-in process. You will then take rest
                                        for the noon in your rooms. Later in the evening, we will visit Niagara Falls and you
                                        will be enchanted by the views and the colorful rainbows at the falls. After that, you
                                        can go and see other places in Toronto on your own. But don’t miss the magical sight of
                                        Niagara Falls at night. Later, we will get back to the hotel and stay overnight.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item border rounded-2">
                                <h2 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-day5" aria-expanded="false" aria-controls="flush-collapseFive">
                                    <span className="fw-bold me-2">Day 05</span>Montreal: Arrival and Leisure Day
                                  </button>
                                </h2>
                                <div id="flush-day5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body">
                                    <div className="exportial mb-3">
                                      <span className="label text-success bg-light-success me-2">Notre Dame Cathedral</span><span className="label text-success bg-light-success">City Tour</span>
                                    </div>
                                    <div className="exportial mb-2">
                                      <ul className="d-flex flex-wrap align-items-center p-0">
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-mug-saucer text-muted me-2" />Sightseeing</li>
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-spa text-muted me-2" />Breakfast</li>
                                        <li className="text-md fw-medium me-4 mb-2"><i className="fa-solid fa-bed text-muted me-2" />Stay Included</li>
                                      </ul>
                                    </div>
                                    <div className="exportial">
                                      <p className="mb-0">After safe landing at the Toronto International Airport, you will be
                                        escorted to the hotel of Niagara Falls after a meet and greet. Upon reaching the hotel,
                                        our representative will support you with the check-in process. You will then take rest
                                        for the noon in your rooms. Later in the evening, we will visit Niagara Falls and you
                                        will be enchanted by the views and the colorful rainbows at the falls. After that, you
                                        can go and see other places in Toronto on your own. But don’t miss the magical sight of
                                        Niagara Falls at night. Later, we will get back to the hotel and stay overnight.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Hotels & Transfers */}
                          <div className="tab-pane fade" id="pills-hotfly" role="tabpanel" aria-labelledby="pills-hotfly-tab" tabIndex={0}>
                            {/* Single */}
                            <div className="single-iffcort mb-4">
                              <h6 className="d-flex align-items-center fw-semibold"><i className="fa-regular fa-circle-check me-2" />Flight details</h6>
                              <div className="flights-accordion border rounded-3">
                                <div className="flights-list-item bg-white rounded-3 p-3">
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
                                                  <div className="text-muted text-sm fw-medium">DOH</div>
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
                                                  <div className="text-muted text-sm fw-medium">DEL</div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Single */}
                            <div className="single-iffcort mb-4">
                              <h6 className="d-flex align-items-center fw-semibold"><i className="fa-regular fa-circle-check me-2" />Check-In to hotel</h6>
                              <div className="card list-layout-block border rounded-3 p-3">
                                <div className="row">
                                  <div className="col-xl-4 col-lg-3 col-md">
                                    <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                      <img className="img-fluid h-100 object-fit" src="https://placehold.co/1200x800" alt="img" />
                                    </div>
                                  </div>
                                  <div className="col-xl col-lg col-md">
                                    <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                      <div className="d-flex align-items-center justify-content-start">
                                        <div className="d-inline-block">
                                          <i className="fa fa-star text-warning text-xs" />
                                          <i className="fa fa-star text-warning text-xs" />
                                          <i className="fa fa-star text-warning text-xs" />
                                          <i className="fa fa-star text-warning text-xs" />
                                          <i className="fa fa-star text-warning text-xs" />
                                        </div>
                                      </div>
                                      <h4 className="fs-5 fw-bold mb-1">Hotel Chancellor@Orchard</h4>
                                      <ul className="row g-2 p-0">
                                        <li className="col-auto">
                                          <p className="text-muted-2 text-md">Waterloo and Southwark</p>
                                        </li>
                                        <li className="col-auto">
                                          <p className="text-muted-2 text-md fw-bold">.</p>
                                        </li>
                                        <li className="col-auto">
                                          <p className="text-muted-2 text-md">9.8 km from Delhi Airport</p>
                                        </li>
                                        <li className="col-auto">
                                          <p className="text-muted-2 text-md fw-bold">.</p>
                                        </li>
                                        <li className="col-auto">
                                          <p className="text-muted-2 text-md"><Link to="#" className="text-primary">Show on Map</Link></p>
                                        </li>
                                      </ul>
                                      <div className="detail ellipsis-container mt-3">
                                        <span className="ellipsis">Parking</span>
                                        <span className="ellipsis">WiFi</span>
                                        <span className="ellipsis">Eating</span>
                                        <span className="ellipsis">Cooling</span>
                                        <span className="ellipsis">Pet</span>
                                      </div>
                                      <div className="position-relative mt-3">
                                        <div className="fw-medium text-dark">Standard Twin Double Room</div>
                                        <div className="text-md text-muted">Last booed 25min ago</div>
                                      </div>
                                      <div className="position-relative mt-4">
                                        <div className="d-block position-relative"><label className="label bg-light-success text-success">Free Cancellation, till 1 hour of Pick
                                            up</label></div>
                                        <div className="text-md">
                                          <p className="m-0">Room type: Standard King Room <Link className="text-primary">Change Room</Link>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Single */}
                            <div className="single-iffcort mb-4">
                              <h6 className="d-flex align-items-center fw-semibold"><i className="fa-regular fa-circle-check me-2" />Today’s Activity</h6>
                              <div className="card list-layout-block rounded-3 border p-3">
                                <div className="row">
                                  <div className="col-xl-4 col-lg-3 col-md">
                                    <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                      <img className="img-fluid h-100 object-fit" src="https://placehold.co/1200x800" alt="img" />
                                    </div>
                                  </div>
                                  <div className="col-xl col-lg col-md">
                                    <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                      <div className="d-flex align-items-center justify-content-start mb-1">
                                        <span className="label bg-light-success text-success">Denver</span>
                                      </div>
                                      <h4 className="fs-5 fw-bold mb-1">Wetlands Walking Tour</h4>
                                      <ul className="row g-2 p-0">
                                        <li className="col-auto">
                                          <p className="text-muted-2 text-md">Southwark</p>
                                        </li>
                                        <li className="col-auto">
                                          <p className="text-muted-2 text-md fw-bold">.</p>
                                        </li>
                                        <li className="col-auto">
                                          <p className="text-muted-2 text-md">9km from Towndown</p>
                                        </li>
                                      </ul>
                                      <div className="detail ellipsis-container mt-3">
                                        <span className="ellipsis">Water Fall</span>
                                        <span className="ellipsis">Musium</span>
                                        <span className="ellipsis">Tanah Lot Tour</span>
                                      </div>
                                      <div className="hstack gap-3 flex-wrap mt-2">
                                        <p className="mb-0">Duration:<span className="h6 fw-semibold mb-0 ms-1">7 hrs</span></p>
                                        <p className="mb-0">Place Covered:<span className="h6 fw-semibold mb-0 ms-1">4</span></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Sidebar */}
                      <div className="col-xl-3 col-lg-3 col-md-12">
                        <div className="sides-block">
                          <div className="card border rounded-3 mb-4">
                            <div className="single-card px-3 py-3">
                              <p className="text-sm mb-0 lh-0"><del>$75,000</del></p>
                              <p className="font12 lh-1 mb-0"><span className="text-dark fs-3 fw-bold"><span>$50,000</span></span> per
                                person*</p>
                              <p className="text-sm mb-0">*Excluding applicable taxes</p>
                              <div className="position-absolute end-0 top-0 mt-2 me-2"><span className="text-md text-light label bg-success px-2">28% OFF</span></div>
                            </div>
                            <div className="single-card d-flex align-items-center justify-content-between px-3 py-3 border-top border-bottom">
                              <div className="exlop-date"><span className="text-dark fw-medium"><i className="fa-regular fa-calendar me-2" />27 Sep 2023</span></div>
                              <div className="exlop-link"><Link to="#" className="fw-semibold text-primary">Modify</Link></div>
                            </div>
                            <div className="single-card px-3 py-3">
                              <button className="btn btn-sm btn-primary full-width fw-medium text-uppercase mb-2" type="button">proceed to book online</button>
                              <button className="btn btn-sm btn-light-primary full-width fw-medium text-uppercase" type="button">Send Inquiry</button>
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
                              <p className="couponSep"><span className="couponSepText">OR</span></p>
                              <div className="single-couponOffers mb-3 position-relative active">
                                <div className="bg-light-success d-flex align-items-start justify-content-start py-3 px-2 rounded-3 position-relative">
                                  <div className="flex-shrink-0"><span className="text-success fs-4"><i className="fa-solid fa-circle-check" /></span></div>
                                  <div className="flexio-coupon ps-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <p className="text-md text-uppercase fw-medium text-dark lh-1 mb-0">EUROPESUMMER</p><Link to="#" className="text-blue text-uppercase fw-medium text-md">Remove</Link>
                                    </div>
                                    <p className="text-md lh-1 mb-3">Its downpouring offers grab exclusive discounts. Offer Ends
                                      Soon..Hurry!!!</p>
                                    <p className="couponPrice mb-0"><span className="fw-bold text-dark fs-5">- $12000</span></p>
                                  </div>
                                </div>
                              </div>
                              <div className="single-couponOffers mb-3 position-relative">
                                <div className="gray-simple d-flex align-items-start justify-content-start py-3 px-2 rounded-3 position-relative">
                                  <div className="flexio-coupon ps-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <p className="text-md text-uppercase fw-medium text-dark lh-1 mb-0">EUROPEWINTER</p><Link to="#" className="text-blue text-uppercase fw-medium text-md">Apply</Link>
                                    </div>
                                    <p className="text-md lh-1 mb-3">Its downpouring offers grab exclusive discounts. Offer Ends
                                      Soon..Hurry!!!</p>
                                    <p className="couponPrice mb-0"><span className="fw-bold text-dark fs-5">- $12500</span></p>
                                  </div>
                                </div>
                              </div>
                              <div className="single-couponOffers position-relative">
                                <div className="gray-simple d-flex align-items-start justify-content-start py-3 px-2 rounded-3 position-relative">
                                  <div className="flexio-coupon ps-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <p className="text-md text-uppercase fw-medium text-dark lh-1 mb-0">EUROPESUPER</p><Link to="#" className="text-blue text-uppercase fw-medium text-md">Apply</Link>
                                    </div>
                                    <p className="text-md lh-1 mb-3">Its downpouring offers grab exclusive discounts. Offer Ends
                                      Soon..Hurry!!!</p>
                                    <p className="couponPrice mb-0"><span className="fw-bold text-dark fs-5">- $12800</span></p>
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
            {/* ============================ Destination Detail End ================================== */}
            {/* ============================ Similar Destination Start ================================== */}
            <section className="gray-simple py-5">
              <div className="container">
                <div className="row align-items-center justify-content-between mb-3">
                  <div className="col-8">
                    <div className="upside-heading">
                      <h5 className="fw-bold fs-6 m-0">Similar Destination</h5>
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
                    <div className="main-carousel arrow-hide cols-3">
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 m-0">
                            <div className="flight-thumb-wrapper p-2 pb-0">
                              <div className="popFlights-item-overHidden rounded-3">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="tourist-wooks position-relative mb-3">
                                  <ul className="activities-flex">
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-jet-fighter" /></div>
                                        <div className="actv-wrap-caps">3 Flights</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-building-wheat" /></div>
                                        <div className="actv-wrap-caps">2 Hotels</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-person-walking-luggage" /></div>
                                        <div className="actv-wrap-caps">0 Activity</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-bus" /></div>
                                        <div className="actv-wrap-caps">2 Transfers</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="explot">
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Amazing Goa Trip Package with Flights</span>
                                  </h4>
                                  <div className="rates">
                                    <div className="rat-reviews">
                                      <strong><i className="fa-solid fa-star text-warning me-1" />4.6</strong><span>(142
                                        Reviews)</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="touritem-amenties my-4">
                                  <ul className="activities-flex">
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Amman</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">1N</span>Petra</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Dhaka</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="booking-wrapes d-flex align-items-start justify-content-start flex-column">
                                <h5 className="fs-5 low-price m-0">$<span className="price text-primary">492</span></h5>
                                <div className="text-muted-2 text-sm">For 2 Person</div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 m-0">
                            <div className="flight-thumb-wrapper p-2 pb-0">
                              <div className="popFlights-item-overHidden rounded-3">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="tourist-wooks position-relative mb-3">
                                  <ul className="activities-flex">
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-jet-fighter" /></div>
                                        <div className="actv-wrap-caps">3 Flights</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-building-wheat" /></div>
                                        <div className="actv-wrap-caps">2 Hotels</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-person-walking-luggage" /></div>
                                        <div className="actv-wrap-caps">0 Activity</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-bus" /></div>
                                        <div className="actv-wrap-caps">2 Transfers</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="explot">
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Electrifying Trip to Goa</span>
                                  </h4>
                                  <div className="rates">
                                    <div className="rat-reviews">
                                      <strong><i className="fa-solid fa-star text-warning me-1" />4.6</strong><span>(142
                                        Reviews)</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="touritem-amenties my-4">
                                  <ul className="activities-flex">
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Amman</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">1N</span>Petra</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Dhaka</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="booking-wrapes d-flex align-items-start justify-content-start flex-column">
                                <h5 className="fs-5 low-price m-0">$<span className="price text-primary">569</span></h5>
                                <div className="text-muted-2 text-sm">For 2 Person</div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 m-0">
                            <div className="flight-thumb-wrapper p-2 pb-0">
                              <div className="popFlights-item-overHidden rounded-3">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="tourist-wooks position-relative mb-3">
                                  <ul className="activities-flex">
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-jet-fighter" /></div>
                                        <div className="actv-wrap-caps">3 Flights</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-building-wheat" /></div>
                                        <div className="actv-wrap-caps">2 Hotels</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-person-walking-luggage" /></div>
                                        <div className="actv-wrap-caps">0 Activity</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-bus" /></div>
                                        <div className="actv-wrap-caps">2 Transfers</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="explot">
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Thrilling Holiday in Goa</span>
                                  </h4>
                                  <div className="rates">
                                    <div className="rat-reviews">
                                      <strong><i className="fa-solid fa-star text-warning me-1" />4.6</strong><span>(142
                                        Reviews)</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="touritem-amenties my-4">
                                  <ul className="activities-flex">
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Amman</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">1N</span>Petra</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Dhaka</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="booking-wrapes d-flex align-items-start justify-content-start flex-column">
                                <h5 className="fs-5 low-price m-0">$<span className="price text-primary">479</span></h5>
                                <div className="text-muted-2 text-sm">For 2 Person</div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 m-0">
                            <div className="flight-thumb-wrapper p-2 pb-0">
                              <div className="popFlights-item-overHidden rounded-3">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="tourist-wooks position-relative mb-3">
                                  <ul className="activities-flex">
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-jet-fighter" /></div>
                                        <div className="actv-wrap-caps">3 Flights</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-building-wheat" /></div>
                                        <div className="actv-wrap-caps">2 Hotels</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-person-walking-luggage" /></div>
                                        <div className="actv-wrap-caps">0 Activity</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-bus" /></div>
                                        <div className="actv-wrap-caps">2 Transfers</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="explot">
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>All Inclusive Romantic Goa 6N Holiday</span>
                                  </h4>
                                  <div className="rates">
                                    <div className="rat-reviews">
                                      <strong><i className="fa-solid fa-star text-warning me-1" />4.6</strong><span>(142
                                        Reviews)</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="touritem-amenties my-4">
                                  <ul className="activities-flex">
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Amman</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">1N</span>Petra</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Dhaka</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="booking-wrapes d-flex align-items-start justify-content-start flex-column">
                                <h5 className="fs-5 low-price m-0">$<span className="price text-primary">399</span></h5>
                                <div className="text-muted-2 text-sm">For 2 Person</div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 m-0">
                            <div className="flight-thumb-wrapper p-2 pb-0">
                              <div className="popFlights-item-overHidden rounded-3">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="tourist-wooks position-relative mb-3">
                                  <ul className="activities-flex">
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-jet-fighter" /></div>
                                        <div className="actv-wrap-caps">3 Flights</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-building-wheat" /></div>
                                        <div className="actv-wrap-caps">2 Hotels</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-person-walking-luggage" /></div>
                                        <div className="actv-wrap-caps">0 Activity</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-bus" /></div>
                                        <div className="actv-wrap-caps">2 Transfers</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="explot">
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Intimate Weekend Getaway to Goa</span>
                                  </h4>
                                  <div className="rates">
                                    <div className="rat-reviews">
                                      <strong><i className="fa-solid fa-star text-warning me-1" />4.6</strong><span>(142
                                        Reviews)</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="touritem-amenties my-4">
                                  <ul className="activities-flex">
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Amman</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">1N</span>Petra</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Dhaka</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="booking-wrapes d-flex align-items-start justify-content-start flex-column">
                                <h5 className="fs-5 low-price m-0">$<span className="price text-primary">456</span></h5>
                                <div className="text-muted-2 text-sm">For 2 Person</div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single Item */}
                      <div className="carousel-cell">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 m-0">
                            <div className="flight-thumb-wrapper p-2 pb-0">
                              <div className="popFlights-item-overHidden rounded-3">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <div className="tourist-wooks position-relative mb-3">
                                  <ul className="activities-flex">
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-jet-fighter" /></div>
                                        <div className="actv-wrap-caps">3 Flights</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-building-wheat" /></div>
                                        <div className="actv-wrap-caps">2 Hotels</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-person-walking-luggage" /></div>
                                        <div className="actv-wrap-caps">0 Activity</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-ico"><i className="fa-solid fa-bus" /></div>
                                        <div className="actv-wrap-caps">2 Transfers</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="explot">
                                  <h4 className="city fs-title m-0 fw-bold">
                                    <span>Luxurious Honeymoon in Goa</span>
                                  </h4>
                                  <div className="rates">
                                    <div className="rat-reviews">
                                      <strong><i className="fa-solid fa-star text-warning me-1" />4.6</strong><span>(142
                                        Reviews)</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="touritem-amenties my-4">
                                  <ul className="activities-flex">
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Amman</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">1N</span>Petra</div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="actv-wrap">
                                        <div className="actv-wrap-caps text-dark fw-bold fs-6"><span className="text-dhani me-1">2N</span>Dhaka</div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="booking-wrapes d-flex align-items-start justify-content-start flex-column">
                                <h5 className="fs-5 low-price m-0">$<span className="price text-primary">362</span></h5>
                                <div className="text-muted-2 text-sm">For 2 Person</div>
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
            {/* ============================ Similar Destination End ================================== */}
            {/* ============================= FAQ About Tour Detail Start ================================== */}
            <section>
              <div className="container">
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
                      <div className="accordion-item border rounded-3">
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
                      <div className="accordion-item border rounded-3">
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
                      <div className="accordion-item border rounded-3">
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
                      <div className="accordion-item border rounded-3">
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
                      <div className="accordion-item border rounded-3">
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
            </section>
            {/* ============================= FAQ About Tour Detail END ================================== */}
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

    export default DestinationDetail;