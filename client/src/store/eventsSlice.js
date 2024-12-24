import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: [
    ],
    selectedDate: "",
    page: 1,
    totalCount: 0,
    limit: 6
};

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEvents: (state, action) => {
            state.events = action.payload;
        },
        setSelectedDate: (state, action) => {
            state.selectedDate = action.payload;
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

export const { setEvents, setSelectedDate, setPage, setTotalCount, setLimit } = eventsSlice.actions;
export default eventsSlice.reducer;