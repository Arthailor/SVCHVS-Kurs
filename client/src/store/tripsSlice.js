import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trips: [
    { trip_id: 1, town: "Брест", point_of_interest: "Брестская крепость", img: '' },
    { trip_id: 2, town: "Несвиж", point_of_interest: "Несвижский замок", img: '' },
    { trip_id: 3, town: "Мир", point_of_interest: "Мирский замок", img: '' },
    { trip_id: 4, town: "Брест", point_of_interest: "Брестская крепость", img: '' },
    { trip_id: 5, town: "Несвиж", point_of_interest: "Несвижский замок", img: '' },
    { trip_id: 6, town: "Мир", point_of_interest: "Мирский замок", img: '' },
    { trip_id: 7, town: "Брест", point_of_interest: "Брестская крепость", img: '' },
    { trip_id: 8, town: "Несвиж", point_of_interest: "Несвижский замок", img: '' },
    { trip_id: 9, town: "Мир", point_of_interest: "Мирский замок", img: '' },
  ],
  selectedTown: ""
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    setSelectedTown: (state, action) => {
        state.selectedTown = action.payload;
    },
  },
});

export const { setSelectedTown } = tripsSlice.actions;
export default tripsSlice.reducer;