import {
  INSURANCE_AUTH_REQUEST,
  INSURANCE_AUTH_SUCCESS,
  INSURANCE_AUTH_FAILURE,
  INSURANCE_SEARCH_REQUEST,
  INSURANCE_SEARCH_SUCCESS,
  INSURANCE_SEARCH_FAILURE,
  INSURANCE_BOOK_REQUEST,
  INSURANCE_BOOK_SUCCESS,
  INSURANCE_BOOK_FAILURE,
  CLEAR_INSURANCE_ERROR,
  CLEAR_INSURANCE_DATA
} from '../Actions/insuranceAction';

const initialState = {
  // Authentication state
  authLoading: false,
  authError: null,
  authData: null,
  
  // Search state
  searchLoading: false,
  searchError: null,
  searchResults: [],

    // Booking state
    bookLoading: false,
    bookData: null,
    bookError: null,
  
};

const insuranceReducer = (state = initialState, action) => {
  switch (action.type) {
    // Authentication cases
    case INSURANCE_AUTH_REQUEST:
      return {
        ...state,
        authLoading: true,
        authError: null,
      };

    case INSURANCE_AUTH_SUCCESS:
      return {
        ...state,
        authLoading: false,
        authData: action.payload,
        authError: null,
      };

    case INSURANCE_AUTH_FAILURE:
      return {
        ...state,
        authLoading: false,
        authError: action.payload,
      };

    // Search cases
    case INSURANCE_SEARCH_REQUEST:
      return {
        ...state,
        searchLoading: true,
        searchError: null,
      };

    case INSURANCE_SEARCH_SUCCESS:
      return {
        ...state,
        searchLoading: false,
        searchResults: action.payload,
        searchError: null,
      };

    case INSURANCE_SEARCH_FAILURE:
      return {
        ...state,
        searchLoading: false,
        searchError: action.payload,  
      };

       // Booking cases
    case INSURANCE_BOOK_REQUEST:
      return {
        ...state,
        bookLoading: true,
        bookError: null,
        lastAction: 'BOOK_REQUEST'
      };
      
    case INSURANCE_BOOK_SUCCESS:
      return {
        ...state,
        bookLoading: false,
        bookData: action.payload,
        bookError: null,
        lastAction: 'BOOK_SUCCESS'
      };
      
    case INSURANCE_BOOK_FAILURE:
      return {
        ...state,
        bookLoading: false,
        bookError: action.payload,
        lastAction: 'BOOK_FAILURE'
      };


    // Utility cases
    case CLEAR_INSURANCE_ERROR:
      return {
        ...state,   
        authError: null,
        searchError: null
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
