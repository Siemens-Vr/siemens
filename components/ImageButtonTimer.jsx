import React, { useState, useEffect } from "react";

const FlipDigit = ({ digit }) => {
  const [currentDigit, setCurrentDigit] = useState(digit);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (currentDigit !== digit) {
      setFlipping(true);
      const timer = setTimeout(() => {
        setCurrentDigit(digit);
        setFlipping(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [digit]);

  return (
    <div className="relative w-8 h-12 mx-0.5">
      <div className="absolute inset-0 bg-blue-700 flex items-center justify-center overflow-hidden">
        {/* Current digit (static) */}
        <div className="absolute inset-0 bg-blue-600 flex items-center justify-center">
          <span className="text-white text-2xl font-mono">{currentDigit}</span>
        </div>

        {/* Flipping panel */}
        <div
          className={`absolute inset-0 ${
            flipping ? "animate-flip-down" : ""
          } [transform-style:preserve-3d] [backface-visibility:hidden]`}
        >
          {/* Front face (current number) */}
          <div className="absolute inset-0 bg-blue-600 flex items-center justify-center">
            <span className="text-white text-2xl font-mono">
              {currentDigit}
            </span>
          </div>

          {/* Back face (new number) */}
          <div className="absolute inset-0 bg-blue-600 flex items-center justify-center [transform:rotateX(180deg)] [backface-visibility:hidden]">
            <span className="text-white text-2xl font-mono">{digit}</span>
          </div>
        </div>

        {/* Divider line */}
        <div className="absolute w-full h-px bg-blue-800 top-1/2" />
      </div>
    </div>
  );
};

const TimeSection = ({ value, label }) => (
  <div className="flex flex-col items-center mx-2">
    <div className="flex">
      {String(value)
        .padStart(2, "0")
        .split("")
        .map((digit, idx) => (
          <FlipDigit key={idx} digit={digit} />
        ))}
    </div>
    <div className="text-white text-sm mt-1">{label}</div>
  </div>
);

const ImageButtonTimer = ({
  targetDate,
  imageUrl,
  onClick,
  title = "SMCPC Intake closes In",
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative inline-block">
      <button
        onClick={onClick}
        className="relative overflow-hidden rounded-lg shadow-lg transition-opacity"
      >
        <img
          src={imageUrl}
          alt="Button background"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-4 right-4 rounded-lg overflow-hidden">
          <div className="bg-blue-600 bg-opacity-90 px-4 py-2 text-center">
            <div className="text-white mb-2">{title}</div>
            <div className="flex justify-center items-center">
              <TimeSection value={timeLeft.days} label="Days" />
              <div className="text-white text-2xl mx-1">:</div>
              <TimeSection value={timeLeft.hours} label="Hours" />
              <div className="text-white text-2xl mx-1">:</div>
              <TimeSection value={timeLeft.minutes} label="Minutes" />
              <div className="text-white text-2xl mx-1">:</div>
              <TimeSection value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ImageButtonTimer;
