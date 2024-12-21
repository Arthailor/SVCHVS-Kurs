import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { createTrip } from '../../http/modelAPI';

export default function CreateTripModal({ show, onHide }) {

  const [town, setTown] = useState('')
  const [poi, setPoi] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addTrip = () => {
    const formData = new FormData()
    formData.append('town', town)
    formData.append('point_of_interest', poi)
    formData.append('description', description)
    formData.append('img', file)
    createTrip(formData).then(data => {
      onHide()
      setTown('')
      setPoi('')
      setDescription('')
      setFile(null)
    })
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
          <Form.Control maxLength="25" className="mt-2" placeholder={"Town"} value={town} onChange={e => setTown(e.target.value)} />
          <Form.Control maxLength="75" className="mt-2" placeholder={"Point of interest"} value={poi} onChange={e => setPoi(e.target.value)} />
          <Form.Control maxLength="755" className="mt-2" as="textarea" rows={3} placeholder={"Description"} value={description} onChange={e => setDescription(e.target.value)} />
          <Form.Control className="mt-2" type="file" onChange={selectFile} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        {town === '' || poi === '' || description === '' || file === null ?
          <Button variant="outline-success" disabled>Add</Button>
          :
          <Button variant="outline-success" onClick={addTrip}>Add</Button>
        }
      </Modal.Footer>
    </Modal>
  )
}
