import {
    FETCH_CITY_HOTELS_REQUEST,
    FETCH_CITY_HOTELS_SUCCESS,
    FETCH_CITY_HOTELS_FAILURE,
    FETCH_HOTELS_LIST_REQUEST,
    FETCH_HOTELS_LIST_SUCCESS,
    FETCH_HOTELS_LIST_PAGINATION_SUCCESS,
    FETCH_HOTELS_LIST_FAILURE,
    FETCH_HOTELS_IMAGES_REQUEST,
    FETCH_HOTELS_IMAGES_SUCCESS,
    FETCH_HOTELS_IMAGES_FAILURE,
    FETCH_HOTEL_DETAILS_REQUEST,
    FETCH_HOTEL_DETAILS_SUCCESS,
    FETCH_HOTEL_DETAILS_FAILURE
} from "../Actions/hotelActions";


const initialState = {
    cityHotelsListLoading: false,
    hotelsListLoading : false,
    hotelImagesLoading:false,
    hotelDetailsLoading : false,
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
                cityHotelsListLoading: true,
            };
        case FETCH_CITY_HOTELS_SUCCESS:
            return {
                ...state,
                cityHotelsListLoading: false,
                error: null,
                CityHotels: action.payload,
            };
        case FETCH_CITY_HOTELS_FAILURE:
            return {
                ...state,
                cityHotelsListLoading: false,
                error: action.payload,
            };
        case FETCH_HOTELS_LIST_REQUEST:
            return {
                ...state,
                hotelsListLoading: true,
            };
        case FETCH_HOTELS_LIST_SUCCESS:
            return {
                ...state,
                hotelsListLoading: false,
                error: null,
                HotelsList: action.payload,
            };
        case FETCH_HOTELS_LIST_PAGINATION_SUCCESS:
            return {
                ...state,
                hotelsListLoading: false,
                error: null,
                HotelsList: {
                    ...action.payload,
                    Hotels: [...(state.HotelsList.Hotels || []), ...(action.payload.Hotels || [])]
                },
            };
        case FETCH_HOTELS_LIST_FAILURE:
            return {
                ...state,
                hotelsListLoading: false,
                error: action.payload,
            };
        case FETCH_HOTELS_IMAGES_REQUEST:
            return {
                ...state,
                hotelImagesLoading: true,
            };
        case FETCH_HOTELS_IMAGES_SUCCESS:
            return {
                ...state,
                hotelImagesLoading: false,
                error: null,
                HotelImages: action.payload,
            };
        case FETCH_HOTELS_IMAGES_FAILURE:
            return {
                ...state,
                hotelImagesLoading: false,
                error: action.payload,
            };
        case FETCH_HOTEL_DETAILS_REQUEST:
            return { ...state, hotelDetailsLoading: true, error: null }
        case FETCH_HOTEL_DETAILS_SUCCESS:
            return { ...state, hotelDetailsLoading: false, details: action.payload }
        case FETCH_HOTEL_DETAILS_FAILURE:
            return { ...state, hotelDetailsLoading: false, error: action.payload }
        default:
            return state;
    }
};