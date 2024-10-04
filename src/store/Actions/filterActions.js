// actions/stationActions.js

// Action Types
export const FETCH_STATIONS_REQUEST = 'FETCH_STATIONS_REQUEST';
export const FETCH_STATIONS_SUCCESS = 'FETCH_STATIONS_SUCCESS';
export const FETCH_STATIONS_FAILURE = 'FETCH_STATIONS_FAILURE';
export const FETCH_TRAINS_REQUEST = 'FETCH_TRAINS_REQUEST';
export const FETCH_TRAINS_SUCCESS = 'FETCH_TRAINS_SUCCESS';
export const FETCH_TRAINS_FAILURE = 'FETCH_TRAINS_FAILURE';

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
    const response = await fetch('https://tripadmin.onrender.com/api/trains/getStation');
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

// Thunk action to fetch trains based on selected stations
export const fetchTrains = (stationId, journeyDate) => async (dispatch) => {
  dispatch(fetchTrainsRequest());
  try {
    const response = await fetch('https://tripadmin.onrender.com/api/trains/getTrains', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ stationId, date: journeyDate }),
    });
    const data = await response.json();  
    
    dispatch(fetchTrainsSuccess(data));
  } catch (error) {
    dispatch(fetchTrainsFailure(error.toString()));
  }
};

