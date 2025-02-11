import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllBookings = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/bookings`, {
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
          console.log('No data');
          resolve([]);
        }
      })
      .catch(reject);
  });

const getSingleBooking = (id) =>
  new Promise((resolve, reject) => {
   fetch(`${endpoint}/bookings/${id}.json`, {
      method: 'GET',
    headers: {
       'Content-Type': 'application/json',
     },
     })
      .then((response) => response.json())
     .then((data) => resolve(data))
     .catch(reject);
   });

const createBooking = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/bookings.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch(reject);
  });

const updateBooking = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/bookings/${payload.id}`, {
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

const deleteBooking = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/bookings/${payload.id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllBookings, createBooking, updateBooking, getSingleBooking, deleteBooking };

// api calls for booking, customer, customer_booking dropdown for customers (create customer form)
