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

export default getAllRooms;
