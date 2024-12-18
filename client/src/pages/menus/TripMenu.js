import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TownsBar from '../../components/Trips/TownsBar'
import TripsList from '../../components/Trips/TripsList'

export default function TripMenu() {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TownsBar />
        </Col>
        <Col md={9}>
          <TripsList/>
        </Col>
      </Row>
    </Container>
  )
}
