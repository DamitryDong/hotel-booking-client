/* eslint-disable */

'use client';

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function EventCards({ events }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    // This one is for styling to indicate which event the courasel is on
    setActiveIndex(selectedIndex);
  };

  const handleCardClick = (index) => {
    // This one is for so we can click the cards and change the carousal.
    setActiveIndex(index);
  };

  // Note that with this they both change the activeIndex variable, but fills it with differents things
  // one will set the active idex to be the one selected on the courasel when we click the courasel buttons for next image
  // the other one will set the active index to be the one we selected from the card. (they both interact with the images.)
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '5rem', color: 'black' }}>Events</h1>
      <div
        style={{
          margin: 'auto',
          width: '95%',
          padding: '50px 20px',
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
        }}
      >
        {/* Description Section */}
        <div
          style={{
            padding: '20px',
            width: '22%',
            maxWidth: '350px',
            maxHeight: '750px',
            height: 'auto',
            overflow: 'auto',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
            border: '1px solid #e0e0e0',
          }}
        >
          {events.map((eventObj, index) => (
            <div
              key={eventObj.id}
              onClick={() => handleCardClick(index)} // Update the active index on click (for the desc cards that is)
              style={{
                paddingBottom: '10px',
                paddingTop: '10px',
                paddingLeft: '10px',
                paddingRight: '5px',
                borderBottom: '1px solid #ddd',
                backgroundColor: index === activeIndex ? '#7a391893' : 'transparent',
                borderRadius: index === activeIndex ? '8px' : '0',
                cursor: 'pointer', // Got this from Chat GPT, you can use a cursor to change the cursor when you mouse over the div, it's pretty cool.
                transition: 'background-color 0.3s',
              }}
            >
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: index === activeIndex ? 'white' : 'black', // Change text color for active
                }}
              >
                {eventObj.event_name}
              </h3>
              <p
                style={{
                  fontSize: '1.2rem',
                  color: index === activeIndex ? 'white' : '#555', // Change text color for active
                }}
              >
                {eventObj.description}
              </p>
            </div>
          ))}
        </div>

        {/* Carousel Section */}
        <div style={{ flex: '2' }}>
          <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
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
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default EventCards;
