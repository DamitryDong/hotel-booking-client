import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const COLORS = ['rgba(6, 114, 29, 0.69)', 'rgb(146, 15, 15)', 'rgb(240, 1, 168)', 'rgb(76, 0, 255)'];

export default function PieChartComponent({ bookingItem }) {
  const [graphShown, setGraphShown] = useState('Select View');

  const uniqueUids = new Set(bookingItem.map((item) => item.uid)).size;

  const data = [];

  for (let i = 1; i <= uniqueUids; i++) {
    data.push({ name: i, value: 400 });
  }

  return (
    <div className="text-center d-flex flex-column align-items-center">
      <h3>{graphShown}</h3>
      <div className="text-center d-flex flex-row align-items-center" style={{ marginTop: '1.5%' }}>
        <Button style={{ borderRadius: '0', borderRight: '0px', borderLeft: '0px' }} variant="outline-dark" onClick={() => setGraphShown('Room Occupancy')}>
          Room
        </Button>
        <Button style={{ borderRadius: '0', borderLeft: '0px', borderRight: '0px' }} variant="outline-dark" onClick={() => setGraphShown('Booking Contributions')}>
          Booking
        </Button>
      </div>
      <PieChart width={400} height={400}>
        <Pie data={data} outerRadius={180}>
          {data.map((entry, index) => (
            <Cell key={entry.name} id={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

PieChartComponent.propTypes = {
  bookingItem: PropTypes.arrayOf(
    PropTypes.shape({
      uid: PropTypes.number.isRequired, // Adjust type if uid isn't always a number
    }),
  ).isRequired,
};
