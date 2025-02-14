'use client';

import { useState } from 'react'; // React & Hooks (Always first)
import { useRouter } from 'next/navigation';

import { Button } from 'react-bootstrap'; // Third-party UI components
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

import RoomPlan from '@/components/RoomCards'; // Custom components

import { updateRooms } from '../../api/apiRooms';
import { createBooking } from '../../api/apiBookings'; // API functions
import { createCustomer } from '../../api/apiCustomers';
import { createCustomerJoinBookings } from '../../api/apiCBjointable';
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
function WorkingBookingForm({ obj = initialState }) {
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

  // THIS HANDLE SUBMIT TOOK ME A VERY LONG TIME PLEASE APPRECIATE
  // it ensures that 2 customer-booking is created (join table)
  // it also ensures that 2 customers are created.
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      paid: formInput.paid,
      number_of_party: e.target.querySelector('.number_of_party').value,
      check_in_date: e.target.querySelector('.check_in_date').value,
      check_out_date: e.target.querySelector('.check_out_date').value,
      event: e.target.querySelector('.event').value,
      uid: user.uid,
    };

    const payloadCust = {
      paid: formInput.paid,
      first_name: e.target.querySelector('.first_name').value,
      last_name: e.target.querySelector('.last_name').value,
    };

    const payloadRefCust = {
      paid: formInput.paid,
      first_name: e.target.querySelector('.first_ref_name').value,
      last_name: e.target.querySelector('.last_ref_name').value,
    };

    // variables use to capture both id so we can make a payload.
    let customerId;
    let refcustomerId;
    let bookingId;

    // complicated .then to run everything in order
    createCustomer(payloadRefCust)
      .then((createdCustomer) => {
        refcustomerId = createdCustomer.id;
      })
      .then(() => {
        createCustomer(payloadCust)
          .then((createdCustomer) => {
            customerId = createdCustomer.id; // Capture generated customer ID
            return createBooking(payload);
          })
          .then((createdBooking) => {
            bookingId = createdBooking.id; // Capture generated booking ID
            HandleSelectedRoomsComponent(bookingId);
            // Now that we have both IDs, create the customer-booking relation
            const joinPayload = {
              customer_id: customerId,
              booking_id: bookingId,
            };

            const joinRefPayload = {
              customer_id: refcustomerId,
              booking_id: bookingId,
            };
            return Promise.all([createCustomerJoinBookings(joinPayload), createCustomerJoinBookings(joinRefPayload)]);
          })
          .then(() => {
            router.push('/booking');
          })
          .catch((error) => console.error('Error in booking process:', error));
      });
  };

  return (
    <div
      style={{
        padding: '40px',
        marginTop: '20%',
        width: '90%',
        backgroundColor: '#f4f4f4',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SlideInRight delayDur={0.3}>
        <Form onSubmit={handleSubmit} className="text-black">
          <h1
            className="text-white mt-5"
            style={{
              marginBottom: '5%',
              backgroundColor: '#502d1b',
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

            <div className="text-center d-flex flex-row align-items-center" style={{ marginTop: '4%', marginBottom: '2%' }}>
              <Form.Label style={{ marginBottom: '8px', width: '20%', marginRight: '5px' }}>First Name</Form.Label>
              <Form.Control
                className="first_name"
                type="string"
                min="0"
                placeholder="John"
                onChange={handleChange}
                required
                style={{
                  marginBottom: '15px',
                  marginRight: '3%',
                  borderColor: 'black',
                  borderWidth: '2px',
                }}
              />

              <Form.Label style={{ marginBottom: '8px', width: '20%', marginRight: '5px' }}>Last Name</Form.Label>
              <Form.Control
                className="last_name"
                type="string"
                min="0"
                placeholder="Smith"
                onChange={handleChange}
                required
                style={{
                  marginBottom: '15px',
                  borderColor: 'black',
                  borderWidth: '2px',
                }}
              />
            </div>

            <div className="text-center d-flex flex-row align-items-center" style={{ marginTop: '1%', marginBottom: '2%' }}>
              <Form.Label style={{ marginBottom: '8px', width: '20%', marginRight: '5px' }}>Ref FName</Form.Label>
              <Form.Control
                className="first_ref_name"
                type="string"
                min="0"
                placeholder="Cindy"
                onChange={handleChange}
                required
                style={{
                  marginBottom: '15px',
                  marginRight: '3%',
                  borderColor: 'black',
                  borderWidth: '2px',
                }}
              />

              <Form.Label style={{ marginBottom: '8px', width: '20%', marginRight: '5px' }}>Ref LName</Form.Label>
              <Form.Control
                className="last_ref_name"
                type="string"
                min="0"
                placeholder="Chen"
                onChange={handleChange}
                required
                style={{
                  marginBottom: '15px',
                  borderColor: 'black',
                  borderWidth: '2px',
                }}
              />
            </div>

            <Form.Label style={{ marginBottom: '8px' }}>Number in Party</Form.Label>
            <Form.Control
              className="number_of_party"
              type="number"
              min="0"
              placeholder="Enter number in party"
              onChange={handleChange}
              required
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
              required
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
              required
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
              required
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

WorkingBookingForm.propTypes = {
  obj: PropTypes.shape({
    number_of_party: PropTypes.string,
    check_in_date: PropTypes.string,
    check_out_date: PropTypes.string,
    paid: PropTypes.bool,
    event: PropTypes.string,
    uid: PropTypes.string,
  }),
};

export default WorkingBookingForm;
