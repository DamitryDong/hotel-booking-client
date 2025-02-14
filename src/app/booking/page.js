'use client';

import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import BookingCard from '../../components/BookingCards';

import { getAllBookings } from '../../api/apiBookings';
import { getAllCustomers } from '../../api/apiCustomers';
import RoomPlanForShow from '../../components/RoomCardsForShow';
import { getAllCustomerJoinBookings } from '../../api/apiCBjointable';

export default function BookingHome() {
  const [filteredItems, setFilteredItems] = useState([]);
  const [customerItems, setCustomerItems] = useState([]);
  const [customerBookingItem, setcustomerBookingItem] = useState([]);
  const [searchTheWord, setsearchTheWord] = useState();
  const [RoomHighlighted, setRoomHighlighted] = useState(null);

  useEffect(() => {
    getAllBookings().then((bookings) => setFilteredItems(bookings));
    getAllCustomers().then((customers) => setCustomerItems(customers));
    getAllCustomerJoinBookings().then((joinedBooking) => setcustomerBookingItem(joinedBooking));
  }, []);

  const handleSearch = () => {
    if (searchTheWord) {
      const searchNumber = Number(searchTheWord);
      const filter = filteredItems.filter((bookingItem) => bookingItem.id === searchNumber);
      setFilteredItems(filter);
    } else {
      getAllBookings().then((bookings) => setFilteredItems(bookings));
      getAllCustomers().then((customers) => setCustomerItems(customers));
      getAllCustomerJoinBookings().then((joinedBooking) => setcustomerBookingItem(joinedBooking));
    }
  };

  const handleDeleteBooking = (deletedBookingId) => {
    setFilteredItems((prevItems) => prevItems.filter((booking) => booking.id !== deletedBookingId));
  };

  return (
    <div>
      <div className="text-center d-flex flex-column align-items-center" style={{ marginBottom: '2%' }}>
        <h2 style={{ paddingBottom: '2px', paddingTop: '2px', marginBottom: '2%', background: '#502d1b', width: '70%', borderRadius: '10px', color: 'white' }}> Bookings </h2>

        <div className="RoomsOnBookingInfo" style={{ width: '60%' }}>
          <RoomPlanForShow onbookingDeleteTrigger={filteredItems} RoomToHightlight={RoomHighlighted} />
        </div>

        <Form className="d-flex mb-3" style={{ maxWidth: '400px', width: '100%', marginTop: '1%' }}>
          <Form.Control type="search" placeholder="Search ID" className="me-2" aria-label="Search" value={searchTheWord} onChange={(e) => setsearchTheWord(e.target.value)} />
          <Button onClick={handleSearch} variant="outline-success">
            Search
          </Button>
        </Form>

        <div className="text-center d-flex flex-column align-items-center" style={{ width: '90%', overflowX: 'auto', overflowY: 'hidden', height: '27vh', backgroundColor: 'rgba(0, 0, 0, 0.11)' }}>
          <Row className="g-3" style={{ display: 'flex', flexWrap: 'nowrap', width: '90%' }}>
            {filteredItems.map((booking) => (
              <Col key={booking.id} sm={3} style={{ flex: '0 0 auto' }}>
                {/* here we set handleDeleteBooking to equal onDelete so now when we do onDelete it triggers handleDeleteBooking */}
                <BookingCard bookingObj={booking} customerObj={customerItems} JoinedObj={customerBookingItem} onDelete={handleDeleteBooking} onhighlight={setRoomHighlighted} highlightedBookingId={RoomHighlighted} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
