'use client';

import '../styles/globals.css'; // Corrected path
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import RoomModals from '@/components/RoomCardModals';

function RoomCards({ roomobj }) {
  return (
    <Card id={roomobj.id} className="roomCard">
      <Card.Header className="roomCardHeader">Room: {roomobj.room_number}</Card.Header>
      <Card.Body className="roomCardBody">
        <Card.Title>{roomobj.vacancy ? 'Vacant' : 'Occupied'}</Card.Title>
        <RoomModals roomobj={roomobj} />
      </Card.Body>
    </Card>
  );
}

function RoomPlan({ rooms }) {
  return (
    <div className="roomPlanContainer">
      {rooms.map((room) => (
        <RoomCards key={room.id} roomobj={room} />
      ))}
    </div>
  );
}

export default RoomPlan;

RoomCards.propTypes = {
  roomobj: PropTypes.shape({
    id: PropTypes.number,
    room_number: PropTypes.number,
    vacancy: PropTypes.bool,
    room_size: PropTypes.string,
    price: PropTypes.number,
    good_view: PropTypes.bool,
    smoking: PropTypes.bool,
    booking_id: PropTypes.number,
  }),
};

RoomPlan.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      room_number: PropTypes.number,
      vacancy: PropTypes.bool,
      room_size: PropTypes.string,
      price: PropTypes.number,
      good_view: PropTypes.bool,
      smoking: PropTypes.bool,
      booking_id: PropTypes.number,
    }),
  ).isRequired,
};
