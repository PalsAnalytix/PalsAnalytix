import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    personalInfo: null,
    stats: {
      totalAttempted: 0,
      cfa: 0,
      frm: 0,
      scr: 0,
    },
  },
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setStats: (state, action) => {
      state.stats = action.payload;
    },
  },
});

export const { setPersonalInfo, setStats } = userSlice.actions;
export default userSlice.reducer;
