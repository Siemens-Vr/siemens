import FacilitiesGrid from "../../components/FacilitiesGrid";
import Header from "../../components/Header";
import React from "react";
import Footer from "../../components/Footer";
import TitleImage from "../../components/TitleImage";
import Login from "../../components/Login";

const Facilities = () => {
  const targetTimestamp = new Date("2024-12-31").getTime(); // Example date
  return (
    <div className="bg-gray-300">
      <Header targetDate={targetTimestamp} />
      <TitleImage
        images={[
          {
            src: "/SMSCP-Examination-at-DeKUT-Siemens-Centre.png",
            alt: "SMSCP Examination",
          },
          { src: "/Facility6.jpg", alt: "Facility Image" },
        ]}
        title="Facilities"
      />

      <FacilitiesGrid />
      <div className="max-w-7xl mx-auto mt-8">
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default Facilities;
