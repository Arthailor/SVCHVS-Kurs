import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedTown } from "../../store/tripsSlice"

export default function TownsBar({ uniqueTowns }) {
  const { selectedTown } = useSelector((state) => {
    return state.trips;
  })
  const dispatch = useDispatch();
  const handleTownSelection = (string) => {
    dispatch(setSelectedTown(string))
  }
  return (
    <ListGroup>
      <ListGroup.Item
        style={{ cursor: "pointer" }}
        active={"All" === selectedTown}
        onClick={() => handleTownSelection("All")}
      >
        All
      </ListGroup.Item>
      {uniqueTowns.map(town =>
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={town === selectedTown}
          onClick={() => handleTownSelection(town)}
          key={town}
        >
          {town}
        </ListGroup.Item>
      )}
    </ListGroup>
  )
}
