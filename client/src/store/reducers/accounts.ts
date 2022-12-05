import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from '../../api/instance';
import { ACCOUNTS } from '../../constants/account';
import { Account } from '../../types/account';
import { extraReducerUtils } from '../../utils/extraReducer';

export const getAccountsThunk = createAsyncThunk(
  ACCOUNTS.GET,
  async (params?: Record<string, string>) => {
    try {
      const response = await api.get(`/accounts`, { params });
      const accounts = response.data;
      return accounts;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data);
      } else {
        throw new Error('fail to get account information');
      }
    }
  },
);

const initialState: InitialState = {
  isLoading: false,
  data: [],
  error: null,
};

interface InitialState {
  isLoading: boolean;
  data: Account[];
  error: null;
}

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
  extraReducers: {
    ...extraReducerUtils(getAccountsThunk),
  },
});

export default accountsSlice.reducer;
