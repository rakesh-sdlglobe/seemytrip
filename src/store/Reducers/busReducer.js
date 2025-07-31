import {
    FETCH_BUS_AUTH_REQUEST,
    FETCH_BUS_AUTH_SUCCESS,
    FETCH_BUS_AUTH_FAILURE,
    FETCH_BUS_CITY_LIST_REQUEST,
    FETCH_BUS_CITY_LIST_SUCCESS,
    FETCH_BUS_CITY_LIST_FAILURE,
    FETCH_BUS_SEARCH_REQUEST,
    FETCH_BUS_SEARCH_SUCCESS,
    FETCH_BUS_SEARCH_FAILURE,
    FETCH_BUS_SEATLAYOUT_REQUEST,
    FETCH_BUS_SEATLAYOUT_SUCCESS,
    FETCH_BUS_SEATLAYOUT_FAILURE,
    FETCH_BUS_BOARDING_POINTS_REQUEST,
    FETCH_BUS_BOARDING_POINTS_SUCCESS,
    FETCH_BUS_BOARDING_POINTS_FAILURE,
    FETCH_BUS_BLOCK_REQUEST,
    FETCH_BUS_BLOCK_SUCCESS,
    FETCH_BUS_BLOCK_FAILURE,
    FETCH_BUS_BOOKING_REQUEST,
    FETCH_BUS_BOOKING_SUCCESS,
    FETCH_BUS_BOOKING_FAILURE,
    FETCH_BUS_BOOKING_DETAILS_REQUEST,
    FETCH_BUS_BOOKING_DETAILS_SUCCESS,
    FETCH_BUS_BOOKING_DETAILS_FAILURE,
} from '../Actions/busActions';

const initialState = {
    loading: false,
    authData: null,
    cityList: [],
    BusSearchList: [],
    error: null,
    busSearchLayoutlist:[]
};

const busReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BUS_AUTH_REQUEST:
        case FETCH_BUS_CITY_LIST_REQUEST:
        case FETCH_BUS_SEARCH_REQUEST:
        case FETCH_BUS_SEATLAYOUT_REQUEST:
        case FETCH_BUS_BOARDING_POINTS_REQUEST: 
        case FETCH_BUS_BLOCK_REQUEST:
        case FETCH_BUS_BOOKING_DETAILS_REQUEST:
            console.log("=== BUS BOOKING DETAILS REDUCER - REQUEST ===");
            console.log("1. Previous state:", {
                loading: state.loading,
                hasBookingDetails: !!state.busBookingDetails,
                error: state.error
            });
            console.log("2. Setting loading to true");
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_BUS_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                authData: action.payload,
                error: null,
            };
        case FETCH_BUS_AUTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FETCH_BUS_CITY_LIST_SUCCESS: {
            let cityArray = [];
            if (Array.isArray(action.payload)) {
                cityArray = action.payload;
            } else if (action.payload && Array.isArray(action.payload.BusCities)) {
                cityArray = action.payload.BusCities;
            } else if (action.payload && Array.isArray(action.payload.CityList)) {
                cityArray = action.payload.CityList;
            }
            console.log('Redux: Received cityList:', cityArray);
            return {
                ...state,
                loading: false,
                cityList: cityArray,
                error: null,
            };
        }
        case FETCH_BUS_CITY_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FETCH_BUS_SEARCH_SUCCESS: {
            console.log('Redux: Received BusSearchList:', action.payload);
            return {
                ...state,
                loading: false,
                BusSearchList: action.payload,
                error: null,
            };
        }
        case FETCH_BUS_SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case FETCH_BUS_SEATLAYOUT_SUCCESS:
            console.log('Redux: Received busSearchLayoutlist:', action.payload);
            return {
                ...state,
                loading: false,
                busSearchLayoutlist: action.payload,
                error: null,
            };
        case FETCH_BUS_SEATLAYOUT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };   
            
        case FETCH_BUS_BOARDING_POINTS_SUCCESS:
            return {
                ...state,
                loading: false,
                busBoardingPoints: action.payload,
                error: null,
            };

        case FETCH_BUS_BOARDING_POINTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FETCH_BUS_BLOCK_SUCCESS:
            return {
                ...state,
                loading: false,
                busBlock: action.payload,
                error: null,
            };
        case FETCH_BUS_BLOCK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case FETCH_BUS_BOOKING_REQUEST:
            console.log('Redux: Fetching bus booking data...');
            
            return {     
                ...state,
                loading: true,
                error: null,
            };       

        case FETCH_BUS_BOOKING_SUCCESS:
            console.log('Redux: Received busBookingData:', action.payload);
            return {
                ...state,
                loading: false,
                busBookingData: action.payload,
                error: null,
            };

        case FETCH_BUS_BOOKING_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case FETCH_BUS_BOOKING_DETAILS_SUCCESS:
            console.log("=== BUS BOOKING DETAILS REDUCER - SUCCESS ===");
            console.log("1. Action payload received:", JSON.stringify(action.payload, null, 2));
            console.log("2. Payload structure keys:", Object.keys(action.payload || {}));
            console.log("3. Previous state:", {
                loading: state.loading,
                hasBookingDetails: !!state.busBookingDetails,
                error: state.error
            });
            console.log("4. Setting loading to false and storing booking details");
            
            const newState = {
                ...state,
                loading: false,
                busBookingDetails: action.payload,
                error: null,
            };
            
            console.log("5. New state:", {
                loading: newState.loading,
                hasBookingDetails: !!newState.busBookingDetails,
                error: newState.error,
                bookingDetailsKeys: Object.keys(newState.busBookingDetails || {})
            });
            console.log("=== BUS BOOKING DETAILS REDUCER - SUCCESS COMPLETE ===");
            
            return newState;
        case FETCH_BUS_BOOKING_DETAILS_FAILURE:
            console.log("=== BUS BOOKING DETAILS REDUCER - FAILURE ===");
            console.log("1. Error payload received:", action.payload);
            console.log("2. Previous state:", {
                loading: state.loading,
                hasBookingDetails: !!state.busBookingDetails,
                error: state.error
            });
            console.log("3. Setting loading to false and storing error");
            
            const errorState = {
                ...state,
                loading: false,
                error: action.payload,
            };
            
            console.log("4. New state:", {
                loading: errorState.loading,
                hasBookingDetails: !!errorState.busBookingDetails,
                error: errorState.error
            });
            console.log("=== BUS BOOKING DETAILS REDUCER - FAILURE COMPLETE ===");
            
            return errorState;
            
            default:
            return state;
    }
};

export default busReducer;
