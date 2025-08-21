import {
  INSURANCE_AUTH_REQUEST,
  INSURANCE_AUTH_SUCCESS,
  INSURANCE_AUTH_FAILURE,
  INSURANCE_SEARCH_REQUEST,
  INSURANCE_SEARCH_SUCCESS,
  INSURANCE_SEARCH_FAILURE,
  CLEAR_INSURANCE_ERROR,
  CLEAR_INSURANCE_DATA
} from '../Actions/insuranceAction';

const initialState = {
  // Authentication state
  isAuthenticating: false,
  authError: null,
  authData: null,
  
  // Search state
  isSearching: false,
  searchError: null,
  searchResults: [],
  
  // General state
  loading: false,
  error: null
};

const insuranceReducer = (state = initialState, action) => {
  switch (action.type) {
    // Authentication cases
    case INSURANCE_AUTH_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
        authError: null,
      };

    case INSURANCE_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        authData: action.payload,
        authError: null,
      };

    case INSURANCE_AUTH_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        authError: action.payload,
      };

    // Search cases
    case INSURANCE_SEARCH_REQUEST:
      return {
        ...state,
        isSearching: true,
        searchError: null,
      };

    case INSURANCE_SEARCH_SUCCESS:
      return {
        ...state,
        isSearching: false,
        searchResults: action.payload,
        searchError: null,
      };

    case INSURANCE_SEARCH_FAILURE:
      return {
        ...state,
        isSearching: false,
        searchError: action.payload,  
      };

    // Utility cases
    case CLEAR_INSURANCE_ERROR:
      return {
        ...state,   
        authError: null,
        searchError: null,
        error: null
      };

    case CLEAR_INSURANCE_DATA:
      return {
        ...state,
        searchResults: [],
        authData: null
      };

    default:
      return state;
  }
};

export default insuranceReducer;
