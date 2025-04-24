import axios from 'axios';
import { API_URL } from './authActions';

// Action types
export const SET_OTP_SENT = 'SET_OTP_SENT';
export const SET_OTP_ERROR = 'SET_OTP_ERROR';
export const SET_EMAIL_USER = 'SET_EMAIL_USER';
export const LOGOUT_EMAIL_USER = 'LOGOUT_EMAIL_USER';
export const SET_USERNAME = 'SET_USERNAME';

export const setOTPSent = (status) => ({ type: SET_OTP_SENT, payload: status });
export const setOTPError = (error) => ({ type: SET_OTP_ERROR, payload: error });
export const setUsername = (username) => ({ type: SET_USERNAME, payload: username });
export const setEmailUser = (email, firstName) => ({ 
  type: SET_EMAIL_USER, 
  payload: { email, firstName } 
});

// Action to send verification OTP
export const sendVerificationOTP = (email) => async (dispatch) => {
  try {
    dispatch(setOTPError(''));
    await axios.post(`${API_URL}/send-otp`, { email });
    dispatch(setOTPSent(true));
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to send OTP';
    dispatch(setOTPError(errorMessage));
  }
};

// Action to verify OTP
export const verifyEmailOTP = (email, otp) => async (dispatch) => {  
  try {
    dispatch(setOTPError('')); 
    const response = await axios.post(`${API_URL}/verify-otp`, { email, otp });
    const { token, email: useremail, firstName } = response?.data;

    // Store in localStorage
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify({
      email: useremail,
      firstName: firstName
    }));

    // Dispatch to Redux
    dispatch(setUsername(firstName)); 
    dispatch(setEmailUser(useremail, firstName));
      
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Invalid or expired OTP';
    dispatch(setOTPError(errorMessage));
  }
};


export const logoutEmailUser = (navigate) => (dispatch) => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  localStorage.removeItem('googleUserName')
  dispatch({ type: LOGOUT_EMAIL_USER });
  if (navigate) {
    navigate('/');
    window.location.reload();
  }
};


// export const verifyEmailOTPForgot = (email, otp, navigate) => async (dispatch) => {
//   try {
//     dispatch(setOTPError('')); // Clear previous error

//     const response = await axios.post(`${API_URL}/verify-otp-auth`, { email, otp });

//     if (response.data) {
//       const { token, user } = response.data;
//       console.log("60 response from the email action ",response);
//       email = user;

//       dispatch(setEmail(email))
//       dispatch(setEmailUser(email, token));
//     }
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || 'Invalid or expired OTP';
//     dispatch(setOTPError(errorMessage));
//   }
// };

// Action to log out the email user

