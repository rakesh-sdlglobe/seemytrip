import axios from 'axios';
import { setEncryptedItem, getEncryptedItem, removeEncryptedItem } from '../../utils/encryption';

export const SET_EMAIL = 'SET_EMAIL';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';
export const SET_NAME = 'SET_NAME';
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
export const GOOGLE_LOGIN_FAILURE = 'GOOGLE_LOGIN_FAILURE';

// export const API_URL = process.env.REACT_APP_API_URL ;
export const API_URL = process.env.REACT_APP_API_URL || 'https://tripadmin.seemytrip.com/api';
// export const API_URL =  'https://tripadmin.seemytrip.com/api';

// export const API_URL = 'https://tripadmin.onrender.com/api';

const AUTH_TOKEN_KEY = 'authToken';
const USER_DATA_KEY = 'user';

// Helper function for localStorage operations with encryption
const persistAuthData = (token, user) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  setEncryptedItem(USER_DATA_KEY, user);
};

export const setError = (error) => ({ type: SET_ERROR, payload: error });

export const clearError = () => ({ type: CLEAR_ERROR });

export const setUser = (user) => ({ type: SET_USER, payload: user });

export const setEmail = (email) => ({ type: SET_EMAIL, payload: email });

export const setName = (firstName) => ({ type: SET_NAME, payload: firstName });

export const googleLoginSuccess = ({ token, user }) => ({
  type: GOOGLE_LOGIN_SUCCESS,
  payload: { token, user }
});

export const googleLoginFailure = (error) => ({
  type: GOOGLE_LOGIN_FAILURE,
  payload: error
});


// Thunk Action
export const handleGoogleLogin = (accessToken) => async (dispatch) => {

  console.log("Google login action called with access token:", accessToken);
  // Validate input
  if (!accessToken || typeof accessToken !== 'string') {
    return dispatch(googleLoginFailure('Invalid access token'));
  }

  try {
    // Clear any previous errors
    dispatch(clearError());

    // API call with timeout
    const source = axios.CancelToken.source();
    const timeout = setTimeout(() => source.cancel('Request timeout'), 10000);

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/google`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    console.log("Google login response:", response.data);

    clearTimeout(timeout);

    // Validate response structure
    if (!response.data?.token || !response.data?.user) {
      throw new Error('Invalid response structure from server');
    }

    const { token, user, user1 } = response.data;
    const { email, firstName } = user;

    // Persist data
    persistAuthData(token, user);

    // Store the encrypted user1 (not user)
    setEncryptedItem('user1', user1);

    // Batch dispatches (could use redux-batched-actions if needed)
    dispatch(googleLoginSuccess({ token, user }));
    dispatch(setUser(user));
    dispatch(setName(firstName));
    dispatch(setEmail(email));

    // Store user as plain JSON in localStorage
    localStorage.setItem('user', JSON.stringify(user));

  } catch (error) {
    // Handle different error scenarios
    console.error('Google login error:', error);
    let errorMessage = 'Google login failed';

    if (axios.isCancel(error)) {
      errorMessage = 'Request timeout';
    } else if (error.response) {
      errorMessage = error.response.data?.message || 'Server error occurred';
    } else if (error.request) {
      errorMessage = 'Network error - no response received';
    }

    console.error('Google login error:', errorMessage);
    dispatch(googleLoginFailure(errorMessage));

    // Optional: Clear auth data on failure
    localStorage.removeItem(AUTH_TOKEN_KEY);
    removeEncryptedItem(USER_DATA_KEY);
  }
};


export const register = (firstName, middleName, lastName, email, password, navigate) => async (dispatch) => {
  try {
    dispatch(setError(''));
    const response = await axios.post(`${API_URL}/signup`, {
      firstName,
      middleName,
      lastName,
      email,
      password,
    });
    const { user1, user, token } = response.data;
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));

    setEncryptedItem('user1', user1);
    dispatch(setUser(user));
    dispatch(setName(user.firstName));
    dispatch(setEmail(''));
    // dispatch(clearForm())
    // navigate('/');
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
    dispatch(setError(errorMessage));
  }
};


export const login = (email, password) => async (dispatch) => {
  const response = await axios.post('/api/login', { email, password });
  const { token, user, user1 } = response.data;
  localStorage.setItem('authToken', token);
  setEncryptedItem('user1', user1);
  dispatch(setUser(user));
};


export const logout = () => (dispatch) => {
  localStorage.removeItem('authToken');
  removeEncryptedItem('user1');
  dispatch({
    type: LOGOUT,
  });
};

// Handle Google login success

const user1 = getEncryptedItem('user1');
if (user1 && user1.user_id) {
  // Use user1.user_id, user1.email
}

const user = JSON.parse(localStorage.getItem('user'));
// Use user.firstName, user.lastName, etc.





////