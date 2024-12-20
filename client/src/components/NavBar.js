import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { setIsAuth, setEmployee } from "../store/employeesSlice"


export default function NavBar() {
  const { isAuth, employee } = useSelector((state) => {
    return state.employees;
  })

  const dispatch = useDispatch();
  const handleAuth = (bool) => {
    dispatch(setIsAuth(bool))
  }
  const handleEmployee = (ob) => {
    dispatch(setEmployee(ob))
  }

  const history = useNavigate()

  const logOut = () => {
    handleEmployee({})
    handleAuth(false)
    localStorage.removeItem('token')
  }

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={MAIN_ROUTE}>School</NavLink>
        {isAuth ?
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={"outline-light"} onClick={() => history(ADMIN_ROUTE)} className="mr-4">Admin Menu</Button>
            <Button variant={"outline-light"} onClick={() => logOut()} className="ml-4">Exit</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Authorization</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  )
}
