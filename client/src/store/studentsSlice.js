import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [
  ]
};

const classesSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    }
  },
});

export const { setStudents } = classesSlice.actions;
export default classesSlice.reducer;