import axios from 'axios';


export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CLEAR_FORM = 'CLEAR_FORM';
export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
export const GOOGLE_LOGIN_FAILURE = 'GOOGLE_LOGIN_FAILURE';


export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const setConfirmPassword = (confirmPassword) => ({
  type: SET_CONFIRM_PASSWORD,
  payload: confirmPassword,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const clearForm = () => ({
  type: CLEAR_FORM,
});

export const googleLoginSuccess = ({ token, user }) => ({
  type: GOOGLE_LOGIN_SUCCESS,
  payload: { token, user }, // Make sure to pass an object with both token and user
});


export const googleLoginFailure = (error) => ({
  type: GOOGLE_LOGIN_FAILURE,
  payload: error,
});

export const API_URL = process.env.REACT_APP_API_URL ;
// export const API_URL = 'https://tripadmin.onrender.com/api';

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
    dispatch(setPassword('')); 
    dispatch(setConfirmPassword('')); 

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
      dispatch(setPassword('')); 
  
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
  localStorage.removeItem('googleUserName');
  // localStorage.removeItem('trains');
  // localStorage.removeItem('trainSearchParams');
  dispatch({
    type: LOGOUT,
  });

};

// Handle Google login success

export const handleGoogleLogin = (accessToken, navigate) => async (dispatch) => {
  try {
      console.log("Starting Google login process...");

      // Call the backend API with the Google token
      const response = await axios.get(`${API_URL}/auth/google`, {
          headers: { Authorization: `Bearer ${accessToken}` },
      });

      console.log('Google login response:', response.data);

      const { token, user } = response.data; // Extract token and user
      const email = user.email;
      
      localStorage.setItem('googleUserName',JSON.stringify(user.firstName))

      if (!user || !token) {
          throw new Error('Invalid response from backend');
      }


      // Dispatch success action to Redux
      console.log("160 user details are ", user);
      dispatch(setUser(user))
      dispatch(setName(user.firstName));
      dispatch(setEmail(email));
      dispatch(googleLoginSuccess({ token, user }));

  } catch (error) {
      console.error('Google login failed:', error.response?.data || error.message);
      const errorMessage = error.response?.data?.message || 'Google login failed.';
      dispatch(googleLoginFailure(errorMessage));
  }
};




////