import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  fetchBusSearch,
  fetchBusCityListIfNeeded,
} from "../../store/Actions/busActions";
import {
  selectBusSearchLoading,
  selectBusError,
  selectBusCityList,
} from "../../store/Selectors/busSelectors";

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
    const stored = localStorage.getItem('busSearchparams');
    if (stored) {
      try {
        const params = JSON.parse(stored);
        if (params.fromCityId && params.fromCityName) {
          setFromCity({ value: params.fromCityId, label: params.fromCityName });
        }
        if (params.toCityId && params.toCityName) {
          setToCity({ value: params.toCityId, label: params.toCityName });
        }
        if (params.date && /^\d{4}-\d{2}-\d{2}$/.test(params.date)) {
          setStartDate(new Date(params.date + 'T00:00:00'));
        }
      } catch (e) {
        // ignore parse errors
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

    // Partial matches (excluding exact matches)
    const partialMatches = cityList.filter(city =>
      (city.CityName || city.label || city.name).toLowerCase().includes(lowerInput) &&
      (city.CityName || city.label || city.name).toLowerCase() !== lowerInput
    );

    // Combine and limit to 5
    const combined = [...exactMatches, ...partialMatches].slice(0, 5);

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
    if (val && toRef.current) {
      toRef.current.focus();
    }
  };
  const handleToChange = (val) => {
    setToCity(val);
    if (val && dateRef.current) {
      dateRef.current.setFocus && dateRef.current.setFocus();
      // fallback for input
      if (dateRef.current.input) dateRef.current.input.focus();
    }
  };
  const handleDateChange = (date) => {
    setStartDate(date);
    if (date && searchBtnRef.current) {
      searchBtnRef.current.focus();
    }
  };

  const handleSearch = () => {
    if (!fromCity || !toCity || !startDate) {
      alert('Please select all fields');
      return;
    }
    if (!authData || !authData.TokenId || !authData.EndUserIp) {
      alert('Bus API authentication failed. Please try again.');
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
    localStorage.setItem('busSearchparams', JSON.stringify(searchParams));
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
            width: 100%; /* Ensure full width */
            border: none; /* Remove border */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add box shadow */
            border-radius: 4px; /* Round corners */
            padding: 12px; /* Add padding */
          }

          .form-control:focus {
            outline: none; /* Remove default focus outline */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Keep box shadow on focus */
          }

          .btn.full-width {
            width: 100%;
            font-weight: 500;
          }

          .react-select__control {
            border: none; /* Remove border */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add box shadow */
            border-radius: 4px; /* Round corners */
          }

          .react-select__control:focus {
            outline: none; /* Remove default focus outline */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Keep box shadow on focus */
          }
          /* DatePicker month/year color override */
          .react-datepicker__current-month,
          .react-datepicker__year-read-view--down-arrow,
          .react-datepicker__month-read-view--down-arrow {
            color: #000 !important;
          }
        `}
      </style>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="search-wrap">
              <div className="row gy-3 gx-md-1 gx-sm-1">
                <div className="col-12">
                  <div className="row gy-3 gx-md-3 gx-sm-2">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <Select
                        id="fromCity"
                        options={fromOptions}
                        placeholder="From"
                        styles={customSelectStyles}
                        value={fromCity}
                        onChange={handleFromChange}
                        onInputChange={val => setFromInput(val)}
                        isLoading={loading && (!cityList || cityList.length === 0)}
                        isClearable
                        ref={fromRef}
                        tabIndex={1}
                      />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <Select
                        id="toCity"
                        options={toOptions}
                        placeholder="To"
                        styles={customSelectStyles}
                        value={toCity}
                        onChange={handleToChange}
                        onInputChange={val => setToInput(val)}
                        isLoading={loading && (!cityList || cityList.length === 0)}
                        isClearable
                        ref={toRef}
                        tabIndex={2}
                      />
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12">
                      <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Journey Date"
                        className="form-control"
                        ref={dateRef}
                        tabIndex={3}
                        minDate={new Date()}
                      />
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12">
                      <button
                        className="btn full-width text-uppercase"
                        style={{
                          backgroundColor: '#cd2c22',
                          color: '#fff',
                        }}
                        onClick={handleSearch}
                        disabled={loading}
                        ref={searchBtnRef}
                        tabIndex={4}
                      >
                        {loading ? 'Searching...' : 'Search'}
                      </button>
                    </div>
                  </div>
                  {error && <div className="text-danger mt-2">{error}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusSearch;
