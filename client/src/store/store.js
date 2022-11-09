import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'store/auth/auth.slice';
import userReducer from 'store/user/user.slice';
import boardReducer from 'store/boards/boards.slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    boards: boardReducer,
  },
});

export default store;
