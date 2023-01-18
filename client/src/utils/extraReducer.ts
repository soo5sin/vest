import { AsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user';
import { Account } from '../types/account';

interface State {
  isLoading: boolean;
  data: User[] | Account[] | User | Account;
  error: null | string;
}

const extraReducerStatus = {
  pending: (state: State) => {
    state.isLoading = true;
  },
  fulfilled: (state: State, action: PayloadAction<User[] | Account[] | User | Account>) => {
    state.isLoading = false;
    state.data = action.payload;
  },
  rejected: (state: State, action: any) => {
    state.isLoading = false;
    state.error = action.error.message;
  },
};

export const extraReducerUtils = (
  thunk:
    | AsyncThunk<any, Record<string, string | undefined> | undefined, {}>
    | AsyncThunk<any, Record<string, string> | Record<string, number> | undefined, {}>
    | AsyncThunk<
        any,
        {
          id: number | null;
          newName: string;
        },
        {}
      >
    | AsyncThunk<any, number | null, {}>
    | AsyncThunk<any, User, {}>,
) => {
  return {
    [thunk.pending.type]: extraReducerStatus.pending,
    [thunk.fulfilled.type]: extraReducerStatus.fulfilled,
    [thunk.rejected.type]: extraReducerStatus.rejected,
  };
};
