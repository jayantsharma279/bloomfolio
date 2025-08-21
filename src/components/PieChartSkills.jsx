import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "ML", value: 40 },
  { name: "Financial Analysis", value: 25 },
  { name: "Data Engineering", value: 20 },
  { name: "Other", value: 15 },
];

const COLORS = ["#00C49F", "#FFBB28", "#0088FE", "#FF8042"];

const PieChartSkills = () => {
  return (
    <div className="panel">
      <h2>Portfolio Performance (Skills)</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={80} label>
            {data.map((entry, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartSkills;
