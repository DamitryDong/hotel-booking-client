import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const COLORS = ['rgba(6, 114, 29, 0.69)', 'rgb(146, 15, 15)', 'rgb(240, 1, 168)', 'rgb(76, 0, 255)'];

export default function PieChartComponent({ bookingItem }) {
  // this gets the unique uid size so we can do the for loop to get exact amount sections
  const uniqueUids = [...new Set(bookingItem.map((item) => item.uid))];

  // Count occurrences of each UID
  const uidCount = bookingItem.reduce((acc, item) => {
    acc[item.uid] = (acc[item.uid] || 0) + 1;
    return acc;
  }, {});

  // Populate `data` array with what have
  const data = uniqueUids.map((uid) => ({
    name: uid,
    value: uidCount[uid],
  }));

  return (
    <div className="text-center d-flex flex-column align-items-center">
      <h3>Booking Contributions</h3>

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
