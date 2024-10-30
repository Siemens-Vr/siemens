import React from "react";
import Image from "next/image";
import { Calendar, MapPin, Award, Users, Target, Trophy } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TitleImage from "../../components/TitleImage";

const Section = ({ title, content, imageSrc, imageAlt, isReverse, icon }) => {
  const Icon = icon;
  return (
    <div
      className={`flex flex-col ${
        isReverse ? "md:flex-row-reverse" : "md:flex-row"
      } mb-16`}
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
        <h2 className="text-2xl font-bold text-siemens-green mb-4 flex items-center">
          {Icon && <Icon className="mr-2" size={24} />}
          {title}
        </h2>
        {content.map((paragraph, index) => (
          <p key={index} className="text-black mb-4 text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

const WorldSkills = () => {
  const worldSkills1 = [
    {
      title: "WorldSkills Kenya (WSK)",
      content: [
        "On 13th October 2020, WorldSkills Kenya (WSK) was ratified as the 84th state to host skills competitions. This marked a significant milestone in Kenya's participation in global vocational skills development.",
        "Kenya is now preparing to participate in the upcoming competition organized by WorldSkills International (WSI). This presents an exciting opportunity for young Kenyan professionals to showcase their skills on an international stage.",
      ],
      imageSrc: "/WorldSkills1.jpg",
      imageAlt: "WorldSkills Kenya ratification ceremony",
      icon: Trophy,
    },
    {
      title: "Siemens Centre at Dedan Kimathi University",
      content: [
        "The Siemens Mechatronic Systems Certification Program is the international industry standard for comprehensive skills certification in mechatronic systems. This program is offered in collaboration with Siemens SITRAIN Germany, ensuring world-class training standards.",
        "To organize successful Mechatronics skills competitions, World Skills Kenya has selected Prof. Eng. Jean Bosco Byiringiro (Ph.D, Reg. Eng.) to champion mechatronics skills both locally and internationally. Under his guidance, excellent competitors are being prepared at the Siemens Mechatronics Centre.",
      ],
      imageSrc: "/Facility6.jpg",
      imageAlt: "Siemens Mechatronics Centre at Dedan Kimathi University",
      icon: MapPin,
    },
  ];

  const worldSkills2 = [
    {
      title: "Preparing for WorldSkills 2024",
      content: [
        "Dedan Kimathi University of Technology, as one of the key approved TVET institutions, has been selected to organize and host the WSK Mechatronics and Industrie 4.0 through the Siemens Mechatronics Certification Centre.",
        "The main objective of this initiative is to prepare Kenya's Mechatronics and Industrie 4.0 skills competitors for the WorldSkills International competition scheduled in Lyon, France, from 10th to 15th September 2024.",
        "This preparation involves intensive training, mock competitions, and collaboration with industry experts to ensure our competitors are ready to showcase Kenya's talent on the global stage.",
      ],
      imageSrc: "/WorldSkills2.png",
      imageAlt: "Students preparing for WorldSkills 2024",
      icon: Calendar,
    },
    {
      title: "Program Objectives",
      content: [
        "The WorldSkills 2 preparation program at Dedan Kimathi University has several key objectives:",
        "1. Recruit experts and judges for the Mechatronics and Industry 4.0 Skills competitions.",
        "2. Provide comprehensive training for Kenya's Mechatronics and Industrie 4.0 skills competitors.",
        "3. Organize and run national competitions to select the best competitors for WorldSkills 2024.",
        "4. Engage with Kenyan Mechatronics and Industrie 4.0 skills stakeholders to ensure industry relevance.",
        "5. Assist competitors in their preparations for WorldSkills 2024, including technical skills and mental readiness.",
      ],
      imageSrc: "/SMSCP-Examination-at-DeKUT-Siemens-Centre.png",
      imageAlt: "SMSCP Examination at DeKUT Siemens Centre",
      icon: Target,
    },
  ];
  const targetTimestamp = new Date("2024-12-31").getTime(); // Example date

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header targetDate={targetTimestamp} />
      <TitleImage
        images={[
          {
            src: "/SMSCP-Examination-at-DeKUT-Siemens-Centre.png",
            alt: "SMSCP Examination",
          },
          { src: "/Facility6.jpg", alt: "Facility Image" },
        ]}
        title="WorldSkills Competition"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-siemens-green mb-8">
          WorldSkills Competition
        </h1>
        <p className="text-black text-center max-w-3xl mx-auto mb-12 text-lg">
          The WorldSkills International competition is the pinnacle of
          vocational skills competitions for young people across the globe.
          Initiated in Spain in 1950, it now spans 85 countries, showcasing the
          best young talent in various technical and vocational fields.
        </p>

        <h2 className="text-3xl font-bold text-siemens-green mb-8">
          WorldSkills 1
        </h2>
        {worldSkills1.map((section, index) => (
          <Section key={index} {...section} isReverse={index % 2 !== 0} />
        ))}

        <h2 className="text-3xl font-bold text-siemens-green mt-16 mb-8">
          WorldSkills 2
        </h2>
        {worldSkills2.map((section, index) => (
          <Section key={index} {...section} isReverse={index % 2 !== 0} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default WorldSkills;
