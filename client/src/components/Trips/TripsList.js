import React from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import TripItem from './TripItem';

export default function TripsList() {
    const {trips} = useSelector((state) => {
                return state.trips;
              })
  return (
    <Row className="d-flex">
        {trips.map(trip =>
            <TripItem key={trip.id} trip={trip}/>
        )}
    </Row>
  )
}
