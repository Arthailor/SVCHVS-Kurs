import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { createAndDownloadExcPdf, fetchClasses, fetchExcursions, fetchTrips } from '../../http/modelAPI'
import { useDispatch, useSelector } from 'react-redux'
import { setClasses } from '../../store/classesSlice'
import { setTrips } from '../../store/tripsSlice'
import ClassesDrop from '../../components/ClassesDrop'
import TripsDrop from '../../components/TripsDrop'
import { setExcursions, setPage, setSelectedClass, setSelectedTrip, setTotalCount } from '../../store/excursionsSlice'
import Pages from '../../components/Pages'
import ExcursionsList from '../../components/Excursions/ExcursionsList'

export default function ExcursionMenu() {
  const { classes } = useSelector((state) => {
    return state.classes;
  })
  const { trips } = useSelector((state) => {
    return state.trips;
  })
  const { excursions, selectedTrip, selectedClass, page, totalCount, limit } = useSelector((state) => {
    return state.excursions;
  })
  const dispatch = useDispatch();
  const handleClasses = (c) => {
    dispatch(setClasses(c))
  }
  const handleTrips = (t) => {
    dispatch(setTrips(t))
  }
  const handleExcursions = (e) => {
    dispatch(setExcursions(e))
  }
  const handlePage = (e) => {
    dispatch(setPage(e))
  }
  const handleTotalCount = (e) => {
    dispatch(setTotalCount(e))
  }

  const handleSelectedTrip = (t) => {
    dispatch(setSelectedTrip(t))
  }
  const handleSelectedClass = (c) => {
    dispatch(setSelectedClass(c))
  }


  useEffect(() => {
    fetchClasses(1, 999).then(data => {
      handleClasses(data.rows)
    })
    fetchTrips(null, 1, 999).then(data => {
      handleTrips(data.rows)
    })
    fetchExcursions(null, null, 1, 10).then(data => {
      handleExcursions(data.rows)
      handleTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    if (selectedTrip === "All" && selectedClass === "All") {
      fetchExcursions(null, null, page, 10).then(data => {
        handleExcursions(data.rows)
        handleTotalCount(data.count)
      })
    } else if (selectedTrip === "All") {
      fetchExcursions(null, selectedClass, page, 10).then(data => {
        handleExcursions(data.rows)
        handleTotalCount(data.count)
      })
    } else if (selectedClass === "All") {
      fetchExcursions(selectedTrip, null, page, 10).then(data => {
        handleExcursions(data.rows)
        handleTotalCount(data.count)
      })
    } else {
      fetchExcursions(selectedTrip, selectedClass, page, 10).then(data => {
        handleExcursions(data.rows)
        handleTotalCount(data.count)
      })
    }
  }, [page, selectedTrip, selectedClass])

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <ClassesDrop classes={classes} setClass={(c) => handleSelectedClass(c)} selectedClass={selectedClass} />
          <TripsDrop trips={trips} setTrip={(t) => handleSelectedTrip(t)} selectedTrip={selectedTrip} />
          <Button variant='outline-success' className="mt-2" onClick={() => { createAndDownloadExcPdf(excursions, classes, trips) }}>Download report</Button>
        </Col>
        <Col md={9} className="mt-2">
          {excursions.length === 0 ?
            "Empty list"
            :
            <ExcursionsList excursions={excursions} classes={classes} trips={trips} />
          }
          <Pages totalCount={totalCount} limit={limit} page={page} handlePage={(p) => handlePage(p)} />
        </Col>
      </Row>
    </Container>
  )
}
