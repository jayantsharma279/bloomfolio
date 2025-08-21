import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { year: 2019, value: 1 },
  { year: 2020, value: 2 },
  { year: 2021, value: 3 },
  { year: 2022, value: 4 },
  { year: 2023, value: 5 },
  { year: 2024, value: 6 },
];

const TimelineChart = () => {
  return (
    <div className="panel">
      <h2>Career Timeline</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#00ff00" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimelineChart;
