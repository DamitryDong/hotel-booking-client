'use client';

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import BookingCard from '../../components/BookingCards';
import { bookingData } from '../../api/TempData';

export default function BookingHome() {
  const [filteredItems, setFilteredItems] = useState(bookingData);
  const [searchTheWord, setsearchTheWord] = useState(''); // Track the search input value

  const handleSearch = () => {
    // Filter the bookingData based on the searchTheWord
    const filter = bookingData.filter((bookingItem) => bookingItem.last_name.toLowerCase().includes(searchTheWord.toLowerCase()));

    setFilteredItems(filter);
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchTheWord} // Bind the input value to searchTheWord state
          onChange={(e) => setsearchTheWord(e.target.value)} // Update searchTheWord on input change
        />
        <Button onClick={handleSearch} variant="outline-success">
          Search
        </Button>
      </Form>
      {filteredItems.map((booking) => (
        <BookingCard key={booking.id} bookingObj={booking} />
      ))}
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
