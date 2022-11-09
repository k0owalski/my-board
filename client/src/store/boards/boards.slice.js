import { createSlice } from '@reduxjs/toolkit';

const name = 'boards';
const initialState = [];

const boardsSlice = createSlice({
  name,
  initialState,
  reducers: {
    setBoards: (_state, { payload }) => [...payload],
  },
});

export const { setBoards } = boardsSlice.actions;

export default boardsSlice.reducer;
