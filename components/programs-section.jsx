import ProgramCard from "./ProgramCard";

const ProgramsSection = () => {
  return (
    <div className="mx-auto py-1 px-4">
      <h2 className="text-3xl font-bold text-emerald-500 mb-6">
        Programmes Offered
      </h2>
      <div className="h-1 bg-black w-full mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProgramCard
          title="Learning Factory"
          description="Focuses on Siemens Mechatronics Systems Certification Programs (SMSCP)"
          imageSrc="/learning-factory-image.jpg"
          altText={"Students working with mechatronics equipment"}
        />
        <ProgramCard
          title="Virtual Machines Control"
          description="Focuses on Industries 4.0 Technologies (Virtual Reality, Augmented Reality, Mixed Reality and Extended Reality)"
          imageSrc="/Student using VR equipment.jpg"
          altText="Student using VR equipment"
        />
      </div>
    </div>
  );
};

export default ProgramsSection;
