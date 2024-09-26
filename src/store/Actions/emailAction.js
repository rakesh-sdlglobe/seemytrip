import axios from 'axios';

// Action types
export const SET_OTP = 'SET_OTP';
export const SET_OTP_SENT = 'SET_OTP_SENT';
export const SET_OTP_ERROR = 'SET_OTP_ERROR';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_EMAIL_USER = 'SET_EMAIL_USER';
export const LOGOUT_EMAIL_USER = 'LOGOUT_EMAIL_USER';

// Base API URL
const API_BASE_URL = 'http://localhost:3002/email'; // Adjust if needed

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

// Action to set email
export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

// Action to set email authenticated user
export const setEmailUser = (user, token) => ({
  type: SET_EMAIL_USER,
  payload: { user, token },
});

// Action to send OTP
export const sendOtp = (email) => async (dispatch) => {
  try {
    dispatch(setOtpError('')); // Clear previous error
    await axios.post(`${API_BASE_URL}/send-otp`, { email });
    dispatch(setOtpSent(true)); // OTP sent successfully
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to send OTP';
    dispatch(setOtpError(errorMessage)); // Handle error
  }
};

// Action to verify OTP
export const verifyOtp = (otp, navigate) => async (dispatch) => {
  try {
    dispatch(setOtpError('')); // Clear previous error

    // Log the OTP verification attempt
    console.log("Attempting to verify OTP:", { otp });

    const response = await axios.post(`${API_BASE_URL}/verify-otp`, { otp });

    // Handle successful verification
    if (response.data) {
      const { user, authToken } = response.data;
      localStorage.setItem('authToken', authToken); // Store the authToken
      localStorage.setItem('user', JSON.stringify(user)); // Store the user

      dispatch(setEmailUser(user, authToken)); // Set user in Redux store
      console.log("OTP verification successful:", user);
      navigate('/'); // Redirect after successful verification
    }
  } catch (error) {
    // Improved error handling and logging
    console.error('Error during OTP verification:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });

    const errorMessage = error.response?.data?.message || 'Invalid OTP';
    dispatch(setOtpError(errorMessage)); // Handle error
  }
};

// Action to log out the email user
export const logoutEmailUser = (navigate) => (dispatch) => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  dispatch({ type: LOGOUT_EMAIL_USER });
  if (navigate) {
    navigate('/login'); // Adjust the route based on your app's login path
  }
};
