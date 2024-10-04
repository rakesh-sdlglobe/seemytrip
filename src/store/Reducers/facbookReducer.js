import {
  SET_FACEBOOK_USER,
  LOGOUT_FACEBOOK_USER,
  SET_AUTH_ERROR,
} from '../Actions/facebookActions';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  error: '',
};

const facebookAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FACEBOOK_USER: {
      const { user, token } = action.payload;

      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));

      return {
        ...state,
        user,
        error: '',
      };
    }

    case SET_AUTH_ERROR:
      return { ...state, error: action.payload };

    case LOGOUT_FACEBOOK_USER:
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      return { ...initialState, user: null };

    default:
      return state;
  }
};

export default facebookAuthReducer;
