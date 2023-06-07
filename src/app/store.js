import { configureStore } from '@reduxjs/toolkit';
import userlistReducer from '../features/userlist/userlistSlice';

export default configureStore({
  reducer: {
    userList: userlistReducer,
  },
});
