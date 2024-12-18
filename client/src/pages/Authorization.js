import React from 'react'
import { Container, Form, Card, Button, Row } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'
// import { REGISTRATION_ROUTE } from '../utils/consts'

export default function Authorization() {
  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">Authorization</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-2"
            placeholder="Email"
          />
          <Form.Control
            className="mt-2"
            placeholder="Password"
          />
          <Row className="d-flex justify-content-between mt-3">
            {/* <NavLink to={REGISTRATION_ROUTE}>
              Registration
            </NavLink> */}
            <Button className="mt-3 align-self-end" variant={"outline-primary"}>
              Log in
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
}

