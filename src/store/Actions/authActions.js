import axios from 'axios';

export const SET_EMAIL = 'SET_EMAIL';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';
export const SET_NAME = 'SET_NAME';
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
export const GOOGLE_LOGIN_FAILURE = 'GOOGLE_LOGIN_FAILURE';

export const API_URL = process.env.REACT_APP_API_URL ;
// export const API_URL = 'https://tripadmin.seemytrip.com/api';
// export const API_URL = 'https://tripadmin.onrender.com/api';

const AUTH_TOKEN_KEY = 'authToken';
const USER_DATA_KEY = 'user';

// Helper function for localStorage operations
const persistAuthData = (token, user) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
};

export const setError = (error) => ({ type: SET_ERROR, payload: error });

export const clearError = () => ({ type: CLEAR_ERROR });

export const setUser = (user) => ({ type: SET_USER, payload: user });

export const setEmail = (email) => ({ type: SET_EMAIL, payload: email });

export const setName = (firstName) => ({ type: SET_NAME, payload: firstName });

export const googleLoginSuccess = ({ token, user }) => ({ 
  type: GOOGLE_LOGIN_SUCCESS, 
  payload: { token, user } 
});

export const googleLoginFailure = (error) => ({ 
  type: GOOGLE_LOGIN_FAILURE, 
  payload: error 
});


// Thunk Action
export const handleGoogleLogin = (accessToken) => async (dispatch) => {

  console.log("Google login action called with access token:", accessToken);
  // Validate input
  if (!accessToken || typeof accessToken !== 'string') {
    return dispatch(googleLoginFailure('Invalid access token'));
  }

  try {
    // Clear any previous errors
    dispatch(clearError());

    // API call with timeout
    const source = axios.CancelToken.source();
    const timeout = setTimeout(() => source.cancel('Request timeout'), 10000);

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/google`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    
    console.log("Google login response:", response.data); 

    clearTimeout(timeout);

    // Validate response structure
    if (!response.data?.token || !response.data?.user) {
      throw new Error('Invalid response structure from server');
    }

    const { token, user } = response.data;
    const { email, firstName } = user;

    // Persist data
    persistAuthData(token, user);

    // Batch dispatches (could use redux-batched-actions if needed)
    dispatch(googleLoginSuccess({ token, user }));
    dispatch(setUser(user));
    dispatch(setName(firstName));
    dispatch(setEmail(email));

  } catch (error) {
    // Handle different error scenarios
    console.error('Google login error:', error);
    let errorMessage = 'Google login failed';
    
    if (axios.isCancel(error)) {
      errorMessage = 'Request timeout';
    } else if (error.response) {
      errorMessage = error.response.data?.message || 'Server error occurred';
    } else if (error.request) {
      errorMessage = 'Network error - no response received';
    }

    console.error('Google login error:', errorMessage);
    dispatch(googleLoginFailure(errorMessage));
    
    // Optional: Clear auth data on failure
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_DATA_KEY);
  }
};


export const register = (firstName, middleName, lastName, email, password, navigate) => async (dispatch) => {
  try {

    dispatch(setError(''));


    const response = await axios.post(`${API_URL}/signup`, {
      firstName,
      middleName,
      lastName,
      email,
      password,
    });

    const { user, token} = response.data;

    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user)); 

    dispatch(setUser(user));
    dispatch(setName(user.firstName));
    dispatch(setEmail(''));

    // dispatch(clearForm())

    // navigate('/');

  } catch (error) {
  
    const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
    dispatch(setError(errorMessage));
  }
};


export const Loginn = (email, password, navigate) => async (dispatch) => {
  try {

    dispatch(setError(''));

    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    console.log("response from the login action ",response);
    if(response.data){
      const { user, token} = response.data;
  
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));
  
      dispatch(setUser(user));
      dispatch(setName(user.firstName));
      dispatch(setEmail(''));
  
      return { success : true}
    }
    else{
      return { error : response.data.message}
    }    
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
    dispatch(setError(errorMessage));
    return { error : errorMessage}
  }
};


export const logout = () => (dispatch) => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  // localStorage.removeItem('trains');
  // localStorage.removeItem('trainSearchParams');
  dispatch({
    type: LOGOUT,
  });

};

// Handle Google login success





////