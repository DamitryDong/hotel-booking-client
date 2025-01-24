'use client';

import React, { useEffect } from 'react';
import BookingCard from '../../components/BookingCards';
import { bookingData } from '../../api/TempData';

export default function BookingHome() {
  useEffect(() => {
    console.log(bookingData);
  });
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
      {bookingData.map((booking) => (
        <BookingCard bookingObj={booking} />
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
