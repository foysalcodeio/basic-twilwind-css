import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const info = [

    {
      "name": "John Doe",
      "income_amount": 5000,
      "sell_amount": 3000,
      "credit_amount": 2000,
      "debit_amount": 1000
    },
    {
      "name": "Jane Doe",
      "income_amount": 7000,
      "sell_amount": 4000,
      "credit_amount": 2500,
      "debit_amount": 1200
    },
    {
      "name": "Michael Johnson",
      "income_amount": 6000,
      "sell_amount": 3500,
      "credit_amount": 1800,
      "debit_amount": 900
    },
    {
      "name": "Emily Smith",
      "income_amount": 8000,
      "sell_amount": 4500,
      "credit_amount": 2800,
      "debit_amount": 1500
    },
    {
      "name": "Christopher Brown",
      "income_amount": 5500,
      "sell_amount": 3200,
      "credit_amount": 2100,
      "debit_amount": 1100
    },
    {
      "name": "Sophia Miller",
      "income_amount": 7500,
      "sell_amount": 4200,
      "credit_amount": 2600,
      "debit_amount": 1300
    },
    {
      "name": "William Davis",
      "income_amount": 6500,
      "sell_amount": 3800,
      "credit_amount": 2000,
      "debit_amount": 1000
    },
    {
      "name": "Olivia Wilson",
      "income_amount": 9000,
      "sell_amount": 5000,
      "credit_amount": 3200,
      "debit_amount": 1700
    },
    {
      "name": "David Anderson",
      "income_amount": 7200,
      "sell_amount": 4300,
      "credit_amount": 2700,
      "debit_amount": 1400
    },
    {
      "name": "Emma Martinez",
      "income_amount": 5800,
      "sell_amount": 3400,
      "credit_amount": 1900,
      "debit_amount": 950
    }  
  ];
  
const Dashboard = () => {
  return (
    <ResponsiveContainer width="90%" height={500}>
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
