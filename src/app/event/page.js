'use client';

import EventCards from '@/components/EventCards';
import { eventData } from '../../api/TempData';

function Text2() {
  return <EventCards events={eventData} />;
}

export default Text2;
