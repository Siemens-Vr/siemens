"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import SlidingOverlayImage from "../components/SlidingOverlayImage";
import ProgramsSection from "../components/programs-section";
import AccreditationAndDirectorSection from "../components/AccreditationAndDirectorSection";
import Footer from "../components/Footer";
import MissionSection from "../components/MissionSection";
import Stats from "../components/Stats";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Login from "../components/Login";

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
const targetTimestamp = new Date("2024-12-31").getTime(); // Example date
const handleApplyClick = {};

const MainPage = () => {
  const images = [
    {
      src: "/SMSCP-Examination-at-DeKUT-Siemens-Centre.png",
      alt: "Examination at DeKUT Siemens Centre",
    },
    {
      src: "/Facility6.jpg",
      alt: "Facility at DeKUT",
    },
    {
      src: "/Facility7.jpg",
      alt: "Facility at DeKUT",
    },
  ];

  const missions = [
    {
      title: "Our Vision",
      content:
        "To bridge the gap between higher-educational institutions and industries by providing world-class professional training and research.",
      image: "/learning-factory-image.jpg",
    },
    {
      title: "Our Mission",
      content:
        "To empower individuals with skills that enhance employability and foster innovation in technology.",
      image: "/WorldSkills.png",
    },
    {
      title: "Our Motto",
      content: "Innovation, Excellence, and Leadership in Mechatronics.",
      image: "/Level1.jpg",
    },
  ];

  return (
    <div>
      <SlidingOverlayImage images={images} />
      <div className="mx-auto px-12">
        <Header targetDate={targetTimestamp} onApplyClick={handleApplyClick} />

        <AnimatedSection>
          <div>
            <h2 className="text-3xl font-sans font-bold  mt-4">
              <span className="text-red-500">Innovation</span>
              <span className="mx-2 text-black">&bull;</span>
              <span className="text-blue-500">Excellence</span>
              <span className="mx-2 text-black">&bull;</span>
              <span className="text-green-500">Leadership</span>
            </h2>

            <p className="text-xl mt-2 font-sans">
              DeKUT-Siemens is founded on independent scholarship and learning
              freedom while fostering a culture of innovation and collaboration.
              The Centre is committed to equality of opportunity, engendering
              inclusivity, and supporting staff and trainee wellbeing; ensuring
              that the very best trainees and staff benefit society on a local,
              regional, national and global scale. Likewise, DeKUT-Siemens’s
              collegiate structure and interdisciplinary nature of programmes
              provides the Centre with key aspects of its training strength and
              its highly attractive trainee experience.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          {/* New SlidingMissionVisionSection */}
          <MissionSection missions={missions} />

          <AnimatedSection>
            {/* Since 2016 Card */}
            <div className="bg-gray-400 text-black p-6 rounded-lg mx-auto mt-8">
              <h2 className="text-4xl font-bold mb-4 text-blue-900">
                Since 2016,
              </h2>
              <p className="text-xl">
                We have offered Siemens Mechatronic Systems Certification
                Program (SMSCP), an international industry standard,
                comprehensive skills certificate in mechatronic systems, in
                partnership with Siemens SITRAIN Germany.
              </p>
            </div>
          </AnimatedSection>
        </AnimatedSection>
        <AnimatedSection>
          <Stats />
        </AnimatedSection>
        <AnimatedSection>
          <ProgramsSection />
        </AnimatedSection>
        <AnimatedSection>
          <AccreditationAndDirectorSection />
        </AnimatedSection>
        <AnimatedSection>
          <Login />
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default MainPage;
