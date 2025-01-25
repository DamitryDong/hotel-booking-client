/* eslint-disable */

'use client';

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function EventCards({ events }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '4rem', color: '#333' }}>Upcoming Events</h1>
      <div style={{ maxWidth: '1000px', padding: '50px 20px' }}>
        <Carousel>
          {events.map((eventObj) => (
            <Carousel.Item key={eventObj.id}>
              <Carousel.Caption
                style={{
                  color: 'black',
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.81)',
                  padding: '20px',
                  borderRadius: '10px',
                }}
              >
                <h3
                  style={{
                    fontSize: '2.4rem',
                    fontWeight: 'bold',
                    color: '#222',
                    marginBottom: '15px',
                  }}
                >
                  {eventObj.event_name}
                </h3>
                <p style={{ fontSize: '1.5rem', color: 'black' }}>
                  {eventObj.date} | {eventObj.time}
                </p>
              </Carousel.Caption>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: '40px',
                }}
              >
                <img
                  src="https://theperfectevent.com/wp-content/uploads/2020/01/Main-Scroll-2.jpg"
                  alt={eventObj.event_name}
                  style={{
                    maxWidth: '95%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    border: '6px solid #fff',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

EventCards.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      event_name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default EventCards;
