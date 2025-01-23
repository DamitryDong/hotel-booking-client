'use client';

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import RoomCards from '@/components/RoomCards';

// TODO:
const initialState = {
  data: '',
};
function BookingForm({ obj = initialState, cardrRoomObj }) {
  console.log(obj);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Drop down cust name</Form.Label>
        <Form.Control type="string" placeholder="TEST TEST" />

        <Form.Label>Number in Party</Form.Label>
        <Form.Control type="string" placeholder="TEST TEST TEST TEST" />

        <Form.Label>Room Number</Form.Label>
        <Form.Control type="string" placeholder="TEST TEST TEST TEST TEST TEST" />

        {cardrRoomObj.map((room) => (
          <RoomCards roomobj={room} />
        ))}

        <Form.Label>Check IN</Form.Label>
        <Form.Control type="string" placeholder="TEST TEST TEST TEST TEST TEST TEST TEST" />

        <Form.Label>Check OUT</Form.Label>
        <Form.Control type="string" placeholder="TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST" />
        <Form.Text>TES TESSSSS</Form.Text>
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
  cardrRoomObj: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      room_number: PropTypes.number,
      vacancy: PropTypes.bool,
      room_size: PropTypes.string,
      price: PropTypes.number,
      good_view: PropTypes.bool,
      smoking: PropTypes.bool,
      booking_id: PropTypes.number,
    }),
  ),
};
