import "../assets/css/bootstrap.min.css";
import "../assets/css/animation.css";
import "../assets/css/dropzone.min.css";
import "../assets/css/flatpickr.min.css";
import "../assets/css/flickity.min.css";
import "../assets/css/lightbox.min.css";
import "../assets/css/magnifypopup.css";
import "../assets/css/select2.min.css";
import "../assets/css/rangeSlider.min.css";
import "../assets/css/prism.css";
import "../assets/css/bootstrap-icons.css";
import "../assets/css/fontawesome.css";
import "../assets/css/style.css";

import {
  charminar,
  benglore,
  kolkota,
  mumbai,
  utterpradesh,
  kerla,
  delhi,
  chennai,
} from "../assets/images";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// Components
import Header02 from "./header02";
import Footer from "./footer";
import SearchComponent from "./train_search_result/search_component";
import HorizontalContainer from "./train_search_result/HorizontalContainer";
import { Features } from "./medical_tourism/Features";
import WelcomePopup from "./WelcomePopup";
import AppApk from "./App_apk_promotion";
import Whyseemytrip from "./Whyseemytrip";
import TrainRoutesTabs from "./Trainroutestabs";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Trains");
  const navigate = useNavigate();

  return (
    <div>
      {/* ============================================
          Preloader Section
      ============================================ */}
      <div id="preloader">
        <div className="preloader">
          <span />
          <span />
        </div>
      </div>

      <div id="main-wrapper">
        {/* ============================================
            Header & Navigation
        ============================================ */}
        <Header02 />
        <div className="clearfix" />

        {/* ============================================
            Hero Banner with Search Form
        ============================================ */}
        <div className="image-cover hero-header bg-white" 
             style={{ background: "url(../images/indian_train.png)no-repeat" }} 
             data-overlay={5}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              {/* Hero Title */}
              <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                <div className="position-relative text-center mb-5">
                  <h1>
                    Start Your Trip with{" "}
                    <span className="position-relative z-4">
                      See My Trip
                      <span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                        <svg width="185px" height="23px" viewBox="0 0 445.5 23">
                          <path className="fill-white opacity-7" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z"></path>
                        </svg>
                      </span>
                    </span>
                  </h1>
                  <p className="fs-5 fw-light">
                    Take a little break from the work stress of everyday.
                    Discover plan trip and explore beautiful destinations.
                  </p>
                </div>
              </div>

              {/* Search Form */}
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="search-wrap bg-white rounded-3 p-3">
                  <Features />
                  {/* <div>
                    <h2 className='text-black text-center fs-5 fw-light'>Welcome to Seemytrip</h2>
                  </div> */}
                  <div className="tab-content">
                    <div className="tab-pane show active" id="Trains">
                      {activeTab === "Trains" && (
                        <div className="tab-pane show active" id="Trains">
                          <SearchComponent
                            // backgroundColor="#f6f6f6"
                            height="210px"
                            leavingLabel={null}
                            goingLabel={null}
                            dateLabel={null}
                            buttonBackgroundColor="#cd2c22"
                            buttonTextColor="#ffffff"
                            dropdownHindden="flex"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================
            Train Status & Welcome Section
        ============================================ */}
        <HorizontalContainer />
        <WelcomePopup />

        {/* ============================================
            Features & Benefits Section
        ============================================ */}
        <section className="border-bottom py-5">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-lg-8 text-center">
                <h2 className="fw-bold fs-2">
                  Why Book Your Train Journey with SeeMyTrip?
                </h2>
                <p className="fs-5 text-muted">
                  Discover the ultimate convenience and features designed for
                  seamless train travel across India.
                </p>
              </div>
            </div>
            <Whyseemytrip />
          </div>
        </section>

        {/* ============================================
            Top Train Routes Section
        ============================================ */}
        <section className="gray-simple">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                  <h2>Top Train Routes</h2>
                  <p>
                    Experience the scenic journeys that connect you to
                    remarkable destinations.
                  </p>
                </div>
              </div>
            </div>

            {/* Train Route Cards */}
            <div className="row justify-content-center gy-4 gx-3">
              {/* Hyderabad Card */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={charminar} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold mb-3">
                        <span>Hyderabad</span>
                      </h4>
                      <div className="cities-list">
                        <span className="text-muted mb-2 d-block">from:</span>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Mumbai</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Chennai</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Pune</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Delhi</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Bangalore</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={benglore} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold mb-3">
                        <span>Bangalore</span>
                      </h4>
                      <div className="cities-list">
                      <span className="text-muted mb-2 d-block">from:</span>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Mumbai</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Hyderabad</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Chennai</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Pune</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Delhi</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={kolkota} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold mb-3">
                        <span>Kolkata</span>
                      </h4>
                      <div className="cities-list">
                      <span className="text-muted mb-2 d-block">from:</span>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                        <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Mumbai</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Hyderabad</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Bangalore</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Pune</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Delhi</Link>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={mumbai} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold mb-3">
                        <span>Mumbai</span>
                      </h4>
                      <div className="cities-list">
                      <span className="text-muted mb-2 d-block">from:</span>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                        <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Mumbai</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Hyderabad</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Bangalore</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Pune</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Delhi</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img
                            src={utterpradesh}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold mb-3">
                        <span>Uttar Pradesh</span>
                      </h4>
                      <div className="cities-list">
                      <span className="text-muted mb-2 d-block">from:</span>
                          <div className="d-flex flex-wrap justify-content-center gap-2">
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Mumbai</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Hyderabad</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Chennai</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Pune</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Delhi</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={kerla} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold mb-3">
                        <span>Kerala</span>
                      </h4>
                      <div className="cities-list">
                      <span className="text-muted mb-2 d-block">from:</span>
                          <div className="d-flex flex-wrap justify-content-center gap-2">
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Mumbai</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Hyderabad</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Chennai</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Pune</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Delhi</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={delhi} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold mb-3">
                        <span>Delhi</span>
                      </h4>
                      <div className="cities-list">
                      <span className="text-muted mb-2 d-block">from:</span>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                        <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Mumbai</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Hyderabad</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Chennai</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Pune</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Bangalore</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={chennai} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold mb-3">
                        <span>Chennai</span>
                      </h4>
                      <div className="cities-list">
                      <span className="text-muted mb-2 d-block">from:</span>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                        <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Mumbai</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Hyderabad</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Bangalore</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Pune</Link>
                          <Link to="#" className="badge bg-primary-subtle text-primary hover-badge">Delhi</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            App Download Promotion
        ============================================ */}
        <section className="py-5">
          <AppApk />
        </section>
         {/* ============================================
            Frequently Asked Questions Section
        ============================================ */}
         
       <section style={{ backgroundColor: "#f6f6f6" }}>
  <div className="container">
    <h3>Frequently Asked Questions (FAQs)</h3>
    <div className="row align-items-start">
      <div className="col-xl-12 col-lg-12 col-md-12 mt-4">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item border">
            <h2 className="accordion-header rounded-2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                How do I book train tickets online through See My Trip?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse" 
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Booking through See My Trip is quick and simple:
                <ul className="ps-3" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>Enter source and destination stations</li>
                  <li>Select your travel date</li>
                  <li>Choose from available trains and classes</li>
                  <li>Enter passenger details</li>
                  <li>Select your preferred payment method</li>
                  <li>Complete secure payment</li>
                </ul>
                Your e-ticket will be sent instantly via email and SMS. You can also download it from your See My Trip account.
              </div>
            </div>
          </div>

          <div className="accordion-item border rounded-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What are the cancellation and refund policies?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Our cancellation process is hassle-free:
                <ul className="ps-3" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>Cancel up to 4 hours before departure</li>
                  <li>Cancellation charges vary by class and timing</li>
                  <li>Refunds processed within 3-5 working days</li>
                  <li>Full refund on train cancellation by railways</li>
                </ul>
                For specific cancellation charges, check the fare rules during booking.
              </div>
            </div>
          </div>

          <div className="accordion-item border rounded-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                What payment options are available?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                We offer multiple secure payment options:
                <ul className="ps-3" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>All major credit & debit cards</li>
                  <li>Net banking</li>
                  <li>UPI payments (PhonePe, Google Pay, BHIM)</li>
                  <li>Mobile wallets</li>
                  <li>EMI options for eligible cards</li>
                </ul>
                All transactions are protected with bank-grade security.
              </div>
            </div>
          </div>

          <div className="accordion-item border rounded-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                How can I get support for my booking?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                We're here to help 24/7:
                <ul className="ps-3" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>Call our helpline: 1800-XXX-XXXX</li>
                  <li>Email: support@seemytrip.com</li>
                  <li>Live chat on our website/app</li>
                  <li>Visit our help center for instant solutions</li>
                </ul>
                Our support team typically responds within 30 minutes for urgent queries.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* ============================================
            Footer Section
        ============================================ */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
