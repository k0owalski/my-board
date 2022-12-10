import { createSlice } from '@reduxjs/toolkit';

const name = 'ui';
const initialState = {
  createBoardVisible: false,
  joinBoardVisible: false,
  info: {
    isVisible: false,
    message: '',
    variant: 'info',
  },
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
    setInfo: (state, { payload }) => ({
      ...state,
      info: { ...state.info, ...payload },
    }),
  },
});

export const { setCreateBoardVisible, setJoinBoardVisible, setInfo } =
  uiSlice.actions;

export default uiSlice.reducer;
