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
        `http://localhost:3002/api/flights/getFlightsList`,
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
