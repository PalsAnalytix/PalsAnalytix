import { configureStore } from '@reduxjs/toolkit'
import questionReducer from "./slices/questionsSlice";
import testsReducer from "./slices/testsSlice"

export const store = configureStore({
  reducer: {
    questions : questionReducer,
    tests: testsReducer,  
  },
})