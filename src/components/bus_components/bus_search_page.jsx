import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdSwapHoriz, MdSwapVert, MdDirectionsBus, MdPerson } from "react-icons/md";
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
import { FaCalendar } from "react-icons/fa";

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
  const debounceRef = useRef(null);

  // Refs for focus management
  const fromRef = useRef();
  const toRef = useRef();
  const dateRef = useRef();
  const searchBtnRef = useRef();

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
        if (params.date && /^\d{4}-\d{2}-\d{2}$/.test(params.date)) {
          setStartDate(new Date(params.date + 'T00:00:00'));
        }
    }
  }, []);

  // Fetch city list on component mount (only once)
  useEffect(() => {
    dispatch(fetchBusCityListIfNeeded());
  }, [dispatch]);

  // Debounced filter function
  const filterCities = (input, cityList) => {
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
  };

  // Debounce input changes for "From"
  useEffect(() => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setFromOptions(filterCities(fromInput, cityList));
    }, 300);
    return () => clearTimeout(debounceRef.current);
  }, [fromInput, cityList]);

  // Debounce input changes for "To"
  useEffect(() => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setToOptions(filterCities(toInput, cityList));
    }, 300);
    return () => clearTimeout(debounceRef.current);
  }, [toInput, cityList]);

  // Initial options
  useEffect(() => {
    setFromOptions(filterCities('', cityList));
    setToOptions(filterCities('', cityList));
  }, [cityList]);

  // Focus management handlers
  const handleFromChange = (val) => {
    setFromCity(val);
    setFromMenuOpen(false); // Close dropdown after selection
    if (val && toRef.current) {
      toRef.current.focus();
    }
  };
  const handleToChange = (val) => {
    setToCity(val);
    setToMenuOpen(false); // Close dropdown after selection
    if (val && dateRef.current) {
      dateRef.current.setFocus && dateRef.current.setFocus();
      // fallback for input
      if (dateRef.current.input) dateRef.current.input.focus();
    }
  };

  // State for controlling dropdown open/close
  const [fromMenuOpen, setFromMenuOpen] = useState(false);
  const [toMenuOpen, setToMenuOpen] = useState(false);

  // Click handlers for opening dropdowns
  const handleFromFieldClick = () => {
    setFromMenuOpen(true);
    setToMenuOpen(false); // Close TO dropdown when opening FROM
  };

  const handleToFieldClick = () => {
    setToMenuOpen(true);
    setFromMenuOpen(false); // Close FROM dropdown when opening TO
  };
  const handleDateChange = (date) => {
    setStartDate(date);
    if (date && searchBtnRef.current) {
      searchBtnRef.current.focus();
    }
  };

  // Swap cities function
  const swapCities = () => {
    const tempCity = fromCity;
    setFromCity(toCity);
    setToCity(tempCity);
  };

  const handleSearch = () => {
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
  };

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      border: 'none',
      backgroundColor: 'transparent',
      padding: '0px 6px',
      width: '100%',
      minHeight: 'auto',
      cursor: "pointer",

      '&:hover': {
        border: 'none',
        boxShadow: 'none',
      },
      '&:focus': {
        border: 'none',
        boxShadow: 'none',
      },
      '&:focus-within': {
        boxShadow: 'none',
        border:'1px solid red',
        borderRadius: '8px 8px 0px 0px',
        borderBottom:'none',
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
    }),
    indicatorSeparator: () => ({
      display: 'none',
      backgroundColor: 'transparent',
    }),
      dropdownIndicator: (provided) => ({
        ...provided,
        color: '#cd2c22',
        '&:hover': {
          color: '#b8241a',
        },
      }),
     menu: (provided) => ({
       ...provided,
       borderRadius: '0px 0px 8px 8px',
       position: 'absolute',
       top:'28px',
       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
       backgroundColor: 'white',
       minWidth: '100%',
       overflow:'hidden',
       border:'1px solid red',
       borderTop:'none',
     }),
     menuList: (provided) => ({
       ...provided,
       maxHeight: '300px',
       padding: '4px 0',
     }),
    placeholder: (provided) => ({
      ...provided,
      color: '#999',
      fontSize: '22px',
      fontWeight: "700",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#333',
      fontSize: '22px',
      fontWeight: "600",
    }),
     option: (provided, state) => ({
       ...provided,
       backgroundColor: state.isSelected ? '#cd2c22' : state.isFocused ? '#f8f9fa' : 'white',
       color: state.isSelected ? 'white' : '#333',
       padding: '12px',
       fontSize: '14px',
       zIndex: 9999,
       '&:hover': {
         backgroundColor: state.isSelected ? '#cd2c22' : '#cd2c22',
         color: state.isSelected ? 'white' : 'white',
       },
     }),
  };

  return (
    <>
      <style>
        {`

            .search-row {
             border-radius: 12px;
             overflow: visible;
             position: relative;
           }

          .field-section{
            background-color: #fff;
            padding: 16px;
            border-right: 1px solid #e0e0e0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            transition: all 0.3s ease;
            border-radius: 12px 0px 0px 12px;
            position: relative;
            cursor: pointer;
          }

          .field-section:hover {
            background-color: #f8f9fa;
          }

          .select-container {
            position: relative;
            overflow: visible;
          }

          .field-label {
            font-size: 11px;
            font-weight: 600;
            color: #5d6f7d;
            text-transform: uppercase;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 6px;
            letter-spacing: 0.5px;
          }

          .field-icon {
            font-size: 14px;
            color: #cd2c22;
          }

          .field-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 600;
          color: #2d3033;
          margin: 0;
          }

          .search-btn {
            border: none;
            width: 100%;
            height: 100% !important;
            text-transform: uppercase;
            border-radius: 0px 12px 12px 0px;
          }

          .date-quick-buttons {
            display: flex;
            gap: 4px;
          }

          .quick-date-btn {
            background-color: #f8f9fa;
            border: 1px solid #e2e8ec;
            border-radius: 6px;
            padding: 6px 12px;
            font-size: 11px;
            font-weight: 600;
            color: #5d6f7d;
            cursor: pointer;
            transition: all 0.3s ease;
            width:'fit-content';
          }

          .quick-date-btn:hover {
            background-color: #cd2c22;
            border-color: #cd2c22;
            color: #fff;
            box-shadow: 0 2px 4px rgba(205, 44, 34, 0.2);
          }

          .quick-date-btn:active {
            background-color: #b8241a;
            transform: translateY(1px);
          }

          .date-input {
            border: none;
            background: transparent;
            padding: 0;
            font-size: 22px;
            font-weight: 600;
            outline: none;
            width: 100%;
            cursor: pointer;
            padding-left:6px;
          }

          .date-input::placeholder {
            color: #5d6f7d;
            font-weight: 600;
            font-size: 22px;
          }

          /* DatePicker styling */
          .react-datepicker {
            border: 1px solid #e2e8ec;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }

          .react-datepicker__header {
            background: #f8f9fa;
            border-bottom: 1px solid #e2e8ec;
            border-radius: 8px 8px 0 0;
          }

          .react-datepicker__current-month,
          .react-datepicker__year-read-view--down-arrow,
          .react-datepicker__month-read-view--down-arrow {
            color: #2d3033 !important;
          }

          .react-datepicker__day--selected {
            background-color: #cd2c22 !important;
            color: #fff !important;
          }

          .react-datepicker__day--keyboard-selected {
            background-color:red;
            color: #fff !important;
          }

          .react-datepicker__day:hover {
            background-color: #f8f9fa;
          }

            .field-section-to, .field-section-date {
              border-radius: 0px;
            }
          
 

            .swap-btn {
              position: absolute;
              left: 24.07% ;
              width: 20px;
              height: 20px;
              z-index: 1;
              top: 50%;
              border: none;
              border-radius: 4px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              border-radius: 50%;
            }

          @media (max-width: 1200px) {
     
            .field-section {
              padding: 20px;
              border-radius: 12px 0px 0px 12px;
            }

            .field-section-to, .field-section-date {
              border-radius: 0px;
            }
              .swap-btn{
                left: 23.87% ;
                width: 20px;
                height: 20px;
              }
          }

            @media (max-width: 992px) {

              .field-section {
                border-radius: 12px 12px 0px 0px;
              }

              .field-section-to, .field-section-date {
              border-radius: 0px;
            }

              .swap-btn{
              display: none;
              }

            .search-btn {
              border-radius: 0px 0px 12px 12px;
              min-height: 70px !important;
            }

            }

          @media (max-width: 768px) {

            .field-section {
              padding: 12px;
              border-radius: 10px 10px 0px 0px;
            }

            .field-section-to, .field-section-date {
              border-radius: 0px;
            }


              .search-btn {
                border-radius: 0px 0px 10px 10px;
                height: fit-content;
                height: 100%;
              }



          }

        `}
      </style>
      <div className="container p-0">
        <div className="row g-0  shadow-lg search-row position-relative">
          {/* FROM */}
          <div className="col-lg-3 field-section">
            <small className="field-label">
              <FaBus className="field-icon" /> From
            </small>
            <div className="select-container">
              <Select
                id="fromCity"
                options={fromOptions}
                placeholder="Source City"
                styles={customSelectStyles}
                value={fromCity}
                onChange={handleFromChange}
                onInputChange={val => setFromInput(val)}
                isLoading={loading && (!cityList || cityList.length === 0)}
                isClearable={false}
                ref={fromRef}
                tabIndex={1}
                menuIsOpen={fromMenuOpen}
                onMenuOpen={() => setFromMenuOpen(true)}
                onMenuClose={() => setFromMenuOpen(false)}
              />
          </div>
            </div>

            <div className="swap-btn"> 
              <button
                type="button"
                className="border-none border-0 rounded-circle d-flex align-items-center justify-content-center "
                style={{height: '100%', width: '100%'}}
                onClick={swapCities}
                title="Swap cities"
              >
                <MdSwapHoriz fontSize={16} className="d-none d-lg-block  flex-shrink-0 " />
              </button>
            </div>





          {/* TO */}
          <div className="col-lg-3 field-section field-section-to" onClick={handleToFieldClick}>
            <small className="field-label">
              <FaBus className="field-icon" /> To
            </small>
            <div className="select-container">
              <Select
                id="toCity"
                options={toOptions}
                placeholder="Destination City"
                styles={customSelectStyles}
                value={toCity}
                onChange={handleToChange}
                onInputChange={val => setToInput(val)}
                isLoading={loading && (!cityList || cityList.length === 0)}
                isClearable={false}
                ref={toRef}
                tabIndex={2}
              />
            </div>
          </div>

          {/* DATE */}
          <div className="col-lg-4 field-section field-section-date">
            <small className="field-label">
              <FaCalendarAlt className="field-icon" /> Date
            </small>
            <div className="field-content">
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="dd-MM-yyyy"
                placeholderText="DD-MM-YYYY"
                className="date-input"
                ref={dateRef}
                tabIndex={3}
                minDate={new Date()}
              />
            <div className="date-quick-buttons">
              <button
                type="button"
                className="quick-date-btn"
                onClick={() => setStartDate(new Date())}
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
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
        
        {validationError && (
          <div className="alert alert-danger mt-3" role="alert">
            {validationError}
          </div>
        )}
        {error && <div className="text-danger mt-2">{error}</div>}
      </div>
    </>
  );
};

export default BusSearch;
