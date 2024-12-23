import React, { useEffect, useState } from 'react'
import { ListGroup, Button, Accordion } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { deleteClass, deleteStudent, fetchStudents } from '../../http/modelAPI';
import { fetchEmployees } from '../../http/employeeAPI';
import { setStudents } from '../../store/studentsSlice';

export default function ClassesList({ classes }) {
    const { employee } = useSelector((state) => {
        return state.employees;
    })
    const { students } = useSelector((state) => {
        return state.students;
    })
    const delClass = (classId) => {
        deleteClass(classId).finally(() => window.location.reload())
    }
    const delStudent = (stdId) => {
        deleteStudent(stdId).finally(() => window.location.reload())
    }
    const [employees, setEmployees] = useState([])
    const dispatch = useDispatch();
    const handleStudents = (s) => {
        dispatch(setStudents(s))
    }

    useEffect(() => {
        fetchEmployees(1, 999).then(data => {
            setEmployees(data.rows)
        })
    }, [])

    useEffect(() => {
        fetchStudents(null, 1, 999).then(data => {
            handleStudents(data.rows)
        })
    }, [])

    return (
        <div>
            {classes.length === 0 ?
                <ListGroup>
                    <ListGroup.Item
                        className="d-flex justify-content-between"
                        key={1}
                    >
                        Empty list
                    </ListGroup.Item>
                </ListGroup>
                :
                <Accordion defaultActiveKey="0">
                    {classes.map(c =>
                        <Accordion.Item eventKey={c.class_id}>
                            <Accordion.Header className="d-flex justify-content-between">
                                <div>{c.name}</div>
                            </Accordion.Header>
                            <Accordion.Body>
                                {students.find(std => std.classClassId === c.class_id) ?
                                    <ListGroup>Students:
                                        {students.filter(std => std.classClassId === c.class_id).map(s =>
                                            <ListGroup.Item key={s.student_id} className='d-flex justify-content-between'>
                                                <div>{s.name} {s.surname}</div>
                                                {employee.employee_id === "ADMIN" || employee.employee_id === c.employeeEmployeeId ?
                                                    <Button className="m-1 " variant="outline-danger" onClick={() => { delStudent(s.student_id) }}>Delete</Button>
                                                    :
                                                    ''
                                                }
                                            </ListGroup.Item>
                                        )}
                                    </ListGroup>
                                    :
                                    <ListGroup>Students: <ListGroup.Item key={1}>none</ListGroup.Item></ListGroup>
                                }
                                {employees.find(emp => emp.employee_id === c.employeeEmployeeId) ?
                                    <ListGroup>
                                        Teacher: {employees.find(emp => emp.employee_id === c.employeeEmployeeId).name} {employees.find(emp => emp.employee_id === c.employeeEmployeeId).surname}
                                    </ListGroup>
                                    :
                                    <ListGroup>Teacher: none</ListGroup>
                                }
                                {employee.employee_id === "ADMIN" || employee.employee_id === c.employeeEmployeeId ?
                                    <Button className="m-1 " variant="outline-danger" onClick={() => { delClass(c.class_id) }}>Delete class</Button>
                                    :
                                    ''
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
            }
        </div>
    )
}
