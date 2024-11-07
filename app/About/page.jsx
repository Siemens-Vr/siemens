"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  ChevronDown,
  Linkedin,
  Github,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TeamMember from "../../components/TeamMember";
import TitleImage from "../../components/TitleImage";
import Partners from "../../components/Partners";
import Header from "../../components/Header";
import Login from "../../components/Login";
import { useInView } from "react-intersection-observer";

const Section = ({ title, content, imageSrc, imageAlt, isReverse, icon }) => {
  const Icon = icon;
  return (
    <AnimatedSection>
      <div
        className={`flex flex-col ${
          isReverse ? "md:flex-row-reverse" : "md:flex-row"
        } bg-gray-200 items-center`}
      >
        <div className="md:w-1/2 p-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
            {Icon && <Icon className="mr-2" size={24} />}
            {title}
          </h2>
          <p className="text-black text-xl font-sans">{content}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

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
const About = () => {
  const [openMemberId, setOpenMemberId] = useState(null);

  const toggleMember = (id) => {
    setOpenMemberId((prevId) => (prevId === id ? null : id));
  };

  // In your parent component:
  const targetTimestamp = new Date("2024-12-31").getTime(); // Example date
  const handleApplyClick = {};

  const sections = [
    {
      title: "Our Mission",
      content:
        "To empower individuals with skills that enhance employability and foster innovation in technology.",
      imageSrc: "/WorldSkills.png",
      imageAlt: "Team working on a project",
      icon: Target,
    },
    {
      title: "Our Vision",
      content:
        "To bridge the gap between higher-educational institutions and industries by providing world-class professional training and research.",
      imageSrc: "/learning-factory-image.jpg",
      imageAlt: "Futuristic technology concept",
      icon: Users,
      isReverse: true,
    },
    {
      title: "Our Motto",
      content: "Innovation, Excellence, and Leadership in Mechatronics.",
      imageSrc: "/Level1.jpg",
      imageAlt: "Students collaborating",
      icon: Award,
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Prof Jean Bosco Byiringiro",
      role: "Director",
      imageSrc: "/Prof-Eng-Jean-Bosco-Byiringiro.png",
      description:
        "Prof Jean Bosco brings over 20 years of experience in mechatronics and has been instrumental in shaping our program.",
      extendedBio:
        "John holds a PhD in Mechanical Engineering from MIT and has published numerous papers on advanced robotics. He has been with our institution for over a decade, leading major research projects and establishing key industry partnerships.",
      linkedin: "https://www.linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
    {
      id: 2,
      name: "John",
      role: "Administration Assistant",
      imageSrc: "/john.jpg",
      description:
        "John handles student matters including the enrollment of the Siemens Mechatronics Systems and Certification Programs(SMSCP) and other related administrative duties.",
      extendedBio:
        "John is passionate in adding value to people and organizations while not afraid of taking on new challenges and believes in making every opportunity a learning opportunity.",
      linkedin: "https://www.linkedin.com/in/john",
      github: "https://github.com/john",
    },
    {
      id: 3,
      name: "Maxwell Magoi",
      role: "Instructor",
      imageSrc: "/maxwel.jpg",
      description: "Development of a virtual cyber-physical assembly system.",
      extendedBio:
        "By combining immersive virtual reality with advanced simulations of mechatronic systems, we overcome the physical limitations of traditional labs, providing accessible, hands-on learning experiences for students and professionals alike.",
      linkedin: "https://www.linkedin.com/in/john",
      github: "https://github.com/john",
    },
    {
      id: 4,
      name: "Edwin",
      role: "Instructor",
      imageSrc: "/edwin.png",
      description:
        "Developing a digital twin of a machine within a virtual reality environment. ",
      extendedBio:
        "By combining immersive virtual reality with advanced simulations of mechatronic systems, we overcome the physical limitations of traditional labs, providing accessible, hands-on learning experiences for students and professionals alike.",
      linkedin: "https://www.linkedin.com/in/john",
      github: "https://github.com/john",
    },

    // ... other team members ...
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <Header targetDate={targetTimestamp} onApplyClick={handleApplyClick} />
        {/* Rest of your page content */}
      </div>
      <TitleImage
        images={[
          {
            src: "/SMSCP-Examination-at-DeKUT-Siemens-Centre.png",
            alt: "SMSCP Examination",
          },
          { src: "/Facility6.jpg", alt: "Facility Image" },
        ]}
        title="About Us"
      />

      <div className="mx-auto px-4 py-8 px-8">
        <div>
          {sections.map((section, index) => (
            <Section key={index} {...section} />
          ))}
        </div>

        <AnimatedSection>
          <div>
            <h2 className="text-3xl font-bold text-siemens-green mb-8 mt-16">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {teamMembers.map((member) => (
                <TeamMember
                  key={member.id}
                  {...member}
                  isOpen={openMemberId === member.id}
                  onToggle={() => toggleMember(member.id)}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div>
            <h2 className="text-3xl font-bold text-siemens-green mb-8">
              Our Partners
            </h2>
            <div className="mb-16">
              <Partners />
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div>
            <Login />
          </div>
        </AnimatedSection>
      </div>
      <Footer />
    </div>
  );
};

export default About;
