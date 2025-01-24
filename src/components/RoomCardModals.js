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
      <Button
        onClick={handleShow}
        style={{
          backgroundColor: '#7a3918',
          borderColor: '#7a3918',
          color: 'white',
          fontWeight: 'bold',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
        }}
      >
        Info
      </Button>

      <Modal show={show} onHide={handleClose} style={{ color: 'black' }} centered size="sm">
        <Modal.Header closeButton style={{ backgroundColor: '#7a3918', color: 'white' }}>
          <Modal.Title>
            # {roomobj.room_number} -{' '}
            <span
              style={{
                color: roomobj.vacancy ? '#00ff44' : '#ff2424',
                fontWeight: 'bold',
              }}
            >
              {roomobj.vacancy ? 'Vacant' : 'Occupied'}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Details</h5>
          <hr />
          <p>
            <strong>Room Size:</strong> {roomobj.room_size}
          </p>
          <p>
            <strong>Price:</strong> ${roomobj.price.toFixed(2)}
          </p>
          <p>
            <strong>View:</strong> {roomobj.good_view ? 'Beautiful View' : 'Average View'}
          </p>
          <p>
            <strong>Smoking:</strong> {roomobj.smoking ? 'No Smoking Allowed' : 'Smoking Allowed'}
          </p>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: 'center' }}>
          <Button
            onClick={handleClose}
            style={{
              backgroundColor: '#7a3918',
              borderColor: '#7a3918',
              fontWeight: 'bold',
            }}
          >
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
