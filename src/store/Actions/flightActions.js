import axios from "axios";
import { API_URL } from "./authActions";

export const FETCH_FLIGHT_AIRPORTS_REQUEST = "FETCH_FLIGHT_AIRPORTS_REQUEST";
export const FETCH_FLIGHT_AIRPORTS_SUCCESS = "FETCH_FLIGHT_AIRPORTS_SUCCESS";
export const FETCH_FLIGHT_AIRPORTS_FAILURE = "FETCH_FLIGHT_AIRPORTS_FAILURE";
export const FETCH_FLIGHT_RESULTS_REQUEST = "FETCH_FLIGHT_RESULTS_REQUEST";
export const FETCH_FLIGHT_RESULTS_SUCCESS = "FETCH_FLIGHT_RESULTS_SUCCESS";
export const FETCH_FLIGHT_LIST_PAGINATION_SUCCESS =
  "FETCH_FLIGHT_LIST_PAGINATION_SUCCESS";
export const FETCH_FLIGHT_RESULTS_FAILURE = "FETCH_FLIGHT_RESULTS_FAILURE";
export const FETCH_FLIGHT_FARE_RULE_REQUEST = "FETCH_FLIGHT_FARE_RULE_REQUEST";
export const FETCH_FLIGHT_FARE_RULE_SUCCESS = "FETCH_FLIGHT_FARE_RULE_SUCCESS";
export const FETCH_FLIGHT_FARE_RULE_FAILURE = "FETCH_FLIGHT_FARE_RULE_FAILURE";
export const FETCH_FLIGHT_SERVICE_TAX_REQUEST =
  "FETCH_FLIGHT_SERVICE_TAX_REQUEST";
export const FETCH_FLIGHT_SERVICE_TAX_SUCCESS =
  "FETCH_FLIGHT_SERVICE_TAX_SUCCESS";
export const FETCH_FLIGHT_SERVICE_TAX_FAILURE =
  "FETCH_FLIGHT_SERVICE_TAX_FAILURE";
export const FETCH_FLIGHT_PRICEVALIDATE_REQUEST =
  "FETCH_FLIGHT_PRICEVALIDATE_REQUEST";
export const FETCH_FLIGHT_PRICEVALIDATE_SUCCESS =
  "FETCH_FLIGHT_PRICEVALIDATE_SUCCESS";
export const FETCH_FLIGHT_PRICEVALIDATE_FAILURE =
  "FETCH_FLIGHT_PRICEVALIDATE_FAILURE";
export const FETCH_FLIGHT_PRE_BOOK_REQUEST = "FETCH_FLIGHT_PRE_BOOK_REQUEST";
export const FETCH_FLIGHT_PRE_BOOK_SUCCESS = "FETCH_FLIGHT_PRE_BOOK_SUCCESS";
export const FETCH_FLIGHT_PRE_BOOK_FAILURE = "FETCH_FLIGHT_PRE_BOOK_FAILURE";
export const FETCH_FLIGHT_BOOK_REQUEST = "FETCH_FLIGHT_BOOK_REQUEST";
export const FETCH_FLIGHT_BOOK_SUCCESS = "FETCH_FLIGHT_BOOK_SUCCESS";
export const FETCH_FLIGHT_BOOK_FAILURE = "FETCH_FLIGHT_BOOK_FAILURE";
export const FETCH_FLIGHT_BOOKDETAILS_REQUEST =
  "FETCH_FLIGHT_BOOKDETAILS_REQUEST";
export const FETCH_FLIGHT_BOOKDETAILS_SUCCESS =
  "FETCH_FLIGHT_BOOKDETAILS_SUCCESS";
export const FETCH_FLIGHT_BOOKDETAILS_FAILURE =
  "FETCH_FLIGHT_BOOKDETAILS_FAILURE";

export const fetchFlightsAirportRequest = () => ({
  type: FETCH_FLIGHT_AIRPORTS_REQUEST,
});

export const fetchFlightsAirportSuccess = (data) => ({
  type: FETCH_FLIGHT_AIRPORTS_SUCCESS,
  payload: data,
});

export const fetchFlightsAirportFailure = (error) => ({
  type: FETCH_FLIGHT_AIRPORTS_FAILURE,
  payload: error,
});

export const fetchFlightsAirport = (searchtext) => async (dispatch) => {
  console.log("Fetching Airport from API");
  console.log("Airport search text:", searchtext);
  try {
    dispatch(fetchFlightsAirportRequest());

    const response = await axios.post(`${API_URL}/flights/getFlightsAirports`, {
      input: searchtext,
    });
    console.log("Response from airport API:", response.data);
    if (response.data) {
      dispatch(fetchFlightsAirportSuccess(response.data));
    } else {
      dispatch(fetchFlightsAirportFailure("No airport found"));
    }
  } catch (error) {
    console.error("Error fetching airport:", error);
    dispatch(fetchFlightsAirportFailure(error.message));
  }
};

const fetchFlightsResultsRequest = () => ({
  type: FETCH_FLIGHT_RESULTS_REQUEST,
});

const fetchFlightsResultsSuccess = (data) => ({
  type: FETCH_FLIGHT_RESULTS_SUCCESS,
  payload: data,
});
export const fetchFlightsListPaginationSuccess = (data) => ({
  type: FETCH_FLIGHT_LIST_PAGINATION_SUCCESS,
  payload: data,
});
const fetchFlightsResultsFailure = (error) => ({
  type: FETCH_FLIGHT_RESULTS_FAILURE,
  payload: error,
});

export const fetchFlightsResultsList = (searchrequest) => {
  return async (dispatch) => {
    dispatch(fetchFlightsResultsRequest());
    try {
      const payload = searchrequest;

      console.log("Final Payload to API:", payload);

      const response = await axios.post(
        `${API_URL}/flights/getFlightsList`,
        payload
      );
      console.log("Data from fetchFlightsResultsList API:", response.data);
      if (payload.isPagination) {
        dispatch(fetchFlightsListPaginationSuccess(response.data));
      } else {
        dispatch(fetchFlightsResultsSuccess(response.data));
      }

      return response.data;
    } catch (err) {
      dispatch(
        fetchFlightsResultsFailure(err.message || "Something went wrong")
      );
      throw err;
    }
  };
};

export const fetchFlightFareRuleRequest = () => ({
  type: FETCH_FLIGHT_FARE_RULE_REQUEST,
});

export const fetchFlightFareRuleSuccess = (data) => ({
  type: FETCH_FLIGHT_FARE_RULE_SUCCESS,
  payload: data,
});

export const fetchFlightFareRuleFailure = (error) => ({
  type: FETCH_FLIGHT_FARE_RULE_FAILURE,
  payload: error,
});

export const fetchFlightFareRule = (farerulerequest) => {
  return async (dispatch) => {
    dispatch(fetchFlightFareRuleRequest());
    try {
      const payload = farerulerequest;

      console.log("Final Payload to API:", payload);

      const response = await axios.post(
        `${API_URL}/flights/getFlightFareRule`,
        payload
      );
      console.log("Data from fetchFlightFareRule API:", response.data);

      dispatch(fetchFlightFareRuleSuccess(response.data));

      return response.data;
    } catch (err) {
      dispatch(
        fetchFlightFareRuleFailure(err.message || "Something went wrong")
      );
      throw err;
    }
  };
};

export const fetchFlightPriceValidateRequest = () => ({
  type: FETCH_FLIGHT_PRICEVALIDATE_REQUEST,
});

export const fetchFlightPriceValidateSuccess = (data) => ({
  type: FETCH_FLIGHT_PRICEVALIDATE_SUCCESS,
  payload: data,
});

export const fetchFlightPriceValidateFailure = (error) => ({
  type: FETCH_FLIGHT_PRICEVALIDATE_FAILURE,
  payload: error,
});

export const fetchFlightsPriceValidate = (searchrequest) => {
  return async (dispatch) => {
    dispatch(fetchFlightPriceValidateRequest());
    try {
      const payload = searchrequest;

      console.log("Final Payload to API:", payload);

      const response = await axios.post(
        `${API_URL}/flights/getFlightPriceValidate`,
        payload
      );
      console.log("Data from fetchFlightsPriceValidate API:", response.data);

      dispatch(fetchFlightPriceValidateSuccess(response.data));

      return response.data;
    } catch (err) {
      dispatch(
        fetchFlightPriceValidateFailure(err.message || "Something went wrong")
      );
      throw err;
    }
  };
};

export const fetchFlightServiceTaxRequest = () => ({
  type: FETCH_FLIGHT_SERVICE_TAX_REQUEST,
});

export const fetchFlightServiceTaxSuccess = (data) => ({
  type: FETCH_FLIGHT_SERVICE_TAX_SUCCESS,
  payload: data,
});

export const fetchFlightServiceTaxFailure = (error) => ({
  type: FETCH_FLIGHT_SERVICE_TAX_FAILURE,
  payload: error,
});

export const fetchFlightServiceTax = (servicetaxrequest) => {
  return async (dispatch) => {
    dispatch(fetchFlightServiceTaxRequest());
    try {
      const payload = servicetaxrequest;

      console.log("Final Payload to API:", payload);

      const response = await axios.post(
        `${API_URL}/flights/getFlightServiceTax`,
        payload
      );
      console.log("Data from fetchFlightServiceTax API:", response.data);

      dispatch(fetchFlightServiceTaxSuccess(response.data));

      return response.data;
    } catch (err) {
      dispatch(
        fetchFlightServiceTaxFailure(err.message || "Something went wrong")
      );
      throw err;
    }
  };
};

export const fetchFlightPreBookRequest = () => ({
  type: FETCH_FLIGHT_PRE_BOOK_REQUEST,
});

export const fetchFlightPreBookSuccess = (data) => ({
  type: FETCH_FLIGHT_PRE_BOOK_SUCCESS,
  payload: data,
});

export const fetchFlightPreBookFailure = (error) => ({
  type: FETCH_FLIGHT_PRE_BOOK_FAILURE,
  payload: error,
});

export const fetchFlightPreBook = (prebookrequest) => {
  return async (dispatch) => {
    dispatch(fetchFlightPreBookRequest());
    try {
      const payload = prebookrequest;
      console.log("Final Payload to API:", payload);

      const response = await axios.post(
        `${API_URL}/flights/getFlightPreBook`,
        payload
      );
      console.log("Data from fetchFlightPreBook API:", response.data);
      dispatch(fetchFlightPreBookSuccess(response.data));
      return response.data;
    } catch (err) {
      dispatch(
        fetchFlightPreBookFailure(err.message || "Something went wrong")
      );
      throw err;
    }
  };
};

export const fetchFlightBookRequest = () => ({
  type: FETCH_FLIGHT_BOOK_REQUEST,
});

export const fetchFlightBookSuccess = (data) => ({
  type: FETCH_FLIGHT_BOOK_SUCCESS,
  payload: data,
});
export const fetchFlightBookFailure = (error) => ({
  type: FETCH_FLIGHT_BOOK_FAILURE,
  payload: error,
});

export const fetchFlightBook = (bookrequest) => {
  return async (dispatch) => {
    dispatch(fetchFlightBookRequest());
    try {
      const payload = bookrequest;
      console.log("Final Payload to API:", payload);

      const response = await axios.post(
        `${API_URL}/flights/getFlightBook`,
        payload
      );
      console.log("Data from fetchFlightBook API:", response.data);
      dispatch(fetchFlightBookSuccess(response.data));
      return response.data;
    } catch (err) {
      dispatch(fetchFlightBookFailure(err.message || "Something went wrong"));
      throw err;
    }
  };
};

export const fetchFlightBookDetailsRequest = () => ({
  type: FETCH_FLIGHT_BOOKDETAILS_REQUEST,
});

export const fetchFlightBookDetailsSuccess = (data) => ({
  type: FETCH_FLIGHT_BOOKDETAILS_SUCCESS,
  payload: data,
});

export const fetchFlightBookDetailsFailure = (error) => ({
  type: FETCH_FLIGHT_BOOKDETAILS_FAILURE,
  payload: error,
});

export const fetchFlightBookDetails = (bookdetailsrequest) => {
  return async (dispatch) => {
    dispatch(fetchFlightBookDetailsRequest());
    try {
      const payload = bookdetailsrequest;
      console.log("Final Payload to API:", payload);
      const response = await axios.post(
        `${API_URL}/flights/getFlightBookDetails`,
        payload
      );
      console.log("Data from fetchFlightBookDetails API:", response.data);
      dispatch(fetchFlightBookDetailsSuccess(response.data));
      return response.data;
    } catch (err) {
      dispatch(
        fetchFlightBookDetailsFailure(err.message || "Something went wrong")
      );
      throw err;
    }
  };
};
