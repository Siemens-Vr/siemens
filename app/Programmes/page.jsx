import React from "react";
import Header from "../../components/Header";
import ProgramCard2 from "../../components/ProgramCard2";
import Footer from "../../components/Footer";
import TitleImage from "../../components/TitleImage";
import Testimonial from "../../components/Testimonial";
import Login from "../../components/Login";

const Programmes = () => {
  // Renamed to start with a capital letter
  const programs = [
    {
      title: "Siemens Certified Mechatronics Systems Assistant - Level 1",
      bgColor: "bg-blue-900",
      imageSrc: "/Level1.jpg",
      courses: [
        "Course 1: Electrical Components",
        "Course 2: Mechanical Components and Electrical Drives",
        "Course 3: (Electro) Pneumatic and Hydraulic Circuits",
        "Course 4: Digital Fundamentals and PLCs",
      ],
      exploreLink: "/courses/1",
    },
    {
      title: "Siemens Certified Mechatronics Systems Associate - Level 2",
      bgColor: "bg-blue-900",
      imageSrc: "/Level2.jpg",
      courses: [
        "Course 1: Process Control Technologies.",
        "Course 2: Introduction to Totally Integrated Automation.",
        "Course 3: Automation Systems.",
        "Course 4: Motor Control.",
        "Course 5: Mechanics and Machine Elements.",
        "Course 6: Manufacturing Processes.",
      ],
      exploreLink: "/courses/2",
    },
    {
      title: "Siemens Certified Mechatronics Systems Professional - Level 3",
      bgColor: "bg-blue-900",
      imageSrc: "/Level3.jpg",
      courses: [
        "Course 1: Virtual Reality",
        "Course 2: Augmented Reality",
        "Course 3: Mixed Reality",
        "Course 4: Extended Reality",
      ],
      exploreLink: "/courses/3",
    },
  ];
  const targetTimestamp = new Date("2024-12-31").getTime(); // Example date

  return (
    <div>
      <Header targetDate={targetTimestamp} />
      {/* Pass the images as an array of objects */}
      <TitleImage
        images={[
          {
            src: "/SMSCP-Examination-at-DeKUT-Siemens-Centre.png",
            alt: "SMSCP Examination",
          },
          { src: "/Facility6.jpg", alt: "Facility Image" },
        ]}
        title="Our Programmes"
      />
      <div className="bg-white mx-auto px-12">
        <h2 className="text-4xl font-bold text-teal-600 mb-6 mt-6 text-center">
          SMSCP Programmes
        </h2>

        <div className="grid md:grid-cols-3 gap-6 pb-6">
          {programs.map((program, index) => (
            <ProgramCard2
              key={index}
              {...program}
              className={index === 1 ? "border-l border-gray-300" : ""}
            />
          ))}
        </div>
        <h2 className="text-4xl font-bold text-teal-600 mb-6 mt-2 text-center max-w-7xl mx-auto">
          From Our Alumni
        </h2>
        <Testimonial />
        <div className="mt-8">
          <Login />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Programmes;
