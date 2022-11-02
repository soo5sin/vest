import baseApi from '../../api/base';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { USERS } from '../../constants/user';
import { extraReducerUtils } from '../../utils/extraReducer';
import { Users } from '../../types/user';

export const getUsersThunk = createAsyncThunk(USERS.GET, async () => {
  try {
    const response = await baseApi.get('/users');
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addUserThunk = createAsyncThunk(USERS.NEW, async (newUser: Users) => {
  try {
    const response = await baseApi.post('/users', newUser);
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
