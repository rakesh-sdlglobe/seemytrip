import React from 'react';
import { Link } from 'react-router-dom';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { ship1 } from '../../assets/images';

export const CruiseBookingPage = () => {
  return (
    <div>
      {/* Preloader */}
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      {/* Main wrapper */}
      <div id="main-wrapper">
        {/* Top header */}
        <Header02 />
        <div className="clearfix" />
        {/* Booking Page */}
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
                        <h6 className="bs-stepper-label d-none d-md-block">Review Booking</h6>
                      </div>
                    </div>
                    <div className="line" />
                    {/* Step 2 */}
                    {/* <div className="step" data-target="#step-2">
                      <div className="text-center">
                        <button type="button" className="step-trigger mb-0" id="steppertrigger2">
                          <span className="bs-stepper-circle">2</span>
                        </button>
                        <h6 className="bs-stepper-label d-none d-md-block">Enter Details</h6>
                      </div>
                    </div> */}
                    <div className="line" />
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
                    <div className="card p-3 mb-xl-0 mb-lg-0 mb-3">
                      {/* Booking Info */}
                      <div className="card-box list-layout-block border br-dashed rounded-3 p-2">
                        <div className="row">
                          <div className="col-xl-4 col-lg-3 col-md">
                            <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                              <img className="img-fluid h-100 object-fit" alt="Cruise" src={ship1} />
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
                              <h4 className="fs-5 fw-bold mb-1">Cruise Booking</h4>
                              <ul className="row g-2 p-0">
                                <li className="col-auto">
                                  <p className="text-muted-2 text-md">Departure: Miami</p>
                                </li>
                                <li className="col-auto">
                                  <p className="text-muted-2 text-md fw-bold">→</p>
                                </li>
                                <li className="col-auto">
                                  <p className="text-muted-2 text-md">Destination: Bahamas</p>
                                </li>
                              </ul>
                              <div className="d-flex align-items-center mb-3">
                                <div className="col-auto">
                                  <div className="square--40 rounded-2 bg-primary text-light fw-semibold">4.9</div>
                                </div>
                                <div className="col-auto text-start ps-2">
                                  <div className="text-md text-dark fw-medium">Outstanding</div>
                                  <div className="text-md text-muted-2">2,500 reviews</div>
                                </div>
                              </div>
                              <div className="position-relative mt-3">
                                <div className="d-flex flex-wrap align-items-center">
                                  <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                    <div className="export-icon text-muted-2"><i className="fa-solid fa-ship" /></div>
                                    <div className="export ps-2">
                                      <span className="mb-0 text-muted-2 fw-semibold me-1">Luxury</span><span className="mb-0 text-muted-2 text-md">Cruise Type</span>
                                    </div>
                                  </div>
                                  <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                    <div className="export-icon text-muted-2"><i className="fa-solid fa-bed" /></div>
                                    <div className="export ps-2">
                                      <span className="mb-0 text-muted-2 fw-semibold me-1">500</span><span className="mb-0 text-muted-2 text-md">Cabins</span>
                                    </div>
                                  </div>
                                  <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                    <div className="export-icon text-muted-2"><i className="fa-solid fa-calendar-alt" /></div>
                                    <div className="export ps-2">
                                      <span className="mb-0 text-muted-2 fw-semibold me-1">5 Days</span><span className="mb-0 text-muted-2 text-md">Duration</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Good to Know */}
                      <div className="flight-boxyhc mt-4">
                        <h4 className="fs-5">Good To Know</h4>
                        <div className="effloration-wrap">
                          <p>All prices are in USD and subject to change without notice. The full amount of the cruise will be payable at the time of booking.</p>
                          <ul className="row align-items-center g-1 mb-0 p-0">
                            <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-circle-dot me-2" />Free Cancellation till 48 hours before departure</span></li>
                            <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-circle-dot me-2" />After 48 hours: 50% cancellation fee</span></li>
                            <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-circle-dot me-2" />No Show: 100% charge</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12">
                    <div className="side-block card rounded-2 p-3">
                      <h5 className="fw-semibold fs-6">Reservation Summary</h5>
                      <div className="mid-block rounded-2 border br-dashed p-2 mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-inline-block text-muted-2 text-md">Total Cost:</div>
                          <div className="d-inline-block fw-bold text-end fs-5 text-dark">$3,500</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-inline-block text-muted-2 text-md">Cabins:</div>
                          <div className="d-inline-block fw-bold text-end fs-5 text-dark">2</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-inline-block text-muted-2 text-md">Cruise Type:</div>
                          <div className="d-inline-block fw-bold text-end fs-5 text-dark">Luxury</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-inline-block text-muted-2 text-md">Departure Location:</div>
                          <div className="d-inline-block fw-bold text-end fs-5 text-dark">Miami</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-inline-block text-muted-2 text-md">Destination:</div>
                          <div className="d-inline-block fw-bold text-end fs-5 text-dark">Bahamas</div>
                        </div>
                      </div>
                      <div className="d-grid gap-2">
                        <Link to="/cruiseBookingPayment" className="btn btn-primary rounded-2 py-2">Proceed to Payment</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <FooterDark />
      </div>
    </div>
  );
};

export default CruiseBookingPage;
