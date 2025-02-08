'use client';

import { useState } from 'react'; // React & Hooks (Always first)
// import { useRouter } from 'next/navigation'; // Next.js Router

import { Button } from 'react-bootstrap'; // Third-party UI components
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

import RoomPlan from '@/components/RoomCards'; // Custom components

import { createBooking } from '../../api/apiBookings'; // API functions
import { useAuth } from '../../utils/context/authContext'; // Context providers

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

  // const router = useRouter();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      const payload = {
        paid: formInput.paid,
        number_of_party: e.target.querySelector('.number_of_party').value,
        check_in_date: e.target.querySelector('.check_in_date').value,
        check_out_date: e.target.querySelector('.check_out_date').value,
        event: e.target.querySelector('.event').value,
        uid: user.uid,
      };
      console.log(payload);
      createBooking(payload);
      // .then(router.push('/booking'));
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="text-black">
        <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Booking</h2>

        <Form.Group className="mb-3">
          <Form.Label>Number in Party</Form.Label>
          <Form.Control className="number_of_party" type="number" placeholder="Enter number in party" onChange={handleChange} />

          <RoomPlan />

          <Form.Label>Check-In</Form.Label>
          <Form.Control className="check_in_date" type="date" onChange={handleChange} />

          <Form.Label>Check-Out</Form.Label>
          <Form.Control className="check_out_date" type="date" onChange={handleChange} />

          <Form.Label>Events</Form.Label>
          <Form.Control className="event" type="number" onChange={handleChange} />

          <Form.Check
            className="Paid"
            type="switch"
            label="Paid"
            onChange={(e) => {
              setFormInput((prevState) => ({
                ...prevState,
                paid: e.target.checked,
              }));
            }}
          />
        </Form.Group>

        <Button type="submit">{obj.id ? 'Update' : 'Create'} Booking</Button>
      </Form>
    </div>
  );
}

BookingForm.propTypes = {
  obj: PropTypes.shape({
    number_of_party: PropTypes.string,
    check_in_date: PropTypes.string,
    check_out_date: PropTypes.string,
    paid: PropTypes.bool,
    event: PropTypes.string,
    uid: PropTypes.string,
  }),
};

export default BookingForm;
