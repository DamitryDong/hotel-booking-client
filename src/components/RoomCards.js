'use client';

import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import RoomModals from '@/components/RoomCardModals';
import { getAllRooms } from '../api/apiRooms';
import SlideInRight from './GsapRoomsSlide';

function RoomCards({ roomobj, onRoomSelect, roomsSelected }) {
  const isSelected = roomsSelected.includes(roomobj.id);

  // Determine the button element based on the booking status and selection state
  let button;
  if (roomobj.booking) {
    button = 'occupied';
  } else if (isSelected) {
    button = (
      <Button variant="danger" className="minusclick" onClick={() => onRoomSelect(roomobj.id)}>
        -
      </Button>
    );
  } else {
    button = (
      <Button variant="success" className="addclick" onClick={() => onRoomSelect(roomobj.id)}>
        +
      </Button>
    );
  }

  return (
    <Card id={roomobj.id} className={`roomCard ${isSelected ? 'selected-room' : ''} ${roomobj.booking ? 'occupied' : 'vacant'}`}>
      <Card.Body className="roomCardBody">
        <RoomModals roomobj={roomobj} />
        <div className="roomNumber">Room: {roomobj.room_number}</div>
        {button}
      </Card.Body>
    </Card>
  );
}

// DIFFERENT FUNCTIONS, we will use the aboove one here

function RoomPlan() {
  const [roomArray, setRoomArray] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState([]);

  const handleRoomSelect = (id) => {
    setSelectedRoomId(
      (prevState) =>
        prevState.includes(id)
          ? prevState.filter((roomId) => roomId !== id) // Remove if already selected
          : [...prevState, id], // Add if not selected
    );
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
      <h4 className="selectedRooms"> Selected Room IDs: {selectedRoomId.join(', ')} </h4>

      <SlideInRight>
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
                <RoomCards id={room.id} roomobj={room} onRoomSelect={handleRoomSelect} roomsSelected={selectedRoomId} />
              </div>
            );
          })}
        </div>
      </SlideInRight>
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
    booking: PropTypes.number,
  }),
  onRoomSelect: PropTypes.func.isRequired,
  roomsSelected: PropTypes.arrayOf(PropTypes.number).isRequired,
};
