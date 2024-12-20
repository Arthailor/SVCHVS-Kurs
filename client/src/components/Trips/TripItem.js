import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import TripModal from './TripModal';


export default function TripItem({ trip }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Col md={3}>
      <Card style={{ width: 170, cursor: "pointer" }} border={"light"} onClick={() => setModalShow(true)}>
        <div className="d-flex justify-content-between align-items-center flex-column mt-1">
          <Image width={150} height={150} src={process.env.REACT_APP_API_URL + trip.img} />
          <div>{trip.town}</div>
          <div>{trip.point_of_interest}</div>
        </div>
      </Card>
      <TripModal point_of_interest={trip.point_of_interest} town={trip.town} img={trip.img} trip_id={trip.trip_id} description={trip.description}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Col>
  )
}
