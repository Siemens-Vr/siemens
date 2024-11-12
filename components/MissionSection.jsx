import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MissionSection = ({ missions = [] }) => {
  const [currentMission, setCurrentMission] = useState(0);
  const totalMissions = missions.length;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextMission = () => {
    if (totalMissions > 0) {
      setCurrentMission((prev) => (prev + 1) % totalMissions);
    }
  };

  const prevMission = () => {
    if (totalMissions > 0) {
      setCurrentMission((prev) => (prev - 1 + totalMissions) % totalMissions);
    }
  };

  useEffect(() => {
    if (totalMissions > 1) {
      const interval = setInterval(nextMission, 5000);
      return () => clearInterval(interval);
    }
  }, [totalMissions, nextMission]);

  if (totalMissions === 0) {
    return (
      <div className="mx-32 mb-8 mt-8 bg-blue-900 rounded-lg p-8 text-white text-center">
        <p>No mission statements available.</p>
      </div>
    );
  }

  return (
    <div className="mb-8 mt-8">
      <div className="relative bg-blue-900 rounded-lg overflow-hidden transition-all duration-500">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentMission * 100}%)`,
          }}
        >
          {missions.map((mission, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="flex h-[300px]">
                <Image
                  src={mission.image || "/api/placeholder/400/300"}
                  alt={mission.title}
                  width={400}
                  height={300}
                  className="w-1/2 object-cover"
                />
                <div className="w-1/2 p-4 text-white justify-center h-full flex flex-col">
                  <h4 className="text-3xl font-bold mb-2 text-siemens-green">
                    {mission.title}
                  </h4>
                  <p className="text-xl font-sans">{mission.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalMissions > 1 && (
          <>
            <div className="flex justify-center">
              <button
                onClick={prevMission}
                className="absolute left-2 top-[150px] transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="text-blue-900" />
              </button>
              <button
                onClick={nextMission}
                className="absolute right-2 top-[150px] transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="text-blue-900" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {missions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentMission ? "bg-white" : "bg-gray-500"
                  }`}
                ></div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MissionSection;
