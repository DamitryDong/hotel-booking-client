import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export default function UpdateBookingForm() {
  const initialState = {
    number_of_party: '123',
    check_in_date: '123',
    check_out_date: '123',
    paid: false,
    event: '123',
    uid: '',
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

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('apsmcpoaoms');
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleUpdate} className="text-black">
          <h1>Update Booking</h1>

          <Form.Group className="mb-3">
            <Form.Label>Number in Party</Form.Label>
            <Form.Control className="number_of_party" type="number" min="0" placeholder="Enter number in party" value={formInput.number_of_party} onChange={handleUpdateChange} required />

            <Form.Label>Check-In</Form.Label>
            <Form.Control className="check_in_date" type="date" value={formInput.check_in_date} onChange={handleUpdateChange} required />

            <Form.Label>Check-Out</Form.Label>
            <Form.Control className="check_out_date" type="date" value={formInput.check_out_date} onChange={handleUpdateChange} required />

            <Form.Label>Events</Form.Label>
            <Form.Control className="event" type="number" min="0" value={formInput.event} onChange={handleUpdateChange} required />

            <Form.Check
              className="Paid"
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
