import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Example from './BookingCardModals';

export default function BookingCard({ bookingObj }) {
  return (
    <Card className="text-center">
      <Card.Header>Booking {bookingObj.id}</Card.Header>
      <Card.Body>
        <Card.Title>
          {bookingObj.first_name} {bookingObj.last_name}
        </Card.Title>
        <Card.Text>
          Party Size ({bookingObj.number_of_party}) Attending Event {bookingObj.event_id}
        </Card.Text>
        <Button variant="primary">Test</Button>
        <Example />
      </Card.Body>
      <Card.Footer className="text-muted">
        {bookingObj.check_in_date} through {bookingObj.check_out_date}
      </Card.Footer>
    </Card>
  );
}

BookingCard.propTypes = {
  bookingObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    id: PropTypes.number,
    paid: PropTypes.bool,
    number_of_party: PropTypes.number,
    check_in_date: PropTypes.string,
    check_out_date: PropTypes.string,
    event_id: PropTypes.number,
  }).isRequired,
};
