import axios from 'axios';


export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';
export const SET_ERROR = 'SET_ERROR';
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

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const clearForm = () => ({
  type: CLEAR_FORM,
});

export const googleLoginSuccess = (user) => ({
  type: GOOGLE_LOGIN_SUCCESS,
  payload: user,
});

export const googleLoginFailure = (error) => ({
  type: GOOGLE_LOGIN_FAILURE,
  payload: error,
});

export const register = (name, email, password, navigate) => async (dispatch) => {
  try {

    dispatch(setError(''));


    const response = await axios.post('http://localhost:3002/api/signup', {
      name,
      email,
      password,
    });

    const { user, token} = response.data;

    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user)); 

    dispatch(setUser(user));
    dispatch(setName(user.name));
    dispatch(setEmail(''));
    dispatch(setPassword('')); 
    dispatch(setConfirmPassword('')); 

    // dispatch(clearForm())

    navigate('/');

  } catch (error) {
  
    const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
    dispatch(setError(errorMessage));
  }
};


export const Loginn = (email, password, navigate) => async (dispatch) => {
  try {

    dispatch(setError(''));


    const response = await axios.post('http://localhost:3002/api/login', {
      email,
      password,
    });

    
    const { user, token} = response.data;

    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));

    dispatch(setUser(user));
    dispatch(setName(user.name));
    dispatch(setEmail(''));
    dispatch(setPassword('')); 

    navigate('/');
  } catch (error) {
   
    const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
    dispatch(setError(errorMessage));
  }
};


export const logout = () => (dispatch) => {

  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  dispatch({
    type: LOGOUT,
  });

};

// Handle Google login success
export const handleGoogleLogin = (userInfo, navigate) => (dispatch) => {
  try {
    const { name, email, picture } = userInfo;
    dispatch(googleLoginSuccess({ name, email, picture }));
    navigate('/');
  } catch (error) {
    dispatch(googleLoginFailure(error.message));
  }
};