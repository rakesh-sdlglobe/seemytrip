import axios from "axios";
import { API_URL } from "./authActions";

export const FETCH_FLIGHT_AIRPORTS_REQUEST = "FETCH_FLIGHT_AIRPORTS_REQUEST";
export const FETCH_FLIGHT_AIRPORTS_SUCCESS = "FETCH_FLIGHT_AIRPORTS_SUCCESS";
export const FETCH_FLIGHT_AIRPORTS_FAILURE = "FETCH_FLIGHT_AIRPORTS_FAILURE";

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
