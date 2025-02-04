import {
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  EDIT_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_FAILURE,
  EDIT_USER_EMAIL_SUCCESS,
  EDIT_USER_EMAIL_FAILURE,
  FETCH_USER_BOOKINGS_SUCCESS,
  FETCH_USER_BOOKINGS_FAILURE,
  ADD_TRAVELER_REQUEST,
  ADD_TRAVELER_SUCCESS,
  ADD_TRAVELER_FAILURE,
  FETCH_TRAVELERS_REQUEST,
  FETCH_TRAVELERS_SUCCESS,
  FETCH_TRAVELERS_FAILURE,
  REMOVE_TRAVELER_SUCCESS,
  REMOVE_TRAVELER_FAILURE,
  UPDATE_TRAVELER_REQUEST,
  UPDATE_TRAVELER_SUCCESS,
  UPDATE_TRAVELER_FAILURE,
  SHOW_SESSION_EXPIRED_MODAL,
  HIDE_SESSION_EXPIRED_MODAL,
} from "../Actions/userActions";

const initialState = {
  user: null,
  bookings: [],
  error: null,
  travelers: [],
  loading: false,
  sessionExpired : false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SESSION_EXPIRED_MODAL:
      console.log("37 session expired");
      return { ...state, sessionExpired: true };
    case HIDE_SESSION_EXPIRED_MODAL:
      return { ...state, sessionExpired: false };
    case FETCH_USER_PROFILE_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case FETCH_USER_PROFILE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case EDIT_USER_PROFILE_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case EDIT_USER_PROFILE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case EDIT_USER_EMAIL_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case EDIT_USER_EMAIL_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case FETCH_USER_BOOKINGS_SUCCESS:
      return {
        ...state,
        bookings: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_USER_BOOKINGS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case ADD_TRAVELER_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_TRAVELER_SUCCESS:
      return {
        ...state,
        loading: false,
        travelers: [...state.travelers, action.payload],
      };
    case ADD_TRAVELER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_TRAVELERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TRAVELERS_SUCCESS:
      return { ...state, loading: false, travelers: action.payload };
    case FETCH_TRAVELERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case REMOVE_TRAVELER_SUCCESS:
      return {
        ...state,
        travelers: state.travelers.filter(
          (traveler) => traveler.id !== action.payload
        ),
        loading: false,
      };
    case REMOVE_TRAVELER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_TRAVELER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case UPDATE_TRAVELER_SUCCESS:
      return {
        ...state,
        loading: false,
        travelers: state.travelers.map(traveler => 
          traveler.id === action.payload.id ? action.payload : traveler
        )
      };
    case UPDATE_TRAVELER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'UPDATE_TRAVELER':
      return {
        ...state,
        travelers: state.travelers.map(traveler => 
          traveler.id === action.payload.id ? action.payload : traveler
        )
      };
    default:
      return state;
  }
};

export default userReducer;
