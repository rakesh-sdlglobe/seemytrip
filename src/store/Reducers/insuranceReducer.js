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
  INSURANCE_POLICY_REQUEST,
  INSURANCE_POLICY_SUCCESS,
  INSURANCE_POLICY_FAILURE,
  INSURANCE_BOOKING_DETAILS_REQUEST,
  INSURANCE_BOOKING_DETAILS_SUCCESS,
  INSURANCE_BOOKING_DETAILS_FAILURE,
  INSURANCE_CANCEL_REQUEST,
  INSURANCE_CANCEL_SUCCESS,
  INSURANCE_CANCEL_FAILURE,
  SEND_SELECTED_QUOTES_REQUEST,
  SEND_SELECTED_QUOTES_SUCCESS,
  SEND_SELECTED_QUOTES_FAILURE,
  CLEAR_INSURANCE_ERROR,
  CLEAR_INSURANCE_DATA,
  GET_USER_INSURANCE_BOOKINGS_REQUEST,
  GET_USER_INSURANCE_BOOKINGS_SUCCESS,
  GET_USER_INSURANCE_BOOKINGS_FAILURE,
  CLEAR_USER_INSURANCE_BOOKINGS_DATA
} from '../Actions/insuranceAction';

const initialState = {
  // Authentication state
  authLoading: false,
  authData: null,
  authError: null,
  
  // Search state
  searchLoading: false,
  searchData: null,
  searchError: null,
  
  // Booking state
  bookLoading: false,
  bookData: null,
  bookError: null,
  
  // Policy state
  policyLoading: false,
  policyData: null,
  policyError: null,
  
  // Booking details state
  bookingDetailsLoading: false,
  bookingDetailsData: null,
  bookingDetailsError: null,
  
  // Cancel state
  cancelLoading: false,
  cancelData: null,
  cancelError: null,
  
  // Email state
  emailLoading: false,
  emailData: null,
  emailError: null,
  
  // General state
  isAuthenticated: false,
  lastAction: null,

  // User Insurance Bookings state
  userInsuranceBookingsLoading: false,
  userInsuranceBookings: [],
  userInsuranceBookingsError: null,
};

const insuranceReducer = (state = initialState, action) => {
  switch (action.type) {
    // Authentication cases
    case INSURANCE_AUTH_REQUEST:
      return {
        ...state,
        authLoading: true,
        authError: null,
        lastAction: 'AUTH_REQUEST'
      };
      
    case INSURANCE_AUTH_SUCCESS:
      return {
        ...state,
        authLoading: false,
        authData: action.payload,
        authError: null,
        isAuthenticated: true,
        lastAction: 'AUTH_SUCCESS'
      };
      
    case INSURANCE_AUTH_FAILURE:
      return {
        ...state,
        authLoading: false,
        authError: action.payload,
        isAuthenticated: false,
        lastAction: 'AUTH_FAILURE'
      };
      
    // Search cases
    case INSURANCE_SEARCH_REQUEST:
      return {
        ...state,
        searchLoading: true,
        searchError: null,
        lastAction: 'SEARCH_REQUEST'
      };
      
    case INSURANCE_SEARCH_SUCCESS:
      return {
        ...state,
        searchLoading: false,
        searchData: action.payload,
        searchError: null,
        lastAction: 'SEARCH_SUCCESS'
      };
      
    case INSURANCE_SEARCH_FAILURE:
      return {
        ...state,
        searchLoading: false,
        searchError: action.payload,
        lastAction: 'SEARCH_FAILURE'
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
      
    // Policy cases
    case INSURANCE_POLICY_REQUEST:
      return {
        ...state,
        policyLoading: true,
        policyError: null,
        lastAction: 'POLICY_REQUEST'
      };
      
    case INSURANCE_POLICY_SUCCESS:
      return {
        ...state,
        policyLoading: false,
        policyData: action.payload,
        policyError: null,
        lastAction: 'POLICY_SUCCESS'
      };
      
    case INSURANCE_POLICY_FAILURE:
      return {
        ...state,
        policyLoading: false,
        policyError: action.payload,
        lastAction: 'POLICY_FAILURE'
      };
      
    // Booking details cases
    case INSURANCE_BOOKING_DETAILS_REQUEST:
      return {
        ...state,
        bookingDetailsLoading: true,
        bookingDetailsError: null,
        lastAction: 'BOOKING_DETAILS_REQUEST'
      };
      
    case INSURANCE_BOOKING_DETAILS_SUCCESS:
      return {
        ...state,
        bookingDetailsLoading: false,
        bookingDetailsData: action.payload,
        bookingDetailsError: null,
        lastAction: 'BOOKING_DETAILS_SUCCESS'
      };
      
    case INSURANCE_BOOKING_DETAILS_FAILURE:
      return {
        ...state,
        bookingDetailsLoading: false,
        bookingDetailsError: action.payload,
        lastAction: 'BOOKING_DETAILS_FAILURE'
      };
      
    // Cancel cases
    case INSURANCE_CANCEL_REQUEST:
      return {
        ...state,
        cancelLoading: true,
        cancelError: null,
        lastAction: 'CANCEL_REQUEST'
      };
      
    case INSURANCE_CANCEL_SUCCESS:
      return {
        ...state,
        cancelLoading: false,
        cancelData: action.payload,
        cancelError: null,
        lastAction: 'CANCEL_SUCCESS'
      };
      
    case INSURANCE_CANCEL_FAILURE:
      return {
        ...state,
        cancelLoading: false,
        cancelError: action.payload,
        lastAction: 'CANCEL_FAILURE'
      };
      
    // Email cases
    case SEND_SELECTED_QUOTES_REQUEST:
      return {
        ...state,
        emailLoading: true,
        emailError: null,
        lastAction: 'SEND_QUOTES_REQUEST'
      };
      
    case SEND_SELECTED_QUOTES_SUCCESS:
      return {
        ...state,
        emailLoading: false,
        emailData: action.payload,
        emailError: null,
        lastAction: 'SEND_QUOTES_SUCCESS'
      };
      
    case SEND_SELECTED_QUOTES_FAILURE:
      return {
        ...state,
        emailLoading: false,
        emailError: action.payload,
        lastAction: 'SEND_QUOTES_FAILURE'
      };
      
    // Clear cases
    case CLEAR_INSURANCE_ERROR:
      return {
        ...state,
        authError: null,
        searchError: null,
        bookError: null,
        policyError: null,
        bookingDetailsError: null,
        cancelError: null,
        emailError: null
      };
      
    case CLEAR_INSURANCE_DATA:
      return {
        ...state,
        searchData: null,
        bookData: null,
        policyData: null,
        bookingDetailsData: null,
        cancelData: null,
        emailData: null
      };

      //database cases
      // Get User Insurance Bookings
      case GET_USER_INSURANCE_BOOKINGS_REQUEST:
        return {
          ...state,
          userInsuranceBookingsLoading: true,
          userInsuranceBookingsError: null,
          lastAction: 'GET_USER_INSURANCE_BOOKINGS_REQUEST'
        };
      case GET_USER_INSURANCE_BOOKINGS_SUCCESS:
        return {
          ...state,
          userInsuranceBookingsLoading: false,
          userInsuranceBookingsData: action.payload,
          userInsuranceBookingsError: null,
          lastAction: 'GET_USER_INSURANCE_BOOKINGS_SUCCESS'
        };
      case GET_USER_INSURANCE_BOOKINGS_FAILURE:
        return {
          ...state,
          userInsuranceBookingsLoading: false,
          userInsuranceBookingsError: action.payload,
          lastAction: 'GET_USER_INSURANCE_BOOKINGS_FAILURE'
        };
    default:
      return state;
  }
};

export default insuranceReducer;
