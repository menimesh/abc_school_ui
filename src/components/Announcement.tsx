"use client";

import { useState } from "react";

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

const Announcement = () => {
  const [showAnnouncement, setShowAnnouncement] = useState<Boolean>(true);
  return (
    <div className="bg-white p-4 rounded-md">
      <div className=" flex items-center justify-between">
        <h1 className="text-gray-600 font-semibold text-xl">Announcements</h1>
        {showAnnouncement ? (
          <span
            className="text-gray-400 text-sm cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setShowAnnouncement(false);
            }}
          >
            View all
          </span>
        ) : (
          <span
            className="text-gray-400 text-sm cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setShowAnnouncement(true);
            }}
          >
            Show less
          </span>
        )}
      </div>
      <div>
        {(showAnnouncement ? event.slice(0, 2) : event).map((e) => (
          <div
            key={e.id}
            className="p-4 rounded-md border-2 border-gray-100 odd:bg-nimeshSky even:bg-nimeshPurple"
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

export default Announcement;
