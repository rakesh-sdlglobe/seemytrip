import axios from 'axios';

export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_FAILURE = 'FETCH_USER_PROFILE_FAILURE';
export const EDIT_USER_PROFILE_SUCCESS = 'EDIT_USER_PROFILE_SUCCESS';
export const EDIT_USER_PROFILE_FAILURE = 'EDIT_USER_PROFILE_FAILURE';
export const FETCH_USER_BOOKINGS_SUCCESS = 'FETCH_USER_BOOKINGS_SUCCESS';
export const FETCH_USER_BOOKINGS_FAILURE = 'FETCH_USER_BOOKINGS_FAILURE';

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
