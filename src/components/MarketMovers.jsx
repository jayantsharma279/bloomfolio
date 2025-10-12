import React from "react";

const movers = [
  { name: "Trading Simulator", change: "+12%" },
  { name: "Chatbot Project", change: "+8%" },
];

const MarketMovers = () => {
  return (
    <div className="panel">
      <h2>Market Movers</h2>
      <ul>
        {movers.map((m, i) => (
          <li key={i}>
            {m.name} <span className={m.change.startsWith("+") ? "green" : "red"}>{m.change}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketMovers;
