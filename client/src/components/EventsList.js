import React from 'react'
import { Accordion, Button, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { deleteEvent, deleteParticipant } from '../http/modelAPI';

export default function EventsList() {
    const { employee } = useSelector(state => state.employees);
    const { events } = useSelector(state => state.events);
    const { participants } = useSelector(state => state.participants)
    const { students } = useSelector(state => state.students);
    const { classes } = useSelector(state => state.classes);

    const delEvent = (eventId) => {
        deleteEvent(eventId).finally(() => window.location.reload());
    }

    const delPart = (prtId) => {
        deleteParticipant(prtId).finally(() => window.location.reload());
    }

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
                        <Accordion.Item key={e.event_id} eventKey={e.event_id}>
                            <Accordion.Header className="d-flex justify-content-between">
                                <div>{e.name} - ({e.date})</div>
                            </Accordion.Header>
                            <Accordion.Body>
                                {participants.some(prt => prt.eventEventId === e.event_id) ?
                                    <ListGroup>Participants:
                                        {participants.filter(prt => prt.eventEventId === e.event_id).map(p => {
                                            const student = p.studentStudentId ? students.find(std => std.student_id === p.studentStudentId) : null;
                                            const studentName = student ? `${student.name} ${student.surname}` : null;

                                            const classItem = p.classClassId ? classes.find(cls => cls.class_id === p.classClassId) : null;
                                            const className = classItem ? `Class: ${classItem.name}` : null;

                                            return (
                                                <ListGroup.Item key={p.participant_id} className='d-flex justify-content-between'>
                                                    <div>
                                                        {studentName || className || ""}
                                                        <br />
                                                        Place: {p.grade}
                                                    </div>
                                                    {employee.employee_id === "ADMIN" &&
                                                        <Button className="m-1" variant="outline-danger" onClick={() => { delPart(p.participant_id) }}>Delete</Button>
                                                    }
                                                </ListGroup.Item>
                                            );
                                        })}
                                    </ListGroup>
                                    :
                                    <ListGroup>Participants: <ListGroup.Item key={1}>none</ListGroup.Item></ListGroup>
                                }
                                {employee.employee_id === "ADMIN" &&
                                    <Button className="m-1" variant="outline-danger" onClick={() => { delEvent(e.event_id) }}>Delete event</Button>
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
            }
        </div>
    )
}
