import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trips: [],
  selectedTown: ""
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
    },
  },
});

export const { setTrips, setSelectedTown } = tripsSlice.actions;
export default tripsSlice.reducer;