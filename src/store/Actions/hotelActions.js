import axios from "axios";
import { API_URL } from "./authActions";

export const FETCH_CITY_HOTELS_REQUEST = "FETCH_CITY_HOTELS_REQUEST";
export const FETCH_CITY_HOTELS_SUCCESS = "FETCH_CITY_HOTELS_SUCCESS";
export const FETCH_CITY_HOTELS_FAILURE = "FETCH_CITY_HOTELS_FAILURE";
export const FETCH_HOTELS_LIST_REQUEST = "FETCH_HOTELS_LIST_REQUEST";
export const FETCH_HOTELS_LIST_SUCCESS = "FETCH_HOTELS_LIST_SUCCESS";
export const FETCH_HOTELS_LIST_FAILURE = "FETCH_HOTELS_LIST_FAILURE";
export const FETCH_HOTELS_LIST_PAGINATION_SUCCESS = "FETCH_HOTELS_LIST_PAGINATION_SUCCESS";
export const FETCH_HOTELS_IMAGES_REQUEST = "FETCH_HOTELS_IMAGES_REQUEST";
export const FETCH_HOTELS_IMAGES_SUCCESS = "FETCH_HOTELS_IMAGES_SUCCESS";
export const FETCH_HOTELS_IMAGES_FAILURE = "FETCH_HOTELS_IMAGES_FAILURE";
export const FETCH_HOTEL_DETAILS_REQUEST = "FETCH_HOTEL_DETAILS_REQUEST";
export const FETCH_HOTEL_DETAILS_SUCCESS = "FETCH_HOTEL_DETAILS_SUCCESS";
export const FETCH_HOTEL_DETAILS_FAILURE = "FETCH_HOTEL_DETAILS_FAILURE";
export const FETCH_HOTEL_PRICE_REQUEST = "FETCH_HOTEL_PRICE_REQUEST";
export const FETCH_HOTEL_PRICE_SUCCESS = "FETCH_HOTEL_PRICE_SUCCESS";
export const FETCH_HOTEL_PRICE_FAILURE = "FETCH_HOTEL_PRICE_FAILURE";
export const FETCH_HOTEL_SERVICETAX_REQUEST = "FETCH_HOTEL_SERVICETAX_REQUEST";
export const FETCH_HOTEL_SERVICETAX_SUCCESS = "FETCH_HOTEL_SERVICETAX_SUCCESS";
export const FETCH_HOTEL_SERVICETAX_FAILURE = "FETCH_HOTEL_SERVICETAX_FAILURE";
export const FETCH_HOTEL_PREBOOK_REQUEST = "FETCH_HOTEL_PREBOOK_REQUEST";
export const FETCH_HOTEL_PREBOOK_SUCCESS = "FETCH_HOTEL_PREBOOK_SUCCESS";
export const FETCH_HOTEL_PREBOOK_FAILURE = "FETCH_HOTEL_PREBOOK_FAILURE";
export const FETCH_HOTEL_PAYMENT_REQUEST = "FETCH_HOTEL_PAYMENT_REQUEST";
export const FETCH_HOTEL_PAYMENT_SUCCESS = "FETCH_HOTEL_PAYMENT_SUCCESS";
export const FETCH_HOTEL_PAYMENT_FAILURE = "FETCH_HOTEL_PAYMENT_FAILURE";
export const FETCH_HOTEL_BOOKED_REQUEST = "FETCH_HOTEL_BOOKED_REQUEST";
export const FETCH_HOTEL_BOOKED_SUCCESS = "FETCH_HOTEL_BOOKED_SUCCESS";
export const FETCH_HOTEL_BOOKED_FAILURE = "FETCH_HOTEL_BOOKED_FAILURE";
export const FETCH_HOTEL_BOOKEDDETAIL_REQUEST = "FETCH_HOTEL_BOOKEDDETAIL_REQUEST";
export const FETCH_HOTEL_BOOKEDDETAIL_SUCCESS = "FETCH_HOTEL_BOOKEDDETAIL_SUCCESS";
export const FETCH_HOTEL_BOOKEDDETAIL_FAILURE = "FETCH_HOTEL_BOOKEDDETAIL_FAILURE";
export const FETCH_HOTELS_GEOLIST_REQUEST = 'FETCH_HOTELS_GEOLIST_REQUEST';
export const FETCH_HOTELS_GEOLIST_SUCCESS = 'FETCH_HOTELS_GEOLIST_SUCCESS';
export const FETCH_HOTELS_GEOLIST_FAILURE = 'FETCH_HOTELS_GEOLIST_FAILURE';
export const CLEAR_HOTELS_GEOLIST = 'CLEAR_HOTELS_GEOLIST';

export const fetchCityHotelsRequest = () => ({
  type: FETCH_CITY_HOTELS_REQUEST,
});

export const fetchCityHotelsSuccess = (hotels) => ({
  type: FETCH_CITY_HOTELS_SUCCESS,
  payload: hotels,
});

export const fetchCityHotelsFailure = (error) => ({
  type: FETCH_CITY_HOTELS_FAILURE,
  payload: error,
});

export const fetchCityHotels = (hotelsearchtext) => async (dispatch) => {
  console.log("Fetching hotel cities from API");
  console.log("Hotel search text:", hotelsearchtext);
  try {
    dispatch(fetchCityHotelsRequest());

    const response = await axios.post(`${API_URL}/hotels/getHotelCities`, {
      input: hotelsearchtext,
    });
    console.log("Response from hotel cities API:", response.data);
    if (response.data) {
      dispatch(fetchCityHotelsSuccess(response.data));
    } else {
      dispatch(fetchCityHotelsFailure("No hotel cities found"));
    }
  } catch (error) {
    console.error("Error fetching hotel cities:", error);
    dispatch(fetchCityHotelsFailure(error.message));
  }
};

export const fetchHotelsListRequest = () => ({
  type: FETCH_HOTELS_LIST_REQUEST,
});

export const fetchHotelsListSuccess = (hotels) => ({
  type: FETCH_HOTELS_LIST_SUCCESS,
  payload: hotels,
});

export const fetchHotelsListPaginationSuccess = (hotels) => ({
  type: FETCH_HOTELS_LIST_PAGINATION_SUCCESS,
  payload: hotels,
});

export const fetchHotelsListFailure = (error) => ({
  type: FETCH_HOTELS_LIST_FAILURE,
  payload: error,
});

export const fetchHotelsList =
  (
    cityId,
    checkInDate,
    checkOutDate,
    Rooms,
    adults,
    children,
    PageNo,
    SessionID,
    Filter,
    Sort,
    isPagination = false
  ) =>
  async (dispatch) => {
    console.log("==============> Fetching hotels list from API");
    console.log("City ID:", cityId);
    console.log("Check-in Date:", checkInDate);
    console.log("Check-out Date:", checkOutDate);
    console.log("Rooms:", Rooms);
    console.log("Adults:", adults);
    console.log("Children:", children);
    console.log("Page No:", PageNo);
    console.log("Is Pagination:", isPagination);

    // Clear old geo list data when starting a new search (not pagination)
    if (!isPagination) {
      dispatch(clearHotelsGeoList());
    }

    try {
      dispatch(fetchHotelsListRequest());

      const response = await axios.post(`${API_URL}/hotels/getHotelsList`, {
        cityId,
        checkInDate,
        checkOutDate,
        "Rooms": Rooms,
        "PageNo": PageNo || 1,
        "SessionID": SessionID || null,
        "Filter": Filter || null,
        "Sort": Sort || { "SortBy": "StarRating", "SortOrder": "Desc" }
      });

      console.log("Response from hotels list API:", response.data);
      if (response.data && response.data !== null) {
        console.log(" *** Yeah , count for hotels is ", response.data.Hotels.length);
        
        // Debug: Log the full response structure to find SessionId
        console.log("Full API response structure:", JSON.stringify(response.data, null, 2));
        console.log("Response keys:", Object.keys(response.data));
        
        // Check for SessionId in different possible locations
        const sessionId = response.data.SessionId || 
                        response.data.SessionID || 
                        response.data.sessionId || 
                        response.data.sessionID ||
                        response.data.Session_Id ||
                        response.data.Session_ID;
        
        console.log("Found SessionId:", sessionId);
        
        // Store SessionId and search params in localStorage for later use (e.g., for geo list)
        if (sessionId) {
          const currentParams = JSON.parse(localStorage.getItem('hotelSearchParams') || '{}');
          const updatedParams = {
            ...currentParams,
            SessionId: sessionId
          };
          localStorage.setItem('hotelSearchParams', JSON.stringify(updatedParams));
          console.log("SessionId stored in localStorage:", sessionId);
          console.log("Updated hotelSearchParams:", updatedParams);
        } else {
          console.log("No SessionId found in API response");
        }
        
        if (isPagination) {
          dispatch(fetchHotelsListPaginationSuccess(response.data));
        } else {
          dispatch(fetchHotelsListSuccess(response.data));
        }
      } else {
        dispatch(
          fetchHotelsListFailure("No hotels found for the given criteria")
        );
      }
    } catch (error) {
      console.error("Error fetching hotels list:", error);
      dispatch(fetchHotelsListFailure(error.message));
    }
  };

export const fetchHotelsImagesRequest = () => ({
  type: FETCH_HOTELS_IMAGES_REQUEST,
});

export const fetchHotelsImagesSuccess = (images) => ({
  type: FETCH_HOTELS_IMAGES_SUCCESS,
  payload: images,
  error: null,
});

export const fetchHotelsImagesFailure = (error) => ({
  type: FETCH_HOTELS_IMAGES_FAILURE,
  payload: null,
  error: error,
});

export const fetchHotelsImages =
  (HotelProviderSearchId) => async (dispatch) => {
    try {
      dispatch(fetchHotelsImagesRequest());

      const response = await axios.post(`${API_URL}/hotels/getHotelImages`, {
        HotelProviderSearchId,
      });

      console.log("Response from hotels images API:", response.data);
      console.log("Gallery from hotels images API:", response.data.Gallery);

      if (response.data.Gallery && response.data.Gallery.length > 0) {
        dispatch(fetchHotelsImagesSuccess(response.data));
      } else {
        dispatch(fetchHotelsImagesFailure("No images found for the hotel"));
      }
    } catch (error) {
      console.error("Error fetching hotel images:", error);
      dispatch(fetchHotelsImagesFailure(error.message));
    }
  };

const fetchHotelDetailsRequest = () => ({
  type: FETCH_HOTEL_DETAILS_REQUEST,
});

const fetchHotelDetailsSuccess = (data) => ({
  type: FETCH_HOTEL_DETAILS_SUCCESS,
  payload: data,
});

const fetchHotelDetailsFailure = (error) => ({
  type: FETCH_HOTEL_DETAILS_FAILURE,
  payload: error,
});

export const fetchHotelDetails = (HotelId, searchParams) => {
  return async (dispatch) => {
    dispatch(fetchHotelDetailsRequest());
    try {
      const payload = {
        HotelId: HotelId,
        CityId: searchParams.cityId,
        CheckInDate: searchParams.checkInDate,
        CheckOutDate: searchParams.checkOutDate,
        Rooms: searchParams.Rooms || [],
      };

      console.log("Final Payload to API:", payload);

      const response = await axios.post(
        `${API_URL}/hotels/getHoteldetails`,
        payload
      );
      console.log("Data from fetchHotelDetails API:", response.data);
      dispatch(fetchHotelDetailsSuccess(response.data));
      return response.data;
    } catch (err) {
      dispatch(fetchHotelDetailsFailure(err.message || "Something went wrong"));
      throw err;
    }
  };
};

const fetchHotelPriceRequest = () => ({
  type: FETCH_HOTEL_PRICE_REQUEST,
});

const fetchHotelPriceSuccess = (data) => ({
  type: FETCH_HOTEL_PRICE_SUCCESS,
  payload: data,
});

const fetchHotelPriceFailure = (error) => ({
  type: FETCH_HOTEL_PRICE_FAILURE,
  payload: error,
});

export const fetchHotelPrice = (RequestPriceValidation) => {
  return async (dispatch) => {
    dispatch(fetchHotelPriceRequest());
    try {
      const payload = RequestPriceValidation;

      console.log("Final Payload to API:", payload);

      const response = await axios.post(
        `${API_URL}/hotels//getPriceValidation`,
        payload
      );
      console.log("Data from B2B/PriceValidation API:", response.data);
      dispatch(fetchHotelPriceSuccess(response.data));
      return response.data;
    } catch (err) {
      dispatch(fetchHotelPriceFailure(err.message || "Something went wrong"));
      throw err;
    }
  };
};

export const fetchHotelServiceTaxRequest = () => ({
  type: FETCH_HOTEL_SERVICETAX_REQUEST,
});
export const fetchHotelServiceTaxSuccess = (data) => ({
  type: FETCH_HOTEL_SERVICETAX_SUCCESS,
  payload: data,
});
export const fetchHotelServiceTaxFailure = (error) => ({
  type: FETCH_HOTEL_SERVICETAX_FAILURE,
  payload: error,
});
export const fetchHotelServiceTax = (ServiceTaxRequest) => {
  return async (dispatch) => {
    dispatch(fetchHotelServiceTaxRequest());
    try {
      const payload = ServiceTaxRequest;

      console.log("Final Payload to API for Service Tax:", payload);

      const response = await axios.post(
        `${API_URL}/hotels/getHotelServiceTax`,
        payload
      );
      console.log("Data from fetchHotelServiceTax API:", response.data);
      dispatch(fetchHotelServiceTaxSuccess(response.data));
      return response.data;
    } catch (err) {
      dispatch(
        fetchHotelServiceTaxFailure(err.message || "Something went wrong")
      );
      throw err;
    }
  };
};
export const fetchHotelPrebookRequest = () => ({
  type: FETCH_HOTEL_PREBOOK_REQUEST,
});
export const fetchHotelPrebookSuccess = (data) => ({
  type: FETCH_HOTEL_PREBOOK_SUCCESS,
  payload: data,
});
export const fetchHotelPrebookFailure = (error) => ({
  type: FETCH_HOTEL_PREBOOK_FAILURE,
  payload: error,
});
export const fetchHotelPrebook = (prebookRequest) => {
  return async (dispatch) => {
    dispatch(fetchHotelPrebookRequest());
    try {
      const payload = prebookRequest;

      console.log("Final Payload to API for Prebook:", payload);

      const response = await axios.post(
        `${API_URL}/hotels/getHotelPrebook`,
        payload
      );
      console.log("Data from fetchHotelPrebook API:", response.data);
      dispatch(fetchHotelPrebookSuccess(response.data));
      return response.data;
    } catch (err) {
      dispatch(fetchHotelPrebookFailure(err.message || "Something went wrong"));
      throw err;
    }
  };
};

export const fetchHotelPaymentRequest = () => ({
  type: FETCH_HOTEL_PAYMENT_REQUEST,
});

export const fetchHotelPaymentSuccess = (data) => ({
  type: FETCH_HOTEL_PAYMENT_SUCCESS,
  payload: data,
});

export const fetchHotelPaymentFailure = (error) => ({
  type: FETCH_HOTEL_PAYMENT_FAILURE,
  payload: error,
});

export const fetchHotelPayment = (paymentRequest) => {
  return async (dispatch) => {
    dispatch(fetchHotelPaymentRequest());
    try {
      const payload = paymentRequest;

      console.log("Final Payload to API for Payment:", payload);

      const response = await axios.post(
        `${API_URL}/hotels//processPayment`,
        payload
      );
      console.log("Data from fetchHotelPayment API:", response.data);
      dispatch(fetchHotelPaymentSuccess(response.data));
      return response.data;
    } catch (err) {
      dispatch(fetchHotelPaymentFailure(err.message || "Something went wrong"));
      throw err;
    }
  };
};

export const fetchHotelBookedRequest = () => ({
  type: FETCH_HOTEL_BOOKED_REQUEST,
});

export const fetchHotelBookedSuccess = (data) => ({
  type: FETCH_HOTEL_BOOKED_SUCCESS,
  payload: data,
});

export const fetchHotelBookedFailure = (error) => ({
  type: FETCH_HOTEL_BOOKED_FAILURE,
  payload: error,
});

export const fetchHotelBooked = (bookedRequest) => {
  return async (dispatch) => {
    dispatch(fetchHotelBookedRequest());
    try {
      const payload = bookedRequest;

      console.log("Final Payload to API for Booking:", payload);

      const response = await axios.post(
        `${API_URL}/hotels/getHotelBooked`,
        payload
      );
      console.log("Data from fetchHotelBooked API:", response.data);
      dispatch(fetchHotelBookedSuccess(response.data));
      return response.data;
    } catch (err) {
      dispatch(fetchHotelBookedFailure(err.message || "Something went wrong"));
      throw err;
    }
  };
};

export const fetchHotelBookedDetailRequest = () => ({
  type: FETCH_HOTEL_BOOKEDDETAIL_REQUEST,
});

export const fetchHotelBookedDetailSuccess = (data) => ({
  type: FETCH_HOTEL_BOOKEDDETAIL_SUCCESS,
  payload: data,
});

export const fetchHotelBookedDetailFailure = (error) => ({
  type: FETCH_HOTEL_BOOKEDDETAIL_FAILURE,
  payload: error,
});

export const fetchHotelBookedDetail = (bookedDetailRequest) => {
  return async (dispatch) => {
    dispatch(fetchHotelBookedDetailRequest());
    try {
      const payload = bookedDetailRequest;

      console.log("Final Payload to API for Booking Detail:", payload);

      const response = await axios.post(
        `${API_URL}/hotels/getHotelBookedDetails`,
        payload
      );
      console.log("Data from fetchHotelBookedDetail API:", response.data);
      dispatch(fetchHotelBookedDetailSuccess(response.data));
      return response.data;
    } catch (err) {
      dispatch(fetchHotelBookedDetailFailure(err.message || "Something went wrong"));
      throw err;
    }
  };
};


export const fetchHotelsGeoListRequest = () => ({ type: FETCH_HOTELS_GEOLIST_REQUEST });
export const fetchHotelsGeoListSuccess = (geoList) => ({
  type: FETCH_HOTELS_GEOLIST_SUCCESS,
  payload: geoList,
});
export const fetchHotelsGeoListFailure = (error) => ({
  type: FETCH_HOTELS_GEOLIST_FAILURE,
  payload: error,
});
export const clearHotelsGeoList = () => ({ type: CLEAR_HOTELS_GEOLIST });

export const fetchHotelsGeoList = (SessionId) => async (dispatch) => {
  console.log("fetchHotelsGeoList - Starting with SessionId:", SessionId);
  dispatch(fetchHotelsGeoListRequest());
  try {
    const payload = { SessionId };
    console.log("fetchHotelsGeoList - Sending payload to backend:", payload);
    
    const response = await axios.post(`${API_URL}/hotels/getGeoList`, payload);
    console.log("fetchHotelsGeoList - Backend response:", response.data);
    console.log("fetchHotelsGeoList - Response keys:", Object.keys(response.data || {}));
    
    if (response.data && response.data.GpsCoordinates) {
      console.log("fetchHotelsGeoList - Found GpsCoordinates:", response.data.GpsCoordinates);
      dispatch(fetchHotelsGeoListSuccess(response.data.GpsCoordinates));
      return response.data; // for local use in component
    } else {
      console.log("fetchHotelsGeoList - No GpsCoordinates found in response");
      dispatch(fetchHotelsGeoListFailure("No geo list found"));
      return null;
    }
  } catch (error) {
    console.error("fetchHotelsGeoList - Error:", error.message);
    console.error("fetchHotelsGeoList - Error response:", error.response?.data);
    dispatch(fetchHotelsGeoListFailure(error.message));
    return null;
  }
};
