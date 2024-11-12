import Image from "next/image";

const ProgramCard = ({ title, description, imageSrc, altText }) => (
  <div className="bg-emerald-500 rounded-lg overflow-hidden h-[400px] flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    {/* Image section with 50% height */}
    <div className="h-1/2 overflow-hidden">
      <Image
        src={imageSrc}
        alt={altText}
        width={600}
        height={300}
        className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-110"
      />
    </div>
    {/* Content section with flexbox to align items to the bottom */}
    <div className="p-4 flex-grow flex flex-col">
      <h3 className="text-3xl font-bold text-white mb-2 mt-[10px] text-center">
        {title}
      </h3>
      <p className="text-black text-xl font-sans">{description}</p>
    </div>
  </div>
);

export default ProgramCard;
