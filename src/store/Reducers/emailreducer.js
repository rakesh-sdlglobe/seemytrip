import {
  SET_OTP_SENT,
  SET_OTP_ERROR,
  SET_EMAIL_USER,
  LOGOUT_EMAIL_USER,
} from '../Actions/emailAction';

// Get initial state from localStorage, if available
const initialState = {
  email: localStorage.getItem('user') || '',
  otpSent: false,
  error: '',
  user: JSON.parse(localStorage.getItem('user')) || null, // Parse the user from localStorage
};

const emailAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OTP_SENT:
      return { ...state, otpSent: action.payload };

    case SET_OTP_ERROR:
      return { ...state, error: action.payload };

    case SET_EMAIL_USER: {
      const { user, token } = action.payload;
      console.log("26 email and token is from email reducer ",user,token);
      

      // Save user and token to localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user)); // Convert user to string before storing

      return {
        ...state,
        user,
        email: user || '',
        error: '',
        otpSent: false,
      };
    }

    case LOGOUT_EMAIL_USER:
      // Remove data from localStorage on logout
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      localStorage.removeItem('googleUserName')

      return { ...initialState, email: '', user: null };

    default:
      return state;
  }
};

export default emailAuthReducer;
