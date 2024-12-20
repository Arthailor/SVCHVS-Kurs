import React from 'react'
import { Container, Form, Card, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ATTENDANCE_ROUTE, CLASSES_ROUTE, EVENTS_ROUTE, EXCURSIONS_ROUTE, TRIPS_ROUTE } from '../utils/consts';

export default function MainMenu() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Main menu</h2>
        <Form className="d-flex flex-column">
          <NavLink to={TRIPS_ROUTE} className="mt-3 ">
            <Button variant={"outline-primary"} style={{ width: "100%" }}>Trips</Button>
          </NavLink>
          <NavLink to={EXCURSIONS_ROUTE} className="mt-3">
            <Button variant={"outline-primary"} style={{ width: "100%" }}>Excursions</Button>
          </NavLink>
          <NavLink to={CLASSES_ROUTE} className="mt-3">
            <Button variant={"outline-primary"} style={{ width: "100%" }}>Classes</Button>
          </NavLink>
          <NavLink to={ATTENDANCE_ROUTE} className="mt-3">
            <Button variant={"outline-primary"} style={{ width: "100%" }}>Attendance</Button>
          </NavLink>
          <NavLink to={EVENTS_ROUTE} className="mt-3">
            <Button variant={"outline-primary"} style={{ width: "100%" }}>Events</Button>
          </NavLink>

        </Form>
      </Card>
    </Container>
  )
}
