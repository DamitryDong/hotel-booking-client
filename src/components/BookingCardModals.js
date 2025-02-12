/* eslint-disable */

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function BookingCardModal({ bookingObj }) {
  const [show, setShow] = useState(false);
  // const [booking, setBooking] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    // setBooking(bookingObj)
  };

  // "paid": true,
  //       "number_of_party": 6,
  //       "check_in_date": "2025-01-19T15:00:00Z",
  //       "check_out_date": "2025-07-21T12:00:00Z",
  //       "event": 1,
  //       "uid": "iponjVrVrvax0XoyC4KZqVVVTND2"

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
          {bookingObj.check_in_date}
          {bookingObj.check_out_date}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
