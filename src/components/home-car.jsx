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
import Header02 from './header02';
import { Link } from 'react-router-dom';
import Footer from './footer';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Bangalore, Carnival, delhi, Delhi, Ertiga, Hyderabad, Jazz, Mumbai, Nexon, Tiago, Toyota } from '../assets/images';
import CabSearch from './cab_components/cab_search_componets';
import { Features } from './medical_tourism/Features';

const HomeCar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>See My Trip - Tour &amp; Travel Booking Agency </title>
      <link rel="icon" type="image/x-icon" to="assets/img/favicon.png" />
      {/* All Plugins */}
      <link to="assets/css/bootstrap.min.css" rel="stylesheet" />
      <link to="assets/css/animation.css" rel="stylesheet" />
      <link to="assets/css/dropzone.min.css" rel="stylesheet" />
      <link to="assets/css/flatpickr.min.css" rel="stylesheet" />
      <link to="assets/css/flickity.min.css" rel="stylesheet" />
      <link to="assets/css/lightbox.min.css" rel="stylesheet" />
      <link to="assets/css/magnifypopup.css" rel="stylesheet" />
      <link to="assets/css/select2.min.css" rel="stylesheet" />
      <link to="assets/css/rangeSlider.min.css" rel="stylesheet" />
      <link to="assets/css/prism.css" rel="stylesheet" />
      {/* Fontawesome & Bootstrap Icons CSS */}
      <link to="assets/css/bootstrap-icons.css" rel="stylesheet" />
      <link to="assets/css/fontawesome.css" rel="stylesheet" />
      {/* Custom CSS */}
      <link to="assets/css/style.css" rel="stylesheet" />
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
        <div className="image-cover hero-header bg-white" style={{ background: 'url(../images/taxis.png)no-repeat' }} data-overlay={5}>
          <div className="container">
            {/* Search Form */}
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                <div className="position-relative text-center mb-5">
                  <h1>Start Your Trip with <span className="position-relative z-4">See My Trip<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                    <svg width="185px" height="23px" viewBox="0 0 445.5 23">
                      <path className="fill-white opacity-7" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z">
                      </path>
                    </svg>
                  </span></span></h1>
                  <p className="fs-5 fw-light">Take a little break from the everyday work stress. Plan a trip and explore beautiful destinations!</p>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="search-wrap bg-white rounded-3 p-3">
                <Features/>
                <CabSearch/>
              </div>
              </div>
            </div>
            {/* </row> */}
          </div>
        </div>
        {/* ============================ Hero Banner End ================================== */}
        {/* =========================== Tours Offers Start ====================================== */}
        <section className="pt-5 pb-0">
          <div className="container">
            <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-3 g-4">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="cab-offer-item">
                  <Link to="#" className="card rounded-3 border br-dashed border-2 m-0">
                    <div className="offer-container d-flex align-items-center justify-content-start p-2">
                      <div className="offer-flex position-relative">
                        <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2">
                          <span className="label text-light bg-danger fw-medium">20% Off</span>
                        </div>
                        <div className="offer-pic">
                          <img src={Hyderabad} className="img-fluid rounded" width={110} alt="Cab Offer" />
                        </div>
                      </div>
                      <div className="offer-captions ps-3">
                        <h4 className="destination fs-6 m-0 fw-bold">
                          <span>Hyderabad</span>
                        </h4>
                        <p className="details ellipsis-container">
                          <span className="ellipsis-item__normal">Round-trip</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3 Days</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3 People</span>
                        </p>
                        <div className="booking-wrapper d-flex align-items-center justify-content-between">
                          <h5 className="fs-5 low-price m-0">
                            <span className="tag-span">From</span> <span className="price">₹849 - ₹999</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="cab-offer-item">
                  <Link to="#" className="card rounded-3 border br-dashed border-2 m-0">
                    <div className="offer-container d-flex align-items-center justify-content-start p-2">
                      <div className="offer-flex position-relative">
                        <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2">
                          <span className="label text-light bg-danger fw-medium">15% Off</span>
                        </div>
                        <div className="offer-pic">
                          <img src={Delhi} className="img-fluid rounded" width={110} alt="Cab Offer" />
                        </div>
                      </div>
                      <div className="offer-captions ps-3">
                        <h4 className="destination fs-6 m-0 fw-bold">
                          <span>Delhi</span>
                        </h4>
                        <p className="details ellipsis-container">
                          <span className="ellipsis-item__normal">Round-trip</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3 Days</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">2 People</span>
                        </p>
                        <div className="booking-wrapper d-flex align-items-center justify-content-between">
                          <h5 className="fs-5 low-price m-0">
                            <span className="tag-span">From</span> <span className="price">₹399 - ₹599</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="cab-offer-item">
                  <Link to="#" className="card rounded-3 border br-dashed border-2 m-0">
                    <div className="offer-container d-flex align-items-center justify-content-start p-2">
                      <div className="offer-flex position-relative">
                        <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2">
                          <span className="label text-light bg-danger fw-medium">30% Off</span>
                        </div>
                        <div className="offer-pic">
                          <img src={Bangalore} className="img-fluid rounded" width={110} alt="Cab Offer" />
                        </div>
                      </div>
                      <div className="offer-captions ps-3">
                        <h4 className="destination fs-6 m-0 fw-bold">
                          <span>Bangalore</span>
                        </h4>
                        <p className="details ellipsis-container">
                          <span className="ellipsis-item__normal">Round-trip</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3 Days</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3 People</span>
                        </p>
                        <div className="booking-wrapper d-flex align-items-center justify-content-between">
                          <h5 className="fs-5 low-price m-0">
                            <span className="tag-span">From</span> <span className="price">₹569 - ₹799</span>
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

        {/* =========================== Tours Offers End ====================================== */}
         {/* ============================ Popular Routes Design Start ================================== */}
      <section className="gray-simple">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
              <div className="secHeading-wrap text-center mb-5">
                <h2>Explore Popular Routes</h2>
                <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center gy-4 gx-3">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="pop-touritem">
              <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                <div className="flight-thumb-wrapper">
                  <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                    <div className="label bg-success text-light d-inline-flex align-items-center justify-content-center">
                      <span className="svg-icon text-light svg-icon-2hx me-1">
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                          <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                        </svg>
                      </span>Featured
                    </div>
                  </div>
                  <div className="popFlights-item-overHidden">
                    <img src={Delhi} className="img-fluid" alt="Delhi to Agra" />
                  </div>
                </div>
                <div className="touritem-middle position-relative p-3">
                  <div className="touritem-flexxer">
                    <h4 className="city fs-6 m-0 fw-bold">
                      <span>Delhi</span>
                      <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                          <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                        </svg>
                      </span>
                      <span>Agra</span>
                    </h4>
                    <p className="detail ellipsis-container">
                      <span className="ellipsis-item__normal">Round-trip</span>
                      <span className="separate ellipsis-item__normal" />
                      <span className="ellipsis-item">3 days</span>
                    </p>
                  </div>
                  <div className="flight-foots">
                    <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">₹2,500</span></h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
  <div className="pop-touritem">
    <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
      <div className="flight-thumb-wrapper">
        <div className="popFlights-item-overHidden">
          <img src={Bangalore} className="img-fluid" alt="Bangalore to Mysore" />
        </div>
      </div>
      <div className="touritem-middle position-relative p-3">
        <div className="touritem-flexxer">
          <h4 className="city fs-6 m-0 fw-bold">
            <span>Bangalore</span>
            <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
              </svg>
            </span>
            <span>Mysore</span>
          </h4>
          <p className="detail ellipsis-container">
            <span className="ellipsis-item__normal">One-way</span>
            <span className="separate ellipsis-item__normal" />
            <span className="ellipsis-item">2 days</span>
          </p>
        </div>
        <div className="flight-foots">
          <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">₹1,800</span></h5>
        </div>
      </div>
    </a>
  </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="pop-touritem">
                <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                  <div className="flight-thumb-wrapper">
                    <div className="popFlights-item-overHidden">
                      <img src={Hyderabad} className="img-fluid" alt="Hyderabad to Vijayawada" />
                    </div>
                  </div>
                  <div className="touritem-middle position-relative p-3">
                    <div className="touritem-flexxer">
                      <h4 className="city fs-6 m-0 fw-bold">
                        <span>Hyderabad</span>
                        <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                            <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                          </svg>
                        </span>
                        <span>Vijayawada</span>
                      </h4>
                      <p className="detail ellipsis-container">
                        <span className="ellipsis-item__normal">One-way</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">1 day</span>
                      </p>
                    </div>
                    <div className="flight-foots">
                      <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">₹1,500</span></h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="pop-touritem">
                <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                  <div className="flight-thumb-wrapper">
                    <div className="popFlights-item-overHidden">
                      <img src={Mumbai} className="img-fluid" alt="Mumbai to Pune" />
                    </div>
                  </div>
                  <div className="touritem-middle position-relative p-3">
                    <div className="touritem-flexxer">
                      <h4 className="city fs-6 m-0 fw-bold">
                        <span>Mumbai</span>
                        <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                            <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                          </svg>
                        </span>
                        <span>Pune</span>
                      </h4>
                      <p className="detail ellipsis-container">
                        <span className="ellipsis-item__normal">One-way</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">1 day</span>
                      </p>
                    </div>
                    <div className="flight-foots">
                      <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">₹900</span></h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="pop-touritem">
                <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
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
                      <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="pop-touritem">
                <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                  <div className="flight-thumb-wrapper">
                    <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                      <div className="label bg-success text-light d-inline-flex align-items-center justify-content-center">
                        <span className="svg-icon text-light svg-icon-2hx me-1">
                          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                            <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                          </svg>
                        </span>Featured
                      </div>
                    </div>
                    <div className="popFlights-item-overHidden">
                      <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="touritem-middle position-relative p-3">
                    <div className="touritem-flexxer">
                      <h4 className="city fs-6 m-0 fw-bold">
                        <span>Houston</span>
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
                      <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="pop-touritem">
                <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                  <div className="flight-thumb-wrapper">
                    <div className="popFlights-item-overHidden">
                      <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="touritem-middle position-relative p-3">
                    <div className="touritem-flexxer">
                      <h4 className="city fs-6 m-0 fw-bold">
                        <span>San Antonio</span>
                        <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                            <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                          </svg>
                        </span>
                        <span>Columbus</span>
                      </h4>
                      <p className="detail ellipsis-container">
                        <span className="ellipsis-item__normal">Round-trip</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">3 days</span>
                      </p>
                    </div>
                    <div className="flight-foots">
                      <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="pop-touritem">
                <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                  <div className="flight-thumb-wrapper">
                    <div className="popFlights-item-overHidden">
                      <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="touritem-middle position-relative p-3">
                    <div className="touritem-flexxer">
                      <h4 className="city fs-6 m-0 fw-bold">
                        <span>Los Angeles</span>
                        <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                            <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                          </svg>
                        </span>
                        <span>Canada</span>
                      </h4>
                      <p className="detail ellipsis-container">
                        <span className="ellipsis-item__normal">Round-trip</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">3 days</span>
                      </p>
                    </div>
                    <div className="flight-foots">
                      <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="text-center position-relative mt-5">
                <button type="button" className="btn btn-light-primary fw-medium px-5">Explore More<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ Popular Routes Design Start ================================== */}
        {/* ============================ Best Locations Design Start ================================== */}
        {/* <section className="gray-simple">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Trending Destination For Stay</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center gy-4 gx-3">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>Chicago</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Cars</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>San Diego</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Cars</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>San Jose</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Cars</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>New York</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Cars</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>San Francisco</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Cars</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>Los Angeles</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Cars</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>New Orleans</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Cars</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="destination-blocks bg-white p-2 rounded">
                      <div className="destination-blocks-pics p-1">
                        <Link to="#"><img src="https://placehold.co/650x850" className="img-fluid rounded" alt="" /></Link>
                      </div>
                      <div className="destination-blocks-captions">
                        <div className="touritem-flexxer text-center p-3">
                          <h4 className="city fs-5 m-0 fw-bold">
                            <span>Long Beach</span>
                          </h4>
                          <p className="detail ellipsis-container m-0">
                            <span className="ellipsis-item__normal">10 Destinations</span>
                            <span className="separate ellipsis-item__normal" />
                            <span className="ellipsis-item">5 Cars</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
        {/* ============================ Best Locations Design Start ================================== */}
        {/* ============================ Video Helps End ================================== */}
        {/* <section className="bg-cover" style={{background: 'url(https://placehold.co/2200x800)no-repeat'}} data-overlay={5}>
              <div className="ht-150" />
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="video-play-wrap text-center">
                      <div className="video-play-btn d-flex align-items-center justify-content-center">
                        <Link to="https://www.youtube.com/watch?v=A8EI6JaFbv4" data-bs-toggle="modal" data-bs-target="#popup-video" className="square--90 circle bg-white fs-2 text-primary"><i className="fa-solid fa-play" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ht-150" />
            </section> */}
        {/* ============================ Video Helps End ================================== */}
        {/* ============================ Our Reviews Start ================================== */}
        {/* <section className="gray-simple bg-cover" style={{background: 'url(assets/img/reviewbg.png)no-repeat'}}>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Loving Reviews By Our Customers</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-4 g-3">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" /></div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Aman Diwakar</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" /></div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Kunal M. Thakur</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" /></div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Divya Talwar</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" /></div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Karan Maheshwari</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card border rounded-3">
                      <div className="card-body">
                        <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                        <div className="d-flex align-items-center flex-thumbes">
                          <div className="revws-pic"><img src="https://placehold.co/500x500" className="img-fluid rounded-2" width={80} alt="" /></div>
                          <div className="revws-caps ps-3">
                            <h6 className="fw-bold fs-6 m-0">Ritika Mathur</h6>
                            <p className="text-muted-2 text-md m-0">United States</p>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                              <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="revws-desc mt-3">
                          <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
        {/* ============================ Our Reviews End ================================== */}
        {/* ============================ Our Experience End ================================== */}
        {/* <section>
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-5 col-lg-5 col-md-6">
                    <div className="position-relative">
                      <img src="https://placehold.co/1000x1100" className="img-fluid rounded-3 position-relative z-1" alt="" />
                      <div className="position-absolute bottom-0 start-0 z-index-1 mb-4 ms-2">
                        <div className="bg-body d-flex d-inline-block rounded-3 position-relative p-3 z-2 shadow-wrap">
                          
                          <div className="me-4">
                            <h6 className="fw-normal">Client</h6>
                            
                            <ul className="avatar-group mb-0">
                              <li className="avatar avatar-md">
                                <img className="avatar-img circle" src="https://placehold.co/500x500" alt="avatar" />
                              </li>
                              <li className="avatar avatar-md">
                                <img className="avatar-img circle" src="https://placehold.co/500x500" alt="avatar" />
                              </li>
                              <li className="avatar avatar-md">
                                <img className="avatar-img circle" src="https://placehold.co/500x500" alt="avatar" />
                              </li>
                              <li className="avatar avatar-md">
                                <img className="avatar-img circle" src="https://placehold.co/500x500" alt="avatar" />
                              </li>
                              <li className="avatar avatar-md">
                                <div className="avatar-img circle bg-primary">
                                  <span className="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h6 className="fw-normal mb-3">Rating</h6>
                            <h6 className="m-0">4.5<i className="fa-solid fa-star text-warning ms-1" /></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="bestExperience-block">
                      <p className="fw-medium text-primary text-md text-uppercase mb-0">Memories</p>
                      <h2 className="fw-bold lh-base">Our Attractive Experience And Services For you!</h2>
                      <p className="fw-light fs-6">Using dummy content or fake information in the Web design process can Fake data
                        can ensure a nice looking layout but it doesn’t reflect what a living, breathing application must
                        endure. Real data does. result in products with unrealistic assumptions and potentially serious design
                        flaws. A seemingly elegant design can quickly begin to bloat with unexpected content or break under the
                        weight of actual activity. </p>
                      <div className="d-inline-flex mt-4">
                        <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple me-3">
                          <h6 className="fw-bold fs-3 m-0">33</h6>
                          <p className="m-0 text-sm text-muted-2">Year Esperience</p>
                        </div>
                        <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple me-3">
                          <h6 className="fw-bold fs-3 m-0">78</h6>
                          <p className="m-0 text-sm text-muted-2">Destination Collaboration</p>
                        </div>
                        <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple">
                          <h6 className="fw-bold fs-3 m-0">25K</h6>
                          <p className="m-0 text-sm text-muted-2">Happy Customers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
        {/* ============================ Our Experience End ================================== */}
        {/* ================================ Article Section Start ======================================= */}
        {/* <section className="pt-0">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                    <div className="secHeading-wrap text-center mb-5">
                      <h2>Trending &amp; Popular Articles</h2>
                      <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center g-4">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="blogGrid-wrap d-flex flex-column h-100">
                      <div className="blogGrid-pics">
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog img" /></Link>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Destination</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</Link></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="blogGrid-wrap d-flex flex-column h-100">
                      <div className="blogGrid-pics">
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog img" /></Link>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Journey</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</Link></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="blogGrid-wrap d-flex flex-column h-100">
                      <div className="blogGrid-pics">
                        <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog img" /></Link>
                      </div>
                      <div className="blogGrid-caps pt-3">
                        <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Business</span></div>
                        <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                            Comfirtable And Best Price</Link></h4>
                        <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                          to be unintendedly humorous or offensive day of going live.</p>
                        <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
        {/* ================================ Article Section Start ======================================= */}
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
        <Footer />
        {/* ============================ Footer End ================================== */}
        
      </div>
    </div>
  );
}

export default HomeCar;