import Image from "next/image";

const StatisticsSection = () => {
  return (
    <div className="mx-auto py-12 flex flex-col md:flex-row items-center px-6">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/Student using VR equipment.jpg"
          alt="Woman working on laptop"
          width={600}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 md:pl-12">
        <h2 className="text-xl mb-6 text-black font-sans">
          The quality of our programs and their impact on learners is a direct
          reflection of who we are and our ability to consistently meet the
          objectives we set for our students.
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <StatisticItem
            number="300+"
            label="Enrolled Students"
            color="text-red-600"
          />
          <StatisticItem
            number="1000+"
            label="Graduates"
            color="text-blue-900"
          />
          <StatisticItem
            number="100+"
            label="Employer Partners"
            color="text-siemens-green"
          />
          <StatisticItem
            number="85%"
            label="Employment Rate"
            color="text-navy-800"
          />
        </div>
      </div>
    </div>
  );
};

const StatisticItem = ({ number, label, color }) => (
  <div>
    <p className={`text-4xl font-bold ${color}`}>{number}</p>
    <p className="text-gray-600">{label}</p>
  </div>
);

export default StatisticsSection;
