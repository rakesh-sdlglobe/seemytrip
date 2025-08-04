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
    FETCH_BUS_BOOKING_DETAILS_REQUEST,
    CREATE_BUS_BOOKING_REQUEST,
    CREATE_BUS_BOOKING_SUCCESS,
    CREATE_BUS_BOOKING_FAILURE,
    FETCH_USER_BUS_BOOKINGS_REQUEST,
    FETCH_USER_BUS_BOOKINGS_SUCCESS,
    FETCH_USER_BUS_BOOKINGS_FAILURE,
    FETCH_BUS_BOOKING_DETAILS_DB_REQUEST,
    FETCH_BUS_BOOKING_DETAILS_DB_SUCCESS,
    FETCH_BUS_BOOKING_DETAILS_DB_FAILURE,
    UPDATE_BUS_BOOKING_STATUS_REQUEST,
    UPDATE_BUS_BOOKING_STATUS_SUCCESS,
    UPDATE_BUS_BOOKING_STATUS_FAILURE,
    CANCEL_BUS_BOOKING_REQUEST,
    CANCEL_BUS_BOOKING_SUCCESS,
    CANCEL_BUS_BOOKING_FAILURE,
    FETCH_BUS_BOOKING_STATS_REQUEST,
    FETCH_BUS_BOOKING_STATS_SUCCESS,
    FETCH_BUS_BOOKING_STATS_FAILURE,
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
    bookingLoading: false,
    bookingDetailsLoading: false,
    createBookingLoading: false,
    userBookingsLoading: false,
    bookingDetailsDbLoading: false,
    updateStatusLoading: false,
    cancelBookingLoading: false,
    bookingStatsLoading: false,
    userBusBookings: [],
    busBookingDetailsDb: null,
    busBookingStats: null,
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
        case FETCH_BUS_BOOKING_DETAILS_REQUEST:
            newState = { ...state, bookingDetailsLoading: true, error: null };
            break;
        case FETCH_BUS_BOOKING_DETAILS_SUCCESS:
            newState = { ...state, bookingDetailsLoading: false, busBookingDetails: action.payload, error: null };
            break;
        case FETCH_BUS_BOOKING_DETAILS_FAILURE:
            newState = { ...state, bookingDetailsLoading: false, error: action.payload };
            break;

        // CREATE BUS BOOKING
        case CREATE_BUS_BOOKING_REQUEST:
            newState = { ...state, createBookingLoading: true, error: null };
            break;
        case CREATE_BUS_BOOKING_SUCCESS:
            newState = { 
                ...state, 
                createBookingLoading: false, 
                userBusBookings: [action.payload, ...state.userBusBookings],
                error: null 
            };
            break;
        case CREATE_BUS_BOOKING_FAILURE:
            newState = { ...state, createBookingLoading: false, error: action.payload };
            break;

        // FETCH USER BUS BOOKINGS
        case FETCH_USER_BUS_BOOKINGS_REQUEST:
            newState = { ...state, userBookingsLoading: true, error: null };
            break;
        case FETCH_USER_BUS_BOOKINGS_SUCCESS:
            newState = { ...state, userBookingsLoading: false, userBusBookings: action.payload, error: null };
            break;
        case FETCH_USER_BUS_BOOKINGS_FAILURE:
            newState = { ...state, userBookingsLoading: false, error: action.payload };
            break;

        // FETCH BUS BOOKING DETAILS FROM DB
        case FETCH_BUS_BOOKING_DETAILS_DB_REQUEST:
            newState = { ...state, bookingDetailsDbLoading: true, error: null };
            break;
        case FETCH_BUS_BOOKING_DETAILS_DB_SUCCESS:
            newState = { ...state, bookingDetailsDbLoading: false, busBookingDetailsDb: action.payload, error: null };
            break;
        case FETCH_BUS_BOOKING_DETAILS_DB_FAILURE:
            newState = { ...state, bookingDetailsDbLoading: false, error: action.payload };
            break;

        // UPDATE BUS BOOKING STATUS
        case UPDATE_BUS_BOOKING_STATUS_REQUEST:
            newState = { ...state, updateStatusLoading: true, error: null };
            break;
        case UPDATE_BUS_BOOKING_STATUS_SUCCESS:
            newState = { 
                ...state, 
                updateStatusLoading: false, 
                userBusBookings: state.userBusBookings.map(booking => 
                    booking.booking_id === action.payload.booking_id 
                        ? { ...booking, ...action.payload }
                        : booking
                ),
                error: null 
            };
            break;
        case UPDATE_BUS_BOOKING_STATUS_FAILURE:
            newState = { ...state, updateStatusLoading: false, error: action.payload };
            break;

        // CANCEL BUS BOOKING
        case CANCEL_BUS_BOOKING_REQUEST:
            newState = { ...state, cancelBookingLoading: true, error: null };
            break;
        case CANCEL_BUS_BOOKING_SUCCESS:
            newState = { 
                ...state, 
                cancelBookingLoading: false, 
                userBusBookings: state.userBusBookings.map(booking => 
                    booking.booking_id === action.payload.booking_id 
                        ? { ...booking, booking_status: 'Cancelled' }
                        : booking
                ),
                error: null 
            };
            break;
        case CANCEL_BUS_BOOKING_FAILURE:
            newState = { ...state, cancelBookingLoading: false, error: action.payload };
            break;

        // FETCH BUS BOOKING STATS
        case FETCH_BUS_BOOKING_STATS_REQUEST:
            newState = { ...state, bookingStatsLoading: true, error: null };
            break;
        case FETCH_BUS_BOOKING_STATS_SUCCESS:
            newState = { ...state, bookingStatsLoading: false, busBookingStats: action.payload, error: null };
            break;
        case FETCH_BUS_BOOKING_STATS_FAILURE:
            newState = { ...state, bookingStatsLoading: false, error: action.payload };
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
                       newState.blockLoading ||
                       newState.createBookingLoading ||
                       newState.userBookingsLoading ||
                       newState.bookingDetailsDbLoading ||
                       newState.updateStatusLoading ||
                       newState.cancelBookingLoading ||
                       newState.bookingStatsLoading;

    return newState;
};

export default busReducer;
