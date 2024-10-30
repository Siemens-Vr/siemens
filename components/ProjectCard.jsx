"use client";
import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProjectCard = ({ id, title, description, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  // Image switching logic
  useEffect(() => {
    const imageSwitchInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change images every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(imageSwitchInterval);
  }, [images.length]);

  const handleViewProject = () => {
    router.push(`/ProjectsView/${id}`);
  };

  return (
    <div className="bg-siemens-green rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 h-[400px] w-[400px] flex flex-col mx-auto">
      {/* Switch between images with sliding transition */}
      <div className="relative w-full h-1/3 overflow-hidden">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={title}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ${
              index === currentImageIndex ? "translate-x-0" : "translate-x-full"
            }`}
            width={300}
            height={300}
          />
        ))}
      </div>
      <div className="p-4 flex flex-col justify-center items-center flex-grow text-center">
        <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-black mb-6">{description}</p>
        <button
          onClick={handleViewProject}
          className="bg-blue-900 text-white px-4 py-2 rounded flex items-center mt-auto"
        >
          View project
          <ChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
