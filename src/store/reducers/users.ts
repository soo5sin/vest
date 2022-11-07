import api from '../../api/base';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { USERS } from '../../constants/user';
import { extraReducerUtils } from '../../utils/extraReducer';
import { Users } from '../../types/user';

export const getUsersThunk = createAsyncThunk(
  USERS.GET,
  async (params?: Record<string, string>) => {
    try {
      const serializedParams = params ? `?${new URLSearchParams(params).toString()}` : '';
      const response = await api.get(`/users${serializedParams}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const addUserThunk = createAsyncThunk(USERS.NEW, async (newUser: Users) => {
  try {
    const response = await api.post('/users', newUser);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateUserThunk = createAsyncThunk(
  USERS.UPDATE,
  async ({ id, newName }: { id: number | null; newName: string }) => {
    try {
      const response = await api.patch(`/users/${id}`, { name: newName });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
);

export const deleteUserThunk = createAsyncThunk(USERS.DELETE, async (id: number | null) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState: InitialState = {
  isLoading: false,
  data: [],
  error: null,
};

interface InitialState {
  isLoading: boolean;
  data: Users[];
  error: null;
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    ...extraReducerUtils(getUsersThunk),
  },
});

export default usersSlice.reducer;
