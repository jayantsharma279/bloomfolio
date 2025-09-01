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
  { year: 2019, value: 1 },
  { year: 2020, value: 1.5 },
  { year: 2021, value: 2.2 },
  { year: 2022, value: 3.8 },
  { year: 2023, value: 5.5 },
];

export default function TimelineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
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
