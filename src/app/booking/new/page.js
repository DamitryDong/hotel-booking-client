import React from 'react';
import BookingForm from '../../../components/form/bookingForm';

// Create a reusable form to add/edit booking and render in this view

export default function AddBook() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        width: '90%',
        margin: '0 auto',
      }}
    >
      <BookingForm />
    </div>
  );
}
