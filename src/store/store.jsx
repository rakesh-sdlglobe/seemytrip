import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {thunk} from 'redux-thunk';  
import authReducer from './Reducers/authReducer';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import  {filterReducer}  from './Reducers/filterReducer';

const encryptor = encryptTransform({
  secretKey: process.env.REACT_APP_SECRET_KEY,
  onError: function (error) {
    console.error('Encryption Error: ', error);
  },
});

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptor],
};

const rootReducer = combineReducers({
  auth: authReducer,
  filters: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Add thunk middleware when creating the store
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
