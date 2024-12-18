import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import TripModal from './TripModal';


export default function TripItem({trip}) {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <Col md={3}>
        <Card style={{width: 150, cursor:"pointer"}} border={"light"} onClick={() => setModalShow(true)}>
            <Image width={150} height={150} src={trip.img}/>
            <div className="d-flex justify-content-between align-items-center flex-column mt-1">
                <div>town</div>
                <div>point</div>
            </div>
        </Card>
        <TripModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
    </Col>
  )
}
