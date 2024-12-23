import React from 'react'
import { Accordion, Button, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux';

export default function EventsList() {
    const { employee } = useSelector(state => state.employees);
    const { events } = useSelector(state => state.events);
    const { participants } = useSelector(state => state.participants)
    const { students } = useSelector(state => state.students);
    const { classes } = useSelector(state => state.classes);
    return (
        <div>
            {events.length === 0 ?
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
                    {events.map(e =>
                        <Accordion.Item eventKey={e.event_id}>
                            <Accordion.Header className="d-flex justify-content-between">
                                <div>{e.name} - ({e.date})</div>
                            </Accordion.Header>
                            <Accordion.Body>
                                {participants.find(prt => prt.eventEventId === e.event_id) ?
                                    <ListGroup>Participants:
                                        {participants.filter(prt => prt.eventEventId === e.event_id).map(p =>
                                            <ListGroup.Item key={p.participant_id} className='d-flex justify-content-between'>
                                                <div>
                                                    {p.studentStudentId === null ?
                                                        "Class: " + classes.find(cls => cls.class_id === p.classClassId).name
                                                        :
                                                        "Student: " + students.find(std => std.student_id === p.studentStudentId).name + " " + students.find(std => std.student_id === p.studentStudentId).surname
                                                    }
                                                    <br />
                                                    Grade: {p.grade}
                                                </div>
                                                {employee.employee_id === "ADMIN" ?
                                                    <Button className="m-1 " variant="outline-danger" onClick={() => { /*delStudent(s.student_id)*/ }}>Delete</Button>
                                                    :
                                                    ''
                                                }
                                            </ListGroup.Item>
                                        )}
                                    </ListGroup>
                                    :
                                    <ListGroup>Participants: <ListGroup.Item key={1}>none</ListGroup.Item></ListGroup>
                                }
                                {employee.employee_id === "ADMIN" ?
                                    <Button className="m-1 " variant="outline-danger" onClick={() => { /*delClass(c.class_id)*/ }}>Delete event</Button>
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
