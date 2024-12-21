import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setClasses, setTotalCount, setPage } from "../../store/classesSlice"
import Pages from '../../components/Pages'
import ClassesList from '../../components/Classes/ClassesList';
import { fetchClasses } from '../../http/modelAPI'

export default function ClassMenu() {
  const { classes } = useSelector((state) => {
    return state.classes;
  })
  const { page, totalCount, limit } = useSelector((state) => {
    return state.classes;
  })
  const dispatch = useDispatch();
  const handleClasses = (t) => {
    dispatch(setClasses(t))
  }
  const handleTotalCount = (c) => {
    dispatch(setTotalCount(c))
  }
  const handlePage = (n) => {
    dispatch(setPage(n))
  }
  useEffect(() => {
    fetchClasses(1, 4).then(data => {
      handleClasses(data.rows)
      handleTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchClasses(page, 4).then(data => {
      handleClasses(data.rows)
      handleTotalCount(data.count)
    })
  }, [page])
  return (
    <Container>
      <Row className="mt-2">
        <Col className="mt-2">
          <ClassesList classes={classes} />
          <Pages totalCount={totalCount} limit={limit} page={page} handlePage={(p) => handlePage(p)} />
        </Col>
      </Row>
    </Container>
  )
}
