import { 
    FETCH_CITY_HOTELS_REQUEST,
    FETCH_CITY_HOTELS_SUCCESS,
    FETCH_CITY_HOTELS_FAILURE,

} from "../Actions/hotelActions";


const initialState = {
    loading: false,
    error: null,
    CityHotels: [],
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
                CityHotels: action.payload,
            };
        case FETCH_CITY_HOTELS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};