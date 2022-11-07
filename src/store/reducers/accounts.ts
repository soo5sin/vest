import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/base';
import { ACCOUNTS } from '../../constants/account';

import { extraReducerUtils } from '../../utils/extraReducer';

export const getAccountsThunk = createAsyncThunk(
  ACCOUNTS.GET,
  async (params?: Record<string, string>) => {
    try {
      const serializedParams = params ? `?${new URLSearchParams(params).toString()}` : '';
      const response = await api.get(`/accounts${serializedParams}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
  extraReducers: {
    ...extraReducerUtils(getAccountsThunk),
  },
});

export default accountsSlice.reducer;
