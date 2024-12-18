import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeesSlice";
import tripsReducer from "./tripsSlice";

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    trips: tripsReducer,
  },
});

export default store;
