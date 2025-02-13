'use client';

import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { getAllRooms } from '../api/apiRooms';
import SlideInRight from './GsapRoomsSlide';

function RoomCards({ roomobj, roomsToChangeColor }) {
  const [colorOfCard, setcolorOfCard] = useState('white');
  const [borderOfCard, setborderOfCard] = useState('');

  const handleColorChange = (bookingid) => {
    if (roomobj.booking?.id === bookingid) {
      setcolorOfCard('rgb(35, 153, 61)');
      setborderOfCard('4px solid black');
    } else {
      setcolorOfCard('white');
      setborderOfCard('');
    }
  };

  useEffect(() => {
    handleColorChange(roomsToChangeColor);
  }, [roomsToChangeColor, roomobj.booking]);

  return (
    <Card id={roomobj.id} className={`${roomobj.booking ? 'occupiedForShow' : 'vacant'}`} style={{ background: colorOfCard, border: borderOfCard }}>
      <Card.Body className="roomCardBody">
        <div className="roomNumber">Room: {roomobj.room_number}</div>
        {roomobj.booking ? (
          <div className="openClostStatusOnBookingOnRooms">
            <strong>{roomobj.booking.id}</strong>
          </div>
        ) : (
          <div className="openClostStatusOnBookingOnRooms">-</div>
        )}
      </Card.Body>
    </Card>
  );
}

// DIFFERENT FUNCTIONS, we will use the aboove one here

function RoomPlanForShow({ onbookingDeleteTrigger, RoomToHightlight }) {
  const [roomArray, setRoomArray] = useState([]);

  useEffect(() => {
    getAllRooms().then((rooms) => {
      setRoomArray(rooms);
    });
  }, [onbookingDeleteTrigger]);

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
      <SlideInRight>
        <div className="grid-container-for-show">
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
                <RoomCards roomobj={room} roomsToChangeColor={RoomToHightlight} />
              </div>
            );
          })}
        </div>
      </SlideInRight>
    </div>
  );
}

export default RoomPlanForShow;

RoomCards.propTypes = {
  roomobj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    room_number: PropTypes.number.isRequired,
    vacancy: PropTypes.bool.isRequired,
    room_size: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    good_view: PropTypes.bool,
    smoking: PropTypes.bool,
    booking: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  roomsToChangeColor: PropTypes.number.isRequired, // for the room ID to change color
};

RoomPlanForShow.propTypes = {
  onbookingDeleteTrigger: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      room_number: PropTypes.number.isRequired,
      vacancy: PropTypes.bool.isRequired,
      room_size: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      good_view: PropTypes.bool,
      smoking: PropTypes.bool,
      booking: PropTypes.number,
    }),
  ).isRequired,
  RoomToHightlight: PropTypes.number,
};
