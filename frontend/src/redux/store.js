import { configureStore } from '@reduxjs/toolkit'
import questionReducer from "./slices/questionsSlice";
import testsReducer from "./slices/testsSlice"
import testPageReducer  from "./slices/testPageSlice";

export const store = configureStore({
  reducer: {
    questions : questionReducer,
    tests: testsReducer,  
    testPage : testPageReducer
  },
})