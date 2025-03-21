import React, { useState, useEffect, useRef } from 'react';
import { Edit2, PlusCircle } from 'lucide-react';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IRCTC_Logo } from '../../assets/images';
import { selectCountryList, selectStations, selectTrainBoardingStations } from '../../store/Selectors/filterSelectors';
import { fetchCountryList, fetchIRCTCForgotDetails, fetchTrainBoardingStations } from '../../store/Actions/filterActions';
import { fetchIRCTCusername } from '../../store/Actions/filterActions';
import { selectIRCTCUsernameStatus } from '../../store/Selectors/filterSelectors';
import { useDispatch, useSelector } from "react-redux";
import { fetchTrainSchedule } from '../../store/Actions/filterActions';
import { selectTrainsSchedule } from '../../store/Selectors/filterSelectors';
import { selectIRCTCForgotDetails } from '../../store/Selectors/filterSelectors';


import {
  addTraveler,
  fetchTravelers,
  getUserProfile,
  removeTraveler,
} from "../../store/Actions/userActions";
import {
  selectTravelers,
  selectTravelerLoading,
  selectIRCTCusername,
} from "../../store/Selectors/userSelector";
import { statedata } from '../../store/Selectors/emailSelector';

const TrainBookingDetails = () => {

  const MAX_TRAVELERS = 6;
  const location = useLocation();
  const trainData = location.state?.trainData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stationsList = useSelector(selectStations);
  const irctcUsernameStatus = useSelector(selectIRCTCUsernameStatus);
  console.log("===> IRCTC username status is ",irctcUsernameStatus)
  const IRCTCUsernamefromDB  = useSelector(selectIRCTCusername) || "";
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const boardingStations = useSelector(selectTrainBoardingStations);
  const boardingStationDetails = useSelector(selectTrainsSchedule);  
  const forgotIRCTCdetails = useSelector(selectIRCTCForgotDetails);
  console.log("===>  forgotIRCTCdetails is ",forgotIRCTCdetails);
  
  const [travelers, setTravelers] = useState([]);
  const [currentTraveler, setCurrentTraveler] = useState({
    fullName: '',
    age: '',
    gender: '',
    berth: '',
    country: 'IN', // Set default country to India
    berthRequired: false
  });
  const [selectedTravelers, setSelectedTravelers] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [errors, setErrors] = useState({ email: '', phone: '' });
  const [irctcUser, setIrctcUser] = useState('');

  const [contactDetails, setContactDetails] = useState({
    email: '',
    phone: '',
    state: '',
  });
  const [showTravelerModal, setShowTravelerModal] = useState(false);
  const [editingTravelerIndex, setEditingTravelerIndex] = useState(null);
  const [showIRCTCPopup, setShowIRCTCPopup] = useState(false);
  const [showForgotUsernamePopup, setShowForgotUsernamePopup] = useState(false);
  const [forgotUsernameForm, setForgotUsernameForm] = useState({
    contact: '',
    dob: ''
  });
  const [forgotUsernameError, setForgotUsernameError] = useState('');
  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);
  const [forgotPasswordForm, setForgotPasswordForm] = useState({
    username: '',
    mobile: ''
  });
  const [forgotPasswordError, setForgotPasswordError] = useState({
    username: '',
    mobile: ''
  });
  const savedTravelers = useSelector(selectTravelers) || [];
  const loading = useSelector(selectTravelerLoading);
  const [selectedBoardingStation, setSelectedBoardingStation] = useState('');
  const countryList = useSelector(selectCountryList);

  // Create a localStorage key based on train number and date to make it unique per trip
  const getBoardingStationStorageKey = () => {
    if (trainData) {
      return `boarding_station_${trainData.trainNumber}_${trainData.journeyDate.replace(/\s/g, '')}`;
    }
    return 'boarding_station';
  };

  useEffect(() => {
    dispatch(fetchTrainBoardingStations(trainData?.trainNumber, trainData?.journeyDate, trainData?.fromStnCode, trainData?.toStnCode,trainData?.classinfo.enqClass));
    dispatch(fetchTrainSchedule(trainData?.trainNumber));
  },[
    dispatch, 
    trainData?.trainNumber, 
    trainData?.journeyDate, 
    trainData?.fromStnCode, 
    trainData?.toStnCode, 
    trainData?.classinfo?.enqClass
  ]);
  
  useEffect(() => {
    dispatch(fetchTravelers());
    dispatch(fetchCountryList())
    dispatch(getUserProfile())
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  useEffect(() => {
    if (IRCTCUsernamefromDB) {
      setIrctcUser(IRCTCUsernamefromDB);
    }
  }, [IRCTCUsernamefromDB]);

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

  // Add console logging for debugging country data
  useEffect(() => {
    if (countryList.length > 0) {
      // Find India in country list for consistency
      const india = countryList.find(c => c.countryCode === "IN");
      if (india) {
        console.log("Default country (India):", india);
      }
      
      // Log the format of country objects for reference
      console.log("Country data format example:", countryList[0]);
    }
  }, [countryList]);

  // Handler functions
  const handleSave = () => {
    if (travelers.length >= MAX_TRAVELERS && editingTravelerIndex === null) {
      toast.error('Maximum limit of 6 travelers reached.');
      return;
    }
    
    if (validateForm()) {
      // Log the country value for debugging
      console.log("Saving traveler with country code:", currentTraveler.country);
      
      const travelerData = {
        passengerName: currentTraveler.fullName.trim(),
        passengerAge: currentTraveler.age,
        passengerGender: currentTraveler.gender,
        passengerBerthChoice: currentTraveler.berth,
        country: currentTraveler.country, // This is the countryCode (e.g., "IN")
        passengerBedrollChoice: currentTraveler.berthRequired,
        passengerNationality: currentTraveler.country || "IN", // Use selected country code or default to India
      };

      if (editingTravelerIndex !== null) {
        console.log("traveler data from 186 :== ",travelerData, "came for edit")
        dispatch(addTraveler({ ...travelerData, passengerId: editingTravelerIndex }))
          .then(() => {
            dispatch(fetchTravelers()); // Fetch updated list after adding
            toast.success('Traveler updated successfully');
            // Make sure the edited traveler is selected
            if (!selectedTravelers.includes(editingTravelerIndex)) {
              setSelectedTravelers(prev => [...prev, editingTravelerIndex]);
            }
            handleModalClose();
          })
          .catch((error) => {
            toast.error('Failed to update traveler');
          });
      } else {
        console.log("traveler data from 186 :== ",travelerData, "came for add")
        dispatch(addTraveler(travelerData))
          .then((response) => {
            // Get the new traveler ID from the response if available
            const newTravelerId = response?.payload?.passengerId;
            
            dispatch(fetchTravelers()) // Fetch updated list after adding
              .then(() => {
                // If we have the ID from the response, use it directly
                if (newTravelerId) {
                  // Select ONLY the newly added traveler
                  setSelectedTravelers([newTravelerId]);
                } else {
                  // Fallback: try to get the latest traveler
                  const latestTravelers = savedTravelers.length > 0 ? [...savedTravelers] : [];
                  if (latestTravelers.length > 0) {
                    // Find the latest added traveler (usually the last one with the highest ID)
                    const latestTraveler = latestTravelers[latestTravelers.length - 1];
                    if (latestTraveler && latestTraveler.passengerId) {
                      // Select ONLY the newly added traveler
                      setSelectedTravelers([latestTraveler.passengerId]);
                    }
                  }
                }
                toast.success('Traveler added successfully');
                handleModalClose();
              });
          })
          .catch((error) => {
            toast.error('Failed to add traveler');
          });
      }
    }
  };

  //validate before payment
  const validateBeforePayment = () => {
    if(selectedTravelers.length === 0){
      toast.error('Please select at least one traveler')
      return false;
    }
    if(!selectedBoardingStation) {
      toast.error('Please select a boarding station')
      return false;
    }
    if(!irctcUser || !contactDetails.email || !contactDetails.phone || !contactDetails.state){
      toast.error('Please fill all the required fields')
      return false;
    }
    
    // Log selected values for debugging
    console.log('Proceeding to payment with:');
    console.log('Selected boarding station code:', selectedBoardingStation);
    
    // Find and log station name
    const selectedStation = boardingStations?.find(station => {
      const { code } = parseStationNameCode(station.stnNameCode);
      return code === selectedBoardingStation;
    });
    
    if (selectedStation) {
      const { name } = parseStationNameCode(selectedStation.stnNameCode);
      console.log('Boarding station name:', name);
    }
    
    console.log('Selected travelers:', selectedTravelers);
    console.log('IRCTC Username:', irctcUser);
    console.log('Contact details:', contactDetails);
    
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
    
    if (!currentTraveler.fullName.trim()) {
      errors.fullName = 'Full name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(currentTraveler.fullName.trim())) {
      errors.fullName = 'Full name should only contain letters';
    }

    if (!currentTraveler.age) {
      errors.age = 'Age is required';
    }
    
    // Only validate berth and country for age >= 12 or if berth is required for age 5-11
    if (!currentTraveler.age || 
        parseInt(currentTraveler.age) >= 12 || 
        (parseInt(currentTraveler.age) >= 5 && parseInt(currentTraveler.age) <= 11 && currentTraveler.berthRequired)) {
      if (!currentTraveler.berth) {
        errors.berth = 'Berth preference is required';
      }
      // Country validation not needed since we have a default
      if (!currentTraveler.country) {
        errors.country = 'Country is required';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Add delete handler
  const handleDeleteTraveler = (id) => {
    if (window.confirm('Are you sure you want to remove this traveler?')) {
      dispatch(removeTraveler(id))
        .then(() => {
          dispatch(fetchTravelers()); // Fetch updated list after deletion
          toast.success('Traveler deleted successfully');
        })
        .catch(error => {
          toast.error('Failed to delete traveler');
        });
    }
  };

  // Update handleEditTraveler function
  const handleEditTraveler = (traveler) => {
    console.log("traveler from 274 :== ",traveler)
    setCurrentTraveler({
      fullName: traveler.passengerName,
      age: traveler.passengerAge,
      gender: traveler.passengerGender || '',
      berth: traveler.passengerBerthChoice || '',
      country: traveler.passengerNationality || '',
      berthRequired: traveler.passengerBedrollChoice || false,
    });
    setEditingTravelerIndex(traveler.passengerId);
    setShowTravelerModal(true);
    toast.info('Edit traveler details');
  };

  // Add this function near other handler functions
  const handleTravelerSelection = (id) => {
    setSelectedTravelers(prev => {
      if (prev.includes(id)) {
        return prev.filter(i => i !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Update modal close handler
  const handleModalClose = () => {
    setShowTravelerModal(false);
    setCurrentTraveler({
      fullName: '',
      age: '',
      gender: '',
      berth: '',
      country: 'IN', // Set default country to India
      berthRequired: false
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

  const setIRCTCUserDetails = (forgotUsernameForm) => {
      const DOB = forgotUsernameForm.dob;
      console.log(DOB);
      const formattedDOB = DOB?.split('-').join('');
      console.log(formattedDOB);

      const contact = forgotUsernameForm.contact;
      console.log(contact);

      let email = "";
      let mobile = ""; 

      if (contact.includes('@')) {
        console.log("User provided an Email:", contact);
        email = contact ;
        
      } else if (/^\d{10}$/.test(contact)) {
          console.log("User provided a Mobile Number:", contact);
          mobile = contact ;
      }

      console.log("Username is ", irctcUser);

      return {
        userName : irctcUser,
        dob : formattedDOB,
        email,
        mobile
      }
  }

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

    console.log("===> 418 :== ",forgotUsernameForm);

    const resultantDetails = setIRCTCUserDetails(forgotUsernameForm);
    console.log("The resultant detials are ===>",resultantDetails);
    
    resultantDetails.IRCTC_req_type = 'U'; 
    resultantDetails.otpType = resultantDetails.email ? 'E' : resultantDetails.mobile ? 'M' : ''; 

    console.log("456 The resultant detials are ===>",resultantDetails);
    
    dispatch(fetchIRCTCForgotDetails(resultantDetails));
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

  // Add verification handler
  const handleVerifyUsername = async () => {
    if (!irctcUser) {
      toast.error('Please enter IRCTC username');
      return;
    }

    setIsVerifying(true);
    try {
      await dispatch(fetchIRCTCusername(irctcUser));
    } catch (error) {
      console.error('Error verifying username:', error);
      toast.error('Failed to verify username');
      setIsVerifying(false);
    }
  };

  // Add effect to handle API response
  useEffect(() => {
    if (isVerifying && irctcUsernameStatus) {
      setIsVerifying(false);
      if (irctcUsernameStatus.success === irctcUser) {
        setIsVerified(true);
        setIsEditing(false);
        // Save to contact details
        setContactDetails(prev => ({ ...prev, irctcUsername: irctcUser }));
        toast.success('IRCTC username verified successfully');
      } else if (irctcUsernameStatus.error) {
        setIsVerified(false);
        toast.error(irctcUsernameStatus.error || 'Invalid IRCTC username');
      }
    }
  }, [irctcUsernameStatus, irctcUser]);

  // Load IRCTC username from DB when available
  useEffect(() => {
    if (IRCTCUsernamefromDB && !irctcUser) {
      setIrctcUser(IRCTCUsernamefromDB);
      setIsVerified(true);
      setContactDetails(prev => ({ ...prev, irctcUsername: IRCTCUsernamefromDB }));
    }
  }, [IRCTCUsernamefromDB]);

  const handleEditUsername = () => {
    setIsEditing(true);
    setIsVerified(false);
  };

  // Add boarding station change handler
  const handleBoardingStationChange = (e) => {
    const stationCode = e.target.value;
    setSelectedBoardingStation(stationCode);
    // Save to localStorage
    localStorage.setItem(getBoardingStationStorageKey(), stationCode);
    
    // Find the station name for better logging
    const selectedStation = boardingStations?.find(station => {
      const { code } = parseStationNameCode(station.stnNameCode);
      return code === stationCode;
    });
    
    if (selectedStation) {
      const { name, code } = parseStationNameCode(selectedStation.stnNameCode);
      console.log(`Boarding station selected: ${name} (${code})`);
    }
  };

  // Load selected boarding station from localStorage on component mount
  useEffect(() => {
    if (boardingStations && boardingStations.length > 0) {
      const savedStation = localStorage.getItem(getBoardingStationStorageKey());
      if (savedStation) {
        // Verify that the saved station is still in the available stations list
        const isValid = boardingStations.some(station => {
          const { code } = parseStationNameCode(station.stnNameCode);
          return code === savedStation;
        });
        
        if (isValid) {
          setSelectedBoardingStation(savedStation);
          console.log(`Loaded saved boarding station: ${savedStation}`);
        } else {
          // If the saved station is no longer valid, clear it
          localStorage.removeItem(getBoardingStationStorageKey());
        }
      }
    }
  }, [boardingStations]);

  // Add function to get country name from countryCode
  const getCountryNameByCode = (code) => {
    if (!code) return '';
    const country = countryList.find(c => c.countryCode === code);
    return country ? country.country : '';
  };

  // Helper function to extract station name and code from stnNameCode
  const parseStationNameCode = (stnNameCode) => {
    const [name, code] = stnNameCode.split(' - ');
    return { name, code };
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

  const modalRef = useRef(null);

  const irctcModalRef = useRef(null);
  const forgotUsernameModalRef = useRef(null);
  const forgotPasswordModalRef = useRef(null)


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleModalClose();
      }
      if (irctcModalRef.current && !irctcModalRef.current.contains(event.target)) {
        setShowIRCTCPopup(false);
      }
      if (forgotUsernameModalRef.current && !forgotUsernameModalRef.current.contains(event.target)) {
        setShowForgotUsernamePopup(false);
        setForgotUsernameError('');
      }
      if (forgotPasswordModalRef.current && !forgotPasswordModalRef.current.contains(event.target)) {
        setShowForgotPasswordPopup(false);
        setForgotPasswordError({});
        setForgotPasswordForm({ username: '', mobile: '' });
      }
      
    };

    if (showTravelerModal || showIRCTCPopup || showForgotUsernamePopup || showForgotPasswordPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTravelerModal, showIRCTCPopup, showForgotUsernamePopup, showForgotPasswordPopup]);

  const renderTravelerModal = () => (
    <>
      <div 
        className={`modal ${showTravelerModal ? 'show' : ''}`} 
        style={{ display: showTravelerModal ? 'block' : 'none' }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content" ref={modalRef}>
            <div className="modal-header">
              <h5 className="modal-title">
                {editingTravelerIndex !== null ? `Edit Traveler: ${currentTraveler.fullName}` : 'Add Traveler'}
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

                <div className="row ">
                  {/* Full Name */}
                  <div className="col-md-6 mb-3 ps-4">
                    <label htmlFor="fullName" className="form-label">Full Name*</label>
                    <input
                      id="fullName"
                      type="text"
                      className="form-control"
                      value={currentTraveler.fullName}
                      onChange={(e) => setCurrentTraveler({ ...currentTraveler, fullName: e.target.value })}
                      required
                      maxLength={16}
                    />
                    {formErrors.fullName && <div className="text-danger small mt-1">{formErrors.fullName}</div>}
                  </div>

                  {/* Age */}
                  <div className="col-md-3 mb-3">
                    <label htmlFor="age" className="form-label">Age*</label>
                    <input
                      id="age"
                      type="text"
                      maxLength={2}
                      className="form-control"
                      value={currentTraveler.age}
                      onChange={(e) => {
                        const newAge = e.target.value;
                        setCurrentTraveler({ 
                          ...currentTraveler, 
                          age: newAge,
                          ...(parseInt(newAge) < 5 ? { berth: '', country: '', berthRequired: false } : {}),
                          ...(parseInt(newAge) >= 5 && parseInt(newAge) <= 11 ? { berthRequired: false, berth: '' } : {})
                        });
                      }}
                      required
                    />
                    {formErrors.age && <div className="text-danger small mt-1">{formErrors.age}</div>}
                  </div>

                  {/* Gender Dropdown (Styled Consistently) */}
                  <div className="col-md-3 mb-3">
                    <label htmlFor="gender" className="form-label">Gender*</label>
                    <select
                      className="form-control"
                      id="gender"
                      name="gender"
                      required
                      value={currentTraveler.gender}
                      onChange={(e) => setCurrentTraveler({ ...currentTraveler, gender: e.target.value })}
                    >
                      <option value="" disabled hidden >Select Gender</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                      <option value="T">Transgender</option>
                    </select>
                  </div>
                </div>

                {/* Show warning message for under 5 */}
                {currentTraveler.age && parseInt(currentTraveler.age) < 5 && (
                  <div className="alert alert-success mb-4 font-small" style={{ fontSize:"0.8rem" }}>
                    Children below 5 years will not appear on the ticket as they can travel free of charge (without berth). Please carry age proof in the train.
                  </div>
                )}

                {/* Show berth requirement checkbox for age 5-11 */}
                {currentTraveler.age && parseInt(currentTraveler.age) >= 5 && parseInt(currentTraveler.age) <= 11 && (
                  <div className="mb-4 py-2 ms-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="berthRequired"
                        checked={currentTraveler.berthRequired}
                        onChange={(e) => setCurrentTraveler({ 
                          ...currentTraveler, 
                          berthRequired: e.target.checked,
                          berth: '', // Clear berth when unchecked
                          country: e.target.checked ? currentTraveler.country : '' // Clear country when unchecked
                        })}
                      />
                      <label className="form-check-label" htmlFor="berthRequired">
                        Berth Required { currentTraveler.berthRequired ? '(Full Ticket)' : '(Half Ticket)' }
                      </label>
                      {!currentTraveler.berthRequired && 
                        <div className="text-muted small mt-1">
                          No berth alloted and half adult fare charged if not opted
                        </div>
                      }
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
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Travelers</h4>
        {savedTravelers.length < MAX_TRAVELERS && (
          <button 
            className="btn btn-primary d-flex align-items-center gap-2 mb-3"
            onClick={() => setShowTravelerModal(true)}
          >
            <PlusCircle size={20} />
            Add Traveler
          </button>
        )}
      </div>

      {savedTravelers.length === 0 ? (
        <div className="text-center">
          <div className="empty-state-icon">
            <i className="fa-solid fa-users-slash fa-4x text-muted"></i>
          </div>
          <h5 className="">No Travelers Added</h5>
          <p className="text-muted">
            Add travelers to proceed with your booking. You can add up to 6 travelers.
          </p>
        </div>
      ) : (
        <div className="row g-3">
          {savedTravelers.map((traveler, index) => (
            <div key={traveler.passengerId} className="col-md-6">
              <div className={`card shadow-sm ${selectedTravelers.includes(traveler.passengerId) ? 'border-primary' : ''}`}>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <div className="form-check me-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={selectedTravelers.includes(traveler.passengerId)}
                        onChange={() => handleTravelerSelection(traveler.passengerId)}
                        id={`traveler-${traveler.passengerId}`}
                      />
                    </div>
                    <p className="fw-bold mb-0 flex-grow-1">
                      {traveler.passengerName} 
                    </p>
                    <div>
                      <button 
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEditTraveler(traveler)}
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteTraveler(traveler.passengerId)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                  <p className="text-muted small mb-0">
                    {traveler.passengerAge} years • {traveler.passengerGender === "M" ? "Male" : traveler.passengerGender === "F" ? "Female" : "Others"}
                    {parseInt(traveler.passengerAge) < 5 ? ' • No berth (under 5)' : 
                      parseInt(traveler.passengerAge) >= 5 && parseInt(traveler.passengerAge) <= 11 ? 
                      (traveler.passengerBedrollChoice ? ` • ${traveler.passengerBerthChoice} berth` : ' • No berth (child fare)') :
                      ` • ${traveler.passengerBerthChoice} berth`}
                    {traveler.country && traveler.country !== "IN" && ` • ${getCountryNameByCode(traveler.country)}`}
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
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h4 className="mb-0">Booking Summary</h4>
          <Link to="/Train-list-01" className="btn btn-outline-primary btn-sm">
            <Edit2 size={16} className="me-2" />
            Edit
          </Link>
        </div>

        {/* Train Details Card */}
        <div className="card-box list-layout-block border br-dashed rounded-3 p-3">
  <div className="row">
    <div className="col">
      <div className="listLayout_midCaps">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <b className="fs-8 fw-bold text-muted"># {trainData?.trainNumber}</b>
          <p className="text-muted-2 text-md text-bold" style={{ border: '1px solid rgb(220, 218, 218)', padding: '5px 10px 1px', borderRadius: '5px' }}>
            {/* {getStationName(boardingStationDetails?.stationFrom)} → {getStationName(boardingStationDetails?.stationTo)} */}
            {boardingStationDetails?.stationList &&
          boardingStationDetails.stationList.length > 0 &&
          `${boardingStationDetails.stationList[0].stationName} → ${
            boardingStationDetails.stationList[boardingStationDetails.stationList.length - 1].stationName
          }`}
          </p>
        </div>
        <h4 className="fs-5 fw-bold mb-1 text-muted">{trainData?.trainName}</h4>


        <div className="position-relative">
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
                <span className="mb-0 text-muted-2 fw-semibold me-1">{trainData?.duration}</span>
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
        <div className="journey-details">
          <h5 className="mb-3">Journey Details</h5>
          <div className="d-flex justify-content-between mb-3 p-3 bg-light rounded">
            <div>
              <p className="mb-0 fw-bold">{trainData?.departureTime}</p>
              <p className="text-muted small mb-0">{trainData?.departureDate}</p>
              <p className="text-muted small">{trainData?.fromStnName}</p>
            </div>
            <div className="text-center text-muted small">
              <p className="mb-0">{trainData?.duration}</p>
              <div className="journey-line">
                <span className="dot start"></span>
                <span className="line"></span>
                <span className="dot end"></span>
              </div>
            </div>
            <div className="text-end">
              <p className="mb-0 fw-bold">{trainData?.arrivalTime}</p>
              <p className="text-muted small mb-0">{trainData?.arrivalDate}</p>
              <p className="text-muted small">{trainData?.toStnName}</p>
            </div>
          </div>

          {/* Add Boarding Station dropdown
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
          </div> */}
          {renderBoardingStationDropdown()}
        </div>

        {/* Price Summary .*/}
        <div className="price-summary">
          <h5 className="mb-3">Price Details</h5>
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between mb-2">
              <span>Base Fare ({selectedTravelers.length} traveler{selectedTravelers.length !== 1 ? 's' : ''})</span>
              <span>₹{trainData?.classinfo.baseFare * (selectedTravelers.length || 1)}</span>
            </li>
            <li className="d-flex justify-content-between mb-2">
              <span>Taxes & Fees</span>
              <span>₹{(trainData?.classinfo.totalFare - trainData?.classinfo.baseFare) * (selectedTravelers.length || 1)}</span>
            </li>
            <li className="d-flex justify-content-between border-top pt-2 mt-2">
              <strong>Total Amount</strong>
              <strong>₹{(trainData?.classinfo.totalFare * (selectedTravelers.length || 1))}</strong>
            </li>
          </ul>

          <Link onClick={handleProceedToPayment} className="btn btn-primary w-100 mt-3">
            Proceed to Payment
          </Link>
        </div>
      </div>
    </div>
  );

  // Update the IRCTC Details render function
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
          <div className="input-group" style={{ position: 'relative' }}>
            <input
              type="text"
              className={`form-control form-control-lg ${isVerified ? 'border-success' : ''}`}
              id="irctcUsername"
              placeholder="Enter your IRCTC username"
              value={irctcUser}
              onChange={(e) => {
                setIrctcUser(e.target.value);
                if (isVerified) {
                  setIsVerified(false);
                }
              }}
              readOnly={isVerified && !isEditing}
            />
            {irctcUser && !isVerified && !isVerifying && (
              <button 
                className="btn btn-primary ms-2"
                style={{ borderRadius: "10px" }}
                onClick={handleVerifyUsername}
              >
                <i className="fa-solid fa-check me-2"></i>
                Verify
              </button>
            )}
            {isVerifying && (
              <button 
                className="btn btn-secondary ms-2"
                style={{ borderRadius: "10px" }}
                disabled
              >
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Verifying...
              </button>
            )}
            {isVerified && (
              <button 
                className="btn btn-outline-primary ms-2"
                style={{ borderRadius: "10px" }}
                onClick={handleEditUsername}
              >
                <i className="fa-solid fa-pen-to-square me-2"></i>
                Change 
              </button>
            )}
          </div>
          {isVerified && (
            <div className="d-flex align-items-center mt-2">
              <span className="badge bg-success-subtle text-success rounded-pill">
                <i className="fa-solid fa-check-circle me-1"></i>
                IRCTC ID Verified
              </span>
            </div>
          )}
          {irctcUsernameStatus?.error && !isVerified && !isVerifying && (
            <div className="d-flex align-items-center mt-2">
              <span className="badge bg-danger-subtle text-danger rounded-pill">
                <i className="fa-solid fa-exclamation-circle me-1"></i>
                {irctcUsernameStatus.error}
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
        <div className="col-xl-5 col-md-5 col-sm-12">
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

        <div className="col-xl-4 col-md-4 col-sm-12">
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

        <div className="col-xl-3 col-md-3 col-sm-12">
          <label htmlFor="state" className="form-label">
            <i className="fa-solid fa-location-dot me-2"></i>
            State*
          </label>
          <div className="select-wrapper">
            <select
              className="form-select card-select"
              id="state"
              style={{ fontSize: '0.95rem', padding: '0.95rem' }}
              value={contactDetails.state}
              onChange={(e) => setContactDetails({ ...contactDetails, state: e.target.value })}
            >
              <option value="" disabled>Select State</option>
              {/* States */}
              <option value="andhra-pradesh">Andhra Pradesh</option>
              <option value="arunachal-pradesh">Arunachal Pradesh</option>
              <option value="assam">Assam</option>
              <option value="bihar">Bihar</option>
              <option value="chhattisgarh">Chhattisgarh</option>
              <option value="delhi">Delhi</option>
              <option value="goa">Goa</option>
              <option value="gujarat">Gujarat</option>
              <option value="haryana">Haryana</option>
              <option value="himachal-pradesh">Himachal Pradesh</option>
              <option value="jammu-kashmir">Jammu & Kashmir</option>
              <option value="jharkhand">Jharkhand</option>
              <option value="karnataka">Karnataka</option>
              <option value="kerala">Kerala</option>
              <option value="ladakh">Ladakh</option>
              <option value="madhya-pradesh">Madhya Pradesh</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="manipur">Manipur</option>
              <option value="meghalaya">Meghalaya</option>
              <option value="mizoram">Mizoram</option>
              <option value="nagaland">Nagaland</option>
              <option value="odisha">Odisha</option>
              <option value="puducherry">Puducherry</option>
              <option value="punjab">Punjab</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="sikkim">Sikkim</option>
              <option value="tamil-nadu">Tamil Nadu</option>
              <option value="telangana">Telangana</option>
              <option value="tripura">Tripura</option>
              <option value="uttar-pradesh">Uttar Pradesh</option>
              <option value="uttarakhand">Uttarakhand</option>
              <option value="west-bengal">West Bengal</option>
              {/* Union Territories */}
              <option value="andaman-nicobar">Andaman & Nicobar Islands</option>
              <option value="chandigarh">Chandigarh</option>
              <option value="dadra-nagar-haveli">Dadra & Nagar Haveli</option>
              <option value="daman-diu">Daman & Diu</option>
              <option value="lakshadweep">Lakshadweep</option>
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
          <div className="modal-content" ref={irctcModalRef}>
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
          <div className="modal-content" ref={forgotUsernameModalRef}>
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
                    onClick={handleForgotUsernameSubmit}
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
          <div className="modal-content" ref={forgotPasswordModalRef}>
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

  function convert24To12Hour(time) {
    // Split the time into hours and minutes
    let [hour, minute] = time.split(":");
  
    // Convert to a number
    hour = parseInt(hour);
    minute = parseInt(minute);
  
    // Determine AM/PM
    let period = "AM";
    if (hour >= 12) {
      period = "PM";
      if (hour > 12) {
        hour = hour - 12; // Convert 24-hour to 12-hour format
      }
    } else if (hour === 0) {
      hour = 12; // Handle midnight case
    }
  
    // Format hour and minute with leading zeros if necessary
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
  
    return `${hour}:${minute} ${period}`;
  }
  
  // Add this state for managing custom dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Update the renderBoardingStationDropdown function
  const renderBoardingStationDropdown = () => (
    <div className="mb-4">
      <label htmlFor="boardingStation" className="form-label fw-medium">
        <i className="fa-solid fa-train me-2 text-primary"></i>
        Boarding Station*
      </label>
      <div className="custom-dropdown-container">
        {/* Dropdown trigger button */}
        <div 
          className="dropdown-trigger"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>
            {selectedBoardingStation ? 
              (() => {
                const selectedStation = boardingStations?.find(station => 
                  parseStationNameCode(station.stnNameCode).code === selectedBoardingStation
                );
                if (selectedStation) {
                  const { name: stationName, code: stationCode } = parseStationNameCode(selectedStation.stnNameCode);
                  const matchingStation = boardingStationDetails?.stationList?.find(
                    detail => detail.stationCode === stationCode
                  );
                  if (matchingStation) {
                    const { departureTime, dayCount } = matchingStation;
                    const [dayOfWeek, day, month] = trainData.departureDate.split(" ");
                    const baseDate = new Date(`${month} ${day}, 2025`);
                    const adjustedDate = new Date(baseDate);
                    adjustedDate.setDate(baseDate.getDate() + (dayCount - 1));
                    const formattedDepartureDate = adjustedDate.toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                    });

                    return (
                      <div className="selected-station-display">
                        <span className="selected-station-name">
                          {stationName} ({stationCode})
                        </span>
                        <div className="selected-station-details">
                          <span className="selected-station-time">
                            <i className="fa-regular fa-clock me-1"></i>
                            {convert24To12Hour(departureTime)}
                          </span>
                          <span className="selected-station-date">
                            <i className="fa-regular fa-calendar me-1"></i>
                            {formattedDepartureDate}
                          </span>
                        </div>
                      </div>
                    );
                  }
                }
                return 'Select boarding point';
              })()
            : 'Select boarding point'}
          </span>
          <i className={`fa-solid fa-chevron-down ${isDropdownOpen ? 'rotate' : ''}`}></i>
        </div>

        {/* Custom dropdown options */}
        {isDropdownOpen && (
          <div className="custom-dropdown-options">
            {boardingStations?.map((station) => {
              const { name: stationName, code: stationCode } = parseStationNameCode(station.stnNameCode);
              const stationList = boardingStationDetails?.stationList || [];
              const matchingStation = stationList.find((detail) => detail.stationCode === stationCode);

              if (matchingStation) {
                const { departureTime, dayCount } = matchingStation;
                const [dayOfWeek, day, month] = trainData.departureDate.split(" ");
                const baseDate = new Date(`${month} ${day}, 2025`);

                if (isNaN(baseDate)) {
                  console.error("Invalid train start date:", trainData.departureDate);
                  return null;
                }

                const adjustedDate = new Date(baseDate);
                adjustedDate.setDate(baseDate.getDate() + (dayCount - 1));
                const formattedDepartureDate = adjustedDate.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                });

                return (
                  <div
                    key={stationCode}
                    className={`dropdown-option ${selectedBoardingStation === stationCode ? 'selected' : ''}`}
                    onClick={() => {
                      handleBoardingStationChange({ target: { value: stationCode } });
                      setIsDropdownOpen(false);
                    }}
                  >
                    <div className="station-card-compact">
                      <div className="station-info">
                        <span className="station-name">{stationName}</span>
                        <span className="station-code">{stationCode}</span>
                      </div>
                      <div className="time-info">
                        <span className="departure-time">
                          <i className="fa-regular fa-clock me-1"></i>
                          {convert24To12Hour(departureTime)}
                        </span>
                        <span className="departure-date">
                          <i className="fa-regular fa-calendar me-1"></i>
                          {formattedDepartureDate}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
      <small className="text-muted mt-2 d-block">
        <i className="fa-solid fa-info-circle me-1"></i>
        Select the station from where you will board the train
      </small>
    </div>
  );

  // Add this useEffect to handle clicking outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector('.custom-dropdown-container');
      if (dropdown && !dropdown.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          width: 150%;
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
          z-index: 1056; /* Ensure modal content is above backdrop */
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

        .input-group {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .input-group .form-control {
          border-radius: 8px !important;
          padding-right: 40px; /* Make space for the clear button */
        }

        .clear-button {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
          color: #6c757d;
          padding: 0.375rem 0.75rem;
          background: transparent;
          border: none;
        }

        .clear-button:hover {
          color: #343a40;
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

        .btn-danger {
          background-color: #cd2c22;
          border-color: #cd2c22;
          color: white;
          transition: all 0.3s ease;
        }

        .btn-danger:hover {
          background-color: #cd2c22 !important;
          border-color: #cd2c22 !important;
          color: white !important;
        }

        .btn-danger:active, .btn-danger:focus {
          background-color: #cd2c22 !important;
          border-color: #cd2c22 !important;
          color: white !important;
          box-shadow: 0 0 0 0.25rem rgba(205, 44, 34, 0.25) !important;
        }

        .btn-danger:disabled {
          background-color: rgba(205, 44, 34, 0.65);
          border-color: transparent;
          color: white;
        }

        .spinner-border {
          width: 1rem;
          height: 1rem;
          border-width: 0.15em;
        }

        .form-control:read-only {
          background-color: #f8f9fa;
          // cursor: not-allowed;
        }

        .border-success {
          border-color: #198754 !important;
        }

        .btn-outline-primary {
          color: #cd2c22;
          border-color: #cd2c22;
        }

        .btn-outline-primary:hover {
          background-color: #cd2c22;
          color: white;
        }

        /* Custom Dropdown Styles */
        .custom-dropdown-container {
          position: relative;
          width: 100%;
        }

        .dropdown-trigger {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dropdown-trigger:hover {
          border-color: #cd2c22;
        }

        .dropdown-trigger .fa-chevron-down {
          transition: transform 0.3s ease;
        }

        .dropdown-trigger .fa-chevron-down.rotate {
          transform: rotate(180deg);
        }

        .custom-dropdown-options {
          position: absolute;
          top: calc(100% + 5px);
          left: 0;
          right: 0;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          max-height: 300px;
          overflow-y: auto;
          z-index: 1000;
          padding: 8px;
        }

        .dropdown-option {
          margin-bottom: 4px;
        }

        .dropdown-option:last-child {
          margin-bottom: 0;
        }

        .station-card-compact {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .dropdown-option:hover .station-card-compact {
          border-color: #cd2c22;
          background-color: #fff0f0;
        }

        .dropdown-option.selected .station-card-compact {
          border-color: #cd2c22;
          background-color: #fff0f0;
        }

        .station-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .station-name {
          font-weight: 500;
          color: #333;
          font-size: 0.9rem;
        }

        .station-code {
          color: #666;
          font-size: 0.8rem;
          padding: 2px 6px;
          background: #f5f5f5;
          border-radius: 4px;
        }

        .time-info {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.85rem;
        }

        .departure-time {
          color: #cd2c22;
          font-weight: 500;
        }

        .departure-date {
          color: #666;
        }

        .time-info i {
          font-size: 0.8rem;
        }

        /* Mobile optimization */
        @media (max-width: 576px) {
          .station-card-compact {
            padding: 6px 10px;
          }

          .station-name {
            font-size: 0.85rem;
          }

          .time-info {
            font-size: 0.8rem;
            gap: 8px;
          }
        }

        .selected-station-display {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 12px;
        }

        .selected-station-name {
          font-weight: 500;
          color: #333;
        }

        .selected-station-details {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .selected-station-time {
          color: #cd2c22;
          font-weight: 500;
        }

        .selected-station-date {
          color: #666;
        }

        .dropdown-trigger {
          min-height: 42px;
        }

        /* Update mobile styles */
        @media (max-width: 576px) {
          .selected-station-display {
            gap: 8px;
          }

          .selected-station-details {
            gap: 8px;
          }

          .selected-station-name {
            font-size: 0.85rem;
          }

          .selected-station-time,
          .selected-station-date {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TrainBookingDetails;