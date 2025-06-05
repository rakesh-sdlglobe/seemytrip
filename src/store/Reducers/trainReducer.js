// reducers/trainReducer.js
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
  FETCH_IRCTC_USERNAME_REQUEST,
  FETCH_IRCTC_USERNAME_SUCCESS,
  FETCH_IRCTC_USERNAME_FAILURE, 
  FETCH_COUNTRY_LIST_REQUEST,
  FETCH_COUNTRY_LIST_SUCCESS,
  FETCH_COUNTRY_LIST_FAILURE,
  FETCH_IRCTC_FORGOT_DETAILS_REQUEST,
  FETCH_IRCTC_FORGOT_DETAILS_SUCCESS,
  FETCH_IRCTC_FORGOT_DETAILS_FAILURE,
} from '../Actions/trainActions.js';

const initialState = {
  loading: false,
  stations: [],
  trains: [],
  error: null,
  searchParams: {},
  trainSchedule:[],
  trainBoardingStations : [],
  IRCTC_username_status : {},
  countryList : [],
};

export const trainReducer = (state = initialState, action) => {
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
    case FETCH_IRCTC_USERNAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_IRCTC_USERNAME_SUCCESS:
      return {
        ...state,
        loading: false,
        IRCTC_username_status: action.payload,
      };
    case FETCH_IRCTC_USERNAME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_COUNTRY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        countryList: action.payload,
      };
    case FETCH_COUNTRY_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_IRCTC_FORGOT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_IRCTC_FORGOT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        IRCTC_forgot_details: action.payload,
      };
    case FETCH_IRCTC_FORGOT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        IRCTC_forgot_details: action.payload,
      };
    default:
      return state;
  }
};
