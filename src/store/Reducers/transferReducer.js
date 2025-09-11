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
  TRANSFER_STATIC_DATA_REQUEST,
  TRANSFER_STATIC_DATA_SUCCESS,
  TRANSFER_STATIC_DATA_FAILURE,
  TRANSFER_SEARCH_REQUEST,
  TRANSFER_SEARCH_SUCCESS,
  TRANSFER_SEARCH_FAILURE,
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

    // Transfer static data state
    staticDataLoading: false,
    staticDataData: null,
    staticDataError: null,

    // Transfer search state
    searchLoading: false,
    searchData: null,
    searchError: null,
  
  
  // General state
  isAuthenticated: false,
  lastAction: null
};

const transferReducer = (state = initialState, action) => {
  console.log('🔄 [TRANSFER REDUCER] Processing action:', action.type, {
    payload: action.payload,
    timestamp: new Date().toISOString(),
    currentState: {
      isAuthenticated: state.isAuthenticated,
      authLoading: state.authLoading,
      countryListLoading: state.countryListLoading,
      destinationSearchLoading: state.destinationSearchLoading,
      staticDataLoading: state.staticDataLoading,
      searchLoading: state.searchLoading,
      lastAction: state.lastAction,
      hasAuthData: !!state.authData,
      hasCountryListData: !!state.countryListData,
      hasDestinationSearchData: !!state.destinationSearchData,
      hasStaticData: !!state.staticDataData,
      hasSearchData: !!state.searchData
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
      console.log('✅ [TRANSFER REDUCER] Auth data received:', {
        hasTokenId: !!action.payload?.TokenId,
        hasEndUserIp: !!action.payload?.EndUserIp,
        hasAgencyId: !!action.payload?.AgencyId,
        message: action.payload?.message,
        fullPayload: action.payload
      });
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
        dataKeys: action.payload ? Object.keys(action.payload) : 'No data',
        hasResponse: !!action.payload?.Response,
        hasCountryList: !!action.payload?.Response?.CountryList,
        countryCount: action.payload?.Response?.CountryList?.length || 0
      });
      console.log('🌍 [TRANSFER REDUCER] Countries received:', {
        count: action.payload?.Response?.CountryList?.length || 0,
        countries: action.payload?.Response?.CountryList?.slice(0, 3) || 'No countries'
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
        dataKeys: action.payload ? Object.keys(action.payload) : 'No data',
        message: action.payload?.message
      });
      console.log('🏙️ [TRANSFER REDUCER] Transformed destinations:', {
        count: action.payload?.destinations?.length || 0,
        destinations: action.payload?.destinations?.slice(0, 3) || 'No destinations',
        sampleDestination: action.payload?.destinations?.[0] || 'No sample'
      });
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

    // Transfer static data cases
    case TRANSFER_STATIC_DATA_REQUEST:
      console.log('📊 [TRANSFER REDUCER] Setting static data loading to true');
      return {
        ...state,
        staticDataLoading: true,
        staticDataError: null,
        lastAction: 'STATIC_DATA_REQUEST'
      };
    
    case TRANSFER_STATIC_DATA_SUCCESS:
      console.log('✅ [TRANSFER REDUCER] Static data success, data received:', {
        hasData: !!action.payload,
        dataKeys: action.payload ? Object.keys(action.payload) : 'No data',
        hasTransferSearchResult: !!action.payload?.TransferSearchResult,
        hasTransferSearchResults: !!action.payload?.TransferSearchResult?.TransferSearchResults,
        resultCount: action.payload?.TransferSearchResult?.TransferSearchResults?.length || 0
      });
      console.log('📊 [TRANSFER REDUCER] Static data received:', {
        hasTransferSearchResult: !!action.payload?.TransferSearchResult,
        hasTransferSearchResults: !!action.payload?.TransferSearchResult?.TransferSearchResults,
        resultCount: action.payload?.TransferSearchResult?.TransferSearchResults?.length || 0,
        results: action.payload?.TransferSearchResult?.TransferSearchResults?.slice(0, 2) || 'No results'
      });
      return {
        ...state,
        staticDataLoading: false,
        staticDataData: action.payload,
        staticDataError: null,
        lastAction: 'STATIC_DATA_SUCCESS'
      };
    
    case TRANSFER_STATIC_DATA_FAILURE:
      console.log('❌ [TRANSFER REDUCER] Static data failure:', action.payload);
      return {
        ...state,
        staticDataLoading: false,
        staticDataData: null,
        staticDataError: action.payload,
        lastAction: 'STATIC_DATA_FAILURE'
      };

    // Transfer search cases
    case TRANSFER_SEARCH_REQUEST:
      console.log('🔍 [TRANSFER REDUCER] Setting search loading to true');
      return {
        ...state,
        searchLoading: true,
        searchError: null,
        lastAction: 'SEARCH_REQUEST'
      };
    
    case TRANSFER_SEARCH_SUCCESS:
      console.log('✅ [TRANSFER REDUCER] Search success, data received:', {
        hasData: !!action.payload,
        dataKeys: action.payload ? Object.keys(action.payload) : 'No data',
        hasTransferSearchResult: !!action.payload?.TransferSearchResult,
        hasTransferSearchResults: !!action.payload?.TransferSearchResult?.TransferSearchResults,
        resultCount: action.payload?.TransferSearchResult?.TransferSearchResults?.length || 0
      });
      console.log('🔍 [TRANSFER REDUCER] Search results received:', {
        hasTransferSearchResult: !!action.payload?.TransferSearchResult,
        hasTransferSearchResults: !!action.payload?.TransferSearchResult?.TransferSearchResults,
        resultCount: action.payload?.TransferSearchResult?.TransferSearchResults?.length || 0,
        results: action.payload?.TransferSearchResult?.TransferSearchResults?.slice(0, 2) || 'No results'
      });
      return {
        ...state,
        searchLoading: false,
        searchData: action.payload,
        searchError: null,
        lastAction: 'SEARCH_SUCCESS'
      };
    
    case TRANSFER_SEARCH_FAILURE:
      console.log('❌ [TRANSFER REDUCER] Search failure:', action.payload);
      return {
        ...state,
        searchLoading: false,
        searchData: null,
        searchError: action.payload,
        lastAction: 'SEARCH_FAILURE'
      };

   
    // Clear cases
    case CLEAR_TRANSFER_ERROR:
      console.log('🧹 [TRANSFER REDUCER] Clearing all errors');
      return {
        ...state,
        authError: null,
        countryListError: null,
        destinationSearchError: null,
        staticDataError: null,
        searchError: null,
        lastAction: 'CLEAR_ERROR'
      };

    case CLEAR_TRANSFER_DATA:
      console.log('🧹 [TRANSFER REDUCER] Clearing all data and resetting state');
      return {
        ...state,
        authData: null,
        countryListData: null,
        destinationSearchData: null,
        staticDataData: null,
        searchData: null,
        isAuthenticated: false,
        lastAction: 'CLEAR_DATA'
      };

    default:
      console.log('❓ [TRANSFER REDUCER] Unknown action type:', action.type);
      return state;
  }
};

export default transferReducer;
