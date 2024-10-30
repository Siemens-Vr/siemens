import { Book, Clock, Calendar, DollarSign, Users, Laptop } from "lucide-react";
import Link from "next/link";

const CourseDescription = ({ course }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="bg-blue-900 text-white p-6">
        <h1 className="text-3xl font-bold">{course.name}</h1>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Course Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900 border-b pb-2">
            Course Description
          </h2>
          <p className="text-gray-700 leading-relaxed bg-gray-100 p-4 rounded-lg shadow-sm">
            {course.description}
          </p>
        </div>

        {/* Grid for Course Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Entry Requirements */}
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center text-blue-600">
              <Users className="mr-2 text-blue-600" /> Entry Requirements
            </h3>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
              {course.entryRequirements.map((req, index) => (
                <li key={index} className="mb-2">
                  <span className="font-medium">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mode of Study */}
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center text-green-600">
              <Laptop className="mr-2 text-green-600" /> Mode of Study
            </h3>
            <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
              {course.modeOfStudy}
            </p>
          </div>

          {/* Duration */}
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center text-yellow-600">
              <Clock className="mr-2 text-yellow-600" /> Duration
            </h3>
            <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
              {course.duration}
            </p>
          </div>

          {/* Intakes */}
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center text-red-600">
              <Calendar className="mr-2 text-red-600" /> Intakes
            </h3>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
              {course.intakes.map((intake, index) => (
                <li key={index} className="mb-2">
                  <span className="font-medium">{intake}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3 flex items-center text-purple-600">
            <DollarSign className="mr-2 text-purple-600" /> Pricing
          </h3>
          <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
            {course.pricing}
          </p>
        </div>

        {/* Enroll Button */}
        <div className="mt-8">
          <Link
            href="/Application"
            className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 inline-flex items-center text-lg"
          >
            <Book className="mr-2 text-white" /> Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
