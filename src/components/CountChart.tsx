"use client";
import React, { PureComponent } from "react";
import Image from "next/image";
import { RadialBarChart, RadialBar, Tooltip } from "recharts";

import { Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    uv: 100,

    fill: "white",
  },
  {
    name: "Girls",
    uv: 50,

    fill: "#FAE27C",
  },
  {
    name: "Boys",
    uv: 50,

    fill: "#CFCEFF",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 shadow-lg">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="More Icon" width={20} height={20} />
      </div>
      <div className="relative w-full h-[75%] ">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={30}
            data={data}
          >
            <RadialBar background dataKey="uv" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          height={60}
          width={60}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Data Section */}
      <div className="flex justify-center gap-16 mb-6">
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-nimeshSky rounded-full flex justify-center items-center">
            <h1 className="font-bold text-black">1,234</h1>
          </div>
          <h2 className="text-xs text-gray-500">Boys (55%)</h2>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-nimeshYellow rounded-full flex justify-center items-center">
            <h1 className="font-bold text-black">1,234</h1>
          </div>
          <h2 className="text-xs text-gray-500">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
