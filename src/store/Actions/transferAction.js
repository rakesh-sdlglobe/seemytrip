import axios from 'axios';

// Action Types
export const TRANSFER_AUTH_REQUEST = 'TRANSFER_AUTH_REQUEST';
export const TRANSFER_AUTH_SUCCESS = 'TRANSFER_AUTH_SUCCESS';
export const TRANSFER_AUTH_FAILURE = 'TRANSFER_AUTH_FAILURE';

export const TRANSFER_COUNTRY_LIST_REQUEST = 'TRANSFER_COUNTRY_LIST_REQUEST';
export const TRANSFER_COUNTRY_LIST_SUCCESS = 'TRANSFER_COUNTRY_LIST_SUCCESS';
export const TRANSFER_COUNTRY_LIST_FAILURE = 'TRANSFER_COUNTRY_LIST_FAILURE';

export const TRANSFER_DESTINATION_SEARCH_REQUEST = 'TRANSFER_DESTINATION_SEARCH_REQUEST';
export const TRANSFER_DESTINATION_SEARCH_SUCCESS = 'TRANSFER_DESTINATION_SEARCH_SUCCESS';
export const TRANSFER_DESTINATION_SEARCH_FAILURE = 'TRANSFER_DESTINATION_SEARCH_FAILURE';

export const TRANSFER_STATIC_DATA_REQUEST = 'TRANSFER_STATIC_DATA_REQUEST';
export const TRANSFER_STATIC_DATA_SUCCESS = 'TRANSFER_STATIC_DATA_SUCCESS';
export const TRANSFER_STATIC_DATA_FAILURE = 'TRANSFER_STATIC_DATA_FAILURE';


export const TRANSFER_SEARCH_REQUEST = 'TRANSFER_SEARCH_REQUEST';
export const TRANSFER_SEARCH_SUCCESS = 'TRANSFER_SEARCH_SUCCESS';
export const TRANSFER_SEARCH_FAILURE = 'TRANSFER_SEARCH_FAILURE';

export const TRANSFER_BOOKING_REQUEST = 'TRANSFER_BOOKING_REQUEST';
export const TRANSFER_BOOKING_SUCCESS = 'TRANSFER_BOOKING_SUCCESS';
export const TRANSFER_BOOKING_FAILURE = 'TRANSFER_BOOKING_FAILURE';

export const TRANSFER_BOOKING_DETAIL_REQUEST = 'TRANSFER_BOOKING_DETAIL_REQUEST';
export const TRANSFER_BOOKING_DETAIL_SUCCESS = 'TRANSFER_BOOKING_DETAIL_SUCCESS';
export const TRANSFER_BOOKING_DETAIL_FAILURE = 'TRANSFER_BOOKING_DETAIL_FAILURE';

export const CLEAR_TRANSFER_ERROR = 'CLEAR_TRANSFER_ERROR';
export const CLEAR_TRANSFER_DATA = 'CLEAR_TRANSFER_DATA';

// API URL
export const API_URL = process.env.REACT_APP_API_URL || 'https://tripadmin.seemytrip.com/api';

// Action Creators
export const transferAuthRequest = () => ({
  type: TRANSFER_AUTH_REQUEST
});

export const transferAuthSuccess = (data) => ({
  type: TRANSFER_AUTH_SUCCESS,
  payload: data
});

export const transferAuthFailure = (error) => ({
  type: TRANSFER_AUTH_FAILURE,
  payload: error
});

export const transferCountryListRequest = () => ({
  type: TRANSFER_COUNTRY_LIST_REQUEST
});

export const transferCountryListSuccess = (data) => ({
  type: TRANSFER_COUNTRY_LIST_SUCCESS,
  payload: data
});

export const transferCountryListFailure = (error) => ({
  type: TRANSFER_COUNTRY_LIST_FAILURE,
  payload: error
});

export const transferDestinationSearchRequest = () => ({
  type: TRANSFER_DESTINATION_SEARCH_REQUEST
});

export const transferDestinationSearchSuccess = (data) => ({
  type: TRANSFER_DESTINATION_SEARCH_SUCCESS,
  payload: data
});

export const transferDestinationSearchFailure = (error) => ({
  type: TRANSFER_DESTINATION_SEARCH_FAILURE,
  payload: error
});

export const transferStaticDataRequest = () => ({
  type: TRANSFER_STATIC_DATA_REQUEST
});

export const transferStaticDataSuccess = (data) => ({
  type: TRANSFER_STATIC_DATA_SUCCESS,
  payload: data
});

export const transferStaticDataFailure = (error) => ({
  type: TRANSFER_STATIC_DATA_FAILURE,
  payload: error
});

export const transferSearchRequest = () => ({
  type: TRANSFER_SEARCH_REQUEST
});

export const transferSearchSuccess = (data) => ({
  type: TRANSFER_SEARCH_SUCCESS,
  payload: data
});

export const transferSearchFailure = (error) => ({
  type: TRANSFER_SEARCH_FAILURE,
  payload: error
});

export const transferBookingRequest = () => ({
  type: TRANSFER_BOOKING_REQUEST
});

export const transferBookingSuccess = (data) => ({
  type: TRANSFER_BOOKING_SUCCESS,
  payload: data
});

export const transferBookingFailure = (error) => ({
  type: TRANSFER_BOOKING_FAILURE,
  payload: error
});

export const transferBookingDetailRequest = () => ({
  type: TRANSFER_BOOKING_DETAIL_REQUEST
});

export const transferBookingDetailSuccess = (data) => ({
  type: TRANSFER_BOOKING_DETAIL_SUCCESS,
  payload: data
});

export const transferBookingDetailFailure = (error) => ({
  type: TRANSFER_BOOKING_DETAIL_FAILURE,
  payload: error
});

export const clearTransferError = () => ({
  type: CLEAR_TRANSFER_ERROR
});

export const clearTransferData = () => ({
  type: CLEAR_TRANSFER_DATA
});

// Thunk Actions

// Authenticate Transfer API
export const authenticateTransferAPI = () => async (dispatch) => {
  try {
    console.log('🔐 [TRANSFER] Starting authentication process');
    console.log('🔐 [TRANSFER] Environment check:', {
      hasApiUrl: !!API_URL,
      apiUrl: API_URL,
      nodeEnv: process.env.NODE_ENV
    });
    
    dispatch(transferAuthRequest());
    
    console.log('📡 [TRANSFER] Making authentication request to:', `${API_URL}/transfer/authenticateTransferAPI`);
    console.log('📡 [TRANSFER] Request headers:', {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    
    const response = await axios.post(`${API_URL}/transfer/authenticateTransferAPI`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 30000 // 30 second timeout
    });
    
    console.log('📥 [TRANSFER] Authentication response received:', {
      status: response.status,
      statusText: response.statusText,
      hasData: !!response.data,
      hasTokenId: !!response.data?.TokenId,
      hasEndUserIp: !!response.data?.EndUserIp,
      hasAgencyId: !!response.data?.AgencyId,
      responseKeys: response.data ? Object.keys(response.data) : 'No data',
      fullResponse: response.data
    });
    
    if (response.data && response.data.TokenId) {
      console.log('✅ [TRANSFER] Authentication successful, dispatching success action');
      console.log('✅ [TRANSFER] Token details:', {
        TokenId: response.data.TokenId,
        AgencyId: response.data.AgencyId,
        EndUserIp: response.data.EndUserIp,
        message: response.data.message
      });
      dispatch(transferAuthSuccess(response.data));
      return response.data;
    } else {
      const errorMsg = 'Invalid response from transfer authentication API - missing TokenId';
      console.error('❌ [TRANSFER] Invalid authentication response:', {
        error: errorMsg,
        responseData: response.data,
        hasTokenId: !!response.data?.TokenId
      });
      throw new Error(errorMsg);
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Transfer authentication failed';
    console.error('❌ [TRANSFER] Authentication failed:', {
      message: errorMessage,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      originalError: error.message,
      stack: error.stack,
      isAxiosError: error.isAxiosError,
      code: error.code
    });
    dispatch(transferAuthFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Get Transfer Country List
export const getTransferCountryList = (countryListData = {}) => async (dispatch, getState) => {
  try {
    console.log('🌍 [TRANSFER] Starting country list retrieval');
    console.log('🌍 [TRANSFER] Input data:', countryListData);
    console.log('🌍 [TRANSFER] Current Redux state before request:', getState().transfer);
    
    dispatch(transferCountryListRequest());
    
    // Get token from state if available
    const { transfer } = getState();
    const tokenData = transfer.authData;
    
    console.log('🔑 [TRANSFER] Current auth state for country list:', {
      hasToken: !!tokenData?.TokenId,
      hasEndUserIp: !!tokenData?.EndUserIp,
      isAuthenticated: transfer.isAuthenticated,
      tokenData: tokenData
    });
    
    if (!tokenData || !tokenData.TokenId) {
      console.log('🔄 [TRANSFER] No token found for country list, authenticating first...');
      // If no token, authenticate first
      const authResult = await dispatch(authenticateTransferAPI());
      console.log('🔄 [TRANSFER] Authentication result:', authResult);
      
      const updatedState = getState();
      countryListData.TokenId = updatedState.transfer.authData.TokenId;
      countryListData.EndUserIp = updatedState.transfer.authData.EndUserIp;
      console.log('✅ [TRANSFER] Authentication completed for country list, token obtained:', {
        TokenId: countryListData.TokenId,
        EndUserIp: countryListData.EndUserIp
      });
    } else {
      countryListData.TokenId = tokenData.TokenId;
      countryListData.EndUserIp = tokenData.EndUserIp;
      console.log('✅ [TRANSFER] Using existing token for country list:', {
        TokenId: countryListData.TokenId,
        EndUserIp: countryListData.EndUserIp
      });
    }
    
    // Validate required parameters as per backend
    if (!countryListData.TokenId || !countryListData.EndUserIp) {
      const errorMsg = 'TokenId and EndUserIp are required for country list';
      console.error('❌ [TRANSFER] Validation failed:', errorMsg);
      throw new Error(errorMsg);
    }
    
    console.log('📡 [TRANSFER] Making country list request to:', `${API_URL}/transfer/getTransferCountryList`);
    console.log('📤 [TRANSFER] Country list request payload:', countryListData);
    console.log('📤 [TRANSFER] Request headers:', {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    
    const response = await axios.post(`${API_URL}/transfer/getTransferCountryList`, countryListData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 30000 // 30 second timeout
    });
    
    console.log('📥 [TRANSFER] Country list response received:', {
      status: response.status,
      statusText: response.statusText,
      hasData: !!response.data,
      dataKeys: response.data ? Object.keys(response.data) : 'No data',
      hasResponse: !!response.data?.Response,
      hasCountryList: !!response.data?.Response?.CountryList,
      countryCount: response.data?.Response?.CountryList?.length || 0
    });
    console.log('📥 [TRANSFER] Full response data:', response.data);
    
    if (response.data) {
      console.log('✅ [TRANSFER] Country list retrieval successful, dispatching success action');
      console.log('✅ [TRANSFER] Countries received:', {
        count: response.data?.Response?.CountryList?.length || 0,
        countries: response.data?.Response?.CountryList?.slice(0, 3) || 'No countries' // Show first 3 for debugging
      });
      dispatch(transferCountryListSuccess(response.data));
      return response.data;
    } else {
      const errorMsg = 'Invalid response from transfer country list API';
      console.error('❌ [TRANSFER] Invalid country list response:', errorMsg);
      throw new Error(errorMsg);
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Transfer country list retrieval failed';
    console.error('❌ [TRANSFER] Country list retrieval failed:', {
      message: errorMessage,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      originalError: error.message,
      stack: error.stack,
      isAxiosError: error.isAxiosError,
      code: error.code
    });
    dispatch(transferCountryListFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Get Destination Search
export const getDestinationSearch = (destinationData = {}) => async (dispatch, getState) => {
  try {
    console.log('🔍 [TRANSFER] Starting destination search');
    console.log('🔍 [TRANSFER] Input data:', destinationData);
    console.log('🔍 [TRANSFER] Current Redux state before request:', getState().transfer);
    
    dispatch(transferDestinationSearchRequest());
    
    // Get token from state if available
    const { transfer } = getState();
    const tokenData = transfer.authData;
    
    console.log('🔑 [TRANSFER] Current auth state for destination search:', {
      hasToken: !!tokenData?.TokenId,
      hasEndUserIp: !!tokenData?.EndUserIp,
      isAuthenticated: transfer.isAuthenticated,
      tokenData: tokenData
    });
    
    if (!tokenData || !tokenData.TokenId) {
      console.log('🔄 [TRANSFER] No token found for destination search, authenticating first...');
      // If no token, authenticate first
      const authResult = await dispatch(authenticateTransferAPI());
      console.log('🔄 [TRANSFER] Authentication result:', authResult);
      
      const updatedState = getState();
      destinationData.TokenId = updatedState.transfer.authData.TokenId;
      destinationData.EndUserIp = updatedState.transfer.authData.EndUserIp;
      console.log('✅ [TRANSFER] Authentication completed for destination search, token obtained:', {
        TokenId: destinationData.TokenId,
        EndUserIp: destinationData.EndUserIp
      });
    } else {
      destinationData.TokenId = tokenData.TokenId;
      destinationData.EndUserIp = tokenData.EndUserIp;
      console.log('✅ [TRANSFER] Using existing token for destination search:', {
        TokenId: destinationData.TokenId,
        EndUserIp: destinationData.EndUserIp
      });
    }
    
    // Validate required parameters as per backend
    if (!destinationData.TokenId || !destinationData.EndUserIp || !destinationData.CountryCode) {
      const errorMsg = 'TokenId, EndUserIp and CountryCode are required for destination search';
      console.error('❌ [TRANSFER] Validation failed:', {
        error: errorMsg,
        hasTokenId: !!destinationData.TokenId,
        hasEndUserIp: !!destinationData.EndUserIp,
        hasCountryCode: !!destinationData.CountryCode,
        destinationData: destinationData
      });
      throw new Error(errorMsg);
    }
    
    console.log('📡 [TRANSFER] Making destination search request to:', `${API_URL}/transfer/GetDestinationSearch`);
    console.log('📤 [TRANSFER] Request payload:', destinationData);
    console.log('📤 [TRANSFER] Request headers:', {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    
    const response = await axios.post(`${API_URL}/transfer/GetDestinationSearch`, destinationData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 30000 // 30 second timeout
    });
    
    console.log('📥 [TRANSFER] Destination search response received:', {
      status: response.status,
      statusText: response.statusText,
      hasData: !!response.data,
      success: response.data?.success,
      hasDestinations: !!response.data?.destinations,
      destinationCount: response.data?.destinations?.length || 0,
      dataKeys: response.data ? Object.keys(response.data) : 'No data',
      message: response.data?.message
    });
    console.log('📥 [TRANSFER] Full response data:', response.data);
    
    if (response.data && response.data.success) {
      console.log('✅ [TRANSFER] Destination search successful, dispatching success action');
      console.log('🏙️ [TRANSFER] Transformed destinations received:', {
        count: response.data.destinations?.length || 0,
        destinations: response.data.destinations?.slice(0, 3) || 'No destinations' // Show first 3 for debugging
      });
      dispatch(transferDestinationSearchSuccess(response.data));
      return response.data;
    } else if (response.data && !response.data.success) {
      const errorMsg = response.data.message || 'Destination search failed';
      console.error('❌ [TRANSFER] Backend returned error:', {
        error: errorMsg,
        responseData: response.data
      });
      throw new Error(errorMsg);
    } else {
      const errorMsg = 'Invalid response from transfer destination search API';
      console.error('❌ [TRANSFER] Invalid response:', {
        error: errorMsg,
        responseData: response.data
      });
      throw new Error(errorMsg);
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Transfer destination search failed';
    console.error('❌ [TRANSFER] Destination search failed:', {
      message: errorMessage,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      originalError: error.message,
      stack: error.stack,
      isAxiosError: error.isAxiosError,
      code: error.code
    });
    dispatch(transferDestinationSearchFailure(errorMessage));
    throw new Error(errorMessage);
  }
};


// Get Transfer Static Data
export const getTransferStaticData = (staticData = {}) => async (dispatch, getState) => {
  try {
    console.log('📊 [TRANSFER] Starting transfer static data retrieval');
    console.log('📊 [TRANSFER] Input data:', staticData);
    console.log('📊 [TRANSFER] Current Redux state before request:', getState().transfer);
    
    dispatch(transferStaticDataRequest());
    
    // Get token from state if available
    const { transfer } = getState();
    const tokenData = transfer.authData;
    
    console.log('🔑 [TRANSFER] Current auth state for static data:', {
      hasToken: !!tokenData?.TokenId,
      hasEndUserIp: !!tokenData?.EndUserIp,
      isAuthenticated: transfer.isAuthenticated,
      tokenData: tokenData
    });
    
    if (!tokenData || !tokenData.TokenId) {
      console.log('🔄 [TRANSFER] No token found for static data, authenticating first...');
      // If no token, authenticate first
      const authResult = await dispatch(authenticateTransferAPI());
      console.log('🔄 [TRANSFER] Authentication result:', authResult);
      
      const updatedState = getState();
      staticData.TokenId = updatedState.transfer.authData.TokenId;
      staticData.EndUserIp = updatedState.transfer.authData.EndUserIp;
      console.log('✅ [TRANSFER] Authentication completed for static data, token obtained:', {
        TokenId: staticData.TokenId,
        EndUserIp: staticData.EndUserIp
      });
    } else {
      staticData.TokenId = tokenData.TokenId;
      staticData.EndUserIp = tokenData.EndUserIp;
      console.log('✅ [TRANSFER] Using existing token for static data:', {
        TokenId: staticData.TokenId,
        EndUserIp: staticData.EndUserIp
      });
    }
    
    // Validate required parameters as per backend
    if (!staticData.TokenId || !staticData.EndUserIp || !staticData.CityId || !staticData.TransferCategoryType) {
      const errorMsg = 'TokenId, EndUserIp, CityId and TransferCategoryType are required for transfer static data';
      console.error('❌ [TRANSFER] Validation failed:', {
        error: errorMsg,
        hasTokenId: !!staticData.TokenId,
        hasEndUserIp: !!staticData.EndUserIp,
        hasCityId: !!staticData.CityId,
        hasTransferCategoryType: !!staticData.TransferCategoryType,
        staticData: staticData
      });
      throw new Error(errorMsg);
    }
    
    console.log('📡 [TRANSFER] Making static data request to:', `${API_URL}/transfer/GetTransferStaticData`);
    console.log('📤 [TRANSFER] Request payload:', staticData);
    console.log('📤 [TRANSFER] Request headers:', {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    
    const response = await axios.post(`${API_URL}/transfer/GetTransferStaticData`, staticData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 30000 // 30 second timeout
    });
    
    console.log('📥 [TRANSFER] Static data response received:', {
      status: response.status,
      statusText: response.statusText,
      hasData: !!response.data,
      dataKeys: response.data ? Object.keys(response.data) : 'No data',
      hasTransferSearchResult: !!response.data?.TransferSearchResult,
      hasTransferSearchResults: !!response.data?.TransferSearchResult?.TransferSearchResults,
      resultCount: response.data?.TransferSearchResult?.TransferSearchResults?.length || 0
    });
    console.log('📥 [TRANSFER] Full response data:', response.data);
    
    if (response.data) {
      console.log('✅ [TRANSFER] Transfer static data retrieval successful, dispatching success action');
      console.log('📊 [TRANSFER] Static data received:', {
        hasTransferSearchResult: !!response.data.TransferSearchResult,
        hasTransferSearchResults: !!response.data.TransferSearchResult?.TransferSearchResults,
        resultCount: response.data.TransferSearchResult?.TransferSearchResults?.length || 0,
        results: response.data.TransferSearchResult?.TransferSearchResults?.slice(0, 2) || 'No results' // Show first 2 for debugging
      });
      dispatch(transferStaticDataSuccess(response.data));
      return response.data;
    } else {
      const errorMsg = 'Invalid response from transfer static data API';
      console.error('❌ [TRANSFER] Invalid static data response:', {
        error: errorMsg,
        responseData: response.data
      });
      throw new Error(errorMsg);
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Transfer static data retrieval failed';
    console.error('❌ [TRANSFER] Static data retrieval failed:', {
      message: errorMessage,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      originalError: error.message,
      stack: error.stack,
      isAxiosError: error.isAxiosError,
      code: error.code
    });
    dispatch(transferStaticDataFailure(errorMessage));
    throw new Error(errorMessage);
  }
};


// Search Transfer
export const searchTransfer = (searchData = {}) => async (dispatch, getState) => {
  try {
    console.log('🔍 [TRANSFER] Starting transfer search');
    console.log('🔍 [TRANSFER] Input data:', searchData);
    console.log('🔍 [TRANSFER] Current Redux state before request:', getState().transfer);
    
    dispatch(transferSearchRequest());
    
    // Get token from state if available
    const { transfer } = getState();
    const tokenData = transfer.authData;
    
    console.log('🔑 [TRANSFER] Current auth state for search:', {
      hasToken: !!tokenData?.TokenId,
      hasEndUserIp: !!tokenData?.EndUserIp,
      isAuthenticated: transfer.isAuthenticated,
      tokenData: tokenData
    });
    
    if (!tokenData || !tokenData.TokenId) {
      console.log('🔄 [TRANSFER] No token found for search, authenticating first...');
      // If no token, authenticate first
      const authResult = await dispatch(authenticateTransferAPI());
      console.log('🔄 [TRANSFER] Authentication result:', authResult);
      
      const updatedState = getState();
      searchData.TokenId = updatedState.transfer.authData.TokenId;
      searchData.EndUserIp = updatedState.transfer.authData.EndUserIp;
      console.log('✅ [TRANSFER] Authentication completed for search, token obtained:', {
        TokenId: searchData.TokenId,
        EndUserIp: searchData.EndUserIp
      });
    } else {
      searchData.TokenId = tokenData.TokenId;
      searchData.EndUserIp = tokenData.EndUserIp;
      console.log('✅ [TRANSFER] Using existing token for search:', {
        TokenId: searchData.TokenId,
        EndUserIp: searchData.EndUserIp
      });
    }
    
    // Validate required fields as per backend
    const requiredFields = [
      'TokenId', 'EndUserIp', 'CountryCode', 'CityId', 'PickUpCode', 'PickUpPointCode',
      'DropOffCode', 'DropOffPointCode', 'TransferTime', 'TransferDate', 'AdultCount'
    ];
    
    const missingFields = requiredFields.filter(field => !searchData[field]);
    if (missingFields.length > 0) {
      const errorMsg = `Missing required fields: ${missingFields.join(', ')}`;
      console.error('❌ [TRANSFER] Validation failed:', {
        error: errorMsg,
        missingFields: missingFields,
        searchData: searchData
      });
      throw new Error(errorMsg);
    }
    
    // Add default values as per backend
    const data = {
      ...searchData,
      PreferredCurrency: searchData.PreferredCurrency || "INR",
      IsBaseCurrencyRequired: searchData.IsBaseCurrencyRequired !== undefined ? searchData.IsBaseCurrencyRequired : true
    };
    
    console.log('📡 [TRANSFER] Making search request to:', `${API_URL}/transfer/GetSearchTransfer`);
    console.log('📤 [TRANSFER] Request payload:', data);
    console.log('📤 [TRANSFER] Request headers:', {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    
    const response = await axios.post(`${API_URL}/transfer/GetSearchTransfer`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 30000 // 30 second timeout
    });
    
    console.log('📥 [TRANSFER] Search response received:', {
      status: response.status,
      statusText: response.statusText,
      hasData: !!response.data,
      dataKeys: response.data ? Object.keys(response.data) : 'No data',
      hasTransferSearchResult: !!response.data?.TransferSearchResult,
      hasTransferSearchResults: !!response.data?.TransferSearchResult?.TransferSearchResults,
      resultCount: response.data?.TransferSearchResult?.TransferSearchResults?.length || 0
    });
    console.log('📥 [TRANSFER] Full response data:', response.data);
    
    if (response.data) {
      console.log('✅ [TRANSFER] Transfer search successful, dispatching success action');
      console.log('🔍 [TRANSFER] Search results received:', {
        hasTransferSearchResult: !!response.data.TransferSearchResult,
        hasTransferSearchResults: !!response.data.TransferSearchResult?.TransferSearchResults,
        resultCount: response.data.TransferSearchResult?.TransferSearchResults?.length || 0,
        results: response.data.TransferSearchResult?.TransferSearchResults?.slice(0, 2) || 'No results' // Show first 2 for debugging
      });
      dispatch(transferSearchSuccess(response.data));
      return response.data;
    } else {
      const errorMsg = 'Invalid response from transfer search API';
      console.error('❌ [TRANSFER] Invalid search response:', {
        error: errorMsg,
        responseData: response.data
      });
      throw new Error(errorMsg);
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Transfer search failed';
    console.error('❌ [TRANSFER] Search failed:', {
      message: errorMessage,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      originalError: error.message,
      stack: error.stack,
      isAxiosError: error.isAxiosError,
      code: error.code
    });
    dispatch(transferSearchFailure(errorMessage));
    throw new Error(errorMessage);
  }
};


// Clear transfer data and errors
export const resetTransferState = () => (dispatch) => {
  console.log('🧹 [TRANSFER] Resetting transfer state');
  dispatch(clearTransferError());
  dispatch(clearTransferData());
};

// Utility function to get current transfer state
export const getTransferState = () => (dispatch, getState) => {
  const state = getState();
  console.log('📊 [TRANSFER] Current transfer state:', state.transfer);
  return state.transfer;
};

// Utility function to check if transfer is ready for operations
export const isTransferReady = () => (dispatch, getState) => {
  const { transfer } = getState();
  const isReady = transfer.isAuthenticated && transfer.authData?.TokenId;
  console.log('🔍 [TRANSFER] Transfer ready check:', {
    isReady,
    isAuthenticated: transfer.isAuthenticated,
    hasToken: !!transfer.authData?.TokenId,
    hasEndUserIp: !!transfer.authData?.EndUserIp
  });
  return isReady;
};

// Utility function to validate search parameters
export const validateSearchParameters = (searchData) => {
  const requiredFields = [
    'CountryCode', 'CityId', 'PickUpCode', 'PickUpPointCode',
    'DropOffCode', 'DropOffPointCode', 'TransferTime', 'TransferDate', 'AdultCount'
  ];
  
  const missingFields = requiredFields.filter(field => !searchData[field]);
  const isValid = missingFields.length === 0;
  
  console.log('✅ [TRANSFER] Search parameters validation:', {
    isValid,
    missingFields,
    searchData
  });
  
  return { isValid, missingFields };
};

// Book Transfer
export const bookTransfer = (bookingData = {}) => async (dispatch, getState) => {
  try {
    console.log('📝 [TRANSFER] Starting transfer booking');
    console.log('📝 [TRANSFER] Input data:', bookingData);
    console.log('📝 [TRANSFER] Current Redux state before request:', getState().transfer);
    
    dispatch(transferBookingRequest());
    
    // Get token from state if available
    const { transfer } = getState();
    const tokenData = transfer.authData;
    
    console.log('🔑 [TRANSFER] Current auth state for booking:', {
      hasToken: !!tokenData?.TokenId,
      hasEndUserIp: !!tokenData?.EndUserIp,
      isAuthenticated: transfer.isAuthenticated,
      tokenData: tokenData
    });
    
    if (!tokenData || !tokenData.TokenId) {
      console.log('🔄 [TRANSFER] No token found for booking, authenticating first...');
      // If no token, authenticate first
      const authResult = await dispatch(authenticateTransferAPI());
      console.log('🔄 [TRANSFER] Authentication result:', authResult);
      
      const updatedState = getState();
      bookingData.TokenId = updatedState.transfer.authData.TokenId;
      bookingData.EndUserIp = updatedState.transfer.authData.EndUserIp;
      console.log('✅ [TRANSFER] Authentication completed for booking, token obtained:', {
        TokenId: bookingData.TokenId,
        EndUserIp: bookingData.EndUserIp
      });
    } else {
      bookingData.TokenId = tokenData.TokenId;
      bookingData.EndUserIp = tokenData.EndUserIp;
      console.log('✅ [TRANSFER] Using existing token for booking:', {
        TokenId: bookingData.TokenId,
        EndUserIp: bookingData.EndUserIp
      });
    }
    
    // Validate required fields as per backend
    const requiredFields = [
      'TokenId', 'EndUserIp', 'TransferCode', 'VehicleIndex'
    ];
    
    const missingFields = requiredFields.filter(field => !bookingData[field]);
    if (missingFields.length > 0) {
      const errorMsg = `Missing required fields: ${missingFields.join(', ')}`;
      console.error('❌ [TRANSFER] Validation failed:', {
        error: errorMsg,
        missingFields: missingFields,
        bookingData: bookingData
      });
      throw new Error(errorMsg);
    }
    
    console.log('📡 [TRANSFER] Making booking request to:', `${API_URL}/transfer/GetBookingTransfer`);
    console.log('📤 [TRANSFER] Request payload:', bookingData);
    console.log('📤 [TRANSFER] Request headers:', {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    
    const response = await axios.post(`${API_URL}/transfer/GetBookingTransfer`, bookingData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 60000 // 60 second timeout for booking
    });
    
    console.log('📥 [TRANSFER] Booking response received:', {
      status: response.status,
      statusText: response.statusText,
      hasData: !!response.data,
      dataKeys: response.data ? Object.keys(response.data) : 'No data',
      hasBookingId: !!response.data?.BookingId,
      hasBookingStatus: !!response.data?.BookingStatus,
      success: response.data?.success
    });
    console.log('📥 [TRANSFER] Full response data:', response.data);
    
    if (response.data) {
      console.log('✅ [TRANSFER] Transfer booking successful, dispatching success action');
      console.log('📝 [TRANSFER] Booking details received:', {
        hasBookingId: !!response.data.BookingId,
        hasBookingStatus: !!response.data.BookingStatus,
        hasBookingDetails: !!response.data.BookingDetails,
        bookingId: response.data.BookingId,
        bookingStatus: response.data.BookingStatus,
        success: response.data.success
      });
      dispatch(transferBookingSuccess(response.data));
      return response.data;
    } else {
      const errorMsg = 'Invalid response from transfer booking API';
      console.error('❌ [TRANSFER] Invalid booking response:', {
        error: errorMsg,
        responseData: response.data
      });
      throw new Error(errorMsg);
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Transfer booking failed';
    console.error('❌ [TRANSFER] Booking failed:', {
      message: errorMessage,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      originalError: error.message,
      stack: error.stack,
      isAxiosError: error.isAxiosError,
      code: error.code
    });
    dispatch(transferBookingFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Get Transfer Booking Detail
export const getTransferBookingDetail = (bookingDetailData = {}) => async (dispatch, getState) => {
  try {
    console.log('📋 [TRANSFER] Starting transfer booking detail retrieval');
    console.log('📋 [TRANSFER] Input data:', bookingDetailData);
    console.log('📋 [TRANSFER] Current Redux state before request:', getState().transfer);
    
    dispatch(transferBookingDetailRequest());
    
    // Get token from state if available
    const { transfer } = getState();
    const tokenData = transfer.authData;
    
    console.log('🔑 [TRANSFER] Current auth state for booking detail:', {
      hasToken: !!tokenData?.TokenId,
      hasEndUserIp: !!tokenData?.EndUserIp,
      isAuthenticated: transfer.isAuthenticated,
      tokenData: tokenData
    });
    
    if (!tokenData || !tokenData.TokenId) {
      console.log('🔄 [TRANSFER] No token found for booking detail, authenticating first...');
      // If no token, authenticate first
      const authResult = await dispatch(authenticateTransferAPI());
      console.log('🔄 [TRANSFER] Authentication result:', authResult);
      
      const updatedState = getState();
      bookingDetailData.TokenId = updatedState.transfer.authData.TokenId;
      bookingDetailData.EndUserIp = updatedState.transfer.authData.EndUserIp;
      console.log('✅ [TRANSFER] Authentication completed for booking detail, token obtained:', {
        TokenId: bookingDetailData.TokenId,
        EndUserIp: bookingDetailData.EndUserIp
      });
    } else {
      bookingDetailData.TokenId = tokenData.TokenId;
      bookingDetailData.EndUserIp = tokenData.EndUserIp;
      console.log('✅ [TRANSFER] Using existing token for booking detail:', {
        TokenId: bookingDetailData.TokenId,
        EndUserIp: bookingDetailData.EndUserIp
      });
    }
    
    // Validate required fields as per backend
    const requiredFields = ['TokenId', 'EndUserIp', 'BookingId', 'AgencyId'];
    const missingFields = requiredFields.filter(field => !bookingDetailData[field]);
    
    if (missingFields.length > 0) {
      const errorMsg = `Missing required fields: ${missingFields.join(', ')}`;
      console.error('❌ [TRANSFER] Validation failed:', {
        error: errorMsg,
        missingFields: missingFields,
        bookingDetailData: bookingDetailData
      });
      throw new Error(errorMsg);
    }
    
    console.log('📡 [TRANSFER] Making booking detail request to:', `${API_URL}/transfer/GetBookingDetail`);
    console.log('📤 [TRANSFER] Request payload:', bookingDetailData);
    console.log('📤 [TRANSFER] Request headers:', {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    
    const response = await axios.post(`${API_URL}/transfer/GetBookingDetail`, bookingDetailData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 30000 // 30 second timeout
    });
    
    console.log('📥 [TRANSFER] Booking detail response received:', {
      status: response.status,
      statusText: response.statusText,
      hasData: !!response.data,
      dataKeys: response.data ? Object.keys(response.data) : 'No data',
      hasBookingDetails: !!response.data?.BookingDetails,
      hasBookingId: !!response.data?.BookingId,
      success: response.data?.success
    });
    console.log('📥 [TRANSFER] Full response data:', response.data);
    
    if (response.data) {
      console.log('✅ [TRANSFER] Transfer booking detail retrieval successful, dispatching success action');
      console.log('📋 [TRANSFER] Booking detail received:', {
        hasBookingDetails: !!response.data.BookingDetails,
        hasBookingId: !!response.data.BookingId,
        hasBookingStatus: !!response.data.BookingStatus,
        bookingId: response.data.BookingId,
        bookingStatus: response.data.BookingStatus,
        success: response.data.success
      });
      dispatch(transferBookingDetailSuccess(response.data));
      return response.data;
    } else {
      const errorMsg = 'Invalid response from transfer booking detail API';
      console.error('❌ [TRANSFER] Invalid booking detail response:', {
        error: errorMsg,
        responseData: response.data
      });
      throw new Error(errorMsg);
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Transfer booking detail retrieval failed';
    console.error('❌ [TRANSFER] Booking detail retrieval failed:', {
      message: errorMessage,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      originalError: error.message,
      stack: error.stack,
      isAxiosError: error.isAxiosError,
      code: error.code
    });
    dispatch(transferBookingDetailFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Utility function to get debug information
export const getTransferDebugInfo = () => (dispatch, getState) => {
  const { transfer } = getState();
  const debugInfo = {
    isAuthenticated: transfer.isAuthenticated,
    hasToken: !!transfer.authData?.TokenId,
    hasEndUserIp: !!transfer.authData?.EndUserIp,
    lastAction: transfer.lastAction,
    loadingStates: {
      auth: transfer.authLoading,
      countryList: transfer.countryListLoading,
      destinationSearch: transfer.destinationSearchLoading,
      staticData: transfer.staticDataLoading,
      search: transfer.searchLoading,
      booking: transfer.bookingLoading,
      bookingDetail: transfer.bookingDetailLoading
    },
    errorStates: {
      auth: !!transfer.authError,
      countryList: !!transfer.countryListError,
      destinationSearch: !!transfer.destinationSearchError,
      staticData: !!transfer.staticDataError,
      search: !!transfer.searchError,
      booking: !!transfer.bookingError,
      bookingDetail: !!transfer.bookingDetailError
    },
    dataStates: {
      hasAuthData: !!transfer.authData,
      hasCountryListData: !!transfer.countryListData,
      hasDestinationSearchData: !!transfer.destinationSearchData,
      hasStaticData: !!transfer.staticDataData,
      hasSearchData: !!transfer.searchData,
      hasBookingData: !!transfer.bookingData,
      hasBookingDetailData: !!transfer.bookingDetailData
    }
  };
  
  console.log('🐛 [TRANSFER] Debug information:', debugInfo);
  return debugInfo;
};
