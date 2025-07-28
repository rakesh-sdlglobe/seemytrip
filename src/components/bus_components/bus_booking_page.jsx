import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBusBoardingPoints } from '../../store/Selectors/busSelectors';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { bus } from '../../assets/images';

export const BusBookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const boardingPoints = useSelector(selectBusBoardingPoints);
  
  // Bus data from navigation state or localStorage
  const busData = location.state?.busData || JSON.parse(localStorage.getItem('selectedBusData') || '{}');
  
  // State for form data
  const [selectedSeat, setSelectedSeat] = useState('DU3');
  const [selectedBoardingPoint, setSelectedBoardingPoint] = useState('');
  const [selectedDroppingPoint, setSelectedDroppingPoint] = useState('');
  const [showGSTDetails, setShowGSTDetails] = useState(false);
  const [travelerDetails, setTravelerDetails] = useState({
    name: '',
    age: '',
    gender: ''
  });
  const [contactDetails, setContactDetails] = useState({
    email: '',
    mobile: '',
    gstNumber: '',
    companyName: ''
  });
  const [addressDetails, setAddressDetails] = useState({
    pincode: '',
    state: ''
  });

  // Format time helper
  const formatTime = (timeString) => {
    if (!timeString) return '';
    const time = new Date(`2000-01-01T${timeString}`);
    return time.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  // Calculate duration
  const getDuration = (departure, arrival) => {
    if (!departure || !arrival) return '';
    const dep = new Date(`2000-01-01T${departure}`);
    const arr = new Date(`2000-01-01T${arrival}`);
    const diff = arr - dep;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <>
      {/* Preloader */}
      {/* <div id="preloader">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
      </div>
      </div> */}

      {/* Header */}
        <Header02 />

      <section className="pt-4 pb-4 gray-simple position-relative">
          <div className="container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/bus-search" className="text-decoration-none">Bus</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {busData.OriginName || 'Delhi'} to {busData.DestinationName || 'Kanpur'}
              </li>
            </ol>
          </nav>

          {/* First Container - Bus Details and Journey Info */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card shadow-sm">
                                  <div className="card-body">
                    <div className="row">
                      {/* Left Side - Bus Details */}
                      <div className="col-md-6">
                        <div className="bus-details">
                          <h5 className="fw-bold mb-2">{busData.TravelsName || 'Delhi Express'}</h5>
                          <p className="text-muted mb-3">
                            {busData.BusType || 'A/C Sleeper'} • {busData.BusCondition || 'Non-AC'}
                          </p>
                          
                          {/* Boarding, Journey Time, and Dropping Details - Horizontal */}
            <div className="row">
                            <div className="col-md-4">
                      <div className="text-center">
                                <div className="fw-bold text-primary">{formatTime(busData.DepartureTime) || '06:00 AM'}</div>
                                <small className="text-muted">{busData.DepartureDate || '15 Jan 2024'}</small>
                                <div className="mt-1">
                                  <small className="text-muted">{busData.OriginName || 'Delhi'}</small>
                                </div>
                      </div>
                    </div>
                            <div className="col-md-4">
                      <div className="text-center">
                                <div className="fw-bold text-info">{getDuration(busData.DepartureTime, busData.ArrivalTime) || '8h 30m'}</div>
                                <small className="text-muted">Journey Time</small>
                              </div>
                      </div>
                            <div className="col-md-4">
                      <div className="text-center">
                                <div className="fw-bold text-success">{formatTime(busData.ArrivalTime) || '02:30 PM'}</div>
                                <small className="text-muted">{busData.ArrivalDate || '15 Jan 2024'}</small>
                                <div className="mt-1">
                                  <small className="text-muted">{busData.DestinationName || 'Kanpur'}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                      {/* Right Side - Seat Information */}
                      <div className="col-md-6">
                        <div className="seat-info text-end">
                          <div className="seat-display">
                            <h6 className="text-primary mb-2">Selected Seat</h6>
                            <div className="seat-number">
                              <span className="badge bg-primary fs-5 px-3 py-2">
                                {selectedSeat}
                              </span>
                            </div>
                            <p className="text-muted mt-2">Seat Index: {selectedSeat}</p>
                          </div>
                        </div>
                      </div>
                    </div>


                </div>
              </div>
                                </div>
                              </div>

          {/* Second Container - Traveler Details */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-header">
                  <h5 className="mb-0">
                    <i className="fas fa-user me-2"></i>
                    Traveler Details
                  </h5>
                                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="mb-3">
                        <label className="form-label">Seat ID</label>
                        <input
                          type="text"
                          className="form-control"
                          value={selectedSeat}
                          readOnly
                          placeholder="Select seat first"
                        />
                                </div>
                              </div>
                    <div className="col-md-3">
                      <div className="mb-3">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          value={travelerDetails.name}
                          onChange={(e) => setTravelerDetails({...travelerDetails, name: e.target.value})}
                          placeholder="Enter full name"
                        />
                                    </div>
                                  </div>
                    <div className="col-md-3">
                      <div className="mb-3">
                        <label className="form-label">Age *</label>
                        <input
                          type="number"
                          className="form-control"
                          value={travelerDetails.age}
                          onChange={(e) => setTravelerDetails({...travelerDetails, age: e.target.value})}
                          placeholder="Age"
                          min="1"
                          max="120"
                        />
                                    </div>
                                  </div>
                    <div className="col-md-3">
                      <div className="mb-3">
                        <label className="form-label">Gender *</label>
                        <select
                          className="form-select"
                          value={travelerDetails.gender}
                          onChange={(e) => setTravelerDetails({...travelerDetails, gender: e.target.value})}
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

          {/* Third Container - Contact Details */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-header">
                  <h5 className="mb-0">
                    <i className="fas fa-phone me-2"></i>
                    Contact Details
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Email ID *</label>
                        <input
                          type="email"
                          className="form-control"
                          value={contactDetails.email}
                          onChange={(e) => setContactDetails({...contactDetails, email: e.target.value})}
                          placeholder="Enter email address"
                        />
                      </div>
                        </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Mobile Number *</label>
                        <input
                          type="tel"
                          className="form-control"
                          value={contactDetails.mobile}
                          onChange={(e) => setContactDetails({...contactDetails, mobile: e.target.value})}
                          placeholder="Enter mobile number"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* GST Details Toggle */}
                  <div className="mb-3">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gstToggle"
                        checked={showGSTDetails}
                        onChange={(e) => setShowGSTDetails(e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="gstToggle">
                        Add GST Details (Optional)
                      </label>
                        </div>
                        </div>

                  {showGSTDetails && (
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">GST Number</label>
                          <input
                            type="text"
                            className="form-control"
                            value={contactDetails.gstNumber}
                            onChange={(e) => setContactDetails({...contactDetails, gstNumber: e.target.value})}
                            placeholder="Enter GST number"
                          />
                        </div>
                        </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Company Name</label>
                          <input
                            type="text"
                            className="form-control"
                            value={contactDetails.companyName}
                            onChange={(e) => setContactDetails({...contactDetails, companyName: e.target.value})}
                            placeholder="Enter company name"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Container - Address Details */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-header">
                  <h5 className="mb-0">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    Address Details
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Pincode *</label>
                        <input
                          type="text"
                          className="form-control"
                          value={addressDetails.pincode}
                          onChange={(e) => setAddressDetails({...addressDetails, pincode: e.target.value})}
                          placeholder="Enter pincode"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">State *</label>
                        <select
                          className="form-select"
                          value={addressDetails.state}
                          onChange={(e) => setAddressDetails({...addressDetails, state: e.target.value})}
                        >
                          <option value="">Select State</option>
                          <option value="delhi">Delhi</option>
                          <option value="uttar-pradesh">Uttar Pradesh</option>
                          <option value="maharashtra">Maharashtra</option>
                          <option value="karnataka">Karnataka</option>
                          <option value="tamil-nadu">Tamil Nadu</option>
                          <option value="gujarat">Gujarat</option>
                          <option value="west-bengal">West Bengal</option>
                          <option value="rajasthan">Rajasthan</option>
                          <option value="madhya-pradesh">Madhya Pradesh</option>
                          <option value="bihar">Bihar</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proceed to Payment Button */}
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <button className="btn btn-primary btn-lg px-5">
                  <i className="fas fa-credit-card me-2"></i>
                  Proceed to Payment
                </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterDark />
    </>
  );
};

export default BusBookingPage;