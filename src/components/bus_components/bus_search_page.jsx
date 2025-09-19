import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdSwapHoriz } from "react-icons/md";
import { FaBus, FaCalendarAlt } from "react-icons/fa";
import {
  fetchBusSearch,
  fetchBusCityListIfNeeded,
} from "../../store/Actions/busActions";
import { setEncryptedItem, getEncryptedItem } from "../../utils/encryption";
import {
  selectBusSearchLoading,
  selectBusError,
  selectBusCityList,
} from "../../store/Selectors/busSelectors";
import "./bus_search_page.css";

const BusSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for form inputs
  const [fromCity, setFromCity] = useState(null);
  const [toCity, setToCity] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [fromOptions, setFromOptions] = useState([]);
  const [toOptions, setToOptions] = useState([]);
  const [validationError, setValidationError] = useState("");
  const [fromMenuOpen, setFromMenuOpen] = useState(false);
  const [toMenuOpen, setToMenuOpen] = useState(false);

  // Refs for focus management
  const fromRef = useRef();
  const toRef = useRef();
  const dateRef = useRef();
  const searchBtnRef = useRef();
  const debounceRef = useRef(null);

  const loading = useSelector(selectBusSearchLoading);
  const error = useSelector(selectBusError);
  const cityList = useSelector(selectBusCityList);
  const authData = useSelector(state => state.bus.authData);

  // Prefill from localStorage on all pages
  useEffect(() => {
    const params = getEncryptedItem('busSearchparams');
    if (params) {
        if (params.fromCityId && params.fromCityName) {
          setFromCity({ value: params.fromCityId, label: params.fromCityName });
        }
        if (params.toCityId && params.toCityName) {
          setToCity({ value: params.toCityId, label: params.toCityName });
        }
        
        // Check if stored date is from a previous day
        if (params.date && /^\d{4}-\d{2}-\d{2}$/.test(params.date)) {
          const storedDate = new Date(params.date + 'T00:00:00');
          const today = new Date();
          const todayString = today.toISOString().split('T')[0];
          const storedDateString = storedDate.toISOString().split('T')[0];
          
          // If stored date is not today, use today's date instead
          if (storedDateString !== todayString) {
            setStartDate(new Date());
          } else {
            setStartDate(storedDate);
          }
        } else {
          setStartDate(new Date());
        }
    } else {
        // If no stored params, ensure today's date is set
        setStartDate(new Date());
    }
  }, []);

  // Fetch city list on component mount (only once)
  useEffect(() => {
    dispatch(fetchBusCityListIfNeeded());
  }, [dispatch]);

  // Memoized filter function for better performance
  const filterCities = useCallback((input, cityList) => {
    if (!Array.isArray(cityList)) return [];
    if (!input) {
      return cityList.slice(0, 15).map(city => ({
        value: city.CityId || city.value || city.id,
        label: city.CityName || city.label || city.name,
      }));
    }
    const lowerInput = input.toLowerCase();

    // Exact matches first
    const exactMatches = cityList.filter(city =>
      (city.CityName || city.label || city.name).toLowerCase() === lowerInput
    );

    // Cities that start with the search term
    const startsWithMatches = cityList.filter(city =>
      (city.CityName || city.label || city.name).toLowerCase().startsWith(lowerInput) &&
      (city.CityName || city.label || city.name).toLowerCase() !== lowerInput
    );

    // Cities that contain the search term (excluding exact and starts with matches)
    const containsMatches = cityList.filter(city => {
      const cityName = (city.CityName || city.label || city.name).toLowerCase();
      return cityName.includes(lowerInput) && 
             cityName !== lowerInput && 
             !cityName.startsWith(lowerInput);
    });

    // Combine all matches in order of relevance
    const combined = [...exactMatches, ...startsWithMatches, ...containsMatches].slice(0, 10);

    return combined.map(city => ({
      value: city.CityId || city.value || city.id,
      label: city.CityName || city.label || city.name,
    }));
  }, []);

  // Debounce input changes for both from and to
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    
    debounceRef.current = setTimeout(() => {
      setFromOptions(filterCities(fromInput, cityList));
      setToOptions(filterCities(toInput, cityList));
    }, 300);
    
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [fromInput, toInput, cityList, filterCities]);

  // Initial options
  useEffect(() => {
    setFromOptions(filterCities('', cityList));
    setToOptions(filterCities('', cityList));
  }, [cityList, filterCities]);

  // Focus management handlers
  const handleFromChange = useCallback((val) => {
    setFromCity(val);
    setFromMenuOpen(false); // Close FROM dropdown after selection
    if (val && toRef.current) {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        toRef.current.focus();
        setToMenuOpen(true); // Automatically open the TO dropdown menu
      }, 50);
    }
  }, []);

  const handleToChange = useCallback((val) => {
    setToCity(val);
    setToMenuOpen(false); // Close dropdown after selection
    if (val && dateRef.current) {
      // Try to focus the date picker
      setTimeout(() => {
        if (dateRef.current && dateRef.current.input) {
          dateRef.current.input.focus();
        }
      }, 100);
    }
  }, []);

  // Click handlers for opening dropdowns
  const handleFromFieldClick = useCallback(() => {
    setFromMenuOpen(true);
    setToMenuOpen(false); // Close TO dropdown when opening FROM
    // Focus the select input
    if (fromRef.current) {
      fromRef.current.focus();
    }
  }, []);

  const handleToFieldClick = useCallback(() => {
    setToMenuOpen(true);
    setFromMenuOpen(false); // Close FROM dropdown when opening TO
    // Focus the select input
    if (toRef.current) {
      toRef.current.focus();
    }
  }, []);

  // Blur handlers to ensure dropdowns close when losing focus
  const handleFromBlur = useCallback(() => {
    // Small delay to allow for selection
    setTimeout(() => {
      setFromMenuOpen(false);
    }, 150);
  }, []);

  const handleToBlur = useCallback(() => {
    // Small delay to allow for selection
    setTimeout(() => {
      setToMenuOpen(false);
    }, 150);
  }, []);

  const handleDateChange = useCallback((date) => {
    setStartDate(date);
    if (date && searchBtnRef.current) {
      searchBtnRef.current.focus();
    }
  }, []);

  // Swap cities function
  const swapCities = useCallback(() => {
    const tempCity = fromCity;
    setFromCity(toCity);
    setToCity(tempCity);
  }, [fromCity, toCity]);

  const handleSearch = useCallback(() => {
    // Clear any previous validation errors
    setValidationError("");
    
    if (!fromCity || !toCity || !startDate) {
      setValidationError('Please select all fields');
      return;
    }
    
    // Check if departure and destination cities are the same
    if (fromCity.value === toCity.value) {
      setValidationError('The Departure City and Destination City cannot be same. Please re-type.');
      return;
    }
    
    if (!authData || !authData.TokenId || !authData.EndUserIp) {
      setValidationError('Bus API authentication failed. Please try again.');
      return;
    }
    
    const searchParams = {
      fromCityId: fromCity.value,
      fromCityName: fromCity.label,
      toCityId: toCity.value,
      toCityName: toCity.label,
      date: `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}`,
      TokenId: authData.TokenId,
      EndUserIp: authData.EndUserIp,
    };
    
    setEncryptedItem('busSearchparams', searchParams);
    dispatch(fetchBusSearch({
      DateOfJourney: searchParams.date,
      OriginId: searchParams.fromCityId,
      DestinationId: searchParams.toCityId,
      TokenId: searchParams.TokenId,
      EndUserIp: searchParams.EndUserIp,
    }));
    
    navigate('/bus-list'); // Navigate immediately
  }, [fromCity, toCity, startDate, authData, dispatch, navigate]);

  // Memoized custom select styles for better performance
  const customSelectStyles = useMemo(() => ({
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? '1px solid #cd2c22' : 'none',
      backgroundColor: 'transparent',
      padding: '0px 6px',
      width: '100%',
      minHeight: 'auto',
      cursor: "pointer",
      boxShadow: 'none',
      borderRadius: state.isFocused ? '8px 8px 0px 0px' : '8px',
      '&:hover': {
        border: state.isFocused ? '1px solid #cd2c22' : '1px solid #e0e0e0',
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0px',
      margin: '0',
    }),
    input: (provided) => ({
      ...provided,
      margin: '0',
      padding: '0px',
      color: '#333',
    }),
    indicatorSeparator: () => ({
      display: 'none',
      backgroundColor: 'transparent',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#cd2c22',
      padding: '4px',
      '&:hover': {
        color: '#b8241a',
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '0px 0px 8px 8px',
      marginTop: '-1px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      backgroundColor: 'white',
      border: '1px solid #cd2c22',
      borderTop: 'none',
      zIndex: 9999,
      width: '100%',
      minWidth: '100%',
      maxWidth: '100%',
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: '300px',
      padding: '4px 0',
      scrollbarWidth: 'thin',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#999',
      fontSize: '20px',
      fontWeight: "700",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#333',
      fontSize: '20px',
      fontWeight: "600",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#cd2c22' : state.isFocused ? '#f8f9fa' : 'white',
      color: state.isSelected ? 'white' : '#333',
      padding: '8px 12px',
      fontSize: '14px',
      '&:hover': {
        backgroundColor: '#cd2c22',
        color: 'white',
      },
    }),
  }), []);

  return (
    <div className="container p-0">
      <div className="row g-0 shadow-lg search-row position-relative">
        {/* FROM */}
        <div className="col-lg-3 field-section" role="group" aria-labelledby="from-label" onClick={handleFromFieldClick}>
          <label id="from-label" className="field-label" htmlFor="fromCity" onClick={handleFromFieldClick}>
            <FaBus className="field-icon" aria-hidden="true" /> From
          </label>
          <div className="select-container" onClick={handleFromFieldClick}>
            <Select
              id="fromCity"
              name="fromCity"
              options={fromOptions}
              placeholder="Source City"
              styles={customSelectStyles}
              value={fromCity}
              onChange={handleFromChange}
              onInputChange={val => setFromInput(val)}
              onBlur={handleFromBlur}
              isLoading={loading && (!cityList || cityList.length === 0)}
              isClearable={false}
              ref={fromRef}
              tabIndex={1}
              menuIsOpen={fromMenuOpen}
              onMenuOpen={() => setFromMenuOpen(true)}
              onMenuClose={() => setFromMenuOpen(false)}
              openMenuOnFocus={true}
              classNamePrefix="react-select"
              aria-label="Select departure city"
              aria-describedby="from-label"
              aria-expanded={fromMenuOpen}
              aria-haspopup="listbox"
            />
          </div>
        </div>

        <div className="swap-btn"> 
          <button
            type="button"
            className="border-none border-0 rounded-circle d-flex align-items-center justify-content-center bg-white shadow-sm"
            style={{height: '32px', width: '32px'}}
            onClick={swapCities}
            title="Swap departure and destination cities"
            aria-label="Swap departure and destination cities"
            tabIndex={5}
          >
            <MdSwapHoriz fontSize={16} className="d-none d-lg-block flex-shrink-0" aria-hidden="true" />
          </button>
        </div>

        {/* TO */}
        <div className="col-lg-3 field-section field-section-to" role="group" aria-labelledby="to-label" onClick={handleToFieldClick}>
          <label id="to-label" className="field-label" htmlFor="toCity" onClick={handleToFieldClick}>
            <FaBus className="field-icon" aria-hidden="true" /> To
          </label>
          <div className="select-container" onClick={handleToFieldClick}>
            <Select
              id="toCity"
              name="toCity"
              options={toOptions}
              placeholder="Destination City"
              styles={customSelectStyles}
              value={toCity}
              onChange={handleToChange}
              onInputChange={val => setToInput(val)}
              onBlur={handleToBlur}
              isLoading={loading && (!cityList || cityList.length === 0)}
              isClearable={false}
              ref={toRef}
              tabIndex={2}
              classNamePrefix="react-select"
              aria-label="Select destination city"
              aria-describedby="to-label"
              aria-expanded={toMenuOpen}
              aria-haspopup="listbox"
              menuIsOpen={toMenuOpen}
              onMenuOpen={() => setToMenuOpen(true)}
              onMenuClose={() => setToMenuOpen(false)}
              openMenuOnFocus={true}
            />
          </div>
        </div>

        {/* DATE */}
        <div className="col-lg-4 field-section field-section-date" role="group" aria-labelledby="date-label">
          <label id="date-label" className="field-label" htmlFor="dateInput">
            <FaCalendarAlt className="field-icon" aria-hidden="true" /> Date
          </label>
          <div className="field-content">
            <DatePicker
              id="dateInput"
              name="dateInput"
              selected={startDate}
              onChange={handleDateChange}
              dateFormat="dd-MM-yyyy"
              placeholderText="DD-MM-YYYY"
              className="date-input"
              ref={dateRef}
              tabIndex={3}
              minDate={new Date()}
              aria-label="Select journey date"
              aria-describedby="date-label"
            />
            <div className="date-quick-buttons" role="group" aria-label="Quick date selection">
              <button
                type="button"
                className="quick-date-btn"
                onClick={() => setStartDate(new Date())}
                aria-label="Select today's date"
                tabIndex={6}
              >
                Today
              </button>
              <button
                type="button"
                className="quick-date-btn"
                onClick={() => {
                  const tomorrow = new Date();
                  tomorrow.setDate(tomorrow.getDate() + 1);
                  setStartDate(tomorrow);
                }}
                aria-label="Select tomorrow's date"
                tabIndex={7}
              >
                Tomorrow
              </button>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="col-lg-2 search-section">
          <button
            className="btn bg-primary text-white search-btn"
            onClick={handleSearch}
            disabled={loading}
            ref={searchBtnRef}
            tabIndex={4}
            type="button"
            aria-label="Search for buses"
            aria-describedby="search-description"
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Searching...
              </>
            ) : (
              'Search'
            )}
          </button>
          <div id="search-description" className="sr-only">
            Search for buses based on selected departure city, destination city, and journey date
          </div>
        </div>
      </div>
      
      {validationError && (
        <div className="alert alert-danger mt-3" role="alert" aria-live="polite">
          <strong>Error:</strong> {validationError}
        </div>
      )}
      {error && (
        <div className="alert alert-danger mt-2" role="alert" aria-live="polite">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default BusSearch;