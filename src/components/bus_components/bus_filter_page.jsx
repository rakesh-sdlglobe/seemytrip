import { Link } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import Skeleton from './FilterSkeleton';

// Constants (could be moved to separate file)
const BUS_TYPE_OPTIONS = [
  { id: 'ac', label: 'AC', icon: 'fas fa-snowflake' },
  { id: 'nonac', label: 'Non-AC', icon: 'fas fa-snowflake-slash' },
  { id: 'seater', label: 'Seater', icon: 'fas fa-chair' },
  { id: 'sleeper', label: 'Sleeper', icon: 'fas fa-bed' },
  { id: 'semiSleeper', label: 'Semi-Sleeper', icon: 'fas fa-couch' },
];

const TIME_BLOCKS = [
  { id: 'earlyMorning', label: 'Early Morning', range: '4 - 8 AM', icon: 'fas fa-sun' },
  { id: 'morning', label: 'Morning', range: '8 AM - 12 PM', icon: 'fas fa-sun' },
  { id: 'afternoon', label: 'Afternoon', range: '12 - 4 PM', icon: 'fas fa-sun' },
  { id: 'evening', label: 'Evening', range: '4 - 8 PM', icon: 'fas fa-moon' },
  { id: 'night', label: 'Night', range: '8 PM - 12 AM', icon: 'fas fa-moon' },
  { id: 'midnight', label: 'Midnight', range: '12 - 4 AM', icon: 'fas fa-moon' },
];

const FILTER_OPTIONS = [
  { id: 'busType', label: 'Bus Type', icon: 'fas fa-bus' },
  { id: 'priceRange', label: 'Price Range', icon: 'fas fa-rupee-sign' },
  { id: 'departureTime', label: 'Departure Time', icon: 'fas fa-clock' },
  { id: 'arrivalTime', label: 'Arrival Time', icon: 'fas fa-clock' },
  { id: 'droppingPoints', label: 'Dropping Points', icon: 'fas fa-map-marker' },
  { id: 'priceSort', label: 'Price Sort', icon: 'fas fa-sort' },
  { id: 'pickupPoints', label: 'Pickup Points', icon: 'fas fa-map-marker-alt' },
  { id: 'popularFilters', label: 'Popular Filters', icon: 'fas fa-star' },
  { id: 'customerRatings', label: 'Customer Ratings', icon: 'fas fa-star' },
];

// Sub-components for better organization
const FilterOptionCheckbox = ({ id, checked, onChange, label, icon, className = '' }) => (
  <div className={`filter-option ${className}`}>
    <input
      type="checkbox"
      className="btn-check"
      id={id}
      checked={checked}
      onChange={onChange}
      aria-label={label}
    />
    <label className="btn btn-sm btn-outline-secondary rounded-pill d-flex align-items-center gap-2" htmlFor={id}>
      {icon && <i className={icon} aria-hidden="true"></i>}
      {label}
    </label>
  </div>
);

// Accordion component for collapsible filter sections
const FilterAccordion = ({ title, icon, isOpen, onToggle, children, selectedCount = 0, onClear, showClear = false }) => (
  <div className="searchBar-single border-bottom ">
    <div
      className="searchBar-single-title px-3 py-3 d-flex justify-content-between align-items-center cursor-pointer"
      onClick={onToggle}
      style={{ cursor: 'pointer' }}
    >
      <div className="d-flex align-items-center gap-2">
        <i className={icon} aria-hidden="true"></i>
        <h6 className="sidebar-subTitle fs-6 fw-medium m-0">{title}</h6>
        {selectedCount > 0 && (
          <span className="badge bg-primary rounded-pill" style={{ fontSize: '0.7rem' }}>
            {selectedCount}
          </span>
        )}
      </div>
      <div className="d-flex align-items-center gap-2">
        {showClear && (
          <button
            className={`btn btn-sm clear-btn ${selectedCount > 0 ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
            style={{
              fontSize: '0.75rem',
              border: 'none',
              background: 'transparent',
              padding: '2px 8px'
            }}
            aria-label={`Clear all ${title.toLowerCase()}`}
          >
            CLEAR
          </button>
        )}
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} transition-all`}></i>
      </div>
    </div>
    <div className={`searchBar-single-wrap px-3 my-1  accordion-content ${isOpen ? 'show' : 'hide'}`}>
      {children}
    </div>
  </div>
);

// const FilterOptionRadio = ({ id, name, checked, onChange, label, className = '' }) => (
//   <div className={`filter-option ${className}`}>
//     <input
//       type="radio"
//       className="btn-check"
//       id={id}
//       name={name}
//       checked={checked}
//       onChange={onChange}
//       aria-label={label}
//     />
//     <label className="btn btn-sm btn-outline-secondary rounded-pill" htmlFor={id}>
//       {label}
//     </label>
//   </div>
// );

const PointsFilterSection = ({
  title,
  points,
  showAll,
  toggleShowAll,
  selectedPoints,
  onPointChange,
  onClearAll,
  type,
  searchTerm,
  onSearchChange
}) => {
  // Filter points based on search term
  const filteredPoints = points.filter(point =>
    point.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="searchBar-single">
      <div className="searchBar-single-wrap">
        {/* Search Input */}
        <div className="mb-3">
          <div className="position-relative">
            <input
              type="text"
              className="form-control form-control-sm h-10"
              placeholder={`Search ${type} points...`}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              style={{
                paddingLeft: '35px',
                border: '1px solid #dee2e6',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            />
            <i 
              className="fas fa-search position-absolute" 
              style={{
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6c757d',
                fontSize: '0.875rem'
              }}
            ></i>
            {searchTerm && (
              <button
                className="btn btn-sm position-absolute"
                onClick={() => onSearchChange('')}
                style={{
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  padding: '2px 6px',
                  background: 'transparent',
                  border: 'none',
                  color: '#6c757d'
                }}
                aria-label="Clear search"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>

        {filteredPoints.length > 0 ? (
          <>
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
              {(showAll ? filteredPoints : filteredPoints.slice(0, 4)).map(point => (
                <li className="col-12" key={point}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`${type}_${point}`}
                      checked={selectedPoints.includes(point)}
                      onChange={() => onPointChange(point)}
                      aria-label={point}
                    />
                    <label className="form-check-label" htmlFor={`${type}_${point}`}>
                      {point}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
            {filteredPoints.length > 4 && (
              <div className="text-center">
                <button
                  className="btn btn-sm btn-link text-primary p-0 bg-transparent border-0"
                  onClick={toggleShowAll}
                  style={{ fontSize: '0.8rem' }}
                  aria-expanded={showAll}
                >
                  {showAll ? 'Show Less' : `Show More (${filteredPoints.length - 4} more)`}
                </button>
              </div>
            )}
          </>
        ) : searchTerm ? (
          <div className="text-center text-muted py-3">No {type} points found matching "{searchTerm}"</div>
        ) : (
          <div className="text-center text-muted py-3">No {type} points available</div>
        )}
      </div>
    </div>
  );
};

// Price Range Slider Component
const PriceRangeSlider = ({ minPrice, maxPrice, currentMin, currentMax, onChange, className = '' }) => {
  const [localMinValue, setLocalMinValue] = useState(currentMin);
  const [localMaxValue, setLocalMaxValue] = useState(currentMax);

  // Update local state when props change
  useEffect(() => {
    setLocalMinValue(currentMin);
    setLocalMaxValue(currentMax);
  }, [currentMin, currentMax]);

  const handleMinChange = (e) => {
    const value = Math.min(parseInt(e.target.value), currentMax - 100);
    onChange({ min: value, max: currentMax });
  };

  const handleMaxChange = (e) => {
    const value = Math.max(parseInt(e.target.value), currentMin + 100);
    onChange({ min: currentMin, max: value });
  };

  return (
    <div className={`price-range-slider ${className}`}>
      <div className="price-range-labels d-flex justify-content-between mb-2">
        <span className="price-label">₹{currentMin}</span>
        <span className="price-label">₹{currentMax}</span>
      </div>
      <div className="price-range-container position-relative">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={currentMin}
          onChange={handleMinChange}
          className="price-range-input price-range-min"
          aria-label="Minimum price"
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={currentMax}
          onChange={handleMaxChange}
          className="price-range-input price-range-max"
          aria-label="Maximum price"
        />
        <div className="price-range-track"></div>
        <div
          className="price-range-progress"
          style={{
            left: `${((currentMin - minPrice) / (maxPrice - minPrice)) * 100}%`,
            width: `${((currentMax - currentMin) / (maxPrice - minPrice)) * 100}%`
          }}
        ></div>
      </div>
      <div className="price-range-inputs d-flex gap-2 mt-3">
        <div className="flex-fill">
          <label htmlFor="min-price-input" className="form-label small">Min Price</label>
          <input
            type="number"
            id="min-price-input"
            className="form-control form-control-sm"
            value={localMinValue}
            onChange={(e) => {
              const inputValue = e.target.value;
              setLocalMinValue(inputValue);
              
              if (inputValue === '') {
                return;
              }
              
              const value = parseInt(inputValue);
              if (!isNaN(value)) {
                const clampedValue = Math.max(minPrice, Math.min(value, currentMax - 100));
                onChange({ min: clampedValue, max: currentMax });
              }
            }}
            onBlur={(e) => {
              const inputValue = e.target.value;
              if (inputValue === '' || isNaN(parseInt(inputValue))) {
                setLocalMinValue(currentMin);
                onChange({ min: currentMin, max: currentMax });
              } else {
                const value = parseInt(inputValue);
                const clampedValue = Math.max(minPrice, Math.min(value, currentMax - 100));
                setLocalMinValue(clampedValue);
                onChange({ min: clampedValue, max: currentMax });
              }
            }}
            min={minPrice}
            max={maxPrice}
            aria-label="Minimum price input"
          />
        </div>
        <div className="flex-fill">
          <label htmlFor="max-price-input" className="form-label small">Max Price</label>
          <input
            type="number"
            id="max-price-input"
            className="form-control form-control-sm"
            value={localMaxValue}
            onChange={(e) => {
              const inputValue = e.target.value;
              setLocalMaxValue(inputValue);
              
              if (inputValue === '') {
                return;
              }
              
              const value = parseInt(inputValue);
              if (!isNaN(value)) {
                const clampedValue = Math.min(maxPrice, Math.max(value, currentMin + 100));
                onChange({ min: currentMin, max: clampedValue });
              }
            }}
            onBlur={(e) => {
              const inputValue = e.target.value;
              if (inputValue === '' || isNaN(parseInt(inputValue))) {
                setLocalMaxValue(currentMax);
                onChange({ min: currentMin, max: currentMax });
              } else {
                const value = parseInt(inputValue);
                const clampedValue = Math.min(maxPrice, Math.max(value, currentMin + 100));
                setLocalMaxValue(clampedValue);
                onChange({ min: currentMin, max: clampedValue });
              }
            }}
            min={minPrice}
            max={maxPrice}
            aria-label="Maximum price input"
          />
        </div>
      </div>
    </div>
  );
};

const BusFilterPage = ({
  filters,
  onFilterChange,
  onClear,
  minPrice = 0,
  maxPrice = 10000,
  loading = false,
  busResults = []
}) => {
  const [pickupPoints, setPickupPoints] = useState([]);
  const [droppingPoints, setDroppingPoints] = useState([]);
  const [showAllPickup, setShowAllPickup] = useState(false);
  const [showAllDropping, setShowAllDropping] = useState(false);
  const [activeFilter, setActiveFilter] = useState('busType');
  const [priceRange, setPriceRange] = useState({
    min: minPrice,
    max: maxPrice
  });
  
  // Search states for pickup and dropping points
  const [pickupSearchTerm, setPickupSearchTerm] = useState('');
  const [droppingSearchTerm, setDroppingSearchTerm] = useState('');

  // Mobile filter overlay states
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedFilterCount, setSelectedFilterCount] = useState(0);

  // Accordion states
  const [accordionStates, setAccordionStates] = useState({
    priceRange: true,
    departureTime: true,
    arrivalTime: true,
    popularFilters: false,
    droppingPoints: false,
    pickupPoints: false,
    customerRatings: false
  });

  // Extract unique pickup and dropping points from bus results
  useEffect(() => {
    if (busResults && busResults.length > 0) {
      const pickupSet = new Set();
      const droppingSet = new Set();

      busResults.forEach(bus => {
        // Extract pickup points
        if (bus.BoardingPointsDetails && Array.isArray(bus.BoardingPointsDetails)) {
          bus.BoardingPointsDetails.forEach(point => {
            if (point.CityPointName) {
              pickupSet.add(point.CityPointName);
            }
          });
        }

        // Extract dropping points
        if (bus.DroppingPointsDetails && Array.isArray(bus.DroppingPointsDetails)) {
          bus.DroppingPointsDetails.forEach(point => {
            if (point.CityPointName) {
              droppingSet.add(point.CityPointName);
            }
          });
        }
      });

      setPickupPoints(Array.from(pickupSet).sort());
      setDroppingPoints(Array.from(droppingSet).sort());
    }
  }, [busResults]);

  // Initialize price range when minPrice/maxPrice props change or when filters change
  useEffect(() => {
    if (filters.priceRange) {
      setPriceRange({
        min: filters.priceRange.min,
        max: filters.priceRange.max
      });
    } else if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
      setPriceRange({
        min: filters.minPrice,
        max: filters.maxPrice
      });
    } else {
      setPriceRange({
        min: minPrice,
        max: maxPrice
      });
    }
  }, [minPrice, maxPrice, filters.priceRange, filters.minPrice, filters.maxPrice]);

  // Calculate selected filter count
  useEffect(() => {
    let count = 0;

    // Bus types
    count += filters.busTypes?.length || 0;

    // Pickup points
    count += filters.pickupPoints?.length || 0;

    // Dropping points
    count += filters.droppingPoints?.length || 0;

    // Departure times
    count += filters.departureTimes?.length || 0;

    // Arrival times
    count += filters.arrivalTimes?.length || 0;

    // Price range
    if (filters.priceRange && (filters.priceRange.min !== minPrice || filters.priceRange.max !== maxPrice)) {
      count += 1;
    }

    // Price sorts
    count += filters.priceSorts?.length || 0;

    // Popular filters
    count += [filters.wifi, filters.charging, filters.snacks].filter(Boolean).length;

    // Customer ratings
    count += [filters.rating45, filters.rating4, filters.rating35].filter(Boolean).length;

    setSelectedFilterCount(count);
  }, [filters, minPrice, maxPrice]);

  // Memoized handlers to prevent unnecessary re-renders
  const handleBusType = useCallback((id) => {
    const newTypes = filters.busTypes.includes(id)
      ? filters.busTypes.filter((t) => t !== id)
      : [...filters.busTypes, id];
    onFilterChange({ busTypes: newTypes });
  }, [filters.busTypes, onFilterChange]);

  const handleCheckbox = useCallback((e) => {
    onFilterChange({ [e.target.id]: e.target.checked });
  }, [onFilterChange]);

  const handleDepartureTime = useCallback((id) => {
    const newDepartureTimes = filters.departureTimes.includes(id)
      ? filters.departureTimes.filter((t) => t !== id)
      : [...filters.departureTimes, id];
    onFilterChange({ departureTimes: newDepartureTimes });
  }, [filters.departureTimes, onFilterChange]);

  const handleArrivalTime = useCallback((id) => {
    const newArrivalTimes = filters.arrivalTimes.includes(id)
      ? filters.arrivalTimes.filter((t) => t !== id)
      : [...filters.arrivalTimes, id];
    onFilterChange({ arrivalTimes: newArrivalTimes });
  }, [filters.arrivalTimes, onFilterChange]);

  const handlePickupPoint = useCallback((point) => {
    const newPickupPoints = filters.pickupPoints?.includes(point)
      ? filters.pickupPoints.filter((p) => p !== point)
      : [...(filters.pickupPoints || []), point];
    onFilterChange({ pickupPoints: newPickupPoints });
  }, [filters.pickupPoints, onFilterChange]);

  const handleDroppingPoint = useCallback((point) => {
    const newDroppingPoints = filters.droppingPoints?.includes(point)
      ? filters.droppingPoints.filter((p) => p !== point)
      : [...(filters.droppingPoints || []), point];
    onFilterChange({ droppingPoints: newDroppingPoints });
  }, [filters.droppingPoints, onFilterChange]);

  const handlePriceSort = useCallback((sortType) => {
    const newSortTypes = filters.priceSorts?.includes(sortType)
      ? filters.priceSorts.filter((s) => s !== sortType)
      : [...(filters.priceSorts || []), sortType];
    onFilterChange({ priceSorts: newSortTypes });
  }, [filters.priceSorts, onFilterChange]);

  const clearPickupPoints = useCallback(() => {
    onFilterChange({ pickupPoints: [] });
  }, [onFilterChange]);

  const clearDroppingPoints = useCallback(() => {
    onFilterChange({ droppingPoints: [] });
  }, [onFilterChange]);

  const clearDepartureTimes = useCallback(() => {
    onFilterChange({ departureTimes: [] });
  }, [onFilterChange]);

  const clearArrivalTimes = useCallback(() => {
    onFilterChange({ arrivalTimes: [] });
  }, [onFilterChange]);

  const clearPriceRange = useCallback(() => {
    setPriceRange({
      min: minPrice,
      max: maxPrice
    });
    onFilterChange({
      minPrice: minPrice,
      maxPrice: maxPrice,
      priceRange: {
        min: minPrice,
        max: maxPrice
      }
    });
  }, [onFilterChange, minPrice, maxPrice]);

  const clearPopularFilters = useCallback(() => {
    onFilterChange({
      wifi: false,
      charging: false,
      snacks: false
    });
  }, [onFilterChange]);

  const clearCustomerRatings = useCallback(() => {
    onFilterChange({
      rating45: false,
      rating4: false,
      rating35: false
    });
  }, [onFilterChange]);

  // Search handlers
  const handlePickupSearch = useCallback((searchTerm) => {
    setPickupSearchTerm(searchTerm);
  }, []);

  const handleDroppingSearch = useCallback((searchTerm) => {
    setDroppingSearchTerm(searchTerm);
  }, []);

  const handlePriceRange = useCallback((range) => {
    setPriceRange(range);
    onFilterChange({
      minPrice: range.min,
      maxPrice: range.max,
      priceRange: {
        min: range.min,
        max: range.max
      }
    });
  }, [onFilterChange]);

  // Accordion toggle handler
  const toggleAccordion = useCallback((section) => {
    setAccordionStates(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  }, []);

  // Mobile filter handlers
  const openMobileFilter = useCallback(() => {
    setIsMobileFilterOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }, []);

  const closeMobileFilter = useCallback(() => {
    setIsMobileFilterOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  }, []);

  const handleMobileFilterChange = useCallback((filterId) => {
    setActiveFilter(filterId);
  }, []);

  // Cleanup effect to restore body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Show skeleton if loading
  if (loading) {
    return <Skeleton />;
  }

  // Render filter content based on active filter
  const renderFilterContent = () => {
    switch (activeFilter) {
      case 'busType':
        return (
          <div className="d-flex flex-column gap-3">
            {/* {BUS_TYPE_OPTIONS.map(opt => (
              <div key={opt.id} className="form-check  p-3 bg-light rounded">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`mobile_${opt.id}`}
                  checked={filters.busTypes.includes(opt.id)}
                  onChange={() => handleBusType(opt.id)}
                  aria-label={opt.label}
                />

                <label className="btn btn-sm btn-bus-filter rounded-1 fw-medium full-width d-flex align-items-center justify-content-center gap-2" htmlFor={`mobile_${opt.id}`}>
                  <i className={`${opt.icon} text-primary`}></i>
                  {opt.label}
                </label>
              </div>
            ))} */}

               <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                {BUS_TYPE_OPTIONS.map(opt => (
                  <li className={opt.id === 'semiSleeper' ? 'col-12' : 'col-6'} key={opt.id}>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={`mobile_${opt.id}`}
                      checked={filters.busTypes.includes(opt.id)}
                      onChange={() => handleBusType(opt.id)}
                      aria-label={opt.label}
                    />
                    <label className="btn btn-sm btn-bus-filter rounded-1 fw-medium full-width d-flex align-items-center justify-content-center gap-2" htmlFor={`mobile_${opt.id}`}>
                      <i className={opt.icon} aria-hidden="true"></i>
                      {opt.label}
                    </label>
                  </li>
                ))}
              </ul>
          </div>
        );

        case 'departureTime':
          return (
            
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
              {TIME_BLOCKS.map(block => (
                <li className="col-6" key={block.id}>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id={`mobile_departure_${block.id}`}
                    checked={filters.departureTimes.includes(block.id)}
                    onChange={() => handleDepartureTime(block.id)}
                    aria-label={`${block.label} (${block.range})`}
                  />
                  <label className="btn btn-md btn-bus-filter rounded-1 fw-medium full-width d-flex flex-column align-items-center justify-content-center gap-1" htmlFor={`mobile_departure_${block.id}`}>
                    <i className={`${block.icon} fs-6`} aria-hidden="true"></i>
                    <span className="small">{block.label}</span>
                    <small className="text-muted" style={{ fontSize: '0.7rem' }}>{block.range}</small>
                  </label>
                </li>
              ))}
            </ul>
          );
  
        case 'arrivalTime':
          return (
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
              {TIME_BLOCKS.map(block => (
                <li className="col-6" key={block.id}>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id={`mobile_arrival_${block.id}`}
                    checked={filters.arrivalTimes.includes(block.id)}
                    onChange={() => handleArrivalTime(block.id)}
                    aria-label={`${block.label} (${block.range})`}
                  />
                  <label className="btn btn-md btn-bus-filter rounded-1 fw-medium full-width d-flex flex-column align-items-center justify-content-center gap-1" htmlFor={`mobile_arrival_${block.id}`}>
                    <i className={`${block.icon} fs-6`} aria-hidden="true"></i>
                    <span className="small">{block.label}</span>
                    <small className="text-muted" style={{ fontSize: '0.7rem' }}>{block.range}</small>
                  </label>
                </li>
              ))}
            </ul>
            
          );
  
        case 'priceRange':
          return (
            <div className="filter-content">
              <div className="price-range-mobile">
                <PriceRangeSlider
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  currentMin={priceRange.min}
                  currentMax={priceRange.max}
                  onChange={handlePriceRange}
                />
              </div>
            </div>
          );
  
        case 'priceSort':
          return (
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
              <li className="col-6">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="mobile_price_low_high"
                  checked={filters.priceSorts?.includes('lowToHigh') || false}
                  onChange={() => handlePriceSort('lowToHigh')}
                  aria-label="Sort price low to high"
                />
                <label className="btn btn-sm btn-bus-filter rounded-1 fw-medium full-width d-flex align-items-center justify-content-center gap-2" htmlFor="mobile_price_low_high">
                  Low to High
                </label>
              </li>
              <li className="col-6">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="mobile_price_high_low"
                  checked={filters.priceSorts?.includes('highToLow') || false}
                  onChange={() => handlePriceSort('highToLow')}
                  aria-label="Sort price high to low"
                />
                <label className="btn btn-sm btn-bus-filter rounded-1 fw-medium full-width d-flex align-items-center justify-content-center gap-2" htmlFor="mobile_price_high_low">
                  High to Low
                </label>
              </li>
            </ul>
          );
  
          
        case 'droppingPoints':
          return (
            <div>
              {/* Search Input for Mobile */}
              <div className="mb-3">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control form-control-sm h-10"
                    placeholder="Search dropping points..."
                    value={droppingSearchTerm}
                    onChange={(e) => handleDroppingSearch(e.target.value)}
                    style={{
                      paddingLeft: '35px',
                      border: '1px solid #dee2e6',
                      borderRadius: '6px',
                      fontSize: '0.875rem'
                    }}
                  />
                  <i 
                    className="fas fa-search position-absolute" 
                    style={{
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#6c757d',
                      fontSize: '0.875rem'
                    }}
                  ></i>
                  {droppingSearchTerm && (
                    <button
                      className="btn btn-sm position-absolute"
                      onClick={() => handleDroppingSearch('')}
                      style={{
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        padding: '2px 6px',
                        background: 'transparent',
                        border: 'none',
                        color: '#6c757d'
                      }}
                      aria-label="Clear search"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                </div>
              </div>
  
              {droppingPoints.length > 0 ? (
                (() => {
                  const filteredPoints = droppingPoints.filter(point =>
                    point.toLowerCase().includes(droppingSearchTerm.toLowerCase())
                  );
                  return (
                    <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                      {(showAllDropping ? filteredPoints : filteredPoints.slice(0, 6)).map(point => (
                        <li className="col-12" key={point}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`mobile_dropping_${point}`}
                              checked={filters.droppingPoints?.includes(point) || false}
                              onChange={() => handleDroppingPoint(point)}
                              aria-label={point}
                            />
                            <label className="form-check-label d-flex justify-content-between" htmlFor={`mobile_dropping_${point}`}>
                              <span>{point}</span>
                            </label>
                          </div>
                        </li>
                      ))}
                      {filteredPoints.length > 6 && (
                        <li className="col-12">
                          <div className="text-center mt-3">
                            <button
                              className="btn btn-link text-primary"
                              onClick={() => setShowAllDropping(!showAllDropping)}
                              aria-expanded={showAllDropping}
                            >
                              {showAllDropping ? 'Show Less' : `Show More (${filteredPoints.length - 6} more)`}
                            </button>
                          </div>
                        </li>
                      )}
                    </ul>
                  );
                })()
              ) : droppingSearchTerm ? (
                <div className="text-center text-muted py-4">No dropping points found matching "{droppingSearchTerm}"</div>
              ) : (
                <div className="text-center text-muted py-4">No dropping points available</div>
              )}
            </div>
          );
  

      case 'pickupPoints':
        return (
          <div>
            {/* Search Input for Mobile */}
            <div className="mb-3">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control form-control-sm h-10"
                  placeholder="Search pickup points..."
                  value={pickupSearchTerm}
                  onChange={(e) => handlePickupSearch(e.target.value)}
                  style={{
                    paddingLeft: '35px',
                    border: '1px solid #dee2e6',
                    borderRadius: '6px',
                    fontSize: '0.875rem'
                  }}
                />
                <i 
                  className="fas fa-search position-absolute" 
                  style={{
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#6c757d',
                    fontSize: '0.875rem'
                  }}
                ></i>
                {pickupSearchTerm && (
                  <button
                    className="btn btn-sm position-absolute"
                    onClick={() => handlePickupSearch('')}
                    style={{
                      right: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      padding: '2px 6px',
                      background: 'transparent',
                      border: 'none',
                      color: '#6c757d'
                    }}
                    aria-label="Clear search"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
            </div>

            {pickupPoints.length > 0 ? (
              (() => {
                const filteredPoints = pickupPoints.filter(point =>
                  point.toLowerCase().includes(pickupSearchTerm.toLowerCase())
                );
                return (
                  <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                    {(showAllPickup ? filteredPoints : filteredPoints.slice(0, 6)).map(point => (
                      <li className="col-12" key={point}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`mobile_pickup_${point}`}
                            checked={filters.pickupPoints?.includes(point) || false}
                            onChange={() => handlePickupPoint(point)}
                            aria-label={point}
                          />
                          <label className="form-check-label d-flex justify-content-between" htmlFor={`mobile_pickup_${point}`}>
                            <span>{point}</span>
                          </label>
                        </div>
                      </li>
                    ))}
                    {filteredPoints.length > 6 && (
                      <li className="col-12">
                        <div className="text-center mt-3">
                          <button
                            className="btn btn-link text-primary"
                            onClick={() => setShowAllPickup(!showAllPickup)}
                            aria-expanded={showAllPickup}
                          >
                            {showAllPickup ? 'Show Less' : `Show More (${filteredPoints.length - 6} more)`}
                          </button>
                        </div>
                      </li>
                    )}
                  </ul>
                );
              })()
            ) : pickupSearchTerm ? (
              <div className="text-center text-muted py-4">No pickup points found matching "{pickupSearchTerm}"</div>
            ) : (
              <div className="text-center text-muted py-4">No pickup points available</div>
            )}
          </div>
        );


      case 'popularFilters':
        return (
          <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
            <li className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="mobile_wifi"
                  checked={filters.wifi}
                  onChange={handleCheckbox}
                  aria-label="Wi-Fi Available"
                />
                <label className="form-check-label d-flex justify-content-between" htmlFor="mobile_wifi">
                  <span>Wi-Fi Available</span>
                </label>
              </div>
            </li>
            <li className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="mobile_charging"
                  checked={filters.charging}
                  onChange={handleCheckbox}
                  aria-label="Charging Points"
                />
                <label className="form-check-label d-flex justify-content-between" htmlFor="mobile_charging">
                  <span>Charging Points</span>
                </label>
              </div>
            </li>
            <li className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="mobile_snacks"
                  checked={filters.snacks}
                  onChange={handleCheckbox}
                  aria-label="Snacks Included"
                />
                <label className="form-check-label d-flex justify-content-between" htmlFor="mobile_snacks">
                  <span>Snacks Included</span>
                </label>
              </div>
            </li>
          </ul>
        );

      case 'customerRatings':
        return (
          <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
            <li className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="mobile_rating45"
                  checked={filters.rating45}
                  onChange={handleCheckbox}
                  aria-label="Rating 4.5 and above"
                />
                <label className="form-check-label d-flex justify-content-between" htmlFor="mobile_rating45">
                  <span>4.5+</span>
                </label>
              </div>
            </li>
            <li className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="mobile_rating4"
                  checked={filters.rating4}
                  onChange={handleCheckbox}
                  aria-label="Rating 4 and above"
                />
                <label className="form-check-label d-flex justify-content-between" htmlFor="mobile_rating4">
                  <span>4+</span>
                </label>
              </div>
            </li>
            <li className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="mobile_rating35"
                  checked={filters.rating35}
                  onChange={handleCheckbox}
                  aria-label="Rating 3.5 and above"
                />
                <label className="form-check-label d-flex justify-content-between" htmlFor="mobile_rating35">
                  <span>3.5+</span>
                </label>
              </div>
            </li>
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Mobile Sticky Filter Bar */}
      <div className="d-lg-none">
        {/* Sticky Bottom Filter Button */}
        <div className="position-fixed bottom-0 start-0 end-0 bg-white border-top shadow-lg p-3" style={{ zIndex: 1000 }}>
          <button
            className="btn btn-primary w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2"
            onClick={openMobileFilter}
            aria-label="Open filters"
          >
            <i className="fas fa-filter"></i>
            <span>Filters</span>
            {selectedFilterCount > 0 && (
              <span className="badge bg-light text-dark rounded-pill">{selectedFilterCount}</span>
            )}
          </button>
        </div>

        {/* Mobile Filter Overlay */}
        {isMobileFilterOpen && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-end modal-enter"
            style={{ zIndex: 1001 }}
            onClick={closeMobileFilter}
          >
            <div
              className="bg-white w-100 rounded-top-3 d-flex flex-column modal-slide"
              style={{ maxHeight: '85vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
                <h4 className="fw-bold mb-0">Filters</h4>
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-link text-danger p-2 fw-bold"
                    onClick={onClear}
                    aria-label="Clear all filters"
                  >
                    Clear All
                  </button>
                  <button
                    className="btn btn-sm rounded-circle p-2 flex-shrink-0"
                    onClick={closeMobileFilter}
                    aria-label="Close filters"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="border-bottom ">
                <div className="overflow-auto p-2">
                  <div className="d-flex" role="tablist" aria-label="Filter options">
                    {FILTER_OPTIONS.map(option => (
                      <button
                        key={option.id}
                        className={`btn btn-link bg-transparent  text-decoration-none d-flex m-1 flex-column align-items-center gap-1 border-0 ${activeFilter === option.id ? 'text-primary ' : 'tab-text'
                          }`}
                        onClick={() => handleMobileFilterChange(option.id)}
                        role="tab"
                        aria-selected={activeFilter === option.id}
                        aria-controls={`filter-panel-${option.id}`}
                        id={`filter-tab-${option.id}`}
                        tabIndex={activeFilter === option.id ? 0 : -1}
                        style={{ minWidth: '80px', flexShrink: 0 }}
                      >
                        <i className={`${option.icon} fs-6`}></i>
                        <small className="fw-small">{option.label}</small>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Filter Content */}
              <div className="flex-grow-1 overflow-auto ">
                <div
                  className="p-3"
                  role="tabpanel"
                  id={`filter-panel-${activeFilter}`}
                  aria-labelledby={`filter-tab-${activeFilter}`}
                >
                  {renderFilterContent()}
                </div>
              </div>

              {/* Apply Button */}
              <div className="p-3 border-top ">
                <button
                  className="btn btn-primary w-100 py-3 fw-bold"
                  onClick={closeMobileFilter}
                >
                  Apply Filters ({selectedFilterCount})
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sidebar Filters */}
      <div className="col-xl-3 col-lg-3 col-md-12 d-none d-lg-block">
        <div className="filter-searchBar bg-white rounded-3">
          <div className="filter-searchBar-head border-botto">
            <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
              <div className="searchBar-headerfirst">
                <h6 className="fw-bold fs-5 m-0">Filters</h6>
                <p className="text-md text-muted m-0">Showing Buses</p>
              </div>
              <div className="searchBar-headerlast text-end">
                <Link
                  to="#"
                  className="text-md fw-medium text-primary active"
                  onClick={onClear}
                  aria-label="Clear all filters"
                >
                  Clear All
                </Link>
              </div>
            </div>
          </div>
          <div className="filter-searchBar-body">
            {/* Bus Types */}
            <div className="searchBar-single px-3 py-3 border-bottom ">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Bus Type</h6>
              </div>
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                {BUS_TYPE_OPTIONS.map(opt => (
                  <li className={opt.id === 'semiSleeper' ? 'col-12' : 'col-6'} key={opt.id}>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={opt.id}
                      checked={filters.busTypes.includes(opt.id)}
                      onChange={() => handleBusType(opt.id)}
                      aria-label={opt.label}
                    />
                    <label className="btn btn-sm btn-bus-filter rounded-1 fw-medium full-width d-flex align-items-center justify-content-center gap-2" htmlFor={opt.id}>
                      <i className={opt.icon} aria-hidden="true"></i>
                      {opt.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Sort */}
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Price Sort</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                  <li className="col-6">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="priceLowToHigh"
                      checked={filters.priceSorts?.includes('lowToHigh') || false}
                      onChange={() => handlePriceSort('lowToHigh')}
                      aria-label="Sort price low to high"
                    />
                    <label className="btn btn-sm btn-bus-filter rounded-1 fw-medium full-width" htmlFor="priceLowToHigh">
                      Low to High
                    </label>
                  </li>
                  <li className="col-6">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="priceHighToLow"
                      checked={filters.priceSorts?.includes('highToLow') || false}
                      onChange={() => handlePriceSort('highToLow')}
                      aria-label="Sort price high to low"
                    />
                    <label className="btn btn-sm btn-bus-filter rounded-1 fw-medium full-width" htmlFor="priceHighToLow">
                      High to Low
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            {/* Price Range */}
            <FilterAccordion
              title="Price Range"
              icon="fas fa-rupee-sign"
              isOpen={accordionStates.priceRange}
              onToggle={() => toggleAccordion('priceRange')}
              selectedCount={((filters.priceRange && (filters.priceRange.min !== minPrice || filters.priceRange.max !== maxPrice)) ||
                (filters.minPrice !== undefined && filters.maxPrice !== undefined &&
                  (filters.minPrice !== minPrice || filters.maxPrice !== maxPrice))) ? 1 : 0}
              onClear={clearPriceRange}
              showClear={true}
            >
              <PriceRangeSlider
                minPrice={minPrice}
                maxPrice={maxPrice}
                currentMin={priceRange.min}
                currentMax={priceRange.max}
                onChange={handlePriceRange}
              />
            </FilterAccordion>


                        {/* Departure Time */}
                        <FilterAccordion
              title="Departure Time"
              icon="fas fa-clock icon-color"
              isOpen={accordionStates.departureTime}
              onToggle={() => toggleAccordion('departureTime')}
              selectedCount={filters.departureTimes?.length || 0}
              onClear={clearDepartureTimes}
              showClear={true}
            >
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                {TIME_BLOCKS.map(block => (
                  <li className="col-6" key={block.id}>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={`departure_${block.id}`}
                      checked={filters.departureTimes.includes(block.id)}
                      onChange={() => handleDepartureTime(block.id)}
                      aria-label={`${block.label} (${block.range})`}
                    />
                    <label className="btn btn-sm btn-bus-filter rounded-1 fw-medium full-width d-flex flex-column align-items-center justify-content-center gap-1" htmlFor={`departure_${block.id}`}>
                      <i className={`${block.icon} fs-6`} aria-hidden="true"></i>
                      <span className="small">{block.label}</span>
                      <small className="text-muted" style={{ fontSize: '0.7rem' }}>{block.range}</small>
                    </label>
                  </li>
                ))}
              </ul>
            </FilterAccordion>

            {/* Arrival Time */}
            <FilterAccordion
              title="Arrival Time"
              icon="fas fa-clock icon-color"
              isOpen={accordionStates.arrivalTime}
              onToggle={() => toggleAccordion('arrivalTime')}
              selectedCount={filters.arrivalTimes?.length || 0}
              onClear={clearArrivalTimes}
              showClear={true}
            >
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                {TIME_BLOCKS.map(block => (
                  <li className="col-6" key={block.id}>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={`arrival_${block.id}`}
                      checked={filters.arrivalTimes.includes(block.id)}
                      onChange={() => handleArrivalTime(block.id)}
                      aria-label={`${block.label} (${block.range})`}
                    />
                    <label className="btn btn-sm btn-bus-filter rounded-1 fw-medium full-width d-flex flex-column align-items-center justify-content-center gap-1" htmlFor={`arrival_${block.id}`}>
                      <i className={`${block.icon} fs-6`} aria-hidden="true"></i>
                      <span className="small">{block.label}</span>
                      <small className="text-muted" style={{ fontSize: '0.7rem' }}>{block.range}</small>
                    </label>
                  </li>
                ))}
              </ul>
            </FilterAccordion>


            {/* Pickup Points */}
            {pickupPoints.length > 0 && (
              <FilterAccordion
                title="Pickup Points"
                icon="fas fa-map-marker-alt icon-color"
                isOpen={accordionStates.pickupPoints}
                onToggle={() => toggleAccordion('pickupPoints')}
                selectedCount={filters.pickupPoints?.length || 0}
                onClear={clearPickupPoints}
                showClear={true}
              >
                <PointsFilterSection
                  title=""
                  points={pickupPoints}
                  showAll={showAllPickup}
                  toggleShowAll={() => setShowAllPickup(!showAllPickup)}
                  selectedPoints={filters.pickupPoints || []}
                  onPointChange={handlePickupPoint}
                  onClearAll={clearPickupPoints}
                  type="pickup"
                  searchTerm={pickupSearchTerm}
                  onSearchChange={handlePickupSearch}
                />
              </FilterAccordion>
            )}

            {/* Dropping Points */}
            {droppingPoints.length > 0 && (
              <FilterAccordion
                title="Dropping Points"
                icon="fas fa-map-marker icon-color"
                isOpen={accordionStates.droppingPoints}
                onToggle={() => toggleAccordion('droppingPoints')}
                selectedCount={filters.droppingPoints?.length || 0}
                onClear={clearDroppingPoints}
                showClear={true}
              >
                <PointsFilterSection
                  title=""
                  points={droppingPoints}
                  showAll={showAllDropping}
                  toggleShowAll={() => setShowAllDropping(!showAllDropping)}
                  selectedPoints={filters.droppingPoints || []}
                  onPointChange={handleDroppingPoint}
                  onClearAll={clearDroppingPoints}
                  type="dropping"
                  searchTerm={droppingSearchTerm}
                  onSearchChange={handleDroppingSearch}
                />
              </FilterAccordion>
            )}




            {/* Popular Filters */}
            <FilterAccordion
              title="Popular Filters"
              icon="fas fa-star icon-color"
              isOpen={accordionStates.popularFilters}
              onToggle={() => toggleAccordion('popularFilters')}
              selectedCount={[filters.wifi, filters.charging, filters.snacks].filter(Boolean).length}
              onClear={clearPopularFilters}
              showClear={true}
            >
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                <li className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wifi"
                      checked={filters.wifi}
                      onChange={handleCheckbox}
                      aria-label="Wi-Fi Available"
                    />
                    <label className="form-check-label" htmlFor="wifi">Wi-Fi Available</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="charging"
                      checked={filters.charging}
                      onChange={handleCheckbox}
                      aria-label="Charging Points"
                    />
                    <label className="form-check-label" htmlFor="charging">Charging Points</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="snacks"
                      checked={filters.snacks}
                      onChange={handleCheckbox}
                      aria-label="Snacks Included"
                    />
                    <label className="form-check-label" htmlFor="snacks">Snacks Included</label>
                  </div>
                </li>
              </ul>
            </FilterAccordion>

            {/* Customer Ratings */}
            <FilterAccordion
              title="Customer Ratings"
              icon="fas fa-star icon-color"
              isOpen={accordionStates.customerRatings}
              onToggle={() => toggleAccordion('customerRatings')}
              selectedCount={[filters.rating45, filters.rating4, filters.rating35].filter(Boolean).length}
              onClear={clearCustomerRatings}
              showClear={true}
            >
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                <li className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rating45"
                      checked={filters.rating45}
                      onChange={handleCheckbox}
                      aria-label="Rating 4.5 and above"
                    />
                    <label className="form-check-label" htmlFor="rating45">4.5+</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rating4"
                      checked={filters.rating4}
                      onChange={handleCheckbox}
                      aria-label="Rating 4 and above"
                    />
                    <label className="form-check-label" htmlFor="rating4">4+</label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rating35"
                      checked={filters.rating35}
                      onChange={handleCheckbox}
                      aria-label="Rating 3.5 and above"
                    />
                    <label className="form-check-label" htmlFor="rating35">3.5+</label>
                  </div>
                </li>
              </ul>
            </FilterAccordion>
          </div>
        </div>
      </div>

      {/* Minimal Custom Styles - Only for animations and scrollbar hiding */}
      <style jsx>{`
        /* Hide scrollbars but keep functionality */
        .overflow-auto::-webkit-scrollbar {
          display: none;
        }
        .overflow-auto {
          -ms-overflow-style: none;
          scrollbar-width: thin;
        }
        
        /* Smooth animations for modal */
        .modal-enter {
          animation: fadeIn 0.3s ease;
        }
        
        .modal-slide {
          animation: slideUp 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            transform: translateY(100%); 
            opacity: 0;
          }
          to { 
            transform: translateY(0); 
            opacity: 1;
          }
        }

        .btn-bus-filter {
          border: 1px solid #ddd;
          background-color: #f8f9fa;
          color: #495057;
          font-weight: 500;
          transition: all 0.2s ease;
          min-height: 40px;
        }
        
        .btn-bus-filter:hover {
          border:1px solid #d20000 !important;
          background-color: #fff;
          color: #d20000 !important;
          box-shadow: 0 4px 12px rgba(210, 0, 0, 0.15);
        }
        
        .btn-check:checked + .btn-bus-filter {
          background-color: #d20000 !important;
          border-color: #d20000 !important;
          color: #fff !important;
        }
        
        .btn-check:checked + .btn-bus-filter:hover {
          background-color: #d20000 !important;
          border-color: #d20000 !important;
          color: #fff !important;
        }
        
        .btn-check:checked + .btn-bus-filter i,
        .btn-check:checked + .btn-bus-filter span,
        .btn-check:checked + .btn-bus-filter small {
          color: #fff !important;
        }
        
        .btn-bus-filter i {
          font-size: 14px;
          margin-right: 6px;
        }

        /* Mobile time blocks height fix - only for time selection */
        @media (max-width: 991px) {
          .btn-bus-filter.d-flex.flex-column {
            min-height: 80px;
            padding: 12px 8px;
          }
        }

        /* Make all accordion icons match specific text color */
        .searchBar-single-title i,

        .icon-color{
          color: #022f5d !important;
        }
  

        /* Accordion Styles */
        .cursor-pointer {
          cursor: pointer;
          user-select: none;
        }

        .cursor-pointer:hover {
          background-color: #f8f9fa;
          border-radius: 4px;
        }

        .accordion-content {
          overflow: hidden;
          transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
          opacity: 0;
        }

        .accordion-content.show {
          opacity: 1;
          transition: max-height 0.3s ease-in, opacity 0.3s ease-in;
        }

        .accordion-content.hide {
          max-height: 0;
          opacity: 0;
        }

        .transition-all {
          transition: transform 0.3s ease;
        }

        .badge {
          font-weight: 500;
          padding: 0.25em 0.5em;
        }

        /* Hover effects for accordion content - only color change */
        .searchBar-single-wrap .form-check:hover .form-check-label,
        .searchBar-single-wrap .btn:hover,
        .searchBar-single-wrap li:hover .form-check-label {
          color: #d20000 !important;
        }

        /* CLEAR button styling */
        .clear-btn {
          color: #6c757d !important;
          border: none !important;
          background: transparent !important;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .clear-btn:hover {
          color: #d20000 !important;
          background: transparent !important;
        }

        /* When there are active selections, make CLEAR button red */
        .clear-btn.active {
          color: #d20000 !important;
        }


        /* Hide scrollbar but keep functionality */

        .tab-text{
          color: #022f5d !important;
        }
        .tab-text:hover{
          color:#cd2c22 !important;
        }

        .filter-tabs-scroll::-webkit-scrollbar {
          display: none;
        }

        .filter-tabs-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Price Range Slider Styles */
        .price-range-slider {
          padding: 15px 0;
        }

        .price-range-labels {
          font-weight: 500;
          color: #495057;
        }

        .price-range-container {
          height: 20px;
          margin: 20px 0;
        }

        .price-range-input {
          position: absolute;
          width: 100%;
          height: 20px;
          background: none;
          pointer-events: none;
          -webkit-appearance: none;
          appearance: none;
          outline: none;
        }

        .price-range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #cd2c22;
          cursor: pointer;
          pointer-events: all;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);

          transition: all 0.2s ease;
        }

        .price-range-input::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.3)

        }

        .price-range-input::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #cd2c22;
          cursor: pointer;
          pointer-events: all;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          transition: all 0.2s ease;
        }

        .price-range-input::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }

        .price-range-track {
          position: absolute;
          width: 100%;
          height: 4px;
          background: #e9ecef;
          border-radius: 2px;
          top: 50%;
          transform: translateY(-50%);
        }

        .price-range-progress {
          position: absolute;
          height: 4px;
          background: #cd2c22;
          border-radius: 2px;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.2s ease;
        }

        .price-range-inputs .form-control {
          border: 1px solid #dee2e6;
          border-radius: 4px;
          font-size: 14px;
          padding: 8px 12px;
        }

        .price-range-inputs .form-control:focus {
          border-color: #cd2c22;
          box-shadow: 0 0 0 0.2rem rgba(205, 44, 34, 0.25);
        }

        .price-range-inputs .form-label {
          font-weight: 500;
          color: #495057;
          margin-bottom: 4px;
        }

        .price-range-mobile {
          padding: 10px 0;
        }

        .price-range-mobile .price-range-slider {
          padding: 10px 0;
        }

        @media (max-width: 576px) {
          .filter-tab {
            padding: 10px 12px;
            min-width: 70px;
          }
          
          .filter-tab i {
            font-size: 12px;
          }
          
          .filter-tab span {
            font-size: 10px;
          }
          
          .filter-content-container {
            padding: 12px;
          }
          
          .filter-options {
            gap: 6px;
          }
          
          .filter-option .btn {
            font-size: 11px;
            padding: 5px 10px;
          }

      `}</style>
    </>
  )
}

export default BusFilterPage;