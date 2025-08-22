import React, { useState, useEffect, useCallback } from 'react';
import { Edit2 } from 'lucide-react';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Indigo } from '../../assets/images';

export const FlightBookingpage01 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const  {
    flight,
    fRequest
  } = location.state || {};
  
  useEffect(() => {
    console.log('Location State:', location.state);
  }, [location.state]);

  const handleSearchResults = useCallback(
    () => {
      navigate("/flight-list", { state: { flightsearchrequest: fRequest } });
    },
    [navigate,fRequest]
  );
  const flightData = location.state?.flightData || {
    airline: 'Indigo Airlines',
    flightNumber: 'AI-203',
    from: 'DEL',
    to: 'BLR',
    departureTime: '07:40',
    arrivalTime: '12:20',
    duration: '4h 40m',
    class: 'Economy',
  };

  const MAX_TRAVELERS = 9;

  // State management
  const [travelers, setTravelers] = useState([]);
  const [currentTraveler, setCurrentTraveler] = useState({
    name: '',
    age: '',
    gender: 'male',
    nationality: '',
    passportNumber: '',
    passportExpiry: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [contactDetails, setContactDetails] = useState({
    email: '',
    phone: '',
    address: '',
    state: '',
  });

  // Validation and handlers
  const validateForm = () => {
    const errors = {};
    
    if (!currentTraveler.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!currentTraveler.age) {
      errors.age = 'Age is required';
    }
    if (!currentTraveler.nationality) {
      errors.nationality = 'Nationality is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSave = () => {
    if (travelers.length >= MAX_TRAVELERS) {
      toast.error('Maximum limit of 9 travelers reached.');
      return;
    }
    
    if (validateForm()) {
      setTravelers([...travelers, currentTraveler]);
      setCurrentTraveler({
        name: '',
        age: '',
        gender: 'male',
        nationality: '',
        passportNumber: '',
        passportExpiry: ''
      });
      toast.success('Traveler added successfully');
    }
  };

  const validateBeforePayment = () => {
    if (travelers.length === 0) {
      toast.error('Please add at least one traveler');
      return false;
    }
    if (!contactDetails.email || !contactDetails.phone || !contactDetails.state) {
      toast.error('Please fill all the required fields');
      return false;
    }
    return true;
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (validateBeforePayment()) {
      navigate('/flight-seat-selection', {
        state: {
          flightData,
          travelers,
          contactDetails
        }
      });
    }
  };

  const handleDeleteTraveler = (index) => {
    const updatedTravelers = travelers.filter((_, i) => i !== index);
    setTravelers(updatedTravelers);
    toast.error('Traveler deleted successfully');
  };

  const handleEditTraveler = (index) => {
    setCurrentTraveler(travelers[index]);
    const updatedTravelers = travelers.filter((_, i) => i !== index);
    setTravelers(updatedTravelers);
    toast.info('Edit traveler details');
  };

  // Render functions
  const renderBookingStepper = () => (
    <div className="col-xl-12 col-lg-12 col-md-12">
      <div id="stepper" className="bs-stepper stepper-outline mb-5">
        <div className="bs-stepper-header">
          <div className="step active" data-target="#step-1">
            <div className="text-center">
              <button className="step-trigger mb-0" id="steppertrigger1">
                <span className="bs-stepper-circle">1</span>
              </button>
              <h6 className="bs-stepper-label d-none d-md-block">Flight Review</h6>
            </div>
          </div>
          <div className="line" />
          <div className="step" data-target="#step-2">
            <div className="text-center">
              <button className="step-trigger mb-0" id="steppertrigger2">
                <span className="bs-stepper-circle">2</span>
              </button>
              <h6 className="bs-stepper-label d-none d-md-block">Select Seats</h6>
            </div>
          </div>
          <div className="line" />
          <div className="step" data-target="#step-3">
            <div className="text-center">
              <button className="step-trigger mb-0" id="steppertrigger3">
                <span className="bs-stepper-circle">3</span>
              </button>
              <h6 className="bs-stepper-label d-none d-md-block">Make Payment</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTravelerForm = () => (
    <div className="card p-4 mb-4">
      <div className="d-flex align-items-center mb-4">
        <h4 className="mb-0">Add Traveller</h4>
      </div>

      {travelers.length < MAX_TRAVELERS ? (
        <p className="text-muted small mb-4">
          You can book up to 9 travelers at once. ({travelers.length}/9 added)
        </p>
      ) : (
        <p className="text-danger small mb-4">
          Maximum limit of 9 travelers reached.
        </p>
      )}

      {/* Gender Selection */}
      <div className="mb-4">
        {['male', 'female', 'other'].map((gender) => (
          <div className="form-check form-check-inline" key={gender}>
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id={gender}
              value={gender}
              checked={currentTraveler.gender === gender}
              onChange={(e) => setCurrentTraveler({ ...currentTraveler, gender: e.target.value })}
            />
            <label className="form-check-label" htmlFor={gender}>
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </label>
          </div>
        ))}
      </div>

      {/* Name and Age Fields */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3 mb-md-0">
          <label htmlFor="name" className="form-label">Full Name (as per ID)*</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={currentTraveler.name}
            onChange={(e) => setCurrentTraveler({ ...currentTraveler, name: e.target.value })}
          />
          {formErrors.name && <div className="text-danger small mt-1">{formErrors.name}</div>}
        </div>
        <div className="col-md-6">
          <label htmlFor="age" className="form-label">Age*</label>
          <input
            id="age"
            type="number"
            className="form-control"
            value={currentTraveler.age}
            onChange={(e) => setCurrentTraveler({ ...currentTraveler, age: e.target.value })}
          />
          {formErrors.age && <div className="text-danger small mt-1">{formErrors.age}</div>}
        </div>
      </div>

      {/* Nationality and Passport Fields */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3 mb-md-0">
          <label htmlFor="nationality" className="form-label">Nationality*</label>
          <input
            id="nationality"
            type="text"
            className="form-control"
            value={currentTraveler.nationality}
            onChange={(e) => setCurrentTraveler({ ...currentTraveler, nationality: e.target.value })}
          />
          {formErrors.nationality && <div className="text-danger small mt-1">{formErrors.nationality}</div>}
        </div>
        <div className="col-md-6">
          <label htmlFor="passportNumber" className="form-label">Passport Number (Optional)</label>
          <input
            id="passportNumber"
            type="text"
            className="form-control"
            value={currentTraveler.passportNumber}
            onChange={(e) => setCurrentTraveler({ ...currentTraveler, passportNumber: e.target.value })}
          />
        </div>
      </div>

      <button 
        className="btn btn-primary"
        onClick={handleSave}
        disabled={travelers.length >= MAX_TRAVELERS}
      >
        Add Traveler
      </button>
    </div>
  );

  const renderSavedTravelers = () => (
    <div className="card p-4 mb-4">
      <h4 className="mb-4">Added Travelers</h4>
      {travelers.map((traveler, index) => (
        <div key={index} className="saved-traveler-item mb-3 p-3 border rounded">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">{traveler.name}</h5>
              <p className="mb-0 text-muted">
                {traveler.age} years • {traveler.gender.charAt(0).toUpperCase() + traveler.gender.slice(1)}
              </p>
            </div>
            <div>
              <button 
                className="btn btn-outline-primary btn-sm me-2"
                onClick={() => handleEditTraveler(index)}
              >
                <Edit2 size={14} className="me-1" />
                Edit
              </button>
              <button 
                className="btn btn-outline-danger btn-sm"
                onClick={() => handleDeleteTraveler(index)}
              >
                <i className="fa-solid fa-trash-alt me-1"></i>
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContactDetails = () => (
    <div className="card p-4 mb-4">
      <h4 className="mb-4">Contact Details</h4>
      
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email ID*</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={contactDetails.email}
          onChange={(e) => setContactDetails({...contactDetails, email: e.target.value})}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone Number*</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          value={contactDetails.phone}
          onChange={(e) => setContactDetails({...contactDetails, phone: e.target.value})}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <textarea
          className="form-control"
          id="address"
          rows="3"
          value={contactDetails.address}
          onChange={(e) => setContactDetails({...contactDetails, address: e.target.value})}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="state" className="form-label">State*</label>
        <select
          className="form-select"
          id="state"
          value={contactDetails.state}
          onChange={(e) => setContactDetails({...contactDetails, state: e.target.value})}
        >
          <option value="">Select State</option>
          <option value="maharashtra">Maharashtra</option>
          <option value="karnataka">Karnataka</option>
          <option value="delhi">Delhi</option>
          <option value="tamilnadu">Tamil Nadu</option>
        </select>
      </div>
    </div>
  );

  const renderBookingSummary = () => (
    <div className="booking-summary-sticky">
      <div className="card p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Booking Summary</h4>
          <span onClick={handleSearchResults} className="btn btn-outline-primary btn-sm">
            <Edit2 size={16} className="me-2" />
            Edit
          </span>
        </div>

        {/* Flight Details Card */}
        <div className="card-box list-layout-block border br-dashed rounded-3 p-3 mb-4">
          <div className="row">
            <div className="col">
              <div className="listLayout_midCaps">
                <h4 className="fs-5 fw-bold mb-1">
                  {typeof flightData.airline === 'object' ? 
                    flightData.airline.name : 
                    flightData.airline || 'Indigo Airlines'
                  }
                </h4>
                <ul className="row g-2 p-0">
                  <li className="col-auto">
                    <p className="text-muted-2 text-md">
                      {typeof flightData.from === 'object' ? 
                        flightData.from.airport : 
                        flightData.from || 'DEL'
                      } → {
                      typeof flightData.to === 'object' ? 
                        flightData.to.airport : 
                        flightData.to || 'BLR'
                      }
                    </p>
                  </li>
                </ul>

                <div className="position-relative mt-3">
                  <div className="d-flex flex-wrap align-items-center">
                    <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                      <div className="export-icon text-muted-2">
                        <i className="fa-solid fa-plane" />
                      </div>
                      <div className="export ps-2">
                        <span className="mb-0 text-muted-2 fw-semibold me-1">{flightData?.class || 'Economy'}</span>
                      </div>
                    </div>
                    <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                      <div className="export-icon text-muted-2">
                        <i className="fa-solid fa-clock" />
                      </div>
                      <div className="export ps-2">
                        <span className="mb-0 text-muted-2 fw-semibold me-1">{flightData?.duration || '4h 40m'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Details */}
        <div className="journey-details mb-4">
          <h5 className="mb-3">Journey Details</h5>
          <div className="d-flex justify-content-between mb-3 p-3 bg-light rounded">
            <div>
              <p className="mb-0 fw-bold">{flightData?.departureTime || '07:40'}</p>
              <p className="text-muted small mb-0">{flightData?.from || 'DEL'}</p>
            </div>
            <div className="text-center text-muted small">
              <p className="mb-0">{flightData?.duration || '4h 40m'}</p>
              <div className="journey-line">
                <span className="dot start"></span>
                <span className="line"></span>
                <span className="dot end"></span>
              </div>
            </div>
            <div className="text-end">
              <p className="mb-0 fw-bold">{flightData?.arrivalTime || '12:20'}</p>
              <p className="text-muted small mb-0">{flightData?.to || 'BLR'}</p>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="price-summary">
          <h5 className="mb-3">Price Details</h5>
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between mb-2">
              <span>Base Fare ({travelers.length} traveler{travelers.length !== 1 ? 's' : ''})</span>
              <span>₹{5000 * (travelers.length || 1)}</span>
            </li>
            <li className="d-flex justify-content-between mb-2">
              <span>Taxes & Fees</span>
              <span>₹{700 * (travelers.length || 1)}</span>
            </li>
            <li className="d-flex justify-content-between border-top pt-2 mt-2">
              <strong>Total Amount</strong>
              <strong>₹{(5700 * (travelers.length || 1))}</strong>
            </li>
          </ul>

          <button onClick={handleProceedToPayment} className="btn btn-primary w-100 mt-3">
            Continue to Seat Selection
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div id="main-wrapper">
      <ToastContainer/>
      <Header02 />
      
      <section className="pt-4 gray-simple position-relative">
        <div className="container">
          <div className="row">
            {renderBookingStepper()}
          </div>

          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12">
              {renderTravelerForm()}
              {renderSavedTravelers()}
              {renderContactDetails()}
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12">
              {renderBookingSummary()}
            </div>
          </div>
        </div>
      </section>

      <FooterDark />

      <style jsx>{`
        .journey-line {
          position: relative;
          width: 100px;
          height: 2px;
          background: #dee2e6;
          margin: 10px auto;
        }

        .journey-line .dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #cd2c22;
          border-radius: 50%;
          top: -3px;
        }

        .journey-line .dot.start {
          left: 0;
        }

        .journey-line .dot.end {
          right: 0;
        }

        .card {
          border: none;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
          transition: all 0.3s ease;
        }

        .card:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }

        .br-dashed {
          border-style: dashed !important;
        }

        .booking-summary-sticky {
          position: sticky;
          top: 20px;
          margin-bottom: 20px;
        }

        @media (max-width: 991px) {
          .booking-summary-sticky {
            position: relative;
            top: 0;
          }
        }
      `}</style>
    </div>
  );
};
