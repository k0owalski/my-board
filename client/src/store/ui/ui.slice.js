import { createSlice } from '@reduxjs/toolkit';

const name = 'ui';
const initialState = {
  createBoard: {
    isVisible: false,
  },
  joinBoard: {
    isVisible: false,
  },
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
    setCreateBoard: (state, { payload }) => ({
      ...state,
      createBoard: { ...state.createBoard, ...payload },
    }),
    setJoinBoard: (state, { payload }) => ({
      ...state,
      joinBoard: { ...state.joinBoard, ...payload },
    }),
    setInfo: (state, { payload }) => ({
      ...state,
      info: { ...state.info, ...payload },
    }),
  },
});

export const { setCreateBoard, setJoinBoard, setInfo } = uiSlice.actions;

export default uiSlice.reducer;
