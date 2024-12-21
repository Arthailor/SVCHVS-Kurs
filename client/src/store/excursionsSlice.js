import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  excursions: [
    // { excursion_id: 1, trip_id: 1, class_id: 1, date: '2024-11-20' },
    // { excursion_id: 2, trip_id: 1, class_id: 2, date: '2024-11-20' },
    // { excursion_id: 3, trip_id: 2, class_id: 1, date: '2024-11-20' },
    // { excursion_id: 4, trip_id: 2, class_id: 2, date: '2024-11-20' },
    // { excursion_id: 5, trip_id: 1, class_id: 1, date: '2024-11-20' },
    // { excursion_id: 6, trip_id: 1, class_id: 2, date: '2024-11-20' },
    // { excursion_id: 7, trip_id: 2, class_id: 1, date: '2024-11-20' },
    // { excursion_id: 8, trip_id: 2, class_id: 2, date: '2024-11-20' },
  ],
  selectedTrip: "All",
  selectedClass: "All",
  page: 1,
  totalCount: 0,
  limit: 4
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