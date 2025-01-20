"use client";

import { useState } from "react";

interface Item {
  _id: string;
  ip: string;
  changeIpLink: string;
}

interface ButtonGridProps {
  items: Item[];
}

const buttonColors = [
  "bg-blue-500 hover:bg-blue-600",
  "bg-blue-600 hover:bg-blue-700",
  "bg-blue-700 hover:bg-blue-800",
  "bg-indigo-500 hover:bg-indigo-600",
  "bg-indigo-600 hover:bg-indigo-700",
  "bg-indigo-700 hover:bg-indigo-800",
  "bg-cyan-500 hover:bg-cyan-600",
  "bg-cyan-600 hover:bg-cyan-700",
  "bg-cyan-700 hover:bg-cyan-800",
  "bg-teal-600 hover:bg-teal-700",
];

export default function ButtonGrid({ items }: ButtonGridProps) {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-800">
        Pencetin Aja Bang
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
        {items.map((item, index) => (
          <button
            key={item._id}
            className={`p-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out text-white ${
              buttonColors[index % buttonColors.length]
            } ${
              selectedItem?._id === item._id
                ? "ring-2 ring-offset-2 ring-blue-300"
                : ""
            }`}
            onClick={(e) => {
              setSelectedItem(item);
              window.open(item.changeIpLink, "_blank");
            }}
          >
            {item.ip}
          </button>
        ))}
      </div>
      {selectedItem && (
        <p className="mt-4 text-center text-blue-800">
          Selected: {selectedItem.ip} (ID: {selectedItem._id})
        </p>
      )}
    </div>
  );
}
