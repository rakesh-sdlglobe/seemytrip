import {
  SET_NAME,
  SET_EMAIL,
  SET_ERROR,
  CLEAR_ERROR,
  LOGOUT,
  SET_USER,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAILURE,
} from '../Actions/authActions';

const initialState = {
  email: null,
  error: '',
  firstName: null,
  user:  null,
};

// On initialization, check localStorage
// const userFromStorage = localStorage.getItem('user') ? localStorage.getItem('user') : null;
// const tokenFromStorage = localStorage.getItem('authToken');

// if (userFromStorage && tokenFromStorage) {
//   initialState.email = userFromStorage; // Set the user if found in localStorage
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

    case SET_USER: {
      const { user } = action.payload; // Destructure the payload

      return {
        ...state,
        user,
        email: user?.email || null,
        firstName: user?.firstName || null,
        error: null,
      };
    }



    case SET_ERROR:
      return {
        ...state, error: action.payload
      };

    case CLEAR_ERROR:
      return {
        ...state, error: ''
      };

    case GOOGLE_LOGIN_SUCCESS: {
      const {
        user
      } = action.payload; // Destructure the payload

      return {
        ...state,
        firstName: user?.firstName,
        email: user?.email,
        error: null,
        user,
      };
    }

    case GOOGLE_LOGIN_FAILURE:
      return {
        ...state, error: action.payload
      };

    case LOGOUT:
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');

      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default authReducer;