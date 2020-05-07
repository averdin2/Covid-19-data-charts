import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip, CartesianGrid } from 'recharts';


export default function LocationChart({ data, country }) {

  // let locationData = [];
  // locationData.push(data);

  const barChart = (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="lastUpdate" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="confirmed" fill="#8884d8" />
        <Bar dataKey="deaths" fill="red" />
        <Bar dataKey="recovered" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
    
  )
  return (
    <div>
      {barChart}
    </div>
  )
}
