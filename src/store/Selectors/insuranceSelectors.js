// Insurance Selectors

// Authentication selectors
export const selectInsuranceAuthData = (state) => state.insurance.authData;
export const selectInsuranceToken = (state) => state.insurance.authData?.TokenId;
export const selectInsuranceEndUserIp = (state) => state.insurance.authData?.EndUserIp;
export const selectIsInsuranceAuthenticating = (state) => state.insurance.isAuthenticating;
export const selectInsuranceAuthError = (state) => state.insurance.authError;
export const selectIsInsuranceAuthenticated = (state) => !!state.insurance.authData?.TokenId;

// Search selectors
export const selectInsuranceSearchResults = (state) => state.insurance.searchResults;
export const selectInsurancePlans = (state) => state.insurance.searchResults?.Response?.Results || [];
export const selectIsInsuranceSearching = (state) => state.insurance.isSearching;
export const selectInsuranceSearchError = (state) => state.insurance.searchError;

// General state selectors
export const selectInsuranceLoading = (state) => state.insurance.loading;
export const selectInsuranceError = (state) => state.insurance.error;

// Computed selectors
export const selectInsurancePlanCount = (state) => {
  const plans = selectInsurancePlans(state);
  return plans.length;
};

export const selectInsurancePlansByCategory = (state, category) => {
  const plans = selectInsurancePlans(state);
  return plans.filter(plan => plan.PlanCategory === category);
};

export const selectInsurancePlansByType = (state, type) => {
  const plans = selectInsurancePlans(state);
  return plans.filter(plan => plan.PlanType === type);
};

export const selectInsurancePlansByCoverage = (state, coverage) => {
  const plans = selectInsurancePlans(state);
  return plans.filter(plan => plan.PlanCoverage === coverage);
};

// Error state selector
export const selectHasInsuranceError = (state) => {
  return !!(state.insurance.error || state.insurance.authError || state.insurance.searchError);
};

// Loading state selector
export const selectIsInsuranceBusy = (state) => {
  return state.insurance.loading || state.insurance.isAuthenticating || state.insurance.isSearching;
};
