import {
    FETCH_CITY_HOTELS_REQUEST,
    FETCH_CITY_HOTELS_SUCCESS,
    FETCH_CITY_HOTELS_FAILURE,
    FETCH_HOTELS_LIST_REQUEST,
    FETCH_HOTELS_LIST_SUCCESS,
    FETCH_HOTELS_LIST_FAILURE,
    FETCH_HOTELS_IMAGES_REQUEST,
    FETCH_HOTELS_IMAGES_SUCCESS,
    FETCH_HOTELS_IMAGES_FAILURE,
    FETCH_HOTEL_DETAILS_REQUEST,
    FETCH_HOTEL_DETAILS_SUCCESS,
    FETCH_HOTEL_DETAILS_FAILURE

} from "../Actions/hotelActions";


const initialState = {
    loading: false,
    error: null,
    details: null,
    CityHotels: [],
    HotelsList: [],
    HotelImages: [],
};


export const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CITY_HOTELS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_CITY_HOTELS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                CityHotels: action.payload,
            };
        case FETCH_CITY_HOTELS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FETCH_HOTELS_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_HOTELS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                HotelsList: action.payload,
            };
        case FETCH_HOTELS_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FETCH_HOTELS_IMAGES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_HOTELS_IMAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                HotelImages: action.payload,
            };
        case FETCH_HOTELS_IMAGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FETCH_HOTEL_DETAILS_REQUEST:
            return { ...state, loading: true, error: null }
        case FETCH_HOTEL_DETAILS_SUCCESS:
            return { ...state, loading: false, details: action.payload }
        case FETCH_HOTEL_DETAILS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
};