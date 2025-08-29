import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getInsuranceList,
  authenticateInsuranceAPI,
} from "../../store/Actions/insuranceAction";
import {
  selectIsInsuranceSearching,
  selectInsuranceSearchError,
  selectInsuranceAuthData,
} from "../../store/Selectors/insuranceSelectors";

const InsuranceSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for form inputs - Updated to match API specification
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [duration, setDuration] = useState(1);
  const [passengerCount, setPassengerCount] = useState(1);
  const [passengerAges, setPassengerAges] = useState([25]);
  const [planCategory, setPlanCategory] = useState({ value: 1, label: "Domestic Travel Policy" });
  const [planType, setPlanType] = useState({ value: 1, label: "Single Trip" });
  const [planCoverage, setPlanCoverage] = useState({ value: 3, label: "WorldWide" });

  // Refs for focus management
  const departDateRef = useRef();
  const returnDateRef = useRef();
  const durationRef = useRef();
  const passengerCountRef = useRef();
  const searchBtnRef = useRef();

  const loading = useSelector(selectIsInsuranceSearching);
  const error = useSelector(selectInsuranceSearchError);
  const authData = useSelector(selectInsuranceAuthData);

  // Plan category options - Updated to match API specification
  const planCategoryOptions = [
    { value: 1, label: "Domestic Travel Policy" },
    { value: 2, label: "Overseas Travel Insurance" },
  ];

  // Plan type options - Updated to match API specification
  const planTypeOptions = [
    { value: 1, label: "Single Trip" },
    { value: 2, label: "Annual Multi Trip (AMT)" },
  ];

  // Plan coverage options - Updated to match API specification exactly
  const planCoverageOptions = [
    { value: 1, label: "US" },
    { value: 2, label: "Non-US" },
    { value: 3, label: "WorldWide" },
    { value: 4, label: "India" },
    { value: 5, label: "Asia" },
    { value: 6, label: "Canada" },
    { value: 7, label: "Australia" },
    { value: 8, label: "Schenegen Countries" },
  ];

  // Passenger count options
  const passengerOptions = Array.from({ length: 9 }, (_, i) => ({
    value: i + 1,
    label: (i + 1).toString()
  }));

  // Prefill from localStorage on all pages
  useEffect(() => {
    const stored = localStorage.getItem('insuranceSearchParams');
    if (stored) {
      try {
        const params = JSON.parse(stored);
        
        if (params.departDate) setDepartDate(new Date(params.departDate + 'T00:00:00'));
        if (params.returnDate) setReturnDate(new Date(params.returnDate + 'T00:00:00'));
        if (params.duration) setDuration(params.duration);
        if (params.passengerCount) setPassengerCount(params.passengerCount);
        if (params.passengerAges) setPassengerAges(params.passengerAges);
        if (params.planCategory) setPlanCategory(params.planCategory);
        if (params.planType) setPlanType(params.planType);
        if (params.planCoverage) setPlanCoverage(params.planCoverage);
      } catch (e) {
        // ignore parse errors
      }
    }
  }, []);

  // Update passenger ages when passenger count changes
  useEffect(() => {
    if (passengerAges.length < passengerCount) {
      setPassengerAges([...passengerAges, ...Array(passengerCount - passengerAges.length).fill(32)]);
    } else if (passengerAges.length > passengerCount) {
      setPassengerAges(passengerAges.slice(0, passengerCount));
    }
  }, [passengerCount, passengerAges]);

  // Only authenticate on component mount, don't fetch insurance data automatically
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const authResponse = await dispatch(authenticateInsuranceAPI());
        if (!authResponse || !authResponse.TokenId) {
          console.error('InsuranceSearch: Authentication failed');
        }
      } catch (error) {
        console.error('InsuranceSearch: Authentication failed:', error);
      }
    };

    initializeAuth();
  }, [dispatch]); // Only depend on dispatch, not on form state changes





  const handleDepartDateChange = useCallback((date) => {
    setDepartDate(date);
    // Ensure return date is not before depart date
    if (returnDate < date) {
      setReturnDate(date);
    }
  }, [returnDate]);

  const handleReturnDateChange = useCallback((date) => {
    setReturnDate(date);
  }, []);

  const handleDurationChange = useCallback((e) => {
    const value = parseInt(e.target.value);
    if (value >= 1) {
      setDuration(value);
    }
  }, []);

  const handlePassengerCountChange = useCallback((selectedOption) => {
    setPassengerCount(selectedOption.value);
  }, []);

  const handlePassengerAgeChange = useCallback((index, value) => {
    const newAges = [...passengerAges];
    newAges[index] = parseInt(value) || 0;
    setPassengerAges(newAges);
  }, [passengerAges]);

  const handlePlanCategoryChange = useCallback((selectedOption) => {
    setPlanCategory(selectedOption);
  }, []);

  const handlePlanTypeChange = useCallback((selectedOption) => {
    setPlanType(selectedOption);
  }, []);

  const handlePlanCoverageChange = useCallback((selectedOption) => {
    setPlanCoverage(selectedOption);
  }, []);

  // Validate form data according to API specification
  const validateForm = () => {
    const errors = [];

    if (!departDate || !returnDate || !duration || !passengerCount) {
      errors.push("Please fill in all required fields");
    }

    if (departDate >= returnDate) {
      errors.push("Return date must be after depart date");
    }

    if (passengerCount < 1 || passengerCount > 9) {
      errors.push("Number of passengers must be between 1 and 9");
    }

    if (passengerAges.length !== passengerCount) {
      errors.push("Passenger age count must match number of passengers");
    }

    // Validate passenger ages based on plan type
    const minAge = planType.value === 1 ? 0.5 : 1; // Single trip: 6 months, AMT: 1 year
    const maxAge = 70;

    for (let i = 0; i < passengerAges.length; i++) {
      if (passengerAges[i] < minAge || passengerAges[i] > maxAge) {
        errors.push(`Passenger ${i + 1} age must be between ${minAge} and ${maxAge} years`);
      }
    }

    return errors;
  };

  // Validate API parameter combinations - Now allows any combination for testing
  const validateApiCombination = () => {
    // No restrictions - allow any combination to be tested
    return [];
  };

  const handleSearch = useCallback(async () => {
    try {
      // Step 1: Ensure we have authentication data
      if (!authData || !authData.TokenId) {
        const authResponse = await dispatch(authenticateInsuranceAPI());
        
        if (!authResponse || !authResponse.TokenId) {
          console.error('InsuranceSearch: Authentication failed - no TokenId received');
          alert('Authentication failed. Please try again.');
          return;
        }
      }
      
      // Step 2: Validate form data according to API specification
      const formErrors = validateForm();
      if (formErrors.length > 0) {
        alert(formErrors.join('\n'));
        return;
      }

      // Step 3: Validate API parameter combinations (no restrictions - allow all combinations)
      const apiErrors = validateApiCombination();
      if (apiErrors.length > 0) {
        alert(apiErrors.join('\n'));
        return;
      }

      // Validate passenger ages based on plan type
      const validAges = passengerAges.slice(0, passengerCount);
      const minAge = planType.value === 1 ? 0.5 : 1; // Single trip: 6 months, AMT: 1 year
      const maxAge = 70;
      
      if (validAges.some(age => age < minAge || age > maxAge)) {
        alert(`Passenger ages must be between ${minAge} and ${maxAge} years for ${planType.label}`);
        return;
      }

             const searchParams = {
         departDate: `${departDate.getFullYear()}-${String(departDate.getMonth() + 1).padStart(2, '0')}-${String(departDate.getDate()).padStart(2, '0')}`,
         returnDate: `${returnDate.getFullYear()}-${String(returnDate.getMonth() + 1).padStart(2, '0')}-${String(returnDate.getDate()).padStart(2, '0')}`,
         duration,
         passengerCount,
         passengerAges: validAges,
         planCategory: planCategory.value,
         planType: planType.value,
         planCoverage: planCoverage.value,
       };

      localStorage.setItem('insuranceSearchParams', JSON.stringify(searchParams));
      
             // Step 3: Prepare API parameters according to specification
       const apiParams = {
         PlanCategory: planCategory.value,
         PlanType: planType.value,
         PlanCoverage: planCoverage.value,
         TravelStartDate: `${departDate.getFullYear()}/${(departDate.getMonth() + 1).toString().padStart(2, '0')}/${departDate.getDate().toString().padStart(2, '0')}`,
         TravelEndDate: `${returnDate.getFullYear()}/${(returnDate.getMonth() + 1).toString().padStart(2, '0')}/${returnDate.getDate().toString().padStart(2, '0')}`,
         NoOfPax: passengerCount,
         PaxAge: validAges,
         EndUserIp: authData?.EndUserIp || '127.0.0.1',
         TokenId: authData?.TokenId,
       };
      
      // Validate API parameters
      if (!apiParams.TokenId) {
        console.error('InsuranceSearch: Missing TokenId in API params');
        alert('Authentication token missing. Please try again.');
        return;
      }
      
      if (!apiParams.EndUserIp) {
        console.error('InsuranceSearch: Missing EndUserIp in API params');
        alert('User IP missing. Please try again.');
        return;
      }
      
             const searchResponse = await dispatch(getInsuranceList(apiParams));
       
       // Debug: Log the response to understand what we're getting
       console.log('InsuranceSearch: Full API response:', searchResponse);

             // Check if the search was successful
       if (searchResponse && searchResponse.Response) {
         if (searchResponse.Response.ResponseStatus === 1) {
           // Check if we have actual results
           if (searchResponse.Response.Results && searchResponse.Response.Results.length > 0) {
             // Success with results - navigate to results
             navigate('/insurance-list');
           } else {
             // Success but no results found
             alert('No insurance plans found for the selected criteria. This combination may not be supported. Please try different options.');
           }
         } else if (searchResponse.Response.Error) {
           // API returned an error
           const errorMsg = searchResponse.Response.Error.ErrorMessage || 'Search failed';
           const errorCode = searchResponse.Response.Error.ErrorCode;
           console.error('InsuranceSearch: API Error:', errorCode, errorMsg);
           alert(`Search failed: ${errorMsg}\nError Code: ${errorCode}`);
         } else {
           // No results or other issue
           alert('No insurance plans found for the selected criteria. Please try different options.');
         }
       } else {
         // Unexpected response format
         console.error('InsuranceSearch: Unexpected response format:', searchResponse);
         alert('Unexpected response from API. Please try again.');
       }
         } catch (error) {
       console.error('Search failed:', error);
       
       // Check if it's an API error with specific message
       if (error.message && error.message.includes('Invalid Date Format')) {
         alert('Date format error: Please ensure dates are in the correct format.');
       } else if (error.message && error.message.includes('No Results found')) {
         alert('No insurance plans found for the selected criteria. This combination may not be supported. Please try different options.');
       } else if (error.message && error.message.includes('400')) {
         alert('Bad Request: The selected combination of parameters may not be supported by the API. Please try different options.');
       } else {
         alert(`Search failed: ${error.message || 'Please try again.'}`);
       }
     }
     }, [departDate, returnDate, duration, passengerCount, passengerAges, planCategory, planType, planCoverage, authData, dispatch, navigate]);

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: state.isFocused ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#fff',
      padding: '8px 12px',
      width: '100%',
      '&:hover': {
        border: 'none',
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '4px',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#999',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#333',
    }),
  };

  return (
    <>
      <style>
        {`
          .search-wrap {
            background-color: #fff;
            height: auto;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          

          .form-group {
            margin-bottom: 20px;
          }

          .form-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #333;
            font-size: 14px;
          }

          .form-control {
            width: 100%;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            padding: 10px 12px;
            font-size: 14px;
            transition: border-color 0.3s ease;
          }

          .form-control:focus {
            outline: none;
            border-color: #cd2c22;
            box-shadow: 0 0 0 2px rgba(205, 44, 34, 0.1);
          }

          .date-input-container {
            position: relative;
          }

          .date-input-container .form-control {
            padding-right: 35px;
          }

          .calendar-icon {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            color: #666;
            pointer-events: none;
          }

          .duration-container {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .duration-container .form-control {
            width: 80px;
            text-align: center;
          }

          .duration-text {
            color: #666;
            font-size: 14px;
          }

          .passenger-info {
            color: #666;
            font-size: 12px;
            margin-top: 5px;
          }

          .age-inputs {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
          }

          .age-input-group {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .age-input-group .form-control {
            width: 60px;
            text-align: center;
          }

          .search-button {
            background: #1e3a8a;
            color: #fff;
            border: none;
            padding: 12px 30px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease;
            float: right;
            margin-top: 20px;
          }

          .search-button:hover {
            background: #1e40af;
          }

          .search-button:disabled {
            background: #9ca3af;
            cursor: not-allowed;
          }

          .row {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
          }

          .col {
            flex: 1;
          }

          .col-2 {
            flex: 2;
          }

          .plan-options-row {
            margin-bottom: 25px;
          }

          .plan-options-row .col {
            min-width: 200px;
          }

          @media (max-width: 768px) {
            .row {
              flex-direction: column;
              gap: 15px;
            }
            
            .search-wrap {
              padding: 20px;
            }

            .plan-options-row .col {
              min-width: auto;
            }
          }
        `}
      </style>
      
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="search-wrap">
              

              <div className="row plan-options-row">
                <div className="col">
                  <div className="form-group">
                    <label className="form-label">Plan Category</label>
                    <Select
                      options={planCategoryOptions}
                      value={planCategory}
                      onChange={handlePlanCategoryChange}
                      styles={customSelectStyles}
                      placeholder="Select Plan Category"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label className="form-label">Plan Type</label>
                    <Select
                      options={planTypeOptions}
                      value={planType}
                      onChange={handlePlanTypeChange}
                      styles={customSelectStyles}
                      placeholder="Select Plan Type"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label className="form-label">Plan Coverage</label>
                    <Select
                      options={planCoverageOptions}
                      value={planCoverage}
                      onChange={handlePlanCoverageChange}
                      styles={customSelectStyles}
                      placeholder="Select Plan Coverage"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label className="form-label">Depart</label>
                    <div className="date-input-container">
                                             <DatePicker
                         selected={departDate}
                         onChange={handleDepartDateChange}
                         dateFormat="yyyy/MM/dd"
                         placeholderText="Select Date"
                         className="form-control"
                         ref={departDateRef}
                         minDate={new Date()}
                       />
                      <i className="fa fa-calendar calendar-icon"></i>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label className="form-label">Return</label>
                    <div className="date-input-container">
                      <DatePicker
                        selected={returnDate}
                        onChange={handleReturnDateChange}
                        dateFormat="yyyy/MM/dd"
                        placeholderText="Select Date"
                        className="form-control"
                        ref={returnDateRef}
                        minDate={departDate}
                      />
                      <i className="fa fa-calendar calendar-icon"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label className="form-label">Duration</label>
                    <div className="duration-container">
                      <input
                        type="number"
                        className="form-control"
                        value={duration}
                        onChange={handleDurationChange}
                        min="1"
                        ref={durationRef}
                      />
                      <span className="duration-text">Days</span>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-group">
                    <label className="form-label">No. of Pax</label>
                    <Select
                      options={passengerOptions}
                      value={{ value: passengerCount, label: passengerCount.toString() }}
                      onChange={handlePassengerCountChange}
                      styles={customSelectStyles}
                      placeholder="Select Passengers"
                      ref={passengerCountRef}
                    />
                    <div className="passenger-info">
                      {planType.value === 1 ? 
                        'Single Trip: Minimum age 6 months (0.5y) | Maximum age 70 years' :
                        'Annual Multi Trip: Minimum age 1 year | Maximum age 70 years'
                      }
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Age Details</label>
                <div className="age-inputs">
                  {Array.from({ length: passengerCount }, (_, index) => (
                    <div key={index} className="age-input-group">
                      <span>Pax {index + 1}</span>
                                              <input
                          type="number"
                          className="form-control"
                          value={passengerAges[index] || ''}
                          onChange={(e) => handlePassengerAgeChange(index, e.target.value)}
                          min={planType.value === 1 ? 0.5 : 1}
                          max="70"
                          step={planType.value === 1 ? 0.5 : 1}
                          placeholder="Age"
                        />
                    </div>
                  ))}
                </div>
              </div>

              {/* Plan Summary */}
              <div className="form-group">
                <div className="alert alert-info">
                  <strong>Selected Plan:</strong> {planCategory.label} | {planType.label} | {planCoverage.label}
                  <br />
                  <strong>Trip Duration:</strong> {Math.ceil((returnDate - departDate) / (1000 * 60 * 60 * 24))} days
                  <br />
                  <strong>Passengers:</strong> {passengerCount} ({passengerAges.slice(0, passengerCount).join(', ')} years)
                </div>
              </div>



                                          <div className="d-flex gap-3 justify-content-end">
                <button
                  className="search-button"
                  onClick={handleSearch}
                  disabled={loading}
                  ref={searchBtnRef}
                >
                  {loading ? 'Searching...' : 'Search Insurance'}
                </button>
              </div>

              {error && <div className="text-danger mt-3">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsuranceSearch;
