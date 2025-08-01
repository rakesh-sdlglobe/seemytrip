import axios from "axios";
import { selectBusAuthData,selectBusSearchList } from "../Selectors/busSelectors";

// Action types
export const FETCH_BUS_CITY_LIST_REQUEST = "FETCH_BUS_CITY_LIST_REQUEST";
export const FETCH_BUS_CITY_LIST_SUCCESS = "FETCH_BUS_CITY_LIST_SUCCESS";
export const FETCH_BUS_CITY_LIST_FAILURE = "FETCH_BUS_CITY_LIST_FAILURE";

export const FETCH_BUS_AUTH_REQUEST = "FETCH_BUS_AUTH_REQUEST";
export const FETCH_BUS_AUTH_SUCCESS = "FETCH_BUS_AUTH_SUCCESS";
export const FETCH_BUS_AUTH_FAILURE = "FETCH_BUS_AUTH_FAILURE";

export const FETCH_BUS_SEARCH_REQUEST = "FETCH_BUS_SEARCH_REQUEST";
export const FETCH_BUS_SEARCH_SUCCESS = "FETCH_BUS_SEARCH_SUCCESS";
export const FETCH_BUS_SEARCH_FAILURE = "FETCH_BUS_SEARCH_FAILURE";

// Auth actions
export const fetchBusAuthRequest = () => ({ type: FETCH_BUS_AUTH_REQUEST });
export const fetchBusAuthSuccess = (authData) => ({
  type: FETCH_BUS_AUTH_SUCCESS,
  payload: authData,
});
export const fetchBusAuthFailure = (error) => ({
  type: FETCH_BUS_AUTH_FAILURE,
  payload: error,
});

// City list actions
export const fetchBusCityListRequest = () => ({
  type: FETCH_BUS_CITY_LIST_REQUEST,
});
export const fetchBusCityListSuccess = (payload) => ({
  type: FETCH_BUS_CITY_LIST_SUCCESS,
  payload, // Important: keep the full object to allow BusCities access
});
export const fetchBusCityListFailure = (error) => ({
  type: FETCH_BUS_CITY_LIST_FAILURE,
  payload: error,
});

// Search actions
export const fetchBusSearchRequest = () => ({ type: FETCH_BUS_SEARCH_REQUEST });
export const fetchBusSearchSuccess = (searchResults) => ({
  type: FETCH_BUS_SEARCH_SUCCESS,
  payload: searchResults,
});
export const fetchBusSearchFailure = (error) => ({
  type: FETCH_BUS_SEARCH_FAILURE,
  payload: error,
});

// Thunks

export const fetchBusAuth = () => async (dispatch, getState) => {
  const authData = selectBusAuthData(getState());
  if (authData && authData.TokenId && authData.EndUserIp) {
    return;
  }

  console.log("Fetching bus auth from API");

  try {
    dispatch(fetchBusAuthRequest());

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/bus/authenticateBusAPI`
    );
    console.log("Response from bus auth API:", response.data);

    if (response.data) {
      dispatch(fetchBusAuthSuccess(response.data));
      console.log("Bus auth data using GetbookingDetail:", response.data);
      const { TokenId, EndUserIp } = response.data;
      if (TokenId && EndUserIp) {
        await dispatch(fetchBusCityList(TokenId, EndUserIp));
      }
    } else {
      dispatch(fetchBusAuthFailure("No bus auth data found"));
    }
  } catch (error) {
    console.error("Error fetching bus auth:", error);
    dispatch(fetchBusAuthFailure(error.message));
  }
};

export const fetchBusCityListIfNeeded = () => async (dispatch, getState) => {
  const authData = selectBusAuthData(getState());
  if (authData && authData.TokenId && authData.EndUserIp) {
    await dispatch(fetchBusCityList(authData.TokenId, authData.EndUserIp));
  } else {
    await dispatch(fetchBusAuth());
  }
};

export const fetchBusCityList = (TokenId, IpAddress) => async (dispatch) => {
  console.log("Fetching bus city list from API");

  try {
    dispatch(fetchBusCityListRequest());

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/bus/getBusCityList`,
      { TokenId, IpAddress }
    );

    console.log("Response from bus city list API:", response.data);

    // ✅ Pass full payload to reducer so it can handle BusCities, CityList, etc.
    dispatch(fetchBusCityListSuccess(response.data));
  } catch (error) {
    console.error("Error fetching bus city list:", error);
    dispatch(fetchBusCityListFailure(error.message));
  }
};

export const fetchBusSearch = (searchParams) => async (dispatch) => {
  console.log("Fetching bus search results from API");
  try {
    dispatch(fetchBusSearchRequest());

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/bus/BusSearch`,
      searchParams
    );

    console.log("Response from bus search API:", response.data);

    if (response.data) {
      dispatch(fetchBusSearchSuccess(response.data));
    } else {
      dispatch(fetchBusSearchFailure("No bus search results found"));
    }
  } catch (error) {
    console.error("Error fetching bus search results:", error);
    dispatch(fetchBusSearchFailure(error.message));
  }
};

export const FETCH_BUS_SEATLAYOUT_REQUEST = "FETCH_BUS_SEATLAYOUT_REQUEST";
export const FETCH_BUS_SEATLAYOUT_SUCCESS = "FETCH_BUS_SEATLAYOUT_SUCCESS";
export const FETCH_BUS_SEATLAYOUT_FAILURE = "FETCH_BUS_SEATLAYOUT_FAILURE";
export const fetchBusSeatLayoutRequest = () => ({
  type: FETCH_BUS_SEATLAYOUT_REQUEST,
});
export const fetchBusSeatLayoutSuccess = (seatLayout) => ({
  type: FETCH_BUS_SEATLAYOUT_SUCCESS,
  payload: seatLayout,
});
export const fetchBusSeatLayoutFailure = (error) => ({
  type: FETCH_BUS_SEATLAYOUT_FAILURE,
  payload: error,
});
export const fetchBusSeatLayout =
  (TokenId, IpAddress, ResultIndex, TraceId) => async (dispatch, getState) => {
    console.log("Fetching bus seat layout from API");

    try {
      dispatch(fetchBusSeatLayoutRequest());

      // 1. Try with current credentials
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/bus/getBusSeatLayout`,
        { TokenId, IpAddress, ResultIndex, TraceId }
      );

      console.log("Response from bus seat layout API:", response.data);

      // 2. If token/trace error, refresh and retry ONCE
      if (
        response.data?.Error?.ErrorCode === 5 ||
        (response.data?.Error?.ErrorMessage &&
          (response.data.Error.ErrorMessage.toLowerCase().includes('token') ||
           response.data.Error.ErrorMessage.toLowerCase().includes('trace')))
      ) {
        // Re-authenticate
        await dispatch(fetchBusAuth());
        const authData = selectBusAuthData(getState());
        if (!authData?.TokenId || !authData?.EndUserIp) {
          throw new Error("Failed to re-authenticate for seat layout");
        }

        // Re-search to get new TraceId
        const searchParams = JSON.parse(localStorage.getItem('busSearchparams') || '{}');
        await dispatch(fetchBusSearch({
          ...searchParams,
          TokenId: authData.TokenId,
          EndUserIp: authData.EndUserIp,
        }));
        const searchList = selectBusSearchList(getState());
        const newTraceId = searchList?.BusSearchResult?.TraceId;
        if (!newTraceId) throw new Error("Failed to get new TraceId for seat layout");

        // Retry seat layout with new credentials
        const retryResponse = await axios.post(
          `${process.env.REACT_APP_API_URL}/bus/getBusSeatLayout`,
          {
            TokenId: authData.TokenId,
            IpAddress: authData.EndUserIp,
            ResultIndex,
            TraceId: newTraceId,
          }
        );
        if (retryResponse.data) {
          dispatch(fetchBusSeatLayoutSuccess(retryResponse.data));
        } else {
          dispatch(fetchBusSeatLayoutFailure("No bus seat layout found after retry"));
        }
        return;
      }

      // 3. Normal success
      if (response.data) {
        dispatch(fetchBusSeatLayoutSuccess(response.data));
      } else {
        dispatch(fetchBusSeatLayoutFailure("No bus seat layout found"));
      }
    } catch (error) {
      console.error("Error fetching bus seat layout:", error);
      dispatch(fetchBusSeatLayoutFailure(error.message));
    }
  };



  export const FETCH_BUS_BOARDING_POINTS_REQUEST = "FETCH_BUS_BOARDING_POINTS_REQUEST";
  export const FETCH_BUS_BOARDING_POINTS_SUCCESS = "FETCH_BUS_BOARDING_POINTS_SUCCESS";
  export const FETCH_BUS_BOARDING_POINTS_FAILURE = "FETCH_BUS_BOARDING_POINTS_FAILURE";
  export const fetchBusBoardingPointsRequest = () => ({
    type: FETCH_BUS_BOARDING_POINTS_REQUEST,
  });
  export const fetchBusBoardingPointsSuccess = (boardingPoints) => ({
    type: FETCH_BUS_BOARDING_POINTS_SUCCESS,
    payload: boardingPoints,
  });
  export const fetchBusBoardingPointsFailure = (error) => ({
    type: FETCH_BUS_BOARDING_POINTS_FAILURE,
    payload: error,
  });
  export const fetchBusBoardingPoints = (TokenId, IpAddress, ResultIndex, TraceId) => async (dispatch) => {
    console.log("Fetching bus boarding points from API");
    console.log("Request parameters:", { TokenId, IpAddress, ResultIndex, TraceId });
  
    try {
      dispatch(fetchBusBoardingPointsRequest());
  
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/bus/getBoardingPointDetails`,
        { TokenId, IpAddress, ResultIndex, TraceId }
      );
  
      console.log("Response from bus boarding points API:", response.data);
  
      if (response.data) {
        dispatch(fetchBusBoardingPointsSuccess(response.data));
        console.log("Successfully dispatched boarding points data to store");
      } else {
        dispatch(fetchBusBoardingPointsFailure("No bus boarding points found"));
      }
    } catch (error) {
      console.error("Error fetching bus boarding points:", error);
      dispatch(fetchBusBoardingPointsFailure(error.message));
    }
  }; 
   
  export const FETCH_BUS_BLOCK_REQUEST = "FETCH_BUS_BLOCK_REQUEST";
  export const FETCH_BUS_BLOCK_SUCCESS = "FETCH_BUS_BLOCK_SUCCESS";
  export const FETCH_BUS_BLOCK_FAILURE = "FETCH_BUS_BLOCK_FAILURE";
  export const fetchBusBlockRequest = () => ({
    type: FETCH_BUS_BLOCK_REQUEST,
  });
  export const fetchBusBlockSuccess = (block) => ({
    type: FETCH_BUS_BLOCK_SUCCESS,
    payload: block,
  });
  export const fetchBusBlockFailure = (error) => ({
    type: FETCH_BUS_BLOCK_FAILURE,
    payload: error,
  });
  export const fetchBusBlock = (blockData) => async (dispatch, getState) => {
    console.log("Fetching bus block from API");
    console.log("Request data:", blockData);

    try {
      dispatch(fetchBusBlockRequest());

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/bus/getBlock`,
        blockData
      );

      console.log("Response from bus block API:", response.data);

      if (response.data) {
        dispatch(fetchBusBlockSuccess(response.data));
        console.log("Successfully dispatched block data to store");
        return response.data; // Return the response data
      } else {    
        dispatch(fetchBusBlockFailure("No bus block found"));
        return null;
      }
    } catch (error) {
      console.error("Error fetching bus block:", error);
      dispatch(fetchBusBlockFailure(error.message));
      return null;
    }
  };


  export  const FETCH_BUS_BOOKING_REQUEST = "FETCH_BUS_BOOKING_REQUEST";
  export const FETCH_BUS_BOOKING_SUCCESS = "FETCH_BUS_BOOKING_SUCCESS";
  export const FETCH_BUS_BOOKING_FAILURE = "FETCH_BUS_BOOKING_FAILURE";
  export const fetchBusBookingRequest = () => ({
    type: FETCH_BUS_BOOKING_REQUEST,
  });

export const fetchBusBookingSuccess = (booking) => ({
    type: FETCH_BUS_BOOKING_SUCCESS,
    payload: booking,
  });

export const fetchBusBookingFailure = (error) => ({
    type: FETCH_BUS_BOOKING_FAILURE,
    payload: error,
  });

export const fetchBusBooking = (bookingData) => async (dispatch, getState) => {
    console.log("Fetching bus booking from API");
    console.log("Request data:", bookingData);

    try {
      dispatch(fetchBusBookingRequest());

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/bus/getBooking`,
        bookingData
      );

      console.log("Response from bus booking API:", response.data);

      // Check if booking was successful
      if (response.data && response.data.BookResult) {
        const bookResult = response.data.BookResult;
        
        // Check for session expiry error
        if (bookResult.Error && bookResult.Error.ErrorCode === 5) {
          console.log("Session expired, refreshing and retrying...");
          
          // Re-authenticate
          await dispatch(fetchBusAuth());
          const authData = selectBusAuthData(getState());
          if (!authData?.TokenId || !authData?.EndUserIp) {
            throw new Error("Failed to re-authenticate for booking");
          }

          // Re-search to get new TraceId
          const searchParams = JSON.parse(localStorage.getItem('busSearchparams') || '{}');
          await dispatch(fetchBusSearch({
            ...searchParams,
            TokenId: authData.TokenId,
            EndUserIp: authData.EndUserIp,
          }));
          const searchList = selectBusSearchList(getState());
          const newTraceId = searchList?.BusSearchResult?.TraceId;
          if (!newTraceId) throw new Error("Failed to get new TraceId for booking");

          // Update booking data with new credentials
          const updatedBookingData = {
            ...bookingData,
            TokenId: authData.TokenId,
            EndUserIp: authData.EndUserIp,
            TraceId: newTraceId
          };

          // Retry booking with new credentials
          const retryResponse = await axios.post(
            `${process.env.REACT_APP_API_URL}/bus/getBooking`,
            updatedBookingData
          );
          
          console.log("1 Retry booking response:", retryResponse.data);
          
          if (retryResponse.data) {
            dispatch(fetchBusBookingSuccess(retryResponse.data));
            console.log("Successfully dispatched booking data to store after retry");
            return retryResponse.data;
          } else {
            dispatch(fetchBusBookingFailure("No bus booking found after retry"));
            return null;
          }
        } else {
          // Normal success
          dispatch(fetchBusBookingSuccess(response.data));
          console.log("Successfully dispatched booking data to store");
          return response.data;
        }
      } else {
        dispatch(fetchBusBookingFailure("No bus booking found"));
        return null;
      }
    } catch (error) {
      console.error("Error fetching bus booking:", error);
      dispatch(fetchBusBookingFailure(error.message));
      return null;
    }
  };


  export const FETCH_BUS_BOOKING_DETAILS_REQUEST = "FETCH_BUS_BOOKING_DETAILS_REQUEST";
  export const FETCH_BUS_BOOKING_DETAILS_SUCCESS = "FETCH_BUS_BOOKING_DETAILS_SUCCESS";
  export const FETCH_BUS_BOOKING_DETAILS_FAILURE = "FETCH_BUS_BOOKING_DETAILS_FAILURE";
  export const fetchBusBookingDetailsRequest = () => ({
    type: FETCH_BUS_BOOKING_DETAILS_REQUEST,
  });
  export const fetchBusBookingDetailsSuccess = (bookingDetails) => ({ 
    type: FETCH_BUS_BOOKING_DETAILS_SUCCESS,
    payload: bookingDetails,
  });
  export const fetchBusBookingDetailsFailure = (error) => ({
    type: FETCH_BUS_BOOKING_DETAILS_FAILURE,
    payload: error,
  });   
  
export const fetchBusBookingDetails = (bookingDetailsData) => async (dispatch) => {
    console.log("=== BUS BOOKING DETAILS ACTION START ===");
    console.log("1. Request data:", JSON.stringify(bookingDetailsData, null, 2));
    console.log("2. API endpoint:", `${process.env.REACT_APP_API_URL}/bus/getBookingDetails`);

    try {
      console.log("3. Dispatching FETCH_BUS_BOOKING_DETAILS_REQUEST");
      dispatch(fetchBusBookingDetailsRequest());

      console.log("4. Making API call...");
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/bus/getBookingDetails`,
        bookingDetailsData
      );
       console.log("Response from bus booking details API:", response.data);

      console.log("5. API Response received:");
      console.log("Response from bus booking details API:", response.data);
      console.log("   - Status:", response.status);
      console.log("   - Status Text:", response.statusText);
      console.log("   - Response data:", JSON.stringify(response.data, null, 2));
      console.log("   - Response structure keys:", Object.keys(response.data || {}));

      if (response.data) {
        console.log("6. Dispatching FETCH_BUS_BOOKING_DETAILS_SUCCESS");
        dispatch(fetchBusBookingDetailsSuccess(response.data));
        console.log("7. Successfully dispatched booking details data to store");
        console.log("8. Returning response data to component");
        console.log("=== BUS BOOKING DETAILS ACTION SUCCESS ===");
        return response.data; // Return the response data
      } else {
        console.log("6. No response data found");
        dispatch(fetchBusBookingDetailsFailure("No bus booking details found"));
        console.log("=== BUS BOOKING DETAILS ACTION FAILURE - NO DATA ===");
        return null;
      }   
    } catch (error) {
      console.error("=== BUS BOOKING DETAILS ACTION ERROR ===");
      console.error("Error details:", {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        responseData: error.response?.data,
        config: {
          url: error.config?.url,
          method: error.config?.method,
          data: error.config?.data
        }
      });
      dispatch(fetchBusBookingDetailsFailure(error.message));
      console.log("=== BUS BOOKING DETAILS ACTION FAILURE - ERROR ===");
      return null;
    }
  };



        