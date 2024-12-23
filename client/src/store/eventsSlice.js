import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: [
        // { event_id: 1, name: "Олимпиада по математике", date: "2024-12-1" },
        // { event_id: 2, name: "Соревнование по физкультуре", date: "2024-12-2" },
        // { event_id: 3, name: "Олимпиада по английскому языку", date: "2024-12-3" },
        // { event_id: 4, name: "Олимпиада по физике", date: "2024-12-4" },
        // { event_id: 5, name: "Конкурс 'Лучший певец'", date: "2024-12-5" },
        // { event_id: 6, name: "Соревнование по карате", date: "2024-12-6" },
        // { event_id: 7, name: "Конкурс 'Лучший танцор'", date: "2024-12-7" },
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