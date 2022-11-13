import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'store/auth/auth.slice';
import userReducer from 'store/user/user.slice';
import boardReducer from 'store/boards/boards.slice';
import uiReducer from 'store/ui/ui.slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    boards: boardReducer,
    ui: uiReducer,
  },
});

export default store;
