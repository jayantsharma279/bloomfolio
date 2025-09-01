import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-6 text-center text-gray-600 text-sm border-t">
      <p>© {new Date().getFullYear()} Bloomfolio. Built by Jayant using React & Tailwind.</p>
    </footer>
  );
}
