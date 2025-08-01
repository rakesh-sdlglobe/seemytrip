import {
    FETCH_FLIGHT_AIRPORTS_REQUEST,
    FETCH_FLIGHT_AIRPORTS_SUCCESS,
    FETCH_FLIGHT_AIRPORTS_FAILURE,
} from "../Actions/flightActions";

const initialState = {
    airportsListLoading: false,
    airportsList: [],
    error: null,
};

export const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FLIGHT_AIRPORTS_REQUEST:
            return {    
                ...state,
                airportsListLoading: true,
            };
        case FETCH_FLIGHT_AIRPORTS_SUCCESS:
            return {
                ...state,
                airportsListLoading: false,
                airportsList: action.payload,
            };
        case FETCH_FLIGHT_AIRPORTS_FAILURE:
            return {
                ...state,
                airportsListLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}