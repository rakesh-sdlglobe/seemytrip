import {
  TRANSFER_AUTH_REQUEST,
  TRANSFER_AUTH_SUCCESS,
  TRANSFER_AUTH_FAILURE,
  TRANSFER_COUNTRY_LIST_REQUEST,
  TRANSFER_COUNTRY_LIST_SUCCESS,
  TRANSFER_COUNTRY_LIST_FAILURE,
  CLEAR_TRANSFER_ERROR,
  CLEAR_TRANSFER_DATA
} from '../Actions/transferAction';

const initialState = {
  // Authentication state
  authLoading: false,
  authData: null,
  authError: null,
  
  // Country list state
  countryListLoading: false,
  countryListData: null,
  countryListError: null,
  
  
  // General state
  isAuthenticated: false,
  lastAction: null
};

const transferReducer = (state = initialState, action) => {
  switch (action.type) {
    // Authentication cases
    case TRANSFER_AUTH_REQUEST:
      return {
        ...state,
        authLoading: true,
        authError: null,
        lastAction: 'AUTH_REQUEST'
      };
    
    case TRANSFER_AUTH_SUCCESS:
      return {
        ...state,
        authLoading: false,
        authData: action.payload,
        authError: null,
        isAuthenticated: true,
        lastAction: 'AUTH_SUCCESS'
      };
    
    case TRANSFER_AUTH_FAILURE:
      return {
        ...state,
        authLoading: false,
        authData: null,
        authError: action.payload,
        isAuthenticated: false,
        lastAction: 'AUTH_FAILURE'
      };

    // Country list cases
    case TRANSFER_COUNTRY_LIST_REQUEST:
      return {
        ...state,
        countryListLoading: true,
        countryListError: null,
        lastAction: 'COUNTRY_LIST_REQUEST'
      };
    
    case TRANSFER_COUNTRY_LIST_SUCCESS:
      return {
        ...state,
        countryListLoading: false,
        countryListData: action.payload,
        countryListError: null,
        lastAction: 'COUNTRY_LIST_SUCCESS'
      };
    
    case TRANSFER_COUNTRY_LIST_FAILURE:
      return {
        ...state,
        countryListLoading: false,
        countryListData: null,
        countryListError: action.payload,
        lastAction: 'COUNTRY_LIST_FAILURE'
      };

   
    // Clear cases
    case CLEAR_TRANSFER_ERROR:
      return {
        ...state,
        authError: null,
        countryListError: null,
        lastAction: 'CLEAR_ERROR'
      };

    case CLEAR_TRANSFER_DATA:
      return {
        ...state,
        authData: null,
        countryListData: null,
        isAuthenticated: false,
        lastAction: 'CLEAR_DATA'
      };

    default:
      return state;
  }
};

export default transferReducer;
