import { combineReducers } from '@reduxjs/toolkit';
import users from './users';
import accounts from './accounts';
import user from './user';
import account from './account';
import auth from './auth';

const rootReducer = combineReducers({
  users,
  user,
  accounts,
  account,
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
