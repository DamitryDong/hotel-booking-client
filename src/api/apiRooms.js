import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllRooms = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rooms`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          console.log('Error');
          resolve([]);
        }
      })
      .catch(reject);
  });

// DONT WORK BECAUSE THIS FILTERING HAS TO BE SET UP BACKEND
const getAllRoomsByBookings = (bookingId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rooms/?booking_id=${bookingId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          console.log('Error');
          resolve([]);
        }
      })
      .catch(reject);
  });

const updateRooms = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rooms/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllRooms, updateRooms, getAllRoomsByBookings };
