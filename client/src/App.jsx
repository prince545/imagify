import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PricingSection from "./pages/PricingSection";
import { Routes, Route } from "react-router-dom";
import BuyCredit from "./pages/BuyCredit";
import Result from "./pages/Result";

export default function App() {
  return (
    <div className="min-h-screen bg-outerBlue p-6">
  <div className="max-w-5xl mx-auto bg-diag-white-inner backdrop-blur-md rounded-3xl shadow-xl p-10">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path= "/buy" element={<BuyCredit />} />
      <Route path="/pricing" element={<PricingSection />} />
      <Route path="/gallery" element={<div>Gallery Page</div>} />
      <Route path="/studio" element={<div>Studio Page</div>} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/result" element={<Result />} />

      
    </Routes>
    
  </div>
</div>


  );
}

