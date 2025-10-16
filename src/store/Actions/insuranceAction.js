import axios from 'axios';
import { getEncryptedItem } from '../../utils/encryption';
import { API_URL } from "./authActions";

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

// Database action types
export const CREATE_INSURANCE_BOOKING_REQUEST = 'CREATE_INSURANCE_BOOKING_REQUEST';
export const CREATE_INSURANCE_BOOKING_SUCCESS = 'CREATE_INSURANCE_BOOKING_SUCCESS';
export const CREATE_INSURANCE_BOOKING_FAILURE = 'CREATE_INSURANCE_BOOKING_FAILURE';

export const GET_USER_INSURANCE_BOOKINGS_REQUEST = 'GET_USER_INSURANCE_BOOKINGS_REQUEST';
export const GET_USER_INSURANCE_BOOKINGS_SUCCESS = 'GET_USER_INSURANCE_BOOKINGS_SUCCESS';
export const GET_USER_INSURANCE_BOOKINGS_FAILURE = 'GET_USER_INSURANCE_BOOKINGS_FAILURE';

export const GET_INSURANCE_BOOKING_DETAILS_REQUEST = 'GET_INSURANCE_BOOKING_DETAILS_REQUEST';
export const GET_INSURANCE_BOOKING_DETAILS_SUCCESS = 'GET_INSURANCE_BOOKING_DETAILS_SUCCESS';
export const GET_INSURANCE_BOOKING_DETAILS_FAILURE = 'GET_INSURANCE_BOOKING_DETAILS_FAILURE';

export const UPDATE_INSURANCE_BOOKING_STATUS_REQUEST = 'UPDATE_INSURANCE_BOOKING_STATUS_REQUEST';
export const UPDATE_INSURANCE_BOOKING_STATUS_SUCCESS = 'UPDATE_INSURANCE_BOOKING_STATUS_SUCCESS';
export const UPDATE_INSURANCE_BOOKING_STATUS_FAILURE = 'UPDATE_INSURANCE_BOOKING_STATUS_FAILURE';

export const CANCEL_INSURANCE_BOOKING_REQUEST = 'CANCEL_INSURANCE_BOOKING_REQUEST';
export const CANCEL_INSURANCE_BOOKING_SUCCESS = 'CANCEL_INSURANCE_BOOKING_SUCCESS';
export const CANCEL_INSURANCE_BOOKING_FAILURE = 'CANCEL_INSURANCE_BOOKING_FAILURE';

export const GET_INSURANCE_BOOKING_STATS_REQUEST = 'GET_INSURANCE_BOOKING_STATS_REQUEST';
export const GET_INSURANCE_BOOKING_STATS_SUCCESS = 'GET_INSURANCE_BOOKING_STATS_SUCCESS';
export const GET_INSURANCE_BOOKING_STATS_FAILURE = 'GET_INSURANCE_BOOKING_STATS_FAILURE';

export const SEND_SELECTED_QUOTES_REQUEST = 'SEND_SELECTED_QUOTES_REQUEST';
export const SEND_SELECTED_QUOTES_SUCCESS = 'SEND_SELECTED_QUOTES_SUCCESS';
export const SEND_SELECTED_QUOTES_FAILURE = 'SEND_SELECTED_QUOTES_FAILURE';

export const CLEAR_INSURANCE_ERROR = 'CLEAR_INSURANCE_ERROR';
export const CLEAR_INSURANCE_DATA = 'CLEAR_INSURANCE_DATA';

// API URL
// export const API_URL = API_URL || 'https://tripadmin.seemytrip.com/api';

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

// Database action creators
export const createInsuranceBookingRequest = () => ({
  type: CREATE_INSURANCE_BOOKING_REQUEST
});

export const createInsuranceBookingSuccess = (data) => ({
  type: CREATE_INSURANCE_BOOKING_SUCCESS,
  payload: data
});

export const createInsuranceBookingFailure = (error) => ({
  type: CREATE_INSURANCE_BOOKING_FAILURE,
  payload: error
});

export const getUserInsuranceBookingsRequest = () => ({
  type: GET_USER_INSURANCE_BOOKINGS_REQUEST
});

export const getUserInsuranceBookingsSuccess = (data) => ({
  type: GET_USER_INSURANCE_BOOKINGS_SUCCESS,
  payload: data
});

export const getUserInsuranceBookingsFailure = (error) => ({
  type: GET_USER_INSURANCE_BOOKINGS_FAILURE,
  payload: error
});

export const getInsuranceBookingDetailsRequest = () => ({
  type: GET_INSURANCE_BOOKING_DETAILS_REQUEST
});

export const getInsuranceBookingDetailsSuccess = (data) => ({
  type: GET_INSURANCE_BOOKING_DETAILS_SUCCESS,
  payload: data
});

export const getInsuranceBookingDetailsFailure = (error) => ({
  type: GET_INSURANCE_BOOKING_DETAILS_FAILURE,
  payload: error
});

export const updateInsuranceBookingStatusRequest = () => ({
  type: UPDATE_INSURANCE_BOOKING_STATUS_REQUEST
});

export const updateInsuranceBookingStatusSuccess = (data) => ({
  type: UPDATE_INSURANCE_BOOKING_STATUS_SUCCESS,
  payload: data
});

export const updateInsuranceBookingStatusFailure = (error) => ({
  type: UPDATE_INSURANCE_BOOKING_STATUS_FAILURE,
  payload: error
});

export const cancelInsuranceBookingRequest = () => ({
  type: CANCEL_INSURANCE_BOOKING_REQUEST
});

export const cancelInsuranceBookingSuccess = (data) => ({
  type: CANCEL_INSURANCE_BOOKING_SUCCESS,
  payload: data
});

export const cancelInsuranceBookingFailure = (error) => ({
  type: CANCEL_INSURANCE_BOOKING_FAILURE,
  payload: error
});

export const getInsuranceBookingStatsRequest = () => ({
  type: GET_INSURANCE_BOOKING_STATS_REQUEST
});

export const getInsuranceBookingStatsSuccess = (data) => ({
  type: GET_INSURANCE_BOOKING_STATS_SUCCESS,
  payload: data
});

export const getInsuranceBookingStatsFailure = (error) => ({
  type: GET_INSURANCE_BOOKING_STATS_FAILURE,
  payload: error
});

export const sendSelectedQuotesRequest = () => ({
  type: SEND_SELECTED_QUOTES_REQUEST
});

export const sendSelectedQuotesSuccess = (data) => ({
  type: SEND_SELECTED_QUOTES_SUCCESS,
  payload: data
});

export const sendSelectedQuotesFailure = (error) => ({
  type: SEND_SELECTED_QUOTES_FAILURE,
  payload: error
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
    console.log("🚀 Frontend: Starting insurance booking with data:", JSON.stringify(bookingData, null, 2));
    dispatch(insuranceBookRequest());
    
    // Get token from state if available
    const { insurance } = getState();
    const tokenData = insurance.authData;
    
    if (!tokenData || !tokenData.TokenId) {
      console.log("🔐 Frontend: No token found, authenticating...");
      // If no token, authenticate first
      await dispatch(authenticateInsuranceAPI());
      const updatedState = getState();
      bookingData.TokenId = updatedState.insurance.authData.TokenId;
      bookingData.EndUserIp = updatedState.insurance.authData.EndUserIp;
    } else {
      console.log("🔐 Frontend: Using existing token");
      bookingData.TokenId = tokenData.TokenId;
      bookingData.EndUserIp = tokenData.EndUserIp;
    }
    
    // Add user_id to booking data (like bus system does)
    // Get user_id from encrypted localStorage
    const user1 = getEncryptedItem('user1');
    const user_id = user1?.user_id || 1; // Default to 1 if no user found
    
    if (!user_id || user_id === 1) {
      console.log("⚠️ Frontend: No valid user_id found, using default:", user_id);
      console.log("🔍 Frontend: user1 object:", user1);
    } else {
      console.log("✅ Frontend: User ID found:", user_id);
    }
    
    bookingData.user_id = user_id;
    console.log("👤 Frontend: User ID added to booking data:", user_id);
    console.log("📤 Frontend: Final booking data being sent:", JSON.stringify(bookingData, null, 2));
    
    const response = await axios.post(`${API_URL}/insurance/GetInsuranceBook`, bookingData);
    
    console.log("📥 Frontend: Received response from backend:", JSON.stringify(response.data, null, 2));
    
    if (response.data) {
      dispatch(insuranceBookSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from insurance booking API');
    }
  } catch (error) {
    console.error("❌ Frontend: Insurance booking error:", error);
    console.error("❌ Frontend: Error response:", error.response?.data);
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
    
    // Add user_id to policy data (like bus system does)
    // Get user_id from encrypted localStorage
    const user1 = getEncryptedItem('user1');
    const user_id = user1?.user_id || 1; // Default to 1 if no user found
    
    if (!user_id || user_id === 1) {
      console.log("⚠️ Frontend: No valid user_id found for policy generation, using default:", user_id);
    }
    
    policyData.user_id = user_id;
    
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

// Database Thunk Actions

// Create Insurance Booking in Database (like bus system)
export const createInsuranceBooking = (bookingData) => async (dispatch, getState) => {
  try {
    dispatch(createInsuranceBookingRequest());

    // Get user_id from encrypted localStorage (like bus system)
    const user1 = getEncryptedItem('user1');
    const user_id = user1?.user_id || 1; // Default to 1 if no user found
    
    if (!user_id || user_id === 1) {
      console.log("⚠️ Frontend: No valid user_id found for create booking, using default:", user_id);
    }
    
    // Add user_id to booking data
    const bookingDataWithUser = {
      ...bookingData,
      user_id: user_id
    };

    const response = await axios.post(`${API_URL}/insurance/createInsuranceBooking`, bookingDataWithUser);
    
    if (response.data && response.data.success) {
      dispatch(createInsuranceBookingSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from create insurance booking API');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Insurance booking creation failed';
    dispatch(createInsuranceBookingFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Get User Insurance Bookings
export const getUserInsuranceBookings = (userId) => async (dispatch) => {
  try {
    dispatch(getUserInsuranceBookingsRequest());
    
    const response = await axios.get(`${API_URL}/insurance/userBookings/${userId}`);
    
    if (response.data && response.data.success) {
      dispatch(getUserInsuranceBookingsSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from get user insurance bookings API');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to get user insurance bookings';
    dispatch(getUserInsuranceBookingsFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Get Insurance Booking Details from Database
export const getInsuranceBookingDetailsFromDB = (bookingId) => async (dispatch) => {
  try {
    dispatch(getInsuranceBookingDetailsRequest());
    
    const response = await axios.get(`${API_URL}/insurance/bookingDetails/${bookingId}`);
    
    if (response.data && response.data.success) {
      dispatch(getInsuranceBookingDetailsSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from get insurance booking details API');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to get insurance booking details';
    dispatch(getInsuranceBookingDetailsFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Update Insurance Booking Status
export const updateInsuranceBookingStatus = (bookingId, statusData) => async (dispatch) => {
  try {
    dispatch(updateInsuranceBookingStatusRequest());
    
    const response = await axios.put(`${API_URL}/insurance/updateBookingStatus/${bookingId}`, statusData);
    
    if (response.data && response.data.success) {
      dispatch(updateInsuranceBookingStatusSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from update insurance booking status API');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to update insurance booking status';
    dispatch(updateInsuranceBookingStatusFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Cancel Insurance Booking in Database
export const cancelInsuranceBookingInDB = (bookingId, cancellationDetails = {}) => async (dispatch) => {
  try {
    dispatch(cancelInsuranceBookingRequest());
    
    console.log("🔄 Frontend: Cancelling insurance booking in database:", {
      bookingId,
      cancellationDetails
    });
    
    const response = await axios.put(`${API_URL}/insurance/cancelBooking/${bookingId}`, cancellationDetails);
    
    if (response.data && response.data.success) {
      console.log("✅ Frontend: Insurance booking cancelled in database successfully:", response.data);
      dispatch(cancelInsuranceBookingSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from cancel insurance booking API');
    }
  } catch (error) {
    console.error("❌ Frontend: Error cancelling insurance booking in database:", error);
    const errorMessage = error.response?.data?.message || error.message || 'Failed to cancel insurance booking';
    dispatch(cancelInsuranceBookingFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Get Insurance Booking Statistics
export const getInsuranceBookingStats = (userId) => async (dispatch) => {
  try {
    dispatch(getInsuranceBookingStatsRequest());
    
    const response = await axios.get(`${API_URL}/insurance/bookingStats/${userId}`);
    
    if (response.data && response.data.success) {
      dispatch(getInsuranceBookingStatsSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from get insurance booking stats API');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to get insurance booking statistics';
    dispatch(getInsuranceBookingStatsFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

// Send Selected Insurance Quotes via Email
export const sendSelectedQuotes = (selectedPlans, searchCriteria, emailData) => async (dispatch) => {
  try {
    dispatch(sendSelectedQuotesRequest());
    
    // Get user_id from encrypted localStorage
    const user1 = getEncryptedItem('user1');
    const user_id = user1?.user_id;
    
    if (!user_id) {
      throw new Error('User not logged in. Please login to send quotes via email.');
    }
    
    // Validate email data
    if (!emailData || !emailData.toEmail) {
      throw new Error('Email address is required');
    }
    
    const requestData = {
      user_id,
      selectedPlans,
      searchCriteria,
      emailData: {
        toEmail: emailData.toEmail,
        subject: emailData.subject || 'Insurance Quotes Comparison',
        message: emailData.message || ''
      }
    };
    
    const response = await axios.post(`${API_URL}/insurance/sendSelectedQuotes`, requestData);
    
    if (response.data && response.data.success) {
      dispatch(sendSelectedQuotesSuccess(response.data));
      return response.data;
    } else {
      throw new Error('Invalid response from send selected quotes API');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to send selected quotes via email';
    dispatch(sendSelectedQuotesFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

