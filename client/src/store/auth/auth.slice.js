import { createSlice } from '@reduxjs/toolkit';

const name = 'auth';
const initialState = {
  isAuth: false,
};

const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    setAuth: (state, { payload }) => ({ ...state, isAuth: payload }),
  },
});

export const { setAuth } = userSlice.actions;

export default userSlice.reducer;
