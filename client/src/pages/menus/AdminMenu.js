import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import CreateTripModal from '../../components/Admin/CreateTripModal'
import { useSelector } from 'react-redux'
import CreateEmployeeModal from '../../components/Admin/CreateEmployeeModal'
import { EMPLOYEES_ROUTE } from '../../utils/consts';
import CreateClassModal from '../../components/Admin/CreateClassModal';
import CreateStudentModal from '../../components/Admin/CreateStudentModal';

export default function AdminMenu() {
  const { employee } = useSelector((state) => {
    return state.employees;
  })

  const [createTripVisible, setCreateTripVisible] = useState(false)
  const [createEmployeeVisible, setCreateEmployeeVisible] = useState(false)
  const [createStudentVisible, setCreateStudentVisible] = useState(false)
  const [createClassVisible, setCreateClassVisible] = useState(false)

  return (
    <Container className="d-flex flex-column">
      <Button variant={"outline-success"} className="mt-4 p-2" onClick={() => setCreateTripVisible(true)}>Add trip</Button>
      <Button variant={"outline-success"} className="mt-4 p-2" onClick={() => setCreateStudentVisible(true)}>Add student</Button>
      <Button variant={"outline-success"} className="mt-4 p-2" onClick={() => setCreateClassVisible(true)}>Add class</Button>
      <Button variant={"outline-success"} className="mt-4 p-2">Add</Button>
      {employee.employee_id === "ADMIN" ?
        <Button variant={"outline-primary"} className="mt-4 p-2" onClick={() => setCreateEmployeeVisible(true)}>Add employee</Button>
        :
        ''
      }
      <NavLink to={EMPLOYEES_ROUTE} style={{ textDecoration: 'none' }} >
        <Button variant={"outline-primary"} className="mt-4 p-2" style={{ width: "100%" }}>View employees</Button>
      </NavLink>

      <CreateTripModal show={createTripVisible} onHide={() => setCreateTripVisible(false)} />
      <CreateEmployeeModal show={createEmployeeVisible} onHide={() => setCreateEmployeeVisible(false)} />
      <CreateStudentModal show={createStudentVisible} onHide={() => setCreateStudentVisible(false)} />
      <CreateClassModal show={createClassVisible} onHide={() => setCreateClassVisible(false)} />
    </Container>
  )
}
