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
      {/* Info Button */}
      <Button variant="light" className="ButtonForModal" onClick={handleShow}>
        Info
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered size="sm">
        <Modal.Header
          closeButton
          style={{
            backgroundColor: '#f8f9fa', // Light grayish-white
            color: '#333', // Dark gray text
            borderBottom: '1px solid #ccc', // Subtle divider
          }}
        >
          <Modal.Title>
            # {roomobj.room_number} -{' '}
            <span
              style={{
                color: roomobj.vacancy ? '#28a745' : '#dc3545', // Professional green & red
                fontWeight: 'bold',
              }}
            >
              {roomobj.vacancy ? 'Vacant' : 'Occupied'}
            </span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ backgroundColor: '#ffffff', color: '#555', borderRadius: '20px' }}>
          <h5 style={{ fontWeight: 'bold', color: '#222' }}>Details</h5>
          <hr style={{ borderColor: '#ddd' }} />

          <p>
            <strong>Room Size:</strong> {roomobj.room_size}
          </p>
          <p>
            <strong>Price:</strong> ${roomobj.price}
          </p>
          <p>
            <strong>View:</strong> {roomobj.good_view ? 'Beautiful View' : 'Average View'}
          </p>
          <p>
            <strong>Smoking:</strong> {roomobj.smoking ? 'No Smoking Allowed' : 'Smoking Allowed'}
          </p>
          <p>
            <strong>Rating:</strong> {'⭐'.repeat(roomobj.star_rating)}
          </p>
        </Modal.Body>
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
    star_rating: PropTypes.number,
  }),
};
