import Image from "next/image";
import TestimonialCarousel from "./Testimonial";

const AccreditationAndDirectorSection = () => {
  return (
    <div className="mx-auto py-8">
      {/* Accreditation Section */}
      <div className="mb-12 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-500 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <p className="text-xl font-medium max-w-3xl mx-auto">
          This Centre is accredited by the Engineers Board of Kenya (EBK) and
          National Industrial Training Authority (NITA), to offer SMSCP as a
          Continuing Professional Development (CPD) for registered professional
          engineers and also engineering consulting firms.
        </p>
      </div>
      <TestimonialCarousel />

      {/* Director Section */}
      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-emerald-500 mb-6">
          The Director
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-48 h-48 relative">
            <Image
              src="/Prof-Eng-Jean-Bosco-Byiringiro.png"
              alt="Prof. Eng. Jean Bosco Byiringiro"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex-1">
            <blockquote className="text-2xl font-bold text-blue-900 mb-4">
              &ldquo;Unlock your potential, master innovation, and shape the
              future, one skill at a time.&ldquo;
            </blockquote>
            <p className="text-xl font-semibold mb-2">
              Prof. Eng. Jean Bosco Byiringiro (PhD, Reg. Eng.)
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              BIOGRAPHY&gt;&gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccreditationAndDirectorSection;
