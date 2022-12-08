import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from '../../api/instance';
import { ACCOUNT } from '../../constants/account';
import { Account } from '../../types/account';
import { extraReducerUtils } from '../../utils/extraReducer';

export const getAccountThunk = createAsyncThunk(
  ACCOUNT.GET,
  async (params?: Record<string, string | undefined>) => {
    try {
      const response = await api.get(`/accounts`, { params });
      const account = response.data[0];
      return account;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data);
      } else {
        throw new Error('fail to get account information');
      }
    }
  },
);

const INITIAL_ACCOUNT = {
  id: 0,
  user_id: 0,
  uuid: '',
  broker_id: 0,
  status: 0,
  number: '',
  name: '',
  assets: '',
  payments: '',
  is_active: false,
  created_at: '',
  updated_at: '',
};

interface InitialState {
  isLoading: boolean;
  data: Account;
  error: null;
}

const initialState: InitialState = {
  isLoading: false,
  data: INITIAL_ACCOUNT,
  error: null,
};

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
  extraReducers: {
    ...extraReducerUtils(getAccountThunk),
  },
});

export default accountSlice.reducer;
