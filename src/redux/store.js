import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import authReducer from './features/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
