import React from "react";

const generalFaqData = [
  {
    question: "What is mechatronics?",
    answer:
      "Mechatronics combines mechanical, electrical, and computer engineering to create advanced systems.",
  },
  {
    question: "What are the career prospects in mechatronics?",
    answer:
      "Graduates can work in robotics, automation, manufacturing, and many other industries.",
  },
  {
    question: "How long does it take to complete a mechatronics program?",
    answer:
      "Bachelor's programs take 3-4 years; certification programs can be completed in 1-2 years.",
  },
  {
    question: "What skills are important for a career in mechatronics?",
    answer:
      "Key skills include problem-solving, programming, CAD design, and knowledge of electrical systems.",
  },
  {
    question: "Is programming important in mechatronics?",
    answer:
      "Yes, programming is essential for automating systems and controlling robotics efficiently.",
  },
  {
    question: "What industries use mechatronics?",
    answer:
      "Mechatronics is used in automotive, aerospace, medical technology, and manufacturing industries.",
  },
];

const GeneralFAQs = () => {
  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          General FAQs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {generalFaqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
            >
              <div className="px-6 py-5">
                <h3 className="text-xl leading-6 font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <div className="text-lg text-green-600">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralFAQs;
