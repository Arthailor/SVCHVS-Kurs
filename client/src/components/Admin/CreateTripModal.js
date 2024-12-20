import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { createTrip } from '../../http/modelAPI';

export default function CreateTripModal({ show, onHide }) {

  const [town, setTown] = useState('')
  const [poi, setPoi] = useState('')
  const [file, setFile] = useState(null)

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addTrip = () => {
    const formData = new FormData()
    formData.append('town', town)
    formData.append('point_of_interest', poi)
    formData.append('img', file)
    createTrip(formData).then(data => onHide())
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add trip
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control className="mt-2" placeholder={"Town"} value={town} onChange={e => setTown(e.target.value)} />
          <Form.Control className="mt-2" placeholder={"Point of interest"} value={poi} onChange={e => setPoi(e.target.value)} />
          <Form.Control className="mt-2" type="file" onChange={selectFile} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addTrip}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}
