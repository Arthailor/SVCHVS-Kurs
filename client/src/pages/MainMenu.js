import React from 'react'
import { Container, Form, Card, Button, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ATTENDANCE_ROUTE, CLASSES_ROUTE, EVENTS_ROUTE, EXCURSIONS_ROUTE, TRIPS_ROUTE } from '../utils/consts';
import { seeding } from '../seeding';

export default function MainMenu() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Main menu</h2>
        <Form className="d-flex flex-column">
          <NavLink to={TRIPS_ROUTE} className="mt-3 " style={{textDecoration: 'none'}}>
            <Button className="d-flex justify-content-between" variant={"outline-primary"} style={{ width: "100%" }}>
              <Image width ="20" src="./museum.png" fluid/>
              <div style={{marginRight:20}}>Trips</div>
              <div></div>
            </Button>
          </NavLink>
          <NavLink to={EXCURSIONS_ROUTE} className="mt-3" style={{textDecoration: 'none'}}>
            <Button className="d-flex justify-content-between" variant={"outline-primary"} style={{ width: "100%" }}>
              <Image width ="20" src="./bus.png" fluid/>
              <div style={{marginRight:20}}>Excursions</div>
              <div></div>
            </Button>
          </NavLink>
          <NavLink to={CLASSES_ROUTE} className="mt-3" style={{textDecoration: 'none'}}>
            <Button className="d-flex justify-content-between" variant={"outline-primary"} style={{ width: "100%" }}>
              <Image width ="20" src="./hat.png" fluid/>
              <div style={{marginRight:20}}>Classes</div>
              <div></div>
            </Button>
          </NavLink>
          <NavLink to={ATTENDANCE_ROUTE} className="mt-3" style={{textDecoration: 'none'}}>
            <Button className="d-flex justify-content-between" variant={"outline-primary"} style={{ width: "100%" }}>
              <Image width ="20" src="./attend.png" fluid/>
              <div style={{marginRight:20}}>Attendance</div>
              <div></div>
            </Button>
          </NavLink>
          <NavLink to={EVENTS_ROUTE} className="mt-3" style={{textDecoration: 'none'}}>
            <Button className="d-flex justify-content-between" variant={"outline-primary"} style={{ width: "100%" }}>
              <Image width ="20" src="./table.png" fluid/>
              <div style={{marginRight:20}}>Events</div>
              <div></div>
            </Button>
          </NavLink>
          {/* <Button className="d-flex justify-content-center mt-3" variant={"outline-primary"} style={{ width: "100%" }} onClick={()=>{seeding()}}>
              <div>Seeding</div>
          </Button> */}
        </Form>
      </Card>
    </Container>
  )
}
