import {
  FETCH_FLIGHT_AIRPORTS_REQUEST,
  FETCH_FLIGHT_AIRPORTS_SUCCESS,
  FETCH_FLIGHT_AIRPORTS_FAILURE,
  FETCH_FLIGHT_RESULTS_REQUEST,
  FETCH_FLIGHT_RESULTS_SUCCESS,
  FETCH_FLIGHT_RESULTS_FAILURE,
  FETCH_FLIGHT_LIST_PAGINATION_SUCCESS,
  FETCH_FLIGHT_PRICEVALIDATE_REQUEST,
  FETCH_FLIGHT_PRICEVALIDATE_SUCCESS,
  FETCH_FLIGHT_PRICEVALIDATE_FAILURE,
  FETCH_FLIGHT_FARE_RULE_REQUEST,
  FETCH_FLIGHT_FARE_RULE_SUCCESS,
  FETCH_FLIGHT_FARE_RULE_FAILURE,
  FETCH_FLIGHT_SERVICE_TAX_REQUEST,
  FETCH_FLIGHT_SERVICE_TAX_SUCCESS,
  FETCH_FLIGHT_SERVICE_TAX_FAILURE,
  FETCH_FLIGHT_PRE_BOOK_REQUEST,
  FETCH_FLIGHT_PRE_BOOK_SUCCESS,
  FETCH_FLIGHT_PRE_BOOK_FAILURE,
  FETCH_FLIGHT_BOOK_REQUEST,
  FETCH_FLIGHT_BOOK_SUCCESS,
  FETCH_FLIGHT_BOOK_FAILURE,
  FETCH_FLIGHT_BOOK_DETAILS_REQUEST,
  FETCH_FLIGHT_BOOK_DETAILS_SUCCESS,
} from "../Actions/flightActions";

const initialState = {
  airportsListLoading: false,
  flightResultListLoading: false,
  flightFareRuleLoading: false,
  priceValidateLoading: false,
  flightServiceTaxLoading: false,
  flightPreBookLoading: false,
  flightBookLoading: false,
  flightBookDetailsLoading: false,
  airportsList: [],
  flightResultList: [],
  flightFareRule: null,
  flightService: null,
  PriceValidate: null,
  flightPreBook: null,
  flightBook: null,
  flightBookDetails: null,
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
        flightResultList: action.payload,
      };
    case FETCH_FLIGHT_LIST_PAGINATION_SUCCESS:
      return {
        ...state,
        flightResultListLoading: false,
        flightResultList: {
          ...action.payload,
          FlightResults: [
            ...(state.flightResultList.FlightResults || []),
            ...(action.payload.FlightResults || []),
          ],
        },
      };
    case FETCH_FLIGHT_RESULTS_FAILURE:
      return {
        ...state,
        flightResultListLoading: false,
        error: action.payload,
      };
    case FETCH_FLIGHT_FARE_RULE_REQUEST:
      return {
        ...state,
        flightFareRuleLoading: true,
      };
    case FETCH_FLIGHT_FARE_RULE_SUCCESS:
      return {
        ...state,
        flightFareRuleLoading: false,
        flightFareRule: action.payload,
      };
    case FETCH_FLIGHT_FARE_RULE_FAILURE:
      return {
        ...state,
        flightFareRuleLoading: false,
        error: action.payload,
      };
    case FETCH_FLIGHT_PRICEVALIDATE_REQUEST:
      return {
        ...state,
        priceValidateLoading: true,
      };
    case FETCH_FLIGHT_PRICEVALIDATE_SUCCESS:
      return {
        ...state,
        priceValidateLoading: false,
        PriceValidate: action.payload,
      };
    case FETCH_FLIGHT_PRICEVALIDATE_FAILURE:
      return {
        ...state,
        priceValidateLoading: false,
        error: action.payload,
      };
    case FETCH_FLIGHT_SERVICE_TAX_REQUEST:
      return {
        ...state,
        flightServiceTaxLoading: true,
      };
    case FETCH_FLIGHT_SERVICE_TAX_SUCCESS:
      return {
        ...state,
        flightServiceTaxLoading: false,
        flightService: action.payload,
      };
    case FETCH_FLIGHT_SERVICE_TAX_FAILURE:
      return {
        ...state,
        flightServiceTaxLoading: false,
        error: action.payload,
      };
    case FETCH_FLIGHT_PRE_BOOK_REQUEST:
      return {
        ...state,
        flightPreBookLoading: true,
      };
    case FETCH_FLIGHT_PRE_BOOK_SUCCESS:
      return {
        ...state,
        flightPreBookLoading: false,
        flightPreBook: action.payload,
      };
    case FETCH_FLIGHT_PRE_BOOK_FAILURE:
      return {
        ...state,
        flightPreBookLoading: false,
        error: action.payload,
      };
    case FETCH_FLIGHT_BOOK_REQUEST:
      return {
        ...state,
        flightBookLoading: true,
      };
    case FETCH_FLIGHT_BOOK_SUCCESS:
      return {
        ...state,
        flightBookLoading: false,
        flightBook: action.payload,
      };
    case FETCH_FLIGHT_BOOK_FAILURE:
      return {
        ...state,
        flightBookLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
