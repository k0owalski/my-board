import { createSlice } from '@reduxjs/toolkit';

const name = 'ui';
const initialState = {
  createBoardVisible: false,
  joinBoardVisible: false,
};

const uiSlice = createSlice({
  name,
  initialState,
  reducers: {
    setCreateBoardVisible: (state, { payload }) => ({
      ...state,
      createBoardVisible: payload,
    }),
    setJoinBoardVisible: (state, { payload }) => ({
      ...state,
      joinBoardVisible: payload,
    }),
  },
});

export const { setCreateBoardVisible, setJoinBoardVisible } = uiSlice.actions;

export default uiSlice.reducer;
