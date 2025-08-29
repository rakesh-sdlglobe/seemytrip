// Base selector to get insurance state
export const selectInsuranceState = (state) => state.insurance;

// Authentication selectors
export const selectInsuranceAuth = (state) => selectInsuranceState(state);
export const selectInsuranceAuthLoading = (state) => selectInsuranceAuth(state).authLoading;
export const selectInsuranceAuthData = (state) => selectInsuranceAuth(state).authData;
export const selectInsuranceAuthError = (state) => selectInsuranceAuth(state).authError;
export const selectInsuranceIsAuthenticated = (state) => selectInsuranceAuth(state).isAuthenticated;
export const selectInsuranceToken = (state) => selectInsuranceAuthData(state)?.TokenId;
export const selectInsuranceEndUserIp = (state) => selectInsuranceAuthData(state)?.EndUserIp;

// Search selectors
export const selectInsuranceSearch = (state) => selectInsuranceState(state);
export const selectInsuranceSearchLoading = (state) => selectInsuranceSearch(state).searchLoading;
export const selectInsuranceSearchData = (state) => selectInsuranceSearch(state).searchData;
export const selectInsuranceSearchError = (state) => selectInsuranceSearch(state).searchError;
export const selectInsuranceSearchResults = (state) => selectInsuranceSearchData(state)?.Response?.Results || [];
export const selectInsuranceSearchTotalResults = (state) => selectInsuranceSearchData(state)?.Response?.Results?.length || 0;
export const selectInsuranceSearchTraceId = (state) => selectInsuranceSearchData(state)?.Response?.TraceId;

// Booking selectors
export const selectInsuranceBook = (state) => selectInsuranceState(state);
export const selectInsuranceBookLoading = (state) => selectInsuranceBook(state).bookLoading;
export const selectInsuranceBookData = (state) => selectInsuranceBook(state).bookData;
export const selectInsuranceBookError = (state) => selectInsuranceBook(state).bookError;
export const selectInsuranceBookingId = (state) => selectInsuranceBookData(state)?.Response?.BookingId;
export const selectInsuranceBookingStatus = (state) => selectInsuranceBookData(state)?.Response?.Status;

// Policy selectors
export const selectInsurancePolicy = (state) => selectInsuranceState(state);
export const selectInsurancePolicyLoading = (state) => selectInsurancePolicy(state).policyLoading;
export const selectInsurancePolicyData = (state) => selectInsurancePolicy(state).policyData;
export const selectInsurancePolicyError = (state) => selectInsurancePolicy(state).policyError;
export const selectInsurancePolicyUrl = (state) => selectInsurancePolicyData(state)?.Response?.PolicyUrl;
export const selectInsurancePolicyNumber = (state) => selectInsurancePolicyData(state)?.Response?.PolicyNumber;

// Booking details selectors
export const selectInsuranceBookingDetails = (state) => selectInsuranceState(state);
export const selectInsuranceBookingDetailsLoading = (state) => selectInsuranceBookingDetails(state).bookingDetailsLoading;
export const selectInsuranceBookingDetailsData = (state) => selectInsuranceBookingDetails(state).bookingDetailsData;
export const selectInsuranceBookingDetailsError = (state) => selectInsuranceBookingDetails(state).bookingDetailsError;
export const selectInsuranceBookingDetailsInfo = (state) => selectInsuranceBookingDetailsData(state)?.Response?.BookingDetails;

// Cancel selectors
export const selectInsuranceCancel = (state) => selectInsuranceState(state);
export const selectInsuranceCancelLoading = (state) => selectInsuranceCancel(state).cancelLoading;
export const selectInsuranceCancelData = (state) => selectInsuranceCancel(state).cancelData;
export const selectInsuranceCancelError = (state) => selectInsuranceCancel(state).cancelError;
export const selectInsuranceCancelStatus = (state) => selectInsuranceCancelData(state)?.Response?.Status;

// General selectors
export const selectInsuranceLastAction = (state) => selectInsuranceState(state).lastAction;
export const selectInsuranceHasAnyError = (state) => {
  const insurance = selectInsuranceState(state);
  return !!(
    insurance.authError ||
    insurance.searchError ||
    insurance.bookError ||
    insurance.policyError ||
    insurance.bookingDetailsError ||
    insurance.cancelError
  );
};

export const selectInsuranceIsAnyLoading = (state) => {
  const insurance = selectInsuranceState(state);
  return !!(
    insurance.authLoading ||
    insurance.searchLoading ||
    insurance.bookLoading ||
    insurance.policyLoading ||
    insurance.bookingDetailsLoading ||
    insurance.cancelLoading
  );
};

// Utility selectors for specific data extraction
export const selectInsurancePlans = (state) => {
  const results = selectInsuranceSearchResults(state);
  return results.map(plan => ({
    id: plan.ResultIndex,
    name: plan.PlanName,
    category: plan.PlanCategory,
    type: plan.PlanType,
    coverage: plan.PlanCoverage,
    premium: plan.Premium,
    currency: plan.Currency,
    features: plan.Features,
    terms: plan.Terms,
    exclusions: plan.Exclusions
  }));
};

export const selectInsurancePlanById = (state, planId) => {
  const plans = selectInsurancePlans(state);
  return plans.find(plan => plan.id === planId);
};

export const selectInsuranceSearchFilters = (state) => {
  const searchData = selectInsuranceSearchData(state);
  if (!searchData?.Response) return null;
  
  return {
    planCategory: searchData.Response.PlanCategory,
    planType: searchData.Response.PlanType,
    planCoverage: searchData.Response.PlanCoverage,
    travelStartDate: searchData.Response.TravelStartDate,
    travelEndDate: searchData.Response.TravelEndDate,
    noOfPax: searchData.Response.NoOfPax,
    paxAge: searchData.Response.PaxAge
  };
};

// Selector for checking if user can perform actions
export const selectInsuranceCanBook = (state) => {
  const isAuthenticated = selectInsuranceIsAuthenticated(state);
  const hasSearchResults = selectInsuranceSearchTotalResults(state) > 0;
  return isAuthenticated && hasSearchResults;
};

export const selectInsuranceCanCancel = (state) => {
  const isAuthenticated = selectInsuranceIsAuthenticated(state);
  const hasBookingId = !!selectInsuranceBookingId(state);
  return isAuthenticated && hasBookingId;
};

// Legacy selectors for backward compatibility (keeping the old names)
export const selectIsInsuranceAuthenticating = selectInsuranceAuthLoading;
export const selectIsInsuranceSearching = selectInsuranceSearchLoading;
export const selectInsuranceLoading = selectInsuranceIsAnyLoading;
export const selectInsuranceError = selectInsuranceHasAnyError;
export const selectInsurancePlanCount = selectInsuranceSearchTotalResults;

// Category and type filtering selectors
export const selectInsurancePlansByCategory = (state, category) => {
  const plans = selectInsurancePlans(state);
  return plans.filter(plan => plan.category === category);
};

export const selectInsurancePlansByType = (state, type) => {
  const plans = selectInsurancePlans(state);
  return plans.filter(plan => plan.type === type);
};

export const selectInsurancePlansByCoverage = (state, coverage) => {
  const plans = selectInsurancePlans(state);
  return plans.filter(plan => plan.coverage === coverage);
};
