import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { deleteTrip } from '../../http/modelAPI';


export default function TripModal(props) {
  const { isAuth } = useSelector((state) => {
    return state.employees;
  })

  const delTrip = (tripId) => {
    deleteTrip(tripId).finally(() => window.location.reload())
    props.onHide()
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.point_of_interest}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center align-items-center">
        <Image width={640} height={360} src={process.env.REACT_APP_API_URL + props.img} />
      </Modal.Body>
      {isAuth ?
        <Modal.Footer>
          <Button variant="outline-danger" onClick={() => { delTrip(props.trip_id) }}>Delete</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        :
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      }
    </Modal>
  )
}


