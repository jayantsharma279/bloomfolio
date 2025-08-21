import React from "react";
import Navbar from "./components/Navbar";
import TickerTape from "./components/TickerTape";
import ProjectTable from "./components/ProjectTable";
import TimelineChart from "./components/TimelineChart";
import PieChartSkills from "./components/PieChartSkills";
import MarketMovers from "./components/MarketMovers";
import TerminalPanel from "./components/TerminalPanel";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <TickerTape />
      <div className="main-grid">
        <div className="left-panel">
          <ProjectTable />
          <MarketMovers />
        </div>
        <div className="right-panel">
          <TimelineChart />
          <PieChartSkills />
        </div>
      </div>
      <TerminalPanel />
    </div>
  );
};

export default App;
