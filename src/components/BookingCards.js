/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookingCardModal from './BookingCardModals';
import { deleteBooking } from '../api/apiBookings';

export default function BookingCard({ bookingObj, customerObj, JoinedObj, onDelete, onhighlight, highlightedBookingId }) {
  const isHighlighted = bookingObj.id === highlightedBookingId;

  const handleDelete = (BookingId) => {
    deleteBooking(BookingId).then(() => {
      onDelete(BookingId);
    });
  };

  // this will pull the data from the join table together with the cust and booking data
  const showcuseTEST = () => {
    const custArrayWithBookingId = [];
    const shownCustomerArray = [];

    JoinedObj.forEach((joinedSec) => {
      if (joinedSec.booking === bookingObj.id) {
        custArrayWithBookingId.push(joinedSec.customer); // we push the customer with the booking id attatched into an array.
      }
    });

    customerObj.forEach((customer) => {
      if (customer.id === custArrayWithBookingId) {
        shownCustomerArray.push(customer.first_name);
      }
    });

    return custArrayWithBookingId;
  };

  return (
    <Card
      className="text-center"
      id="BookingCards"
      onClick={() => onhighlight(bookingObj.id)}
      style={{
        cursor: 'pointer',
        borderRadius: '10px',
        border: isHighlighted ? '10px solid rgb(35, 153, 61)' : '',
        boxShadow: isHighlighted
          ? '0 6px 18px rgba(0, 0, 0, 0.3)' // Enhanced shadow for highlighted state
          : '0 4px 12px rgba(0, 0, 0, 0.2)', // Default shadow
        backgroundColor: isHighlighted ? 'rgb(35, 153, 61)' : 'transparent',
        transition: 'all 0.3s ease', // Smooth transition for effects
      }}
    >
      <Card.Header style={{ color: 'white', background: isHighlighted ? 'black' : '#7a391893' }}> Booking: {bookingObj.id}</Card.Header>

      <Card.Body style={{ backgroundColor: isHighlighted ? 'transparent' : 'white' }}>
        <>
          <Card.Title>WIP</Card.Title>
          <Card.Text>Party Size ({bookingObj.number_of_party})</Card.Text>
          <Button onClick={() => handleDelete(bookingObj.id)} variant="danger">
            Delete
          </Button>
          <Button onClick={() => showcuseTEST()} variant="danger">
            TEST CUST
          </Button>
        </>
        <BookingCardModal bookingObj={bookingObj} />
      </Card.Body>
    </Card>
  );
}

BookingCard.propTypes = {
  JoinedObj: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
    }),
  ),
  customerObj: PropTypes.arrayOf(
    PropTypes.shape({
      booking: PropTypes.number.isRequired,
      customer: PropTypes.number.isRequired,
    }),
  ),
  bookingObj: PropTypes.shape({
    id: PropTypes.number,
    paid: PropTypes.bool,
    number_of_party: PropTypes.number,
    check_in_date: PropTypes.string,
    check_out_date: PropTypes.string,
    event_id: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onhighlight: PropTypes.func.isRequired,
  highlightedBookingId: PropTypes.number,
};
