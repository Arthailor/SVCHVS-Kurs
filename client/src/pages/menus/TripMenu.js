import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TownsBar from '../../components/Trips/TownsBar'
import TripsList from '../../components/Trips/TripsList'
import { setTrips } from "../../store/tripsSlice"
import { fetchTrips } from '../../http/modelAPI'
import { useDispatch } from 'react-redux'

export default function TripMenu() {
  const dispatch = useDispatch();
  const handleTrips = (t) => {
    dispatch(setTrips(t))
  }

  useEffect(() => {
    fetchTrips().then(data => handleTrips(data.rows))
  }, [])
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TownsBar />
        </Col>
        <Col md={9}>
          <TripsList />
        </Col>
      </Row>
    </Container>
  )
}
