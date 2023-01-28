import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoggedInUser, Sign } from '../../types/auth';
import api from '../../api/instance';
import { UserToken } from '../../utils/userToken';
import { AxiosError } from 'axios';
import { UserEmail } from '../../utils/userEmail';
import { ROUTE } from '../../constants/route';
import { clearAuth } from '../../utils/auth';
import { Navigate } from 'react-router-dom';

const AUTH = {
  SIGNIN: 'auth/signIn',
  SIGNOUT: 'auth/signOut',
};

export const signInThunk = createAsyncThunk(
  AUTH.SIGNIN,
  async ({ email, password }: Sign, { rejectWithValue }) => {
    try {
      const response = await api.post('/login', {
        email,
        password,
      });
      const receivedToken = response.data.accessToken;
      const receivedEmail = response.data.user.email;

      UserToken.set(receivedToken);
      UserEmail.set(receivedEmail);

      window.location.replace(ROUTE.MAIN);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        alert(error.response.data);
      } else {
        alert(rejectWithValue(error));
      }
    }
  },
);

export const signOutThunk = createAsyncThunk(AUTH.SIGNOUT, async () => {
  clearAuth();
  window.location.replace(ROUTE.LOGIN);
  return initialState.data;
});

const initialState: InitialState = {
  isAuthorized: false,
  isLoading: false,
  error: null,
  data: {
    accessToken: '',
    user: {
      email: '',
      id: null,
    },
  },
};

interface InitialState {
  isAuthorized: boolean;
  isLoading: boolean;
  error: null;
  data: LoggedInUser;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signInThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signInThunk.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.isAuthorized = true;
      state.data = action.payload;
    },
    [signInThunk.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [signOutThunk.fulfilled.type]: (state, action) => {
      state.isAuthorized = false;
      state.data = action.payload;
    },
  },
});

export default authSlice.reducer;
