import {
  TRANSFER_AUTH_REQUEST,
  TRANSFER_AUTH_SUCCESS,
  TRANSFER_AUTH_FAILURE,
  TRANSFER_COUNTRY_LIST_REQUEST,
  TRANSFER_COUNTRY_LIST_SUCCESS,
  TRANSFER_COUNTRY_LIST_FAILURE,
  TRANSFER_DESTINATION_SEARCH_REQUEST,
  TRANSFER_DESTINATION_SEARCH_SUCCESS,
  TRANSFER_DESTINATION_SEARCH_FAILURE,
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

    // Destination search state
    destinationSearchLoading: false,
    destinationSearchData: null,
    destinationSearchError: null,
  
  
  // General state
  isAuthenticated: false,
  lastAction: null
};

const transferReducer = (state = initialState, action) => {
  console.log('🔄 [TRANSFER REDUCER] Processing action:', action.type, {
    payload: action.payload,
    currentState: {
      isAuthenticated: state.isAuthenticated,
      authLoading: state.authLoading,
      countryListLoading: state.countryListLoading,
      destinationSearchLoading: state.destinationSearchLoading,
      lastAction: state.lastAction
    }
  });

  switch (action.type) {
    // Authentication cases
    case TRANSFER_AUTH_REQUEST:
      console.log('🔐 [TRANSFER REDUCER] Setting auth loading to true');
      return {
        ...state,
        authLoading: true,
        authError: null,
        lastAction: 'AUTH_REQUEST'
      };
    
    case TRANSFER_AUTH_SUCCESS:
      console.log('✅ [TRANSFER REDUCER] Auth success, setting authenticated to true');
      return {
        ...state,
        authLoading: false,
        authData: action.payload,
        authError: null,
        isAuthenticated: true,
        lastAction: 'AUTH_SUCCESS'
      };
    
    case TRANSFER_AUTH_FAILURE:
      console.log('❌ [TRANSFER REDUCER] Auth failure:', action.payload);
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
      console.log('🌍 [TRANSFER REDUCER] Setting country list loading to true');
      return {
        ...state,
        countryListLoading: true,
        countryListError: null,
        lastAction: 'COUNTRY_LIST_REQUEST'
      };
    
    case TRANSFER_COUNTRY_LIST_SUCCESS:
      console.log('✅ [TRANSFER REDUCER] Country list success, data received:', {
        hasData: !!action.payload,
        dataKeys: action.payload ? Object.keys(action.payload) : 'No data'
      });
      return {
        ...state,
        countryListLoading: false,
        countryListData: action.payload,
        countryListError: null,
        lastAction: 'COUNTRY_LIST_SUCCESS'
      };
    
    case TRANSFER_COUNTRY_LIST_FAILURE:
      console.log('❌ [TRANSFER REDUCER] Country list failure:', action.payload);
      return {
        ...state,
        countryListLoading: false,
        countryListData: null,
        countryListError: action.payload,
        lastAction: 'COUNTRY_LIST_FAILURE'
      };

      // Destination search cases
    case TRANSFER_DESTINATION_SEARCH_REQUEST:
      console.log('🔍 [TRANSFER REDUCER] Setting destination search loading to true');
      return {
        ...state,
        destinationSearchLoading: true,
        destinationSearchError: null,
        lastAction: 'DESTINATION_SEARCH_REQUEST'
      };
    
    case TRANSFER_DESTINATION_SEARCH_SUCCESS:
      console.log('✅ [TRANSFER REDUCER] Destination search success, data received:', {
        hasData: !!action.payload,
        success: action.payload?.success,
        hasDestinations: !!action.payload?.destinations,
        destinationCount: action.payload?.destinations?.length || 0,
        dataKeys: action.payload ? Object.keys(action.payload) : 'No data'
      });
      console.log('🏙️ [TRANSFER REDUCER] Transformed destinations:', action.payload?.destinations);
      return {
        ...state,
        destinationSearchLoading: false,
        destinationSearchData: action.payload,
        destinationSearchError: null,
        lastAction: 'DESTINATION_SEARCH_SUCCESS'
      };
    
    case TRANSFER_DESTINATION_SEARCH_FAILURE:
      console.log('❌ [TRANSFER REDUCER] Destination search failure:', action.payload);
      return {
        ...state,
        destinationSearchLoading: false,
        destinationSearchData: null,
        destinationSearchError: action.payload,
        lastAction: 'DESTINATION_SEARCH_FAILURE'
      };


   
    // Clear cases
    case CLEAR_TRANSFER_ERROR:
      console.log('🧹 [TRANSFER REDUCER] Clearing all errors');
      return {
        ...state,
        authError: null,
        countryListError: null,
        destinationSearchError: null,
        lastAction: 'CLEAR_ERROR'
      };

    case CLEAR_TRANSFER_DATA:
      console.log('🧹 [TRANSFER REDUCER] Clearing all data and resetting state');
      return {
        ...state,
        authData: null,
        countryListData: null,
        destinationSearchData: null,
        isAuthenticated: false,
        lastAction: 'CLEAR_DATA'
      };

    default:
      console.log('❓ [TRANSFER REDUCER] Unknown action type:', action.type);
      return state;
  }
};

export default transferReducer;
