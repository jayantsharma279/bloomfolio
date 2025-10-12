import React from "react";
import Navbar from "./components/Navbar";
import TickerCard from "./components/TickerCard";
import TimelineChart from "./components/TimelineChart";
import PieChartSkills from "./components/PieChartSkills";
import Footer from "./components/Footer";

export default function App() {
  const tickers = [
    { symbol: "AAPL", price: 185.12, change: 2.1 },
    { symbol: "TSLA", price: 235.78, change: -1.5 },
    { symbol: "NVDA", price: 900.5, change: 4.3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-10">
        {/* Tickers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tickers.map((t) => (
            <TickerCard key={t.symbol} {...t} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Growth Over Time</h2>
            <TimelineChart />
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Skill Portfolio</h2>
            <PieChartSkills />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
