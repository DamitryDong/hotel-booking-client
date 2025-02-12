/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookingCardModal from './BookingCardModals';

export default function BookingCard({ bookingObj }) {
  // "paid": true,
  //       "number_of_party": 6,
  //       "check_in_date": "2025-01-19T15:00:00Z",
  //       "check_out_date": "2025-07-21T12:00:00Z",
  //       "event": 1,
  //       "uid": "iponjVrVrvax0XoyC4KZqVVVTND2"

  return (
    <Card className="text-center">
      <Card.Header> Booking: {bookingObj.id}</Card.Header>

      <Card.Body>
        <>
          <Card.Title>WIP</Card.Title>
          <Card.Text>Party Size ({bookingObj.number_of_party})</Card.Text>
          <Button variant="danger">Delete</Button>
        </>
        <BookingCardModal bookingObj={bookingObj} />
      </Card.Body>
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
