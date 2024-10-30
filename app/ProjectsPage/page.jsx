"use client";
import React from "react";
import ProjectCard from "../../components/ProjectCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TitleImage from "../../components/TitleImage";
import { projects } from "../data/projectData";

const ProjectsPage = () => {
  const targetTimestamp = new Date("2024-12-31").getTime(); // Example date
  return (
    <div className="flex flex-col min-h-screen">
      <Header targetDate={targetTimestamp} />
      <TitleImage
        images={[
          {
            src: "/SMSCP-Examination-at-DeKUT-Siemens-Centre.png",
            alt: "SMSCP Examination",
          },
          { src: "/Facility6.jpg", alt: "Facility Image" },
        ]}
        title="Projects"
      />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                images={project.images}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
