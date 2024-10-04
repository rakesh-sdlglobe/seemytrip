// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store'; 
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
     <GoogleOAuthProvider clientId= "493628196678-cjvhttpbp9c4ha4a35srklc9skvgq324.apps.googleusercontent.com">
      <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
