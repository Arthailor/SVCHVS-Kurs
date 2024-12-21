import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { deleteExcursion } from '../../http/modelAPI';


export default function ExcursionsList({ excursions, classes, trips }) {
    const { employee } = useSelector((state) => {
        return state.employees;
    })
    const delExcursion = (excursionId) => {
        deleteExcursion(excursionId).finally(() => window.location.reload())
    }
    return (
        <div>
            {excursions.length === 0 ?
                <ListGroup>
                    <ListGroup.Item
                        className="d-flex justify-content-between"
                    >
                        Empty list
                    </ListGroup.Item>
                </ListGroup>
                :
                <ListGroup>
                    {excursions.map(exc =>
                        <ListGroup.Item
                            key={exc.excursion_id}
                            className="d-flex justify-content-between"
                        >
                            {classes.length !== 0 && trips.length !== 0 ?
                                <div style={{ display: 'flex', alignItems: "center" }}>
                                    {classes.find(cls => cls.class_id === exc.classClassId).name} - {trips.find(trp => trp.trip_id === exc.tripTripId).point_of_interest} ({exc.date})
                                </div>
                                :
                                ''
                            }
                            {employee.employee_id === "ADMIN" ?
                                <Button className="m-1 " variant="outline-danger" onClick={() => { delExcursion(exc.excursion_id) }}>Delete</Button>
                                :
                                ''
                            }
                        </ListGroup.Item>
                    )}
                </ListGroup>
            }
        </div>
    )
}