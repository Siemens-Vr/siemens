"use client";
import Image from "next/image";
import { useState } from "react";

const FacilitiesGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const facilities = [
    { src: "/Facility1.jpg", alt: "Facility 1" },
    { src: "/Facility2.jpg", alt: "Facility 2" },
    { src: "/Facility3.jpg", alt: "Facility 3" },
    { src: "/Facility4.jpg", alt: "Facility 4" },
    { src: "/Facility5.jpg", alt: "Facility 5" },
    { src: "/Facility6.jpg", alt: "Facility 6" },
    { src: "/Facility7.jpg", alt: "Facility 7" },
    { src: "/Facility8.jpg", alt: "Facility 8" },
    { src: "/Facility9.jpg", alt: "Facility 9" },
    { src: "/Facility10.jpg", alt: "Facility 10" },
    { src: "/Facility11.jpg", alt: "Facility 11" },
    { src: "/Facility12.jpg", alt: "Facility 12" },
  ];

  const openModal = (src) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="bg-gray-900 p-6 mt-4">
      <div className="grid grid-cols-3 gap-4">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="relative h-[150px] w-full rounded-lg overflow-hidden group"
            onClick={() => openModal(facility.src)} // Open modal on click
          >
            <Image
              src={facility.src}
              alt={facility.alt}
              layout="fill"
              objectFit="cover"
              className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal for displaying the clicked image */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative max-w-3xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 rounded-full p-2"
            >
              X
            </button>
            <Image
              src={selectedImage}
              alt="Selected Facility"
              layout="responsive"
              width={800} // Set the width and height for the modal image
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FacilitiesGrid;
