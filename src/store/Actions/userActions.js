import axios from 'axios';
import { API_URL } from './authActions';
import { getEncryptedItem, setEncryptedItem } from '../../utils/encryption';

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


export const getUserProfile = () => {
  return async (dispatch) => {
    try {
      const authToken = localStorage.getItem('authToken');
      const user1 = getEncryptedItem('user1');
      if (!authToken || !user1) {
        dispatch({ type: FETCH_USER_PROFILE_FAILURE, payload: 'No user found' });
        return;
      }

      const response = await axios.get(`${API_URL}/users/userProfile`, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });

      // Optionally update user1 in localStorage with latest profile
      setEncryptedItem('user1', response.data);

      dispatch({ 
        type: FETCH_USER_PROFILE_SUCCESS, 
        payload: response.data 
      });
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch user profile';
      dispatch({ 
        type: FETCH_USER_PROFILE_FAILURE, 
        payload: errorMessage 
      });
    }
  };
};
// Edit user profile
export const editUserProfile = (userData, navigate) => {
  console.log("69 userData ", userData);
  
  return async (dispatch) => {
    const authToken = localStorage.authToken;     
    try {
      const response = await axios.post(`${API_URL}/users/editProfile`, userData, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });
      console.log("64 data ", response.data);
      
      // Update localStorage with the new user data
      localStorage.googleUserName = JSON.stringify(userData.name);
      console.log("Now user name is ", localStorage.googleUserName);
      
      // Dispatch the updated user data to Redux
      dispatch({ type: EDIT_USER_PROFILE_SUCCESS, payload: response.data });
      
      // Update encrypted user data in localStorage
      setEncryptedItem('user1', response.data);
      
      // Navigate to home page if navigate function is provided
      if (navigate) {
        navigate('/');
      }
    } catch (error) {    
      dispatch({ type: EDIT_USER_PROFILE_FAILURE, payload: error.response?.data?.message || 'Failed to update profile' });
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

export const addTraveler = (travelerData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TRAVELER_REQUEST });
    const authToken = localStorage.getItem('authToken'); 
    
    const response = await axios.post(`${API_URL}/users/addTraveler`, travelerData, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    dispatch({
      type: ADD_TRAVELER_SUCCESS,
      payload: response.data,
    });

    // Return a promise that resolves when the action is complete
    return Promise.resolve(response.data);

  } catch (error) {
    dispatch({
      type: ADD_TRAVELER_FAILURE,
      payload: error.message || 'Failed to add traveler',
    });
    // Return a rejected promise to handle the error in the component
    return Promise.reject(error);
  }
};

export const fetchTravelers = () => async (dispatch) => {
  dispatch({ type: FETCH_TRAVELERS_REQUEST });
  const authToken = localStorage.getItem('authToken'); 
  
  try {
    const response = await axios.get(`${API_URL}/users/getTravelers`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    
    dispatch({ 
      type: FETCH_TRAVELERS_SUCCESS, 
      payload: response.data 
    });
    return response.data;
  } catch (error) {
    dispatch({ 
      type: FETCH_TRAVELERS_FAILURE, 
      payload: error.message || 'Failed to fetch travelers' 
    });
    throw error;
  }
};

export const removeTraveler = (id) => async (dispatch) => {
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

    // Return a promise that resolves when deletion is complete
    return Promise.resolve();

  } catch (error) {
    dispatch({
      type: REMOVE_TRAVELER_FAILURE,
      payload: error.message || "Failed to delete traveler",
    });
    return Promise.reject(error);
  }
};

export const imageUpload = async (file) => {
      console.log("209 file ", file);
  
  if (!file) throw new Error("No file provided for upload.");

  const user = getEncryptedItem('user1');
  if (!user || !user.user_id) throw new Error("User authentication required");

  const formData = new FormData();
  formData.append('img_url', file); // Must match backend

  for (let [key, value] of formData.entries()) {
    if (value instanceof File) {
      console.log(`${key}: File name = ${value.name}, size = ${value.size}`);
    } else {
      console.log(`${key}: ${value}`);
    }
  }

  const authToken = localStorage.getItem('authToken'); 
console.log("220 formData ", formData);
console.log("221 user ", user);


  try {
    const response = await axios.put(`${API_URL}/users/imageUpload/${user.user_id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authToken}`,
      },
    });

    return response.data; // { img_url, message }
  } catch (error) {
    throw error;
  }
};