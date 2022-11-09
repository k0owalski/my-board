import { createSlice } from '@reduxjs/toolkit';

const name = 'boards';
const initialState = [];

const boardsSlice = createSlice({
  name,
  initialState,
  reducers: {
    setBoards: (state, payload) => ({ ...state, ...payload }),
  },
});

export const { setBoards } = boardsSlice.actions;

export default boardsSlice.reducer;
