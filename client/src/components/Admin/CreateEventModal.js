import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createEvent } from '../../http/modelAPI'

export default function CreateEventModal({ show, onHide }) {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')

    const addEvent = async () => {

        try {
            let data;
            data = await createEvent(name, date).then(() => {
                onHide('')
                setName('')
                setDate('')
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
                    Add event
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control maxLength="50" className="mt-2" placeholder={"Name"} value={name} onChange={e => setName(e.target.value)} />
                    <Form.Control type="date" className="mt-2" value={date} onChange={e => setDate(e.target.value)} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                {name === '' || date === '' ?
                    <Button variant="outline-success" disabled>Add</Button>
                    :
                    <Button variant="outline-success" onClick={addEvent}>Add</Button>
                }
            </Modal.Footer>
        </Modal>
    )
}
