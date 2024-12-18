import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedTown } from "../../store/tripsSlice"

export default function TownsBar() {
    const {trips, selectedTown} = useSelector((state) => {
            return state.trips;
          })
    const uniqueTowns = [...new Set(trips.map(trip => trip.town))].sort();
    const dispatch = useDispatch();
    const handleTownSelection = (string) => {
        dispatch(setSelectedTown(string))
    }
  return (
    <ListGroup>
      {uniqueTowns.map(town => 
        <ListGroup.Item 
        style={{cursor: "pointer"}}
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
