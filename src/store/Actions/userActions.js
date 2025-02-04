import axios from 'axios';
import { API_URL } from './authActions';

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
export const UPDATE_TRAVELER_REQUEST = 'UPDATE_TRAVELER_REQUEST';
export const UPDATE_TRAVELER_SUCCESS = 'UPDATE_TRAVELER_SUCCESS';
export const UPDATE_TRAVELER_FAILURE = 'UPDATE_TRAVELER_FAILURE';
export const SHOW_SESSION_EXPIRED_MODAL  = 'SHOW_SESSION_EXPIRED_MODAL';
export const HIDE_SESSION_EXPIRED_MODAL  = 'HIDE_SESSION_EXPIRED_MODAL';

// Fetch user profile
// const API_URL = process.env.REACT_APP_API_URL || 'https://tripadmin.onrender.com/api';


export const getUserProfile = () => {
  return async (dispatch) => {
    try {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        dispatch({ type: SHOW_SESSION_EXPIRED_MODAL });
        console.error('No auth token found');
        throw new Error('No auth token found');
      }

      const response = await axios.get(`${API_URL}/users/userProfile`, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });

      dispatch({ 
        type: FETCH_USER_PROFILE_SUCCESS, 
        payload: response.data 
      });
    } catch (error) {
      console.error('51 Failed to fetch user profile:', error);
      const errorMessage = error.response?.data?.message || 'Failed to fetch user profile';

      if (error.response?.status === 401) {
        console.error('Session expired:', error);
        dispatch({ type: SHOW_SESSION_EXPIRED_MODAL });
      }

      dispatch({ 
        type: FETCH_USER_PROFILE_FAILURE, 
        payload: errorMessage 
      });
    }
  };
};
// Edit user profile
export const editUserProfile = (userData,navigate) => {
  return async (dispatch) => {
    const authToken = localStorage.authToken;     
    try {
      const response = await axios.post(`${API_URL}/users/editProfile`, userData, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });
      console.log("64 data ",response.data)
      localStorage.googleUserName = JSON.stringify(userData.name)
      console.log("Now user name is ", localStorage.googleUserName);
      
      
      dispatch({ type: EDIT_USER_PROFILE_SUCCESS, payload: response.data.user });
       // Navigate to home page
      navigate('/');  // This will redirect to the home page
    } catch (error) {    
      dispatch({ type: EDIT_USER_PROFILE_FAILURE, payload: error.response.data.message });
    }
  };
};

export const editUserEmail = (userData) => {
  return async (dispatch) => {
    const authToken = localStorage.authToken; 

    try {
      const response = await axios.post(`${API_URL}/users/editEmail`, userData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log("Response from 92 after edituser API call: ",response.data.user);
      
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
      const response = await axios.get(`${API_URL}users/myBookings`, {
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
      const response = await axios.post(`${API_URL}/users/addTraveler`, travelerData,{
        
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
      const response = await axios.get(`${API_URL}/users/getTravelers`, {
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
    await axios.delete(`${API_URL}/users/traveller/${id}`, {
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

export const imageUpload = async (file) => {
  if (!file) {
    console.error("No file provided for upload.");
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  const authToken = localStorage.authToken; 

  try {
    const response = await axios.post(`${API_URL}/users/imageUpload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authToken}`,
      
      },
    });

    console.log('Image uploaded successfully:', response.data);
    return response.data; // Optionally return the API response
  } catch (error) {
    console.error('Error uploading image:', error.message);
    throw error; // Rethrow the error for further handling if needed
  }
};

export const updateTraveler = (travelerData) => ({
  type: 'UPDATE_TRAVELER',
  payload: travelerData
});
