'use client';

import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import RoomModals from '@/components/RoomCardModals';
import getAllRooms from '../api/apiRooms';

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

// DIFFERENT FUNCTIONS, we will use the aboove one here

function RoomPlan() {
  const [roomArray, setRoomArray] = useState([]);

  useEffect(() => {
    getAllRooms().then((rooms) => {
      setRoomArray(rooms);
    });
  }, []);

  // Manually define grid placement for each room
  const roomPlacement = {
    1: { col: '1 / 3', row: '1 / 2' }, // Room 1 spans columns 1-2, row 1
    2: { col: '3 / 5', row: '1 / 2' }, // Room 2 spans columns 3-4, row 1
    3: { col: '5 / 7', row: '1 / 2' }, // Room 3 spans columns 5-6, row 1
    4: { col: '7 / 9', row: '1 / 2' }, // Room 4 spans columns 7-8, row 1
    5: { col: '1 / 3', row: '2 / 3' },
    6: { col: '3 / 5', row: '2 / 3' },
    7: { col: '5 / 7', row: '2 / 3' },
    8: { col: '7 / 9', row: '2 / 3' },
    9: { col: '1 / 3', row: '3 / 4' },
    10: { col: '3 / 5', row: '3 / 4' },
    11: { col: '5 / 7', row: '3 / 4' },
    12: { col: '7 / 9', row: '3 / 4' },
    13: { col: '1 / 3', row: '4 / 5' },
    14: { col: '3 / 5', row: '4 / 5' },
    15: { col: '5 / 7', row: '4 / 5' },
    16: { col: '7 / 9', row: '4 / 5' },
    17: { col: '2 / 4', row: '1 / 2' },
    18: { col: '6 / 8', row: '2 / 3' },
  };

  return (
    <div className="grid-container">
      {roomArray.map((room) => {
        const position = roomPlacement[room.id];
        return (
          <div
            key={room.id}
            className="grided-roomCards"
            style={{
              gridColumn: position.col,
              gridRow: position.row,
            }}
          >
            <RoomCards id={room.id} roomobj={room} />
          </div>
        );
      })}
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
