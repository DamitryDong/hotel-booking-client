'use client';

import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import RoomPlan from '@/components/RoomCards';
import { useRouter } from 'next/navigation';
import { createBooking, updateBooking } from '../../api/apiBookings';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  number_of_party: '',
  check_in_date: '',
  check_out_date: '',
  paid: false,
  event: '',
  uid: '',
};
function BookingForm({ obj = initialState }) {
  const [formInput, setFormInput] = useState(obj);
  // const [customer, setCustomers] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateBooking(formInput).then(() => router.push(`/bookings/${obj.id}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createBooking(payload).then(({ name }) => {
        const patchPayload = { id: name };
        updateBooking(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="text-black">
        <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Booking</h2>

        <Form.Group className="mb-3" controlId="customerName">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control type="text" name="customerName" placeholder="Enter customer name" value={BookingForm.customerName} onChange={handleChange} />

          <Form.Label>Number in Party</Form.Label>
          <Form.Control type="number" name="partySize" placeholder="Enter number in party" value={BookingForm.partySize} onChange={handleChange} />

          <Form.Label>Room Number</Form.Label>
          <Form.Control type="text" name="roomNumber" placeholder="Enter room number" value={BookingForm.roomNumber} onChange={handleChange} />

          <RoomPlan />

          <Form.Label>Check-In</Form.Label>
          <Form.Control type="date" name="checkIn" value={BookingForm.checkIn} onChange={handleChange} />

          <Form.Label>Check-Out</Form.Label>
          <Form.Control type="date" name="checkOut" value={BookingForm.checkOut} onChange={handleChange} />
          <Form.Text>Please confirm your booking details.</Form.Text>
        </Form.Group>

        <Button type="submit">{obj.id ? 'Update' : 'Create'} Booking</Button>
      </Form>
      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="sale"
        name="sale"
        label="On Sale?"
        checked={formInput.sale}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            sale: e.target.checked,
          }));
        }}
      />
    </div>
  );
}

BookingForm.propTypes = {
  obj: PropTypes.shape({
    customerName: PropTypes.string,
    number_of_party: PropTypes.number,
    roomNumber: PropTypes.number,
    checkIn: PropTypes.string,
    checkOut: PropTypes.string,
  }),
};

export default BookingForm;
