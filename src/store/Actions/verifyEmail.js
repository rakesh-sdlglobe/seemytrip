import axios from 'axios';
import { API_URL } from './authActions';
// Action types
export const SET_OTP_VERIFIED = 'SET_OTP_VERIFIED';
export const SET_OTP_ERROR = 'SET_OTP_ERROR';
export const SET_OTP_SENT = 'SET_OTP_SENT';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

// Base API URL
// const API_BASE_URL = 'https://tripadmin.onrender.com/api'; // Adjust if needed

// Action to set OTP verified status
export const setOTPVerified = (status) => ({
  type: SET_OTP_VERIFIED,
  payload: status,
});

// Action to set OTP error
export const setOTPError = (error) => ({
  type: SET_OTP_ERROR,
  payload: error,
});

// Action to send OTP to the email
export const sendOTP = (email) => async (dispatch) => {
    console.log(email);
    
  try {
    dispatch(setOTPError('')); // Clear previous error
    const response = await axios.post(`${API_URL}/send-otp`, { email });
   
    
    if (response.data.success) {
      dispatch({ type: SET_OTP_SENT, payload: true });
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to send OTP';
    dispatch(setOTPError(errorMessage));
  }
};

export const verifyOTP = (email, otp, navigate) => async (dispatch) => {
    console.log(email, otp);

    try {
        dispatch(setOTPError('')); // Clear any previous error

        // Make the API request to verify the OTP
        const response = await axios.post(`${API_URL}/verify-otp`, { email, otp });
        console.log(response.data);

        // Check the success response
        if (response.data.success) {
            dispatch(setOTPVerified(true)); // Mark OTP as verified in the store
            alert('Email verified successfully');
            navigate('/'); // Navigate to home page (or another page after success)

        }
        
    } catch (error) {
        // Handle errors from the API or network issues
        const errorMessage = error.response?.data?.message || 'Invalid or expired OTP';
        dispatch(setOTPError(errorMessage)); // Dispatch error message to Redux store
        alert(errorMessage); // Optionally show error to the user
    }
};

// Action to reset password
export const resetPassword = (email, newPassword) => async (dispatch) => {
  dispatch({ type: RESET_PASSWORD_ERROR, payload: '' }); // Clear previous error

  try {
    // Make the API request to reset the password
    const response = await axios.post(`${API_URL}/password/reset-password`, { email, newPassword });

    // Check the response status and success flag
    if (response.status === 200 && response.data.success) {
      // Dispatch success action if password reset is successful
      dispatch({ type: RESET_PASSWORD_SUCCESS });
      alert('Password reset successfully');
    } else {
      // If success flag is false, treat it as an error
      dispatch({ type: RESET_PASSWORD_ERROR, payload: response.data.message });
      alert(response.data.message || 'Failed to reset password');
    }
  } catch (error) {
    // Handle any error that occurs during the request
    const errorMessage = error.response?.data?.message || 'Failed to reset password';
    dispatch({ type: RESET_PASSWORD_ERROR, payload: errorMessage });
    alert(errorMessage);
  }
};



