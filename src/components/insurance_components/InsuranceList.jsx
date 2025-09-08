import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Header02 from '../header02';
import Footer from '../footer';
import AuthPopup from '../auth/AuthPopup';
import InsuranceListSkeleton from './InsuranceListSkeleton';
import { 
  selectIsInsuranceSearching, 
  selectInsuranceSearchError,
  selectInsuranceSearchResults,
  selectInsurancePlanCount 
} from '../../store/Selectors/insuranceSelectors';
import { getInsuranceList } from '../../store/Actions/insuranceAction';
import { getEncryptedItem } from '../../utils/encryption';
import { FaTimes, FaShieldAlt } from 'react-icons/fa';

const InsuranceList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const loading = useSelector(selectIsInsuranceSearching);
  const error = useSelector(selectInsuranceSearchError);
  const plans = useSelector(selectInsuranceSearchResults);
  const planCount = useSelector(selectInsurancePlanCount);
  

  
  // State for selected plans and pagination
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchCriteria, setSearchCriteria] = useState({});
  const [showCoverDetailsModal, setShowCoverDetailsModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [pendingPlan, setPendingPlan] = useState(null);
  const plansPerPage = 6;

  // Price filter state
  const [priceFilter, setPriceFilter] = useState({
    minPrice: '',
    maxPrice: '',
    priceRange: 'all' // 'all', 'under-1000', '1000-5000', '5000-10000', 'over-10000'
  });
  const [filteredPlans, setFilteredPlans] = useState([]);

  // Load search criteria from navigation state or localStorage
  useEffect(() => {
    const state = location.state;
    
    if (state && state.searchParams) {
      setSearchCriteria(state.searchParams);
      
      // Fetch insurance data if we have search criteria
      if (state.searchParams && Object.keys(state.searchParams).length > 0) {
        fetchInsuranceData(state.searchParams);
      }
    } else {
      // Fallback to localStorage for form data
      const params = getEncryptedItem('insuranceSearchParams');
      if (params) {
        setSearchCriteria(params);
        
        // Fetch insurance data if we have search criteria
        if (params && Object.keys(params).length > 0) {
          fetchInsuranceData(params);
        }
      }
    }
  }, [location.state]);

  // Filter plans based on price criteria
  useEffect(() => {
    if (!plans || plans.length === 0) {
      setFilteredPlans([]);
      return;
    }

    let filtered = [...plans];

    // Apply price range filter
    if (priceFilter.priceRange !== 'all') {
      filtered = filtered.filter(plan => {
        const price = plan.Price?.OfferedPriceRoundedOff || plan.Price?.OfferedPrice || 0;
        
        switch (priceFilter.priceRange) {
          case 'under-1000':
            return price < 1000;
          case '1000-5000':
            return price >= 1000 && price <= 5000;
          case '5000-10000':
            return price > 5000 && price <= 10000;
          case 'over-10000':
            return price > 10000;
          default:
            return true;
        }
      });
    }

    // Apply custom min/max price filter
    if (priceFilter.minPrice && priceFilter.minPrice.trim() !== '') {
      const minPrice = parseFloat(priceFilter.minPrice);
      if (!isNaN(minPrice) && minPrice > 0) {
        filtered = filtered.filter(plan => {
          const price = plan.Price?.OfferedPriceRoundedOff || plan.Price?.OfferedPrice || 0;
          return price >= minPrice;
        });
      }
    }

    if (priceFilter.maxPrice && priceFilter.maxPrice.trim() !== '') {
      const maxPrice = parseFloat(priceFilter.maxPrice);
      if (!isNaN(maxPrice) && maxPrice > 0) {
        filtered = filtered.filter(plan => {
          const price = plan.Price?.OfferedPriceRoundedOff || plan.Price?.OfferedPrice || 0;
          return price <= maxPrice;
        });
      }
    }

    // Ensure we don't accidentally filter out all results
    if (filtered.length === 0 && plans.length > 0) {
      // If we have plans but filtered results are empty, check if it's due to invalid filters
      const hasValidMinFilter = priceFilter.minPrice && priceFilter.minPrice.trim() !== '' && !isNaN(parseFloat(priceFilter.minPrice)) && parseFloat(priceFilter.minPrice) > 0;
      const hasValidMaxFilter = priceFilter.maxPrice && priceFilter.maxPrice.trim() !== '' && !isNaN(parseFloat(priceFilter.maxPrice)) && parseFloat(priceFilter.maxPrice) > 0;
      
      // If we have invalid filters or no custom filters, show all plans
      if (!hasValidMinFilter && !hasValidMaxFilter && priceFilter.priceRange === 'all') {
        setFilteredPlans([...plans]);
      } else {
        setFilteredPlans(filtered);
      }
    } else {
      setFilteredPlans(filtered);
    }
    
    setCurrentPage(1); // Reset to first page when filters change
  }, [plans, priceFilter]);

  // Function to fetch insurance data
  const fetchInsuranceData = async (searchParams) => {
    try {
      // Prepare the search data based on the API structure
      const searchData = {
        PlanType: searchParams.planType || 1,
        PlanCoverage: searchParams.planCoverage || 4,
        TravelStartDate: searchParams.departDate || new Date().toISOString().split('T')[0],
        TravelEndDate: searchParams.returnDate || new Date().toISOString().split('T')[0],
        NoOfPax: searchParams.passengerCount || 1,
        PaxAge: searchParams.passengerAges || [25],
        PlanCategory: searchParams.planCategory || 1
      };
      
      await dispatch(getInsuranceList(searchData));
    } catch (error) {
      console.error('Error fetching insurance data:', error);
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && showCoverDetailsModal) {
        handleCloseModal();
      }
    };

    if (showCoverDetailsModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showCoverDetailsModal]);

  // Handle plan selection
  const handlePlanSelection = (planId) => {
    setSelectedPlans(prev => 
      prev.includes(planId) 
        ? prev.filter(id => id !== planId)
        : [...prev, planId]
    );
  };

  // Handle plan booking
  const handlePlanBooking = (plan) => {
    // Check if user is authenticated
    const token = localStorage.getItem('authToken');
    const user1 = localStorage.getItem('user1');
    
    if (!token || !user1) {
      // User is not authenticated, show authentication popup
      setPendingPlan(plan);
      setShowAuthPopup(true);
      return;
    }
    
    proceedWithBooking(plan);
  };

  // Function to proceed with booking
  const proceedWithBooking = (plan) => {
    // Navigate to booking details page with all necessary data
    navigate('/insurance-booking-page', { 
      state: { 
        planId: plan.ResultIndex,
        plan: plan,
        searchParams: searchCriteria,
        authData: location.state?.authData,
        traceId: location.state?.traceId
      } 
    });
  };

  // Handle authentication popup close
  const handleAuthClose = () => {
    setShowAuthPopup(false);
    
    // Check if user is now authenticated after popup closes
    if (pendingPlan) {
      const token = localStorage.getItem('authToken');
      const user1 = localStorage.getItem('user1');
      
      if (token && user1) {
        proceedWithBooking(pendingPlan);
      }
      setPendingPlan(null);
    }
  };

  // Handle cover details click
  const handleCoverDetails = (plan, event) => {
    event.preventDefault();
    
    // Open cover details modal
    setSelectedPlan(plan);
    setShowCoverDetailsModal(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setShowCoverDetailsModal(false);
    setSelectedPlan(null);
  };

  // Handle price filter changes
  const handlePriceRangeChange = (range) => {
    setPriceFilter(prev => ({
      ...prev,
      priceRange: range,
      minPrice: '',
      maxPrice: ''
    }));
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setPriceFilter(prev => ({
      ...prev,
      minPrice: value,
      priceRange: value.trim() !== '' ? 'all' : prev.priceRange
    }));
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setPriceFilter(prev => ({
      ...prev,
      maxPrice: value,
      priceRange: value.trim() !== '' ? 'all' : prev.priceRange
    }));
  };

  const clearPriceFilters = () => {
    setPriceFilter({
      minPrice: '',
      maxPrice: '',
      priceRange: 'all'
    });
  };

  // Handle email selected quotes
  const handleEmailSelected = () => {
    if (selectedPlans.length === 0) {
      alert('Please select at least one plan to email.');
      return;
    }
    alert(`Emailing ${selectedPlans.length} selected quotes...`);
    // TODO: Implement email functionality
  };

  // Pagination
  const totalPages = Math.ceil((filteredPlans?.length || 0) / plansPerPage);
  const startIndex = (currentPage - 1) * plansPerPage;
  const endIndex = startIndex + plansPerPage;
  const currentPlans = filteredPlans ? filteredPlans.slice(startIndex, endIndex) : [];

  if (loading) {
    return <InsuranceListSkeleton />;
  }

  if (error) {
    return (
      <>
        <Header02 />
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Error!</h4>
                <p>{error}</p>
                <hr />
                <p className="mb-0">
                  <button 
                    className="btn btn-outline-danger"
                    onClick={() => fetchInsuranceData(searchCriteria)}
                  >
                    Try Again
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!plans || plans.length === 0) {
    return (
      <>
        <Header02 />
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="alert alert-info" role="alert">
                  <h4 className="alert-heading">No Insurance Plans Found</h4>
                  <p>No insurance plans match your search criteria. Please try adjusting your search parameters.</p>
                  <hr />
                  <p className="mb-0">
                    <Link to="/home-insurance" className="btn btn-outline-info">
                      Back to Insurance Search
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }


  return (
    <>
      <Header02 />
      <div className="container-xl mt-4">
        <div className="row">
          {/* Left Sidebar - Search Criteria */}
          <div className="col-md-3">
            <div className="card shadow-sm border-0 sticky-top" style={{top: '20px'}}>
              <div className="card-header bg-white border-0 pb-0">
                <h5 className="fw-bold text-dark mb-0 pb-3 border-bottom border-2 border-primary">
                  <i className="fas fa-search me-2 text-primary"></i>
                  Search Criteria
                </h5>
              </div>
               
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-user me-2 text-primary" style={{width: '20px', textAlign: 'center'}}></i>
                  <span className="text-muted">{searchCriteria.planType === 1 ? 'Single Trip' : 'Annual Multi Trip'}</span>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-flag me-2 text-primary" style={{width: '20px', textAlign: 'center'}}></i>
                  <span className="text-muted">
                    {searchCriteria.planCoverage === 1 ? 'US' :
                     searchCriteria.planCoverage === 2 ? 'Non-US' :
                     searchCriteria.planCoverage === 3 ? 'WorldWide' :
                     searchCriteria.planCoverage === 4 ? 'India' :
                     searchCriteria.planCoverage === 5 ? 'Asia' :
                     searchCriteria.planCoverage === 6 ? 'Canada' :
                     searchCriteria.planCoverage === 7 ? 'Australia' :
                     searchCriteria.planCoverage === 8 ? 'Schenegen Countries' : 'Unknown'}
                  </span>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-calendar me-2 text-primary" style={{width: '20px', textAlign: 'center'}}></i>
                  <span className="text-muted">
                    {searchCriteria.duration || 1} Day(s) 
                    ({searchCriteria.departDate && new Date(searchCriteria.departDate).toLocaleDateString('en-GB', { 
                      day: '2-digit', 
                      month: 'short', 
                      year: 'numeric' 
                    })} - {(() => {
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
                    })()})
                  </span>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-users me-2 text-primary" style={{width: '20px', textAlign: 'center'}}></i>
                  <span className="text-muted">No. of Pax: {searchCriteria.passengerCount || 1}</span>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-chart-line me-2 text-primary" style={{width: '20px', textAlign: 'center'}}></i>
                  <span className="text-muted">{searchCriteria.passengerAges?.join(', ') || '25'} Years Old</span>
                </div>
                
                
                <button 
                  className="btn btn-danger w-100 mt-3"
                  onClick={() => navigate('/home-insurance', { 
                    state: { 
                      searchParams: searchCriteria,
                      modifyMode: true 
                    } 
                  })}
                >
                  Modify Search
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Insurance Plans */}
          <div className="col-md-9">
            {/* Header with Email Button */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold fs-6 mb-0">
                Showing {currentPlans.length} of {filteredPlans.length} Insurance Plans
                {filteredPlans.length !== plans.length && (
                  <span className="text-muted ms-2">
                    (filtered from {plans.length} total)
                  </span>
                )}
              </h5>
              <button 
                className="btn btn-danger"
                onClick={handleEmailSelected}
                disabled={selectedPlans.length === 0}
              >
                <i className="fas fa-envelope me-2"></i>
                Email Selected Quotes
              </button>
            </div>

            {/* Sticky Price Filter Bar */}
            <div className="sticky-filter-bar bg-white border rounded p-3 mb-4 shadow-sm" style={{
              position: 'sticky',
              top: '20px',
              zIndex: 1000
            }}>
              <div className="row align-items-center">
                <div className="col-md-3">
                  <h6 className="fw-bold text-dark mb-0">
                    <i className="fas fa-filter me-2 text-primary"></i>
                    Price Filter
                  </h6>
                </div>
                
                <div className="col-md-6">
                  {/* Quick Price Ranges */}
                  <div className="btn-group w-100" role="group">
                    <button
                      type="button"
                      className={`btn btn-sm ${priceFilter.priceRange === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handlePriceRangeChange('all')}
                    >
                      All Prices
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm ${priceFilter.priceRange === 'under-1000' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handlePriceRangeChange('under-1000')}
                    >
                      Under ₹1K
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm ${priceFilter.priceRange === '1000-5000' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handlePriceRangeChange('1000-5000')}
                    >
                      ₹1K - ₹5K
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm ${priceFilter.priceRange === '5000-10000' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handlePriceRangeChange('5000-10000')}
                    >
                      ₹5K - ₹10K
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm ${priceFilter.priceRange === 'over-10000' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handlePriceRangeChange('over-10000')}
                    >
                      Over ₹10K
                    </button>
                  </div>
                </div>
                
                <div className="col-md-3">
                  <div className="d-flex gap-2">
                    {/* Custom Price Range */}
                    <input
                      type="number"
                      className="form-control form-control-s h-8"
                      placeholder="Min ₹"
                      value={priceFilter.minPrice}
                      onChange={handleMinPriceChange}
                      min="0"
                      step="100"
                      style={{width: '80px'}}
                    />
                    <input
                      type="number"
                      className="form-control form-control-sm  h-8"
                      placeholder="Max ₹"
                      value={priceFilter.maxPrice}
                      onChange={handleMaxPriceChange}
                      min="0"
                      step="100"
                      style={{width: '80px'}}
                    />
                    
                    {/* Clear Filters */}
                    {(priceFilter.priceRange !== 'all' || priceFilter.minPrice || priceFilter.maxPrice) && (
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={clearPriceFilters}
                        title="Clear Filters"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* No Results Message for Price Filter */}
            {filteredPlans.length === 0 && plans.length > 0 && (
              <div className="text-center py-5">
                <div className="alert alert-warning" role="alert">
                  <h5 className="alert-heading">
                    <i className="fas fa-filter me-2"></i>
                    No Plans Match Your Price Filter
                  </h5>
                  <p className="mb-3">No insurance plans match your current price filter criteria. Please try adjusting your price range.</p>
                  <button 
                    className="btn btn-outline-warning"
                    onClick={clearPriceFilters}
                  >
                    <i className="fas fa-times me-1"></i>
                    Clear Price Filters
                  </button>
                </div>
              </div>
            )}

            {/* Insurance Plans List */}
            {filteredPlans.length > 0 && (
              <>
                <div className="d-flex flex-column gap-3">
                  {currentPlans.map((plan, index) => (
                    <div key={plan.ResultIndex} className="border rounded p-3 mb-3 bg-white" style={{ borderColor: "#007bff" }}>
                      <div className="d-flex justify-content-between align-items-start flex-wrap position-relative">
                        {/* Top Section */}
                        <div className="d-flex justify-content-between flex-wrap w-100">
                          <div>
                            <h5 className="fw-bold mb-1">{plan.PlanName}</h5>
                            <p className="text-muted mb-2">
                              {searchCriteria.planType === 1 ? 'Single Trip' : 'Annual Multi Trip'} • 
                              {searchCriteria.planCoverage === 1 ? 'US' :
                               searchCriteria.planCoverage === 2 ? 'Non-US' :
                               searchCriteria.planCoverage === 3 ? 'WorldWide' :
                               searchCriteria.planCoverage === 4 ? 'India' :
                               searchCriteria.planCoverage === 5 ? 'Asia' :
                               searchCriteria.planCoverage === 6 ? 'Canada' :
                               searchCriteria.planCoverage === 7 ? 'Australia' :
                               searchCriteria.planCoverage === 8 ? 'Schenegen Countries' : 'Unknown'} Coverage
                            </p>
                          </div>

                          <div className="d-flex gap-5 justify-content-between ">
                          <div className=" flex flex-column fw-bold fs-4 fs-sm-6 ">
                            ₹{plan.Price?.OfferedPriceRoundedOff || plan.Price?.OfferedPrice || 'N/A'}
                            <div className="text-muted mb-2 fs-6">
                              {plan.Price?.OfferedPriceRoundedOff || plan.Price?.OfferedPrice ? 'Best Price' : 'Price on Request'}
                            </div>
                          </div>
                          <div className="d-flex gap-2">
                              <div className="d-flex align-items-center gap-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`plan-${plan.ResultIndex}`}
                                  checked={selectedPlans.includes(plan.ResultIndex)}
                                  onChange={() => handlePlanSelection(plan.ResultIndex)}
                                  style={{width: '18px', height: '18px'}}
                                />
                                <label className="text-muted mb-0 fs-6" htmlFor={`plan-${plan.ResultIndex}`}>
                                  Email
                                </label>
                              </div>
                              <button className="btn btn-danger  hover-btn-color-danger" onClick={() => handlePlanBooking(plan)}>
                                Choose This
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Middle Section - Duration and Dates */}
                        {/* <div className="middle-section">
                          <div className="text-center me-4">
                            <div className="fw-bold">Start Date</div>
                            <div className="text-muted small">
                              {plan.PolicyStartDate && new Date(plan.PolicyStartDate).toLocaleDateString('en-GB', { 
                                day: '2-digit', 
                                month: 'short' 
                              })}
                            </div>
                          </div>
                          <div className="text-center mx-3">
                            <div className="text-muted fw-semibold">
                              {plan.PolicyStartDate && plan.PolicyEndDate ? 
                                Math.ceil((new Date(plan.PolicyEndDate) - new Date(plan.PolicyStartDate)) / (1000 * 60 * 60 * 24)) : 
                                searchCriteria.duration || 1} Day(s)
                              </div>
                          </div>
                          <div className="text-center ms-4">
                            <div className="fw-bold">End Date</div>
                            <div className="text-muted small">
                              {plan.PolicyEndDate && new Date(plan.PolicyEndDate).toLocaleDateString('en-GB', { 
                                day: '2-digit', 
                                month: 'short' 
                              })}
                            </div>
                          </div>
                        </div> */}

                        {/* Bottom Section */}
                        {/* <div className="d-flex justify-content-between w-100">
                          <div>
                            <button className="btn btn-outline-secondary btn-sm px-3 py-1">
                              Comprehensive Coverage
                            </button>
                          </div>

                          <div>
                            <div className="text-muted mb-2">
                              {plan.Price?.OfferedPriceRoundedOff || plan.Price?.OfferedPrice ? 'Best Price' : 'Price on Request'}
                            </div>
                            <div className="d-flex gap-2">
                              <div className="d-flex align-items-center gap-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`plan-${plan.ResultIndex}`}
                                  checked={selectedPlans.includes(plan.ResultIndex)}
                                  onChange={() => handlePlanSelection(plan.ResultIndex)}
                                  style={{width: '18px', height: '18px'}}
                                />
                                <label className="text-muted mb-0 fs-6" htmlFor={`plan-${plan.ResultIndex}`}>
                                  Email
                                </label>
                              </div>
                              <button className="btn btn-danger hover-btn-color-white" onClick={() => handlePlanBooking(plan)}>
                                Choose This
                              </button>
                            </div>
                          </div>
                        </div> */}
                      </div>

                      {/* Action Links */}
                      <div className="d-flex justify-content-center gap-4 mt-3 pt-3 border-top">
                        <a href="#" className="text-primary text-decoration-none fs-6" onClick={(e) => handleCoverDetails(plan, e)}>
                          <i className="fas fa-shield-alt me-1"></i>Cover Details
                        </a>
                        <span className="text-muted">|</span>
                        <a href="#" className="text-primary text-decoration-none fs-6">
                          <i className="fas fa-calculator me-1"></i>Price Break Up
                        </a>
                        <span className="text-muted">|</span>
                        <a href="#" className="text-primary text-decoration-none fs-6">
                          <i className="fas fa-file-alt me-1"></i>Policy Document
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                    <span className="text-muted fs-6">
                      {currentPage} of {totalPages}
                    </span>
                    <div className="d-flex gap-2">
                      <button 
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>
                      <button 
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Cover Details Modal */}
      {showCoverDetailsModal && selectedPlan && (
        <div 
          className="modal-overlay" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1050,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
          }}
          onClick={handleCloseModal}
        >
          <div 
            className="modal-content" 
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header" style={{
              padding: '20px 24px 16px',
              borderBottom: '1px solid #e9ecef',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div className="d-flex align-items-center">
                <FaShieldAlt className="text-primary me-2" size={20} />
                <h4 className="mb-0 fw-bold text-dark">Cover Details | Price Break Up</h4>
              </div>
              <button
                onClick={handleCloseModal}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#6c757d',
                  padding: '4px',
                  borderRadius: '4px',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#dc3545'}
                onMouseLeave={(e) => e.target.style.color = '#6c757d'}
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body" style={{ padding: '24px' }}>
              {/* Coverage Details Table */}
              <div className="coverage-details-section">
                <h5 className="fw-bold text-dark mb-3">Coverage Details</h5>
                
                <div className="table-responsive">
                  <table className="table table-hover" style={{
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}>
                    <thead style={{ backgroundColor: '#f8f9fa' }}>
                      <tr>
                        <th style={{
                          padding: '16px',
                          borderBottom: '2px solid #dee2e6',
                          fontWeight: '600',
                          color: '#495057',
                          fontSize: '14px'
                        }}>
                          Coverage
                        </th>
                        <th style={{
                          padding: '16px',
                          borderBottom: '2px solid #dee2e6',
                          fontWeight: '600',
                          color: '#495057',
                          fontSize: '14px',
                          textAlign: 'center'
                        }}>
                          Sum Insured
                        </th>
                        <th style={{
                          padding: '16px',
                          borderBottom: '2px solid #dee2e6',
                          fontWeight: '600',
                          color: '#495057',
                          fontSize: '14px',
                          textAlign: 'center'
                        }}>
                          Excess
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedPlan.CoverageDetails && Array.isArray(selectedPlan.CoverageDetails) && selectedPlan.CoverageDetails.length > 0 ? (
                        selectedPlan.CoverageDetails.map((coverage, index) => (
                          <tr key={index} style={{ borderBottom: '1px solid #f1f3f4' }}>
                            <td style={{
                              padding: '16px',
                              fontWeight: '500',
                              color: '#212529',
                              fontSize: '14px',
                              verticalAlign: 'middle'
                            }}>
                              {coverage.Coverage}
                            </td>
                            <td style={{
                              padding: '16px',
                              textAlign: 'center',
                              fontWeight: '600',
                              color: '#28a745',
                              fontSize: '14px',
                              verticalAlign: 'middle'
                            }}>
                              {coverage.SumCurrency} {coverage.SumInsured}
                            </td>
                            <td style={{
                              padding: '16px',
                              textAlign: 'center',
                              color: '#6c757d',
                              fontSize: '14px',
                              verticalAlign: 'middle'
                            }}>
                              {coverage.Excess || '-'}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3" style={{
                            padding: '24px',
                            textAlign: 'center',
                            color: '#6c757d',
                            fontSize: '14px'
                          }}>
                            No coverage details available for this plan.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer" style={{
              padding: '16px 24px 24px',
              borderTop: '1px solid #e9ecef',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <button
                onClick={handleCloseModal}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '12px 32px',
                  borderRadius: '6px',
                  fontWeight: '500',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15) !important;
        }
        
        .form-check-input {
          accent-color: var(--bs-primary);
        }
        
        .text-primary:hover {
          color: var(--bs-primary) !important;
        }
        
        .middle-section {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          position: absolute;
          top: 50%;
          bottom: 50%;
        }

        /* When screen is between 600px and 1200px → absolute */
        @media (max-width: 560px) {
          .middle-section {
            position: static;
            margin-bottom: 10px;
          }
        }
        
        @media (max-width: 768px) {
          .d-flex.justify-content-between.align-items-center.flex-wrap {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }

        /* Modal Styles */
        .modal-overlay {
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          animation: slideIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Table Styles */
        .table th {
          background-color: #f8f9fa !important;
          border-color: #dee2e6 !important;
        }

        .table td {
          border-color: #f1f3f4 !important;
        }

        .table tbody tr:hover {
          background-color: #f8f9fa !important;
        }

        /* Responsive Modal */
        @media (max-width: 768px) {
          .modal-content {
            max-width: 95vw;
            margin: 10px;
          }
          
          .modal-header h4 {
            font-size: 18px;
          }
          
          .table-responsive {
            font-size: 12px;
          }
          
          .table th,
          .table td {
            padding: 8px !important;
          }
        }

        /* Sticky Filter Bar Styles */
        .sticky-filter-bar {
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.95) !important;
        }

        .sticky-filter-bar .btn-group .btn {
          font-size: 12px;
          padding: 6px 8px;
        }

        /* Responsive Filter Bar */
        @media (max-width: 768px) {
          .sticky-filter-bar .row {
            flex-direction: column;
            gap: 10px;
          }
          
          .sticky-filter-bar .col-md-3,
          .sticky-filter-bar .col-md-6 {
            width: 100%;
            max-width: 100%;
          }
          
          .sticky-filter-bar .btn-group {
            flex-wrap: wrap;
            gap: 5px;
          }
          
          .sticky-filter-bar .btn-group .btn {
            flex: 1;
            min-width: 0;
            font-size: 11px;
            padding: 4px 6px;
          }
          
          .sticky-filter-bar .d-flex.gap-2 {
            justify-content: center;
          }
          
          .sticky-filter-bar input[type="number"] {
            width: 70px !important;
          }
        }

        @media (max-width: 576px) {
          .sticky-filter-bar {
            padding: 15px !important;
          }
          
          .sticky-filter-bar h6 {
            font-size: 14px;
            text-align: center;
          }
          
          .sticky-filter-bar .btn-group .btn {
            font-size: 10px;
            padding: 3px 4px;
          }
        }
      `}</style>
      
      {/* Authentication Popup */}
      <AuthPopup 
        isOpen={showAuthPopup} 
        onClose={handleAuthClose} 
        mode="login" 
      />
      
      <Footer />
    </>
  );
};

export default InsuranceList;
