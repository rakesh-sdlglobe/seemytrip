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
    FETCH_BUS_BOOKING_DETAILS_SUCCESS,
    FETCH_BUS_BOOKING_DETAILS_FAILURE,
    FETCH_BUS_BOOKING_DETAILS_REQUEST // NEW
} from '../Actions/busActions';

const initialState = {
    loading: false,
    authLoading: false,
    cityListLoading: false,
    searchLoading: false,
    seatLayoutLoading: false,
    boardingPointsLoading: false,
    blockLoading: false,
    authData: null,
    cityList: [],
    BusSearchList: [],
    busSearchLayoutlist: [],
    busBoardingPoints: null,
    busBlock: null,
    busBookingData: null,
    busBookingDetails: null,
    error: null,
    bookingLoading: false,           // NEW
    bookingDetailsLoading: false,    // NEW
};

const busReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        // AUTH
        case FETCH_BUS_AUTH_REQUEST:
            newState = { ...state, authLoading: true, error: null };
            break;
        case FETCH_BUS_AUTH_SUCCESS:
            newState = { ...state, authLoading: false, authData: action.payload, error: null };
            break;
        case FETCH_BUS_AUTH_FAILURE:
            newState = { ...state, authLoading: false, error: action.payload };
            break;

        // CITY LIST
        case FETCH_BUS_CITY_LIST_REQUEST:
            newState = { ...state, cityListLoading: true, error: null };
            break;
        case FETCH_BUS_CITY_LIST_SUCCESS: {
            let cityArray = [];
            if (Array.isArray(action.payload)) {
                cityArray = action.payload;
            } else if (action.payload?.BusCities) {
                cityArray = action.payload.BusCities;
            } else if (action.payload?.CityList) {
                cityArray = action.payload.CityList;
            }
            newState = { ...state, cityListLoading: false, cityList: cityArray, error: null };
            break;
        }
        case FETCH_BUS_CITY_LIST_FAILURE:
            newState = { ...state, cityListLoading: false, error: action.payload };
            break;

        // SEARCH
        case FETCH_BUS_SEARCH_REQUEST:
            newState = { ...state, searchLoading: true, error: null };
            break;
        case FETCH_BUS_SEARCH_SUCCESS:
            newState = { ...state, searchLoading: false, BusSearchList: action.payload, error: null };
            break;
        case FETCH_BUS_SEARCH_FAILURE:
            newState = { ...state, searchLoading: false, error: action.payload };
            break;

        // SEAT LAYOUT
        case FETCH_BUS_SEATLAYOUT_REQUEST:
            newState = { ...state, seatLayoutLoading: true, error: null };
            break;
        case FETCH_BUS_SEATLAYOUT_SUCCESS:
            newState = { ...state, seatLayoutLoading: false, busSearchLayoutlist: action.payload, error: null };
            break;
        case FETCH_BUS_SEATLAYOUT_FAILURE:
            newState = { ...state, seatLayoutLoading: false, error: action.payload };
            break;

        // BOARDING POINTS
        case FETCH_BUS_BOARDING_POINTS_REQUEST:
            newState = { ...state, boardingPointsLoading: true, error: null };
            break;
        case FETCH_BUS_BOARDING_POINTS_SUCCESS:
            newState = { ...state, boardingPointsLoading: false, busBoardingPoints: action.payload, error: null };
            break;
        case FETCH_BUS_BOARDING_POINTS_FAILURE:
            newState = { ...state, boardingPointsLoading: false, error: action.payload };
            break;

        // BLOCK SEAT
        case FETCH_BUS_BLOCK_REQUEST:
            newState = { ...state, blockLoading: true, error: null };
            break;
        case FETCH_BUS_BLOCK_SUCCESS:
            newState = { ...state, blockLoading: false, busBlock: action.payload, error: null };
            break;
        case FETCH_BUS_BLOCK_FAILURE:
            newState = { ...state, blockLoading: false, error: action.payload };
            break;

        // BOOKING
        case FETCH_BUS_BOOKING_REQUEST:
            newState = { ...state, bookingLoading: true, error: null };
            break;
        case FETCH_BUS_BOOKING_SUCCESS:
            newState = { ...state, bookingLoading: false, busBookingData: action.payload, error: null };
            break;
        case FETCH_BUS_BOOKING_FAILURE:
            newState = { ...state, bookingLoading: false, error: action.payload };
            break;

        // BOOKING DETAILS
        case FETCH_BUS_BOOKING_DETAILS_REQUEST: // <-- ADD THIS CASE
            newState = { ...state, bookingDetailsLoading: true, error: null };
            break;
        case FETCH_BUS_BOOKING_DETAILS_SUCCESS:
            newState = { ...state, bookingDetailsLoading: false, busBookingDetails: action.payload, error: null };
            break;
        case FETCH_BUS_BOOKING_DETAILS_FAILURE:
            newState = { ...state, bookingDetailsLoading: false, error: action.payload };
            break;

        default:
            return state;
    }

    // Compute `loading` based on individual flags
    newState.loading = newState.authLoading ||
                       newState.cityListLoading ||
                       newState.searchLoading ||
                       newState.seatLayoutLoading ||
                       newState.boardingPointsLoading ||
                       newState.blockLoading;

    return newState;
};

export default busReducer;
