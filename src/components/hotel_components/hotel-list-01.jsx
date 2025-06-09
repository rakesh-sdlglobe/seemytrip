import React from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/animation.css';
import '../../assets/css/dropzone.min.css';
import '../../assets/css/flatpickr.min.css';
import '../../assets/css/flickity.min.css';
import '../../assets/css/lightbox.min.css';
import '../../assets/css/magnifypopup.css';
import '../../assets/css/select2.min.css';
import '../../assets/css/rangeSlider.min.css';
import '../../assets/css/prism.css';
import '../../assets/css/bootstrap-icons.css';
import '../../assets/css/fontawesome.css';
import '../../assets/css/style.css';
import { Hotel01 } from '../../assets/images';
import { Link } from 'react-router-dom';
import Footer from '../footer';
import Header02 from '../header02';
import { HotelSearchbar } from './HotelSearchbar';
import HotelList from './HotelList';


const HotelList01 = () => {
  console.log("==========>HotelList01 component loaded");
  
      return (
        <div>
          <div id="preloader">
            <div className="preloader"><span /><span /></div>
          </div>
          <div id="main-wrapper">
            <Header02/>
            <div className="clearfix" />
            <div className="py-5 bg-primary position-relative">
              <div className="container">
                <HotelSearchbar/>
              </div>
            </div>
            <section className="gray-simple">
              <div className="container">
                <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
                  {/* Sidebar */}
                  <div className="col-xl-3 col-lg-4 col-md-12">
                  </div>
                  {/* All List */}
                  <div className="col-xl-9 col-lg-8 col-md-12">
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
                <HotelList />
                  </div>
                </div>
              </div>
            </section>
            <Footer/>
          </div>
        </div>
      );
};

export default HotelList01