import axios from "axios";
import { API_URL, } from "./authActions";

export const FETCH_CITY_HOTELS_REQUEST = 'FETCH_CITY_HOTELS_REQUEST';
export const FETCH_CITY_HOTELS_SUCCESS = 'FETCH_CITY_HOTELS_SUCCESS';
export const FETCH_CITY_HOTELS_FAILURE = 'FETCH_CITY_HOTELS_FAILURE';
export const FETCH_HOTELS_LIST_REQUEST = 'FETCH_HOTELS_LIST_REQUEST';
export const FETCH_HOTELS_LIST_SUCCESS = 'FETCH_HOTELS_LIST_SUCCESS';
export const FETCH_HOTELS_LIST_FAILURE = 'FETCH_HOTELS_LIST_FAILURE';
export const FETCH_HOTELS_LIST_PAGINATION_SUCCESS = 'FETCH_HOTELS_LIST_PAGINATION_SUCCESS';
export const FETCH_HOTELS_IMAGES_REQUEST = 'FETCH_HOTELS_IMAGES_REQUEST';
export const FETCH_HOTELS_IMAGES_SUCCESS = 'FETCH_HOTELS_IMAGES_SUCCESS';
export const FETCH_HOTELS_IMAGES_FAILURE = 'FETCH_HOTELS_IMAGES_FAILURE';
export const FETCH_HOTEL_DETAILS_REQUEST = 'FETCH_HOTEL_DETAILS_REQUEST';
export const FETCH_HOTEL_DETAILS_SUCCESS = 'FETCH_HOTEL_DETAILS_SUCCESS';
export const FETCH_HOTEL_DETAILS_FAILURE = 'FETCH_HOTEL_DETAILS_FAILURE';
export const FETCH_HOTEL_PRICE_REQUEST = 'FETCH_HOTEL_PRICE_REQUEST';
export const FETCH_HOTEL_PRICE_SUCCESS = 'FETCH_HOTEL_PRICE_SUCCESS';
export const FETCH_HOTEL_PRICE_FAILURE = 'FETCH_HOTEL_PRICE_FAILURE';
export const FETCH_HOTEL_SERVICETAX_REQUEST = 'FETCH_HOTEL_SERVICETAX_REQUEST';
export const FETCH_HOTEL_SERVICETAX_SUCCESS = 'FETCH_HOTEL_SERVICETAX_SUCCESS';
export const FETCH_HOTEL_SERVICETAX_FAILURE = 'FETCH_HOTEL_SERVICETAX_FAILURE';
export const FETCH_HOTEL_PREBOOK_REQUEST = 'FETCH_HOTEL_PREBOOK_REQUEST';
export const FETCH_HOTEL_PREBOOK_SUCCESS = 'FETCH_HOTEL_PREBOOK_SUCCESS';
export const FETCH_HOTEL_PREBOOK_FAILURE = 'FETCH_HOTEL_PREBOOK_FAILURE';



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

        const response = await axios.post(`${API_URL}/hotels/getHotelCities`, { "input": hotelsearchtext });
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

}



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



export const fetchHotelsList = (cityId, checkInDate, checkOutDate, Rooms, adults, children, PageNo, SessionID, Filter, Sort, isPagination = false) => async (dispatch) => {
    console.log("==============> Fetching hotels list from API");
    console.log("City ID:", cityId);
    console.log("Check-in Date:", checkInDate);
    console.log("Check-out Date:", checkOutDate);
    console.log("Rooms:", Rooms);
    console.log("Adults:", adults);
    console.log("Children:", children);
    console.log("Page No:", PageNo);
    console.log("Is Pagination:", isPagination);

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
            if (isPagination) {
                dispatch(fetchHotelsListPaginationSuccess(response.data));
            } else {
                dispatch(fetchHotelsListSuccess(response.data));
            }
        } else {
            dispatch(fetchHotelsListFailure("No hotels found for the given criteria"));
        }
    } catch (error) {
        console.error("Error fetching hotels list:", error);
        dispatch(fetchHotelsListFailure(error.message));
    }
}

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


export const fetchHotelsImages = (HotelProviderSearchId) => async (dispatch) => {
    try {
        dispatch(fetchHotelsImagesRequest());

        const response = await axios.post(`${API_URL}/hotels/getHotelImages`, { HotelProviderSearchId });

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

export const fetchHotelDetails = (HotelId, searchParams) => {
    return async (dispatch) => {
        dispatch(fetchHotelDetailsRequest())
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
                `http://localhost:3002/api/hotels/getHoteldetails`,
                payload
            );
            console.log("Data from fetchHotelDetails API:", response.data);
            dispatch(fetchHotelDetailsSuccess(response.data))
            return response.data

        } catch (err) {
            dispatch(fetchHotelDetailsFailure(err.message || 'Something went wrong'))
            throw err
        }
    }
}


const fetchHotelPriceRequest = () => ({
    type: FETCH_HOTEL_PRICE_REQUEST,
})

const fetchHotelPriceSuccess = (data) => ({
    type: FETCH_HOTEL_PRICE_SUCCESS,
    payload: data,
})

const fetchHotelPriceFailure = (error) => ({
    type: FETCH_HOTEL_PRICE_FAILURE,
    payload: error,
})

export const fetchHotelPrice = (RequestPriceValidation) => {
    return async (dispatch) => {
        dispatch(fetchHotelPriceRequest())
        try {
            const payload = RequestPriceValidation;

            console.log("Final Payload to API:", payload);

            const response = await axios.post(
                `http://localhost:3002/api/hotels/getPriceValidation`,
                payload
            );
            console.log("Data from B2B/PriceValidation API:", response.data);
            dispatch(fetchHotelPriceSuccess(response.data))
            return response.data

        } catch (err) {
            dispatch(fetchHotelPriceFailure(err.message || 'Something went wrong'))
            throw err
        }
    }
}

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
                `http://localhost:3002/api/hotels/getHotelServiceTax`,
                payload
            );
            console.log("Data from fetchHotelServiceTax API:", response.data);
            dispatch(fetchHotelServiceTaxSuccess(response.data));
            return response.data;

        } catch (err) {
            dispatch(fetchHotelServiceTaxFailure(err.message || 'Something went wrong'));
            throw err;
        }
    }
}
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
                `http://localhost:3002/api/hotels/getHotelPrebook`,
                payload
            );
            console.log("Data from fetchHotelPrebook API:", response.data);
            dispatch(fetchHotelPrebookSuccess(response.data));
            return response.data;

        } catch (err) {
            dispatch(fetchHotelPrebookFailure(err.message || 'Something went wrong'));
            throw err;
        }
    }
}