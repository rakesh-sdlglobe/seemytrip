import axios from 'axios';

// Action Types
export const INSURANCE_AUTH_REQUEST = 'INSURANCE_AUTH_REQUEST';
export const INSURANCE_AUTH_SUCCESS = 'INSURANCE_AUTH_SUCCESS';
export const INSURANCE_AUTH_FAILURE = 'INSURANCE_AUTH_FAILURE';

export const INSURANCE_SEARCH_REQUEST = 'INSURANCE_SEARCH_REQUEST';
export const INSURANCE_SEARCH_SUCCESS = 'INSURANCE_SEARCH_SUCCESS';
export const INSURANCE_SEARCH_FAILURE = 'INSURANCE_SEARCH_FAILURE';

export const INSURANCE_BOOK_REQUEST = 'INSURANCE_BOOK_REQUEST';
export const INSURANCE_BOOK_SUCCESS = 'INSURANCE_BOOK_SUCCESS';
export const INSURANCE_BOOK_FAILURE = 'INSURANCE_BOOK_FAILURE';

export const INSURANCE_POLICY_REQUEST = 'INSURANCE_POLICY_REQUEST';
export const INSURANCE_POLICY_SUCCESS = 'INSURANCE_POLICY_SUCCESS';
export const INSURANCE_POLICY_FAILURE = 'INSURANCE_POLICY_FAILURE';

export const INSURANCE_BOOKING_DETAILS_REQUEST = 'INSURANCE_BOOKING_DETAILS_REQUEST';
export const INSURANCE_BOOKING_DETAILS_SUCCESS = 'INSURANCE_BOOKING_DETAILS_SUCCESS';
export const INSURANCE_BOOKING_DETAILS_FAILURE = 'INSURANCE_BOOKING_DETAILS_FAILURE';

export const INSURANCE_CANCEL_REQUEST = 'INSURANCE_CANCEL_REQUEST';
export const INSURANCE_CANCEL_SUCCESS = 'INSURANCE_CANCEL_SUCCESS';
export const INSURANCE_CANCEL_FAILURE = 'INSURANCE_CANCEL_FAILURE';

export const CLEAR_INSURANCE_ERROR = 'CLEAR_INSURANCE_ERROR';
export const CLEAR_INSURANCE_DATA = 'CLEAR_INSURANCE_DATA';

// API URL
export const API_URL = process.env.REACT_APP_API_URL || 'https://tripadmin.seemytrip.com/api';

// Action Creators
export const insuranceAuthRequest = () => ({
  type: INSURANCE_AUTH_REQUEST
});

export const insuranceAuthSuccess = (data) => ({
  type: INSURANCE_AUTH_SUCCESS,
  payload: data
});

export const insuranceAuthFailure = (error) => ({
  type: INSURANCE_AUTH_FAILURE,
  payload: error
});

export const insuranceSearchRequest = () => ({
  type: INSURANCE_SEARCH_REQUEST
});

export const insuranceSearchSuccess = (data) => ({
  type: INSURANCE_SEARCH_SUCCESS,
  payload: data
});

export const insuranceSearchFailure = (error) => ({
  type: INSURANCE_SEARCH_FAILURE,
  payload: error
});

export const insuranceBookRequest = () => ({
  type: INSURANCE_BOOK_REQUEST
});

export const insuranceBookSuccess = (data) => ({
  type: INSURANCE_BOOK_SUCCESS,
  payload: data
});

export const insuranceBookFailure = (error) => ({
  type: INSURANCE_BOOK_FAILURE,
  payload: error
});

export const insurancePolicyRequest = () => ({
  type: INSURANCE_POLICY_REQUEST
});

export const insurancePolicySuccess = (data) => ({
  type: INSURANCE_POLICY_SUCCESS,
  payload: data
});

export const insurancePolicyFailure = (error) => ({
  type: INSURANCE_POLICY_FAILURE,
  payload: error
});

export const insuranceBookingDetailsRequest = () => ({
  type: INSURANCE_BOOKING_DETAILS_REQUEST
});

export const insuranceBookingDetailsSuccess = (data) => ({
  type: INSURANCE_BOOKING_DETAILS_SUCCESS,
  payload: data
});

export const insuranceBookingDetailsFailure = (error) => ({
  type: INSURANCE_BOOKING_DETAILS_FAILURE,
  payload: error
});

export const insuranceCancelRequest = () => ({
  type: INSURANCE_CANCEL_REQUEST
});

export const insuranceCancelSuccess = (data) => ({
  type: INSURANCE_CANCEL_SUCCESS,
  payload: data
});

export const insuranceCancelFailure = (error) => ({
  type: INSURANCE_CANCEL_FAILURE,
  payload: error
});

export const clearInsuranceError = () => ({
  type: CLEAR_INSURANCE_ERROR
});

export const clearInsuranceData = () => ({
  type: CLEAR_INSURANCE_DATA
});

// Thunk Actions

// Authenticate Insurance API
export const authenticateInsuranceAPI = () => async (dispatch) => {
  try {
    dispatch(insuranceAuthRequest());
    
    const response = await axios.post(`${API_URL}/insurance/authenticateInsuranceAPI`);
    
    if (response.data && response.data.TokenId) {
      dispatch(insuranceAuthSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from insurance authentication API');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Insurance authentication failed';
    dispatch(insuranceAuthFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Get Insurance List
export const getInsuranceList = (searchData) => async (dispatch, getState) => {
  try {
    dispatch(insuranceSearchRequest());
    
    // Get token from state if available
    const { insurance } = getState();
    const tokenData = insurance.authData;
    
    if (!tokenData || !tokenData.TokenId) {
      // If no token, authenticate first
      await dispatch(authenticateInsuranceAPI());
      const updatedState = getState();
      searchData.TokenId = updatedState.insurance.authData.TokenId;
      searchData.EndUserIp = updatedState.insurance.authData.EndUserIp;
    } else {
      searchData.TokenId = tokenData.TokenId;
      searchData.EndUserIp = tokenData.EndUserIp;
    }
    
    const response = await axios.post(`${API_URL}/insurance/GetInsuranceList`, searchData);
    
    if (response.data) {
      dispatch(insuranceSearchSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from insurance search API');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Insurance search failed';
    dispatch(insuranceSearchFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Book Insurance
export const bookInsurance = (bookingData) => async (dispatch, getState) => {
  try {
    dispatch(insuranceBookRequest());
    
    // Get token from state if available
    const { insurance } = getState();
    const tokenData = insurance.authData;
    
    if (!tokenData || !tokenData.TokenId) {
      // If no token, authenticate first
      await dispatch(authenticateInsuranceAPI());
      const updatedState = getState();
      bookingData.TokenId = updatedState.insurance.authData.TokenId;
      bookingData.EndUserIp = updatedState.insurance.authData.EndUserIp;
    } else {
      bookingData.TokenId = tokenData.TokenId;
      bookingData.EndUserIp = tokenData.EndUserIp;
    }
    
    const response = await axios.post(`${API_URL}/insurance/GetInsuranceBook`, bookingData);
    
    if (response.data) {
      dispatch(insuranceBookSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from insurance booking API');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Insurance booking failed';
    dispatch(insuranceBookFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Get Insurance Policy
export const getInsurancePolicy = (policyData) => async (dispatch, getState) => {
  try {
    dispatch(insurancePolicyRequest());
    
    // Get token from state if available
    const { insurance } = getState();
    const tokenData = insurance.authData;
    
    if (!tokenData || !tokenData.TokenId) {
      // If no token, authenticate first
      await dispatch(authenticateInsuranceAPI());
      const updatedState = getState();
      policyData.TokenId = updatedState.insurance.authData.TokenId;
      policyData.EndUserIp = updatedState.insurance.authData.EndUserIp;
    } else {
      policyData.TokenId = tokenData.TokenId;
      policyData.EndUserIp = tokenData.EndUserIp;
    }
    
    const response = await axios.post(`${API_URL}/insurance/GetInsurancePolicy`, policyData);
    
    if (response.data) {
      dispatch(insurancePolicySuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from insurance policy API');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Insurance policy retrieval failed';
    dispatch(insurancePolicyFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Get Insurance Booking Details
export const getInsuranceBookingDetails = (bookingDetailsData) => async (dispatch, getState) => {
  try {
    dispatch(insuranceBookingDetailsRequest());
    
    // Get token from state if available
    const { insurance } = getState();
    const tokenData = insurance.authData;
    
    if (!tokenData || !tokenData.TokenId) {
      // If no token, authenticate first
      await dispatch(authenticateInsuranceAPI());
      const updatedState = getState();
      bookingDetailsData.TokenId = updatedState.insurance.authData.TokenId;
      bookingDetailsData.EndUserIp = updatedState.insurance.authData.EndUserIp;
    } else {
      bookingDetailsData.TokenId = tokenData.TokenId;
      bookingDetailsData.EndUserIp = tokenData.EndUserIp;
    }
    
    const response = await axios.post(`${API_URL}/insurance/GetInsuranceBookingDetails`, bookingDetailsData);
    
    if (response.data) {
      dispatch(insuranceBookingDetailsSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from insurance booking details API');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Insurance booking details retrieval failed';
    dispatch(insuranceBookingDetailsFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Cancel Insurance Booking
export const cancelInsuranceBooking = (cancelData) => async (dispatch, getState) => {
  try {
    dispatch(insuranceCancelRequest());
    
    // Get token from state if available
    const { insurance } = getState();
    const tokenData = insurance.authData;
    
    if (!tokenData || !tokenData.TokenId) {
      // If no token, authenticate first
      await dispatch(authenticateInsuranceAPI());
      const updatedState = getState();
      cancelData.TokenId = updatedState.insurance.authData.TokenId;
      cancelData.EndUserIp = updatedState.insurance.authData.EndUserIp;
    } else {
      cancelData.TokenId = tokenData.TokenId;
      cancelData.EndUserIp = tokenData.EndUserIp;
    }
    
    const response = await axios.post(`${API_URL}/insurance/CancelInsuranceBooking`, cancelData);
    
    if (response.data) {
      dispatch(insuranceCancelSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from insurance cancellation API');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Insurance cancellation failed';
    dispatch(insuranceCancelFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Clear insurance data and errors
export const resetInsuranceState = () => (dispatch) => {
  dispatch(clearInsuranceError());
  dispatch(clearInsuranceData());
};

