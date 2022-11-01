/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null, // string
  username: null, // string
  firstname: null, // string
  lastname: null, // string
  profileImage: null, // string
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserData: async (state) => {
      const response = fetch('http://localhost/api/user/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });

      if (response.ok) {
        const userdata = (await response).json();

        state = { ...userdata };
      }
    },
  },
});

export const { getUserData } = userSlice.actions;

export default userSlice.reducer;
