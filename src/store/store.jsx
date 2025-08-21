import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';  
import authReducer from './Reducers/authReducer';
import userReducer from './Reducers/userReducer';
import { trainReducer } from './Reducers/trainReducer';
import { hotelReducer } from './Reducers/hotelReducer';
import { flightReducer } from './Reducers/flightReducer';
import mobileOtpReducer from './Reducers/mobileOtpreducer';
import emailAuthReducer from './Reducers/emailreducer';
import busReducer from './Reducers/busReducer';
import insuranceReducer from './Reducers/insuranceReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  filters: trainReducer,
  hotels: hotelReducer,
  flights: flightReducer,
  bus:busReducer,
  mobileOtp: mobileOtpReducer,
  emailAuth: emailAuthReducer,
  insurance: insuranceReducer,
});

// Add thunk middleware when creating the store
const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };


