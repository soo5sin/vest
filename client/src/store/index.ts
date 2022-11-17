import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/users';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import logger from 'redux-logger';
import accountsReducer from './reducers/accounts';
import userReducer from './reducers/user';
import accountReducer from './reducers/account';
import authReducer from './reducers/auth';

const store = configureStore({
  reducer: {
    users: usersReducer,
    accounts: accountsReducer,
    user: userReducer,
    account: accountReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
