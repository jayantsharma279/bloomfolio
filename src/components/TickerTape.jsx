import React from "react";

const projects = [
  { name: "PRJ1", impact: "+5.2%", link: "#" },
  { name: "PRJ2", impact: "-1.3%", link: "#" },
  { name: "PRJ3", impact: "+3.7%", link: "#" },
  { name: "PRJ4", impact: "+8.1%", link: "#" },
  { name: "PRJ5", impact: "-0.8%", link: "#" },
  { name: "PRJ6", impact: "+4.4%", link: "#" },
];

const TickerTape = () => {
  return (
    <div className="ticker-tape">
      <marquee>
        {projects.map((p, i) => (
          <span key={i} className="ticker-item">
            {p.name}: <span className={p.impact.startsWith("+") ? "green" : "red"}>{p.impact}</span>
          </span>
        ))}
      </marquee>
    </div>
  );
};

export default TickerTape;
