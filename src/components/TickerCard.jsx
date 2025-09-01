import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function TickerCard({ symbol, price, change }) {
  const isPositive = change >= 0;
  return (
    <div className="p-5 bg-white rounded-xl shadow-md border flex flex-col items-center">
      <span className="text-lg font-bold">{symbol}</span>
      <span className="text-2xl font-semibold mt-1">${price.toFixed(2)}</span>
      <div
        className={`flex items-center mt-2 px-2 py-1 rounded-lg text-sm font-medium ${
          isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
      >
        {isPositive ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
        <span className="ml-1">{change}%</span>
      </div>
    </div>
  );
}
