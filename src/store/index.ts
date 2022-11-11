import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/users';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import logger from 'redux-logger';
import accountsReducer from './reducers/accounts';

const store = configureStore({
  reducer: {
    users: usersReducer,
    accounts: accountsReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
