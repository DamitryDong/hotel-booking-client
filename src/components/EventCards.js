'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function EventCards({ eventObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
          {eventObj.event_name} <Badge bg="secondary">{eventObj.time}</Badge>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{eventObj.date}</Card.Subtitle>
        <Card.Text>I would like event description to go here so it would look nice !!</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EventCards;

EventCards.propTypes = {
  eventObj: PropTypes.shape({
    id: PropTypes.number,
    event_name: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
  }),
};
