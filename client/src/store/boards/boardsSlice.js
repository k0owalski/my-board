/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_GET_BOARDS = 'http://localhost/api/board/';

const name = 'boards';

const initialState = {
  boards: null, // array of { id: number, name: string, code: string, createdBy: string(userID), createdAt: string(date) }
};

const createExtraActions = () => {
  const getBoards = createAsyncThunk('boards/getBoards', async () => {
    try {
      const response = await fetch(API_GET_BOARDS, {
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

  return { getBoards: getBoards() };
};

const extraActions = createExtraActions();

const createExtraReducers = () => {
  const getBoards = () => {
    const { pending, fullfield, rejected } = extraActions.getBoards;

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
    ...getBoards,
  };
};

const boardsSlice = createSlice({
  name,
  initialState,
  extraReducers: createExtraReducers(),
});

export const { getBoards } = {
  ...boardsSlice.actions,
  ...extraActions,
};

export default boardsSlice.reducer;
