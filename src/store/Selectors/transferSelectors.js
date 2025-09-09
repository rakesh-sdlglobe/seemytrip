// Base selector to get transfer state
export const selectTransferState = (state) => state.transfer;

// Authentication selectors
export const selectTransferAuth = (state) => selectTransferState(state);
export const selectTransferAuthLoading = (state) => selectTransferAuth(state).authLoading;
export const selectTransferAuthData = (state) => selectTransferAuth(state).authData;
export const selectTransferAuthError = (state) => selectTransferAuth(state).authError;
export const selectTransferIsAuthenticated = (state) => selectTransferAuth(state).isAuthenticated;
export const selectTransferToken = (state) => selectTransferAuthData(state)?.TokenId;
export const selectTransferEndUserIp = (state) => selectTransferAuthData(state)?.EndUserIp;

// Country list selectors
export const selectTransferCountryList = (state) => selectTransferState(state);
export const selectTransferCountryListLoading = (state) => selectTransferCountryList(state).countryListLoading;
export const selectTransferCountryListData = (state) => selectTransferCountryList(state).countryListData;
export const selectTransferCountryListError = (state) => selectTransferCountryList(state).countryListError;
export const selectTransferCountries = (state) => selectTransferCountryListData(state)?.Response?.CountryList || [];
export const selectTransferCountryCount = (state) => selectTransferCountries(state).length;

// General selectors
export const selectTransferLastAction = (state) => selectTransferState(state).lastAction;
export const selectTransferHasAnyError = (state) => {
  const transfer = selectTransferState(state);
  return !!(
    transfer.authError ||
    transfer.countryListError
  );
};

export const selectTransferIsAnyLoading = (state) => {
  const transfer = selectTransferState(state);
  return !!(
    transfer.authLoading ||
    transfer.countryListLoading
  );
};

// Utility selectors for specific data extraction
export const selectTransferCountryOptions = (state) => {
  const countries = selectTransferCountries(state);
  return countries.map(country => ({
    id: country.CountryCode,
    name: country.CountryName,
    code: country.CountryCode,
    region: country.Region,
    currency: country.Currency,
    timezone: country.Timezone
  }));
};

export const selectTransferCountryByCode = (state, countryCode) => {
  const countries = selectTransferCountries(state);
  return countries.find(country => country.CountryCode === countryCode);
};

// Legacy selectors for backward compatibility (keeping the old names)
export const selectIsTransferAuthenticating = selectTransferAuthLoading;
export const selectIsTransferCountryListLoading = selectTransferCountryListLoading;
export const selectTransferLoading = selectTransferIsAnyLoading;
export const selectTransferError = selectTransferHasAnyError;

// Country filtering selectors
export const selectTransferCountriesByRegion = (state, region) => {
  const countries = selectTransferCountries(state);
  return countries.filter(country => country.Region === region);
};

export const selectTransferCountriesByCurrency = (state, currency) => {
  const countries = selectTransferCountries(state);
  return countries.filter(country => country.Currency === currency);
};

// Selector for checking if user can perform actions
export const selectTransferCanGetCountries = (state) => {
  const isAuthenticated = selectTransferIsAuthenticated(state);
  return isAuthenticated;
};