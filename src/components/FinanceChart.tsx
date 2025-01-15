"use client";
import Image from "next/image";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expenses: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expenses: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expenses: 9800,
  },
  {
    name: "April",
    income: 2780,
    expenses: 3908,
  },
  {
    name: "May",
    income: 1890,
    expenses: 4800,
  },
  {
    name: "June",
    income: 2390,
    expenses: 3800,
  },
  {
    name: "July",
    income: 3490,
    expenses: 4300,
  },
];

const FinanceChart = () => {
  return (
    <>
      <div className="bg-white rounded-xl w-full h-full p-4 shadow-lg">
        {/* Title Section */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Finance Charts</h1>
          <Image src="/moreDark.png" alt="More Icon" width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis axisLine={false} tickLine={false} tickMargin={10} />
            <Tooltip />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{
                paddingTop: "10px",
                paddingBottom: "30px",
              }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#8884d8"
              strokeWidth={5}
            />
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#82ca9d"
              strokeWidth={5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default FinanceChart;
