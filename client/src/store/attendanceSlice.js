import { createSlice } from '@reduxjs/toolkit';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

const initialState = {
  attendance: [
  ],
  selectedDate: today,
  selectedClass: "All"
};

const excursionsSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    setAttendance: (state, action) => {
      state.attendance = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
      state.page = 1;
    },
    setSelectedClass: (state, action) => {
      state.selectedClass = action.payload;
      state.page = 1;
    }
  },
});

export const { setAttendance, setSelectedDate, setSelectedClass } = excursionsSlice.actions;
export default excursionsSlice.reducer;