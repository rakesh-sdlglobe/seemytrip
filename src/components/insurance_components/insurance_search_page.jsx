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
import { setEncryptedItem, getEncryptedItem } from "../../utils/encryption";
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

  // Prefill form data from localStorage for better UX
  useEffect(() => {
    const params = getEncryptedItem('insuranceSearchParams');
    if (params) {
      if (params.departDate) setDepartDate(new Date(params.departDate + 'T00:00:00'));
      if (params.returnDate) setReturnDate(new Date(params.returnDate + 'T00:00:00'));
      if (params.duration) setDuration(params.duration);
      if (params.passengerCount) setPassengerCount(params.passengerCount);
      if (params.passengerAges) setPassengerAges(params.passengerAges);
      if (params.planCategory) setPlanCategory(params.planCategory);
      if (params.planType) setPlanType(params.planType);
      if (params.planCoverage) setPlanCoverage(params.planCoverage);
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
          // Authentication failed
        }
      } catch (error) {
        // Authentication failed
      }
    };

    initializeAuth();
  }, [dispatch]); // Only depend on dispatch, not on form state changes

  // Force re-render to ensure default active tab is visible
  useEffect(() => {
    // This ensures the Single Trip tab is properly highlighted on mount
    setPlanType({ value: 1, label: "Single Trip" });
  }, []);

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
          alert('Authentication failed. Please try again.');
          return;
        }
      }
      
      // No localStorage storage - auth data will be passed via navigation state
      
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

      // Store form data in localStorage for better UX
      setEncryptedItem('insuranceSearchParams', searchParams);
      
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
        alert('Authentication token missing. Please try again.');
        return;
      }
      
      if (!apiParams.EndUserIp) {
        alert('User IP missing. Please try again.');
        return;
      }
      
      const searchResponse = await dispatch(getInsuranceList(apiParams));

      // Check if the search was successful
      if (searchResponse && searchResponse.Response) {
        if (searchResponse.Response.ResponseStatus === 1) {
          // Check if we have actual results
          if (searchResponse.Response.Results && searchResponse.Response.Results.length > 0) {
            // No localStorage storage - TraceId will be passed via navigation state
            
            // Success with results - navigate to results with search data
            navigate('/insurance-list', {
              state: {
                searchParams: searchParams,
                authData: authData,
                traceId: searchResponse.Response.TraceId
              }
            });
          } else {
            // Success but no results found
            alert('No insurance plans found for the selected criteria. This combination may not be supported. Please try different options.');
          }
        } else if (searchResponse.Response.Error) {
          // API returned an error
          const errorMsg = searchResponse.Response.Error.ErrorMessage || 'Search failed';
          const errorCode = searchResponse.Response.Error.ErrorCode;
          alert(`Search failed: ${errorMsg}\nError Code: ${errorCode}`);
        } else {
          // No results or other issue
          alert('No insurance plans found for the selected criteria. Please try different options.');
        }
      } else {
        // Unexpected response format
        alert('Unexpected response from API. Please try again.');
      }
    } catch (error) {
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
      padding: '12px',
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
            padding: 20px;
            border-radius: 8px;
          }

          @media (max-width: 768px) {
            .search-wrap {
              padding: 15px;
              margin-top: 15px;
            }
          }

          @media (max-width: 576px) {
            .search-wrap {
              padding: 10px;
              margin-top: 10px;
            }
          }

          .form-control {
            font-weight: bold;
            width: 100%;
            border: none;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            padding: 12px;
          }

          .form-control:focus {
            outline: none;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .btn.full-width {
            width: 100%;
            font-weight: 500;
          }

          .react-select__control {
            border: none;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
          }

          .react-select__control:focus {
            outline: none;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          /* DatePicker month/year color override */
          .react-datepicker__current-month,
          .react-datepicker__year-read-view--down-arrow,
          .react-datepicker__month-read-view--down-arrow {
            color: #000 !important;
          }

          .plan-type-tabs {
            border-bottom: 2px solid #e9ecef;
            margin-bottom: 20px;
            background: #f8f9fa;
            padding: 15px 20px;
            border-radius: 8px 8px 0 0;
          }

          .plan-type-tabs .btn {
            border: none;
            background: none;
            color: #6c757d;
            font-weight: 500;
            padding: 12px 20px;
            margin-right: 10px;
            border-radius: 0;
            position: relative;
            transition: all 0.3s ease;
          }

          .plan-type-tabs .btn.active {
            color: #cd2c22 !important;
            background: #fff !important;
            border-bottom: 3px solid #cd2c22 !important;
            font-weight: 600 !important;
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 4px 4px 0 0;
            position: relative;
            z-index: 2;
          }

          /* Ensure default active state is visible */
          .plan-type-tabs .btn[data-active="true"] {
            color: #cd2c22 !important;
            background: #fff !important;
            border-bottom: 3px solid #cd2c22 !important;
            font-weight: 600 !important;
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 4px 4px 0 0;
            position: relative;
            z-index: 2;
          }

          .plan-type-tabs .btn:hover {
            color: #cd2c22;
            background: none;
            transform: translateY(-1px);
          }

          .plan-type-tabs .btn:not(.active) {
            opacity: 0.7;
            color: #6c757d !important;
            background: none !important;
            border-bottom: none !important;
            font-weight: 500 !important;
            transform: none;
            box-shadow: none;
            border-radius: 0;
          }

          /* Force active state visibility */
          .plan-type-tabs .btn.active,
          .plan-type-tabs .btn[data-active="true"] {
            color: #cd2c22 !important;
            background: #fff !important;
            border-bottom: 3px solid #cd2c22 !important;
            font-weight: 600 !important;
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 4px 4px 0 0;
            position: relative;
            z-index: 2;
          }

          .age-inputs {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
          }

          .age-input-group {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .age-input-group .form-control {
            width: 80px;
            text-align: center;
          }

          .info-text {
            font-size: 12px;
            color: #6c757d;
            font-style: italic;
            margin-top: 5px;
          }

          .form-section {
            transition: all 0.3s ease;
            animation: fadeIn 0.3s ease-in;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .tab-indicator {
            background: linear-gradient(135deg, #cd2c22 0%, #e74c3c 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-align: center;
            margin-bottom: 20px;
            display: inline-block;
          }
        `}
      </style>
      
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="search-wrap">
                             {/* Plan Type Tabs - Single Trip is active by default */}
               <div className="plan-type-tabs">
                 <button
                   className={`btn ${planType.value === 1 ? 'active' : ''}`}
                   onClick={() => setPlanType({ value: 1, label: "Single Trip" })}
                   aria-pressed={planType.value === 1}
                   data-active={planType.value === 1}
                   style={{
                     color: planType.value === 1 ? '#cd2c22' : '#6c757d',
                     background: planType.value === 1 ? '#fff' : 'none',
                     borderBottom: planType.value === 1 ? '3px solid #cd2c22' : 'none',
                     fontWeight: planType.value === 1 ? '600' : '500',
                     transform: planType.value === 1 ? 'translateY(-1px)' : 'none',
                     boxShadow: planType.value === 1 ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
                     borderRadius: planType.value === 1 ? '4px 4px 0 0' : '0',
                     position: 'relative',
                     zIndex: planType.value === 1 ? '2' : '1'
                   }}
                 >
                   Single Trip
                 </button>
                 <button
                   className={`btn ${planType.value === 2 ? 'active' : ''}`}
                   onClick={() => setPlanType({ value: 2, label: "Annual Multi Trip (AMT)" })}
                   aria-pressed={planType.value === 2}
                   data-active={planType.value === 2}
                   style={{
                     color: planType.value === 2 ? '#cd2c22' : '#6c757d',
                     background: planType.value === 2 ? '#fff' : 'none',
                     borderBottom: planType.value === 2 ? '3px solid #cd2c22' : 'none',
                     fontWeight: planType.value === 2 ? '600' : '500',
                     transform: planType.value === 2 ? 'translateY(-1px)' : 'none',
                     boxShadow: planType.value === 2 ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
                     borderRadius: planType.value === 2 ? '4px 4px 0 0' : '0',
                     position: 'relative',
                     zIndex: planType.value === 2 ? '2' : '1'
                   }}
                 >
                   Annual Multi Trip
                 </button>
               </div>

                             {/* Single Trip Form Fields */}
               {planType.value === 1 && (
                 <>
                   <div className="tab-indicator">
                     🚀 Single Trip Insurance - One-time coverage for your journey
                   </div>
                   <div className="form-section">
                     <div className="row gy-3 gx-md-3 gx-sm-2">
                   <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                     <label className="form-label fw-bold text-dark">Plan Category</label>
                     <Select
                       options={planCategoryOptions}
                       value={planCategory}
                       onChange={handlePlanCategoryChange}
                       styles={customSelectStyles}
                       placeholder="Select Plan Category"
                     />
                   </div>

                   <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                     <label className="form-label fw-bold text-dark">Plan Coverage</label>
                     <Select
                       options={planCoverageOptions}
                       value={planCoverage}
                       onChange={handlePlanCoverageChange}
                       styles={customSelectStyles}
                       placeholder="Select Plan Coverage"
                     />
                   </div>

                   <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                     <label className="form-label fw-bold text-dark">Depart Date</label>
                     <DatePicker
                       selected={departDate}
                       onChange={handleDepartDateChange}
                       dateFormat="dd/MM/yyyy"
                       placeholderText="Select Date"
                       className="form-control"
                       ref={departDateRef}
                       minDate={new Date()}
                     />
                   </div>

                   <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                     <label className="form-label fw-bold text-dark">Return Date</label>
                     <DatePicker
                       selected={returnDate}
                       onChange={handleReturnDateChange}
                       dateFormat="dd/MM/yyyy"
                       placeholderText="Select Date"
                       className="form-control"
                       ref={returnDateRef}
                       minDate={departDate}
                     />
                   </div>
                 </div>
                   </div>
                 </>
               )}

               {/* Annual Multi Trip Form Fields */}
               {planType.value === 2 && (
                 <>
                   <div className="tab-indicator">
                     📅 Annual Multi Trip Insurance - Year-round coverage for multiple journeys
                   </div>
                   <div className="form-section">
                     <div className="row gy-3 gx-md-3 gx-sm-2">
                       <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                         <label className="form-label fw-bold text-dark">Plan Category</label>
                         <Select
                           options={planCategoryOptions}
                           value={planCategory}
                           onChange={handlePlanCategoryChange}
                           styles={customSelectStyles}
                           placeholder="Select Plan Category"
                         />
                       </div>

                       <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                         <label className="form-label fw-bold text-dark">Plan Coverage</label>
                         <Select
                           options={planCoverageOptions}
                           value={planCoverage}
                           onChange={handlePlanCoverageChange}
                           styles={customSelectStyles}
                           placeholder="Select Plan Coverage"
                         />
                       </div>

                       <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex  flex-column">
                         <label className="form-label fw-bold text-dark">Policy Start Date</label>
                         <DatePicker
                           selected={departDate}
                           onChange={handleDepartDateChange}
                           dateFormat="dd/MM/yyyy"
                           placeholderText="Select Date"
                           className="form-control"
                           ref={departDateRef}
                           minDate={new Date()}
                         />
                       </div>
                       </div>
                     </div>
                   </div>
                 </>
               )}

                {/* Single Trip - Second Row */}
               {planType.value === 1 && (
                 <div className="row gy-3 gx-md-3 gx-sm-2 mt-3">
                   <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                     <label className="form-label fw-bold text-dark">Duration (Days)</label>
                     <input
                       type="number"
                       className="form-control text-center"
                       value={duration}
                       onChange={handleDurationChange}
                       min="1"
                       ref={durationRef}
                     />
                   </div>

                   <div className="col-xl-3 col-lg-8 col-md-6 col-sm-12">
                     <label className="form-label fw-bold text-dark">Number of Passengers</label>
                     <Select
                       options={passengerOptions}
                       value={{ value: passengerCount, label: passengerCount.toString() }}
                       onChange={handlePassengerCountChange}
                       styles={customSelectStyles}
                       placeholder="Select Passengers"
                       ref={passengerCountRef}
                     />
                     <div className="info-text">
                       Single Trip: Min age 6 months | Max age 70 years
                     </div>
                   </div>

                   <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                     <label className="form-label fw-bold text-dark">Passenger Ages</label>
                     <div className="age-inputs">
                       {Array.from({ length: passengerCount }, (_, index) => (
                         <div key={index} className="age-input-group">
                           <span className="fw-bold text-dark">Pax {index + 1}</span>
                           <input
                             type="number"
                             className="form-control text-center"
                             value={passengerAges[index] || ''}
                             onChange={(e) => handlePassengerAgeChange(index, e.target.value)}
                             min="0.5"
                             max="70"
                             step="0.5"
                             placeholder="Age"
                           />
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
               )}

               {/* Annual Multi Trip - Second Row */}
               {planType.value === 2 && (
                 <div className="row gy-3 gx-md-3 gx-sm-2 mt-3">
                   <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                     <label className="form-label fw-bold text-dark">Policy Duration (Days)</label>
                     <input
                       type="number"
                       className="form-control text-center"
                       value={duration}
                       onChange={handleDurationChange}
                       min="1"
                       max="365"
                       ref={durationRef}
                     />
                     <div className="info-text">
                       Maximum 1 year (365 days)
                     </div>
                   </div>

                   <div className="col-xl-3 col-lg-8 col-md-6 col-sm-12">
                     <label className="form-label fw-bold text-dark">Number of Passengers</label>
                     <Select
                       options={passengerOptions}
                       value={{ value: passengerCount, label: passengerCount.toString() }}
                       onChange={handlePassengerCountChange}
                       styles={customSelectStyles}
                       placeholder="Select Passengers"
                       ref={passengerCountRef}
                     />
                     <div className="info-text">
                       Annual Multi Trip: Min age 1 year | Max age 70 years
                     </div>
                   </div>

                   <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                     <label className="form-label fw-bold text-dark">Passenger Ages</label>
                     <div className="age-inputs">
                       {Array.from({ length: passengerCount }, (_, index) => (
                         <div key={index} className="age-input-group">
                           <span className="fw-bold text-dark">Pax {index + 1}</span>
                           <input
                             type="number"
                             className="form-control text-center"
                             value={passengerAges[index] || ''}
                             onChange={(e) => handlePassengerAgeChange(index, e.target.value)}
                             min="1"
                             max="70"
                             step="1"
                             placeholder="Age"
                           />
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
               )}

              <div className="row mt-4">
                <div className="col-12 text-center">
                  <button
                    className="btn full-width text-uppercase"
                    style={{
                      backgroundColor: '#cd2c22',
                      color: '#fff',
                      padding: '15px 30px',
                      fontSize: '16px',
                      fontWeight: '600'
                    }}
                    onClick={handleSearch}
                    disabled={loading}
                    ref={searchBtnRef}
                  >
                    {loading ? 'Searching...' : 'Search Insurance Plans'}
                  </button>
                </div>
              </div>

              {error && <div className="text-danger mt-3 text-center">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsuranceSearch;
