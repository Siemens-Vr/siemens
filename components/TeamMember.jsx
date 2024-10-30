import React from "react";
import Image from "next/image";
import { ChevronDown, Linkedin, Github } from "lucide-react";

const TeamMember = ({
  id,
  name,
  role,
  imageSrc,
  description,
  extendedBio,
  linkedin,
  github,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="bg-blue-900 rounded-lg shadow-md overflow-hidden flex flex-col items-center p-6 w-[300px]">
      <div className="relative w-40 h-40 mb-4">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-green-600 mb-2">{role}</p>
        <p className="text-white mb-4 text-sm">{description}</p>
        <div className="mt-4">
          <button
            onClick={() => onToggle(id)}
            className="inline-flex items-center text-siemens-green hover:underline"
          >
            {isOpen ? "Read Less" : "Read More"}{" "}
            <ChevronDown
              size={16}
              className={`ml-1 transform transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div className="flex justify-center space-x-4 mt-4">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600"
              >
                <Linkedin size={20} />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-900"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
        {isOpen && <div className="mt-4 text-sm text-white">{extendedBio}</div>}
      </div>
    </div>
  );
};

export default TeamMember;
