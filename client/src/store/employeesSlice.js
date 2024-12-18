import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employee: {},
  isAuth: false,
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
  },
});

export const { setIsAuth, setEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;