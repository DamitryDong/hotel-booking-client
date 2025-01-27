const bookingData = [
  {
    id: 1,
    first_name: 'Saylor',
    last_name: 'Twift',
    paid: true,
    number_of_party: 2,
    check_in_date: '2022-01-01',
    check_out_date: '2022-01-03',
    event_id: 1,
  },
  {
    id: 2,
    first_name: 'Bustin',
    last_name: 'Jeiber',
    paid: false,
    number_of_party: 4,
    check_in_date: '2022-02-10',
    check_out_date: '2022-02-15',
    event_id: 2,
  },
  {
    id: 3,
    first_name: 'Relly',
    last_name: 'Joll',
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
    description: 'Join us as we ring in the New Year with a spectacular countdown, fireworks, live music, and celebrations for all ages.',
  },
  {
    id: 2,
    event_name: "Valentine's Day Celebration",
    date: '2022-02-14',
    time: '18:00',
    description: "Celebrate love with a romantic evening featuring a candlelight dinner, live jazz music, and special couple's activities.",
  },
  {
    id: 3,
    event_name: 'Spring Festival',
    date: '2022-03-21',
    time: '10:00',
    description: 'Welcome the arrival of spring with a day full of fun! Enjoy local food vendors, arts and crafts, live performances, and a colorful flower display.',
  },
  {
    id: 4,
    event_name: 'Summer Beach Party',
    date: '2022-06-15',
    time: '15:00',
    description: 'Kick off summer with a beachside party! Enjoy live DJ performances, beach games, food trucks, and a stunning sunset view.',
  },
  {
    id: 5,
    event_name: 'Halloween Spooktacular',
    date: '2022-10-31',
    time: '19:00',
    description: 'Dress up and join us for a night of frightful fun! Featuring a haunted house, costume contest, trick-or-treating, and spooky-themed snacks.',
  },
  {
    id: 6,
    event_name: 'Thanksgiving Feast',
    date: '2022-11-24',
    time: '14:00',
    description: 'Celebrate Thanksgiving with a delicious community feast, featuring traditional dishes, live entertainment, and activities for the whole family.',
  },
];

export { bookingData, roomData, eventData };
//  USe Them juSt like Api calls just instead of .then we just do this: const eventNames = eventData.map((event) => event.event_name);
