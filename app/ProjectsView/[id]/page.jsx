"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projects } from "../../data/projectData";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === id);
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const gridImages = project.images.slice(0, 3);
  const remainingImages = project.images.slice(3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl mb-4">{project.description}</p>

        {/* Grid layout for the first three images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {gridImages.map((image, index) => (
            <div key={index} className="w-full">
              <Image
                src={image}
                alt={`${project.title} image ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Project content */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-xl">
          {typeof project.content === "string" ? (
            <p>{project.content}</p>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-2">
                xArm 7 DoF Robotic Arm
              </h2>
              <p className="mb-4">{project.content.xArm}</p>
              <h2 className="text-2xl font-bold mb-2">
                Virtual Mechatronics Services
              </h2>
              <p>{project.content.virtualMechatronics}</p>
            </>
          )}
        </div>

        {/* Remaining images */}
        {remainingImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {remainingImages.map((image, index) => (
              <div key={index + 3} className="w-full">
                <Image
                  src={image}
                  alt={`${project.title} image ${index + 4}`}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
