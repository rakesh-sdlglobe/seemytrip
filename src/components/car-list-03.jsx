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

const CarList03 = () => {
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
                      <li className="list-buttons">
                        <Link to="#" data-bs-toggle="modal" data-bs-target="#login" className="bg-primary"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</Link>
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
            <div className="py-5 bg-primary position-relative">
              <div className="container">
                {/* Search Form */}
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="search-wrap position-relative">
                      <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                        <div className="col-xl-8 col-lg-7 col-md-12">
                          <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                              <div className="form-group hdd-arrow mb-0">
                                <label className="text-light text-uppercase opacity-75">Pickup Location</label>
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
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                              <div className="form-group mb-0">
                                <label className="text-light text-uppercase opacity-75">Select Date</label>
                                <input type="text" className="form-control fw-bold" placeholder="Check-In & Check-Out" id="checkinout" readOnly="readonly" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-12">
                          <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                              <div className="form-group hdd-arrow mb-0">
                                <label className="text-light text-uppercase opacity-75">Drop Location</label>
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
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group mb-0">
                                <button type="button" className="btn btn-whites text-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
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
            {/* ============================ Offers Start ================================== */}
            <section className="gray-simple">
              <div className="container">
                <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row align-items-center justify-content-between">
                      <div className="col-xl-4 col-lg-4 col-md-4">
                        <h5 className="fw-bold fs-6 mb-lg-0 mb-3">Showing 280 Search Results</h5>
                      </div>
                      <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="d-flex align-items-center justify-content-start justify-content-lg-end flex-wrap">
                          <div className="flsx-first me-2">
                            <div className="bg-white rounded py-2 px-3">
                              <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="mapoption" />
                                <label className="form-check-label ms-1" htmlFor="mapoption">Map</label>
                              </div>
                            </div>
                          </div>
                          <div className="flex-first me-2">
                            <button className="btn btn-filter btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="fa-solid fa-filter me-1" /><span className="d-none d-md-block">Filter</span></button>
                          </div>
                          <div className="flsx-first mt-sm-0 mt-2">
                            <ul className="nav nav-pills nav-fill p-1 small lights blukker bg-primary rounded-3 shadow-sm" id="filtersblocks" role="tablist">
                              <li className="nav-item" role="presentation">
                                <button className="nav-link active rounded-3" id="trending" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Our Trending</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button className="nav-link rounded-3" id="mostpopular" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Most Popular</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button className="nav-link rounded-3" id="lowprice" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Lowest Price</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row justify-content-center gy-4 gx-xl-3 gx-lg-4 gx-4">
                      {/* Single */}
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 shadow-wrap m-0">
                            <div className="flight-thumb-wrapper">
                              <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                                <div className="label bg-primary text-light d-inline-flex align-items-center justify-content-center">
                                  <span className="svg-icon text-light svg-icon-2hx me-1">
                                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                      <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                    </svg>
                                  </span>600Kms included. After that $15/Kms
                                </div>
                              </div>
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <h4 className="city fs-4 m-0 fw-bold">
                                  <span>Carmy Accord</span>
                                </h4>
                                <p className="detail ellipsis-container">
                                  <span className="ellipsis-item__normal">SEDAN</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">AC</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">5 Seats</span>
                                </p>
                                <div className="touritem-centrio mt-4">
                                  <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                      Cancellation Till 10 Aug 23</span></div>
                                  <div className="aments-lists mt-2">
                                    <div className="detail ellipsis-container mt-1">
                                      <span className="ellipsis">Manual</span>
                                      <span className="ellipsis">1 Large bag</span>
                                      <span className="ellipsis">1 Small bag</span>
                                      <span className="ellipsis">Diesel</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="trsms-foots mt-4">
                                <div className="flts-flex d-flex align-items-end justify-content-between">
                                  <div className="flts-flex-strat">
                                    <div className="d-flex align-items-center justify-content-start">
                                      <span className="label bg-light-danger text-danger">15% Off</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <div className="text-dark fw-bold fs-4">US$59</div>
                                      <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                    </div>
                                  </div>
                                  <div className="flts-flex-end">
                                    <div className="row align-items-center justify-content-end gx-2">
                                      <div className="col-auto text-start text-md-end">
                                        <div className="text-md text-dark fw-medium">Exceptional</div>
                                        <div className="text-md text-muted-2">3,014 reviews</div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single */}
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 shadow-wrap m-0">
                            <div className="flight-thumb-wrapper">
                              <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                                <div className="label bg-primary text-light d-inline-flex align-items-center justify-content-center">
                                  <span className="svg-icon text-light svg-icon-2hx me-1">
                                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                      <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                    </svg>
                                  </span>600Kms included. After that $15/Kms
                                </div>
                              </div>
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <h4 className="city fs-4 m-0 fw-bold">
                                  <span>Audi, BMW</span>
                                </h4>
                                <p className="detail ellipsis-container">
                                  <span className="ellipsis-item__normal">Hatchback</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">AC</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">5 Seats</span>
                                </p>
                                <div className="touritem-centrio mt-4">
                                  <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                      Cancellation Till 10 Aug 23</span></div>
                                  <div className="aments-lists mt-2">
                                    <div className="detail ellipsis-container mt-1">
                                      <span className="ellipsis">Manual</span>
                                      <span className="ellipsis">1 Large bag</span>
                                      <span className="ellipsis">1 Small bag</span>
                                      <span className="ellipsis">Diesel</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="trsms-foots mt-4">
                                <div className="flts-flex d-flex align-items-end justify-content-between">
                                  <div className="flts-flex-strat">
                                    <div className="d-flex align-items-center justify-content-start">
                                      <span className="label bg-light-danger text-danger">15% Off</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <div className="text-dark fw-bold fs-4">US$59</div>
                                      <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                    </div>
                                  </div>
                                  <div className="flts-flex-end">
                                    <div className="row align-items-center justify-content-end gx-2">
                                      <div className="col-auto text-start text-md-end">
                                        <div className="text-md text-dark fw-medium">Exceptional</div>
                                        <div className="text-md text-muted-2">3,014 reviews</div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single */}
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 shadow-wrap m-0">
                            <div className="flight-thumb-wrapper">
                              <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                                <div className="label bg-primary text-light d-inline-flex align-items-center justify-content-center">
                                  <span className="svg-icon text-light svg-icon-2hx me-1">
                                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                      <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                    </svg>
                                  </span>600Kms included. After that $15/Kms
                                </div>
                              </div>
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <h4 className="city fs-4 m-0 fw-bold">
                                  <span>Ertiga, Xylo</span>
                                </h4>
                                <p className="detail ellipsis-container">
                                  <span className="ellipsis-item__normal">LUX</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">AC</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">5 Seats</span>
                                </p>
                                <div className="touritem-centrio mt-4">
                                  <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                      Cancellation Till 10 Aug 23</span></div>
                                  <div className="aments-lists mt-2">
                                    <div className="detail ellipsis-container mt-1">
                                      <span className="ellipsis">Manual</span>
                                      <span className="ellipsis">1 Large bag</span>
                                      <span className="ellipsis">1 Small bag</span>
                                      <span className="ellipsis">Diesel</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="trsms-foots mt-4">
                                <div className="flts-flex d-flex align-items-end justify-content-between">
                                  <div className="flts-flex-strat">
                                    <div className="d-flex align-items-center justify-content-start">
                                      <span className="label bg-light-danger text-danger">15% Off</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <div className="text-dark fw-bold fs-4">US$59</div>
                                      <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                    </div>
                                  </div>
                                  <div className="flts-flex-end">
                                    <div className="row align-items-center justify-content-end gx-2">
                                      <div className="col-auto text-start text-md-end">
                                        <div className="text-md text-dark fw-medium">Exceptional</div>
                                        <div className="text-md text-muted-2">3,014 reviews</div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single */}
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 shadow-wrap m-0">
                            <div className="flight-thumb-wrapper">
                              <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                                <div className="label bg-primary text-light d-inline-flex align-items-center justify-content-center">
                                  <span className="svg-icon text-light svg-icon-2hx me-1">
                                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                      <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                    </svg>
                                  </span>600Kms included. After that $15/Kms
                                </div>
                              </div>
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <h4 className="city fs-4 m-0 fw-bold">
                                  <span>Suv, Innova Crysta</span>
                                </h4>
                                <p className="detail ellipsis-container">
                                  <span className="ellipsis-item__normal">SUV</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">AC</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">5 Seats</span>
                                </p>
                                <div className="touritem-centrio mt-4">
                                  <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                      Cancellation Till 10 Aug 23</span></div>
                                  <div className="aments-lists mt-2">
                                    <div className="detail ellipsis-container mt-1">
                                      <span className="ellipsis">Manual</span>
                                      <span className="ellipsis">1 Large bag</span>
                                      <span className="ellipsis">1 Small bag</span>
                                      <span className="ellipsis">Diesel</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="trsms-foots mt-4">
                                <div className="flts-flex d-flex align-items-end justify-content-between">
                                  <div className="flts-flex-strat">
                                    <div className="d-flex align-items-center justify-content-start">
                                      <span className="label bg-light-danger text-danger">15% Off</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <div className="text-dark fw-bold fs-4">US$59</div>
                                      <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                    </div>
                                  </div>
                                  <div className="flts-flex-end">
                                    <div className="row align-items-center justify-content-end gx-2">
                                      <div className="col-auto text-start text-md-end">
                                        <div className="text-md text-dark fw-medium">Exceptional</div>
                                        <div className="text-md text-muted-2">3,014 reviews</div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single */}
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 shadow-wrap m-0">
                            <div className="flight-thumb-wrapper">
                              <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                                <div className="label bg-primary text-light d-inline-flex align-items-center justify-content-center">
                                  <span className="svg-icon text-light svg-icon-2hx me-1">
                                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                      <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                    </svg>
                                  </span>600Kms included. After that $15/Kms
                                </div>
                              </div>
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <h4 className="city fs-4 m-0 fw-bold">
                                  <span>Toyota Aygo</span>
                                </h4>
                                <p className="detail ellipsis-container">
                                  <span className="ellipsis-item__normal">SEDAN</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">AC</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">5 Seats</span>
                                </p>
                                <div className="touritem-centrio mt-4">
                                  <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                      Cancellation Till 10 Aug 23</span></div>
                                  <div className="aments-lists mt-2">
                                    <div className="detail ellipsis-container mt-1">
                                      <span className="ellipsis">Manual</span>
                                      <span className="ellipsis">1 Large bag</span>
                                      <span className="ellipsis">1 Small bag</span>
                                      <span className="ellipsis">Diesel</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="trsms-foots mt-4">
                                <div className="flts-flex d-flex align-items-end justify-content-between">
                                  <div className="flts-flex-strat">
                                    <div className="d-flex align-items-center justify-content-start">
                                      <span className="label bg-light-danger text-danger">15% Off</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <div className="text-dark fw-bold fs-4">US$59</div>
                                      <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                    </div>
                                  </div>
                                  <div className="flts-flex-end">
                                    <div className="row align-items-center justify-content-end gx-2">
                                      <div className="col-auto text-start text-md-end">
                                        <div className="text-md text-dark fw-medium">Exceptional</div>
                                        <div className="text-md text-muted-2">3,014 reviews</div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Single */}
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="pop-touritem">
                          <Link to="#" className="card rounded-3 shadow-wrap m-0">
                            <div className="flight-thumb-wrapper">
                              <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                                <div className="label bg-primary text-light d-inline-flex align-items-center justify-content-center">
                                  <span className="svg-icon text-light svg-icon-2hx me-1">
                                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                      <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                    </svg>
                                  </span>600Kms included. After that $15/Kms
                                </div>
                              </div>
                              <div className="popFlights-item-overHidden">
                                <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div className="touritem-middle position-relative p-3">
                              <div className="touritem-flexxer">
                                <h4 className="city fs-4 m-0 fw-bold">
                                  <span>Ford Focus</span>
                                </h4>
                                <p className="detail ellipsis-container">
                                  <span className="ellipsis-item__normal">LUX</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">AC</span>
                                  <span className="separate ellipsis-item__normal" />
                                  <span className="ellipsis-item">5 Seats</span>
                                </p>
                                <div className="touritem-centrio mt-4">
                                  <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                      Cancellation Till 10 Aug 23</span></div>
                                  <div className="aments-lists mt-2">
                                    <div className="detail ellipsis-container mt-1">
                                      <span className="ellipsis">Manual</span>
                                      <span className="ellipsis">1 Large bag</span>
                                      <span className="ellipsis">1 Small bag</span>
                                      <span className="ellipsis">Diesel</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="trsms-foots mt-4">
                                <div className="flts-flex d-flex align-items-end justify-content-between">
                                  <div className="flts-flex-strat">
                                    <div className="d-flex align-items-center justify-content-start">
                                      <span className="label bg-light-danger text-danger">15% Off</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <div className="text-dark fw-bold fs-4">US$59</div>
                                      <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                    </div>
                                  </div>
                                  <div className="flts-flex-end">
                                    <div className="row align-items-center justify-content-end gx-2">
                                      <div className="col-auto text-start text-md-end">
                                        <div className="text-md text-dark fw-medium">Exceptional</div>
                                        <div className="text-md text-muted-2">3,014 reviews</div>
                                      </div>
                                      <div className="col-auto">
                                        <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
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
                </div>
              </div>
            </section>
            {/* ============================ Offers End ================================== */}
            {/* ============================ Call To Action Start ================================== */}
            <div className="position-relative bg-cover py-5 bg-primary" style={{background: 'url(https://placehold.co/2200x1200)no-repeat'}} data-overlay={5}>
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="calltoAction-wraps position-relative py-5 px-4">
                      <div className="ht-40" />
                      <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-10 col-sm-11 text-center">
                          <div className="calltoAction-title mb-5">
                            <h4 className="text-light fs-2 fw-bold lh-base m-0">Subscribe &amp; Get<br />Special Discount with GeoTrip.com
                            </h4>
                          </div>
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
                                    <button type="button" className="btn btn-primary fw-medium full-width">Submit<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="ht-40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================ Call To Action Start ================================== */}
            {/* ============================ Footer Start ================================== */}
          <Footer/>
            {/* ============================ Footer End ================================== */}
            {/* Filter Options Content*/}
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
              <div className="offcanvas-header gray-simple">
                <h5 className="offcanvas-title fs-6" id="offcanvasScrollingLabel">Advance Search Options</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div className="offcanvas-body">
                <div className="filter-searchBar bg-white rounded-3">
                  <div className="filter-searchBar-head border-bottom">
                    <div className="searchBar-headerBody d-flex align-items-start justify-content-between py-3">
                      <div className="searchBar-headerfirst">
                        <h6 className="fw-bold fs-5 m-0">Filters</h6>
                        <p className="text-md text-muted m-0">Showing 180 Cars</p>
                      </div>
                      <div className="searchBar-headerlast text-end">
                        <Link to="#" className="text-md fw-medium text-primary active">Clear All</Link>
                      </div>
                    </div>
                  </div>
                  <div className="filter-searchBar-body">
                    {/* Supplier & Seats */}
                    <div className="searchBar-single py-3 border-bottom">
                      <div className="searchBar-single-title d-flex mb-3">
                        <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Supplier</h6>
                      </div>
                      <div className="searchBar-single-wrap mb-4">
                        <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="easirent" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="easirent">Easirent</label>
                          </li>
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="hertz" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="hertz">Hertz</label>
                          </li>
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="national" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="national">National</label>
                          </li>
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="greenmotion" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="greenmotion">Green
                              Motion</label>
                          </li>
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="sixt" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="sixt">SIXT</label>
                          </li>
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="almo" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="almo">ALAMO</label>
                          </li>
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="avis" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="avis">Avis</label>
                          </li>
                        </ul>
                      </div>
                      <div className="searchBar-single-title d-flex mb-3">
                        <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Seats</h6>
                      </div>
                      <div className="searchBar-single-wrap">
                        <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="5seats" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="5seats">4-5
                              Seats</label>
                          </li>
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="7seats" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="7seats">5-7
                              Seats</label>
                          </li>
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="others" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="others">Others</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Supplier Policy */}
                    <div className="searchBar-single py-3 border-bottom">
                      <div className="searchBar-single-title d-flex mb-3">
                        <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Supplier Policy</h6>
                      </div>
                      <div className="searchBar-single-wrap">
                        <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="intantconfirm" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="intantconfirm">Instant
                              Confirmation</label>
                          </li>
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="freecancel" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="freecancel">Free
                              Cancellation</label>
                          </li>
                        </ul>
                      </div>
                      <div className="searchBar-single-title d-flex mb-3">
                        <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Car Accessories</h6>
                      </div>
                      <div className="searchBar-single-wrap">
                        <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="aircondition" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="aircondition">Air
                              Conditioning</label>
                          </li>
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="fulltofull" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="fulltofull">Full to
                              Full</label>
                          </li>
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="sametosame" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="sametosame">Same To
                              Same</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Pricing */}
                    <div className="searchBar-single py-3 border-bottom">
                      <div className="searchBar-single-title d-flex mb-3">
                        <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Pricing Range in US$</h6>
                      </div>
                      <div className="searchBar-single-wrap">
                        <input type="text" className="js-range-slider" name="my_range" defaultValue data-skin="round" data-type="double" data-min={0} data-max={1000} data-grid="false" />
                      </div>
                    </div>
                    {/* Rating */}
                    <div className="searchBar-single py-3 border-bottom">
                      <div className="searchBar-single-title d-flex mb-3">
                        <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Rating</h6>
                      </div>
                      <div className="searchBar-single-wrap">
                        <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="fourplus" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="fourplus">4.5 or
                              Higher</label>
                          </li>
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="fourhigher" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="fourhigher">4 or
                              Higher</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Payment Method */}
                    <div className="searchBar-single py-3 border-bottom">
                      <div className="searchBar-single-title d-flex mb-3">
                        <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Payment Method</h6>
                      </div>
                      <div className="searchBar-single-wrap">
                        <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="pickup" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="pickup">Pay at
                              pick-up</label>
                          </li>
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="prepay" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="prepay">Prepay
                              Online</label>
                          </li>
                          <li className="col-6">
                            <input type="checkbox" className="btn-check" id="prepaid" />
                            <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="prepaid">Prepaid
                              Deposit</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Car Modal */}
                    <div className="searchBar-single py-3">
                      <div className="searchBar-single-title d-flex align-items-center justify-content-between mb-3">
                        <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Car Modal</h6>
                        <Link to="#" className="text-md fw-medium text-muted active">Reset</Link>
                      </div>
                      <div className="searchBar-single-wrap">
                        <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                          <li className="col-12">
                            <div className="form-check lg">
                              <div className="frm-slicing d-flex align-items-center">
                                <div className="frm-slicing-first">
                                  <input className="form-check-input" type="checkbox" id="hyundai" />
                                  <label className="form-check-label" htmlFor="hyundai" />
                                </div>
                                <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                                  <div className="frms-flex d-flex align-items-center">
                                    <div className="frm-slicing-img"><img src="https://placehold.co/110x110" className="img-fluid" width={25} alt="" />
                                    </div>
                                    <div className="frm-slicing-title ps-2"><span className="text-muted-2">Hyundai</span></div>
                                  </div>
                                  <div className="text-end"><span className="text-md text-muted-2 opacity-75">$390.00</span></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="col-12">
                            <div className="form-check lg">
                              <div className="frm-slicing d-flex align-items-center">
                                <div className="frm-slicing-first">
                                  <input className="form-check-input" type="checkbox" id="marutis" />
                                  <label className="form-check-label" htmlFor="marutis" />
                                </div>
                                <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                                  <div className="frms-flex d-flex align-items-center">
                                    <div className="frm-slicing-img"><img src="https://placehold.co/110x110" className="img-fluid" width={25} alt="" />
                                    </div>
                                    <div className="frm-slicing-title ps-2"><span className="text-muted-2">Maruti Suzuki</span></div>
                                  </div>
                                  <div className="text-end"><span className="text-md text-muted-2 opacity-75">$310.00</span></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="col-12">
                            <div className="form-check lg">
                              <div className="frm-slicing d-flex align-items-center">
                                <div className="frm-slicing-first">
                                  <input className="form-check-input" type="checkbox" id="tata" />
                                  <label className="form-check-label" htmlFor="tata" />
                                </div>
                                <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                                  <div className="frms-flex d-flex align-items-center">
                                    <div className="frm-slicing-img"><img src="https://placehold.co/110x110" className="img-fluid" width={25} alt="" />
                                    </div>
                                    <div className="frm-slicing-title ps-2"><span className="text-muted-2">Tata</span></div>
                                  </div>
                                  <div className="text-end"><span className="text-md text-muted-2 opacity-75">$390.00</span></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="col-12">
                            <div className="form-check lg">
                              <div className="frm-slicing d-flex align-items-center">
                                <div className="frm-slicing-first">
                                  <input className="form-check-input" type="checkbox" id="mahindra" />
                                  <label className="form-check-label" htmlFor="mahindra" />
                                </div>
                                <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                                  <div className="frms-flex d-flex align-items-center">
                                    <div className="frm-slicing-img"><img src="https://placehold.co/110x110" className="img-fluid" width={25} alt="" />
                                    </div>
                                    <div className="frm-slicing-title ps-2"><span className="text-muted-2">Mahindra</span></div>
                                  </div>
                                  <div className="text-end"><span className="text-md text-muted-2 opacity-75">$410.00</span></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="col-12">
                            <div className="form-check lg">
                              <div className="frm-slicing d-flex align-items-center">
                                <div className="frm-slicing-first">
                                  <input className="form-check-input" type="checkbox" id="kia" />
                                  <label className="form-check-label" htmlFor="kia" />
                                </div>
                                <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                                  <div className="frms-flex d-flex align-items-center">
                                    <div className="frm-slicing-img"><img src="https://placehold.co/110x110" className="img-fluid" width={25} alt="" />
                                    </div>
                                    <div className="frm-slicing-title ps-2"><span className="text-muted-2">Kia</span></div>
                                  </div>
                                  <div className="text-end"><span className="text-md text-muted-2 opacity-75">$370.00</span></div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  

    export default CarList03;