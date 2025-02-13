'use client';

import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import BookingCard from '../../components/BookingCards';
import { bookingData } from '../../api/TempData';
import { getAllBookings } from '../../api/apiBookings';
import RoomPlanForShow from '../../components/RoomCardsForShow';

export default function BookingHome() {
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTheWord, setsearchTheWord] = useState('');
  const [RoomHighlighted, setRoomHighlighted] = useState(null);
  // TODO: SEARCH BAR NEEDS FIXING AFTER GETTING CUSTOMER NAMES
  useEffect(() => {
    getAllBookings().then((bookings) => setFilteredItems(bookings));
  }, [RoomHighlighted]);

  const handleSearch = () => {
    const filter = bookingData.filter((bookingItem) => bookingItem.last_name.toLowerCase().includes(searchTheWord.toLowerCase()));
    setFilteredItems(filter);
  };

  const handleDeleteBooking = (deletedBookingId) => {
    console.log('Deleting booking ID:', deletedBookingId);
    setFilteredItems((prevItems) => prevItems.filter((booking) => booking.id !== deletedBookingId));
  };

  return (
    <div>
      <div className="text-center d-flex flex-column align-items-center" style={{ marginBottom: '2%' }}>
        <h2 style={{ paddingBottom: '2px', paddingTop: '2px', marginBottom: '2%', background: '#502d1b', width: '70%', borderRadius: '10px', color: 'white' }}> Bookings </h2>
        <Form className="d-flex mb-3" style={{ maxWidth: '400px', width: '100%' }}>
          <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" value={searchTheWord} onChange={(e) => setsearchTheWord(e.target.value)} />
          <Button onClick={handleSearch} variant="outline-success">
            Search
          </Button>
        </Form>

        <div className="text-center d-flex flex-column align-items-center" style={{ marginBottom: '2%', width: '90%', overflowX: 'auto', overflowY: 'hidden', height: '26vh' }}>
          <Row className="g-3" style={{ display: 'flex', flexWrap: 'nowrap', width: '90%' }}>
            {filteredItems.map((booking) => (
              <Col key={booking.id} sm={3} style={{ flex: '0 0 auto' }}>
                {/* here we set handleDeleteBooking to equal onDelete so now when we do onDelete it triggers handleDeleteBooking */}
                <BookingCard bookingObj={booking} onDelete={handleDeleteBooking} onhighlight={setRoomHighlighted} highlightedBookingId={RoomHighlighted} />
              </Col>
            ))}
          </Row>
        </div>

        <div className="RoomsOnBookingInfo" style={{ width: '60%' }}>
          <RoomPlanForShow onbookingDeleteTrigger={filteredItems} RoomToHightlight={RoomHighlighted} />
        </div>
      </div>
    </div>
  );
}
