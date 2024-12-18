import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  excursions: [
    { excursion_id: 1, trip_id: 1, class_id: 1, date: '2024-11-20' },
    { excursion_id: 2, trip_id: 1, class_id: 2, date: '2024-11-20' },
    { excursion_id: 3, trip_id: 2, class_id: 1, date: '2024-11-20' },
    { excursion_id: 4, trip_id: 2, class_id: 2, date: '2024-11-20' },
  ]
};

const excursionsSlice = createSlice({
  name: 'excursions',
  initialState,
  reducers: {
  },
});

export const { } = excursionsSlice.actions;
export default excursionsSlice.reducer;