"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const TitleImage = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return <div>No images available</div>; // Fallback content
  }

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
      {/* Adjusted height */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
           
            style={{ objectFit: 'cover' }}
            className={`transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`} fill />
        ))}
      </div>
      {/* Overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-4">
        <h1 className="text-2xl md:text-3xl lg:text-7xl font-bold mb-2 md:mb-4 text-gray-100">
          {title} {/* Dynamic title */}
        </h1>
      </div>
    </div>
  );
};

export default TitleImage;
