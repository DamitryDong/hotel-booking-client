'use client';

import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import BookingCard from '../../components/BookingCards';
import { bookingData } from '../../api/TempData';

export default function BookingHome() {
  const [filteredItems, setFilteredItems] = useState(bookingData);
  const [searchTheWord, setsearchTheWord] = useState('');

  const handleSearch = () => {
    const filter = bookingData.filter((bookingItem) => bookingItem.last_name.toLowerCase().includes(searchTheWord.toLowerCase()));
    setFilteredItems(filter);
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
            <BookingCard bookingObj={booking} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

// set a state for books
// const [bookings, setBookings] = useState([]);

// get user id with useauth hook
// const { user } = useAuth();

// api call to get the bookings
// const getAllTheBookings = () => {
//   getAllTheBookings(user.uid).then(setBookings);
// };

// api call to get bookings on componet render
// useEffect() {
//   useEffect(() => {
//     console.log(eventData);
//   });

// return (
//   <div className="text-center my-4">
//     <Link href="/booking/new" passHref>
//       <Button>Add A Booking</Button>
//     </Link>
//     <div className="d-flex flex-wrap">
//       {/* TODO: map over bookings here using BookingCard component */}
//       {bookings.map((booking) => (
//         <BookingCard key={booking.id} bookingObj={booking} onUpdate={getAllTheBookings} />
//       ))}
//     </div>
//   </div>
// );
