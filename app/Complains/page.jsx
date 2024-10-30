"use client";
import React from "react";
import { Download } from "lucide-react"; // Keeping the icon import
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ApplicationForm() {
  return (
    <div>
      <Navbar />
      <h2 className="bg-blue-900 text-3xl font-bold text-white mb-6 p-4">
        Complains and Complements
      </h2>
      <div className="max-w-4xl mx-auto p-4 space-y-4">
        {/* Form Image */}
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <img
            src="/Complains and complements.png"
            alt="Complains ans complements"
            className="w-full h-auto"
          />
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-4">
          <button
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            onClick={() => console.log("Download clicked")}
          >
            <Download className="w-5 h-5" />
            <span>Download</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
