import api from '../../api/instance';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import { AxiosError } from 'axios';
import { extraReducerUtils } from '../../utils/extraReducer';

const SEARCH = {
  USER: 'search/getUser',
};

export const searchUserThunk = createAsyncThunk(
  SEARCH.USER,
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
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    ...extraReducerUtils(searchUserThunk),
  },
});

export default usersSlice.reducer;
