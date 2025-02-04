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
  firstName: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).firstName : '',
  email: '',
  password: '',
  confirmPassword: '',
  error: '',
  googleUser: null,
  user: localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('user')) : null,
};

// On initialization, check localStorage
// const userFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
// const tokenFromStorage = localStorage.getItem('authToken');

// if (userFromStorage && tokenFromStorage) {
//   initialState.user = userFromStorage; // Set the user if found in localStorage
// }


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state, firstName: action.payload
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
        firstName
      } = action.payload;
      // localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state, user: action.payload, firstName: firstName
      };

    case GOOGLE_LOGIN_SUCCESS: {
      const {
        token,
        user
      } = action.payload; // Destructure the payload
      console.log('Reducer - Google Login Success:', {
        token,
        user
      });

      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user.email)); 

      return {
        ...state,
        googleUser: user,
        error: null,
      };
    }

    case GOOGLE_LOGIN_FAILURE:
      return {
        ...state, error: action.payload
      };

    case LOGOUT:
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      localStorage.removeItem('googleUserName')

      return {
        ...initialState, firstName: '', user: null
      };

    default:
      return state;
  }
};

export default authReducer;