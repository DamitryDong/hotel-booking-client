/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookingCardModal from './BookingCardModals';
import { deleteBooking } from '../api/apiBookings';

export default function BookingCard({ bookingObj, onDelete }) {
  const handleDelete = (BookingId) => {
    // This was really difficult to get because for some reason if a room has a booking
    // it returns the booking as another objected inside of the roomobj.
    // since we cannot make an apit call for where bookings is equal to what we want we did this.

    deleteBooking(BookingId).then(() => {
      onDelete(BookingId);
      // TODO: This is no required but for some reasona the True for vacancy isn't passing.
      // getAllRooms().then((roomObj) => {
      //   const filteredRoomId = [];
      //   roomObj.forEach((room) => {
      //     if (room.booking?.id === BookingId) {
      //       filteredRoomId.push(room.id);
      //     }
      //   });
      //   filteredRoomId.forEach((roomId) => {
      //     const payload = {
      //       id: roomId,
      //       vacancy: true,
      //       booking: null,
      //     };
      //     updateRooms(payload);
      //   });
      // });
    });
  };

  return (
    <Card className="text-center">
      <Card.Header> Booking: {bookingObj.id}</Card.Header>

      <Card.Body>
        <>
          <Card.Title>WIP</Card.Title>
          <Card.Text>Party Size ({bookingObj.number_of_party})</Card.Text>
          <Button onClick={() => handleDelete(bookingObj.id)} variant="danger">
            Delete
          </Button>
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
  onDelete: PropTypes.func.isRequired,
};
