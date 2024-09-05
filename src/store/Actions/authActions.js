// src/redux/actions/authActions.js
// Action Types
export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_FORM = 'CLEAR_FORM';
export const LOGOUT = 'LOGOUT';

// Action Creators
export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const setConfirmPassword = (confirmPassword) => ({
  type: SET_CONFIRM_PASSWORD,
  payload: confirmPassword,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const clearForm = () => ({
  type: CLEAR_FORM,
});

export const logout = () => (dispatch) => {
  console.log('Logout action dispatched'); 
  localStorage.removeItem('authToken');
  dispatch({
    type: LOGOUT
  });
};