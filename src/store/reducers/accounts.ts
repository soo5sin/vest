import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/base';
import { ACCOUNTS } from '../../constants/account';

import { extraReducerUtils } from '../../utils/extraReducer';

export const getAccountsThunk = createAsyncThunk(ACCOUNTS.GET, async (params?: object) => {
  try {
    const response = await api.get(`/accounts`, { params });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

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
