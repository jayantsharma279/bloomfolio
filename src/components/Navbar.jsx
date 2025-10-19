import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-black to-gray-900 shadow-lg border-b border-gray-800 w-full">
      <div className="container mx-auto px-6 py-6 flex flex-col justify-center items-center text-center">
        {/* Name */}
        <h1 className="text-4xl font-extrabold text-white tracking-wide mb-4 font-serif">Jayant Sharma
        </h1>

        {/* Links */}
        <div className="flex space-x-10 text-gray-400 font-medium text-lg">
          {["Dashboard", "Portfolio", "About"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group hover:text-white transition duration-300"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
