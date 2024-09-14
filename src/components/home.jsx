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
import '../assets/css/style.css'
import { charminar, benglore, kolkota, mumbai, utterpradesh, kerla, delhi, chennai, youngIndianCouple, team1, team2, team3, team4, team5 } from '../assets/images';
import { Link, useNavigate } from 'react-router-dom';
import Header02 from './header02';
import Footer from './footer';
import SearchComponent from './train_search_result/search_component';

import { useState } from 'react';
const Home = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();


  // Define the onSearchResults function
  const onSearchResults = (data) => {
    console.log("Search results received:", data);
    setResults(data); // Assuming the data contains the search results
    // Navigate to flight-list-1 with the results
    navigate('/flight-list-01', { state: { results: data } });
  };
  return (
    <div>
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      {/* Main wrapper - style you can find in pages.scss */}
      <div id="main-wrapper">
        {/* Top header  */}
        <Header02 />
        <div className="clearfix" />
        {/* Top header  */}
        {/*  Hero Banner  Start */}
        <div className="image-cover hero-header bg-white" style={{ background: 'url(../images/indian_train.png)no-repeat' }} data-overlay={5}>
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
                  <p className="fs-5 fw-light">Take a little break from the work stress of everyday. Discover plan trip and
                    explore beautiful destinations.</p>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="search-wrap bg-white rounded-3 p-3">
                  <ul className="nav nav-pills primary-soft medium justify-content-center mb-3" id="tour-pills-tab" role="tablist">
                    <li className="nav-item">
                      <Link className="nav-link active" data-bs-toggle="tab" to="#Trains"><i className="fa-solid fa-train me-2" />Trains</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" data-bs-toggle="tab" to="#flights"><i className="fa-solid fa-jet-fighter me-2" />Flights</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" data-bs-toggle="tab" to="#tours"><i className="fa-solid fa-globe me-2" />Hotels</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" data-bs-toggle="tab" to="#cabs"><i className="fa-solid fa-car me-2" />Cabs</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" data-bs-toggle="tab" to="#cabs"><i className="fa-solid fa-ship me-2" />Cruises</Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane show active" id="Trains">
                      <SearchComponent
                        backgroundColor="#ffffff"
                        height="90px"
                        onSearchResults={onSearchResults}
                        leavingLabel={null}
                        goingLabel={null}
                        dateLabel={null}
                        buttonBackgroundColor="#cd2c22"
                        buttonTextColor="#ffffff"
                      />
                    </div>
                    <div className="tab-pane" id="flights">
                      <div className="row gx-lg-2 g-3">
                        <div className="col-xl-5 col-lg-5 col-md-12">
                          <div className="row gy-3 gx-lg-2 gx-3">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                              <div className="form-group hdd-arrow mb-0">
                                <select className="leaving form-control fw-bold">
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
                              <div className="btn-flip-icon mt-md-0">
                                <button className="p-0 m-0 text-primary"><i className="fa-solid fa-right-left" /></button>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                              <div className="form-groupp hdd-arrow mb-0">
                                <select className="goingto form-control fw-bold">
                                  <option value>Select</option>
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
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                          <div className="row gy-3 gx-lg-2 gx-3">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                              <div className="form-group mb-0">
                                <input className="form-control fw-bold choosedate" type="text" placeholder="Departure.." readOnly="readonly" />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                              <div className="form-group mb-0">
                                <input className="form-control fw-bold choosedate" type="text" placeholder="Return.." readOnly="readonly" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-12">
                          <div className="form-groupp hdd-arrow mb-0">
                            <select className="occupant form-control fw-bold">
                              <option value>Select</option>
                              <option value="lv">01 Adult</option>
                              <option value="la">02 Adult</option>
                              <option value="kc">03 Adult</option>
                              <option value="no">04 Adult</option>
                              <option value="kc">05 Adult</option>
                              <option value="lb">06 Adult</option>
                              <option value="cl">07 Adult</option>
                              <option value="cn">08 Adult</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-12">
                          <div className="form-group mb-0">
                            <Link to="/flight-list">
                            <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass fs-5" /></button>
                            </Link>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tours">
                      <div className="row gy-3 gx-md-3 gx-sm-2">
                        <div className="col-xl-8 col-lg-7 col-md-12">
                          <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                              <div className="form-group hdd-arrow mb-0">
                                <select className="goingto form-control fw-bold">
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
                                <input type="text" className="form-control choosedate fw-bold" placeholder="Choose Date" readOnly="readonly" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-12">
                          <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                              <div className="form-group hdd-arrow mb-0">
                                <select className="tour form-control fw-bold">
                                  <option value>Select</option>
                                  <option value="ny">Family Package</option>
                                  <option value="sd">Honymoon Package</option>
                                  <option value="sj">Group Package</option>
                                  <option value="ph">Desert</option>
                                  <option value="nl">History</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group mb-0">
                                <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="cabs">
                      <div className="row gy-3 gx-md-3 gx-sm-2">
                        <div className="col-xl-8 col-lg-7 col-md-12">
                          <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                              <div className="form-group hdd-arrow mb-0">
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
                              <div className="form-group hdd-arrow mb-0">
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
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-12">
                          <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                              <div className="form-group mb-0">
                                <input type="text" className="form-control choosedate fw-bold" placeholder="Choose Pickup Date" readOnly="readonly" />
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group mb-0">
                                <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="curise">
                      <div className="row gy-3 gx-md-3 gx-sm-2">
                        <div className="col-xl-8 col-lg-7 col-md-12">
                          <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                              <div className="form-group hdd-arrow mb-0">
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
                              <div className="form-group hdd-arrow mb-0">
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
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-12">
                          <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                              <div className="form-group mb-0">
                                <input type="text" className="form-control choosedate fw-bold" placeholder="Choose Pickup Date" readOnly="readonly" />
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                              <div className="form-group mb-0">
                                <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
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
            {/* </row> */}
          </div>
        </div>
        {/*  Hero Banner End  */}
        {/*  Features Start  */}
        <section className="border-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-between g-4">
              {/* Easy Booking */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                <div className="featuresBox-wrap">
                  <div className="featuresBox-icons mb-3">
                    <i className="fa-solid fa-sack-dollar fs-1 text-primary" />
                  </div>
                  <div className="featuresBox-captions">
                    <h4 className="fw-bold fs-5 lh-base mb-0">Easy Booking</h4>
                    <p className="m-0">Book your trips effortlessly with our user-friendly platform, designed to make your travel plans stress-free and smooth.</p>
                  </div>
                </div>
              </div>

              {/* Best Destinations */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                <div className="featuresBox-wrap">
                  <div className="featuresBox-icons mb-3">
                    <i className="fa-solid fa-umbrella-beach fs-1 text-primary " />
                  </div>
                  <div className="featuresBox-captions">
                    <h4 className="fw-bold fs-5 lh-base mb-0">Best Destinations</h4>
                    <p className="m-0">Explore handpicked destinations around the globe, from tropical beaches to cultural landmarks, curated for every type of traveler.</p>
                  </div>
                </div>
              </div>

              {/* Travel Guides */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                <div className="featuresBox-wrap">
                  <div className="featuresBox-icons mb-3">
                    <i className="fa-solid fa-person-walking-luggage fs-1 text-primary" />
                  </div>
                  <div className="featuresBox-captions">
                    <h4 className="fw-bold fs-5 lh-base mb-0">Expert Travel Guides</h4>
                    <p className="m-0">Get valuable tips and insights from our experienced travel guides, ensuring you make the most out of every journey.</p>
                  </div>
                </div>
              </div>

              {/* Friendly Support */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                <div className="featuresBox-wrap">
                  <div className="featuresBox-icons mb-3">
                    <i className="fa-solid fa-headset fs-1 text-primary" />
                  </div>
                  <div className="featuresBox-captions">
                    <h4 className="fw-bold fs-5 lh-base mb-0">Friendly Support</h4>
                    <p className="m-0">Our 24/7 customer support team is here to assist you with any queries, ensuring a hassle-free travel experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Features End  */}
        {/*  Best Locations Design Start  */}
        <section>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                  <h2>Top Train Routes</h2>
                  <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center gy-4 gx-3">
              <Link to="./" />
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
                    {/* <Link to="#"><img src="./assets/images/charminar.png" class="img-fluid " alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Hyderbad</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">10 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">5 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to='#'>
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={benglore} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                    {/* <Link to="#"><img src="./assets/images/Bangalore.png" class="img-fluid rounded" alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Bangalore</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">06 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">14 Hotels</span>
                      </p>
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
                    {/* <Link to="#"><img src="./assets/images/kolkata.png" class="img-fluid rounded" alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>kolkata</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">09 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">16 Hotels</span>
                      </p>
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
                    {/* <Link to="#"><img src="./assets/images/mumbai.png" class="img-fluid rounded" alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Mumbai</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">07 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">18 Hotels</span>
                      </p>
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
                          <img src={utterpradesh} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                    {/* <Link to="#"><img src="./assets/images/Uttrapradesh.png" class="img-fluid rounded" alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Uttrapradesh</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">4 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">12 Hotels</span>
                      </p>
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
                    {/* <Link to="#"><img src="./assets/images/kerala.png" class="img-fluid rounded" alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Kerala</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">16 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">7 Hotels</span>
                      </p>
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
                    {/* <Link to="#"><img src="./assets/images/delhi.png" class="img-fluid rounded" alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Delhi</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">14 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">10 Hotels</span>
                      </p>
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
                    {/* <Link to="#"><img src="./assets/images/chennai.png" class="img-fluid rounded" alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Chennai</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">12 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">32 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Best Locations Design Start  */}
        {/*  Popular Routes Design Start  */}
        {/* <section class="gray-simple">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-xl-8 col-lg-9 col-md-11 col-sm-12">
            <div class="secHeading-wrap text-center mb-5">
              <h2>Explore Popular Routes</h2>
              <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center gy-4 gx-3">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="pop-touritem">
              <Link to="#" class="card rounded-3 shadow-wrap h-100 m-0">
                <div class="flight-thumb-wrapper">
                  <div class=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                    <div class="label bg-success text-light d-inline-flex align-items-center justify-content-center">
                      <span class="svg-icon text-light svg-icon-2hx me-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3"
                            d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                            fill="currentColor"></path>
                          <path
                            d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                            fill="currentColor"></path>
                        </svg>
                      </span>Featured
                    </div>
                  </div>
                  <div class="popFlights-item-overHidden">
                    <img src="https://placehold.co/1200x800" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="touritem-middle position-relative p-3">
                  <div class="touritem-flexxer">
                    <h4 class="city fs-6 m-0 fw-bold">
                      <span>New York</span>
                      <span class="svg-icon svg-icon-muted svg-icon-2hx px-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z"
                            fill="currentColor" />
                          <path opacity="0.3"
                            d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z"
                            fill="currentColor" />
                        </svg>
                      </span>
                      <span>Los Angeles</span>
                    </h4>
                    <p class="detail ellipsis-container">
                      <span class="ellipsis-item__normal">Round-trip</span>
                      <span class="separate ellipsis-item__normal"></span>
                      <span class="ellipsis-item">3 days</span>
                    </p>
                  </div>
                  <div class="flight-foots">
                    <h5 class="fs-5 low-price m-0"><span class="tag-span">From</span> <span class="price">US$492</span>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="pop-touritem">
              <Link to="#" class="card rounded-3 shadow-wrap h-100 m-0">
                <div class="flight-thumb-wrapper">
                  <div class="popFlights-item-overHidden">
                    <img src="https://placehold.co/1200x800" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="touritem-middle position-relative p-3">
                  <div class="touritem-flexxer">
                    <h4 class="city fs-6 m-0 fw-bold">
                      <span>San Diego</span>
                      <span class="svg-icon svg-icon-muted svg-icon-2hx px-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z"
                            fill="currentColor" />
                          <path opacity="0.3"
                            d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z"
                            fill="currentColor" />
                        </svg>
                      </span>
                      <span>San Jose</span>
                    </h4>
                    <p class="detail ellipsis-container">
                      <span class="ellipsis-item__normal">Round-trip</span>
                      <span class="separate ellipsis-item__normal"></span>
                      <span class="ellipsis-item">3 days</span>
                    </p>
                  </div>
                  <div class="flight-foots">
                    <h5 class="fs-5 low-price m-0"><span class="tag-span">From</span> <span class="price">US$492</span>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="pop-touritem">
              <Link to="#" class="card rounded-3 shadow-wrap h-100 m-0">
                <div class="flight-thumb-wrapper">
                  <div class=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                    <div class="label bg-success text-light d-inline-flex align-items-center justify-content-center">
                      <span class="svg-icon text-light svg-icon-2hx me-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3"
                            d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                            fill="currentColor"></path>
                          <path
                            d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                            fill="currentColor"></path>
                        </svg>
                      </span>Featured
                    </div>
                  </div>
                  <div class="popFlights-item-overHidden">
                    <img src="https://placehold.co/1200x800" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="touritem-middle position-relative p-3">
                  <div class="touritem-flexxer">
                    <h4 class="city fs-6 m-0 fw-bold">
                      <span>Dallas</span>
                      <span class="svg-icon svg-icon-muted svg-icon-2hx px-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z"
                            fill="currentColor" />
                          <path opacity="0.3"
                            d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z"
                            fill="currentColor" />
                        </svg>
                      </span>
                      <span>Philadelphia</span>
                    </h4>
                    <p class="detail ellipsis-container">
                      <span class="ellipsis-item__normal">Round-trip</span>
                      <span class="separate ellipsis-item__normal"></span>
                      <span class="ellipsis-item">3 days</span>
                    </p>
                  </div>
                  <div class="flight-foots">
                    <h5 class="fs-5 low-price m-0"><span class="tag-span">From</span> <span class="price">US$492</span>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="pop-touritem">
              <Link to="#" class="card rounded-3 shadow-wrap h-100 m-0">
                <div class="flight-thumb-wrapper">
                  <div class="popFlights-item-overHidden">
                    <img src="https://placehold.co/1200x800" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="touritem-middle position-relative p-3">
                  <div class="touritem-flexxer">
                    <h4 class="city fs-6 m-0 fw-bold">
                      <span>Denver</span>
                      <span class="svg-icon svg-icon-muted svg-icon-2hx px-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z"
                            fill="currentColor" />
                          <path opacity="0.3"
                            d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z"
                            fill="currentColor" />
                        </svg>
                      </span>
                      <span>Nashville</span>
                    </h4>
                    <p class="detail ellipsis-container">
                      <span class="ellipsis-item__normal">Round-trip</span>
                      <span class="separate ellipsis-item__normal"></span>
                      <span class="ellipsis-item">3 days</span>
                    </p>
                  </div>
                  <div class="flight-foots">
                    <h5 class="fs-5 low-price m-0"><span class="tag-span">From</span> <span class="price">US$492</span>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="pop-touritem">
              <Link to="#" class="card rounded-3 shadow-wrap h-100 m-0">
                <div class="flight-thumb-wrapper">
                  <div class="popFlights-item-overHidden">
                    <img src="https://placehold.co/1200x800" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="touritem-middle position-relative p-3">
                  <div class="touritem-flexxer">
                    <h4 class="city fs-6 m-0 fw-bold">
                      <span>Chicago</span>
                      <span class="svg-icon svg-icon-muted svg-icon-2hx px-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z"
                            fill="currentColor" />
                          <path opacity="0.3"
                            d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z"
                            fill="currentColor" />
                        </svg>
                      </span>
                      <span>San Francisco</span>
                    </h4>
                    <p class="detail ellipsis-container">
                      <span class="ellipsis-item__normal">Round-trip</span>
                      <span class="separate ellipsis-item__normal"></span>
                      <span class="ellipsis-item">3 days</span>
                    </p>
                  </div>
                  <div class="flight-foots">
                    <h5 class="fs-5 low-price m-0"><span class="tag-span">From</span> <span class="price">US$492</span>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="pop-touritem">
              <Link to="#" class="card rounded-3 shadow-wrap h-100 m-0">
                <div class="flight-thumb-wrapper">
                  <div class=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                    <div class="label bg-success text-light d-inline-flex align-items-center justify-content-center">
                      <span class="svg-icon text-light svg-icon-2hx me-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3"
                            d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                            fill="currentColor"></path>
                          <path
                            d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                            fill="currentColor"></path>
                        </svg>
                      </span>Featured
                    </div>
                  </div>
                  <div class="popFlights-item-overHidden">
                    <img src="https://placehold.co/1200x800" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="touritem-middle position-relative p-3">
                  <div class="touritem-flexxer">
                    <h4 class="city fs-6 m-0 fw-bold">
                      <span>Houston</span>
                      <span class="svg-icon svg-icon-muted svg-icon-2hx px-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z"
                            fill="currentColor" />
                          <path opacity="0.3"
                            d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z"
                            fill="currentColor" />
                        </svg>
                      </span>
                      <span>Los Angeles</span>
                    </h4>
                    <p class="detail ellipsis-container">
                      <span class="ellipsis-item__normal">Round-trip</span>
                      <span class="separate ellipsis-item__normal"></span>
                      <span class="ellipsis-item">3 days</span>
                    </p>
                  </div>
                  <div class="flight-foots">
                    <h5 class="fs-5 low-price m-0"><span class="tag-span">From</span> <span class="price">US$492</span>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="pop-touritem">
              <Link to="#" class="card rounded-3 shadow-wrap h-100 m-0">
                <div class="flight-thumb-wrapper">
                  <div class="popFlights-item-overHidden">
                    <img src="https://placehold.co/1200x800" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="touritem-middle position-relative p-3">
                  <div class="touritem-flexxer">
                    <h4 class="city fs-6 m-0 fw-bold">
                      <span>San Antonio</span>
                      <span class="svg-icon svg-icon-muted svg-icon-2hx px-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z"
                            fill="currentColor" />
                          <path opacity="0.3"
                            d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z"
                            fill="currentColor" />
                        </svg>
                      </span>
                      <span>Columbus</span>
                    </h4>
                    <p class="detail ellipsis-container">
                      <span class="ellipsis-item__normal">Round-trip</span>
                      <span class="separate ellipsis-item__normal"></span>
                      <span class="ellipsis-item">3 days</span>
                    </p>
                  </div>
                  <div class="flight-foots">
                    <h5 class="fs-5 low-price m-0"><span class="tag-span">From</span> <span class="price">US$492</span>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="pop-touritem">
              <Link to="#" class="card rounded-3 shadow-wrap h-100 m-0">
                <div class="flight-thumb-wrapper">
                  <div class="popFlights-item-overHidden">
                    <img src="https://placehold.co/1200x800" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="touritem-middle position-relative p-3">
                  <div class="touritem-flexxer">
                    <h4 class="city fs-6 m-0 fw-bold">
                      <span>Los Angeles</span>
                      <span class="svg-icon svg-icon-muted svg-icon-2hx px-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z"
                            fill="currentColor" />
                          <path opacity="0.3"
                            d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z"
                            fill="currentColor" />
                        </svg>
                      </span>
                      <span>Canada</span>
                    </h4>
                    <p class="detail ellipsis-container">
                      <span class="ellipsis-item__normal">Round-trip</span>
                      <span class="separate ellipsis-item__normal"></span>
                      <span class="ellipsis-item">3 days</span>
                    </p>
                  </div>
                  <div class="flight-foots">
                    <h5 class="fs-5 low-price m-0"><span class="tag-span">From</span> <span class="price">US$492</span>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="text-center position-relative mt-5">
              <button type="button" class="btn btn-light-primary fw-medium px-5">Explore More<i
                  class="fa-solid fa-arrow-trend-up ms-2"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section> */}
        {/*  Popular Routes Design Start  */}
        {/*  Flexible features End  */}
        <section>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-5 col-lg-5 col-md-12 position-relative pe-xl-5 pe-lg-4 pe-md-4 pb-xl-5 pb-lg-4 pb-md-4">
                <div className="position-relative mb-lg-0 mb-4">
                  <img src={youngIndianCouple} className="img-fluid rounded-3 position-relative z-1" alt="" />
                  <div className="position-absolute bottom-0 start-0 z-index-1 mb-4 ms-5">
                    <div className="bg-body d-flex d-inline-block rounded-3 position-relative p-3 z-2">
                      {/* Avatar group */}
                      <div className="me-4">
                        <h6 className="fw-normal">Client</h6>
                        {/* Avatar group */}
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
                      {/* Rating */}
                      <div>
                        <h6 className="fw-normal mb-3">Rating</h6>
                        <h6 className="m-0">4.5<i className="fa-solid fa-star text-warning ms-1" /></h6>
                      </div>
                    </div>
                  </div>
                </div>
                <figure className="position-absolute bottom-0 end-0 d-none d-md-block mb-n5 me-n4">
                  <svg height={400} className="fill-primary opacity-25" viewBox="0 0 340 340">
                    <circle cx="194.2" cy="2.2" r="2.2" />
                    <circle cx="2.2" cy="2.2" r="2.2" />
                    <circle cx="218.2" cy="2.2" r="2.2" />
                    <circle cx="26.2" cy="2.2" r="2.2" />
                    <circle cx="242.2" cy="2.2" r="2.2" />
                    <circle cx="50.2" cy="2.2" r="2.2" />
                    <circle cx="266.2" cy="2.2" r="2.2" />
                    <circle cx="74.2" cy="2.2" r="2.2" />
                    <circle cx="290.2" cy="2.2" r="2.2" />
                    <circle cx="98.2" cy="2.2" r="2.2" />
                    <circle cx="314.2" cy="2.2" r="2.2" />
                    <circle cx="122.2" cy="2.2" r="2.2" />
                    <circle cx="338.2" cy="2.2" r="2.2" />
                    <circle cx="146.2" cy="2.2" r="2.2" />
                    <circle cx="170.2" cy="2.2" r="2.2" />
                    <circle cx="194.2" cy="26.2" r="2.2" />
                    <circle cx="2.2" cy="26.2" r="2.2" />
                    <circle cx="218.2" cy="26.2" r="2.2" />
                    <circle cx="26.2" cy="26.2" r="2.2" />
                    <circle cx="242.2" cy="26.2" r="2.2" />
                    <circle cx="50.2" cy="26.2" r="2.2" />
                    <circle cx="266.2" cy="26.2" r="2.2" />
                    <circle cx="74.2" cy="26.2" r="2.2" />
                    <circle cx="290.2" cy="26.2" r="2.2" />
                    <circle cx="98.2" cy="26.2" r="2.2" />
                    <circle cx="314.2" cy="26.2" r="2.2" />
                    <circle cx="122.2" cy="26.2" r="2.2" />
                    <circle cx="338.2" cy="26.2" r="2.2" />
                    <circle cx="146.2" cy="26.2" r="2.2" />
                    <circle cx="170.2" cy="26.2" r="2.2" />
                    <circle cx="194.2" cy="50.2" r="2.2" />
                    <circle cx="2.2" cy="50.2" r="2.2" />
                    <circle cx="218.2" cy="50.2" r="2.2" />
                    <circle cx="26.2" cy="50.2" r="2.2" />
                    <circle cx="242.2" cy="50.2" r="2.2" />
                    <circle cx="50.2" cy="50.2" r="2.2" />
                    <circle cx="266.2" cy="50.2" r="2.2" />
                    <circle cx="74.2" cy="50.2" r="2.2" />
                    <circle cx="290.2" cy="50.2" r="2.2" />
                    <circle cx="98.2" cy="50.2" r="2.2" />
                    <circle cx="314.2" cy="50.2" r="2.2" />
                    <circle cx="122.2" cy="50.2" r="2.2" />
                    <circle cx="338.2" cy="50.2" r="2.2" />
                    <circle cx="146.2" cy="50.2" r="2.2" />
                    <circle cx="170.2" cy="50.2" r="2.2" />
                    <circle cx="194.2" cy="74.2" r="2.2" />
                    <circle cx="2.2" cy="74.2" r="2.2" />
                    <circle cx="218.2" cy="74.2" r="2.2" />
                    <circle cx="26.2" cy="74.2" r="2.2" />
                    <circle cx="242.2" cy="74.2" r="2.2" />
                    <circle cx="50.2" cy="74.2" r="2.2" />
                    <circle cx="266.2" cy="74.2" r="2.2" />
                    <circle cx="74.2" cy="74.2" r="2.2" />
                    <circle cx="290.2" cy="74.2" r="2.2" />
                    <circle cx="98.2" cy="74.2" r="2.2" />
                    <circle cx="314.2" cy="74.2" r="2.2" />
                    <circle cx="122.2" cy="74.2" r="2.2" />
                    <circle cx="338.2" cy="74.2" r="2.2" />
                    <circle cx="146.2" cy="74.2" r="2.2" />
                    <circle cx="170.2" cy="74.2" r="2.2" />
                    <circle cx="194.2" cy="98.2" r="2.2" />
                    <circle cx="2.2" cy="98.2" r="2.2" />
                    <circle cx="218.2" cy="98.2" r="2.2" />
                    <circle cx="26.2" cy="98.2" r="2.2" />
                    <circle cx="242.2" cy="98.2" r="2.2" />
                    <circle cx="50.2" cy="98.2" r="2.2" />
                    <circle cx="266.2" cy="98.2" r="2.2" />
                    <circle cx="74.2" cy="98.2" r="2.2" />
                    <circle cx="290.2" cy="98.2" r="2.2" />
                    <circle cx="98.2" cy="98.2" r="2.2" />
                    <circle cx="314.2" cy="98.2" r="2.2" />
                    <circle cx="122.2" cy="98.2" r="2.2" />
                    <circle cx="338.2" cy="98.2" r="2.2" />
                    <circle cx="146.2" cy="98.2" r="2.2" />
                    <circle cx="170.2" cy="98.2" r="2.2" />
                    <circle cx="194.2" cy="122.2" r="2.2" />
                    <circle cx="2.2" cy="122.2" r="2.2" />
                    <circle cx="218.2" cy="122.2" r="2.2" />
                    <circle cx="26.2" cy="122.2" r="2.2" />
                    <circle cx="242.2" cy="122.2" r="2.2" />
                    <circle cx="50.2" cy="122.2" r="2.2" />
                    <circle cx="266.2" cy="122.2" r="2.2" />
                    <circle cx="74.2" cy="122.2" r="2.2" />
                    <circle cx="290.2" cy="122.2" r="2.2" />
                    <circle cx="98.2" cy="122.2" r="2.2" />
                    <circle cx="314.2" cy="122.2" r="2.2" />
                    <circle cx="122.2" cy="122.2" r="2.2" />
                    <circle cx="338.2" cy="122.2" r="2.2" />
                    <circle cx="146.2" cy="122.2" r="2.2" />
                    <circle cx="170.2" cy="122.2" r="2.2" />
                    <circle cx="194.2" cy="146.2" r="2.2" />
                    <circle cx="2.2" cy="146.2" r="2.2" />
                    <circle cx="218.2" cy="146.2" r="2.2" />
                    <circle cx="26.2" cy="146.2" r="2.2" />
                    <circle cx="242.2" cy="146.2" r="2.2" />
                    <circle cx="50.2" cy="146.2" r="2.2" />
                    <circle cx="266.2" cy="146.2" r="2.2" />
                    <circle cx="74.2" cy="146.2" r="2.2" />
                    <circle cx="290.2" cy="146.2" r="2.2" />
                    <circle cx="98.2" cy="146.2" r="2.2" />
                    <circle cx="314.2" cy="146.2" r="2.2" />
                    <circle cx="122.2" cy="146.2" r="2.2" />
                    <circle cx="338.2" cy="146.2" r="2.2" />
                    <circle cx="146.2" cy="146.2" r="2.2" />
                    <circle cx="170.2" cy="146.2" r="2.2" />
                    <circle cx="194.2" cy="170.2" r="2.2" />
                    <circle cx="2.2" cy="170.2" r="2.2" />
                    <circle cx="218.2" cy="170.2" r="2.2" />
                    <circle cx="26.2" cy="170.2" r="2.2" />
                    <circle cx="242.2" cy="170.2" r="2.2" />
                    <circle cx="50.2" cy="170.2" r="2.2" />
                    <circle cx="266.2" cy="170.2" r="2.2" />
                    <circle cx="74.2" cy="170.2" r="2.2" />
                    <circle cx="290.2" cy="170.2" r="2.2" />
                    <circle cx="98.2" cy="170.2" r="2.2" />
                    <circle cx="314.2" cy="170.2" r="2.2" />
                    <circle cx="122.2" cy="170.2" r="2.2" />
                    <circle cx="338.2" cy="170.2" r="2.2" />
                    <circle cx="146.2" cy="170.2" r="2.2" />
                    <circle cx="170.2" cy="170.2" r="2.2" />
                    <circle cx="194.2" cy="194.2" r="2.2" />
                    <circle cx="2.2" cy="194.2" r="2.2" />
                    <circle cx="218.2" cy="194.2" r="2.2" />
                    <circle cx="26.2" cy="194.2" r="2.2" />
                    <circle cx="242.2" cy="194.2" r="2.2" />
                    <circle cx="50.2" cy="194.2" r="2.2" />
                    <circle cx="266.2" cy="194.2" r="2.2" />
                    <circle cx="74.2" cy="194.2" r="2.2" />
                    <circle cx="290.2" cy="194.2" r="2.2" />
                    <circle cx="98.2" cy="194.2" r="2.2" />
                    <circle cx="314.2" cy="194.2" r="2.2" />
                    <circle cx="122.2" cy="194.2" r="2.2" />
                    <circle cx="338.2" cy="194.2" r="2.2" />
                    <circle cx="146.2" cy="194.2" r="2.2" />
                    <circle cx="170.2" cy="194.2" r="2.2" />
                    <circle cx="194.2" cy="218.2" r="2.2" />
                    <circle cx="2.2" cy="218.2" r="2.2" />
                    <circle cx="218.2" cy="218.2" r="2.2" />
                    <circle cx="26.2" cy="218.2" r="2.2" />
                    <circle cx="242.2" cy="218.2" r="2.2" />
                    <circle cx="50.2" cy="218.2" r="2.2" />
                    <circle cx="266.2" cy="218.2" r="2.2" />
                    <circle cx="74.2" cy="218.2" r="2.2" />
                    <circle cx="290.2" cy="218.2" r="2.2" />
                    <circle cx="98.2" cy="218.2" r="2.2" />
                    <circle cx="314.2" cy="218.2" r="2.2" />
                    <circle cx="122.2" cy="218.2" r="2.2" />
                    <circle cx="338.2" cy="218.2" r="2.2" />
                    <circle cx="146.2" cy="218.2" r="2.2" />
                    <circle cx="170.2" cy="218.2" r="2.2" />
                    <circle cx="194.2" cy="242.2" r="2.2" />
                    <circle cx="2.2" cy="242.2" r="2.2" />
                    <circle cx="218.2" cy="242.2" r="2.2" />
                    <circle cx="26.2" cy="242.2" r="2.2" />
                    <circle cx="242.2" cy="242.2" r="2.2" />
                    <circle cx="50.2" cy="242.2" r="2.2" />
                    <circle cx="266.2" cy="242.2" r="2.2" />
                    <circle cx="74.2" cy="242.2" r="2.2" />
                    <circle cx="290.2" cy="242.2" r="2.2" />
                    <circle cx="98.2" cy="242.2" r="2.2" />
                    <circle cx="314.2" cy="242.2" r="2.2" />
                    <circle cx="122.2" cy="242.2" r="2.2" />
                    <circle cx="338.2" cy="242.2" r="2.2" />
                    <circle cx="146.2" cy="242.2" r="2.2" />
                    <circle cx="170.2" cy="242.2" r="2.2" />
                    <circle cx="194.2" cy="266.2" r="2.2" />
                    <circle cx="2.2" cy="266.2" r="2.2" />
                    <circle cx="218.2" cy="266.2" r="2.2" />
                    <circle cx="26.2" cy="266.2" r="2.2" />
                    <circle cx="242.2" cy="266.2" r="2.2" />
                    <circle cx="50.2" cy="266.2" r="2.2" />
                    <circle cx="266.2" cy="266.2" r="2.2" />
                    <circle cx="74.2" cy="266.2" r="2.2" />
                    <circle cx="290.2" cy="266.2" r="2.2" />
                    <circle cx="98.2" cy="266.2" r="2.2" />
                    <circle cx="314.2" cy="266.2" r="2.2" />
                    <circle cx="122.2" cy="266.2" r="2.2" />
                    <circle cx="338.2" cy="266.2" r="2.2" />
                    <circle cx="146.2" cy="266.2" r="2.2" />
                    <circle cx="170.2" cy="266.2" r="2.2" />
                    <circle cx="194.2" cy="290.2" r="2.2" />
                    <circle cx="2.2" cy="290.2" r="2.2" />
                    <circle cx="218.2" cy="290.2" r="2.2" />
                    <circle cx="26.2" cy="290.2" r="2.2" />
                    <circle cx="242.2" cy="290.2" r="2.2" />
                    <circle cx="50.2" cy="290.2" r="2.2" />
                    <circle cx="266.2" cy="290.2" r="2.2" />
                    <circle cx="74.2" cy="290.2" r="2.2" />
                    <circle cx="290.2" cy="290.2" r="2.2" />
                    <circle cx="98.2" cy="290.2" r="2.2" />
                    <circle cx="314.2" cy="290.2" r="2.2" />
                    <circle cx="122.2" cy="290.2" r="2.2" />
                    <circle cx="338.2" cy="290.2" r="2.2" />
                    <circle cx="146.2" cy="290.2" r="2.2" />
                    <circle cx="170.2" cy="290.2" r="2.2" />
                    <circle cx="194.2" cy="314.2" r="2.2" />
                    <circle cx="2.2" cy="314.2" r="2.2" />
                    <circle cx="218.2" cy="314.2" r="2.2" />
                    <circle cx="26.2" cy="314.2" r="2.2" />
                    <circle cx="242.2" cy="314.2" r="2.2" />
                    <circle cx="50.2" cy="314.2" r="2.2" />
                    <circle cx="266.2" cy="314.2" r="2.2" />
                    <circle cx="74.2" cy="314.2" r="2.2" />
                    <circle cx="290.2" cy="314.2" r="2.2" />
                    <circle cx="98.2" cy="314.2" r="2.2" />
                    <circle cx="314.2" cy="314.2" r="2.2" />
                    <circle cx="122.2" cy="314.2" r="2.2" />
                    <circle cx="338.2" cy="314.2" r="2.2" />
                    <circle cx="146.2" cy="314.2" r="2.2" />
                    <circle cx="170.2" cy="314.2" r="2.2" />
                    <circle cx="194.2" cy="338.2" r="2.2" />
                    <circle cx="2.2" cy="338.2" r="2.2" />
                    <circle cx="218.2" cy="338.2" r="2.2" />
                    <circle cx="26.2" cy="338.2" r="2.2" />
                    <circle cx="242.2" cy="338.2" r="2.2" />
                    <circle cx="50.2" cy="338.2" r="2.2" />
                    <circle cx="266.2" cy="338.2" r="2.2" />
                    <circle cx="74.2" cy="338.2" r="2.2" />
                    <circle cx="290.2" cy="338.2" r="2.2" />
                    <circle cx="98.2" cy="338.2" r="2.2" />
                    <circle cx="314.2" cy="338.2" r="2.2" />
                    <circle cx="122.2" cy="338.2" r="2.2" />
                    <circle cx="338.2" cy="338.2" r="2.2" />
                    <circle cx="146.2" cy="338.2" r="2.2" />
                    <circle cx="170.2" cy="338.2" r="2.2" />
                  </svg>
                </figure>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="row gy-xl-5 g-4">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="fbxer-wraps">
                      <div className="fbxerWraps-icons mb-3">
                        <div className="square--70 circle bg-light-primary"><i className="fa-solid fa-gifts text-primary fs-3" />
                        </div>
                      </div>
                      <div className="fbxerWraps-caps">
                        <h5 className="fw-bold fs-6">Get Superb Deals</h5>
                        <p className="fw-light fs-6 m-0">Just fill up a page with draft copy about the client’s business and
                          they will actually read it and comment on it. They will be drawn to it, fiercely. Do it the wrong
                          way.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="fbxer-wraps">
                      <div className="fbxerWraps-icons mb-3">
                        <div className="square--70 circle bg-light-info"><i className="fa-solid fa-gifts text-info fs-3" /></div>
                      </div>
                      <div className="fbxerWraps-caps">
                        <h5 className="fw-bold fs-6">100% Transparency Price</h5>
                        <p className="fw-light fs-6 m-0">Just fill up a page with draft copy about the client’s business and
                          they will actually read it and comment on it. They will be drawn to it, fiercely. Do it the wrong
                          way.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="fbxer-wraps">
                      <div className="fbxerWraps-icons mb-3">
                        <div className="square--70 circle bg-light-success"><i className="fa-solid fa-gifts text-success fs-3" />
                        </div>
                      </div>
                      <div className="fbxerWraps-caps">
                        <h5 className="fw-bold fs-6">Pure Trusted &amp; Free</h5>
                        <p className="fw-light fs-6 m-0">Just fill up a page with draft copy about the client’s business and
                          they will actually read it and comment on it. They will be drawn to it, fiercely. Do it the wrong
                          way.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="fbxer-wraps">
                      <div className="fbxerWraps-icons mb-3">
                        <div className="square--70 circle bg-light-warning"><i className="fa-solid fa-gifts text-warning fs-3" />
                        </div>
                      </div>
                      <div className="fbxerWraps-caps">
                        <h5 className="fw-bold fs-6">Travel With Confidence</h5>
                        <p className="fw-light fs-6 m-0">Just fill up a page with draft copy about the client’s business and
                          they will actually read it and comment on it. They will be drawn to it, fiercely. Do it the wrong
                          way.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Flexible features End  */}
        {/*  Google & IOS App Start  */}
        <section className="pt-0 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="card rounded-3 border-0 bg-light-primary border-1 m-0 appLink-card p-xl-4 p-3">
                  <div className="card-body">
                    <div className="row align-items-center justify-content-between">
                      <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12">
                        <div className="appLink-captions">
                          <div className="appLink-captions d-flex align-items-center justify-content-start">
                            <div className="d-inline-block">
                              <img src="./assets/images/app-link.webp" className="img-fluid" width={65} alt="" />
                            </div>
                            <div className="ps-3 d-block">
                              <h2 className="fw-bold fs-2 mb-1">Download App Now!</h2>
                              <p>Use Code <span className="text-primary text-uppercase fw-medium">Welcome</span>and get <span className="text-success text-uppercase fw-medium">Flat 20%</span> OFF* on your first domestic
                                flight booking</p>
                            </div>
                          </div>
                          <div className="appLink-forms mt-4">
                            <form>
                              <div className="row align-items-center justify-content-start g-0">
                                <div className="col-xl-9 col-lg-10 col-md-10 col-sm-12">
                                  <div className="appLink-frmbox bg-white border br-dashed rounded-2 p-2">
                                    <div className="row align-items-center g-0">
                                      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                        <div className="form-group position-relative m-0">
                                          <input type="text" className="form-control form-control-md bold border-0 ps-5" placeholder="Enter Mobile Number" />
                                          <span className="position-absolute top-50 ms-4 translate-middle fw-medium text-dark">+91 -
                                          </span>
                                        </div>
                                      </div>
                                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                        <button type="button" className="btn btn-md btn-primary full-width fw-medium">Get App
                                          Link</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
                        <div className="appLink-buttons text-md-end mt-md-0 mt-4">
                          <div className="app-wrap">
                            <Link to="#" className="d-inline-flex">
                              <div className="cardApp-box bg-dark border-primary d-inline-flex py-3 px-4 rounded align-items-center mb-3">
                                <div className="cardApp-icon"><i className="fa-brands fa-google-play text-light fs-1" /></div>
                                <div className="cardApp-caption text-start ps-3">
                                  <p className="text-light opacity-75 text-uppercase m-0">Get It On</p>
                                  <h5 className="fw-bold text-light fs-5 m-0">Google Play</h5>
                                </div>
                              </div>
                            </Link>
                            <Link to="#" className="d-inline-flex">
                              <div className="cardApp-box bg-primary d-inline-flex py-3 px-4 rounded align-items-center">
                                <div className="cardApp-icon"><i className="fa-brands fa-apple text-light fs-1" /></div>
                                <div className="cardApp-caption text-start ps-3">
                                  <p className="text-light opacity-75 text-uppercase m-0">Download On The</p>
                                  <h5 className="fw-bold text-light fs-5 m-0">App Store</h5>
                                </div>
                              </div>
                            </Link>
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
        {/*  Google & IOS App End  */}
        {/*  Video Helps End  */}
        {/* <section class="bg-cover" style="background:url(https://placehold.co/2200x800)no-repeat;" data-overlay="5">
      <div class="ht-150"></div>
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="video-play-wrap text-center">
              <div class="video-play-btn d-flex align-items-center justify-content-center">
                <Link to="https://www.youtube.com/watch?v=A8EI6JaFbv4" data-bs-toggle="modal" data-bs-target="#popup-video" class="square--90 circle bg-white fs-2 text-primary"><i class="fa-solid fa-play"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ht-150"></div>
    </section> */}
        {/*  Video Helps End  */}
        {/*  Our Reviews Start  */}
        <section className="gray">
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
                <div className="card border-0 rounded-3">
                  <div className="card-body">
                    <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                    <div className="d-flex align-items-center flex-thumbes">
                      <div className="revws-pic"><img src={team1} className="img-fluid rounded-2" width={80} alt="" />
                      </div>
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
                <div className="card border-0 rounded-3">
                  <div className="card-body">
                    <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                    <div className="d-flex align-items-center flex-thumbes">
                      <div className="revws-pic"><img src={team2} className="img-fluid rounded-2" width={80} alt="" />
                      </div>
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
                <div className="card border-0 rounded-3">
                  <div className="card-body">
                    <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                    <div className="d-flex align-items-center flex-thumbes">
                      <div className="revws-pic"><img src={team3} className="img-fluid rounded-2" width={80} alt="" />
                      </div>
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
                <div className="card border-0 rounded-3">
                  <div className="card-body">
                    <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                    <div className="d-flex align-items-center flex-thumbes">
                      <div className="revws-pic"><img src={team4} className="img-fluid rounded-2" width={80} alt="" />
                      </div>
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
                <div className="card border-0 rounded-3">
                  <div className="card-body">
                    <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                    <div className="d-flex align-items-center flex-thumbes">
                      <div className="revws-pic"><img src={team5} className="img-fluid rounded-2" width={80} alt="" />
                      </div>
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
        </section>
        {/*  Our Reviews End  */}
        {/* ==== Article Section Start ===== */}
        {/* <section>
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-xl-8 col-lg-9 col-md-11 col-sm-12">
            <div class="secHeading-wrap text-center mb-5">
              <h2>Trending & Popular Articles</h2>
              <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center g-4">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="blogGrid-wrap d-flex flex-column h-100">
              <div class="blogGrid-pics">
                <Link to="#" class="d-block"><img src="https://placehold.co/1200x800" class="img-fluid rounded"
                    alt="Blog image"></Link>
              </div>
              <div class="blogGrid-caps pt-3">
                <div class="d-flex align-items-center mb-1"><span
                    class="label text-success bg-light-success">Destination</span></div>
                <h4 class="fw-bold fs-6 lh-base"><Link to="#" class="text-dark">Make Your Next Journey Delhi To Paris in
                    Comfirtable And Best Price</Link></h4>
                <p class="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                  to be unintendedly humorous or offensive day of going live.</p>
                <Link class="text-primary fw-medium" to="#">Read More<i class="fa-solid fa-arrow-trend-up ms-2"></i></Link>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="blogGrid-wrap d-flex flex-column h-100">
              <div class="blogGrid-pics">
                <Link to="#" class="d-block"><img src="https://placehold.co/1200x800" class="img-fluid rounded"
                    alt="Blog image"></Link>
              </div>
              <div class="blogGrid-caps pt-3">
                <div class="d-flex align-items-center mb-1"><span
                    class="label text-success bg-light-success">Journey</span></div>
                <h4 class="fw-bold fs-6 lh-base"><Link to="#" class="text-dark">Make Your Next Journey Delhi To Paris in
                    Comfirtable And Best Price</Link></h4>
                <p class="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                  to be unintendedly humorous or offensive day of going live.</p>
                <Link class="text-primary fw-medium" to="#">Read More<i class="fa-solid fa-arrow-trend-up ms-2"></i></Link>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="blogGrid-wrap d-flex flex-column h-100">
              <div class="blogGrid-pics">
                <Link to="#" class="d-block"><img src="https://placehold.co/1200x800" class="img-fluid rounded"
                    alt="Blog image"></Link>
              </div>
              <div class="blogGrid-caps pt-3">
                <div class="d-flex align-items-center mb-1"><span
                    class="label text-success bg-light-success">Business</span></div>
                <h4 class="fw-bold fs-6 lh-base"><Link to="#" class="text-dark">Make Your Next Journey Delhi To Paris in
                    Comfirtable And Best Price</Link></h4>
                <p class="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                  to be unintendedly humorous or offensive day of going live.</p>
                <Link class="text-primary fw-medium" to="#">Read More<i class="fa-solid fa-arrow-trend-up ms-2"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
        {/* ==== Article Section Start ===== */}
        {/*  Call To Action Start  */}
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
        {/*  Call To Action Start  */}
        {/*  Footer Start  */}
        <Footer />
        {/*  Footer End  */}
        {/* Log In Modal */}
        <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
            <div className="modal-content" id="loginmodal">
              <div className="modal-header bg-primary">
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
                <p>Don't have an account yet?<Link to="/signup" className="text-primary fw-medium ms-1">Sign Up</Link></p>
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
                            <div className="d-inline-block"><img src="./assets/images/flags/Indian_flag.png" className="img-fluid circle" width={35} alt="" /></div>
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
        {/* Video Modal */}
        <div className="modal fade" id="popup-video" tabIndex={-1} role="dialog" aria-labelledby="popupvideo" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" id="popupvideo">
              <iframe className="embed-responsive-item full-width" title="YouTube video: Example Title" height={480} src="https://www.youtube.com/embed/qN3OueBm9F4?rel=0" frameBorder={0} allowFullScreen />
            </div>
          </div>
        </div>
        {/* End Video Modal */}
        <Link id="back2Top" className="top-scroll" title="Back to top" to="#"><i className="fa-solid fa-sort-up" /></Link>
      </div>
      {/* End Wrapper */}
      {/* All Jquery */}
      {/* This page plugins */}
    </div>
  );
}
export default Home;