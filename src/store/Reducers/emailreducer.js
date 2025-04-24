import {
  SET_OTP_SENT,
  SET_OTP_ERROR,
  SET_EMAIL_USER,
  LOGOUT_EMAIL_USER,
  SET_USERNAME,
} from '../Actions/emailAction';

// Load initial state from localStorage
const loadInitialState = () => {
  try {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      return {
        email: parsedUser.email || null,
        otpSent: false,
        error: '',
        firstName: parsedUser.firstName || '',
      };
    }
  } catch (error) {
    console.error('Failed to parse stored user data', error);
  }
  
  return {
    email: null,
    otpSent: false,
    error: '',
    firstName: '',
  };
};

const initialState = loadInitialState();

const emailAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OTP_SENT:
      return { ...state, otpSent: action.payload, error: '' };

    case SET_OTP_ERROR:
      return { ...state, error: action.payload, otpSent: false };

    case SET_USERNAME: 
      return { ...state, firstName: action.payload };

    case SET_EMAIL_USER: {
      const { email, firstName } = action.payload;     

      return {
        ...state,
        email: email || '',
        firstName: firstName || '',
        error: '',
        otpSent: false,
      };
    }

    case LOGOUT_EMAIL_USER:
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      return { ...initialState, firstName: null, email: '' };
      
    default:
      return state;
  }
};

export default emailAuthReducer;
