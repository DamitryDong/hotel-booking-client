'use client';

import React, { useState, useEffect } from 'react';
import EventCards from '@/components/EventCards';
import getAllEvents from '../../api/apiEvents';
import { getAllBookings } from '../../api/apiBookings';

export default function EventPage() {
  const [eventArray, setEvents] = useState([]);
  const [bookingArray, setBooking] = useState([]);

  useEffect(() => {
    getAllEvents().then((fetchedEvents) => {
      setEvents(fetchedEvents);
    });

    getAllBookings().then((fetchedBookings) => {
      setBooking(fetchedBookings);
    });
  }, []);

  return <EventCards events={eventArray} bookings={bookingArray} />;
}
