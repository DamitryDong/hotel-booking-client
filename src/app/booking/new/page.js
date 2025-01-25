import React from 'react';
import BookingForm from '../../../components/Form/bookingForm';
import { roomData } from '../../../api/TempData';

// create a reusable form to add/edit book and render in this view

export default function AddBook() {
  return <BookingForm cardrRoomObj={roomData} />;
}
