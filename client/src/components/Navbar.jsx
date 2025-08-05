import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white bg-opacity-70 backdrop-blur-md rounded-3xl shadow mb-10">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src="/Logo.png"
          alt="Imagify Logo"
          className="h-6 w-6"
        />
        <span className="text-2xl font-bold text-gray-900">Imagify</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 text-gray-700 font-medium">
        <a href="#" className="hover:text-indigo-600">Home</a>
        <a href="#" className="hover:text-indigo-600">Pricing</a>
        <a href="#" className="hover:text-indigo-600">Gallery</a>
        <a href="#" className="hover:text-indigo-600">Studio</a>
      </div>

      {/* Sign Up Button */}
      <div>
        <a
          href="#"
          className="bg-indigo-500 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-600 transition"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
}
