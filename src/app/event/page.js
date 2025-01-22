'use client';

import React, { useEffect } from 'react';
import EventCards from '@/components/EventCards';
import { eventData } from '../../api/TempData';

function Text2() {
  useEffect(() => {
    console.log(eventData);
  });
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
      {eventData.map((event) => (
        <EventCards eventObj={event} />
      ))}
    </div>
  );
}

export default Text2;
