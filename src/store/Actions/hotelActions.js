import axios from "axios";
import { API_URL, } from "./authActions";

export const FETCH_CITY_HOTELS_REQUEST = 'FETCH_CITY_HOTELS_REQUEST';
export const FETCH_CITY_HOTELS_SUCCESS = 'FETCH_CITY_HOTELS_SUCCESS';
export const FETCH_CITY_HOTELS_FAILURE = 'FETCH_CITY_HOTELS_FAILURE';
export const FETCH_HOTELS_LIST_REQUEST = 'FETCH_HOTELS_LIST_REQUEST';
export const FETCH_HOTELS_LIST_SUCCESS = 'FETCH_HOTELS_LIST_SUCCESS';
export const FETCH_HOTELS_LIST_FAILURE = 'FETCH_HOTELS_LIST_FAILURE';
export const FETCH_HOTELS_IMAGES_REQUEST = 'FETCH_HOTELS_IMAGES_REQUEST';
export const FETCH_HOTELS_IMAGES_SUCCESS = 'FETCH_HOTELS_IMAGES_SUCCESS';
export const FETCH_HOTELS_IMAGES_FAILURE = 'FETCH_HOTELS_IMAGES_FAILURE';
export const FETCH_HOTEL_DETAILS_REQUEST = 'FETCH_HOTEL_DETAILS_REQUEST'
export const FETCH_HOTEL_DETAILS_SUCCESS = 'FETCH_HOTEL_DETAILS_SUCCESS'
export const FETCH_HOTEL_DETAILS_FAILURE = 'FETCH_HOTEL_DETAILS_FAILURE'

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



export const fetchCityHotels = (hotelsearchtext) => async (dispatch) => {
    console.log("Fetching hotel cities from API");
    console.log("Hotel search text:", hotelsearchtext);
    try {
        dispatch(fetchCityHotelsRequest());

        const response = await axios.post(`${API_URL}/hotels/getHotelCities`,{"input" : hotelsearchtext} );
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



export const fetchHotelsListRequest = () => ({
    type : FETCH_HOTELS_LIST_REQUEST,
});

export const fetchHotelsListSuccess = (hotels) => ({
    type : FETCH_HOTELS_LIST_SUCCESS,
    payload : hotels,
});

export const fetchHotelsListFailure = (error) => ({
    type : FETCH_HOTELS_LIST_FAILURE,
    payload : error,
});



export const fetchHotelsList = (cityId, checkInDate, checkOutDate, Rooms, adults, children) => async (dispatch) => {
    console.log("==============> Fetching hotels list from API");
    console.log("City ID:", cityId);
    console.log("Check-in Date:", checkInDate);
    console.log("Check-out Date:", checkOutDate);
    console.log("Rooms:", Rooms);
    console.log("Adults:", adults);
    console.log("Children:", children);

    try {
        dispatch(fetchHotelsListRequest());

        const response = await axios.post(`${API_URL}/hotels/getHotelsList`, {
            cityId,
            checkInDate,
            checkOutDate,
            "Rooms" : [{
                "RoomNo": Rooms,
                "Adults" : adults,
                "Children" : children
            }]
        });

        console.log("Response from hotels list API:", response.data);
        if(response.data.Hotels.length > 0) {
            console.log(" *** Yeah , count for hotels is ",response.data.Hotels.length);
            dispatch(fetchHotelsListSuccess(response.data.Hotels));
        } else {
            dispatch(fetchHotelsListFailure("No hotels found for the given criteria"));
        }
    } catch (error) {
        console.error("Error fetching hotels list:", error);
        dispatch(fetchHotelsListFailure(error.message));
    }
}

export const fetchHotelsImagesRequest = () => ({
    type : FETCH_HOTELS_IMAGES_REQUEST,
});

export const fetchHotelsImagesSuccess = (images) => ({
    type : FETCH_HOTELS_IMAGES_SUCCESS,
    payload : images,
    error : null,
});

export const fetchHotelsImagesFailure = (error) => ({
    type : FETCH_HOTELS_IMAGES_FAILURE,
    payload : null,
    error : error,
});


export const fetchHotelsImages = (HotelProviderSearchId) => async (dispatch) => {
    try {
        dispatch(fetchHotelsImagesRequest());

        const response = await axios.post(`${API_URL}/hotels/getHotelImages`, { HotelProviderSearchId });

        console.log("Response from hotels images API:", response.data);

        if(response.data.Gallery && response.data.Gallery.length > 0) {
            dispatch(fetchHotelsImagesSuccess(response.data?.Gallery));
        } else {
            dispatch(fetchHotelsImagesFailure("No images found for the hotel"));
        }
    } catch (error) {
        console.error("Error fetching hotel images:", error);
        dispatch(fetchHotelsImagesFailure(error.message));
    }
}

const fetchHotelDetailsRequest = () => ({
  type: FETCH_HOTEL_DETAILS_REQUEST,
})

const fetchHotelDetailsSuccess = (data) => ({
  type: FETCH_HOTEL_DETAILS_SUCCESS,
  payload: data,
})

const fetchHotelDetailsFailure = (error) => ({
  type: FETCH_HOTEL_DETAILS_FAILURE,
  payload: error,
})

export const fetchHotelDetails = (searchId) => {
  return async (dispatch) => {
    dispatch(fetchHotelDetailsRequest())
    try {
      const response = await axios.post(
        'http://localhost:3002/api/hotels/getHoteldetails',
        { HotelProviderSearchId: searchId }
      )
      dispatch(fetchHotelDetailsSuccess(response.data))
      return response.data

    } catch (err) {
      dispatch(fetchHotelDetailsFailure(err.message || 'Something went wrong'))
      throw err
    }
  }
}