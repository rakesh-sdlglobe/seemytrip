// actions/stationActions.js
import axios from "axios";
import { API_URL, } from "./authActions";

// Action Types
export const FETCH_STATIONS_REQUEST = 'FETCH_STATIONS_REQUEST';
export const FETCH_STATIONS_SUCCESS = 'FETCH_STATIONS_SUCCESS';
export const FETCH_STATIONS_FAILURE = 'FETCH_STATIONS_FAILURE';
export const FETCH_TRAINS_REQUEST = 'FETCH_TRAINS_REQUEST';
export const FETCH_TRAINS_SUCCESS = 'FETCH_TRAINS_SUCCESS';
export const FETCH_TRAINS_FAILURE = 'FETCH_TRAINS_FAILURE';
export const FETCH_TRAINS_SEARCH_PARAMS = 'FETCH_TRAINS_SEARCH_PARAMS';
export const FETCH_TRAINS_FARE_REQUEST = 'FETCH_TRAINS_FARE_REQUEST'
export const FETCH_TRAINS_FARE_SUCCESS = 'FETCH_TRAINS_FARE_SUCCESS'
export const FETCH_TRAINS_FARE_FAILURE = 'FETCH_TRAINS_FARE_FAILURE'
export const FETCH_TRAINS_SCHEDULE_REQUEST = 'FETCH_TRAINS_SCHEDULE_REQUEST'
export const FETCH_TRAINS_SCHEDULE_SUCCESS = 'FETCH_TRAINS_SCHEDULE_SUCCESS'
export const FETCH_TRAINS_SCHEDULE_FAILURE = 'FETCH_TRAINS_SCHEDULE_FAILURE'

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
  localStorage.setItem('loading',true);
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
    dispatch(fetchTrainsSuccess(data?.trainBtwnStnsList));
    localStorage.setItem('loading',false);

  } catch (error) {
    console.error(error);
    dispatch(fetchTrainsFailure(error.message));
    localStorage.setItem('loading',false);

  }
};



export const fetchTrainsFareEnqRequest = () => ({
  type: FETCH_TRAINS_FARE_REQUEST,
});

export const fetchTrainsFareEnqSuccess = (trainsFare) => ({
  type: FETCH_TRAINS_FARE_SUCCESS,
  payload: trainsFare,
});

export const fetchTrainsFareEnqFailure = (error) => ({
  type: FETCH_TRAINS_FARE_FAILURE,
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

export const fetchTrainsScheduleRequest = () => ({
  type: FETCH_TRAINS_SCHEDULE_REQUEST,
});

export const fetchTrainsScheduleSuccess = (trainSchedule) => ({
  type: FETCH_TRAINS_SCHEDULE_SUCCESS,
  payload: trainSchedule,
});

export const fetchTrainsScheduleFailure = (error) => ({
  type: FETCH_TRAINS_SCHEDULE_FAILURE,
  payload: error,
});


export const fetchTrainSchedule = (trainNumber) => async (dispatch) => {
  console.log("calling fetch trains 161 from filter actions", trainNumber)
  dispatch(fetchTrainsScheduleRequest());
  try {
    const response = await axios.get(`${API_URL}/trains/getTrainSchedule/${trainNumber}`);
    if(response.data && response.data?.stationList){
      dispatch(fetchTrainsScheduleSuccess(response.data))
    }
  } catch (error) {
    console.error("Error fetching train schedule:", error.message);
    dispatch(fetchTrainsScheduleFailure(error.message));
  }
};