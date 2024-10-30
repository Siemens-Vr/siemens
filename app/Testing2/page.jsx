import CourseDescription from "../components/CourseDescription";
import React from "react";
import Footer from "../components/Footer";

const page = () => {
  const courses = {
    name: "Advanced Web Development",
    description:
      "This comprehensive course covers modern web development techniques, including front-end frameworks, back-end technologies, and cloud deployment strategies.",
    entryRequirements: [
      "Bachelor's degree in Computer Science or related field",
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Familiarity with version control systems (e.g., Git)",
    ],
    modeOfStudy: "Full-time on-campus or part-time online",
    duration: "12 weeks (full-time) or 24 weeks (part-time)",
    intakes: ["January", "May", "September"],
    pricing:
      "$5,000 for the full course, with flexible payment options available",
  };
  return (
    <div>
      page
      <CourseDescription course={courses} />
    </div>
  );
};

export default page;
