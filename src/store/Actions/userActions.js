import axios from 'axios';

export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_FAILURE = 'FETCH_USER_PROFILE_FAILURE';
export const EDIT_USER_PROFILE_SUCCESS = 'EDIT_USER_PROFILE_SUCCESS';
export const EDIT_USER_PROFILE_FAILURE = 'EDIT_USER_PROFILE_FAILURE';
export const FETCH_USER_BOOKINGS_SUCCESS = 'FETCH_USER_BOOKINGS_SUCCESS';
export const FETCH_USER_BOOKINGS_FAILURE = 'FETCH_USER_BOOKINGS_FAILURE';
export const ADD_TRAVELER_REQUEST = 'ADD_TRAVELER_REQUEST';
export const ADD_TRAVELER_SUCCESS = 'ADD_TRAVELER_SUCCESS';
export const ADD_TRAVELER_FAILURE = 'ADD_TRAVELER_FAILURE';
export const FETCH_TRAVELERS_REQUEST = 'FETCH_TRAVELERS_REQUEST';
export const FETCH_TRAVELERS_SUCCESS = 'FETCH_TRAVELERS_SUCCESS';
export const FETCH_TRAVELERS_FAILURE = 'FETCH_TRAVELERS_FAILURE';

// Fetch user profile
export const getUserProfile = () => {
  return async (dispatch) => {
    const authToken = localStorage.authToken; 

    try {
      const response = await axios.get('http://localhost:3002/api/users/userProfile', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      
      dispatch({ type: FETCH_USER_PROFILE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_USER_PROFILE_FAILURE, payload: error.response.data.message });
    }
  };
};
// Edit user profile
export const editUserProfile = (userData) => {
  return async (dispatch) => {
    const authToken = localStorage.authToken; 

    try {
      const response = await axios.post('http://localhost:3002/api/users/editProfile', userData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      
      dispatch({ type: EDIT_USER_PROFILE_SUCCESS, payload: response.data.user });
    } catch (error) {    
      dispatch({ type: EDIT_USER_PROFILE_FAILURE, payload: error.response.data.message });
    }
  };
};

export const myBookings = () => {
  return async (dispatch) => {
    const authToken = localStorage.getItem('authToken'); 
    
    try {
      const response = await axios.get('http://localhost:3002/api/users/myBookings', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log('Booking Data:', response.data.bookings); 
      dispatch({ type: FETCH_USER_BOOKINGS_SUCCESS, payload: response.data.bookings });
    } catch (error) {
      console.error('Error fetching bookings:', error.response?.data?.message || 'Error fetching bookings');
      dispatch({ type: FETCH_USER_BOOKINGS_FAILURE, payload: error.response?.data?.message || 'Error fetching bookings' });
    }
  };
}

export const addTraveler = (travelerData,navigate) => async (dispatch) => {
  
  try {
    
    dispatch({ type: ADD_TRAVELER_REQUEST });
      const authToken = localStorage.getItem('authToken'); 
      const response = await axios.post('http://localhost:3002/api/users/addTraveler', travelerData,{
        
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });


      dispatch({
          type: ADD_TRAVELER_SUCCESS,
          payload: response.data,
      });
      navigate('/');

  } catch (error) {
      dispatch({
          type: ADD_TRAVELER_FAILURE,
          payload: error.message || 'Failed to add traveler',
      });
  }
};

export const fetchTravelers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TRAVELERS_REQUEST });
    const authToken = localStorage.getItem('authToken'); 
    
    try {
      const response = await axios.get('http://localhost:3002/api/users/getTravelers', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      dispatch({ type: FETCH_TRAVELERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_TRAVELERS_FAILURE, payload: error.message || 'Failed to fetch travelers' });
    }
  };
};
