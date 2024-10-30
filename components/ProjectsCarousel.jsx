import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const ProjectsCarousel = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const totalProjects = projects.length;

  const nextProject = () => {
    if (!isExpanded) {
      setCurrentProject((prev) => (prev + 1) % totalProjects);
    }
  };

  const prevProject = () => {
    if (!isExpanded) {
      setCurrentProject((prev) => (prev - 1 + totalProjects) % totalProjects);
    }
  };

  useEffect(() => {
    let interval;
    if (!isExpanded) {
      interval = setInterval(nextProject, 4000);
    }
    return () => clearInterval(interval);
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mx-32 mb-8 mt-8">
      <div className="relative bg-blue-900 rounded-lg overflow-hidden transition-all duration-500">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentProject * 100}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="flex h-[300px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-1/2 object-cover"
                />
                <div className="w-1/2 p-4 text-black justify-center h-full flex flex-col">
                  <h4 className="text-2xl font-semibold mb-2 text-siemens-green">
                    {project.title}
                  </h4>
                  <p className="text-sm text-white">{project.description}</p>
                  <div className="flex justify-center mt-4">
                    <button
                      className="bg-siemens-green text-black px-4 py-2 rounded inline-flex items-center gap-2 text-sm hover:bg-green-600 transition-colors"
                      onClick={toggleExpand}
                    >
                      {isExpanded ? (
                        <>
                          Show Less <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Show More <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div
                className={`transition-all duration-500 ${
                  isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-6 bg-white bg-opacity-90">
                  <div className="flex flex-row-reverse gap-6">
                    <div className="w-1/2 space-y-4">
                      <h5 className="text-lg font-semibold text-gray-900">
                        Additional Images
                      </h5>
                      <div className="flex flex-col gap-4">
                        {project.additionalImages?.map((img, imgIndex) => (
                          <Image
                            key={imgIndex}
                            src={img || "/api/placeholder/400/300"}
                            alt={`${project.title} additional image ${
                              imgIndex + 1
                            }`}
                            width={400}
                            height={300}
                            className="rounded-lg object-cover w-full"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="w-1/2 space-y-4 max-h-[600px] overflow-y-auto pr-6">
                      <h5 className="text-lg font-semibold text-gray-900">
                        Project Details
                      </h5>
                      <div className="whitespace-pre-wrap text-gray-700">
                        {project.fullDescription}
                      </div>
                      {project.features && (
                        <div>
                          <h6 className="font-semibold text-gray-900 mb-2">
                            Key Features:
                          </h6>
                          <ul className="list-disc pl-5 text-gray-700">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isExpanded && (
          <div className="flex justify-center">
            <button
              onClick={prevProject}
              className="absolute left-2 top-[150px] transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="text-navy-blue" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-2 top-[150px] transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="text-navy-blue" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsCarousel;
