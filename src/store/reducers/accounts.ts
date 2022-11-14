import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from '../../api/instance';
import { ACCOUNTS } from '../../constants/account';
import { Accounts } from '../../types/accounts';

import { extraReducerUtils } from '../../utils/extraReducer';

export const getAccountsThunk = createAsyncThunk(ACCOUNTS.GET, async (params?: object) => {
  try {
    const response = await api.get(`/accounts`, { params });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data);
    } else {
      throw new Error('fail to get account information');
    }
  }
});

const initialState: InitialState = {
  isLoading: false,
  data: [],
  error: null,
};

interface InitialState {
  isLoading: boolean;
  data: Accounts[];
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
