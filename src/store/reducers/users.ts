import baseApi from '../../api/base';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { USERS } from '../../constants/user';
import { extraReducerUtils } from '../../utils/extraReducer';

export const getUsersThunk = createAsyncThunk(USERS.GET, async () => {
  try {
    const response = await baseApi.get('/users');
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
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
