import React from 'react';
import Bookingform from '@/components/form/bookingForm';
import { roomData } from '../../../api/TempData';

// create a reusable form to add/edit book and render in this view

export default function AddBook() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <Bookingform cardrRoomObj={roomData} />;
    </div>
  );
}
