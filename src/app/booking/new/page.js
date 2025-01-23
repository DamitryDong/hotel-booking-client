import React from 'react';
import Bookingform from '@/components/form/bookingForm';
import { roomData } from '../../../api/TempData';

// create a reusable form to add/edit book and render in this view

export default function AddBook() {
  return <Bookingform cardrRoomObj={roomData} />;
}
