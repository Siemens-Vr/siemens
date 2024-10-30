// components/CourseDescription.jsx
import { Book, Clock, Calendar, DollarSign, Users, Laptop } from "lucide-react";

const CourseDescription = ({ course }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold">{course.name}</h1>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Course Description</h2>
          <p className="text-gray-700">{course.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Users className="mr-2" /> Entry Requirements
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              {course.entryRequirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Laptop className="mr-2" /> Mode of Study
            </h3>
            <p className="text-gray-700">{course.modeOfStudy}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Clock className="mr-2" /> Duration
            </h3>
            <p className="text-gray-700">{course.duration}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Calendar className="mr-2" /> Intakes
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              {course.intakes.map((intake, index) => (
                <li key={index}>{intake}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <DollarSign className="mr-2" /> Pricing
          </h3>
          <p className="text-gray-700">{course.pricing}</p>
        </div>

        <div className="mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center">
            <Book className="mr-2" /> Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
