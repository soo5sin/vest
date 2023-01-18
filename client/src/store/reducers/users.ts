import api from '../../api/instance';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { USERS } from '../../constants/user';
import { extraReducerUtils } from '../../utils/extraReducer';
import { User } from '../../types/user';
import { AxiosError } from 'axios';

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
    ...extraReducerUtils(getUsersThunk),
  },
});

export default usersSlice.reducer;
