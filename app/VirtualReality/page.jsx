"use client";
import React, { useState, useEffect } from "react";
import ProjectsCarousel from "../../components/ProjectsCarousel";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TitleImage from "../../components/TitleImage";

const projects = [
  {
    title: "Analytical Process Control",
    description:
      "This VR digital twin project is based on Amatrol's Analytical Process Control Learning System, which trains learners to control chemical properties of substances, applicable across industries such as pharmaceuticals, food and beverages, and refineries.",
    image: "/Analytical-Process-Control.png",
    fullDescription: `
      **Start Date:** 30th August 2021  
      **End Date:** 15th November 2021  

      It is a VR digital twin project based on Amatrol’s Analytical Process Control Machine. The machine is intended to equip its user with skills on control of chemical properties of a substance which is applicable in various industries including pharmaceuticals, foods and beverages, and refineries. 

      The machine also allows its users to explore a wide range of topics, including analytical process control, pH electrodes, pH meters and transmitters, loop controllers, and more!

      This project endeavors to extend the physical machine by providing users with alternate access to it through virtual reality. The user is provided with the capability of not only interacting with the machine in a virtual space but also connecting to a Programmable Logic Controller (PLC), both physical or simulated. This allows the user to explore Analytical Process Control concepts conveniently even while physically away from the physical machine. 

      In summary, this VR digital twin project enhances the capabilities of Amatrol’s Analytical Process Control Machine, offering users a versatile virtual experience. By bridging physical and virtual spaces, users can delve into key analytical process control concepts and interact with PLCs, whether real or simulated, from any location.
    `,
    additionalImages: [
      "/Analytical-Process-Control2.png",
      "/Analytical-Process-Control3.png",
    ],
  },
  {
    title: "Compressed Air Energy Process Control System",
    description:
      "Compressed Air Energy Process Control System is a Virtual Reality application exploring Energy Sustainability. Its key feature is generating electrical power using a turbine driven by a pneumatic actuator powered by pressurized air.",
    image: "/Compressed Air Energy Process Control System.png",
    fullDescription: `
      **Start Date:** 16th February 2023  
      **End Date:** 30th March 2023  

      Compressed Air Energy Process Control System(CAEPCS) is a Virtual Reality Application that explores the concepts on Energy Sustinability. The project’s main highlight is the generation of electrical power from a turbine driven by a pneumatic actuator i.e. a motor powered by pressurised air. The project was inspired by the works of some students of the Siemens Mechatronics Certification Program at the Center. CAEPCS also aims to provide a solution to cases whre Power Reduncancy is desirable, with the system complementing the main power source should their be a failure or interruption.
      
      The VR application, even though not linked to the physical machine in the typical Digital Twin fashion, mirrors the resemblance as well as functionality of the real physical machine.The application is intended to equip its users with knowldge on power systems, pneumatics, as well as conrol theory, more so on the Proportional-Integral-Derivative(PID) controller. Users of the application get to interact with various elements of the the CAEPCS as well as manipulate variable of the applications inbuilt controllers. In closing, the CAEPCS Virtual Reality Application merges technology and education, offering a hands-on approach to understanding sustainable energy and control systems. It showcases the vast potential of VR in both training and energy innovation.
    `,
    additionalImages: [
      "/Compressed-Air-Energy-Process-Control-System-2.png",
      "/Compressed-Air-Energy-Process-Control-System3.png",
    ],
  },
  {
    title: "VR-ROS",
    description:
      "Robotic systems are now widely used across industries for tasks requiring precision, consistency, or safety. VR-ROS, a cutting-edge VR application, immerses users in the mechanics of articulated robots, equipping them with practical knowledge for robotics-focused workplaces.",
    image: "/VR-ROS.png",
    fullDescription: `
      **Start Date:** 1st August 2023 
      **End Date:** 27th October 2023 

      Robotic systems have rapidly been incorporated into a plethora of industries, from bespoke operations to mass production, primarily due to their ability to automate tasks demanding precision, consistency, or those that pose risks to human operators. VR-ROS, a cutting-edge VR application, seeks to address this by immersing its users in the intricate mechanics and structure of an articulated robot, empowering them with hands-on knowledge to seamlessly integrate into robotics-focused workplaces.
      
      Furthermore, VR-ROS doesn’t merely stop at simulation. It acts as a bridge between virtual interaction and real-world robotic applications by offering interfaces for external data streams and commands via robust, industry-standard IoT communication channels and ROS. This seamless integration not only offers users a comprehensive training tool but also paves the way for pioneering research activities in the expansive realm of robotics.
    `,
    additionalImages: ["/VR-ROS-2.png", "/VR-ROS-3.png"],
  },
  // Add more projects if needed
];

const images = [
  { src: "/VR-Machine-assembling.jpeg", alt: "VR Machine Assembling" },
  { src: "/VR2.jpg", alt: "Person using VR" },
  { src: "/VR3.jpg", alt: "Person using VR" },
  // Add more images if needed
];
const targetTimestamp = new Date("2024-12-31").getTime(); // Example date

const VirtualReality = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      <div>
        <Header targetDate={targetTimestamp} />
      </div>
      <TitleImage
        images={[
          {
            src: "/SMSCP-Examination-at-DeKUT-Siemens-Centre.png",
            alt: "SMSCP Examination",
          },
          { src: "/Facility6.jpg", alt: "Facility Image" },
        ]}
        title="Virtual Reality"
      />

      {/* Projects Carousel */}
      <ProjectsCarousel projects={projects} />

      {/* Additional content */}
      <div className="mx-8 mb-4 bg-gray-300 rounded-lg">
        <h3 className="text-xl font-semibold text-teal-600 mx-4 pt-2">
          Virtual Reality: Knowledge Without Bounds Yet So In-Touch
        </h3>
        <p className="text-black mx-4">
          As the country pushes for manufacturing under the Big 4 Agenda,
          emerging technologies like Virtual Reality (VR) offer immense
          potential for both industrial efficiency and TVET education. VR offers
          a novel concept in the field, a new found widespread use in fields
          like education, entertainment, medicine, and manufacturing. This
          immersive technology, characterized by synthetic environments and
          sensory experiences, holds the key to revolutionizing technical
          training in industrial automation.
        </p>
        <h4 className="text-lg font-semibold text-teal-600 mx-4 pt-2">
          Evolution of Virtual Reality
        </h4>
        <p className="text-black mx-4">
          In the 1960s, VR was a theoretical concept. By the 1990s, it became
          mainstream, largely through entertainment and gaming. Over two
          decades, it evolved to be applicable in various fields including
          education and manufacturing, with features like head tracking, body
          tracking, and stereoscopic views.
        </p>
        <h4 className="text-lg font-semibold text-teal-600 mx-4 pt-2">
          VR in Industrial Automation Training
        </h4>
        <p className="text-black mx-4">
          In technical fields, hands-on training is crucial. However,
          accessibility to physical machines can be limited due to cost and
          availability, especially in developing countries. VR offers a solution
          by creating virtual environments that simulate real-world physics and
          machines. This ensures all students can interact with &quot;virtual
          machines&quot;, avoiding the cost of physical equipment and
          eliminating the issue of spectating.
        </p>
        <h4 className="text-lg font-semibold text-teal-600 mx-4 pt-2">
          Digital Twin and Virtual Reality
        </h4>
        <p className="text-black mx-4">
          VR enhances the use of Digital Twins, digital replicas of physical
          systems running in real-time. DTs, commonly used in industrial
          settings, benefit from VR’s ability to visualize and interact with
          data more intuitively. VR-DT integration provides a seamless way to
          control machines in both virtual and physical environments, improving
          analysis and operations.
        </p>
        <h4 className="text-lg font-semibold text-teal-600 mx-4 pt-2">
          The Virtual Machine Control (VMC) Lab at DeKUT
        </h4>
        <p className="text-black mx-4 pb-2">
          At Dedan Kimathi University of Technology, the Virtual Machine Control
          Lab has been exploring VR and Digital Twin technologies for over three
          years. Their research has led to the development of a Virtual
          Laboratory, aimed at delivering world-class training in Industrial
          Automation. Starting with Digital Twin applications in geothermal
          drilling and elevator security systems, the lab envisions a future
          where students worldwide can access high-quality training in
          mechatronic systems without physical constraints.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default VirtualReality;
