import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { setIsAuth } from "../store/employeesSlice"


export default function NavBar() {
    const {isAuth} = useSelector((state) => {
        return state.employees;
      })
      
    const dispatch = useDispatch();
    const handleAuth = (bool) => {
        dispatch(setIsAuth(bool))
    }

    const history = useNavigate()

  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <NavLink style={{color: 'white'}} to={MAIN_ROUTE}>School</NavLink>
          {isAuth ? 
            <Nav className="ml-auto" style={{color: 'white'}}>
                <Button variant={"outline-light"} onClick={() => history(ADMIN_ROUTE)} className="mr-4">Admin Menu</Button>
                <Button variant={"outline-light"} onClick={() => handleAuth(false)} className="ml-4">Exit</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color: 'white'}}>
                <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Authorization</Button>
            </Nav>
          }
        </Container>
    </Navbar>
  )
}
