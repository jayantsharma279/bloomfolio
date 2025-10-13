import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Name */}
        <h1 className="text-2xl font-bold text-blue-600">Jayant Sharma</h1>

        {/* Center: Navigation Links */}
        <div className="flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">Dashboard</a>
          <a href="#" className="hover:text-blue-600">Portfolio</a>
          <a href="#" className="hover:text-blue-600">About</a>
        </div>

        {/* Right: Menu Icon (optional) */}
        <button className="md:hidden text-gray-600 hover:text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
