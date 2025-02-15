/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookingCardModal from './BookingCardModals';
import { deleteBooking } from '../api/apiBookings';

export default function BookingCard({ bookingObj, customerObj, JoinedObj, onDelete, onhighlight, highlightedBookingId }) {
  const [shownName1, setShownName1] = useState();
  const [shownName2, setShownName2] = useState();

  const isHighlighted = bookingObj.id === highlightedBookingId;

  const handleDelete = (BookingId) => {
    deleteBooking(BookingId).then(() => {
      onDelete(BookingId);
    });
  };

  // this will pull the data from the join table together with the cust and booking data
  const DisplayNames = () => {
    const custArrayWithBookingId = [];

    JoinedObj.forEach((joinedSec) => {
      if (joinedSec.booking === bookingObj.id) {
        custArrayWithBookingId.push(joinedSec.customer); // we push the customer with the booking id attatched into an array.
      }
    });

    const firstCust = custArrayWithBookingId[0];
    const secondCust = custArrayWithBookingId[1];

    customerObj.forEach((customer) => {
      if (customer.id === firstCust) {
        setShownName1(`${customer.first_name} ${customer.last_name}`);
      }
      if (customer.id === secondCust) {
        setShownName2(`${customer.first_name} ${customer.last_name}`);
      }
    });
  };

  useEffect(() => {
    DisplayNames();
  }, [customerObj]);

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
          <Card.Title>
            {shownName1} <br /> {shownName2}
          </Card.Title>
          <Card.Text>Party Size ({bookingObj.number_of_party})</Card.Text>
          <Button onClick={() => handleDelete(bookingObj.id)} variant="danger">
            Delete
          </Button>
        </>
        <BookingCardModal bookingObj={bookingObj} custName1={shownName1} custName2={shownName2} />
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
