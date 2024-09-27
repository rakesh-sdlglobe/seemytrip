import axios from 'axios';

// Action types
export const SET_OTP_SENT = 'SET_OTP_SENT';
export const SET_OTP_ERROR = 'SET_OTP_ERROR';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_EMAIL_USER = 'SET_EMAIL_USER';
export const LOGOUT_EMAIL_USER = 'LOGOUT_EMAIL_USER';

// Base API URL
const API_BASE_URL = 'http://localhost:3002/email'; // Adjust if needed

// Action to set OTP sent status
export const setOTPSent = (status) => ({
  type: SET_OTP_SENT,
  payload: status,
});

// Action to set OTP error
export const setOTPError = (error) => ({
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

// Action to send verification OTP
export const sendVerificationOTP = (email) => async (dispatch) => {
  try {
    dispatch(setOTPError('')); // Clear previous error
    const response = await axios.post(`${API_BASE_URL}/send-verification`, { email });
    if (response.data) {
      dispatch(setOTPSent(true)); // OTP sent successfully
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to send OTP';
    dispatch(setOTPError(errorMessage)); // Handle error
  }
};

// Action to verify OTP
export const verifyEmailOTP = (email, otp, navigate) => async (dispatch) => {
  try {
    dispatch(setOTPError('')); // Clear previous error

    const response = await axios.post(`${API_BASE_URL}/verify-email`, { email, otp });

    if (response.data) {
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', email); // Store email or user info

      dispatch(setEmailUser(email, token));
      navigate('/');
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Invalid or expired OTP';
    dispatch(setOTPError(errorMessage));
  }
};

// Action to log out the email user
export const logoutEmailUser = (navigate) => (dispatch) => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  dispatch({ type: LOGOUT_EMAIL_USER });
  if (navigate) {
    navigate('/login');
  }
};
