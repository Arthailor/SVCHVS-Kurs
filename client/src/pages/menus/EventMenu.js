import React, { useEffect } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setSelectedDate } from '../../store/eventsSlice';
import EventsList from '../../components/EventsList';
import Pages from '../../components/Pages';
import { fetchClasses, fetchStudents } from '../../http/modelAPI';
import { setClasses } from '../../store/classesSlice';
import { setStudents } from '../../store/studentsSlice';

export default function EventMenu() {
  const { selectedDate, page, totalCount, limit } = useSelector(state => state.events);

  const dispatch = useDispatch();

  const handleSelectedDate = (date) => {
    dispatch(setSelectedDate(date));
  };
  const handlePage = (page) => {
    dispatch(setPage(page));
  };
  const handleClasses = (c) => {
    dispatch(setClasses(c));
  };
  const handleStudents = (s) => {
    dispatch(setStudents(s));
  };
  useEffect(() => {
      fetchClasses( 1, 999).then(data => {
        handleClasses(data.rows)
      })
      fetchStudents(null, 1, 999).then(data => {
        handleStudents(data.rows)
      })
    }, [])
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <Form.Control
            type="date"
            className="mt-2"
            value={selectedDate}
            onChange={e => handleSelectedDate(e.target.value)}
          />
        </Col>
        <Col md={9} className="mt-2">
          <EventsList />
          <Pages totalCount={totalCount} limit={limit} page={page} handlePage={(p) => handlePage(p)} />
        </Col>
      </Row>
    </Container>
  )
}
