"use client";

import { time } from "console";
import { title } from "process";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const event = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 4:00 PM",
    description: "Talk is cheap show me your code....",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 4:00 PM",
    description: "Talk is cheap show me your code....",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 4:00 PM",
    description: "Talk is cheap show me your code....",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 4:00 PM",
    description: "Talk is cheap show me your code....",
  },
];
const EventCalander = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-3 ">Event</h1>
      </div>
      <div className="flex flex-col gap-4">
        {event.map((e) => (
          <div
            key={e.id}
            className="p-4 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-nimeshSky even:border-t-nimeshPurple"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-gray-600 font-semibold">{e.title}</h1>
              <span className="text-gray-400 text-xs">{e.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default EventCalander;
