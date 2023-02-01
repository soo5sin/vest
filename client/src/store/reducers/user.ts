import api from '../../api/instance';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { extraReducerUtils } from '../../utils/extraReducer';
import { User } from '../../types/user';
import { AxiosError } from 'axios';

const USER = {
  GET: 'user/getUser',
  NEW: 'user/newUser',
  UPDATE: 'user/updateUser',
  DELETE: 'user/deleteUser',
};

export const getUserThunk = createAsyncThunk(
  USER.GET,
  async (params?: Record<string, number | null | string | undefined>) => {
    try {
      const response = await api.get(`/users`, { params });
      const user = response.data[0];
      return user;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data);
      } else {
        throw new Error('fail to get user information');
      }
    }
  },
);

export const addUserThunk = createAsyncThunk(USER.NEW, async (newUser: User) => {
  try {
    const response = await api.post('/users', newUser);
    return response.data.user;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      alert(error.response.data);
      throw new Error(error.response.data);
    } else {
      throw new Error('fail to add user information');
    }
  }
});

export const updateUserThunk = createAsyncThunk(
  USER.UPDATE,
  async ({ id, newName }: { id: number | null; newName: string }) => {
    try {
      const response = await api.patch(`/users/${id}`, { name: newName });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data);
      } else {
        throw new Error('fail to update user information');
      }
    }
  },
);

export const deleteUserThunk = createAsyncThunk(USER.DELETE, async (id: number | null) => {
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

const INITIAL_USER = {
  id: 0,
  uuid: '',
  photo: '',
  name: '',
  password: '',
  email: '',
  age: 0,
  gender_origin: 0,
  birth_date: '',
  phone_number: '',
  address: '',
  detail_address: '',
  last_login: '',
  created_at: '',
  updated_at: '',
  allow_marketing_push: false,
  allow_invest_push: false,
  is_active: false,
  is_staff: false,
};

interface InitialState {
  isLoading: boolean;
  data: User;
  error: null;
}

const initialState: InitialState = {
  isLoading: false,
  data: INITIAL_USER,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    ...extraReducerUtils(getUserThunk),
    ...extraReducerUtils(updateUserThunk),
    ...extraReducerUtils(deleteUserThunk),
    ...extraReducerUtils(addUserThunk),
  },
});

export default userSlice.reducer;
