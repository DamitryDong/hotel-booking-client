'use client';

import React from 'react';
import EventCards from '@/components/EventCards';
import { eventData } from '../../api/TempData';

export default function EventPage() {
  return <EventCards events={eventData} />;
}
