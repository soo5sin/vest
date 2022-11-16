import api from '../../api/instance';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { USERS } from '../../constants/users';
import { extraReducerUtils } from '../../utils/extraReducer';
import { User } from '../../types/user';
import { AxiosError } from 'axios';

export const getUsersThunk = createAsyncThunk(USERS.GET, async (params?: object) => {
  try {
    const response = await api.get(`/users`, { params });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data);
    } else {
      throw new Error('fail to get user information');
    }
  }
});

export const addUserThunk = createAsyncThunk(USERS.NEW, async (newUser: User) => {
  try {
    const response = await api.post('/users', newUser);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data);
    } else {
      throw new Error('fail to add user information');
    }
  }
});

export const updateUserThunk = createAsyncThunk(
  USERS.UPDATE,
  async ({ id, newName }: { id: number | null; newName: string }) => {
    try {
      const response = await api.patch(`/users/${id}`, { name: newName });
      return response;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data);
      } else {
        throw new Error('fail to update user information');
      }
    }
  },
);

export const deleteUserThunk = createAsyncThunk(USERS.DELETE, async (id: number | null) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data);
    } else {
      throw new Error('fail to delete user information');
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
  data: User[];
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
