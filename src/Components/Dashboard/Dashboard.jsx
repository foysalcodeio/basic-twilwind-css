import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const info = [
    {
      "name": "Entity A",
      "income_amount": 5000,
      "sell_amount": 3000,
      "credit_amount": 2000,
      "debit_amount": 1000
    },
    {
      "name": "Entity B",
      "income_amount": 7000,
      "sell_amount": 4000,
      "credit_amount": 2500,
      "debit_amount": 1200
    },
    {
      "name": "Entity C",
      "income_amount": 6000,
      "sell_amount": 3500,
      "credit_amount": 1800,
      "debit_amount": 900
    },
    {
      "name": "Entity D",
      "income_amount": 8000,
      "sell_amount": 4500,
      "credit_amount": 2800,
      "debit_amount": 1500
    }
  ];
  
const Dashboard = () => {
  return (
    <ResponsiveContainer width={900} height={300}>
      <LineChart data={info}>

        <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
        <Tooltip />
        <Legend />

        <Line type="monotone" dataKey="income_amount" stroke="#8884d8" />
        <Line type="monotone" dataKey="debit_amount" stroke="#82ca9d" />
        
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Dashboard;
