import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FloatingCards from "../components/FloatingCards";
import MagicalCards from "../components/MagicalCards";
import HowItWorks from "../components/HowItWorks";
import PricingSection from "./PricingSection";
import Tesimonials from "../components/Tesimonials";


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

        {/* Hero Section */}
        <section id="home" className="flex flex-col flex-grow items-center justify-center text-center w-full py-12">
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

        {/* Features & Why Choose Us Section */}
        <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-4">
                      <div className="text-center mb-12">

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Features */}
            {/* Lightning Fast */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Lightning Fast</h4>
              <p className="text-gray-600">Generate high-quality images in seconds, not hours</p>
            </div>

            {/* Style Control */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Style Control</h4>
              <p className="text-gray-600">Multiple art styles to match your vision perfectly</p>
            </div>

            {/* HD Quality */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 012 2m0 4a2 2 0 100 4m0-4a2 2 0 012 2m0 4v2m0-6V4m6 6V4m0 2a2 2 0 100 4m0-4a2 2 0 012 2m0 4a2 2 0 100 4m0-4a2 2 0 012 2m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">HD Quality</h4>
              <p className="text-gray-600">Crisp, high-resolution images ready for any use</p>
            </div>

            {/* Commercial Use */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Commercial Use</h4>
              <p className="text-gray-600">All generated images come with full usage rights</p>
            </div>
          </div>
        </div>
 <section id="magical-cards" className="w-full">
          <MagicalCards />
        </section>
        <section className="w-full mt-16">
          <HowItWorks />
        </section>
        {/* Pricing Section */}
        <section id="pricing-section" className="w-full mt-16">
          <PricingSection />
        </section>

        {/* How It Works Section */}
        

      </div>
      <section id="testimonials" className="w-full mt-16">
          <Tesimonials />
        </section>
    </div>
  );
}