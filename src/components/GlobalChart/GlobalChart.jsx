import React, { useState, useEffect } from 'react';
import { fetchGlobalDailyData } from '../../api';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip, CartesianGrid } from 'recharts';
//import { Line } from 'react-chartjs-2';
import { Title } from '../../components';

export default function GlobalChart() {

  const [dailyData, setDailyData] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      let apiValue = await fetchGlobalDailyData();
      
      // Just variables to help me understand what is going on with the individual data
      // const dates = apiValue.map(({ date }) => date);
      // const confirmedCases = apiValue.map(({ confirmed }) => confirmed);
      // const covidDeaths = apiValue.map(({ deaths }) => deaths);

      // const chartData = [];
      // for(let i = 0; i < dates.length; i++) {
      //   const newRow = {};
      //   newRow.date = dates[i];
      //   newRow.confirmed = confirmedCases[i];
      //   newRow.deaths = covidDeaths[i];
      //   chartData.push(newRow);
      // }

      // console.log(chartData);
      // console.log(apiValue);
      // console.log(dates);
      // console.log(confirmedCases);
      // console.log(covidDeaths);
      setDailyData(apiValue);
    }

    fetchAPI();
  }, []);


  // const lineChart = (
    
  //   // Orignally using react charts 2 and charts.js
  //   // dailyData.length
  //   // ? (
  //   //   <Line
  //   //     data={{
  //   //       labels: dailyData.map(({ date }) => date),
  //   //       datasets: [{
  //   //         data: dailyData.map(({ confirmed }) => confirmed),
  //   //         label: 'Infected',
  //   //         borderColor: '#3333ff',
  //   //         fill: true,
  //   //       }, {
  //   //         data: dailyData.map(({ deaths }) => deaths),
  //   //         label: 'Deaths',
  //   //         borderColor: 'red',
  //   //         backgroundColor: 'rgba(255, 0, 0, 0.5)',
  //   //         fill: true,
  //   //       }],
  //   //     }}
  //   // />) : null



  //   // Using Recharts
    
  // );

  return (
    <div>
      <Title>Covid 19 Global Chart</Title>
      <ResponsiveContainer width="100%" height={400}>
      <LineChart data={dailyData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="confirmed" stroke="#8884d8" />
        <Line type="monotone" dataKey="deaths" stroke="red" />
      </LineChart>
      </ResponsiveContainer>
      {/* {lineChart} */}
    </div>
  )
}
