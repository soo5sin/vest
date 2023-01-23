import api from '../../api/instance';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import { AxiosError } from 'axios';

const USERS = {
  GET: 'users/getUsers',
};

export const getUsersThunk = createAsyncThunk(
  USERS.GET,
  async (params?: Record<string, string> | Record<string, number>) => {
    try {
      const response = await api.get(`/users`, { params });
      const users = response.data;
      return users;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data);
      } else {
        throw new Error('fail to get user information');
      }
    }
  },
);

interface InitialState {
  isLoading: boolean;
  data: User[];
  error: null;
}

const initialState: InitialState = {
  isLoading: false,
  data: [],
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [getUsersThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getUsersThunk.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.data = [...state.data, ...action.payload];
    },
    [getUsersThunk.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default usersSlice.reducer;
