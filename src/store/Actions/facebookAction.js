import axios from 'axios';
import { API_URL } from './authActions';
// Action types
export const SET_FACEBOOK_USER = 'SET_FACEBOOK_USER';
export const LOGOUT_FACEBOOK_USER = 'LOGOUT_FACEBOOK_USER';
export const SET_AUTH_ERROR = 'SET_AUTH_ERROR';

// Base API URL (replace with your backend API handling Facebook OAuth)
// const API_BASE_URL = 'https://tripadmin.onrender.com/auth/facebook';


// Action to set Facebook authenticated user
export const setFacebookUser = (user, token) => ({
  type: SET_FACEBOOK_USER,
  payload: { user, token },
});

// Action to set authentication error
export const setAuthError = (error) => ({
  type: SET_AUTH_ERROR,
  payload: error,
});

// Facebook login action (You may use Facebook SDK or OAuth API)
export const loginWithFacebook = (facebookToken, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { facebookToken });
    if (response.data) {
      const { user, token } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user)); // Save user details

      dispatch(setFacebookUser(user, token));
      navigate('/'); // Redirect to homepage after login
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Facebook login failed';
    dispatch(setAuthError(errorMessage));
  }
};

// Logout action
export const logoutFacebookUser = (navigate) => (dispatch) => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  dispatch({ type: LOGOUT_FACEBOOK_USER });
  if (navigate) {
    navigate('/login'); // Redirect to login page
  }
};
