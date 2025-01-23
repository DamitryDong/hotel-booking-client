const bookingData = [
  {
    id: 1,
    paid: true,
    number_of_party: 2,
    check_in_date: '2022-01-01',
    check_out_date: '2022-01-03',
    event_id: 1,
  },
  {
    id: 2,
    paid: false,
    number_of_party: 4,
    check_in_date: '2022-02-10',
    check_out_date: '2022-02-15',
    event_id: 2,
  },
  {
    id: 3,
    paid: true,
    number_of_party: 1,
    check_in_date: '2022-03-20',
    check_out_date: '2022-03-22',
    event_id: 3,
  },
];

const roomData = [
  {
    id: 1,
    room_number: 101,
    vacancy: true,
    room_size: '1 Queen',
    price: 100,
    good_view: true,
    smoking: false,
    booking_id: 1,
  },
  {
    id: 2,
    room_number: 202,
    vacancy: false,
    room_size: '2 Double',
    price: 150,
    good_view: false,
    smoking: true,
    booking_id: 2,
  },
  {
    id: 3,
    room_number: 303,
    vacancy: true,
    room_size: '1 King',
    price: 200,
    good_view: true,
    smoking: false,
    booking_id: null,
  },
];

const eventData = [
  {
    id: 1,
    event_name: "New Year's Eve",
    date: '2022-01-01',
    time: '12:00',
  },
  {
    id: 2,
    event_name: "Valentine's Day Celebration",
    date: '2022-02-14',
    time: '18:00',
  },
  {
    id: 3,
    event_name: 'Spring Festival',
    date: '2022-03-21',
    time: '10:00',
  },
];

export { bookingData, roomData, eventData };
//  USe Them juSt like Api calls just instead of .then we just do this: const eventNames = eventData.map((event) => event.event_name);
