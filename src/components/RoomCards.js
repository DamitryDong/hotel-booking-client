'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import RoomModals from '@/components/RoomCardModals';

function RoomCards({ roomobj }) {
  return (
    <Card id={roomobj.id} style={{ width: '9rem' }}>
      <Card.Header>Room: {roomobj.room_number}</Card.Header>
      <Card.Body>
        <Card.Title>{roomobj.vacancy ? 'Vacant' : 'Occupied'}</Card.Title>
        <RoomModals />
      </Card.Body>
    </Card>
  );
}

export default RoomCards;

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
