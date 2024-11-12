import axios from 'axios';

export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_FAILURE = 'FETCH_USER_PROFILE_FAILURE';
export const EDIT_USER_PROFILE_SUCCESS = 'EDIT_USER_PROFILE_SUCCESS';
export const EDIT_USER_PROFILE_FAILURE = 'EDIT_USER_PROFILE_FAILURE';
export const EDIT_USER_EMAIL_SUCCESS = 'EDIT_USER_EMAIL_SUCCESS';
export const EDIT_USER_EMAIL_FAILURE = 'EDIT_USER_EMAIL_FAILURE';
export const FETCH_USER_BOOKINGS_SUCCESS = 'FETCH_USER_BOOKINGS_SUCCESS';
export const FETCH_USER_BOOKINGS_FAILURE = 'FETCH_USER_BOOKINGS_FAILURE';
export const ADD_TRAVELER_REQUEST = 'ADD_TRAVELER_REQUEST';
export const ADD_TRAVELER_SUCCESS = 'ADD_TRAVELER_SUCCESS';
export const ADD_TRAVELER_FAILURE = 'ADD_TRAVELER_FAILURE';
export const FETCH_TRAVELERS_REQUEST = 'FETCH_TRAVELERS_REQUEST';
export const FETCH_TRAVELERS_SUCCESS = 'FETCH_TRAVELERS_SUCCESS';
export const FETCH_TRAVELERS_FAILURE = 'FETCH_TRAVELERS_FAILURE';
export const REMOVE_TRAVELER_REQUEST = 'REMOVE_TRAVELER_REQUEST';
export const REMOVE_TRAVELER_SUCCESS = 'REMOVE_TRAVELER_SUCCESS';
export const REMOVE_TRAVELER_FAILURE = 'REMOVE_TRAVELER_FAILURE';


// Fetch user profile
export const getUserProfile = () => {
  return async (dispatch) => {
    const authToken = localStorage.authToken; 

    try {
      const response = await axios.get('https://tripadmin.onrender.com/api/users/userProfile', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log(response.data);
      
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
      const response = await axios.post('https://tripadmin.onrender.com/api/users/editProfile', userData, {
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

export const editUserEmail = (userData) => {
  return async (dispatch) => {
    const authToken = localStorage.authToken; 

    try {
      const response = await axios.post('https://tripadmin.onrender.com/api/users/editEmail', userData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log(response.data.user);
      
      dispatch({ type: EDIT_USER_EMAIL_SUCCESS, payload: response.data.user });
    } catch (error) {    
      dispatch({ type: EDIT_USER_EMAIL_FAILURE, payload: error.response.data.message });
    }
  };
};

export const myBookings = () => {
  return async (dispatch) => {
    const authToken = localStorage.getItem('authToken'); 
    
    try {
      const response = await axios.get('https://tripadmin.onrender.com/api/users/myBookings', {
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
      const response = await axios.post('https://tripadmin.onrender.com/api/users/addTraveler', travelerData,{
        
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
      const response = await axios.get('https://tripadmin.onrender.com/api/users/getTravelers', {
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

export const removeTraveler = (id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_TRAVELER_REQUEST });
    const authToken = localStorage.getItem("authToken");
    await axios.delete(`https://tripadmin.onrender.com/api/users/traveller/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    dispatch({
      type: REMOVE_TRAVELER_SUCCESS,
      payload: id,
    });
    navigate("/");
  } catch (error) {
    dispatch({
      type: REMOVE_TRAVELER_FAILURE,
      payload: error.message || "Failed to add traveler",
    });
  }
};
