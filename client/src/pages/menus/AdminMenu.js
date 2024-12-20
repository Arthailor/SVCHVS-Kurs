import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateTripModal from '../../components/Admin/CreateTripModal'
import { useSelector } from 'react-redux'

export default function AdminMenu() {
  const { employee } = useSelector((state) => {
    return state.employees;
  })

  const [createTripVisible, setCreateTripVisible] = useState(false)
  return (
    <Container className="d-flex flex-column">
      <Button variant={"outline-success"} className="mt-4 p-2" onClick={() => setCreateTripVisible(true)}>Add trip</Button>

      <Button variant={"outline-success"} className="mt-4 p-2">Add</Button>
      <Button variant={"outline-success"} className="mt-4 p-2">Add</Button>
      <Button variant={"outline-success"} className="mt-4 p-2">Add</Button>
      {employee.employee_id === "ADMIN" ?
      <Button variant={"outline-success"} className="mt-4 p-2">Add employee</Button>
      :
      ''
      }

      <CreateTripModal show={createTripVisible} onHide={() => setCreateTripVisible(false)} />
    </Container>
  )
}
