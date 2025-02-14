import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function PieChartComponent() {
  const [graphShown, setGraphShown] = useState('');

  return (
    <div className="text-center d-flex flex-column align-items-center">
      <h3>{graphShown}</h3>
      <div className="text-center d-flex flex-row align-items-center" style={{ marginTop: '1.5%' }}>
        <Button style={{ borderRadius: '0', borderRight: '0px', borderLeft: '0px' }} variant="outline-dark" onClick={() => setGraphShown('roomGraph')}>
          Room
        </Button>
        <Button style={{ borderRadius: '0', borderLeft: '0px', borderRight: '0px' }} variant="outline-dark" onClick={() => setGraphShown('bookingGraph')}>
          Booking
        </Button>
      </div>
      <PieChart width={400} height={400}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={180} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell id={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
