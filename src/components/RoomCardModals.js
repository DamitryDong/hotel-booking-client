import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

function RoomModals({ roomobj }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        info
      </Button>

      <Modal show={show} onHide={handleClose} style={{ color: 'black' }}>
        <Modal.Header closeButton>
          <Modal.Title>{roomobj.room_number}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{roomobj.vacancy ? 'Vacant' : 'Occupied'}</Modal.Body>
        <Modal.Body>{roomobj.room_size}</Modal.Body>
        <Modal.Body>{roomobj.price}</Modal.Body>
        <Modal.Body>{roomobj.good_view ? 'Beautiful View' : 'Awful View'}</Modal.Body>
        <Modal.Body>{roomobj.smoking ? 'No Smoking' : 'Smoke Away'}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RoomModals;

RoomModals.propTypes = {
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
