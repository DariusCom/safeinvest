import { configureStore } from "@reduxjs/toolkit";
import stockApiReducer from "../features/stockApi/stockApiSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    stockApi: stockApiReducer,
    auth: authReducer,
  },
});
