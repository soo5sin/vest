import { AsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Users } from '../types/user';

export interface State {
  isLoading: boolean;
  data: Users[];
  error: null;
}

export const extraReducerStatus = {
  pending: (state: State) => {
    state.isLoading = true;
  },
  fulfilled: (state: State, action: any) => {
    state.isLoading = false;
    state.data = action.payload.data;
  },
  rejected: (state: State, action: any) => {
    state.isLoading = false;
    state.error = action.error.message;
  },
};

export const extraReducerUtils = (
  thunk:
    | AsyncThunk<AxiosResponse<any, any> | undefined, number, {}>
    | AsyncThunk<AxiosResponse<any, any> | undefined, void, {}>,
) => {
  return {
    [thunk.pending.type]: extraReducerStatus.pending,
    [thunk.fulfilled.type]: extraReducerStatus.fulfilled,
    [thunk.rejected.type]: extraReducerStatus.rejected,
  };
};
