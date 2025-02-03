'use client';

import React, { useState, useEffect } from 'react';
import EventCards from '@/components/EventCards';
import getAllEvents from '../../api/apiEvents';

export default function EventPage() {
  const [eventArray, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then((fetchedEvents) => {
      setEvents(fetchedEvents);

      console.log('Fetched events:', fetchedEvents);
    });
  }, []);

  return <EventCards events={eventArray} />;
}
