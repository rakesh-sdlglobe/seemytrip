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
    dispatch(transferAuthRequest());
    
    console.log('📡 [TRANSFER] Making authentication request to:', `${API_URL}/transfer/authenticateTransferAPI`);
    const response = await axios.post(`${API_URL}/transfer/authenticateTransferAPI`);
    
    console.log('📥 [TRANSFER] Authentication response received:', {
      status: response.status,
      hasData: !!response.data,
      hasTokenId: !!response.data?.TokenId,
      hasEndUserIp: !!response.data?.EndUserIp
    });
    
    if (response.data && response.data.TokenId) {
      console.log('✅ [TRANSFER] Authentication successful, dispatching success action');
      dispatch(transferAuthSuccess(response.data));
      return response.data;
    } else {
      const errorMsg = 'Invalid response from transfer authentication API';
      console.error('❌ [TRANSFER] Invalid authentication response:', errorMsg);
      throw new Error(errorMsg);
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Transfer authentication failed';
    console.error('❌ [TRANSFER] Authentication failed:', {
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data,
      originalError: error.message
    });
    dispatch(transferAuthFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Get Transfer Country List
export const getTransferCountryList = (countryListData) => async (dispatch, getState) => {
  try {
    console.log('🌍 [TRANSFER] Starting country list retrieval with data:', countryListData);
    dispatch(transferCountryListRequest());
    
    // Get token from state if available
    const { transfer } = getState();
    const tokenData = transfer.authData;
    
    console.log('🔑 [TRANSFER] Current auth state for country list:', {
      hasToken: !!tokenData?.TokenId,
      hasEndUserIp: !!tokenData?.EndUserIp,
      isAuthenticated: transfer.isAuthenticated
    });
    
    if (!tokenData || !tokenData.TokenId) {
      console.log('🔄 [TRANSFER] No token found for country list, authenticating first...');
      // If no token, authenticate first
      await dispatch(authenticateTransferAPI());
      const updatedState = getState();
      countryListData.TokenId = updatedState.transfer.authData.TokenId;
      countryListData.EndUserIp = updatedState.transfer.authData.EndUserIp;
      console.log('✅ [TRANSFER] Authentication completed for country list, token obtained');
    } else {
      countryListData.TokenId = tokenData.TokenId;
      countryListData.EndUserIp = tokenData.EndUserIp;
      console.log('✅ [TRANSFER] Using existing token for country list');
    }
    
    console.log('📡 [TRANSFER] Making country list request to:', `${API_URL}/transfer/getTransferCountryList`);
    console.log('📤 [TRANSFER] Country list request payload:', countryListData);
    
    const response = await axios.post(`${API_URL}/transfer/getTransferCountryList`, countryListData);
    
    console.log('📥 [TRANSFER] Country list response received:', {
      status: response.status,
      hasData: !!response.data,
      dataKeys: response.data ? Object.keys(response.data) : 'No data'
    });
    
    if (response.data) {
      console.log('✅ [TRANSFER] Country list retrieval successful, dispatching success action');
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
      data: error.response?.data,
      originalError: error.message
    });
    dispatch(transferCountryListFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Get Destination Search
export const getDestinationSearch = (destinationData) => async (dispatch, getState) => {
  try {
    console.log('🔍 [TRANSFER] Starting destination search with data:', destinationData);
    console.log('🔍 [TRANSFER] Yes, calling the transfer API');
    dispatch(transferDestinationSearchRequest());
    
    // Get token from state if available
    const { transfer } = getState();
    const tokenData = transfer.authData;
    
    console.log('🔑 [TRANSFER] Current auth state:', {
      hasToken: !!tokenData?.TokenId,
      hasEndUserIp: !!tokenData?.EndUserIp,
      isAuthenticated: transfer.isAuthenticated
    });
    
    if (!tokenData || !tokenData.TokenId) {
      console.log('🔄 [TRANSFER] No token found, authenticating first...');
      // If no token, authenticate first
      await dispatch(authenticateTransferAPI());
      const updatedState = getState();
      destinationData.TokenId = updatedState.transfer.authData.TokenId;
      destinationData.EndUserIp = updatedState.transfer.authData.EndUserIp;
      console.log('✅ [TRANSFER] Authentication completed, token obtained');
    } else {
      destinationData.TokenId = tokenData.TokenId;
      destinationData.EndUserIp = tokenData.EndUserIp;
      console.log('✅ [TRANSFER] Using existing token');
    }
    
    // Validate required parameters
    if (!destinationData.CountryCode) {
      const errorMsg = 'CountryCode is required for destination search';
      console.error('❌ [TRANSFER] Validation failed:', errorMsg);
      throw new Error(errorMsg);
    }
    
    console.log('📡 [TRANSFER] Making API request to:', `${API_URL}/transfer/GetDestinationSearch`);
    console.log('📤 [TRANSFER] Request payload:', destinationData);
    console.log('📤 [TRANSFER] req.body', destinationData);
    
    const response = await axios.post(`${API_URL}/transfer/GetDestinationSearch`, destinationData);
    
    console.log('📥 [TRANSFER] API response received:', {
      status: response.status,
      hasData: !!response.data,
      success: response.data?.success,
      hasDestinations: !!response.data?.destinations,
      destinationCount: response.data?.destinations?.length || 0,
      dataKeys: response.data ? Object.keys(response.data) : 'No data'
    });
    console.log('📥 [TRANSFER] apiResponse', response.data);
    
    if (response.data && response.data.success) {
      console.log('✅ [TRANSFER] Destination search successful, dispatching success action');
      console.log('🏙️ [TRANSFER] Transformed destinations received:', response.data.destinations);
      dispatch(transferDestinationSearchSuccess(response.data));
      return response.data;
    } else if (response.data && !response.data.success) {
      const errorMsg = response.data.message || 'Destination search failed';
      console.error('❌ [TRANSFER] Backend returned error:', errorMsg);
      throw new Error(errorMsg);
    } else {
      const errorMsg = 'Invalid response from transfer destination search API';
      console.error('❌ [TRANSFER] Invalid response:', errorMsg);
      throw new Error(errorMsg);
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Transfer destination search failed';
    console.error('❌ [TRANSFER] Destination search failed:', {
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data,
      originalError: error.message
    });
    console.error('❌ [TRANSFER] Error details:', error.message);
    dispatch(transferDestinationSearchFailure(errorMessage));
    throw new Error(errorMessage);
  }
};


// Get Transfer Static Data
export const getTransferStaticData = (staticData) => async (dispatch, getState) => {
  try {
    console.log('📊 [TRANSFER] Starting transfer static data retrieval with data:', staticData);
    console.log('📊 [TRANSFER] Yes, calling the transfer API');
    dispatch(transferStaticDataRequest());
    
    // Get token from state if available
    const { transfer } = getState();
    const tokenData = transfer.authData;
    
    console.log('🔑 [TRANSFER] Current auth state for static data:', {
      hasToken: !!tokenData?.TokenId,
      hasEndUserIp: !!tokenData?.EndUserIp,
      isAuthenticated: transfer.isAuthenticated
    });
    
    if (!tokenData || !tokenData.TokenId) {
      console.log('🔄 [TRANSFER] No token found for static data, authenticating first...');
      // If no token, authenticate first
      await dispatch(authenticateTransferAPI());
      const updatedState = getState();
      staticData.TokenId = updatedState.transfer.authData.TokenId;
      staticData.EndUserIp = updatedState.transfer.authData.EndUserIp;
      console.log('✅ [TRANSFER] Authentication completed for static data, token obtained');
    } else {
      staticData.TokenId = tokenData.TokenId;
      staticData.EndUserIp = tokenData.EndUserIp;
      console.log('✅ [TRANSFER] Using existing token for static data');
    }
    
    // Validate required parameters
    if (!staticData.CityId || !staticData.TransferCategoryType) {
      const errorMsg = 'CityId and TransferCategoryType are required for transfer static data';
      console.error('❌ [TRANSFER] Validation failed:', errorMsg);
      throw new Error(errorMsg);
    }
    
    console.log('📡 [TRANSFER] Making static data request to:', `${API_URL}/transfer/GetTransferStaticData`);
    console.log('📤 [TRANSFER] Request payload:', staticData);
    console.log('📤 [TRANSFER] req.body', staticData);
    
    const response = await axios.post(`${API_URL}/transfer/GetTransferStaticData`, staticData);
    
    console.log('📥 [TRANSFER] Static data response received:', {
      status: response.status,
      hasData: !!response.data,
      dataKeys: response.data ? Object.keys(response.data) : 'No data'
    });
    console.log('📥 [TRANSFER] apiResponse', response.data);
    
    if (response.data) {
      console.log('✅ [TRANSFER] Transfer static data retrieval successful, dispatching success action');
      dispatch(transferStaticDataSuccess(response.data));
      return response.data;
    } else {
      const errorMsg = 'Invalid response from transfer static data API';
      console.error('❌ [TRANSFER] Invalid static data response:', errorMsg);
      throw new Error(errorMsg);
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Transfer static data retrieval failed';
    console.error('❌ [TRANSFER] Static data retrieval failed:', {
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data,
      originalError: error.message
    });
    console.error('❌ [TRANSFER] Error details:', error.message);
    dispatch(transferStaticDataFailure(errorMessage));
    throw new Error(errorMessage);
  }
};


// Search Transfer
export const searchTransfer = (searchData) => async (dispatch, getState) => {
  try {
    console.log('🔍 [TRANSFER] Starting transfer search with data:', searchData);
    console.log('🔍 [TRANSFER] Yes, calling the transfer API');
    dispatch(transferSearchRequest());
    
    // Get token from state if available
    const { transfer } = getState();
    const tokenData = transfer.authData;
    
    console.log('🔑 [TRANSFER] Current auth state for search:', {
      hasToken: !!tokenData?.TokenId,
      hasEndUserIp: !!tokenData?.EndUserIp,
      isAuthenticated: transfer.isAuthenticated
    });
    
    if (!tokenData || !tokenData.TokenId) {
      console.log('🔄 [TRANSFER] No token found for search, authenticating first...');
      // If no token, authenticate first
      await dispatch(authenticateTransferAPI());
      const updatedState = getState();
      searchData.TokenId = updatedState.transfer.authData.TokenId;
      searchData.EndUserIp = updatedState.transfer.authData.EndUserIp;
      console.log('✅ [TRANSFER] Authentication completed for search, token obtained');
    } else {
      searchData.TokenId = tokenData.TokenId;
      searchData.EndUserIp = tokenData.EndUserIp;
      console.log('✅ [TRANSFER] Using existing token for search');
    }
    
    // Validate required fields as per backend
    const requiredFields = [
      'CountryCode', 'CityId', 'PickUpCode', 'PickUpPointCode',
      'DropOffCode', 'DropOffPointCode', 'TransferTime', 'TransferDate', 'AdultCount'
    ];
    
    const missingFields = requiredFields.filter(field => !searchData[field]);
    if (missingFields.length > 0) {
      const errorMsg = `Missing required fields: ${missingFields.join(', ')}`;
      console.error('❌ [TRANSFER] Validation failed:', errorMsg);
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
    console.log('📤 [TRANSFER] req.body', data);
    
    const response = await axios.post(`${API_URL}/transfer/GetSearchTransfer`, data);
    
    console.log('📥 [TRANSFER] Search response received:', {
      status: response.status,
      hasData: !!response.data,
      dataKeys: response.data ? Object.keys(response.data) : 'No data'
    });
    console.log('📥 [TRANSFER] apiResponse', response.data);
    
    if (response.data) {
      console.log('✅ [TRANSFER] Transfer search successful, dispatching success action');
      dispatch(transferSearchSuccess(response.data));
      return response.data;
    } else {
      const errorMsg = 'Invalid response from transfer search API';
      console.error('❌ [TRANSFER] Invalid search response:', errorMsg);
      throw new Error(errorMsg);
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Transfer search failed';
    console.error('❌ [TRANSFER] Search failed:', {
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data,
      originalError: error.message
    });
    console.error('❌ [TRANSFER] Error details:', error.message);
    dispatch(transferSearchFailure(errorMessage));
    throw new Error(errorMessage);
  }
};


// Clear transfer data and errors
export const resetTransferState = () => (dispatch) => {
  dispatch(clearTransferError());
  dispatch(clearTransferData());
};
