import { BrowserRouter } from "react-router-dom";
import { setEmployee, setIsAuth } from "./store/employeesSlice"
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { useEffect, useState, useCallback } from "react";
import { check } from "./http/employeeAPI";
import { useDispatch } from 'react-redux'
import { Spinner } from "react-bootstrap";
import { jwtDecode } from "jwt-decode"

function App() {
  // const [loading, SetLoading] = useState(true)

  // const dispatch = useDispatch();

  // const handleEmployee = (ob) => {
  //   dispatch(setEmployee(ob))
  // }
  // const handleAuth = (bool) => {
  //   dispatch(setIsAuth(bool))
  // }
  // const employee = jwtDecode(localStorage.getItem('token'))

  // useEffect(() => {
  //   check(employee).then(data => {
  //     handleEmployee(data)
  //     handleAuth(true)
  //   }).finally(() => SetLoading(false))
  // }, [])

  // if (loading) {
  //   return <Spinner animation={"grow"} />
  // }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
