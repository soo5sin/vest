import { combineReducers } from '@reduxjs/toolkit';
import users from './users';
import accounts from './accounts';

const rootReducer = combineReducers({
  users,
  accounts,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
