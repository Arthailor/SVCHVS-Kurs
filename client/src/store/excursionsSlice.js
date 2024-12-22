import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  excursions: [
  ],
  selectedTrip: "All",
  selectedClass: "All",
  page: 1,
  totalCount: 0,
  limit: 10
};

const excursionsSlice = createSlice({
  name: 'excursions',
  initialState,
  reducers: {
    setExcursions: (state, action) => {
      state.excursions = action.payload;
    },
    setSelectedTrip: (state, action) => {
      state.selectedTrip = action.payload;
      state.page = 1;
    },
    setSelectedClass: (state, action) => {
      state.selectedClass = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const { setExcursions, setSelectedTrip, setSelectedClass, setPage, setTotalCount, setLimit } = excursionsSlice.actions;
export default excursionsSlice.reducer;