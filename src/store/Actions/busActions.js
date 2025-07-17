import axios from 'axios';


export const FETCH_BUS_CITY_LIST_REQUEST = 'FETCH_BUS_CITY_LIST_REQUEST';
export const FETCH_BUS_CITY_LIST_SUCCESS = 'FETCH_BUS_CITY_LIST_SUCCESS';
export const FETCH_BUS_CITY_LIST_FAILURE = 'FETCH_BUS_CITY_LIST_FAILURE';

export const FETCH_BUS_AUTH_REQUEST = 'FETCH_BUS_AUTH_REQUEST';
export const FETCH_BUS_AUTH_SUCCESS = 'FETCH_BUS_AUTH_SUCCESS';
export const FETCH_BUS_AUTH_FAILURE = 'FETCH_BUS_AUTH_FAILURE';




export const fetchBusAuthRequest = () => ({
    type: FETCH_BUS_AUTH_REQUEST,
});

export const fetchBusAuthSuccess = (authData) => ({
    type: FETCH_BUS_AUTH_SUCCESS,
    payload: authData,
});

export const fetchBusAuthFailure = (error) => ({
    type: FETCH_BUS_AUTH_FAILURE,
    payload: error,
});

export const getIPAddress = async () => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        console.log('Client IP Address:', data.ip);
        return data.ip; // returns the IP as a string
    } catch (error) {
        console.error('Error fetching client IP:', error);
        return null;
    }
};


export const fetchBusAuth = () => async (dispatch) => {

    const IpAddress = getIPAddress();
    console.log("Fetching bus auth from API");
    try {
        dispatch(fetchBusAuthRequest());

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/bus/authenticateBusAPI`,{
            IpAddress,
        });
        console.log("Response from bus auth API:", response.data);
        if (response.data) {
            dispatch(fetchBusAuthSuccess(response.data));
        } else {
            dispatch(fetchBusAuthFailure("No bus auth data found"));
        }
    } catch (error) {
        console.error("Error fetching bus auth:", error);
        dispatch(fetchBusAuthFailure(error.message));
    }

};











export const fetchBusCityListRequest = () => ({
    type: FETCH_BUS_CITY_LIST_REQUEST,
});

export const fetchBusCityListSuccess = (cityList) => ({
    type: FETCH_BUS_CITY_LIST_SUCCESS,
    payload: cityList,
});

export const fetchBusCityListFailure = (error) => ({
    type: FETCH_BUS_CITY_LIST_FAILURE,
    payload: error,
});

export const fetchBusCityList = (TokenId,IpAddress) => async (dispatch) => {
    console.log("Fetching bus city list from API");
    try {
        dispatch(fetchBusCityListRequest());

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/bus/getBusCityList`,{
            TokenId,IpAddress,
        });
        console.log("Response from bus city list API:", response.data);
        if (response.data) {
            dispatch(fetchBusCityListSuccess(response.data));
        } else {
            dispatch(fetchBusCityListFailure("No bus cities found"));
        }
    } catch (error) {
        console.error("Error fetching bus city list:", error);
        dispatch(fetchBusCityListFailure(error.message));
    }
}