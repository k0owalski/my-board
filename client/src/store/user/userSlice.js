import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null, // string
  boards: null, // array
  settings: null, // object
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserData: () => null,
  },
});

export const { getUserData } = userSlice.actions;

export default userSlice.reducer;
