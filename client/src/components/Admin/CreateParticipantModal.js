import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createParticipant, fetchClasses, fetchEvents, fetchStudents } from '../../http/modelAPI'

export default function CreateParticipantModal({ show, onHide }) {
    const [event, setEvent] = useState(0)
    const [student, setStudent] = useState(0)
    const [classx, setClass] = useState(0)
    const [grade, setGrade] = useState(0)

    const [events, setEvents] = useState([])
    const [students, setStudents] = useState([])
    const [classes, setClasses] = useState([])


    useEffect(() => {
        fetchStudents(null, 1, 999).then(data => {
            setStudents(data.rows)
        })
        fetchClasses(1, 999).then(data => {
            setClasses(data.rows)
        })
        fetchEvents(null, 1, 999).then(data => {
            setEvents(data.rows)
        })
    }, [])

    const addParticipant = async () => {

        try {
            let data;
            data = await createParticipant(student, classx, event, grade).then(() => {
                onHide('')
                setEvent(null)
                setStudent(null)
                setClass(null)
                setGrade(null)
            })
        } catch (e) {
            alert(e.response.data.message)
        }
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
                    Add participant
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Select className="mt-2" value={event} onChange={e => setEvent(e.target.value)}>
                        <option value={0}>Select event</option>
                        {events.map(eve =>
                            <option value={eve.event_id}>{eve.name}</option>
                        )}
                    </Form.Select>
                    {classx !== 0 ?
                        <Form.Select className="mt-2" value={student} onChange={e => setStudent(e.target.value)} disabled>
                            <option value={0}>Select student</option>
                        </Form.Select>
                        :
                        <Form.Select className="mt-2" value={student} onChange={e => setStudent(e.target.value)}>
                            <option value={0}>Select student</option>
                            {students.map(std =>
                                <option value={std.student_id}>{std.name} {std.surname}</option>
                            )}
                        </Form.Select>
                    }
                    {student === 0 ?
                        <Form.Select className="mt-2" value={classx} onChange={e => setClass(e.target.value)}>
                            <option value={0}>Select class</option>
                            {classes.map(cls =>
                                <option value={cls.class_id}>{cls.name}</option>
                            )}
                        </Form.Select>
                        :
                        <Form.Select className="mt-2" value={classx} onChange={e => setClass(e.target.value)} disabled>
                            <option value={0}>Select class</option>
                        </Form.Select>
                    }
                    <Form.Select className="mt-2" value={grade} onChange={e => setGrade(e.target.value)}>
                        <option value={0}>Select place</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </Form.Select>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                {event === 0 || student === 0 || classx === 0 || grade === 0 ?
                    <Button variant="outline-success" disabled>Add</Button>
                    :
                    <Button variant="outline-success" onClick={addParticipant}>Add</Button>
                }
            </Modal.Footer>
        </Modal>
    )
}
