"use client";
import React from "react";
import { motion } from "framer-motion";

const VisionSection = ({ title, content }) => {
  return (
    <motion.div
      className="absolute inset-0 flex justify-center items-center bg-emerald-500 text-white p-4 rounded-lg h-full w-full z-0" // Ensure it takes the full height and width
      initial={{ x: "100%", opacity: 0 }} // Start off-screen right
      animate={{ x: "0%", opacity: 1 }} // Animate to center
      exit={{ x: "-100%", opacity: 0 }} // Slide off-screen left
      transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
    >
      <div className="text-left w-full">
        <h2 className="text-4xl font-bold mb-4 text-blue-900">{title}</h2>
        <p className="text-justify text-xl">{content}</p>
      </div>
    </motion.div>
  );
};

export default VisionSection;
