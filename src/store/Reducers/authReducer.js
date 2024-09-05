// src/redux/reducers/authReducer.js

import {
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  SET_ERROR,
  CLEAR_FORM,
  LOGOUT
} from "../Actions/authActions";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case SET_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case CLEAR_FORM:
      return initialState;
    case LOGOUT:
      console.log('State after logout:', initialState);
      return initialState; 
    default:
      return state;
  }
};

export default authReducer;
