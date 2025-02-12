'use client';

import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import BookingCard from '../../components/BookingCards';
import { bookingData } from '../../api/TempData';
import { getAllBookings } from '../../api/apiBookings';

export default function BookingHome() {
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTheWord, setsearchTheWord] = useState('');
  // TODO: SEARCH BAR NEEDS FIXING AFTER GETTING CUSTOMER NAMES
  useEffect(() => {
    getAllBookings().then((bookings) => setFilteredItems(bookings));
  }, []);

  const handleSearch = () => {
    const filter = bookingData.filter((bookingItem) => bookingItem.last_name.toLowerCase().includes(searchTheWord.toLowerCase()));
    setFilteredItems(filter);
  };

  const handleDeleteBooking = (deletedBookingId) => {
    setFilteredItems((prevItems) => prevItems.filter((booking) => booking.id !== deletedBookingId));
  };

  return (
    <div className="text-center d-flex flex-column align-items-center" style={{ padding: '30px' }}>
      <Form className="d-flex mb-3" style={{ maxWidth: '400px', width: '100%' }}>
        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" value={searchTheWord} onChange={(e) => setsearchTheWord(e.target.value)} />
        <Button onClick={handleSearch} variant="outline-success">
          Search
        </Button>
      </Form>

      <Row className="g-3" style={{ maxWidth: '800px', width: '100%' }}>
        {filteredItems.map((booking) => (
          <Col key={booking.id} xs={12} sm={6}>
            {/* here we set handleDeleteBooking to equal onDelete so now when we do onDelete it triggers handeleDeleteBooking */}
            <BookingCard bookingObj={booking} onDelete={handleDeleteBooking} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
