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
export const selectTransferDestinations = (state) => selectTransferDestinationSearchData(state)?.destinations || [];
export const selectTransferDestinationCount = (state) => selectTransferDestinations(state).length;

// Transfer static data selectors
export const selectTransferStaticData = (state) => selectTransferState(state);
export const selectTransferStaticDataLoading = (state) => selectTransferStaticData(state).staticDataLoading;
export const selectTransferStaticDataData = (state) => selectTransferStaticData(state).staticDataData;
export const selectTransferStaticDataError = (state) => selectTransferStaticData(state).staticDataError;

// Transfer search selectors
export const selectTransferSearch = (state) => selectTransferState(state);
export const selectTransferSearchLoading = (state) => selectTransferSearch(state).searchLoading;
export const selectTransferSearchData = (state) => selectTransferSearch(state).searchData;
export const selectTransferSearchError = (state) => selectTransferSearch(state).searchError;

// Enhanced destination search selectors
export const selectTransferDestinationSearchResponse = (state) => selectTransferDestinationSearchData(state) || null;
export const selectTransferDestinationSearchStatus = (state) => selectTransferDestinationSearchData(state)?.success || null;
export const selectTransferDestinationSearchMessage = (state) => selectTransferDestinationSearchData(state)?.message || null;

// Destination filtering and search selectors
export const selectTransferDestinationsByCountry = (state, countryCode) => {
  const destinations = selectTransferDestinations(state);
  return destinations.filter(destination => destination.CountryCode === countryCode);
};

export const selectTransferDestinationOptions = (state) => {
  const destinations = selectTransferDestinations(state);
  return destinations.map(destination => ({
    id: destination.CityId,
    name: destination.CityNamewithCountry,
    cityName: destination.CityNamewithCountry?.split(',')[0] || destination.CityNamewithCountry,
    countryName: destination.CityNamewithCountry?.split(',')[1] || '',
    countryCode: destination.CountryCode,
    displayName: destination.CityNamewithCountry,
    value: destination.CityId,
    label: destination.CityNamewithCountry
  }));
};

export const selectTransferDestinationById = (state, cityId) => {
  const destinations = selectTransferDestinations(state);
  return destinations.find(destination => destination.CityId === cityId);
};

export const selectTransferDestinationByCityName = (state, cityName) => {
  const destinations = selectTransferDestinations(state);
  return destinations.find(destination => 
    destination.CityNamewithCountry?.toLowerCase().includes(cityName.toLowerCase())
  );
};

// New selectors for the transformed data structure
export const selectTransferDestinationCities = (state) => {
  const destinations = selectTransferDestinations(state);
  return destinations.map(destination => destination.CityNamewithCountry?.split(',')[0]).filter(Boolean);
};

export const selectTransferDestinationCountries = (state) => {
  const destinations = selectTransferDestinations(state);
  return [...new Set(destinations.map(destination => destination.CityNamewithCountry?.split(',')[1]).filter(Boolean))];
};

export const selectTransferDestinationsByCityName = (state, cityName) => {
  const destinations = selectTransferDestinations(state);
  return destinations.filter(destination => 
    destination.CityNamewithCountry?.toLowerCase().includes(cityName.toLowerCase())
  );
};

// General selectors
export const selectTransferLastAction = (state) => selectTransferState(state).lastAction;
export const selectTransferHasAnyError = (state) => {
  const transfer = selectTransferState(state);
  return !!(
    transfer.authError ||
    transfer.countryListError ||
    transfer.destinationSearchError ||
    transfer.staticDataError ||
    transfer.searchError
  );
};

export const selectTransferIsAnyLoading = (state) => {
  const transfer = selectTransferState(state);
  return !!(
    transfer.authLoading ||
    transfer.countryListLoading ||
    transfer.destinationSearchLoading ||
    transfer.staticDataLoading ||
    transfer.searchLoading
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

export const selectTransferCanGetStaticData = (state) => {
  const isAuthenticated = selectTransferIsAuthenticated(state);
  const hasCityId = true; // This should be passed as parameter when calling
  const hasTransferCategoryType = true; // This should be passed as parameter when calling
  return isAuthenticated && hasCityId && hasTransferCategoryType;
};

export const selectTransferCanSearch = (state) => {
  const isAuthenticated = selectTransferIsAuthenticated(state);
  const hasRequiredFields = true; // This should be validated when calling
  return isAuthenticated && hasRequiredFields;
};

// Debug and monitoring selectors
export const selectTransferDebugInfo = (state) => {
  const transfer = selectTransferState(state);
  const destinationData = transfer.destinationSearchData;
  return {
    isAuthenticated: transfer.isAuthenticated,
    hasToken: !!transfer.authData?.TokenId,
    hasEndUserIp: !!transfer.authData?.EndUserIp,
    lastAction: transfer.lastAction,
    loadingStates: {
      auth: transfer.authLoading,
      countryList: transfer.countryListLoading,
      destinationSearch: transfer.destinationSearchLoading,
      staticData: transfer.staticDataLoading,
      search: transfer.searchLoading
    },
    errorStates: {
      auth: !!transfer.authError,
      countryList: !!transfer.countryListError,
      destinationSearch: !!transfer.destinationSearchError,
      staticData: !!transfer.staticDataError,
      search: !!transfer.searchError
    },
    dataStates: {
      hasAuthData: !!transfer.authData,
      hasCountryListData: !!transfer.countryListData,
      hasDestinationSearchData: !!transfer.destinationSearchData,
      hasStaticData: !!transfer.staticDataData,
      hasSearchData: !!transfer.searchData,
      countryCount: selectTransferCountryCount(state),
      destinationCount: selectTransferDestinationCount(state)
    },
    destinationSearchDebug: {
      hasResponse: !!destinationData,
      success: destinationData?.success,
      hasDestinations: !!destinationData?.destinations,
      destinationCount: destinationData?.destinations?.length || 0,
      message: destinationData?.message,
      responseKeys: destinationData ? Object.keys(destinationData) : []
    },
    staticDataDebug: {
      hasResponse: !!transfer.staticDataData,
      dataKeys: transfer.staticDataData ? Object.keys(transfer.staticDataData) : []
    },
    searchDebug: {
      hasResponse: !!transfer.searchData,
      dataKeys: transfer.searchData ? Object.keys(transfer.searchData) : []
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
  if (transfer.staticDataError) {
    errors.push({ type: 'staticData', message: transfer.staticDataError });
  }
  if (transfer.searchError) {
    errors.push({ type: 'search', message: transfer.searchError });
  }
  
  return errors;
};

// Transfer static data utility selectors
export const selectTransferStaticDataResponse = (state) => selectTransferStaticDataData(state) || null;

export const selectTransferStaticDataByCategory = (state, categoryType) => {
  const staticData = selectTransferStaticDataData(state);
  if (!staticData) return null;
  
  // This selector can be customized based on the actual response structure
  // from the GetTransferStaticData API
  return staticData[categoryType] || null;
};

export const selectTransferStaticDataKeys = (state) => {
  const staticData = selectTransferStaticDataData(state);
  return staticData ? Object.keys(staticData) : [];
};

export const selectTransferStaticDataHasData = (state) => {
  const staticData = selectTransferStaticDataData(state);
  return !!staticData && Object.keys(staticData).length > 0;
};

// Transfer search utility selectors
export const selectTransferSearchResponse = (state) => selectTransferSearchData(state) || null;

export const selectTransferSearchResults = (state) => {
  const searchData = selectTransferSearchData(state);
  // Updated to match the actual response structure from GetSearchTransfer API
  return searchData?.TransferSearchResult?.TransferSearchResults || [];
};

export const selectTransferSearchHasResults = (state) => {
  const results = selectTransferSearchResults(state);
  return Array.isArray(results) ? results.length > 0 : !!results;
};

export const selectTransferSearchKeys = (state) => {
  const searchData = selectTransferSearchData(state);
  return searchData ? Object.keys(searchData) : [];
};

export const selectTransferSearchHasData = (state) => {
  const searchData = selectTransferSearchData(state);
  return !!searchData && Object.keys(searchData).length > 0;
};

// Enhanced search result selectors
export const selectTransferSearchResultCount = (state) => {
  const results = selectTransferSearchResults(state);
  return Array.isArray(results) ? results.length : 0;
};

export const selectTransferSearchResultByIndex = (state, index) => {
  const results = selectTransferSearchResults(state);
  return Array.isArray(results) ? results[index] : null;
};

export const selectTransferSearchResultById = (state, id) => {
  const results = selectTransferSearchResults(state);
  return Array.isArray(results) ? results.find(result => result.Id === id) : null;
};

// Static data enhanced selectors
export const selectTransferStaticDataResults = (state) => {
  const staticData = selectTransferStaticDataData(state);
  return staticData?.TransferSearchResult?.TransferSearchResults || [];
};

export const selectTransferStaticDataResultCount = (state) => {
  const results = selectTransferStaticDataResults(state);
  return Array.isArray(results) ? results.length : 0;
};

export const selectTransferStaticDataHasResults = (state) => {
  const results = selectTransferStaticDataResults(state);
  return Array.isArray(results) ? results.length > 0 : !!results;
};

// Debug selectors for enhanced logging
export const selectTransferDebugState = (state) => {
  const transfer = selectTransferState(state);
  return {
    isAuthenticated: transfer.isAuthenticated,
    hasToken: !!transfer.authData?.TokenId,
    hasEndUserIp: !!transfer.authData?.EndUserIp,
    lastAction: transfer.lastAction,
    loadingStates: {
      auth: transfer.authLoading,
      countryList: transfer.countryListLoading,
      destinationSearch: transfer.destinationSearchLoading,
      staticData: transfer.staticDataLoading,
      search: transfer.searchLoading
    },
    errorStates: {
      auth: !!transfer.authError,
      countryList: !!transfer.countryListError,
      destinationSearch: !!transfer.destinationSearchError,
      staticData: !!transfer.staticDataError,
      search: !!transfer.searchError
    },
    dataStates: {
      hasAuthData: !!transfer.authData,
      hasCountryListData: !!transfer.countryListData,
      hasDestinationSearchData: !!transfer.destinationSearchData,
      hasStaticData: !!transfer.staticDataData,
      hasSearchData: !!transfer.searchData
    }
  };
};

// Performance monitoring selectors
export const selectTransferPerformanceMetrics = (state) => {
  const transfer = selectTransferState(state);
  return {
    totalRequests: [
      transfer.authLoading,
      transfer.countryListLoading,
      transfer.destinationSearchLoading,
      transfer.staticDataLoading,
      transfer.searchLoading
    ].filter(Boolean).length,
    hasAnyData: !!(
      transfer.authData ||
      transfer.countryListData ||
      transfer.destinationSearchData ||
      transfer.staticDataData ||
      transfer.searchData
    ),
    hasAnyError: !!(
      transfer.authError ||
      transfer.countryListError ||
      transfer.destinationSearchError ||
      transfer.staticDataError ||
      transfer.searchError
    )
  };
};

// Enhanced data access selectors
export const selectTransferAuthDetails = (state) => {
  const authData = selectTransferAuthData(state);
  return {
    tokenId: authData?.TokenId,
    endUserIp: authData?.EndUserIp,
    agencyId: authData?.AgencyId,
    message: authData?.message,
    isComplete: !!(authData?.TokenId && authData?.EndUserIp)
  };
};

export const selectTransferCountryDetails = (state) => {
  const countries = selectTransferCountries(state);
  return {
    count: countries.length,
    countries: countries,
    hasData: countries.length > 0,
    sampleCountry: countries[0] || null
  };
};

export const selectTransferDestinationDetails = (state) => {
  const destinations = selectTransferDestinations(state);
  return {
    count: destinations.length,
    destinations: destinations,
    hasData: destinations.length > 0,
    sampleDestination: destinations[0] || null,
    uniqueCountries: [...new Set(destinations.map(d => d.CountryCode))].length
  };
};

export const selectTransferSearchDetails = (state) => {
  const results = selectTransferSearchResults(state);
  return {
    count: results.length,
    results: results,
    hasData: results.length > 0,
    sampleResult: results[0] || null
  };
};

export const selectTransferStaticDataDetails = (state) => {
  const results = selectTransferStaticDataResults(state);
  return {
    count: results.length,
    results: results,
    hasData: results.length > 0,
    sampleResult: results[0] || null
  };
};

// Validation selectors
export const selectTransferCanPerformAction = (actionType) => (state) => {
  const transfer = selectTransferState(state);
  const isAuthenticated = transfer.isAuthenticated;
  const hasToken = !!transfer.authData?.TokenId;
  
  switch (actionType) {
    case 'authenticate':
      return true; // Can always try to authenticate
    case 'getCountries':
      return isAuthenticated && hasToken;
    case 'searchDestinations':
      return isAuthenticated && hasToken;
    case 'getStaticData':
      return isAuthenticated && hasToken;
    case 'searchTransfers':
      return isAuthenticated && hasToken;
    default:
      return false;
  }
};

// Error summary selector
export const selectTransferErrorSummary = (state) => {
  const transfer = selectTransferState(state);
  const errors = [];
  
  if (transfer.authError) {
    errors.push({ type: 'Authentication', message: transfer.authError });
  }
  if (transfer.countryListError) {
    errors.push({ type: 'Country List', message: transfer.countryListError });
  }
  if (transfer.destinationSearchError) {
    errors.push({ type: 'Destination Search', message: transfer.destinationSearchError });
  }
  if (transfer.staticDataError) {
    errors.push({ type: 'Static Data', message: transfer.staticDataError });
  }
  if (transfer.searchError) {
    errors.push({ type: 'Search', message: transfer.searchError });
  }
  
  return {
    hasErrors: errors.length > 0,
    errorCount: errors.length,
    errors: errors
  };
};