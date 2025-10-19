import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: 2020, value: 1, label: "Started undergraduate in EEE at MIT Manipal" },
  { year: 2021, value: 1.5, label: "First research internship" },
  { year: 2022, value: 2.2, label: "Interned at DRDO Bengaluru" },
  { year: 2023, value: 3.8, label: "DAAD Scholar at University of Bonn, Germany" },
  { year: 2024, value: 5.5, label: "Worked at IIT Madras. Started school at Carnegie Mellon" },
  {year: 2025, value: 6.5, label: "Interned at Tiger Analytics at Santa Clara"}
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { year, label } = payload[0].payload;
    return (
      <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-lg">
        <p className="font-semibold text-blue-600">{year}</p>
        <p className="text-gray-700">{label}</p>
      </div>
    );
  }
  return null;
};

export default function TimelineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 10, left: 10, bottom: 10 }}  // <-- Add this
      >
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#2563eb"
          strokeWidth={3}
          dot={{ r: 5, fill: "#2563eb" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
