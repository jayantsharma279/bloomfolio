import React from "react";
import Navbar from "./components/Navbar";
import TickerCard from "./components/TickerCard";
import TimelineChart from "./components/TimelineChart";
import PieChartSkills from "./components/PieChartSkills";
import Footer from "./components/Footer";
import { symbol } from "d3-shape";

export default function App() {
const tickers = [
  {
    symbol: "Agentic AI for Credit Fraud Analytics",
    price: 185.12,
    change: 2.1,
    image: "bloomfolio/public/images/fraud.jpg",
    description: "LLM-powered agent pipeline detecting credit card anomalies using real-time graph embeddings.",
  },
  {
    symbol: "Netflix style movie recommendation system",
    price: 235.78,
    change: -1.5,
    image: "/images/movie-rec.jpg",
    description: "Collaborative + content-based recommendation model built with PyTorch and implicit feedback data.",
  },
  {
    symbol: "NLP based Loan Underwriting Assistant",
    price: 900.5,
    change: 4.3,
    image: "/images/loan-nlp.jpg",
    description: "FinBERT-based classifier analyzing bank statements for automated risk scoring and loan decisions.",
  },
  {
    symbol: "FIFA Game Prediction using Machine Learning",
    price: 432.5,
    change: 3.2,
    image: "/images/fifa-ml.jpg",
    description: "Random Forest and XGBoost ensemble predicting World Cup match outcomes from player stats.",
  },
  {
    symbol: "Mapping neural decision making patterns using chaotic Rossler attractors",
    price: 203.3,
    change: 1.2,
    image: "/images/fifa-ml.jpg",
    description: "Modelling the exploratory dynamics of the Basal Ganglia using reinforcement learning and Rossler Attractors",
  },
  {
    symbol: "Real time stress detection using LSTM-Transformers on heart and skin perspiration data",
    price: 83.3,
    change: 3.2,
    image: "/images/fifa-ml.jpg",
    description: "Novel LSTM-FCN algorithm that alerts the users of elevated stress levels in real time by tracking HRV and EDA data",
  },
];


  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-10">
        {/* Tickers */}
        <h2 className="text-xl font-semibold mb-4">Market Movers</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {tickers.map((t) => (
            <TickerCard key={t.symbol} {...t} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Career Timeline</h2>
            <TimelineChart />
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <PieChartSkills />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
