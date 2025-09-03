import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Header02 from '../header02';
import Footer from '../footer';
import { bookInsurance } from '../../store/Actions/insuranceAction';
import { setEncryptedItem, getEncryptedItem } from '../../utils/encryption';
import { 
  selectInsuranceBookLoading, 
  selectInsuranceBookError, 
  selectInsuranceBookData,
  selectInsuranceSearchResults,
  selectInsuranceSearchData
} from '../../store/Selectors/insuranceSelectors';
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
    Title: 'MS',
    FirstName: '',
    LastName: '',
    BeneficiaryTitle: 'MR',
    BeneficiaryFirstName: '',
    BeneficiaryLastName: '',
    RelationShipToInsured: 'Self',
    RelationToBeneficiary: 'Spouse',
    Gender: '2',
    Sex: 2,
    DOB: '',
    DOBDay: '',
    DOBMonth: '',
    DOBYear: '',
    PassportNo: '',
    PassportCountry: 'IND',
    PhoneNumber: '',
    EmailId: '',
    AddressLine1: '',
    AddressLine2: '',
    CityCode: '',
    CountryCode: 'IND',
    State: '',
    MajorDestination: '',
    PinCode: ''
  }]);
  
  const [formErrors, setFormErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  // Load data on component mount and when search results change
  useEffect(() => {
    loadBookingData();
  }, [searchResults]);



  const loadBookingData = () => {
    try {
      // Get data from navigation state
      const state = location.state;
      const planId = state?.planId;
      const params = state?.searchParams;
      
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
            Title: 'MS',
            FirstName: '',
            LastName: '',
            BeneficiaryTitle: 'MR',
            BeneficiaryFirstName: '',
            BeneficiaryLastName: '',
            RelationShipToInsured: 'Self',
            RelationToBeneficiary: 'Spouse',
            Gender: '1',
            Sex: 2,
            DOB: '',
            DOBDay: '',
            DOBMonth: '',
            DOBYear: '',
            PassportNo: '',
            PassportCountry: 'IND',
            PhoneNumber: '',
            EmailId: '',
            AddressLine1: '',
            AddressLine2: '',
            CityCode: '',
            CountryCode: 'IND',
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
      return updated;
    });
    
    // Clear error when user starts typing
    if (formErrors[`${field}_${passengerIndex}`]) {
      setFormErrors(prev => ({
        ...prev,
        [`${field}_${passengerIndex}`]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    passengerDetails.forEach((passenger, index) => {
      if (!passenger.FirstName.trim()) errors[`FirstName_${index}`] = 'First name is required';
      if (!passenger.LastName.trim()) errors[`LastName_${index}`] = 'Last name is required';
      if (!passenger.BeneficiaryFirstName.trim()) errors[`BeneficiaryFirstName_${index}`] = 'Beneficiary first name is required';
      if (!passenger.BeneficiaryLastName.trim()) errors[`BeneficiaryLastName_${index}`] = 'Beneficiary last name is required';
      
      // Validate date of birth - check if all three fields are filled
      if (!passenger.DOBDay || !passenger.DOBMonth || !passenger.DOBYear) {
        errors[`DOB_${index}`] = 'Date of birth is required';
      }
      
      if (!passenger.PhoneNumber.trim()) errors[`PhoneNumber_${index}`] = 'Phone number is required';
      if (!passenger.EmailId.trim()) errors[`EmailId_${index}`] = 'Email is required';
      if (!passenger.AddressLine1.trim()) errors[`AddressLine1_${index}`] = 'Address is required';
      if (!passenger.CityCode.trim()) errors[`CityCode_${index}`] = 'City is required';
      if (!passenger.State.trim()) errors[`State_${index}`] = 'State is required';
      if (!passenger.MajorDestination.trim()) errors[`MajorDestination_${index}`] = 'Major destination is required';
      if (!passenger.PinCode) errors[`PinCode_${index}`] = 'PIN code is required';
    });
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBooking = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      // Get authentication data from navigation state
      const authData = location.state?.authData || {};
      
      if (!authData.TokenId) {
        alert('Authentication required. Please search for insurance plans again.');
        navigate('/home-insurance');
        return;
      }

      // Prepare passengers array for booking
      const passengersForBooking = passengerDetails.map(passenger => {
        const beneficiaryName = `${passenger.BeneficiaryTitle} ${passenger.BeneficiaryFirstName} ${passenger.BeneficiaryLastName}`.trim();
        
        // Construct DOB from separate fields
        const dob = passenger.DOBDay && passenger.DOBMonth && passenger.DOBYear 
          ? `${passenger.DOBYear}-${passenger.DOBMonth.padStart(2, '0')}-${passenger.DOBDay.padStart(2, '0')}`
          : passenger.DOB;
        
        return {
          ...passenger,
          DOB: dob,
          BeneficiaryName: beneficiaryName
        };
      });
      
      const bookingPayload = {
        TokenId: authData.TokenId,
        EndUserIp: authData.EndUserIp || '127.0.0.1',
        TraceId: location.state?.traceId || '',
        ResultIndex: selectedPlan?.ResultIndex || 1,
        Passenger: passengersForBooking
      };
      
      const result = await dispatch(bookInsurance(bookingPayload));
      
      if (result && result.Response) {
        if (result.Response.ResponseStatus === 1) {
          // Success - navigate to generate policy page
          
          // Navigate to generate policy page with all data
          navigate('/insurance-generate-policy', { 
            state: { 
              planId: selectedPlan?.ResultIndex,
              passengers: passengerDetails,
              priceDetails: calculateTotalPrice(),
              bookingResponse: result,
              searchParams: searchCriteria,
              authData: authData,
              traceId: location.state?.traceId
            } 
          });
        } else if (result.Response.Error && result.Response.Error.ErrorCode !== 0) {
          // Handle error response with detailed error info
          const errorCode = result.Response.Error.ErrorCode;
          const errorMessage = result.Response.Error.ErrorMessage;
          alert(`Booking failed: ${errorMessage} (Code: ${errorCode})`);
        } else {
          // Unknown error
          alert('Booking failed. Please try again.');
        }
      } else {
        // No response or invalid response
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      alert('Booking failed. Please try again.');
    }
  };

  const titleOptions = [
    { value: 'MR', label: 'Mr.' },
    { value: 'MS', label: 'Ms.' },
    { value: 'MRS', label: 'Mrs.' },
    { value: 'DR', label: 'Dr.' }
  ];

  const genderOptions = [
    { value: '1', label: 'Male' },
    { value: '2', label: 'Female' }
  ];

  const relationshipOptions = [
    { value: 'Self', label: 'Self' },
    { value: 'Spouse', label: 'Spouse' },
    { value: 'Child', label: 'Child' },
    { value: 'Parent', label: 'Parent' },
    { value: 'Sibling', label: 'Sibling' }
  ];

  // Calculate total price based on actual plan data from API
  const calculateTotalPrice = () => {
    if (!selectedPlan) return { basePrice: 0, total: 0, commission: 0, tds: 0, grandTotal: 0 };

    // Get base price from plan - use OfferedPriceRoundedOff if available, otherwise OfferedPrice
    const basePrice = selectedPlan.Price?.OfferedPriceRoundedOff || selectedPlan.Price?.OfferedPrice || 0;
    const passengerCount = passengerDetails.length;
    const total = basePrice * passengerCount;
    
    // Calculate commission and TDS based on actual business logic
    const commission = total * 0.35; // 35% commission
    const tds = total * 0.007; // 0.7% TDS
    
    return {
      basePrice,
      total,
      commission,
      tds,
      grandTotal: total - commission + tds
    };
  };

  const renderPassengerForm = (passenger, index) => (
    <div key={index} className="card shadow-sm mb-4">
      <div className="card-header bg-white">
        <h6 className="mb-0">
          Passenger {index + 1}
          <small className="text-muted ms-2">
            (passenger of age range 0.0 - 70)
          </small>
        </h6>
      </div>
      <div className="card-body">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            {/* Insured Name */}
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">Insured Name*</label>
              <div className="row">
                <div className="col-3">
                  <select
                    className={`form-select ${formErrors[`Title_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.Title}
                    onChange={(e) => handleInputChange('Title', e.target.value, index)}
                    style={{ height: '38px' }}
                  >
                    {titleOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    className={`form-control ${formErrors[`FirstName_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.FirstName}
                    onChange={(e) => handleInputChange('FirstName', e.target.value, index)}
                    placeholder="First Name"
                    style={{ height: '38px' }}
                  />
                  {formErrors[`FirstName_${index}`] && <div className="invalid-feedback">{formErrors[`FirstName_${index}`]}</div>}
                </div>
                <div className="col-5">
                  <input
                    type="text"
                    className={`form-control ${formErrors[`LastName_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.LastName}
                    onChange={(e) => handleInputChange('LastName', e.target.value, index)}
                    placeholder="Last Name"
                    style={{ height: '38px' }}
                  />
                  {formErrors[`LastName_${index}`] && <div className="invalid-feedback">{formErrors[`LastName_${index}`]}</div>}
                </div>
              </div>
            </div>

            {/* Relation To Insured */}
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">Relation To Insured*</label>
              <select
                className={`form-select ${formErrors[`RelationShipToInsured_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.RelationShipToInsured}
                onChange={(e) => handleInputChange('RelationShipToInsured', e.target.value, index)}
                style={{ height: '38px' }}
              >
                {relationshipOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* D.O.B */}
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">D.O.B*</label>
              <div className="row">
                <div className="col-4">
                  <select
                    className={`form-select ${formErrors[`DOBDay_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.DOBDay || ''}
                    onChange={(e) => handleInputChange('DOBDay', e.target.value, index)}
                    style={{ height: '38px' }}
                  >
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="col-4">
                  <select
                    className={`form-select ${formErrors[`DOBMonth_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.DOBMonth || ''}
                    onChange={(e) => handleInputChange('DOBMonth', e.target.value, index)}
                    style={{ height: '38px' }}
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
                    className={`form-select ${formErrors[`DOBYear_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.DOBYear || ''}
                    onChange={(e) => handleInputChange('DOBYear', e.target.value, index)}
                    style={{ height: '38px' }}
                  >
                    <option value="">Year</option>
                    {Array.from({ length: 100 }, (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return <option key={year} value={year}>{year}</option>;
                    })}
                  </select>
                </div>
              </div>
              {formErrors[`DOB_${index}`] && <div className="invalid-feedback">{formErrors[`DOB_${index}`]}</div>}
            </div>

            {/* Major Destination */}
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">Major Destination*</label>
              <select
                className={`form-select ${formErrors[`MajorDestination_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.MajorDestination}
                onChange={(e) => handleInputChange('MajorDestination', e.target.value, index)}
                style={{ height: '38px' }}
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
              {formErrors[`MajorDestination_${index}`] && <div className="invalid-feedback">{formErrors[`MajorDestination_${index}`]}</div>}
            </div>

            {/* Country */}
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">Country*</label>
              <select
                className={`form-select ${formErrors[`CountryCode_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.CountryCode}
                onChange={(e) => handleInputChange('CountryCode', e.target.value, index)}
                style={{ height: '38px' }}
              >
                <option value="IND">India</option>
                <option value="USA">USA</option>
                <option value="GBR">UK</option>
                <option value="CAN">Canada</option>
                <option value="AUS">Australia</option>
              </select>
            </div>

            {/* State */}
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">State*</label>
              <select
                className={`form-select ${formErrors[`State_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.State || ''}
                onChange={(e) => handleInputChange('State', e.target.value, index)}
                style={{ height: '38px' }}
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
              {formErrors[`State_${index}`] && <div className="invalid-feedback">{formErrors[`State_${index}`]}</div>}
            </div>

            {/* City */}
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">City*</label>
              <select
                className={`form-select ${formErrors[`CityCode_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.CityCode}
                onChange={(e) => handleInputChange('CityCode', e.target.value, index)}
                style={{ height: '38px' }}
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
              {formErrors[`CityCode_${index}`] && <div className="invalid-feedback">{formErrors[`CityCode_${index}`]}</div>}
            </div>

            {/* Mobile */}
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">Mobile*</label>
              <input
                type="tel"
                className={`form-control ${formErrors[`PhoneNumber_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.PhoneNumber}
                onChange={(e) => handleInputChange('PhoneNumber', e.target.value, index)}
                placeholder="Enter mobile number"
                style={{ height: '38px' }}
              />
              {formErrors[`PhoneNumber_${index}`] && <div className="invalid-feedback">{formErrors[`PhoneNumber_${index}`]}</div>}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            {/* Beneficiary Name */}
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">Beneficiary Name*</label>
              <div className="row">
                <div className="col-3">
                  <select
                    className={`form-select ${formErrors[`BeneficiaryTitle_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.BeneficiaryTitle}
                    onChange={(e) => handleInputChange('BeneficiaryTitle', e.target.value, index)}
                    style={{ height: '38px' }}
                  >
                    {titleOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    className={`form-control ${formErrors[`BeneficiaryFirstName_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.BeneficiaryFirstName}
                    onChange={(e) => handleInputChange('BeneficiaryFirstName', e.target.value, index)}
                    placeholder="First Name"
                    style={{ height: '38px' }}
                  />
                  {formErrors[`BeneficiaryFirstName_${index}`] && <div className="invalid-feedback">{formErrors[`BeneficiaryFirstName_${index}`]}</div>}
                </div>
                <div className="col-5">
                  <input
                    type="text"
                    className={`form-control ${formErrors[`BeneficiaryLastName_${index}`] ? 'is-invalid' : ''}`}
                    value={passenger.BeneficiaryLastName}
                    onChange={(e) => handleInputChange('BeneficiaryLastName', e.target.value, index)}
                    placeholder="Last Name"
                    style={{ height: '38px' }}
                  />
                  {formErrors[`BeneficiaryLastName_${index}`] && <div className="invalid-feedback">{formErrors[`BeneficiaryLastName_${index}`]}</div>}
                </div>
              </div>
            </div>

            {/* Insured Gender */}
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">Insured Gender*</label>
              <select
                className={`form-select ${formErrors[`Gender_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.Gender}
                onChange={(e) => handleInputChange('Gender', e.target.value, index)}
                style={{ height: '38px' }}
              >
                {genderOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Passport No */}
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">Passport No</label>
              <input
                type="text"
                className={`form-control ${formErrors[`PassportNo_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.PassportNo}
                onChange={(e) => handleInputChange('PassportNo', e.target.value, index)}
                placeholder="Enter passport number"
                style={{ height: '38px' }}
              />
              {formErrors[`PassportNo_${index}`] && <div className="invalid-feedback">{formErrors[`PassportNo_${index}`]}</div>}
            </div>

            {/* Address */}
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">Address*</label>
              <input
                type="text"
                className={`form-control ${formErrors[`AddressLine1_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.AddressLine1}
                onChange={(e) => handleInputChange('AddressLine1', e.target.value, index)}
                placeholder="Address Line 1"
                style={{ height: '38px' }}
              />
              {formErrors[`AddressLine1_${index}`] && <div className="invalid-feedback">{formErrors[`AddressLine1_${index}`]}</div>}
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
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">Pin Code*</label>
              <input
                type="text"
                className={`form-control ${formErrors[`PinCode_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.PinCode}
                onChange={(e) => handleInputChange('PinCode', e.target.value, index)}
                placeholder="Enter PIN code"
                style={{ height: '38px' }}
              />
              {formErrors[`PinCode_${index}`] && <div className="invalid-feedback">{formErrors[`PinCode_${index}`]}</div>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-bold text-dark">Email*</label>
              <input
                type="email"
                className={`form-control ${formErrors[`EmailId_${index}`] ? 'is-invalid' : ''}`}
                value={passenger.EmailId}
                onChange={(e) => handleInputChange('EmailId', e.target.value, index)}
                placeholder="Enter email address"
                style={{ height: '38px' }}
              />
              {formErrors[`EmailId_${index}`] && <div className="invalid-feedback">{formErrors[`EmailId_${index}`]}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );



  const priceDetails = calculateTotalPrice();

  return (
    <>
      <Header02 />
      
      <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          {/* 4-Step Navigation */}
          <div className="row mb-4">
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
          </div>

          {/* Main Content */}
          <div className="row">
            {/* Left Column - Passenger Details */}
            <div className="col-lg-8">
              {/* Insurance Plan Overview */}
              <div className="card shadow-sm mb-4 ">
                <div className="card-body row align-items-center ">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <h4 className="mb-0 fw-bold text-primary">
                            {(() => {
                              const price = selectedPlan?.Price?.OfferedPriceRoundedOff || selectedPlan?.Price?.OfferedPrice || 0;
                              const days = searchCriteria.days || 7;
                              return `${price}K ${days} DAYS`;
                            })()}
                          </h4>
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
                    <div className="col-md-6">
                      <div className="text-end">
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
                              if (searchCriteria.returnDate) {
                                return new Date(searchCriteria.returnDate).toLocaleDateString('en-GB', { 
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
              <div className="card shadow-sm">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Enter Passenger Details</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={(e) => { e.preventDefault(); handleBooking(); }}>
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
                            required
                          />
                          <label className="form-check-label" htmlFor="termsCheck">
                            I agree to the <a href="#" className="text-primary">Terms and Conditions</a> and 
                            <a href="#" className="text-primary"> Privacy Policy</a> of the insurance policy.
                          </label>
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
                        className="btn btn-outline-secondary"
                        onClick={() => navigate('/insurance-list')}
                      >
                        <FaArrowLeft className="me-2" />
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Processing...
                          </>
                        ) : (
                          <>
                            Continue
                            <FaArrowRight className="ms-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Column - Price Details */}
            <div className="col-lg-4">
              <div className="card shadow-sm sticky-top" style={{ top: '100px' }}>
                <div className="card-header bg-primary">
                  <h6 className="mb-0 text-light">Price Details</h6>
                </div>
                <div className="card-body">
                  {/* Dates and Pax */}
                  {/* <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Start Date:</span>
                      <span>
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
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">End Date:</span>
                      <span>
                        {(() => {
                          if (searchCriteria.returnDate) {
                            return new Date(searchCriteria.returnDate).toLocaleDateString('en-GB', { 
                              day: '2-digit', 
                              month: 'short', 
                              year: 'numeric' 
                            });
                          }
                          return 'N/A';
                        })()}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-muted">No. of Paxes:</span>
                      <span>{passengerDetails.length}</span>
                    </div>
                    <hr />
                  </div> */}

                  {/* Cost Breakdown */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Age Group 0.0 - 70 Yrs</span>
                      <span>₹{priceDetails.basePrice}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">(0.0 to 70 Yrs X {passengerDetails.length})</span>
                      <span>₹{priceDetails.total}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between mb-2">
                      <span className="fw-bold">Total</span>
                      <span className="fw-bold">₹{priceDetails.total}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-danger">Commission (-)</span>
                      <span className="text-danger">₹{priceDetails.commission.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-success">Tds (+)</span>
                      <span className="text-success">₹{priceDetails.tds.toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <span className="fw-bold fs-5">Grand Total</span>
                      <span className="fw-bold fs-5 text-primary">₹{priceDetails.grandTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Insurance_Booking_Page;