import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trips: [],
  selectedTown: "",
  page: 1,
  totalCount: 0,
  limit: 9
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    setTrips: (state, action) => {
      state.trips = action.payload;
    },
    setSelectedTown: (state, action) => {
      state.selectedTown = action.payload;
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

export const { setTrips, setSelectedTown, setPage, setTotalCount, setLimit } = tripsSlice.actions;
export default tripsSlice.reducer;