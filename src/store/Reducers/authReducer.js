// src/redux/reducers/authReducer.js
import {
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  SET_ERROR,
  CLEAR_FORM,
  LOGOUT,
  SET_USER,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAILURE,
} from '../Actions/authActions';

const initialState = {
  name: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).name : '',
  email: '',
  password: '',
  confirmPassword: '',
  error: '',
  // googleUser: null,
  user: localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('user')) : null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state, name: action.payload
      };
    case SET_EMAIL:
      return {
        ...state, email: action.payload
      };
    case SET_PASSWORD:
      return {
        ...state, password: action.payload
      };
    case SET_CONFIRM_PASSWORD:
      return {
        ...state, confirmPassword: action.payload
      };
    case SET_ERROR:
      return {
        ...state, error: action.payload
      };
    case CLEAR_FORM:
      return initialState;
    case SET_USER:
      const {
        name
      } = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
          name: name,
      };
    case GOOGLE_LOGIN_SUCCESS:
      // Store the user and token in local storage
      const {
        token, user
      } = action.payload;
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      return {
        ...state,
        googleUser: user,
          error: null,
      };
    case GOOGLE_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      return {
        ...initialState,
        name: '',
          user: null,
      };
    default:
      return state;
  }

};

export default authReducer;