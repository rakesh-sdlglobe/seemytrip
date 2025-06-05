import axios from "axios";
import { API_URL, } from "./authActions";

export const FETCH_CITY_HOTELS_REQUEST = 'FETCH_CITY_HOTELS_REQUEST';
export const FETCH_CITY_HOTELS_SUCCESS = 'FETCH_CITY_HOTELS_SUCCESS';
export const FETCH_CITY_HOTELS_FAILURE = 'FETCH_CITY_HOTELS_FAILURE';

export const fetchCityHotelsRequest = () => ({
    type : FETCH_CITY_HOTELS_REQUEST,
});

export const fetchCityHotelsSuccess = (hotels) => ({
    type : FETCH_CITY_HOTELS_SUCCESS,
    payload : hotels,
});

export const fetchCityHotelsFailure = (error) => ({
    type : FETCH_CITY_HOTELS_FAILURE,
    payload : error,
});


export const fetchCityHotels = () => async (dispatch) => {
    console.log("Fetching hotel cities from API");
    try {
        dispatch(fetchCityHotelsRequest());

        const response = await axios.post(`${API_URL}/hotels/getHotelCities` );
        console.log("Response from hotel cities API:", response.data);
        if(response.data) {
            dispatch(fetchCityHotelsSuccess(response.data));
        }else {
            dispatch(fetchCityHotelsFailure("No hotel cities found"));
        }
    }catch (error) {
        console.error("Error fetching hotel cities:", error);
        dispatch(fetchCityHotelsFailure(error.message));
    }
    
}