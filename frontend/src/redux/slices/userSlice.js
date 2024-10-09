import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Async thunk for fetching user data
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/${userId}`);
      console.log(response);
      if (!response.statusText) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.data;
      console.log(userData);

      // Fetch the question details in bulk using the question IDs from user data
      if (userData.attemptedQuestions && userData.attemptedQuestions.length > 0) {
        const questionDetails = await thunkAPI.dispatch(fetchBulkQuestionDetails(userData.attemptedQuestions)).unwrap();
        userData.questionDetails = questionDetails;
        userData.questionStats = calculateQuestionStats(questionDetails);
      }

      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetching question details in bulk
export const fetchBulkQuestionDetails = createAsyncThunk(
  'user/fetchBulkQuestionDetails',
  async (questionIds, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/getQuestionsByIds`,{ids : questionIds});
      if (!response.statusText) {
        throw new Error('Failed to fetch question details');
      }
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Helper function to calculate question stats based on course types
const calculateQuestionStats = (questions) => {
  const questionStats = { CFA: 0, FRM: 0, SCR: 0, Total: 0, Right: 0 };

  questions.forEach((question) => {
    questionStats.Total++;
    if (question.courses.includes('CFA')) {
      questionStats.CFA++;
    }
    if (question.courses.includes('FRM')) {
      questionStats.FRM++;
    }
    if (question.courses.includes('SCR')) {
      questionStats.SCR++;
    }
    if (question.isCorrect) {
      questionStats.Right++;
    }
  });

  return questionStats;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    _id: null,
    name: '',
    email: '',
    auth0ID: '',
    picture: '',
    phoneNo: '',
    attemptedQuestions: [],
    questionDetails : [],
    attemptedTests: [],
    subscriptionId: '',
    purchaseDate: null,
    expiryDate: null,
    paymentId: '',
    amountPaid: 0,
    __v: 0,
    isLoggedIn: false,
    loading: false,
    error: null,
    currentChapterForWhatsapp : null,
    currentCourseForWhatsapp : null,
    questionStats: { CFA: 0, FRM: 0, SCR: 0, Total: 0, Right: 0 },
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      // Reset user data
      Object.assign(state, userSlice.getInitialState());
    },
    updateUserInfo: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        Object.assign(state, action.payload);
        state.isLoggedIn = true;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBulkQuestionDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBulkQuestionDetails.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchBulkQuestionDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login, logout, updateUserInfo } = userSlice.actions;

export default userSlice.reducer;
