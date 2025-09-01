import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Bloomfolio 📈</h1>
        <div className="flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">Dashboard</a>
          <a href="#" className="hover:text-blue-600">Portfolio</a>
          <a href="#" className="hover:text-blue-600">About</a>
        </div>
      </div>
    </nav>
  );
}
