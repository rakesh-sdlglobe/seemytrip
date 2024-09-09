// src/store/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';  
import authReducer from './Reducers/authReducer';
import userReducer from './Reducers/userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,

});

// Add thunk middleware when creating the store
const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
