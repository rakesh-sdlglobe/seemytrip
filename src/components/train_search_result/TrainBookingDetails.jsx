import React, { useState, useEffect } from 'react';
import { Edit2, PlusCircle } from 'lucide-react';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TrainBookingDetails = () => {
const location = useLocation();
const trainData = location.state?.trainData;
const navigate = useNavigate();
  // Add max travelers constant
const MAX_TRAVELERS = 6;

// State management
const [travelers, setTravelers] = useState([]);
const [currentTraveler, setCurrentTraveler] = useState({
  name: '',
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

  // Train details object
  const trainDetails = {
    trainNumber: trainData?.trainNumber ||'11006',
    trainName: trainData?.trainName ||'CHALUKYA EXP',
    from: trainData?.startStation ||'Krishnarajapuram',
    to: trainData?.endStation ||'Mumbai Dadar Central',
    class: trainData?.seatClass ||'Second AC • General',
    departureTime: trainData?.departureTime ||'04:40 AM',
    departureDate: 'Thu, 14 Nov 24',
    arrivalTime: trainData?.arrival_time ||'05:35 AM',
    arrivalDate: 'Fri, 15 Nov 24',
    duration: trainData?.duration ||'24h 55m',
  };

  // Handler functions
  const handleSave = () => {
    if (travelers.length >= MAX_TRAVELERS && editingTravelerIndex === null) {
      toast.error('Maximum limit of 6 travelers reached.');
      return;
    }
    
    if (validateForm()) {
      if (editingTravelerIndex !== null) {
        // Update existing traveler
        const updatedTravelers = [...travelers];
        updatedTravelers[editingTravelerIndex] = currentTraveler;
        setTravelers(updatedTravelers);
        toast.success('Traveler updated successfully');
      } else {
        // Add new traveler
        setTravelers([...travelers, currentTraveler]);
        toast.success('Traveler added successfully');
      }

      // Reset form and close modal
      setCurrentTraveler({
        name: '',
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
    
    if (!currentTraveler.name.trim()) {
      errors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(currentTraveler.name.trim())) {
      errors.name = 'Name should only contain letters and spaces';
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
    setCurrentTraveler(travelers[index]);
    setEditingTravelerIndex(index); // Set the index of traveler being edited
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
      name: '',
      age: '',
      gender: 'male',
      berth: '',
      country: '',
    });
    setEditingTravelerIndex(null);
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
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="name" className="form-label">Full Name*</label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      value={currentTraveler.name}
                      onChange={(e) => setCurrentTraveler({ ...currentTraveler, name: e.target.value })}
                      required
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
                      onChange={(e) => {
                        const newAge = e.target.value;
                        setCurrentTraveler({ 
                          ...currentTraveler, 
                          age: newAge,
                          // Clear berth and country if age is below 5
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
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label htmlFor="berth" className="form-label">Berth Preference*</label>
                      <select
                        id="berth"
                        className="form-select"
                        value={currentTraveler.berth}
                        style={{ height: '58px' }}
                        onChange={(e) => setCurrentTraveler({ ...currentTraveler, berth: e.target.value })}
                        required
                      >
                        <option value="">Select berth preference</option>
                        <option value="lower">Lower</option>
                        <option value="upper">Upper</option>
                        <option value="middle">Middle</option>
                        <option value="side-lower">Side Lower</option>
                        <option value="side-upper">Side Upper</option>
                        <option value="no-preference">No Preference</option>
                      </select>
                      {formErrors.berth && <div className="text-danger small mt-1">{formErrors.berth}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="country" className="form-label">Country*</label>
                      <select
                        id="country"
                        className="form-select"
                        value={currentTraveler.country}
                        onChange={(e) => setCurrentTraveler({ ...currentTraveler, country: e.target.value })}
                        required
                        style={{ height: '58px' }}
                      >
                        <option value="">Select country</option>
                        <option value="india">India</option>
                        <option value="other">Other</option>
                      </select>
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
        <h4 className="fs-5 fw-bold mb-1">{trainDetails.trainName}</h4>
        <ul className="row g-2 p-0">
          <li className="col-auto">
            <p className="text-muted-2 text-md">
              {trainDetails.from} → {trainDetails.to}
            </p>
          </li>
        </ul>

        <div className="position-relative mt-3">
          <div className="d-flex flex-wrap align-items-center">
            <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
              <div className="export-icon text-muted-2">
                <i className="fa-solid fa-chair" />
              </div>
              <div className="export ps-2">
                <span className="mb-0 text-muted-2 fw-semibold me-1">AC</span>
                <span className="mb-0 text-muted-2 text-md">Class</span>
              </div>
            </div>
            <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
              <div className="export-icon text-muted-2">
                <i className="fa-solid fa-clock" />
              </div>
              <div className="export ps-2">
                <span className="mb-0 text-muted-2 fw-semibold me-1">{trainDetails.duration}</span>
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
              <p className="mb-0 fw-bold">{trainDetails.departureTime}</p>
              <p className="text-muted small mb-0">{trainDetails.departureDate}</p>
              <p className="text-muted small">{trainDetails.from}</p>
            </div>
            <div className="text-center text-muted small">
              <p className="mb-0">{trainDetails.duration}</p>
              <div className="journey-line">
                <span className="dot start"></span>
                <span className="line"></span>
                <span className="dot end"></span>
              </div>
            </div>
            <div className="text-end">
              <p className="mb-0 fw-bold">{trainDetails.arrivalTime}</p>
              <p className="text-muted small mb-0">{trainDetails.arrivalDate}</p>
              <p className="text-muted small">{trainDetails.to}</p>
            </div>
          </div>

          {/* Add Boarding Station dropdown */}
          <div className="mb-3">
            <label htmlFor="boardingStation" className="form-label">Boarding Station*</label>
            <select className="form-select">
              <option value="">Select boarding point</option>
              <option value="krishnarajapuram">Krishnarajapuram (04:40 AM)</option>
              <option value="bangalore">Bangalore City Jn (05:15 AM)</option>
              <option value="yesvantpur">Yesvantpur Jn (05:45 AM)</option>
            </select>
            <small className="text-muted">
              Select the station from where you will board the train.
            </small>
          </div>
        </div>

        {/* Price Summary */}
        <div className="price-summary">
          <h5 className="mb-3">Price Details</h5>
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between mb-2">
              <span>Base Fare ({selectedTravelers.length} traveler{selectedTravelers.length !== 1 ? 's' : ''})</span>
              <span>₹{1200 * (selectedTravelers.length || 1)}</span>
            </li>
            <li className="d-flex justify-content-between mb-2">
              <span>Taxes & Fees</span>
              <span>₹{150 * (selectedTravelers.length || 1)}</span>
            </li>
            <li className="d-flex justify-content-between border-top pt-2 mt-2">
              <strong>Total Amount</strong>
              <strong>₹{(1350 * (selectedTravelers.length || 1))}</strong>
            </li>
          </ul>

          <Link onClick={handleProceedToPayment} className="btn btn-primary w-100 mt-3">
            Proceed to Payment
          </Link>
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
      <label htmlFor="irctcUsername" className="form-label">
        <i className="fa-solid fa-user me-2"></i>
        IRCTC Username*
      </label>
      <input
        type="text"
        className="form-control"
        id="irctcUsername"
        value={contactDetails.irctcUsername}
        onChange={(e) => setContactDetails({ ...contactDetails, irctcUsername: e.target.value })}
        style={{ fontSize: '0.875rem', padding: '0.5rem' }} // Reduced size
      />
      <small className="text-muted">
        The IRCTC ID and Password will be required after payment to complete your booking.
      </small>
    </div>

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
        style={{ fontSize: '0.875rem', padding: '0.5rem' }} // Reduced size
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
        style={{ fontSize: '0.875rem', padding: '0.5rem' }} // Reduced size
        required
      />
      {errors.phone && <small className="text-danger">{errors.phone}</small>}
    </div>

    <div className="col-xl-6 col-md-6 col-sm-12">
      <label htmlFor="state" className="form-label">
        <i className="fa-solid fa-location-dot me-2"></i>
        State*
      </label>
      <select
        className="form-select"
        id="state"
        value={contactDetails.state}
        onChange={(e) => setContactDetails({ ...contactDetails, state: e.target.value })}
        style={{ fontSize: '0.875rem', padding: '1rem' }} // Reduced size
      >
        <option value="">Select State</option>
        <option value="maharashtra">Maharashtra</option>
        <option value="karnataka">Karnataka</option>
        {/* Add more states as needed */}
      </select>
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
            {/* Left Column - Traveler Form */}
            <div className="col-xl-8 col-lg-8 col-md-12">
              {renderSavedTravelers()}
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
          background: #d20000;
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
          border: 1px solid #d20000 !important;
        }

        .form-check-input:checked {
          background-color: #d20000;
          border-color: #d20000;
        }

        .form-label i {
          color: #d20000;
        }

        .btn-primary {
          background-color: #d20000;
          border-color: #d20000;
          color: white;
        }

        .btn-primary:hover {
          background-color: #b30000;
          border-color: #b30000;
        }

        .btn-outline-primary {
          color: #d20000;
          border-color: #d20000;
        }

        .btn-outline-primary:hover {
          background-color: #d20000;
          border-color: #d20000;
          color: white;
        }

        /* Option styling within the dropdown (where supported) */
        .form-select option:hover {
          background-color: #d20000;
          color: white;
        }

        .text-primary {
          color: #d20000 !important;
        }

        .journey-line .dot {
          background: #d20000;
        }

        /* Add focus state for form elements */
        .form-control:focus,
        .form-select:focus {
          border-color: #d20000;
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
          color: #d20000;
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
      `}</style>
    </div>
  );
};

export default TrainBookingDetails;