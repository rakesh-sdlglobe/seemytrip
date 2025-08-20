import {
  FETCH_FLIGHT_AIRPORTS_REQUEST,
  FETCH_FLIGHT_AIRPORTS_SUCCESS,
  FETCH_FLIGHT_AIRPORTS_FAILURE,
  FETCH_FLIGHT_RESULTS_REQUEST,
  FETCH_FLIGHT_RESULTS_SUCCESS,
  FETCH_FLIGHT_RESULTS_FAILURE,
} from "../Actions/flightActions";

const initialState = {
  airportsListLoading: false,
  flightResultListLoading: false,
  airportsList: [],
  flightResultList: [],
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
      case FETCH_FLIGHT_RESULTS_REQUEST:
      return {
        ...state,
        flightResultListLoading: true,
      };
    case FETCH_FLIGHT_RESULTS_SUCCESS:
      return {
        ...state,
        flightResultListLoading: false,
        flightResultList:{ 
          ...action.payload,
          FlightResults:[
            ...(state.flightResultList.FlightResults || []),
            ...(action.payload.FlightResults || []),
          ]},
      };
    case FETCH_FLIGHT_RESULTS_FAILURE:
      return {
        ...state,
        flightResultListLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
