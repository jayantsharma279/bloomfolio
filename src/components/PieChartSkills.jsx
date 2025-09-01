import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "ML", value: 40 },
  { name: "AI", value: 30 },
  { name: "Finance", value: 20 },
  { name: "DataViz", value: 10 },
];

const COLORS = ["#2563eb", "#22c55e", "#f59e0b", "#ef4444"];

export default function PieChartSkills() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
