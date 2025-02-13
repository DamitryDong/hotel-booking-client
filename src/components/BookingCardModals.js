/* eslint-disable */

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getAllRooms } from '../api/apiRooms';

export default function BookingCardModal({ bookingObj }) {
  const [show, setShow] = useState(false);
  const [filteredRoomIds, setFilteredRoomIds] = useState([]);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);

    getAllRooms().then((roomObj) => {
      const filteredRoomId = [];
      roomObj.forEach((room) => {
        if (room.booking?.id === bookingObj.id) {
          filteredRoomId.push(room.id);
        }
      });

      setFilteredRoomIds(filteredRoomId);
    });
  };

  // "paid": true,
  // "number_of_party": 6,
  // "check_in_date": "2025-01-19T15:00:00Z",
  // "check_out_date": "2025-07-21T12:00:00Z",
  // "event": 1,
  // "uid": "iponjVrVrvax0XoyC4KZqVVVTND2"

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Customer first and last name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Check-in:</strong> {bookingObj.check_in_date}
          </p>
          <p>
            <strong>Check-out:</strong> {bookingObj.check_out_date}
          </p>
          <p>
            <strong>Rooms:</strong> {filteredRoomIds.length > 0 ? filteredRoomIds.join(', ') : 'No rooms found'}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
