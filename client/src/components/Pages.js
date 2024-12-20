import React from 'react'
import { Pagination } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from "../store/tripsSlice"

export default function Pages() {
  const { totalCount, limit, page } = useSelector((state) => {
    return state.trips;
  })
  const dispatch = useDispatch();
    const handlePage = (n) => {
      dispatch(setPage(n))
    }
  const pageCount = Math.ceil(totalCount / limit)
  const pages = []

  for (let i = 0; i < pageCount; i++) {
    pages.push(i+1)
  }
  return (
    <Pagination className="mt-5">
      {pages.map(tripsPage =>
        <Pagination.Item key={tripsPage} active={page === tripsPage} onClick={() => handlePage(tripsPage)}>{tripsPage}</Pagination.Item>
      )}
    </Pagination>
  )
}
