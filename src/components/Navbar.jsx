import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Logo or Name */}
        <h1 className="text-2xl font-extrabold text-blue-600 tracking-tight">
          Jayant Sharma 
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {["Dashboard", "Portfolio", "About"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative hover:text-blue-600 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white border-t shadow-sm py-3 space-y-3">
          {["Dashboard", "Portfolio", "About"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
