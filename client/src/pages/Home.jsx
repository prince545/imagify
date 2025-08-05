import React from "react";
import Navbar from "../components/Navbar";
import FloatingCards from "../components/FloatingCards";
import MagicalCards from "../components/MagicalCards";

export default function Home() {
  return (
    <div className="min-h-screen bg-outerBlue p-6 relative">
      {/* Magical floating cards background */}
      <div className="absolute inset-0 z-0">
        <FloatingCards />
      </div>
      
      {/* Main content overlay */}
      <div className="relative z-10 bg-diag-white-inner w-full min-h-screen max-w-6xl mx-auto rounded-3xl shadow-xl p-10 flex flex-col backdrop-blur-sm bg-opacity-95">
        {/* Navbar inside white gradient box */}
        <Navbar />

        {/* Main Section Centered */}
        <section className="flex flex-col flex-grow items-center justify-center text-center w-full py-12">
          <h2 className="text-6xl font-bold text-gray-900 mb-4">
            Generate images <br /> from text
          </h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Transform your ideas into stunning visuals <br /> with the power of AI.
          </p>

          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter your prompt"
              className="w-full p-3 pr-24 rounded-lg border-2 border-blue-300 shadow-[4px_4px_8px_rgba(0,0,255,0.3)] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-[1.02]"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
              Generate
            </button>
          </div>
        </section>

        {/* Magical Cards Section */}
        <section className="w-full">
          <MagicalCards />
        </section>
      </div>
    </div>
  );
}
