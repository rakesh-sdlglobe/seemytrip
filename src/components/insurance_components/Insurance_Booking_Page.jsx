import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Header02 from '../header02';
import Footer from '../footer';
import SankashTC from './SankashTC.pdf';
import { 
  selectInsuranceBookLoading, 
  selectInsuranceBookError, 
  selectInsuranceBookData,
  selectInsuranceSearchResults,
  selectInsuranceSearchData
} from '../../store/Selectors/insuranceSelectors';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { 
  FaShieldAlt, 
  FaUser, 
  FaPassport, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaIdCard, 
  FaArrowLeft, 
  FaArrowRight, 
  FaArrowUp,
  FaArrowDown,
  FaTrash, 
  FaPlus,
  FaCheckCircle,
  FaTimesCircle,
  FaUserTie,
  FaCreditCard,
  FaFileContract,
  FaExclamationTriangle,
  FaStar
} from 'react-icons/fa';


const Insurance_Booking_Page = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Redux state
  const loading = useSelector(selectInsuranceBookLoading);
  const error = useSelector(selectInsuranceBookError);
  const bookingData = useSelector(selectInsuranceBookData);
  const searchResults = useSelector(selectInsuranceSearchResults);
  const searchData = useSelector(selectInsuranceSearchData);
  
  // Local state
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState({});
  const [passengerDetails, setPassengerDetails] = useState([{
    Title: '',
    FirstName: '',
    LastName: '',
    BeneficiaryTitle: '',
    BeneficiaryFirstName: '',
    BeneficiaryLastName: '',
    RelationShipToInsured: '',
    RelationToBeneficiary: '',
    Gender: '',
    Sex: '',
    DOB: '',
    DOBDay: '',
    DOBMonth: '',
    DOBYear: '',
    PassportNo: '',
    PassportCountry: '',
    PhoneNumber: '',
    EmailId: '',
    AddressLine1: '',
    AddressLine2: '',
    CityCode: '',
    CountryCode: '',
    State: '',
    MajorDestination: '',
    PinCode: ''
  }]);
  
  const [formErrors, setFormErrors] = useState({});
  const [expandedPassengers, setExpandedPassengers] = useState({});
  const [isNavigating, setIsNavigating] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Load data on component mount and when search results change
  useEffect(() => {
    loadBookingData();
    // Clear any existing form errors on component mount
    setFormErrors({});
  }, [searchResults, location.state]);

  // Expand first passenger by default when passengers are loaded
  useEffect(() => {
    if (passengerDetails.length > 0) {
      setExpandedPassengers({ 0: true });
    }
  }, [passengerDetails.length]);

  const togglePassengerExpansion = (index) => {
    setExpandedPassengers(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };




  const loadBookingData = () => {
    try {
      // Get data from navigation state
      const state = location.state;
      const planId = state?.planId;
      const params = state?.searchParams;
      
      // Check if we're coming back from payment page (editing mode)
      if (state?.isEditing && state?.passengerDetails) {
        // Restore all data from the payment page
        setSelectedPlan(state.selectedPlan || null);
        setSearchCriteria(state.searchCriteria || {});
        setPassengerDetails(state.passengerDetails || []);
        setTermsAccepted(state.termsAccepted || true); // Restore terms acceptance status
        return;
      }
      
      if (planId && params) {
        setSearchCriteria(params);
        
        // Find the selected plan from the search results
        const selectedPlanData = searchResults.find(plan => plan.ResultIndex === parseInt(planId));
        
        if (selectedPlanData) {
          setSelectedPlan(selectedPlanData);
        } else {
          // Fallback if plan not found in current search results

          setSelectedPlan({
            ResultIndex: parseInt(planId),
            PlanName: `Plan ${planId}`,
            Price: { OfferedPrice: 0 }
          });
        }

        // Initialize passenger details array based on passenger count
        const passengerCount = params.passengerCount || 1;
        const initialPassengers = [];
        
        for (let i = 0; i < passengerCount; i++) {
          initialPassengers.push({
            Title: '',
            FirstName: '',
            LastName: '',
            BeneficiaryTitle: '',
            BeneficiaryFirstName: '',
            BeneficiaryLastName: '',
            RelationShipToInsured: '',
            RelationToBeneficiary: '',
            Gender: '',
            Sex: '',
            DOB: '',
            DOBDay: '',
            DOBMonth: '',
            DOBYear: '',
            PassportNo: '',
            PassportCountry: '',
            PhoneNumber: '',
            EmailId: '',
            AddressLine1: '',
            AddressLine2: '',
            CityCode: '',
            CountryCode: '',
            State: '',
            MajorDestination: '',
            PinCode: ''
          });
        }
        
        setPassengerDetails(initialPassengers);
      }
    } catch (error) {
      // Error loading booking data
    }
  };

  const handleInputChange = (field, value, passengerIndex = 0) => {
    setPassengerDetails(prev => {
      const updated = [...prev];
      updated[passengerIndex] = {
        ...updated[passengerIndex],
        [field]: value
      };
      
      // Auto-select gender based on title selection
      if (field === 'Title' && value) {
        let genderValue = '';
        if (value === 'MR' || value === 'DR') {
          genderValue = '1'; // Male
        } else if (value === 'MS' || value === 'MRS') {
          genderValue = '2'; // Female
        }
        
        if (genderValue) {
          updated[passengerIndex].Gender = genderValue;
          updated[passengerIndex].Sex = genderValue;
        }
      }
      
      return updated;
    });
    
    // Clear error when user starts typing
    if (formErrors[`${field}_${passengerIndex}`]) {
      setFormErrors(prev => ({
        ...prev,
        [`${field}_${passengerIndex}`]: ''
      }));
    }
    
    // Clear gender error when title is selected and gender is auto-selected
    if (field === 'Title' && value) {
      if (formErrors[`Gender_${passengerIndex}`]) {
        setFormErrors(prev => ({
          ...prev,
          [`Gender_${passengerIndex}`]: ''
        }));
      }
    }
    
    // Special handling for DOB fields - clear DOB error when any DOB field changes
    if (field === 'DOBDay' || field === 'DOBMonth' || field === 'DOBYear') {
      if (formErrors[`DOB_${passengerIndex}`]) {
        setFormErrors(prev => ({
          ...prev,
          [`DOB_${passengerIndex}`]: ''
        }));
      }
    }
    
    // Real-time validation for passport number
    if (field === 'PassportNo') {
      if (!value || !value.trim()) {
        setFormErrors(prev => ({
          ...prev,
          [`PassportNo_${passengerIndex}`]: 'Passport number is required'
        }));
      } else {
        const passportRegex = /^[A-Z]{1,2}[0-9]{6,9}$/;
        if (!passportRegex.test(value.trim().toUpperCase())) {
          setFormErrors(prev => ({
            ...prev,
            [`PassportNo_${passengerIndex}`]: 'Please enter a valid passport number'
          }));
        } else {
          // Clear error if format is valid
          setFormErrors(prev => ({
            ...prev,
            [`PassportNo_${passengerIndex}`]: ''
          }));
        }
      }
    }
    
    // Real-time validation for email
    if (field === 'EmailId') {
      if (value && value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) {
          setFormErrors(prev => ({
            ...prev,
            [`EmailId_${passengerIndex}`]: 'Please enter a valid email address'
          }));
        } else {
          setFormErrors(prev => ({
            ...prev,
            [`EmailId_${passengerIndex}`]: ''
          }));
        }
      }
    }
    
    // Real-time validation for phone number
    if (field === 'PhoneNumber') {
      if (!value || !value.trim()) {
        setFormErrors(prev => ({
          ...prev,
          [`PhoneNumber_${passengerIndex}`]: 'Phone number is required'
        }));
      } else {
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(value.trim())) {
          setFormErrors(prev => ({
            ...prev,
            [`PhoneNumber_${passengerIndex}`]: 'Please enter a valid 10-digit mobile number'
          }));
        } else {
          setFormErrors(prev => ({
            ...prev,
            [`PhoneNumber_${passengerIndex}`]: ''
          }));
        }
      }
    }
    
    // Real-time validation for PIN code
    if (field === 'PinCode') {
      if (value && value.toString().trim()) {
        const pinRegex = /^[1-9][0-9]{5}$/;
        if (!pinRegex.test(value.toString())) {
          setFormErrors(prev => ({
            ...prev,
            [`PinCode_${passengerIndex}`]: 'Please enter a valid 6-digit PIN code'
          }));
        } else {
          setFormErrors(prev => ({
            ...prev,
            [`PinCode_${passengerIndex}`]: ''
          }));
        }
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    
    passengerDetails.forEach((passenger, index) => {
      // Title validation
      if (!passenger.Title || passenger.Title === '') {
        errors[`Title_${index}`] = 'Title is required';
      }
      
      // Name validations
      if (!passenger.FirstName.trim()) {
        errors[`FirstName_${index}`] = 'First name is required';
      } else if (passenger.FirstName.trim().length < 2) {
        errors[`FirstName_${index}`] = 'First name must be at least 2 characters';
      }
      
      if (!passenger.LastName.trim()) {
        errors[`LastName_${index}`] = 'Last name is required';
      } else if (passenger.LastName.trim().length < 2) {
        errors[`LastName_${index}`] = 'Last name must be at least 2 characters';
      }
      
      // Gender validation
      if (!passenger.Gender || passenger.Gender === '') {
        errors[`Gender_${index}`] = 'Gender is required';
      }
      
      // Date of birth validation - check if all three fields are filled
      if (!passenger.DOBDay || !passenger.DOBMonth || !passenger.DOBYear) {
        errors[`DOB_${index}`] = 'Date of birth is required';
      } else {
        // Validate if the date is valid
        const day = parseInt(passenger.DOBDay);
        const month = parseInt(passenger.DOBMonth);
        const year = parseInt(passenger.DOBYear);
        const date = new Date(year, month - 1, day);
        
        if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) {
          errors[`DOB_${index}`] = 'Please enter a valid date';
        } else {
          // Check if age is between 0 and 70
          const today = new Date();
          const age = today.getFullYear() - year;
          if (age < 0 || age > 70) {
            errors[`DOB_${index}`] = 'Age must be between 0 and 70 years';
          }
        }
      }
      
      // Phone number validation
      if (!passenger.PhoneNumber || !passenger.PhoneNumber.trim()) {
        errors[`PhoneNumber_${index}`] = 'Phone number is required';
      } else {
        const phoneRegex = /^[6-9]\d{9}$/;
        const trimmedPhone = passenger.PhoneNumber.trim();
        if (!phoneRegex.test(trimmedPhone)) {
          errors[`PhoneNumber_${index}`] = 'Please enter a valid 10-digit mobile number';
        }
      }
      
      // Email validation
      if (!passenger.EmailId.trim()) {
        errors[`EmailId_${index}`] = 'Email is required';
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(passenger.EmailId.trim())) {
          errors[`EmailId_${index}`] = 'Please enter a valid email address';
        }
      }
      
      // Address validation
      if (!passenger.AddressLine1.trim()) {
        errors[`AddressLine1_${index}`] = 'Address is required';
      } else if (passenger.AddressLine1.trim().length < 10) {
        errors[`AddressLine1_${index}`] = 'Address must be at least 10 characters';
      }
      
      // City validation
      if (!passenger.CityCode.trim()) {
        errors[`CityCode_${index}`] = 'City is required';
      }
      
      // State validation
      if (!passenger.State.trim()) {
        errors[`State_${index}`] = 'State is required';
      }
      
      // Major destination validation
      if (!passenger.MajorDestination.trim()) {
        errors[`MajorDestination_${index}`] = 'Major destination is required';
      }
      
      // Country validation
      if (!passenger.CountryCode || passenger.CountryCode === '') {
        errors[`CountryCode_${index}`] = 'Country is required';
      }
      
      // PIN code validation
      if (!passenger.PinCode) {
        errors[`PinCode_${index}`] = 'PIN code is required';
      } else {
        const pinRegex = /^[1-9][0-9]{5}$/;
        if (!pinRegex.test(passenger.PinCode.toString())) {
          errors[`PinCode_${index}`] = 'Please enter a valid 6-digit PIN code';
        }
      }
      
      // Beneficiary validations
      if (!passenger.BeneficiaryTitle || passenger.BeneficiaryTitle === '') {
        errors[`BeneficiaryTitle_${index}`] = 'Beneficiary title is required';
      }
      
      if (!passenger.BeneficiaryFirstName.trim()) {
        errors[`BeneficiaryFirstName_${index}`] = 'Beneficiary first name is required';
      } else if (passenger.BeneficiaryFirstName.trim().length < 2) {
        errors[`BeneficiaryFirstName_${index}`] = 'Beneficiary first name must be at least 2 characters';
      }
      
      if (!passenger.BeneficiaryLastName.trim()) {
        errors[`BeneficiaryLastName_${index}`] = 'Beneficiary last name is required';
      } else {
        // Remove spaces and check length (API requirement)
        const beneficiaryLastNameNoSpaces = passenger.BeneficiaryLastName.replace(/\s+/g, '');
        if (beneficiaryLastNameNoSpaces.length < 3) {
          errors[`BeneficiaryLastName_${index}`] = 'Beneficiary last name must be at least 3 characters (spaces will be removed)';
        }
      }
      
      // Relationship validation
      if (!passenger.RelationShipToInsured || passenger.RelationShipToInsured === '') {
        errors[`RelationShipToInsured_${index}`] = 'Relationship to insured is required';
      }
      
      // Relation to beneficiary validation
      if (!passenger.RelationToBeneficiary || passenger.RelationToBeneficiary === '') {
        errors[`RelationToBeneficiary_${index}`] = 'Relation to beneficiary is required';
      }
      
      // Passport validation (required)
      if (!passenger.PassportNo.trim()) {
        errors[`PassportNo_${index}`] = 'Passport number is required';
      } else {
        const passportRegex = /^[A-Z]{1,2}[0-9]{6,9}$/;
        if (!passportRegex.test(passenger.PassportNo.trim().toUpperCase())) {
          errors[`PassportNo_${index}`] = 'Please enter a valid passport number';
        }
      }
    });
    
    // Terms and conditions validation
    if (!termsAccepted) {
      errors.termsAccepted = 'You must accept the terms and conditions to continue';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const scrollToFirstError = () => {
    const firstErrorField = Object.keys(formErrors)[0];
    if (firstErrorField) {
      // Special handling for terms and conditions error
      if (firstErrorField === 'termsAccepted') {
        const termsElement = document.getElementById('termsCheck');
        if (termsElement) {
          termsElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          termsElement.focus();
        }
        return;
      }
      
      const fieldName = firstErrorField.split('_')[0];
      const passengerIndex = parseInt(firstErrorField.split('_')[1]);
      
      // Expand the passenger form that has the error
      setExpandedPassengers(prev => ({
        ...prev,
        [passengerIndex]: true
      }));
      
      // Wait a bit for the expansion animation, then scroll
      setTimeout(() => {
        let element = null;
        
        // Special handling for DOB field - scroll to the first DOB select (Day)
        if (fieldName === 'DOB') {
          element = document.querySelector(`select[data-field="DOBDay"][data-passenger="${passengerIndex}"]`);
        } else {
          // Try to find the input/select element
          element = document.querySelector(`[name="${fieldName}_${passengerIndex}"], select[data-field="${fieldName}"][data-passenger="${passengerIndex}"], input[data-field="${fieldName}"][data-passenger="${passengerIndex}"]`);
        }
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.focus();
        } else {
          // Fallback: scroll to the passenger form
          const passengerForm = document.querySelector(`[data-passenger-form="${passengerIndex}"]`);
          if (passengerForm) {
            passengerForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 300);
    }
  };


  const handleContinue = () => {
    if (!validateForm()) {
      // Scroll to first error after a short delay to allow state update
      setTimeout(() => {
        scrollToFirstError();
      }, 100);
      return;
    }

    // Set loading state and show spinner for 2 seconds
    setIsNavigating(true);

    // Prepare passengers array for review
    const passengersForReview = passengerDetails.map(passenger => {
      // Remove spaces from beneficiary last name for API compatibility
      const beneficiaryLastName = passenger.BeneficiaryLastName ? passenger.BeneficiaryLastName.replace(/\s+/g, '') : '';
      const beneficiaryName = `${passenger.BeneficiaryTitle} ${passenger.BeneficiaryFirstName} ${beneficiaryLastName}`.trim();
      
      // Construct DOB from separate fields
      const dob = passenger.DOBDay && passenger.DOBMonth && passenger.DOBYear 
        ? `${passenger.DOBYear}-${passenger.DOBMonth.padStart(2, '0')}-${passenger.DOBDay.padStart(2, '0')}`
        : passenger.DOB;
      
      // Set default values for API only if not provided by user
      const passengerForReview = {
        ...passenger,
        DOB: dob,
        BeneficiaryName: beneficiaryName,
        BeneficiaryLastName: beneficiaryLastName, // Use the space-removed version
        // Set defaults for API if user didn't select
        PassportCountry: passenger.PassportCountry || 'IND',
        CountryCode: passenger.CountryCode || 'IND',
        // Convert Gender to Sex if needed
        Sex: passenger.Sex || (passenger.Gender === '1' ? 1 : 2)
      };
      
      return passengerForReview;
    });

    // Calculate price details
    const priceDetails = calculateTotalPrice();

    // Wait 2 seconds before navigating
    setTimeout(() => {
      navigate('/insurance-payment', {
        state: {
          selectedPlan,
          searchCriteria,
          passengerDetails: passengersForReview,
          priceDetails,
          authData: location.state?.authData || {},
          traceId: location.state?.traceId || '',
          termsAccepted: termsAccepted // Pass terms acceptance status
        }
      });
    }, 1000);
  };


  const titleOptions = [
    { value: 'MR', label: 'Mr.' },
    { value: 'MS', label: 'Ms.' },
    { value: 'MRS', label: 'Mrs.' },
    { value: 'DR', label: 'Dr.' }
  ];

  const genderOptions = [
    { value: '1', label: 'Male' },
    { value: '2', label: 'Female' },
    { value: '3', label: 'Other' }
  ];

  const relationshipOptions = [
    { value: 'Self', label: 'Self' },
    { value: 'Spouse', label: 'Spouse' },
    { value: 'Child', label: 'Child' },
    { value: 'Parent', label: 'Parent' },
    { value: 'Sibling', label: 'Sibling' }
  ];

  // Calculate total price based on actual plan data from API - show exact API price only
  const calculateTotalPrice = () => {
    if (!selectedPlan) return { basePrice: 0, total: 0, grandTotal: 0 };

    // Get base price from plan - use OfferedPriceRoundedOff if available, otherwise OfferedPrice
    const basePrice = selectedPlan.Price?.OfferedPriceRoundedOff || selectedPlan.Price?.OfferedPrice || 0;
    const passengerCount = passengerDetails.length;
    const total = basePrice * passengerCount;
    
    // Return only the exact API price without any commission calculations
    return {
      basePrice,
      total,
      grandTotal: total
    };
  };

  const renderPassengerForm = (passenger, index) => {
    const isExpanded = expandedPassengers[index];
    const hasErrors = Object.keys(formErrors).some(key => key.endsWith(`_${index}`));
    
    return (
      <div key={index} className="card shadow-sm mb-4" data-passenger-form={index}>
        <div 
          className="card-header bg-white d-flex justify-content-between align-items-center" 
          style={{ cursor: 'pointer' }}
          onClick={() => togglePassengerExpansion(index)}
        >
          <div className="d-flex align-items-center">
            <h6 className="mb-0 me-3">
              Passenger {index + 1} : 
              <small className="text-muted ms-2">
                (passenger of age range 0.0 - 70)
              </small>
            </h6>
            {hasErrors && (
              <span className="badge bg-danger">
                <FaExclamationTriangle className="me-1" />
                Errors
              </span>
            )}
          </div>
          <div className="d-flex align-items-center">
            {isExpanded ? (
              <IoIosArrowUp size={24} className="text-dark "/>
            ) : (
              <IoIosArrowDown size={24} className="text-dark"/>
            )}
          </div>
        </div>
        {isExpanded && (
          <div className="card-body">
        <div className="row">

          {/* Left Column */}
          <div className="row col-md-12 m-auto p-0">

            {/* Insured Name */}
            <div className="mb-3 col-md-8 col-sm-12">
              <label className="form-label">Insured Name*</label>
              <div className="row g-2">
                <div className="col-sm-12 col-lg-3 col-md-3 ">
                  <select
                    className={`form-select ${formErrors[`Title_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.Title}
                    onChange={(e) => handleInputChange('Title', e.target.value, index)}
                    style={{ height: '38px' }}
                    data-field="Title"
                    data-passenger={index}
                  >
                    <option value="">Title</option>
                    {titleOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {formErrors[`Title_${index}`] && <div className="invalid-feedback">{formErrors[`Title_${index}`]}</div>}
                </div>
                <div className="col-sm-6 col-lg-4 col-md-4">
                  <input
                    type="text"
                    className={`form-control ${formErrors[`FirstName_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.FirstName}
                    onChange={(e) => handleInputChange('FirstName', e.target.value, index)}
                    placeholder="First Name"
                    style={{ height: '38px' }}
                    data-field="FirstName"
                    data-passenger={index}
                  />
                  {formErrors[`FirstName_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`FirstName_${index}`]}</div>}
                </div>
                <div className="col-sm-6 col-lg-5 col-md-5">
                  <input
                    type="text"
                    className={`form-control ${formErrors[`LastName_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.LastName}
                    onChange={(e) => handleInputChange('LastName', e.target.value, index)}
                    placeholder="Last Name"
                    style={{ height: '38px' }}
                    data-field="LastName"
                    data-passenger={index}
                  />
                  {formErrors[`LastName_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`LastName_${index}`]}</div>}
                </div>
              </div>
            </div>

              {/* Insured Gender */}
              <div className="mb-3 col-md-4 col-sm-6">
              <label className="form-label">Insured Gender*</label>
              <select
                className={`form-select ${formErrors[`Gender_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.Gender}
                onChange={(e) => handleInputChange('Gender', e.target.value, index)}
                style={{ height: '38px' }}
                data-field="Gender"
                data-passenger={index}
              >
                <option value="">Select Gender</option>
                {genderOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {formErrors[`Gender_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`Gender_${index}`]}</div>}
            </div>



            {/* D.O.B */}
            <div className={`mb-3 col-md-8 col-sm-6 ${formErrors[`DOB_${index}`] ? 'has-error' : ''}`}>
              <label className="form-label  text-dark">D.O.B*</label>
              <div className="row">
                <div className="col-4">
                  <select
                    className={`form-select ${formErrors[`DOB_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.DOBDay || ''}
                    onChange={(e) => handleInputChange('DOBDay', e.target.value, index)}
                    style={{ height: '38px' }}
                    data-field="DOBDay"
                    data-passenger={index}
                  >
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="col-4">
                  <select
                    className={`form-select ${formErrors[`DOB_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.DOBMonth || ''}
                    onChange={(e) => handleInputChange('DOBMonth', e.target.value, index)}
                    style={{ height: '38px' }}
                    data-field="DOBMonth"
                    data-passenger={index}
                  >
                    <option value="">Month</option>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </select>
                </div>
                <div className="col-4">
                  <select
                    className={`form-select ${formErrors[`DOB_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.DOBYear || ''}
                    onChange={(e) => handleInputChange('DOBYear', e.target.value, index)}
                    style={{ height: '38px' }}
                    data-field="DOBYear"
                    data-passenger={index}
                  >
                    <option value="">Year</option>
                    {Array.from({ length: 100 }, (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return <option key={year} value={year}>{year}</option>;
                    })}
                  </select>
                </div>
              </div>
              {formErrors[`DOB_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`DOB_${index}`]}</div>}
            </div>

            {/* Relation To Insured */}
            <div className="mb-3 col-md-4 col-sm-6">
              <label className="form-label  text-dark">Relation To Insured*</label>
              <select
                className={`form-select ${formErrors[`RelationShipToInsured_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.RelationShipToInsured}
                onChange={(e) => handleInputChange('RelationShipToInsured', e.target.value, index)}
                style={{ height: '38px' }}
                data-field="RelationShipToInsured"
                data-passenger={index}
              >
                <option value="">Select Relationship</option>
                {relationshipOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {formErrors[`RelationShipToInsured_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`RelationShipToInsured_${index}`]}</div>}
            </div>

            {/* Major Destination */}
            <div className="mb-3 col-md-4 col-sm-6">
              <label className="form-label  text-dark">Major Destination*</label>
              <select
                className={`form-select ${formErrors[`MajorDestination_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.MajorDestination}
                onChange={(e) => handleInputChange('MajorDestination', e.target.value, index)}
                style={{ height: '38px' }}
                data-field="MajorDestination"
                data-passenger={index}
              >
                <option value="">Select Destination</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Worldwide">Worldwide</option>
              </select>
              {formErrors[`MajorDestination_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`MajorDestination_${index}`]}</div>}
            </div>


            {/* Mobile */}
            <div className="mb-3 col-md-4 col-sm-6">
              <label className="form-label  text-dark">Mobile*</label>
              <input
                type="tel"
                className={`form-control ${formErrors[`PhoneNumber_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.PhoneNumber}
                onChange={(e) => handleInputChange('PhoneNumber', e.target.value, index)}
                placeholder="Enter mobile number"
                style={{ height: '38px' }}
                data-field="PhoneNumber"
                data-passenger={index}
              />
              {formErrors[`PhoneNumber_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`PhoneNumber_${index}`]}</div>}
            </div>

 
            {/* Passport No */}
            <div className="mb-3 col-md-4 col-sm-6">
              <label className="form-label  text-dark">Passport No*</label>
              <input
                type="text"
                className={`form-control ${formErrors[`PassportNo_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.PassportNo}
                onChange={(e) => handleInputChange('PassportNo', e.target.value, index)}
                placeholder="Enter passport number"
                style={{ height: '38px' }}
                data-field="PassportNo"
                data-passenger={index}
              />
              {formErrors[`PassportNo_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`PassportNo_${index}`]}</div>}
            </div>

                  {/* Country */}
            <div className="mb-3 col-md-4 col-sm-6">
              <label className="form-label  text-dark">Country*</label>
              <select
                className={`form-select ${formErrors[`CountryCode_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.CountryCode}
                onChange={(e) => handleInputChange('CountryCode', e.target.value, index)}
                style={{ height: '38px' }}
                data-field="CountryCode"
                data-passenger={index}
              >
                <option value="">Select Country</option>
                <option value="IND">India</option>
                <option value="USA">USA</option>
                <option value="GBR">UK</option>
                <option value="CAN">Canada</option>
                <option value="AUS">Australia</option>
              </select>
              {formErrors[`CountryCode_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`CountryCode_${index}`]}</div>}
            </div>

            {/* State */}
            <div className="mb-3 col-md-4 col-sm-6">
              <label className="form-label  text-dark">State*</label>
              <select
                className={`form-select ${formErrors[`State_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.State || ''}
                onChange={(e) => handleInputChange('State', e.target.value, index)}
                style={{ height: '38px' }}
                data-field="State"
                data-passenger={index}
              >
                <option value="">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Punjab">Punjab</option>
                <option value="Haryana">Haryana</option>
              </select>
              {formErrors[`State_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`State_${index}`]}</div>}
            </div>

            {/* City */}
            <div className="mb-3 col-md-4 col-sm-6">
              <label className="form-label  text-dark">City*</label>
              <select
                className={`form-select ${formErrors[`CityCode_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.CityCode}
                onChange={(e) => handleInputChange('CityCode', e.target.value, index)}
                style={{ height: '38px' }}
                data-field="CityCode"
                data-passenger={index}
              >
                <option value="">Select City</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Kochi">Kochi</option>
              </select>
              {formErrors[`CityCode_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`CityCode_${index}`]}</div>}
            </div>

    {/* Address */}
    <div className="mb-3 col-md-4 col-sm-6">
              <label className="form-label  text-dark">Address*</label>
              <input
                type="text"
                className={`form-control ${formErrors[`AddressLine1_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.AddressLine1}
                onChange={(e) => handleInputChange('AddressLine1', e.target.value, index)}
                placeholder="Address Line 1"
                style={{ height: '38px' }}
                data-field="AddressLine1"
                data-passenger={index}
              />
              {formErrors[`AddressLine1_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`AddressLine1_${index}`]}</div>}
              <input
                type="text"
                className="form-control mt-2"
                value={passenger.AddressLine2}
                onChange={(e) => handleInputChange('AddressLine2', e.target.value, index)}
                placeholder="Address Line 2 (optional)"
                style={{ height: '38px' }}
              />
            </div>

            {/* Pin Code */}
            <div className="mb-3 col-md-4 col-sm-6">
              <label className="form-label  text-dark">Pin Code*</label>
              <input
                type="text"
                className={`form-control ${formErrors[`PinCode_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.PinCode}
                onChange={(e) => handleInputChange('PinCode', e.target.value, index)}
                placeholder="Enter PIN code"
                style={{ height: '38px' }}
                data-field="PinCode"
                data-passenger={index}
              />
              {formErrors[`PinCode_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`PinCode_${index}`]}</div>}
            </div>

            {/* Email */}
            <div className="mb-3 col-md-4 col-sm-6">
              <label className="form-label fw-bold text-dark">Email*</label>
              <input
                type="email"
                className={`form-control ${formErrors[`EmailId_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.EmailId}
                onChange={(e) => handleInputChange('EmailId', e.target.value, index)}
                placeholder="Enter email address"
                style={{ height: '38px' }}
                data-field="EmailId"
                data-passenger={index}
              />
              {formErrors[`EmailId_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`EmailId_${index}`]}</div>}
            </div>

        {/* Beneficiary Section - Single Column */}
            <div className="mb-3 col-md-8">
              <label className="form-label">Beneficiary Name*</label>
              <div className="row g-2">
                <div className="col-sm-12 col-lg-3 col-md-3 ">
                  <select
                    className={`form-select ${formErrors[`BeneficiaryTitle_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.BeneficiaryTitle}
                    onChange={(e) => handleInputChange('BeneficiaryTitle', e.target.value, index)}
                    style={{ height: '38px' }}
                    data-field="BeneficiaryTitle"
                    data-passenger={index}
                  >
                    <option value="">Title</option>
                    {titleOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {formErrors[`BeneficiaryTitle_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`BeneficiaryTitle_${index}`]}</div>}
                </div>
                <div className="col-sm-6 col-lg-4 col-md-4">
                  <input
                    type="text"
                    className={`form-control ${formErrors[`BeneficiaryFirstName_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.BeneficiaryFirstName}
                    onChange={(e) => handleInputChange('BeneficiaryFirstName', e.target.value, index)}
                    placeholder="First Name"
                    style={{ height: '38px' }}
                    data-field="BeneficiaryFirstName"
                    data-passenger={index}
                  />
                  {formErrors[`BeneficiaryFirstName_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`BeneficiaryFirstName_${index}`]}</div>}
                </div>
                <div className="col-sm-6 col-lg-5 col-md-5">
                  <input
                    type="text"
                    className={`form-control ${formErrors[`BeneficiaryLastName_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.BeneficiaryLastName}
                    onChange={(e) => handleInputChange('BeneficiaryLastName', e.target.value, index)}
                    placeholder="Last Name"
                    style={{ height: '38px' }}
                    data-field="BeneficiaryLastName"
                    data-passenger={index}
                  />
                  {formErrors[`BeneficiaryLastName_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`BeneficiaryLastName_${index}`]}</div>}
                  <small className="text-muted">Note: Spaces will be automatically removed</small>
                </div>
            </div>
          </div>

          {/* Relation To Beneficiary */}
          <div className="mb-3 col-md-4 col-sm-12">
            <label className="form-label text-dark">Relation To Beneficiary*</label>
            <select
              className={`form-select ${formErrors[`RelationToBeneficiary_${index}`] ? 'is-invalid' : ''}`}
              value={passenger.RelationToBeneficiary}
              onChange={(e) => handleInputChange('RelationToBeneficiary', e.target.value, index)}
              style={{ height: '38px' }}
              data-field="RelationToBeneficiary"
              data-passenger={index}
            >
              <option value="">Select Relationship</option>
              {relationshipOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {formErrors[`RelationToBeneficiary_${index}`] && <div className="invalid-feedback d-block" style={{color: '#dc3545', fontSize: '0.875em', marginTop: '0.25rem'}}>{formErrors[`RelationToBeneficiary_${index}`]}</div>}
          </div>

        </div>
      </div>

     
          </div>
        )}
      </div>
    );
  };



  const priceDetails = calculateTotalPrice();

  return (
    <>
      <Header02 />
      
      <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container-xl">
          {/* 4-Step Navigation */}
          {/* <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex align-items-center">
                  <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '30px', height: '30px' }}>
                    1
                  </div>
                  <span className="fw-bold text-success">Passenger Details</span>
                </div>
                <FaArrowRight className="text-muted mx-2" />
                <div className="d-flex align-items-center">
                  <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '30px', height: '30px' }}>
                    2
                  </div>
                  <span className="text-muted">Generate Policy</span>
                </div>
                <FaArrowRight className="text-muted mx-2" />
                <div className="d-flex align-items-center">
                  <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '30px', height: '30px' }}>
                    3
                  </div>
                  <span className="text-muted">Insurance Booking details</span>
                </div>
                <FaArrowRight className="text-muted mx-2" />
                <div className="d-flex align-items-center">
                  <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '30px', height: '30px' }}>
                    4
                  </div>
                  <span className="text-muted">Confirmation</span>
                </div>
              </div>
            </div>
          </div> */}

          {/* Main Content */}
          <div className="row g-4 ">
            {/* Left Column - Passenger Details */}
            <div className="col-lg-8 order-2 order-lg-1">
              {/* Insurance Plan Overview */}
              <div className="card shadow-sm mb-4 ">
                <div className="card-body row g-2 align-items-center ">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <h3 className="mb-1 fw-bold text-dark">
                            {selectedPlan?.PlanName || 'Insurance Plan'}
                          </h3>
                          <p className="mb-0 text-warning fw-bold">
                            {searchCriteria.planCoverage === 4 ? 'India' : 
                             searchCriteria.planCoverage === 1 ? 'US' :
                             searchCriteria.planCoverage === 2 ? 'Non-US' :
                             searchCriteria.planCoverage === 3 ? 'WorldWide' :
                             searchCriteria.planCoverage === 5 ? 'Asia' :
                             searchCriteria.planCoverage === 6 ? 'Canada' :
                             searchCriteria.planCoverage === 7 ? 'Australia' :
                             searchCriteria.planCoverage === 8 ? 'Schenegen Countries' : 'Coverage'}
                          </p>
                          <button 
                          className="btn btn-link p-0 text-decoration-underline h-fit-content "
                          onClick={() => navigate('/insurance-list')}
                          style={{ fontSize: '14px', height:'fit-content' }}
                        >
                          Choose another plan
                        </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <div className=" d-flex flex-column  align-items-sm-end">
                        <div className="mb-1">
                          <span className="text-muted">Start Date : </span>
                          <span className="fw-bold">
                            {(() => {
                              if (searchCriteria.departDate) {
                                return new Date(searchCriteria.departDate).toLocaleDateString('en-GB', { 
                                  day: '2-digit', 
                                  month: 'short', 
                                  year: 'numeric' 
                                });
                              }
                              return 'N/A';
                            })()}
                          </span>
                        </div>
                        <div className="mb-1">
                          <span className="text-muted">End Date : </span>
                          <span className="fw-bold">
                            {(() => {
                              // If returnDate exists, use it; otherwise calculate it from departDate and duration
                              if (searchCriteria.returnDate) {
                                return new Date(searchCriteria.returnDate).toLocaleDateString('en-GB', { 
                                  day: '2-digit', 
                                  month: 'short', 
                                  year: 'numeric' 
                                });
                              } else if (searchCriteria.departDate && searchCriteria.duration) {
                                const endDate = new Date(searchCriteria.departDate);
                                endDate.setDate(endDate.getDate() + (searchCriteria.duration - 1));
                                return endDate.toLocaleDateString('en-GB', { 
                                  day: '2-digit', 
                                  month: 'short', 
                                  year: 'numeric' 
                                });
                              }
                              return 'N/A';
                            })()}
                          </span>
                        </div>
                        <div className="mb-2">
                          <span className="text-muted">No. of Paxes: </span>
                          <span className="fw-bold">{passengerDetails.length}</span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Passenger Details Form */}
              <div className="card shadow-sm p-0">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Enter Passenger Details</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={(e) => { e.preventDefault(); handleContinue(); }}>
                    {/* Render passenger forms */}
                    {passengerDetails.map((passenger, index) => renderPassengerForm(passenger, index))}

                    {/* Terms and Conditions */}
                    <div className="row mb-4">
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="termsCheck"
                            checked={termsAccepted}
                            onChange={(e) => {
                              setTermsAccepted(e.target.checked);
                              // Clear error when user checks the box
                              if (e.target.checked && formErrors.termsAccepted) {
                                setFormErrors(prev => {
                                  const newErrors = { ...prev };
                                  delete newErrors.termsAccepted;
                                  return newErrors;
                                });
                              }
                            }}
                          />
                          <label className="form-check-label" htmlFor="termsCheck">
                            I agree to the <a href={SankashTC} target="_blank" className="text-primary">Terms and Conditions</a> and 
                            <a href={SankashTC} target="_blank" className="text-primary"> Privacy Policy</a> of the insurance policy.
                          </label>
                          {formErrors.termsAccepted && (
                            <div className="text-danger" style={{fontSize: '0.875em', marginTop: '0.25rem'}}>
                              {formErrors.termsAccepted}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Error Display */}
                    {error && (
                      <div className="alert alert-danger mb-4" role="alert">
                        <strong>Error:</strong> {error}
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="d-flex justify-content-between mt-4">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => navigate('/insurance-list')}
                      >
                        <FaArrowLeft className="me-2" />
                        Back
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleContinue}
                        disabled={loading || isNavigating}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Validating...
                          </>
                        ) : isNavigating ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Processing...
                          </>
                        ) : (
                          <>
                            <FaArrowRight className="me-2" />
                            Continue
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Column - Price Details */}
            <div className="col-lg-4 order-1 order-lg-2 ">
              <div className="card shadow-sm sticky-top z-0" style={{ top: '100px', }}>
                <div className="card-header bg-primary">
                  <h5 className="mb-0 text-light">Price Details</h5>
                </div>
                <div className="card-body">
                  {/* Cost Breakdown */}
                    <div className="d-flex justify-content-between mb-2">
                      <span>Age Group 0.0 - 70 Yrs</span>
                      <span>₹{priceDetails.basePrice}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">(0.0 to 70 Yrs X {passengerDetails.length})</span>
                      <span>₹{priceDetails.total}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between ">
                      <h4 className="mb-0">Total Price</h4>
                      <span className="fw-bold  fs-5 text-primary">₹{priceDetails.grandTotal}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />

      <style jsx>{`


        
        .card-header {
          transition: background-color 0.2s ease;
        }
        
        .card-header:hover {
          background-color: #f8f9fa !important;
        }
        
        .card-body {
          transition: all 0.3s ease;
        }
        
        .badge {
          font-size: 0.75rem;
        }



         .form-control:focus,
        .form-select:focus {
          border-color: #cd2c22;
          box-shadow: 0 0 0 0.25rem rgba(210, 0, 0, 0.25);
        }

          @media (max-width: 768px) {
          .btn{
            height: 48px;
            padding: 0px 10px;
          }
          } 
          @media (max-width: 576px) {
          .btn{
            height: 40px;
            padding: 0px 10px;
          }
          } 
      `}</style>
    </>
  );
};

export default Insurance_Booking_Page;