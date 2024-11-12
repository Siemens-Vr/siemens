"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Prof Jean Bosco Byiringiro",
    role: "Mechatronics Engineer",
    image: "/Prof-Eng-Jean-Bosco-Byiringiro.png",
    comment:
      "The Siemens Mechatronics Certification Centre at DeKUT transformed my career. The hands-on training and industry-relevant curriculum prepared me to tackle real-world challenges in automation and control systems. After completing Level 2 certification, I secured a position as a Mechatronics Engineer at a leading manufacturing company, and I couldn't be more grateful for the skills and confidence I gained here.",
  },
  {
    name: "Kimani Nyutu",
    role: "Senior Automation Engineer",
    image: "/Student using VR equipment.jpg",
    comment:
      "The Siemens Certification Centre equipped me with both the theoretical knowledge and practical expertise I needed to thrive in the tech industry. I was particularly impressed with the state-of-the-art equipment and the dedication of the instructors. I’ve since transitioned into a senior automation role, and the skills I developed during my certification have been instrumental in my career growth.",
  },
  {
    name: "Josphat Kamali",
    role: "Automation Specialist",
    image: "/VR2.jpg",
    comment:
      "Attending the Siemens Mechatronics Certification Centre was a game-changer for me. The program’s focus on modern technologies and systems made me highly competitive in the job market. I now work as a Systems Technician, and I can confidently say that the training I received here gave me the edge I needed to excel in the mechatronics field.",
  },
];

export default function TestimonialCarousel() {
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isAnimating, setIsAnimating] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex >= testimonials.length * 2) {
      setCurrentIndex(testimonials.length);
    } else if (currentIndex < testimonials.length) {
      setCurrentIndex(testimonials.length * 2 - 1);
    }
  };

  return (
    <div className="relative w-full mx-auto mb-6 overflow-hidden px-2">
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-4 z-30 p-2 rounded-full bg-gray-800/50 hover:bg-gray-800"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <div className="relative w-full flex justify-center items-center h-full">
          <div
            className="w-[1000px] h-[300px] z-20 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${-currentIndex * 100}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            <div
              className="flex"
              style={{ width: `${extendedTestimonials.length * 100}%` }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  style={{ width: `${100 / extendedTestimonials.length}%` }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-6 z-30 p-2 rounded-full bg-gray-800/50 hover:bg-gray-800"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="h-[300px] bg-gray-400 rounded-lg p-6 mx-4 text-black">
      <div className="flex h-full flex-row items-center">
        <div className="flex-1 pr-6">
          <p className="text-base mb-3 line-clamp-4 text-xl">
            {testimonial.comment}
          </p>
          <div>
            <h3 className="font-semibold text-blue-900">{testimonial.name}</h3>
            <p className="text-sm text-gray-900">{testimonial.role}</p>
          </div>
        </div>
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={32}
          height={32}
          className="w-32 h-32 rounded-full flex-shrink-0"
        />
      </div>
    </div>
  );
}
