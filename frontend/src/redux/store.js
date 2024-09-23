import { configureStore } from '@reduxjs/toolkit'
import questionReducer from "./slices/questionsSlice";

export const store = configureStore({
  reducer: {
    questions : questionReducer,
  },
})