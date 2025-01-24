import React, { useState, useEffect } from 'react';
import { Edit2, PlusCircle } from 'lucide-react';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IRCTC_Logo } from '../../assets/images';

const TrainBookingDetails = () => {
const location = useLocation();
const trainData = location.state?.trainData;
const navigate = useNavigate();
  // Add max travelers constant
const MAX_TRAVELERS = 6;
console.log("17 train data from ",trainData)

// State management
const [travelers, setTravelers] = useState([]);
const [currentTraveler, setCurrentTraveler] = useState({
  firstName: '',
  lastName: '',
  age: '',
  gender: 'male',
  berth: '',
  country: '',
});
const [selectedTravelers, setSelectedTravelers] = useState([]);

// Add new state for form validation and contact details
const [formErrors, setFormErrors] = useState({});
const [errors, setErrors] = useState({ email: '', phone: '' });
const [contactDetails, setContactDetails] = useState({
  irctcUsername: '',
  email: '',
  phone: '',
  state: '',
  });

  const [showTravelerModal, setShowTravelerModal] = useState(false);

  // Add a new state to track if we're editing
  const [editingTravelerIndex, setEditingTravelerIndex] = useState(null);

  // Add this state near other state declarations
  const [showIRCTCPopup, setShowIRCTCPopup] = useState(false);

  // Add this new state near other state declarations
  const [showForgotUsernamePopup, setShowForgotUsernamePopup] = useState(false);
  const [forgotUsernameForm, setForgotUsernameForm] = useState({
    contact: '',
    dob: ''
  });

  // Add validation state
  const [forgotUsernameError, setForgotUsernameError] = useState('');

  // Add these new states near other state declarations
  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);
  const [forgotPasswordForm, setForgotPasswordForm] = useState({
    username: '',
    mobile: ''
  });
  const [forgotPasswordError, setForgotPasswordError] = useState({
    username: '',
    mobile: ''
  });

  useEffect(() => {
    if (showTravelerModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showTravelerModal]);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setErrors((prevErrors) => ({
      ...prevErrors,
      email: emailRegex.test(email) || email === '' ? '' : 'Invalid email format',
    }));
    setContactDetails((prev) => ({ ...prev, email }));
  };


  const handlePhoneChange = (e) => {
    const phone = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    const maxPhoneLength = 10;
    const phoneRegex = /^[6-9]\d{9}$/;

    setErrors((prevErrors) => ({
      ...prevErrors,
      phone:
        phone.length > maxPhoneLength
          ? 'Phone number must be exactly 10 digits'
          : phone === ''
          ? 'Phone number is required'
          : !phoneRegex.test(phone) 
          ? "Invalid phone number " 
          : '',
    }));


    setContactDetails((prev) => ({
      ...prev,
      phone: phone.slice(0, maxPhoneLength),
    }));
  };


  // Handler functions
  const handleSave = () => {
    if (travelers.length >= MAX_TRAVELERS && editingTravelerIndex === null) {
      toast.error('Maximum limit of 6 travelers reached.');
      return;
    }
    
    if (validateForm()) {
      const travelerWithFullName = {
        ...currentTraveler,
        name: `${currentTraveler.firstName} ${currentTraveler.lastName}`.trim()
      };

      if (editingTravelerIndex !== null) {
        const updatedTravelers = [...travelers];
        updatedTravelers[editingTravelerIndex] = travelerWithFullName;
        setTravelers(updatedTravelers);
        toast.success('Traveler updated successfully');
      } else {
        setTravelers([...travelers, travelerWithFullName]);
        toast.success('Traveler added successfully');
      }

      // Reset form and close modal
      setCurrentTraveler({
        firstName: '',
        lastName: '',
        age: '',
        gender: 'male',
        berth: '',
        country: '',
      });
      setEditingTravelerIndex(null);
      setShowTravelerModal(false);
    }
  };

  //validate before payment
  const validateBeforePayment = () => {
    if(selectedTravelers.length === 0){
      toast.error('Please select at least one traveler')
      return false;
    }
    if(!contactDetails.irctcUsername || !contactDetails.email || !contactDetails.phone || !contactDetails.state){
      toast.error('Please fill all the required fields')
      return false;
    }
    return true;
  }
// handle proceed to payment
const handleProceedToPayment = (e)=>{
  e.preventDefault();
  if(validateBeforePayment()){
    navigate('/booking-page-3')
  }
}
  // Update validateForm function
  const validateForm = () => {
    const errors = {};
    
    if (!currentTraveler.firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(currentTraveler.firstName.trim())) {
      errors.firstName = 'First name should only contain letters';
    }

    if (!currentTraveler.lastName.trim()) {
      errors.lastName = 'Last name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(currentTraveler.lastName.trim())) {
      errors.lastName = 'Last name should only contain letters';
    }

    if (!currentTraveler.age) {
      errors.age = 'Age is required';
    }
    
    // Only validate berth and country for age >= 5
    if (!currentTraveler.age || parseInt(currentTraveler.age) >= 5) {
      if (!currentTraveler.berth) {
        errors.berth = 'Berth preference is required';
      }
      if (!currentTraveler.country) {
        errors.country = 'Country is required';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Add delete handler
  const handleDeleteTraveler = (index) => {
    const updatedTravelers = travelers.filter((_, i) => i !== index);
    setTravelers(updatedTravelers);
    toast.error('Traveler deleted successfully');
  };

  // Update handleEditTraveler function
  const handleEditTraveler = (index) => {
    const traveler = travelers[index];
    const [firstName, ...lastNameParts] = traveler.name.split(' ');
    setCurrentTraveler({
      ...traveler,
      firstName: firstName || '',
      lastName: lastNameParts.join(' ') || ''
    });
    setEditingTravelerIndex(index);
    setShowTravelerModal(true);
    toast.info('Edit traveler details');
  };

  // Add this function near other handler functions
  const handleTravelerSelection = (index) => {
    setSelectedTravelers(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  // Update modal close handler
  const handleModalClose = () => {
    setShowTravelerModal(false);
    setCurrentTraveler({
      firstName: '',
      lastName: '',
      age: '',
      gender: 'male',
      berth: '',
      country: '',
    });
    setEditingTravelerIndex(null);
  };

  // Add this function near other handler functions
  const handleIRCTCClick = (e) => {
    e.preventDefault();
    setShowIRCTCPopup(true);
  };

  // Add these handler functions near other handlers
  const handleForgotUsernameClick = (e) => {
    e.preventDefault();
    setShowForgotUsernamePopup(true);
  };

  const handleForgotUsernameSubmit = (e) => {
    e.preventDefault();
    
    // Validate contact field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    
    if (!emailRegex.test(forgotUsernameForm.contact) && !phoneRegex.test(forgotUsernameForm.contact)) {
      setForgotUsernameError('Please enter a valid email or 10-digit mobile number');
      return;
    }

    toast.success('If the details match, your username will be sent to your registered contact');
    setShowForgotUsernamePopup(false);
    setForgotUsernameError('');
  };

  // Add these handler functions near other handlers
  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setShowForgotPasswordPopup(true);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    
    // Validate fields
    const errors = {};
    if (!forgotPasswordForm.username.trim()) {
      errors.username = 'IRCTC username is required';
    }
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(forgotPasswordForm.mobile)) {
      errors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (Object.keys(errors).length > 0) {
      setForgotPasswordError(errors);
      return;
    }

    toast.success('Password reset instructions will be sent to your registered mobile number');
    setShowForgotPasswordPopup(false);
    setForgotPasswordError({});
    setForgotPasswordForm({ username: '', mobile: '' });
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
              <h6 className="bs-stepper-label d-none d-md-block">Journey Review</h6>
            </div>
          </div>
          <div className="line" />
          <div className="step" data-target="#step-2">
            <div className="text-center">
              <button className="step-trigger mb-0" id="steppertrigger3">
                <span className="bs-stepper-circle">2</span>
              </button>
              <h6 className="bs-stepper-label d-none d-md-block">Make Payment</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTravelerModal = () => (
    <>
      <div 
        className={`modal ${showTravelerModal ? 'show' : ''}`} 
        style={{ display: showTravelerModal ? 'block' : 'none' }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {editingTravelerIndex !== null ? `Edit Traveler: ${currentTraveler.name}` : 'Add Traveler'}
              </h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={handleModalClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="card border-0 shadow-none">
                {travelers.length < MAX_TRAVELERS ? (
                  <p className="text-muted small mb-4">
                    You can book up to 6 travelers at once. ({travelers.length}/6 added)
                  </p>
                ) : (
                  <p className="text-danger small mb-4">
                    Maximum limit of 6 travelers reached.
                  </p>
                )}

                {/* Gender Selection */}
                <div className="mb-4">
                  {['male', 'female', 'transgender'].map((gender) => (
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
                  <div className="col-md-4 mb-3 ps-4">
                    <label htmlFor="firstName" className="form-label">First Name*</label>
                    <input
                      id="firstName"
                      type="text"
                      className="form-control"
                      value={currentTraveler.firstName}
                      onChange={(e) => setCurrentTraveler({ ...currentTraveler, firstName: e.target.value })}
                      required
                    />
                    {formErrors.firstName && <div className="text-danger small mt-1">{formErrors.firstName}</div>}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name*</label>
                    <input
                      id="lastName"
                      type="text"
                      className="form-control"
                      value={currentTraveler.lastName}
                      onChange={(e) => setCurrentTraveler({ ...currentTraveler, lastName: e.target.value })}
                      required
                    />
                    {formErrors.lastName && <div className="text-danger small mt-1">{formErrors.lastName}</div>}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="age" className="form-label">Age*</label>
                    <input
                      id="age"
                      type="number"
                      className="form-control"
                      value={currentTraveler.age}
                      onChange={(e) => {
                        const newAge = e.target.value;
                        setCurrentTraveler({ 
                          ...currentTraveler, 
                          age: newAge,
                          ...(parseInt(newAge) < 5 ? { berth: '', country: '' } : {})
                        });
                      }}
                      required
                    />
                    {formErrors.age && <div className="text-danger small mt-1">{formErrors.age}</div>}
                  </div>
                </div>

                {/* Show warning message for under 5 */}
                {currentTraveler.age && parseInt(currentTraveler.age) < 5 && (
                  <div className="alert alert-warning mb-4">
                    Children below 5 years will not appear on the ticket as they can travel free of charge (without berth). Please carry age proof in the train.
                  </div>
                )}

                {/* Only show Berth and Country for age 5 and above */}
                {(!currentTraveler.age || parseInt(currentTraveler.age) >= 5) && (
                  <div className="row mb-4">
                    <div className="col-md-6 mb-3 mb-md-0 ps-4">
                      <label htmlFor="berth" className="form-label">Berth Preference*</label>
                      <div className="select-wrapper">
                        <select
                          id="berth"
                          className="form-select card-select"
                          value={currentTraveler.berth}
                          onChange={(e) => setCurrentTraveler({ ...currentTraveler, berth: e.target.value })}
                          required
                        >
                          <option value="" disabled>Select berth preference</option>
                          <option value="lower">Lower Berth</option>
                          <option value="upper">Upper Berth</option>
                          <option value="middle">Middle Berth</option>
                          <option value="side-lower">Side Lower Berth</option>
                          <option value="side-upper">Side Upper Berth</option>
                          <option value="no-preference">No Preference</option>
                        </select>
                      </div>
                      {formErrors.berth && <div className="text-danger small mt-1">{formErrors.berth}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="country" className="form-label">Country*</label>
                      <div className="select-wrapper">
                        <select
                          id="country"
                          className="form-select card-select"
                          value={currentTraveler.country}
                          onChange={(e) => setCurrentTraveler({ ...currentTraveler, country: e.target.value })}
                          required
                        >
                          <option value="" disabled>Select country</option>
                          <option value="india">India</option>
                          <option value="other">Other Countries</option>
                        </select>
                      </div>
                      {formErrors.country && <div className="text-danger small mt-1">{formErrors.country}</div>}
                    </div>
                  </div>
                )}

                <button className="btn btn-primary" onClick={handleSave}>
                  {editingTravelerIndex !== null ? 'Update Traveler Details' : 'Save Traveler Details'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showTravelerModal && <div className="modal-backdrop show"></div>}
    </>
  );

  const renderSavedTravelers = () => (
    <div className="card p-4 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">Travelers</h4>
        {travelers.length < MAX_TRAVELERS && (
          <button 
            className="btn btn-primary d-flex align-items-center gap-2"
            onClick={() => setShowTravelerModal(true)}
          >
            <PlusCircle size={20} />
            Add Traveler
          </button>
        )}
      </div>

      {travelers.length === 0 ? (
        <div className="text-center py-5">
          <div className="empty-state-icon mb-4">
            <i className="fa-solid fa-users-slash fa-4x text-muted"></i>
          </div>
          <h5 className="mb-3">No Travelers Added</h5>
          <p className="text-muted mb-4">
            Add travelers to proceed with your booking. You can add up to 6 travelers.
          </p>
          <button 
            className="btn btn-primary d-flex align-items-center gap-2 mx-auto"
            onClick={() => setShowTravelerModal(true)}
          >
            <PlusCircle size={20} />
            Add Your First Traveler
          </button>
        </div>
      ) : (
        <div className="row g-3">
          {travelers.map((traveler, index) => (
            <div key={index} className="col-md-6">
              <div className={`card shadow-sm ${selectedTravelers.includes(index) ? 'border-primary' : ''}`}>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <div className="form-check me-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={selectedTravelers.includes(index)}
                        onChange={() => handleTravelerSelection(index)}
                        id={`traveler-${index}`}
                      />
                    </div>
                    <p className="fw-bold mb-0 flex-grow-1">{traveler.name}</p>
                    <div>
                      <button 
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEditTraveler(index)}
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteTraveler(index)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                  <p className="text-muted small mb-0">
                    {traveler.age} years • {traveler.gender}
                    {parseInt(traveler.age) >= 5 ? ` • ${traveler.berth} berth` : ' • No berth (under 5)'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderBookingSummary = () => (
    <div className="booking-summary-sticky">
      <div className="card p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Booking Summary</h4>
          <Link to="/Train-list-01" className="btn btn-outline-primary btn-sm">
            <Edit2 size={16} className="me-2" />
            Edit
          </Link>
        </div>

        {/* Train Details Card */}
        <div className="card-box list-layout-block border br-dashed rounded-3 p-3 mb-4">
  <div className="row">
    <div className="col">
      <div className="listLayout_midCaps">
        <h6 className="fs-5 fw-bold mb-1 text-muted"># {trainData.trainNumber}</h6>
        <h4 className="fs-5 fw-bold mb-1">{trainData.trainName}</h4>
        {/* <ul className="row g-2 p-0">
          <li className="col-auto">
            <p className="text-muted-2 text-md">
              {trainData.from} → {trainData.to}
            </p>
          </li>
        </ul> */}

        <div className="position-relative mt-3">
          <div className="d-flex flex-wrap align-items-center">
            <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
              <div className="export-icon text-muted-2">
                <i className="fa-solid fa-chair" />
              </div>
              <div className="export ps-2">
                <span className="mb-0 text-muted-2 fw-semibold me-1">{trainData?.classinfo?.enqClass}</span>
                <span className="mb-0 text-muted-2 text-md">Class</span>
              </div>
            </div>
            <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
              <div className="export-icon text-muted-2">
                <i className="fa-solid fa-clock" />
              </div>
              <div className="export ps-2">
                <span className="mb-0 text-muted-2 fw-semibold me-1">{trainData.duration}</span>
                <span className="mb-0 text-muted-2 text-md">Duration</span>
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
              <p className="mb-0 fw-bold">{trainData.departureTime}</p>
              <p className="text-muted small mb-0">{trainData.departureDate}</p>
              <p className="text-muted small">{trainData.fromStnName}</p>
            </div>
            <div className="text-center text-muted small">
              <p className="mb-0">{trainData.duration}</p>
              <div className="journey-line">
                <span className="dot start"></span>
                <span className="line"></span>
                <span className="dot end"></span>
              </div>
            </div>
            <div className="text-end">
              <p className="mb-0 fw-bold">{trainData.arrivalTime}</p>
              <p className="text-muted small mb-0">{trainData.arrivalDate}</p>
              <p className="text-muted small">{trainData.toStnName}</p>
            </div>
          </div>

          {/* Add Boarding Station dropdown */}
          <div className="mb-3">
            <label htmlFor="boardingStation" className="form-label">Boarding Station*</label>
            <div className="select-wrapper">
              <select className="form-select card-select">
                <option value="" disabled>Select boarding point</option>
                <option value="krishnarajapuram">Krishnarajapuram (04:40 AM)</option>
                <option value="bangalore">Bangalore City Jn (05:15 AM)</option>
                <option value="yesvantpur">Yesvantpur Jn (05:45 AM)</option>
              </select>
            </div>
            <small className="text-muted">
              Select the station from where you will board the train.
            </small>
          </div>
        </div>

        {/* Price Summary .*/}
        <div className="price-summary">
          <h5 className="mb-3">Price Details</h5>
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between mb-2">
              <span>Base Fare ({selectedTravelers.length} traveler{selectedTravelers.length !== 1 ? 's' : ''})</span>
              <span>₹{trainData.classinfo.baseFare * (selectedTravelers.length || 1)}</span>
            </li>
            <li className="d-flex justify-content-between mb-2">
              <span>Taxes & Fees</span>
              <span>₹{(trainData.classinfo.totalFare - trainData.classinfo.baseFare) * (selectedTravelers.length || 1)}</span>
            </li>
            <li className="d-flex justify-content-between border-top pt-2 mt-2">
              <strong>Total Amount</strong>
              <strong>₹{(trainData.classinfo.totalFare * (selectedTravelers.length || 1))}</strong>
            </li>
          </ul>

          <Link onClick={handleProceedToPayment} className="btn btn-primary w-100 mt-3">
            Proceed to Payment
          </Link>
        </div>
      </div>
    </div>
  );

  // Add this new function to render IRCTC Details section
  const renderIRCTCDetails = () => (
    <div className="card mb-4">
      <div className="card-header bg-white p-4 border-bottom">
        <div className="d-flex align-items-center">
          <div className="irctc-logo-container me-3">
            <img src={IRCTC_Logo} alt="IRCTC Logo" className="irctc-logo" />
          </div>
          <div>
            <h4 className="mb-1">IRCTC Details</h4>
            <p className="text-muted mb-0 small">
              IRCTC Username will be required after payment. Please ensure you have entered correct username.
            </p>
          </div>
        </div>
      </div>

      <div className="card-body p-4">
        <div className="mb-4">
          <label htmlFor="irctcUsername" className="form-label fw-medium">IRCTC Username*</label>
          <div className="input-group" style={{ width: '100%' }}>
            <input
              type="text"
              className="form-control form-control-lg"
              style={{ flex: '1 1 auto' }}
              id="irctcUsername"
              placeholder="Enter your IRCTC username"
              value={contactDetails.irctcUsername}
              onChange={(e) => setContactDetails({ ...contactDetails, irctcUsername: e.target.value })}
            />
            {contactDetails.irctcUsername && (
              <button 
                className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted px-3"
                onClick={() => setContactDetails({ ...contactDetails, irctcUsername: '' })}
                style={{ zIndex: 5, right: '40px' }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
          {contactDetails.irctcUsername && (
            <div className="d-flex align-items-center mt-2">
              <span className="badge bg-success-subtle text-success rounded-pill">
                <i className="fa-solid fa-check-circle me-1"></i>
                IRCTC ID Verified
              </span>
            </div>
          )}
        </div>

        <div className="d-flex flex-wrap gap-3 mb-4">
          <a href="#" className="text-decoration-none text-blue" onClick={handleForgotUsernameClick}>
            <i className="fa-solid fa-user-lock me-1"></i>
            Forgot Username
          </a>
          <span className="text-muted">|</span>
          <a href="#" className="text-decoration-none text-blue" onClick={handleIRCTCClick}>
            <i className="fa-solid fa-user-plus me-1"></i>
            Create IRCTC ID
          </a>
          <span className="text-muted">|</span>
          <a href="#" className="text-decoration-none text-blue" onClick={handleForgotPasswordClick}>
            <i className="fa-solid fa-key me-1"></i>
            Forgot IRCTC Password
          </a>
        </div>

        <div className="alert alert-info d-flex align-items-center mb-0" role="alert">
          <i className="fa-solid fa-info-circle me-2 fs-5"></i>
          <div className="small">
            IRCTC ID Password will be required after payment to complete your booking.
          </div>
        </div>
      </div>
    </div>
  );

  // Add new contact details form
  const renderContactDetails = () => (
    <div className="card mb-4 p-4">
      <h4 className="mb-4">
        <i className="fa-solid fa-address-card me-2"></i>
        Contact Details
      </h4>
      
      <div className="row g-3">
        <div className="col-xl-6 col-md-6 col-sm-12">
          <label htmlFor="email" className="form-label">
            <i className="fa-solid fa-envelope me-2"></i>
            Email ID*
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={contactDetails.email}
            onChange={handleEmailChange}
            style={{ fontSize: '0.875rem', padding: '0.5rem' }}
            required
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="col-xl-6 col-md-6 col-sm-12">
          <label htmlFor="phone" className="form-label">
            <i className="fa-solid fa-phone me-2"></i>
            Phone Number*
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={contactDetails.phone}
            onChange={handlePhoneChange}
            style={{ fontSize: '0.875rem', padding: '0.5rem' }}
            required
          />
          {errors.phone && <small className="text-danger">{errors.phone}</small>}
        </div>

        <div className="col-12">
          <label htmlFor="state" className="form-label">
            <i className="fa-solid fa-location-dot me-2"></i>
            State*
          </label>
          <div className="select-wrapper">
            <select
              className="form-select card-select"
              id="state"
              value={contactDetails.state}
              onChange={(e) => setContactDetails({ ...contactDetails, state: e.target.value })}
            >
              <option value="" disabled>Select State</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="karnataka">Karnataka</option>
              <option value="delhi">Delhi</option>
              <option value="tamil-nadu">Tamil Nadu</option>
              <option value="kerala">Kerala</option>
              <option value="uttar-pradesh">Uttar Pradesh</option>
              {/* Add more states as needed */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  // Add this modal component near other render functions
  const renderIRCTCPopup = () => (
    <>
      <div 
        className={`modal ${showIRCTCPopup ? 'show' : ''}`} 
        style={{ display: showIRCTCPopup ? 'block' : 'none' }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom">
              <h5 className="modal-title">Create IRCTC Account</h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setShowIRCTCPopup(false)}
              ></button>
            </div>
            <div className="modal-body text-center p-4">
              <div className="mb-4">
                <i className="fa-solid fa-user-plus fa-3x text-primary mb-3"></i>
                <h5 className="mb-3">Register on IRCTC</h5>
                <p className="text-muted mb-0">
                  You'll be redirected to the official IRCTC website to create your account. 
                  Would you like to proceed?
                </p>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <a 
                  href="https://www.irctc.co.in/nget/profile/user-registration" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary px-4"
                  onClick={() => setShowIRCTCPopup(false)}
                >
                  Go to IRCTC
                </a>
                <button 
                  className="btn btn-outline-secondary px-4"
                  onClick={() => setShowIRCTCPopup(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showIRCTCPopup && <div className="modal-backdrop show"></div>}
    </>
  );

  // Update the render function for the forgot username popup
  const renderForgotUsernamePopup = () => (
    <>
      <div 
        className={`modal ${showForgotUsernamePopup ? 'show' : ''}`} 
        style={{ display: showForgotUsernamePopup ? 'block' : 'none' }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom">
              <h5 className="modal-title">Forgot IRCTC Username</h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => {
                  setShowForgotUsernamePopup(false);
                  setForgotUsernameError('');
                }}
              ></button>
            </div>
            <div className="modal-body p-4">
              <form onSubmit={handleForgotUsernameSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    <i className="fa-solid fa-address-card me-2 text-primary"></i>
                    Mobile Number or Email ID*
                  </label>
                  <input
                    type="text"
                    className={`form-control ${forgotUsernameError ? 'is-invalid' : ''}`}
                    placeholder="Enter mobile number or email ID"
                    value={forgotUsernameForm.contact}
                    onChange={(e) => {
                      setForgotUsernameForm({
                        ...forgotUsernameForm,
                        contact: e.target.value
                      });
                      setForgotUsernameError('');
                    }}
                    required
                  />
                  {forgotUsernameError ? (
                    <div className="invalid-feedback">{forgotUsernameError}</div>
                  ) : (
                    <small className="text-muted">
                      Enter your registered mobile number or email ID
                    </small>
                  )}
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    <i className="fa-solid fa-calendar me-2 text-primary"></i>
                    Date of Birth*
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={forgotUsernameForm.dob}
                    onChange={(e) => setForgotUsernameForm({
                      ...forgotUsernameForm,
                      dob: e.target.value
                    })}
                    required
                    max={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="alert alert-info d-flex" role="alert">
                  <i className="fa-solid fa-info-circle me-2 mt-1"></i>
                  <div className="small">
                    Your IRCTC username will be sent to your registered mobile number/email ID if the details match our records.
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                  >
                    <i className="fa-solid fa-paper-plane me-2"></i>
                    Send IRCTC Username
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      setShowForgotUsernamePopup(false);
                      setForgotUsernameError('');
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showForgotUsernamePopup && <div className="modal-backdrop show"></div>}
    </>
  );

  // Add this new render function near other render functions
  const renderForgotPasswordPopup = () => (
    <>
      <div 
        className={`modal ${showForgotPasswordPopup ? 'show' : ''}`} 
        style={{ display: showForgotPasswordPopup ? 'block' : 'none' }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom">
              <h5 className="modal-title">Forgot IRCTC Password</h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => {
                  setShowForgotPasswordPopup(false);
                  setForgotPasswordError({});
                  setForgotPasswordForm({ username: '', mobile: '' });
                }}
              ></button>
            </div>
            <div className="modal-body p-4">
              <form onSubmit={handleForgotPasswordSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    <i className="fa-solid fa-user me-2 text-primary"></i>
                    IRCTC Username*
                  </label>
                  <input
                    type="text"
                    className={`form-control ${forgotPasswordError.username ? 'is-invalid' : ''}`}
                    placeholder="Enter your IRCTC username"
                    value={forgotPasswordForm.username}
                    onChange={(e) => {
                      setForgotPasswordForm({
                        ...forgotPasswordForm,
                        username: e.target.value
                      });
                      setForgotPasswordError({
                        ...forgotPasswordError,
                        username: ''
                      });
                    }}
                    required
                  />
                  {forgotPasswordError.username && (
                    <div className="invalid-feedback">{forgotPasswordError.username}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    <i className="fa-solid fa-mobile-screen me-2 text-primary"></i>
                    Registered Mobile Number*
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${forgotPasswordError.mobile ? 'is-invalid' : ''}`}
                    placeholder="Enter 10-digit mobile number"
                    value={forgotPasswordForm.mobile}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setForgotPasswordForm({
                        ...forgotPasswordForm,
                        mobile: value
                      });
                      setForgotPasswordError({
                        ...forgotPasswordError,
                        mobile: ''
                      });
                    }}
                    required
                  />
                  {forgotPasswordError.mobile ? (
                    <div className="invalid-feedback">{forgotPasswordError.mobile}</div>
                  ) : (
                    <small className="text-muted">Enter 10-digit number starting with 6-9</small>
                  )}
                </div>

                <div className="alert alert-info d-flex" role="alert">
                  <i className="fa-solid fa-info-circle me-2 mt-1"></i>
                  <div className="small">
                    Password reset instructions will be sent to your registered mobile number if the details match our records.
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                  >
                    <i className="fa-solid fa-paper-plane me-2"></i>
                    Send Reset Instructions
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      setShowForgotPasswordPopup(false);
                      setForgotPasswordError({});
                      setForgotPasswordForm({ username: '', mobile: '' });
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showForgotPasswordPopup && <div className="modal-backdrop show"></div>}
    </>
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
            {/* Left Column - Traveler Form */}
            <div className="col-xl-8 col-lg-8 col-md-12">
              {renderSavedTravelers()}
              {renderIRCTCDetails()}
              {renderContactDetails()}
            </div>

            {/* Right Column - Booking Summary */}
            <div className="col-xl-4 col-lg-4 col-md-12">
              {renderBookingSummary()}
            </div>
          </div>
        </div>
      </section>

      <FooterDark />

      {renderTravelerModal()}
      {renderIRCTCPopup()}
      {renderForgotUsernamePopup()}
      {renderForgotPasswordPopup()}

      <style jsx>{`
        .journey-line {
          position: relative;
          width: 100%;
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

        .journey-line .line {
          position: Relative;
          width: 200%;
          height: 2px;
          background: #f6f6f6;
          top: 0;
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

        .card.border-primary {
          border: 1px solid #cd2c22 !important;
        }

        .form-check-input:checked {
          background-color: #cd2c22;
          border-color: #cd2c22;
        }

        .form-label i {
          color: #cd2c22;
        }

        .btn-primary {
          background-color: #cd2c22;
          border-color: #cd2c22;
          color: white;
        }

        .btn-primary:hover {
          background-color: #b30000;
          border-color: #b30000;
        }

        .btn-outline-primary {
          color: #cd2c22;
          border-color: #cd2c22;
        }

        .btn-outline-primary:hover {
          background-color: #cd2c22;
          border-color: #cd2c22;
          color: white;
        }

        /* Option styling within the dropdown (where supported) */
        .form-select option:hover {
          background-color: #cd2c22;
          color: white;
        }

        .text-primary {
          color: #cd2c22 !important;
        }

        .journey-line .dot {
          background: #cd2c22;
        }

        /* Add focus state for form elements */
        .form-control:focus,
        .form-select:focus {
          border-color: #cd2c22;
          box-shadow: 0 0 0 0.25rem rgba(210, 0, 0, 0.25);
        }

        .empty-state-icon {
          width: 120px;
          height: 120px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff0f0;
          border-radius: 50%;
        }

        .empty-state-icon i {
          color: #cd2c22;
        }

        .btn.mx-auto {
          width: fit-content;
        }

        /* Modal styles */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1055;
          outline: 0;
          overflow-x: hidden;
          overflow-y: auto;
        }

        .modal.show {
          display: block;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .modal-dialog {
          position: relative;
          width: auto;
          margin: 1.75rem auto;
          pointer-events: all;
          transform: translate(0, 0);
          transition: transform 0.3s ease-out;
        }

        .modal-content {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          background-color: #fff;
          border: none;
          border-radius: 12px;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          outline: 0;
        }

        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #000;
          opacity: 0.5;
          z-index: 1054;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-bottom: 1px dashed #dee2e6;
        }

        .modal-body {
          position: relative;
          flex: 1 1 auto;
          padding: 1.5rem;
          max-height: calc(100vh - 210px);
          overflow-y: auto;
        }

        .btn-close {
          padding: 0.5rem;
          margin: -0.5rem -0.5rem -0.5rem auto;
        }

        .btn-close:hover {
          opacity: 0.75;
        }

        /* Prevent body scroll when modal is open */
        :global(body.modal-open) {
          overflow: hidden;
        }

        /* Media query for mobile devices */
        @media (max-width: 576px) {
          .modal-dialog {
            margin: 0.5rem;
          }
        }

        .end-3 {
          right: 1rem;
        }

        .form-control-lg {
          height: 50px;
          font-size: 1rem;
        }

        .text-success {
          color: #28a745 !important;
        }

        a.text-decoration-none {
          color: #cd2c22;
        }

        a.text-decoration-none:hover {
          color: #b30000;
          text-decoration: underline !important;
        }

        .gap-3 {
          gap: 1rem !important;
        }

        .irctc-logo-container {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          border-radius: 12px;
          padding: 10px;
        }

        .irctc-logo {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .form-control-lg {
          height: 48px;
          font-size: 0.95rem;
          border-radius: 8px;
        }

        .input-group .form-control {
          border-right: 0;
        }

        .input-group-text {
          border-left: 0;
          background-color: transparent;
        }

        .badge {
          font-weight: 500;
          padding: 0.5rem 0.75rem;
        }

        .bg-success-subtle {
          background-color: #d1e7dd !important;
        }

        .alert-info {
          background-color: #f8f9fa;
          border: 1px solid #e9ecef;
          color: #6c757d;
        }

        .text-primary {
          color: #cd2c22 !important;
        }

        .text-primary:hover {
          color: #b30000 !important;
        }

        .btn-link {
          text-decoration: none;
          color: #6c757d;
        }

        .btn-link:hover {
          color: #343a40;
        }

        .text-blue {
          color: #4F46E5 !important;  /* A good accessible blue color */
        }

        .text-blue:hover {
          color: #4338CA  !important;  /* Slightly darker blue for hover state */
          text-decoration: underline !important;
        }

        /* Custom select styling */
        .custom-select {
          position: relative;
          width: 100%;
        }

        .custom-select select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          width: 100%;
          padding: 12px;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          background: #fff;
          cursor: pointer;
        }

        /* Style for select options */
        select option {
          margin: 8px;
          padding: 16px;
          border-radius: 8px;
          background-color: #fff;
          color: #333;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        /* Custom styling for select dropdowns */
        select.card-select {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #dee2e6;
          background-color: white;
          cursor: pointer;
          font-size: 0.9rem;
        }

        /* Styling for option elements */
        select.card-select option {
          padding: 16px;
          margin: 4px;
          border-radius: 8px;
          background-color: white;
          border: 1px solid #f0f0f0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        select.card-select option:hover,
        select.card-select option:focus,
        select.card-select option:active,
        select.card-select option:checked {
          background-color: #fff0f0 !important;
          color: #cd2c22;
        }

        /* Add arrow icon */
        .select-wrapper {
          position: relative;
        }

        .select-wrapper::after {
          content: '\\f107';
          font-family: 'Font Awesome 5 Free';
          font-weight: 900;
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #6c757d;
        }

        /* Style for disabled options */
        select.card-select option:disabled {
          background-color: #f8f9fa;
          color: #6c757d;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default TrainBookingDetails;