// reducers/filterReducer.js
import {
  FETCH_STATIONS_REQUEST,
  FETCH_STATIONS_SUCCESS,
  FETCH_STATIONS_FAILURE,
  FETCH_TRAINS_REQUEST,
  FETCH_TRAINS_SUCCESS,
  FETCH_TRAINS_FAILURE,
  FETCH_TRAINS_SEARCH_PARAMS,
} from '../Actions/filterActions.js';

const initialState = {
  loading: false,
  stations: [],
  trains: [],
  error: null,
  searchParams: {},
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        stations: action.payload,
      };
    case FETCH_STATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case FETCH_TRAINS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TRAINS_SUCCESS:
      return {
        ...state,
        loading: false,
        trains: action.payload,
      };
    case FETCH_TRAINS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_TRAINS_SEARCH_PARAMS:
      return {
        ...state,
        loading: false,
        searchParams: action.payload,
      };
    default:
      return state;
  }
};
