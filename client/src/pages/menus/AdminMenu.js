import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateTripModal from '../../components/Admin/CreateTripModal'

export default function AdminMenu() {
  const [createTripVisible, setCreateTripVisible] = useState(false)
  return (
    <Container className="d-flex flex-column">
      <Button variant={"outline-success"} className="mt-4 p-2" onClick={() => setCreateTripVisible(true)}>Add trip</Button>

      <Button variant={"outline-success"} className="mt-4 p-2">Add</Button>
      <Button variant={"outline-success"} className="mt-4 p-2">Add</Button>
      <Button variant={"outline-success"} className="mt-4 p-2">Add</Button>

      <CreateTripModal show={createTripVisible} onHide={() => setCreateTripVisible(false)} />
    </Container>
  )
}
