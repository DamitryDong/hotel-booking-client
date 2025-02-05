/* eslint-disable */

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import gsap from 'gsap';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function EventCards({ events, bookings }) {
  //GSAP EFFECT SECTION

  // this is for the header (events), you can use useRef to store the specific elemtn with the REF tag (basically to target)
  const headerRef = useRef(null);
  const leftComponent = useRef(null);
  const rightComponenet = useRef(null);
  const insideleftComponent = useRef([]);
  const insiderightComponent = useRef([]);

  // we call the location (the const we made above and .current) and then add animations to them.
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.fromTo(rightComponenet.current, { opacity: 0.2, x: 180 }, { opacity: 1, x: 0, duration: 1, ease: 'power4.out' }).fromTo(headerRef.current, { opacity: 0, x: -150 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power4.out' }, '-=0.5').fromTo(leftComponent.current, { opacity: 0, x: -120 }, { opacity: 1, x: 0, duration: 0.9, ease: 'power4.out' }, '-=0.5').fromTo(insideleftComponent.current, { opacity: 0, x: -80 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', stagger: 0.2 }, '-=0.5').fromTo(insiderightComponent.current, { opacity: 0, x: -80 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', stagger: 0.2 }, '-=0.5');
  }, []);

  //above GSAP EFFECT SECTION

  // state for the Modal buttons
  const [show, setShow] = useState(false);
  const [activeEventId, setActiveEventId] = useState(null); //THIS STATE IS REALLY IMPORTENT

  const handleShow = (eventId) => {
    setActiveEventId(eventId);
    setShow(true);
  };
  const handleClose = () => {
    setActiveEventId(null);
    setShow(false);
  };

  // state for the index of the courasel and sidebar.
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
      <h1 ref={headerRef} style={{ textAlign: 'center', fontSize: '5rem', color: 'black' }}>
        Events
      </h1>
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
          ref={leftComponent}
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
              ref={(el) => (insideleftComponent.current[index] = el)} // this is how you give each individual card a different ref (For animation)
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
                  color: index === activeIndex ? 'white' : 'black', //color change for the active index
                }}
              >
                {eventObj.event_name}
              </h3>
              <p
                style={{
                  fontSize: '1.2rem',
                  color: index === activeIndex ? 'white' : '#555',
                }}
              >
                {eventObj.description}
              </p>
            </div>
          ))}
        </div>

        {/* Carousel Section */}
        <div ref={rightComponenet} style={{ flex: '2' }}>
          <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
            {events.map((eventObj, index) => (
              <Carousel.Item key={eventObj.id}>
                <Carousel.Caption
                  ref={(e2) => (insiderightComponent.current[index] = e2)}
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

                    <Button variant="dark" onClick={() => handleShow(eventObj.id)} style={{ marginLeft: '10px' }}>
                      Invitees
                    </Button>

                    <Modal show={show} onHide={handleClose} centered>
                      <Modal.Header closeButton>
                        <Modal.Title className="w-100 text-center">Invited List</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <ul className="list-unstyled text-center">
                          {bookings
                            .filter((booking) => booking.event === activeEventId) // we must use the usestate variable to have the right variable because just setting it to equal eventObj.id will take the previous state.
                            .map((booking) => (
                              <li key={booking.id} className="py-1">
                                <strong>
                                  Booking: {booking.id} | Party Size: {booking.number_of_party}
                                </strong>
                              </li>
                            ))}
                        </ul>
                      </Modal.Body>

                      <Modal.Footer className="justify-content-center">
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
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
                  <img src={eventObj.image_url} alt={eventObj.event_name} className="eventImage" />
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
