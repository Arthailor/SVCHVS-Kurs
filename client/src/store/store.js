import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeesSlice";
import tripsReducer from "./tripsSlice";
import classReducer from "./classesSlice";
import studentsReducer from "./studentsSlice"

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    trips: tripsReducer,
    classes: classReducer,
    students: studentsReducer
  },
});

export default store;
