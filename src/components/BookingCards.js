/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Example from './BookingCardModals';

export default function BookingCard({ bookingObj }) {
  const [hovered, setHovered] = useState(false);

  // Inline styling for hover effects
  const cardStyles = {
    transition: 'all 0.5s ease',
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hovered ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: hovered ? '#f8f9fa' : '#fff',
    color: hovered ? '#333' : '#000',
  };

  const headerStyles = {
    transition: 'color 0.5s ease',
    color: hovered ? '#555' : '#000',
  };

  const footerStyles = {
    transition: 'color 0.5s ease',
    color: hovered ? '#777' : '#888',
  };

  return (
    <Card style={cardStyles} className="text-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Card.Header style={headerStyles}>{hovered ? `✨ Booking #${bookingObj.id}` : `Booking ${bookingObj.id}`}</Card.Header>

      <Card.Body>
        {hovered ? (
          <>
            <Card.Title>Excited to welcome you, {bookingObj.first_name}!</Card.Title>
            <Card.Text>
              Get ready for Event {bookingObj.event_id} with your party of {bookingObj.number_of_party}.
            </Card.Text>
            <Button variant="success">Let's Go!</Button>
          </>
        ) : (
          <>
            <Card.Title>
              {bookingObj.first_name} {bookingObj.last_name}
            </Card.Title>
            <Card.Text>
              Party Size ({bookingObj.number_of_party}) Attending Event {bookingObj.event_id}
            </Card.Text>
            <Button variant="primary">Test</Button>
          </>
        )}
        <Example />
      </Card.Body>

      <Card.Footer style={footerStyles}>{hovered ? `You're staying from ${bookingObj.check_in_date} to ${bookingObj.check_out_date}.` : `${bookingObj.check_in_date} through ${bookingObj.check_out_date}`}</Card.Footer>
    </Card>
  );
}

BookingCard.propTypes = {
  bookingObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    id: PropTypes.number,
    paid: PropTypes.bool,
    number_of_party: PropTypes.number,
    check_in_date: PropTypes.string,
    check_out_date: PropTypes.string,
    event_id: PropTypes.number,
  }).isRequired,
};
