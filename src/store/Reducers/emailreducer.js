import {
  SET_OTP,
  SET_OTP_SENT,
  SET_OTP_ERROR,
  SET_EMAIL_USER,
  LOGOUT_EMAIL_USER,
} from '../Actions/emailAction';

const initialState = {
  email: '',
  otp: '',
  otpSent: false,
  error: '',
  user: null,
};

const emailAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OTP:
      return { ...state, otp: action.payload };

    case SET_OTP_SENT:
      return { ...state, otpSent: action.payload };

    case SET_OTP_ERROR:
      return { ...state, error: action.payload };

    case SET_EMAIL_USER: {
      const { user, token } = action.payload;
      
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));

      return {
        ...state,
        user,
        email: user.email || '',
        error: '',
        otpSent: false,
        otp: '',
      };
    }

    case LOGOUT_EMAIL_USER:
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      return { ...initialState, name: '', user: null  };

    default:
      return state;
  }
};

export default emailAuthReducer;
