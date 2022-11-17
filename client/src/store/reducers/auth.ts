import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUserId: (state, { payload }) => {
      state.userId = payload;
    },
  },
});

export default authSlice.reducer;
export const { getUserId } = authSlice.actions;
