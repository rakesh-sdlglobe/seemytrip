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
import React from 'react';
import Header02 from './header02';
import { Link } from 'react-router-dom';
import Footer from './footer';
import { Insurance } from '../assets/images';
import AppApk from './App_apk_promotion';
import { Features } from './medical_tourism/Features';
import InsuranceSearch from './insurance_components/insurance_search_page';

const InsuranceHome = () => {
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
        <Header02 />
        {/* End Navigation */}
        <div className="clearfix" />
        {/* ============================================================== */}
        {/* Top header  */}
        {/* ============================================================== */}
        {/* ============================ Hero Banner  Start================================== */}
        <div className="image-cover hero-header bg-white" style={{ background: 'url(../images/medical.png)no-repeat' }} data-overlay={5}>
          <div className="container">
            {/* Search Form */}
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                <div className="position-relative text-center mb-5">
                  <h1>Start Your Trip with <span className="position-relative z-4">See My Trip<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                    <svg width="185px" height="23px" viewBox="0 0 445.5 23">
                      <path className="fill-white opacity-7" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3,1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z">
                      </path>
                    </svg>
                  </span></span></h1>
                  <p className="fs-5 fw-light">Protect your journey with comprehensive travel insurance coverage. Travel with confidence!</p>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="search-wrap bg-white rounded-3 p-3">
                  <Features/>
                  {/* InsuranceSearch component will handle authentication and data fetching automatically */}
                  <InsuranceSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================ Hero Banner End ================================== */}

        {/* ============================ Insurance Plans Start ================================== */}
        <section className="pt-5 pb-0">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                  <h2>Travel Insurance Plans</h2>
                  <p>Choose the perfect insurance plan for your travel needs</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-3 g-4">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="insurance-plan-item">
                  <Link to="/insurance-detail" className="card rounded-3 border br-dashed border-2 m-0">
                    <div className="plan-container d-flex align-items-center justify-content-start p-2">
                      <div className="plan-flex position-relative">
                        <div className="plan-tags position-absolute start-0 top-0 mt-2 ms-2">
                          <span className="label text-light bg-success fw-medium">Basic</span>
                        </div>
                        <div className="plan-pic">
                          <img src={Insurance} className="img-fluid rounded" width={110} alt="Basic Insurance" />
                        </div>
                      </div>
                      <div className="plan-captions ps-3">
                        <h4 className="plan-name fs-6 m-0 fw-bold">
                          <span>Basic Plan</span>
                        </h4>
                        <p className="details ellipsis-container">
                          <span className="ellipsis-item__normal">Domestic Travel</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">Medical Coverage</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">Baggage Protection</span>
                        </p>
                        <div className="plan-wrapper d-flex align-items-center justify-content-between">
                          <h5 className="fs-5 low-price m-0">
                            <span className="tag-span">From</span> <span className="price">₹299 - ₹599</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="insurance-plan-item">
                  <Link to="/insurance-detail" className="card rounded-3 border br-dashed border-2 m-0">
                    <div className="plan-container d-flex align-items-center justify-content-start p-2">
                      <div className="plan-flex position-relative">
                        <div className="plan-tags position-absolute start-0 top-0 mt-2 ms-2">
                          <span className="label text-light bg-warning fw-medium">Comprehensive</span>
                        </div>
                        <div className="plan-pic">
                          <img src={Insurance} className="img-fluid rounded" width={110} alt="Comprehensive Insurance" />
                        </div>
                      </div>
                      <div className="plan-captions ps-3">
                        <h4 className="plan-name fs-6 m-0 fw-bold">
                          <span>Comprehensive Plan</span>
                        </h4>
                        <p className="details ellipsis-container">
                          <span className="ellipsis-item__normal">International Travel</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">Full Medical Coverage</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">Trip Cancellation</span>
                        </p>
                        <div className="plan-wrapper d-flex align-items-center justify-content-between">
                          <h5 className="fs-5 low-price m-0">
                            <span className="tag-span">From</span> <span className="price">₹799 - ₹1,499</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="insurance-plan-item">
                  <Link to="/insurance-detail" className="card rounded-3 border br-dashed border-2 m-0">
                    <div className="plan-container d-flex align-items-center justify-content-start p-2">
                      <div className="plan-flex position-relative">
                        <div className="plan-tags position-absolute start-0 top-0 mt-2 ms-2">
                          <span className="label text-light bg-danger fw-medium">Premium</span>
                        </div>
                        <div className="plan-pic">
                          <img src={Insurance} className="img-fluid rounded" width={110} alt="Premium Insurance" />
                        </div>
                      </div>
                      <div className="plan-captions ps-3">
                        <h4 className="plan-name fs-6 m-0 fw-bold">
                          <span>Premium Plan</span>
                        </h4>
                        <p className="details ellipsis-container">
                          <span className="ellipsis-item__normal">Luxury Travel</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">Maximum Coverage</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">24/7 Support</span>
                        </p>
                        <div className="plan-wrapper d-flex align-items-center justify-content-between">
                          <h5 className="fs-5 low-price m-0">
                            <span className="tag-span">From</span> <span className="price">₹1,299 - ₹2,499</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Insurance Plans End ================================== */}

        {/* ============================ Why Choose Insurance Start ================================== */}
        <section className="gray-simple">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                  <h2>Why Choose Travel Insurance?</h2>
                  <p>Protect your journey with comprehensive coverage</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center gy-4 gx-3">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="feature-item text-center">
                  <div className="feature-icon mb-3">
                    <i className="fa-solid fa-shield-halved text-primary fa-2x"></i>
                  </div>
                  <h5>Medical Coverage</h5>
                  <p className="text-muted">Comprehensive medical protection during your travels</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="feature-item text-center">
                  <div className="feature-icon mb-3">
                    <i className="fa-solid fa-suitcase text-success fa-2x"></i>
                  </div>
                  <h5>Baggage Protection</h5>
                  <p className="text-muted">Coverage for lost, damaged, or delayed luggage</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="feature-item text-center">
                  <div className="feature-icon mb-3">
                    <i className="fa-solid fa-plane text-warning fa-2x"></i>
                  </div>
                  <h5>Trip Cancellation</h5>
                  <p className="text-muted">Protection against unexpected trip cancellations</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="feature-item text-center">
                  <div className="feature-icon mb-3">
                    <i className="fa-solid fa-headset text-info fa-2x"></i>
                  </div>
                  <h5>24/7 Support</h5>
                  <p className="text-muted">Round-the-clock assistance when you need it most</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Why Choose Insurance End ================================== */}

        {/* ============================ App Promotion Start ================================== */}
        <AppApk />
        {/* ============================ App Promotion End ================================== */}

        {/* ============================ Footer Start ================================== */}
        <Footer />
        {/* ============================ Footer End ================================== */}
      </div>
    </div>
  );
}

export default InsuranceHome;
