import { configureStore } from "@reduxjs/toolkit"
import employeesReducer from "./employeesSlice"
import tripsReducer from "./tripsSlice"
import classReducer from "./classesSlice"
import studentsReducer from "./studentsSlice"
import excursionsReducer from "./excursionsSlice"
import attendanceReducer from "./attendanceSlice"
import eventsReducer from "./eventsSlice"
import participantsReducer from "./participantsSlice"

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    trips: tripsReducer,
    classes: classReducer,
    students: studentsReducer,
    excursions: excursionsReducer,
    attendance: attendanceReducer,
    events: eventsReducer,
    participants: participantsReducer
  },
});

export default store;
