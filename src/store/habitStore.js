import { configureStore } from "@reduxjs/toolkit";
import habitReducers from "../slices/habitSlice";

export const store = configureStore({
  reducer: habitReducers,
});
