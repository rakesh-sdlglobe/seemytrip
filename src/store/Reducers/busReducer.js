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
} from '../Actions/busActions';

const initialState = {
    loading: false,
    authData: null,
    cityList: [],
    BusSearchList: [],
    error: null,
};

const busReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BUS_AUTH_REQUEST:
        case FETCH_BUS_CITY_LIST_REQUEST:
        case FETCH_BUS_SEARCH_REQUEST:
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
        default:
            return state;
    }
};

export default busReducer;
