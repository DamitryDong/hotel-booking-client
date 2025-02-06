'use client';

import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import RoomPlan from '@/components/RoomCards';

function BookingForm() {
  const [bookingFormData, setBookingFormData] = useState({
    customerName: '',
    partySize: '',
    roomNumber: '',
    checkIn: '',
    checkOut: '',
  });

  const handleChange = (e) => {
    setBookingFormData({
      ...bookingFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      customerName: bookingFormData.customerName,
      partySize: bookingFormData.partySize,
      roomNumber: bookingFormData.roomNumber,
      checkIn: bookingFormData.checkIn,
      checkOut: bookingFormData.checkOut,
    };

    console.log('Submitting Payload:', payload);
    // You can send the payload to an API endpoint here using fetch() or axios
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="customerName">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control type="text" name="customerName" placeholder="Enter customer name" value={bookingFormData.customerName} onChange={handleChange} />

        <Form.Label>Number in Party</Form.Label>
        <Form.Control type="number" name="partySize" placeholder="Enter number in party" value={bookingFormData.partySize} onChange={handleChange} />

        <Form.Label>Room Number</Form.Label>
        <Form.Control type="text" name="roomNumber" placeholder="Enter room number" value={bookingFormData.roomNumber} onChange={handleChange} />

        <RoomPlan />

        <Form.Label>Check-In</Form.Label>
        <Form.Control type="date" name="checkIn" value={bookingFormData.checkIn} onChange={handleChange} />

        <Form.Label>Check-Out</Form.Label>
        <Form.Control type="date" name="checkOut" value={bookingFormData.checkOut} onChange={handleChange} />
        <Form.Text>Please confirm your booking details.</Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BookingForm;

BookingForm.propTypes = {
  obj: PropTypes.shape({
    data: PropTypes.string,
  }),
};
