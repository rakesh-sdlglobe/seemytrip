// reducers/filterReducer.js
import {
  FETCH_STATIONS_REQUEST,
  FETCH_STATIONS_SUCCESS,
  FETCH_STATIONS_FAILURE,
  FETCH_TRAINS_REQUEST,
  FETCH_TRAINS_SUCCESS,
  FETCH_TRAINS_FAILURE,
  FETCH_TRAINS_SEARCH_PARAMS,
  FETCH_TRAINS_FARE_REQUEST,
  FETCH_TRAINS_FARE_SUCCESS,
  FETCH_TRAINS_FARE_FAILURE,
  FETCH_TRAINS_SCHEDULE_REQUEST,
  FETCH_TRAINS_SCHEDULE_SUCCESS,
  FETCH_TRAINS_SCHEDULE_FAILURE,
  FETCH_TRAIN_BOARDING_STATIONS_REQUEST,
  FETCH_TRAIN_BOARDING_STATIONS_SUCCESS,
  FETCH_TRAIN_BOARDING_STATIONS_FAILURE,
} from '../Actions/filterActions.js';

const initialState = {
  loading: false,
  stations: [],
  trains: [],
  error: null,
  searchParams: {},
  trainSchedule:[],
  trainBoardingStations : [],
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
      case FETCH_TRAINS_FARE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TRAINS_FARE_SUCCESS:
        return {
          ...state,
          loading: false,
          trainsFare: action.payload,
        };
      case FETCH_TRAINS_FARE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case FETCH_TRAINS_SCHEDULE_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case FETCH_TRAINS_SCHEDULE_SUCCESS:
          return {
            ...state,
            loading: false,
            trainSchedule: action.payload,
          };
        case FETCH_TRAINS_SCHEDULE_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        case FETCH_TRAIN_BOARDING_STATIONS_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case FETCH_TRAIN_BOARDING_STATIONS_SUCCESS:
          return {
            ...state,
            loading: false,
            trainBoardingStations: action.payload,
          };
        case FETCH_TRAIN_BOARDING_STATIONS_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        
    default:
      return state;
  }
};
