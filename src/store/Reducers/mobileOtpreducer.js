import {
  SET_OTP,
  SET_OTP_SENT,
  SET_OTP_ERROR,
  SET_MOBILE_USER,
  LOGOUT_MOBILE_USER,
} from '../Actions/mobileOtpAction';

const initialState = {
  phoneNumber: '',
  otp: '',
  otpSent: false,
  error: '',
  user: null,
};

const mobileAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OTP:
      return { ...state, otp: action.payload };

    case SET_OTP_SENT:
      return { ...state, otpSent: action.payload };

    case SET_OTP_ERROR:
      return { ...state, error: action.payload };

    case SET_MOBILE_USER: {
      const { user, token } = action.payload;
      console.log('Reducer - mobile Login Success:', { token, user });
      
      // Store token and user in localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));

      return {
        ...state,
        user, // Set the user in the state
        phoneNumber: user.phoneNumber || '', // Set phoneNumber from user
        error: '',
        otpSent: false,
        otp: '',
      };
    }

    case LOGOUT_MOBILE_USER:
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      return { ...initialState, name: '', user: null };
    
    default:
      return state;
  }
};

export default mobileAuthReducer;
