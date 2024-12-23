import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createExcursion, fetchClasses, fetchTrips } from '../../http/modelAPI'

export default function CreateExcursionModal({ show, onHide }) {
    const [date, setDate] = useState('')
    const [trip, setTrip] = useState('')
    const [classx, setClass] = useState('')

    const [classes, setClasses] = useState([])
    const [trips, setTrips] = useState([])
    useEffect(() => {
        fetchClasses(1, 999).then(data => {
            setClasses(data.rows)
        })
        fetchTrips(null, 1, 999).then(data => {
            setTrips(data.rows)
        })
    }, [])

    const addExcursion = async () => {
        try {
            let data;
            data = await createExcursion(trip, classx, date).then(() => {
                onHide('')
                setDate('')
                setTrip('')
                setClass('')
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
                    Add excursion
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Select className="mt-2" value={classx} onChange={e => setClass(e.target.value)}>
                        <option value=''>Select class</option>
                        {classes.map(cls =>
                            <option value={cls.class_id}>{cls.name}</option>
                        )}
                    </Form.Select>
                    <Form.Select className="mt-2" value={trip} onChange={e => setTrip(e.target.value)}>
                        <option value=''>Select trip</option>
                        {trips.map(trp =>
                            <option value={trp.trip_id}>{trp.point_of_interest}</option>
                        )}
                    </Form.Select>
                    <Form.Control type="date" className="mt-2" value={date} onChange={e => setDate(e.target.value)} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                {classx === '' || trip === '' || date === '' ?
                    <Button variant="outline-success" disabled>Add</Button>
                    :
                    <Button variant="outline-success" onClick={addExcursion}>Add</Button>
                }
            </Modal.Footer>
        </Modal>
    )
}
