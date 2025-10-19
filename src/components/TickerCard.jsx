import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function TickerCard({ symbol, price, change, image, description }) {
  const isPositive = change >= 0;

  return (
    <div
      className="
        relative group p-6 bg-white rounded-xl shadow-md border 
        flex flex-col items-center justify-center text-center 
        transition-transform transform hover:scale-105 hover:shadow-2xl duration-300
      "
    >
      {/* Default visible content */}
      <div
        className="
          z-10 transition-opacity duration-300
          group-hover:opacity-0
        "
      >
        <span className="text-lg font-bold">{symbol}</span>
        <span className="text-2xl font-semibold mt-1 block">${price.toFixed(2)}</span>
        <div
          className={`flex items-center justify-center mt-2 px-2 py-1 rounded-lg text-sm font-medium mx-auto w-fit ${
            isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {isPositive ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
          <span className="ml-1">{change}%</span>
        </div>
      </div>

      {/* Hover overlay */}
      <div
        className="
          absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 flex flex-col items-center justify-center p-4 rounded-xl
        "
      >
        <img
          src={image}
          alt={symbol}
          className="w-24 h-24 object-cover rounded-lg mb-3 border"
        />
        <p className="text-gray-700 text-sm font-medium">{description}</p>
      </div>
    </div>
  );
}
