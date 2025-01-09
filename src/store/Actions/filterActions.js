// actions/stationActions.js
import { API_URL, } from "./authActions";

// Action Types
export const FETCH_STATIONS_REQUEST = 'FETCH_STATIONS_REQUEST';
export const FETCH_STATIONS_SUCCESS = 'FETCH_STATIONS_SUCCESS';
export const FETCH_STATIONS_FAILURE = 'FETCH_STATIONS_FAILURE';
export const FETCH_TRAINS_REQUEST = 'FETCH_TRAINS_REQUEST';
export const FETCH_TRAINS_SUCCESS = 'FETCH_TRAINS_SUCCESS';
export const FETCH_TRAINS_FAILURE = 'FETCH_TRAINS_FAILURE';
export const FETCH_TRAINS_SEARCH_PARAMS = 'FETCH_TRAINS_SEARCH_PARAMS';

// Action Creators
export const fetchStationsRequest = () => ({
  type: FETCH_STATIONS_REQUEST,
});

export const fetchStationsSuccess = (stations) => ({
  type: FETCH_STATIONS_SUCCESS,
  payload: stations,
});

export const fetchStationsFailure = (error) => ({
  type: FETCH_STATIONS_FAILURE,
  payload: error,
});

// Thunk action to fetch stations
export const fetchStations = () => async (dispatch) => {
  dispatch(fetchStationsRequest());
  try {
    const response = await fetch(`${API_URL}/trains/getStation`);
    const data = await response.json();
    console.log(data);
    console.log(`Station Data: ${data}`);
    dispatch(fetchStationsSuccess(data.stations));
  } catch (error) {
    dispatch(fetchStationsFailure(error.toString()));
  }
};


export const fetchTrainsRequest = () => ({
  type: FETCH_TRAINS_REQUEST,
});

export const fetchTrainsSuccess = (trains) => ({
  type: FETCH_TRAINS_SUCCESS,
  payload: trains,
});

export const fetchTrainsFailure = (error) => ({
  type: FETCH_TRAINS_FAILURE,
  payload: error,
});

export const fetchTrainsSearchParams = (searchParams) => ({
  type: FETCH_TRAINS_SEARCH_PARAMS,
  payload: searchParams,
});

// Thunk action to fetch trains based on selected stations

export const fetchTrains = (fromStnCode, toStnCode, journeyDate) => async (dispatch) => {
  dispatch(fetchTrainsRequest());
  try {
    const response = await fetch(`${API_URL}/trains/getTrains`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fromStnCode,
        toStnCode,
        journeyDate,
      }),
    });

    const data = await response.json();
    console.log('Request Params:', { fromStnCode, toStnCode, journeyDate });
    console.log('Response Data:', data);
    localStorage.setItem('trains', (data?.trainBtwnStnsList) ?  JSON.stringify(data?.trainBtwnStnsList) : []);
    setTimeout(() => dispatch(fetchTrainsSuccess(data?.trainBtwnStnsList)), 3500);

  } catch (error) {
    console.error(error);
    setTimeout(() => dispatch(fetchTrainsFailure(error.message)), 1500);
  }
};



export const fetchTrainsFareEnqRequest = () => ({
  type: FETCH_TRAINS_REQUEST,
});

export const fetchTrainsFareEnqSuccess = (trainsFare) => ({
  type: FETCH_TRAINS_SUCCESS,
  payload: trainsFare,
});

export const fetchTrainsFareEnqFailure = (error) => ({
  type: FETCH_TRAINS_FAILURE,
  payload: error,
});

// Thunk action to fetch trains fare enquiry
export const fetchTrainsFareEnquiry = (trainNo, fromStnCode, toStnCode, journeyDate, jClass, jQuota, paymentEnqFlag ) => async (dispatch) => { 
  const authToken = localStorage.authToken;
  dispatch(fetchTrainsFareEnqRequest());
  try {
    const response = await fetch(`${API_URL}/trains/getTrains/avlFareEnquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        trainNo,
        fromStnCode,
        toStnCode,
        journeyDate,
        jClass, 
        jQuota, 
        paymentEnqFlag,
      }),
    });

    const data = await response.json();
    console.log('Request Params:', { fromStnCode, toStnCode, journeyDate });
    console.log('Response Data:', data);
    dispatch(fetchTrainsSuccess(data?.trainBtwnStnsList));
  } catch (error) {
    console.error(error);
    dispatch(fetchTrainsFailure(error.message));
  }
}

