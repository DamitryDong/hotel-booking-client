'use client';

import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import RoomModals from '@/components/RoomCardModals';
import { getAllRooms } from '../api/apiRooms';

function RoomCards({ roomobj, onRoomSelect }) {
  return (
    <Card id={roomobj.id} className={`roomCard ${roomobj.vacancy ? 'vacant' : 'occupied'}`}>
      <Card.Body className="roomCardBody">
        <RoomModals roomobj={roomobj} />

        <div className="roomNumber">Room: {roomobj.room_number}</div>

        {/* Set roomobj.id when the button is clicked */}
        <Button variant="dark" className="addclick" onClick={() => onRoomSelect(roomobj.id)}>
          +
        </Button>
      </Card.Body>
    </Card>
  );
}

// DIFFERENT FUNCTIONS, we will use the aboove one here

function RoomPlan() {
  const [roomArray, setRoomArray] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState([]);

  const handleRoomSelect = (id) => {
    setSelectedRoomId((prevState) => [...prevState, id]); // Update the selected room ID when the + button is clicked
    console.log(`Selected Room ID: ${id}`);
    console.log(`selectedRoomId: ${selectedRoomId}`);
  };

  useEffect(() => {
    getAllRooms().then((rooms) => {
      setRoomArray(rooms);
    });
  }, []);

  // Manually define grid placement for each room
  const roomPlacement = {
    1: { col: '1 / 2', row: '1 / 2' },
    2: { col: '2 / 3', row: '1 / 2' },
    3: { col: '3 / 4', row: '1 / 2' },
    4: { col: '4 / 5', row: '1 / 2' },
    5: { col: '5 / 6', row: '1 / 2' },
    6: { col: '6 / 7', row: '1 / 2' },
    7: { col: '7 / 8', row: '1 / 2' },
    8: { col: '8 / 9', row: '1 / 2' },
    9: { col: '1 / 2', row: '2 / 3' },
    10: { col: '1 / 2', row: '3 / 4' },
    11: { col: '1 / 2', row: '4 / 5' },
    12: { col: '4 / 5', row: '2 / 3' },
    13: { col: '4 / 5', row: '3 / 4' },
    14: { col: '8 / 9', row: '3 / 4' },
    15: { col: '5 / 6', row: '2 / 3' },
    16: { col: '5 / 6', row: '3 / 4' },
    17: { col: '8 / 9', row: '4 / 5' },
    18: { col: '8 / 9', row: '2 / 3' },
  };

  return (
    <div>
      <h2> Selected Room IDs: {selectedRoomId.join(', ')} </h2>
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
              <RoomCards id={room.id} roomobj={room} onRoomSelect={handleRoomSelect} />
            </div>
          );
        })}
      </div>
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
  onRoomSelect: PropTypes.func.isRequired,
};
