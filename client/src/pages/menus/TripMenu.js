import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TownsBar from '../../components/Trips/TownsBar'
import TripsList from '../../components/Trips/TripsList'
import { setTrips, setTotalCount, setPage } from "../../store/tripsSlice"
import { fetchTrips } from '../../http/modelAPI'
import { useDispatch, useSelector } from 'react-redux'
import Pages from '../../components/Pages'

export default function TripMenu() {
  const [allTrips, setAllTrips] = React.useState([]);

  const { page, selectedTown, totalCount, limit } = useSelector((state) => {
    return state.trips;
  })

  const dispatch = useDispatch();
  const handleTrips = (t) => {
    dispatch(setTrips(t))
  }
  const handleTotalCount = (c) => {
    dispatch(setTotalCount(c))
  }
  const handlePage = (n) => {
    dispatch(setPage(n))
  }

  useEffect(() => {
    fetchTrips(null, 1, 8).then(data => {
      handleTrips(data.rows)
      handleTotalCount(data.count)
    })
    fetchTrips(null, 1, 999).then(data => {
      setAllTrips(data.rows)
    })
  }, [])

  const uniqueTowns = [...new Set(allTrips.map(trip => trip.town))].sort();

  useEffect(() => {
    if (selectedTown === "All") {
      fetchTrips(null, page, 8).then(data => {
        handleTrips(data.rows)
        handleTotalCount(data.count)
      })
    } else {
      fetchTrips(selectedTown, page, 8).then(data => {
        handleTrips(data.rows)
        handleTotalCount(data.count)
      })
    }
  }, [page, selectedTown])

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TownsBar uniqueTowns={uniqueTowns} />
        </Col>
        <Col md={9} className="mt-2">
          {allTrips.length === 0 ?
            "Empty list"
            :
            <TripsList />
          }
          <Pages totalCount={totalCount} limit={limit} page={page} handlePage={(p) => handlePage(p)} />
        </Col>
      </Row>
    </Container>
  )
}
