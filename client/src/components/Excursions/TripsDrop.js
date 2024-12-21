import React from 'react'
import { Form } from 'react-bootstrap'

export default function TripsDrop({trips, setTrip, selectedTrip}) {
    return (
        <Form>
            <Form.Select className="mt-2" value={selectedTrip} onChange={e => setTrip(e.target.value)}>
                <option value='All'>All trips</option>
                {trips.map(t =>
                    <option key={t.trip_id} value={t.trip_id}>{t.point_of_interest}</option>
                )}
            </Form.Select>
        </Form>
    )
}
