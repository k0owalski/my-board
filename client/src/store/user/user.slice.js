import { createSlice } from '@reduxjs/toolkit';

const name = 'user';

const initialState = {
  email: null, // string
  username: null, // string
  firstname: null, // string
  lastname: null, // string
  profileImage: null, // string
};

const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    setUser: (state, { payload }) => ({ ...state, ...payload }),
    forgetUser: (state) => ({ ...state, ...initialState }),
  },
});

export const { setUser, forgetUser } = userSlice.actions;

export default userSlice.reducer;
