import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employee: {},
  isAuth: true,
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setEmployee: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setIsAuth, setUser } = employeesSlice.actions;
export default employeesSlice.reducer;