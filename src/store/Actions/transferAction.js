import axios from 'axios';

// Action Types
export const TRANSFER_AUTH_REQUEST = 'TRANSFER_AUTH_REQUEST';
export const TRANSFER_AUTH_SUCCESS = 'TRANSFER_AUTH_SUCCESS';
export const TRANSFER_AUTH_FAILURE = 'TRANSFER_AUTH_FAILURE';

export const TRANSFER_COUNTRY_LIST_REQUEST = 'TRANSFER_COUNTRY_LIST_REQUEST';
export const TRANSFER_COUNTRY_LIST_SUCCESS = 'TRANSFER_COUNTRY_LIST_SUCCESS';
export const TRANSFER_COUNTRY_LIST_FAILURE = 'TRANSFER_COUNTRY_LIST_FAILURE';


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
    dispatch(transferAuthRequest());
    
    const response = await axios.post(`${API_URL}/transfer/authenticateTransferAPI`);
    
    if (response.data && response.data.TokenId) {
      dispatch(transferAuthSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from transfer authentication API');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Transfer authentication failed';
    dispatch(transferAuthFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Get Transfer Country List
export const getTransferCountryList = (countryListData) => async (dispatch, getState) => {
  try {
    dispatch(transferCountryListRequest());
    
    // Get token from state if available
    const { transfer } = getState();
    const tokenData = transfer.authData;
    
    if (!tokenData || !tokenData.TokenId) {
      // If no token, authenticate first
      await dispatch(authenticateTransferAPI());
      const updatedState = getState();
      countryListData.TokenId = updatedState.transfer.authData.TokenId;
      countryListData.EndUserIp = updatedState.transfer.authData.EndUserIp;
    } else {
      countryListData.TokenId = tokenData.TokenId;
      countryListData.EndUserIp = tokenData.EndUserIp;
    }
    
    const response = await axios.post(`${API_URL}/transfer/getTransferCountryList`, countryListData);
    
    if (response.data) {
      dispatch(transferCountryListSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from transfer country list API');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Transfer country list retrieval failed';
    dispatch(transferCountryListFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Clear transfer data and errors
export const resetTransferState = () => (dispatch) => {
  dispatch(clearTransferError());
  dispatch(clearTransferData());
};
