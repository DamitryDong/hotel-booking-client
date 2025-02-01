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
          console.log({ data });
          resolve(Object.values(data));
        } else {
          console.log('No data');
          resolve([]);
        }
      })
      .catch(reject);
  });

export default getAllBookings;
