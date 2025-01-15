"use client";

import Image from "next/image";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    absent: 4000,
    present: 2400,
  },
  {
    name: "Mon",
    absent: 3000,
    present: 1398,
  },
  {
    name: "Tue",
    absent: 2000,
    present: 9800,
  },
  {
    name: "Wed",
    absent: 2780,
    present: 3908,
  },
  {
    name: "Thu",
    absent: 1890,
    present: 4800,
  },
  {
    name: "Fri",
    absent: 2390,
    present: 3800,
  },
  {
    name: "Sat",
    absent: 3490,
    present: 4300,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance Chart</h1>
        <Image src="/moreDark.png" height={20} width={20} alt="" />
      </div>
      <div className="relative w-full h-full ">
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
            barSize={20}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} />
            <Tooltip />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "30px" }}
            />
            <Bar
              dataKey="absent"
              fill="#FAE27C"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="present"
              fill="#CFCEFF"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
