"use client";
import Image from "next/image";
import { useState } from "react";
import { Book } from "lucide-react";
import ApplicationForm from "../components/ApplicationForm";

const ProgramCard2 = ({ title, bgColor, courses, imageSrc, exploreLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative ">
      {" "}
      {/* New wrapper div */}
      <div
        className={`${bgColor} h-[600px] text-white rounded-lg overflow-hidden mx-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-48 md:h-56 lg:h-64 transition-all duration-300 ease-in-out">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className={`transition-all duration-300 ease-in-out ${
              isHovered ? "scale-110" : ""
            }`}
          />
          <div
            className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          ></div>
        </div>
        <div className="p-4">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-green-500">
            {title}
          </h3>
          <ul className="list-disc list-inside mb-4 text-white text-sm md:text-base">
            {courses.map((course, index) => (
              <li key={index} className="mb-1">
                {course}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <a
              href={exploreLink}
              className="bg-gray-300 hover:bg-gray-100 rounded-full text-black px-4 py-2 transition-colors duration-300 ease-in-out w-full sm:w-auto"
            >
              Explore
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 text-black px-6 py-2 rounded-full hover:bg-green-500 transition duration-300 inline-flex items-center"
            >
              <Book className="mr-2" /> Enroll Now
            </button>
          </div>
        </div>
      </div>
      {/* Modal positioned relative to the new wrapper */}
      <ApplicationForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default ProgramCard2;
