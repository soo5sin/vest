import { combineReducers } from '@reduxjs/toolkit';
import users from './users';
import accounts from './accounts';
import user from './user';
import account from './account';
import auth from './auth';
import { PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  users,
  user,
  auth,
  accounts,
  account,
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
