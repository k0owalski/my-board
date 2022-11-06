/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_GET_USER_DATA = 'http://localhost/api/user/me';

const name = 'user';

const initialState = {
  email: null, // string
  username: null, // string
  firstname: null, // string
  lastname: null, // string
  profileImage: null, // string
};

const createExtraActions = () => {
  const getUserData = createAsyncThunk(`${name}/getUserData`, async () => {
    try {
      const response = await fetch(API_GET_USER_DATA, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });

      return response.json();
    } catch (err) {
      return err;
    }
  });

  return { getUserData: getUserData() };
};

const extraActions = createExtraActions();

const createExtraReducers = () => {
  const getUserData = () => {
    const { pending, fullfield, rejected } = extraActions.getUserData;

    return {
      [pending]: (state) => {
        state = { loading: true };
      },
      [fullfield]: (state, { payload }) => {
        state = payload;
      },
      [rejected]: (state, { error }) => {
        state = { error };
      },
    };
  };

  return {
    ...getUserData,
  };
};

const userSlice = createSlice({
  name,
  initialState,
  extraReducers: createExtraReducers(),
});

export const { getUserData } = {
  ...userSlice.actions,
  ...extraActions,
};

export default userSlice.reducer;
