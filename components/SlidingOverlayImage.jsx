"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const SlidingOverlayImage = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return <div>No images available</div>; // Fallback content
  }

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] mt-10">
      {/* Adjusted height */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      {/* Overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-12">
        <h1 className="text-2xl md:text-3xl lg:text-7xl font-sans font-bold mb-2 md:mb-4 text-gray-100">
          Siemens Mechatronics <br /> Certification Centre
        </h1>
        <p className="text-sm md:text-base lg:text-xl max-w-2xl text-white font-sans">
          Welcome to the pioneering Siemens Mechatronics Certification Centre in
          Africa. We are located at Dedan Kimathi University of Technology
          (DeKUT), Nyeri-Kenya.
        </p>
        <Link href="/Programmes" passHref>
          <button className="mt-4 md:mt-6 lg:mt-8 px-4 py-2 bg-blue-900 text-white rounded-md text-sm md:text-base hover:bg-blue-600 transition-colors duration-300 font-sans">
            Our Programmes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SlidingOverlayImage;
