import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import bgImage from '../../assets/img/bg2.png';

const Herosection = () => {
  const [activeTab, setActiveTab] = useState('seat');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/train-running-status':
        setActiveTab('live-status');
        break;
      case '/pnr-status':
        setActiveTab('pnr');
        break;
      case '/train-seat-availability':
        setActiveTab('seat');
        break;
      case '/search-by-name':
        setActiveTab('search-name');
        break;
      case '/search-by-station':
        setActiveTab('search-station');
        break;
      case '/platform-locator':
        setActiveTab('platform');
        break;
      case '/tatkal-railway-reservation':
        setActiveTab('tatkal');
        break;
      default:
        setActiveTab('seat');
    }
  }, [location]);

  return (
    <section className="bg-cover position-relative" style={{background: `#b22118 url(${bgImage}) no-repeat`}}>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="fpc-capstion text-center my-4">
                      <div className="fpc-captions">
                        {/* Add Tabs */}
                        <ul className="nav nav-pills justify-content-center mb-4" id="trainTabs" role="tablist">
                          <li className="nav-item mx-1" role="presentation">
                            <Link 
                              to="/train-running-status" 
                              className={`nav-link text-white ${activeTab === 'live-status' ? 'active' : ''}`}
                            >
                              <i className="fas fa-broadcast-tower me-2"></i> Live Train Status
                            </Link>
                          </li>
                          <li className="nav-item mx-1" role="presentation">
                            <Link 
                              to="/pnr-status" 
                              className={`nav-link text-white ${activeTab === 'pnr' ? 'active' : ''}`}
                            >
                              <i className="fas fa-ticket-alt me-2"></i>PNR Enquiry
                            </Link>
                          </li>
                          <li className="nav-item mx-1" role="presentation">
                            <Link 
                              to="/train-seat-availability" 
                              className={`nav-link text-white ${activeTab === 'seat' ? 'active' : ''}`}
                            >
                              <i className="fas fa-chair me-2"></i> Seat Availability
                            </Link>
                          </li>
                          <li className="nav-item mx-1" role="presentation">
                            <Link 
                              to="/search-by-name" 
                              className={`nav-link text-white ${activeTab === 'search-name' ? 'active' : ''}`}
                            >
                              <i className="fas fa-search me-2"></i> Search By Name/Number
                            </Link>
                          </li>
                          <li className="nav-item mx-1" role="presentation">
                            <Link 
                              to="/search-by-station" 
                              className={`nav-link text-white ${activeTab === 'search-station' ? 'active' : ''}`}
                            >
                              <i className="fas fa-building me-2"></i>Search By Station
                            </Link>
                          </li>
                          <li className="nav-item mx-1 mt-3" role="presentation">
                            <Link 
                              to="/platform-locator" 
                              className={`nav-link text-white ${activeTab === 'platform' ? 'active' : ''}`}
                            >
                              <i className="fas fa-map-marker-alt me-2"></i>Platform Locator
                            </Link>
                          </li>
                          <li className="nav-item mx-1 mt-3" role="presentation">
                            <Link 
                              to="/tatkal-railway-reservation" 
                              className={`nav-link text-white ${activeTab === 'tatkal' ? 'active' : ''}`}
                            >
                              <i className="fas fa-bolt me-2"></i> Tatkal Railways Reservation
                            </Link>
                          </li>
                        </ul>

                        {/* Tab Content */}
                        <div className="tab-content" id="trainTabsContent">
                          {/* Live Status Tab */}
                          <div 
                            className={`tab-pane fade ${activeTab === 'live-status' ? 'show active' : ''}`} 
                            id="live-status" 
                            role="tabpanel"
                          >
                            <h1 className="fs-1 lh-base text-light">Check Live Train Status</h1>
                            <form className="col-md-9 bg-body rounded mx-auto p-2 mb-3">
                              <div className="input-group">
                                <input className="form-control border-0 me-1" type="text" placeholder="Enter the Train Number or Name" />
                                <button type="button" className="btn btn-dark rounded px-xl-5 mb-0">Search</button>
                              </div>
                            </form>
                          </div>

                          {/* PNR Tab */}
                          <div 
                            className={`tab-pane fade ${activeTab === 'pnr' ? 'show active' : ''}`} 
                            id="pnr" 
                            role="tabpanel"
                          >
                            <h1 className="fs-1 lh-base text-light">PNR Status Enquiry</h1>
                            <form className="col-md-9 bg-body rounded mx-auto p-2 mb-3">
                              <div className="input-group">
                                <input className="form-control border-0 me-1" type="text" placeholder="Enter your 10 digit PNR number" />
                                <button type="button" className="btn btn-dark rounded px-xl-5 mb-0">Search</button>
                              </div>
                            </form>
                          </div>

                          {/* Seat Availability Tab */}
                          <div 
                            className={`tab-pane fade ${activeTab === 'seat' ? 'show active' : ''}`} 
                            id="seat" 
                            role="tabpanel"
                          >
                            <h1 className="fs-1 lh-base text-light">Check Seat Availability</h1>
                            <form className="col-md-9 bg-body rounded mx-auto p-2 mb-3">
                              <div className="input-group">
                                <input className="form-control border-0 me-1" type="text" placeholder="Enter Train Number and Class" />
                                <button type="button" className="btn btn-dark rounded px-xl-5 mb-0">Check</button>
                              </div>
                            </form>
                          </div>
                        {/*search by name/number*/}
                        <div 
                          className={`tab-pane fade ${activeTab === 'search-name' ? 'show active' : ''}`} 
                          id="search-name" 
                          role="tabpanel"
                        >
                            <h1 className="fs-1 lh-base text-light">Search By Name/Number</h1>
                            <form className="col-md-9 bg-body rounded mx-auto p-2 mb-3">
                              <div className="input-group">
                                <input className="form-control border-0 me-1" type="text" placeholder="Enter Train Number or Name" />
                                <button type="button" className="btn btn-dark rounded px-xl-5 mb-0">Search</button>
                              </div>
                            </form>
                          </div>
                          {/*search by station*/}
                          <div 
                            className={`tab-pane fade ${activeTab === 'search-station' ? 'show active' : ''}`} 
                            id="search-station" 
                            role="tabpanel"
                          >
                            <h1 className="fs-1 lh-base text-light">Search By Station</h1>
                            <form className="col-md-9 bg-body rounded mx-auto p-2 mb-3">
                              <div className="input-group">
                                <input className="form-control border-0 me-1" type="text" placeholder="Enter Station Code or Name" />
                                <button type="button" className="btn btn-dark rounded px-xl-5 mb-0">Search</button>
                              </div>
                            </form>
                          </div>
                          {/* Platform Locator Tab */}
                          <div 
                            className={`tab-pane fade ${activeTab === 'platform' ? 'show active' : ''}`} 
                            id="platform" 
                            role="tabpanel"
                          >
                            <h1 className="fs-1 lh-base text-light">Find Platform Number</h1>
                            <form className="col-md-9 bg-body rounded mx-auto p-2 mb-3">
                              <div className="input-group">
                                <input className="form-control border-0 me-1" type="text" placeholder="Enter Station Name or Number" />
                                <button type="button" className="btn btn-dark rounded px-xl-5 mb-0">Locate</button>
                              </div>
                            </form>
                          </div>
                          {/*tatkal railways reservation*/}
                          <div 
                            className={`tab-pane fade ${activeTab === 'tatkal' ? 'show active' : ''}`} 
                            id="tatkal" 
                            role="tabpanel"
                          >
                            <h1 className="fs-1 lh-base text-light">Tatkal Railways Reservation</h1>
                            <form className="col-md-9 bg-body rounded mx-auto p-2 mb-3">
                              <div className="input-group">
                                <input className="form-control border-0 me-1" type="text" placeholder="Enter Train Number" />
                                <button type="button" className="btn btn-dark rounded px-xl-5 mb-0">Search</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  );
};

export default Herosection;