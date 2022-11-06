import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'store/user/userSlice';
import boardReducer from 'store/boards/boardsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    boards: boardReducer,
  },
});

export default store;
