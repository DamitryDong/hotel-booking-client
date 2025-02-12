'use client';

import { useState } from 'react'; // React & Hooks (Always first)
import { useRouter } from 'next/navigation';

import { Button } from 'react-bootstrap'; // Third-party UI components
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

import RoomPlan from '@/components/RoomCards'; // Custom components

import { updateRooms } from '../../api/apiRooms';
import { createBooking } from '../../api/apiBookings'; // API functions
import { useAuth } from '../../utils/context/authContext'; // Context providers
import SlideInRight from '../GsapRoomsSlide';

const initialState = {
  number_of_party: '',
  check_in_date: '',
  check_out_date: '',
  paid: false,
  event: '',
  uid: '',
};
// THIS IS CALLED BY THE HANDLE SUBMIT FUNCTION AND WILL HANDLE MAKING A BOOKING ID IN THE ROOMS DATABASE
// TODO: NEED a way to get the EVENTS to load as inputs, no negatives, and need to make room selection require.
const HandleSelectedRoomsComponent = (id) => {
  const selectedRoomsElement = document.querySelector('.selectedRooms');

  if (selectedRoomsElement) {
    const text = selectedRoomsElement.textContent;
    const extractedIds = text.match(/\d+/g)?.map(Number) || []; // Extract numbers safely

    extractedIds.forEach((roomId) => {
      const payloadForRooms = {
        id: roomId,
        vacancy: false,
        booking: id,
      };
      updateRooms(payloadForRooms);
    });
  } else console.log('no roomselected');
};

// THIS IS THE ACTUAL NEXTJS PAGE LOAD FUNCTION.
function BookingForm({ obj = initialState }) {
  const [formInput, setFormInput] = useState(obj);

  const router = useRouter();
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

      createBooking(payload)
        .then(({ id }) => {
          console.log(id);

          HandleSelectedRoomsComponent(id);
        })
        .then(router.push('/booking'));
    }
  };

  return (
    <div style={{ padding: '20px', marginTop: '20%', width: '80%' }}>
      <SlideInRight delayDur={0.3}>
        <Form onSubmit={handleSubmit} className="text-black">
          <h1
            className="text-white mt-5"
            style={{
              marginBottom: '5%',
              backgroundColor: 'black',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '1.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              fontWeight: '600',
            }}
          >
            {obj.id ? 'Update' : 'Create'} Booking
          </h1>

          <Form.Group className="mb-3">
            <div style={{ marginBottom: '20px' }}>
              <RoomPlan />
            </div>

            <Form.Label style={{ marginBottom: '8px' }}>Number in Party</Form.Label>
            <Form.Control
              className="number_of_party"
              type="number"
              min="0"
              placeholder="Enter number in party"
              onChange={handleChange}
              style={{
                marginBottom: '15px',
                borderColor: 'black',
                borderWidth: '2px',
              }}
            />

            <Form.Label style={{ marginBottom: '8px' }}>Check-In</Form.Label>
            <Form.Control
              className="check_in_date"
              type="date"
              onChange={handleChange}
              style={{
                marginBottom: '15px',
                borderColor: 'black',
                borderWidth: '2px',
              }}
            />

            <Form.Label style={{ marginBottom: '8px' }}>Check-Out</Form.Label>
            <Form.Control
              className="check_out_date"
              type="date"
              onChange={handleChange}
              style={{
                marginBottom: '15px',
                borderColor: 'black',
                borderWidth: '2px',
              }}
            />

            <Form.Label style={{ marginBottom: '8px' }}>Events</Form.Label>
            <Form.Control
              className="event"
              type="number"
              min="0"
              onChange={handleChange}
              style={{
                marginBottom: '15px',
                borderColor: 'black',
                borderWidth: '2px',
              }}
            />

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
              style={{
                textAlign: 'left',
              }}
            />
          </Form.Group>

          <Button
            type="submit"
            variant="dark"
            style={{
              padding: '10px 20px',
              marginTop: '20px',
            }}
          >
            {obj.id ? 'Update' : 'Create'} Booking
          </Button>
        </Form>
      </SlideInRight>
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
