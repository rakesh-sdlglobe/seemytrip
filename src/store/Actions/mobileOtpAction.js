import axios from 'axios';

// Action types
export const SET_OTP = 'SET_OTP';
export const SET_OTP_SENT = 'SET_OTP_SENT';
export const SET_OTP_ERROR = 'SET_OTP_ERROR';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_MOBILE_USER = 'SET_MOBILE_USER';
export const LOGOUT_MOBILE_USER = 'LOGOUT_MOBILE_USER';

// Base API URL
// const API_BASE_URL = 'https://tripadmin.onrender.com/twilio-sms';
const API_BASE_URL = 'http://localhost:3002/api/otp';

// Action to set the OTP
export const setOtp = (otp) => ({
  type: SET_OTP,
  payload: otp,
});

// Action to set OTP sent status
export const setOtpSent = (status) => ({
  type: SET_OTP_SENT,
  payload: status,
});

// Action to set OTP error
export const setOtpError = (error) => ({
  type: SET_OTP_ERROR,
  payload: error,
});

// Action to set phone number
export const setPhoneNumber = (phoneNumber) => {
  console.log('Setting phone number:', phoneNumber);
  return {
    type: SET_PHONE_NUMBER,
    payload: phoneNumber,
  };
};

// Action to set mobile authenticated user
export const setMobileUser = (user, token) => ({
  type: SET_MOBILE_USER,
  payload: { user, token },
});


// Action to send OTP
export const sendOtp = ( phoneNumber) => async (dispatch) => {
  console.log(phoneNumber);
  
  try {
    dispatch(setOtpError('')); // Clear previous error
    await axios.post(`${API_BASE_URL}/send-otp`, { phoneNumber });
    dispatch(setOtpSent(true)); // OTP sent successfully
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to send OTP';
    dispatch(setOtpError(errorMessage)); // Handle error
  }
};

// Action to verify OTP
// Action to verify OTP
export const verifyOtp = ( phoneNumber, otp, navigate) => async (dispatch) => {
  try {
    dispatch(setOtpError('')); // Clear previous error
    const response = await axios.post(`${API_BASE_URL}/verify-otp`, { phoneNumber, otp });

    const { user, authToken } = response.data; // Change `token` to `authToken`
    console.log('Response from verify OTP:', response.data); // Log the full response for debugging
    
    localStorage.setItem('authToken', authToken); // Store the authToken
    localStorage.setItem('user', JSON.stringify(user)); // Store the user
    
    dispatch(setMobileUser(user, authToken)); // Set user in Redux store
    navigate('/'); // Redirect after successful verification
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Invalid OTP';
    dispatch(setOtpError(errorMessage)); // Handle error
  }
};

// Action to log out the mobile user
export const logoutMobileUser = (navigate) => (dispatch) => {
  // Remove token and user from localStorage
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');

  // Dispatch the logout action to Redux
  dispatch({ type: LOGOUT_MOBILE_USER });

  // Navigate to the login page (optional)
  if (navigate) {
    navigate('/login'); // Adjust the route based on your app's login path
  }
};
