import React from 'react';
import WorkingBookingForm from '../../../components/form/workingBForm';

// Create a reusable form to add/edit booking and render in this view
export default function AddBooking() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        width: '90%',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <WorkingBookingForm />
    </div>
  );
}
