import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation'; // Import useRouter
import { updateBooking } from '../api/apiBookings';

export default function UpdateBookingForm({ bookingInfo }) {
  const router = useRouter(); // Initialize router

  const checkInDateTime = bookingInfo.check_in_date;
  const checkOutDateTime = bookingInfo.check_out_date;
  const checkIndateOnly = checkInDateTime.split('T')[0];
  const checkOutdateOnly = checkOutDateTime.split('T')[0];

  const initialState = {
    id: bookingInfo.id,
    number_of_party: bookingInfo.number_of_party,
    check_in_date: checkIndateOnly,
    check_out_date: checkOutdateOnly,
    paid: bookingInfo.paid,
    event: bookingInfo.event,
    uid: bookingInfo.uid,
  };

  const [show, setShow] = useState(false);
  const [formInput, setFormInput] = useState(initialState);

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateBooking(formInput).then(() => {
      handleClose();
      router.push('/booking');
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Make Changes
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleUpdate} className="text-black">
          <h1>Update Booking</h1>

          <Form.Group className="mb-3">
            <Form.Label>Number in Party</Form.Label>
            <Form.Control name="number_of_party" type="number" min="0" placeholder="Enter number in party" value={formInput.number_of_party} onChange={handleUpdateChange} required />

            <Form.Label>Check-In</Form.Label>
            <Form.Control name="check_in_date" type="date" value={formInput.check_in_date} onChange={handleUpdateChange} required />

            <Form.Label>Check-Out</Form.Label>
            <Form.Control name="check_out_date" type="date" value={formInput.check_out_date} onChange={handleUpdateChange} required />

            <Form.Label>Events</Form.Label>
            <Form.Control name="event" type="number" min="0" value={formInput.event} onChange={handleUpdateChange} required />

            <Form.Check
              name="paid"
              type="switch"
              label="Paid"
              checked={formInput.paid}
              onChange={(e) => {
                setFormInput((prevState) => ({
                  ...prevState,
                  paid: e.target.checked,
                }));
              }}
            />
          </Form.Group>

          <Button type="submit" variant="dark">
            Save Changes
          </Button>
        </Form>
        <Button variant="primary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal>
    </>
  );
}

UpdateBookingForm.propTypes = {
  bookingInfo: PropTypes.shape({
    id: PropTypes.number,
    number_of_party: PropTypes.string,
    check_in_date: PropTypes.string,
    check_out_date: PropTypes.string,
    paid: PropTypes.bool,
    event: PropTypes.string,
    uid: PropTypes.string,
  }),
};
