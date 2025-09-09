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

// Destination search selectors
export const selectTransferDestinationSearch = (state) => selectTransferState(state);
export const selectTransferDestinationSearchLoading = (state) => selectTransferDestinationSearch(state).destinationSearchLoading;
export const selectTransferDestinationSearchData = (state) => selectTransferDestinationSearch(state).destinationSearchData;
export const selectTransferDestinationSearchError = (state) => selectTransferDestinationSearch(state).destinationSearchError;
export const selectTransferDestinations = (state) => selectTransferDestinationSearchData(state)?.Response?.DestinationList || [];
export const selectTransferDestinationCount = (state) => selectTransferDestinations(state).length;

// Enhanced destination search selectors
export const selectTransferDestinationSearchResponse = (state) => selectTransferDestinationSearchData(state)?.Response || null;
export const selectTransferDestinationSearchStatus = (state) => selectTransferDestinationSearchData(state)?.Status || null;
export const selectTransferDestinationSearchMessage = (state) => selectTransferDestinationSearchData(state)?.Message || null;

// Destination filtering and search selectors
export const selectTransferDestinationsByType = (state, type) => {
  const destinations = selectTransferDestinations(state);
  return destinations.filter(destination => destination.Type === type);
};

export const selectTransferDestinationsByCountry = (state, countryCode) => {
  const destinations = selectTransferDestinations(state);
  return destinations.filter(destination => destination.CountryCode === countryCode);
};

export const selectTransferDestinationOptions = (state) => {
  const destinations = selectTransferDestinations(state);
  return destinations.map(destination => ({
    id: destination.DestinationId || destination.Id,
    name: destination.DestinationName || destination.Name,
    code: destination.DestinationCode || destination.Code,
    type: destination.Type,
    countryCode: destination.CountryCode,
    countryName: destination.CountryName,
    region: destination.Region,
    city: destination.City,
    state: destination.State
  }));
};

export const selectTransferDestinationById = (state, destinationId) => {
  const destinations = selectTransferDestinations(state);
  return destinations.find(destination => 
    (destination.DestinationId || destination.Id) === destinationId
  );
};

export const selectTransferDestinationByCode = (state, destinationCode) => {
  const destinations = selectTransferDestinations(state);
  return destinations.find(destination => 
    (destination.DestinationCode || destination.Code) === destinationCode
  );
};

// General selectors
export const selectTransferLastAction = (state) => selectTransferState(state).lastAction;
export const selectTransferHasAnyError = (state) => {
  const transfer = selectTransferState(state);
  return !!(
    transfer.authError ||
    transfer.countryListError ||
    transfer.destinationSearchError
  );
};

export const selectTransferIsAnyLoading = (state) => {
  const transfer = selectTransferState(state);
  return !!(
    transfer.authLoading ||
    transfer.countryListLoading ||
    transfer.destinationSearchLoading
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

export const selectTransferCanSearchDestinations = (state) => {
  const isAuthenticated = selectTransferIsAuthenticated(state);
  const hasCountryCode = true; // This should be passed as parameter when calling
  return isAuthenticated && hasCountryCode;
};

// Debug and monitoring selectors
export const selectTransferDebugInfo = (state) => {
  const transfer = selectTransferState(state);
  return {
    isAuthenticated: transfer.isAuthenticated,
    hasToken: !!transfer.authData?.TokenId,
    hasEndUserIp: !!transfer.authData?.EndUserIp,
    lastAction: transfer.lastAction,
    loadingStates: {
      auth: transfer.authLoading,
      countryList: transfer.countryListLoading,
      destinationSearch: transfer.destinationSearchLoading
    },
    errorStates: {
      auth: !!transfer.authError,
      countryList: !!transfer.countryListError,
      destinationSearch: !!transfer.destinationSearchError
    },
    dataStates: {
      hasAuthData: !!transfer.authData,
      hasCountryListData: !!transfer.countryListData,
      hasDestinationSearchData: !!transfer.destinationSearchData,
      countryCount: selectTransferCountryCount(state),
      destinationCount: selectTransferDestinationCount(state)
    }
  };
};

// Selector for getting all transfer errors
export const selectTransferAllErrors = (state) => {
  const transfer = selectTransferState(state);
  const errors = [];
  
  if (transfer.authError) {
    errors.push({ type: 'auth', message: transfer.authError });
  }
  if (transfer.countryListError) {
    errors.push({ type: 'countryList', message: transfer.countryListError });
  }
  if (transfer.destinationSearchError) {
    errors.push({ type: 'destinationSearch', message: transfer.destinationSearchError });
  }
  
  return errors;
};