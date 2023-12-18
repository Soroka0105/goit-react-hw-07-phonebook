import { persistReducer } from 'redux-persist';
import { contactReducer } from './contactSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contact',
  storage,
  blacklist: ['secretKey'],
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const reducer = {
  contact: persistedReducer,
};
