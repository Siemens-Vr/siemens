"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlertCircle } from "lucide-react";
import ApplicationForm from "./ApplicationForm";

const Header = ({ targetDate: initialTargetDate, onApplyClick }) => {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showBanner, setShowBanner] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Programmes", label: "Programmes" },
    { href: "/Facilities", label: "Facilities" },
    { href: "/VirtualReality", label: "Virtual Reality" },
    { href: "/ProjectsPage", label: "Projects" },
    { href: "/WorldSkills", label: "WorldSkills Competition" },
    { href: "/FAQs", label: "FAQs" },
  ];

  // Calculate time difference
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = initialTargetDate - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTargetDate]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setShowBanner(false);
      } else if (currentScrollY === 0) {
        setShowBanner(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <ApplicationForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <div className="fixed top-0 left-0 right-0 z-40">
        <div
          className={`transition-all duration-300 ease-in-out transform ${
            showBanner ? "translate-y-0" : "-translate-y-14"
          }`}
        >
          {/* Notification Banner */}
          <div className="w-full bg-siemens-green border-b border-gray-200 h-14">
            <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-gray-900 text-xl font-bold">
                  Siemens Mechatronics Systems Certification Programmes
                </span>
                <div className="flex items-center h-8 px-3 py-1 bg-green-50 border border-green-200 text-green-800 rounded-md">
                  <AlertCircle className="h-4 w-4 text-green-800" />
                  <span className="ml-2 text-sm font-medium">
                    Intake Ongoing
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-1.5 bg-blue-600 text-white rounded-md font-medium
                  transition-all duration-200 transform hover:scale-105
                  hover:bg-blue-700 focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:ring-offset-2
                  active:scale-95"
              >
                Apply Now
              </button>

              <div className="flex items-center">
                <div className="flex justify-center items-center scale-75 transform origin-right">
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
          </div>

          {/* Navbar */}
          <nav className="bg-gray-200 text-black p-4 flex flex-col md:flex-row justify-between items-center shadow-md">
            <div className="logo text-2xl font-bold md:mb-0">
              <h1 className="text-siemens-green text-center md:text-left">
                SIEMENS CENTRE
              </h1>
            </div>
            <ul className="flex flex-wrap justify-center md:space-x-4 items-center font-bold">
              {navLinks.map((link, index) => (
                <li key={link.href} className="mx-2 my-1 flex items-center">
                  {index > 0 && (
                    <span className="h-4 w-px bg-gray-500 mx-2 hidden md:inline-block"></span>
                  )}
                  <Link href={link.href}>
                    <span
                      className={`relative px-2 py-1 transition-colors duration-200 ease-in-out
                      ${
                        pathname === link.href
                          ? "text-siemens-green font-bold"
                          : "text-gray-700 hover:text-siemens-green"
                      }
                      ${hoveredLink === link.href ? "text-siemens-green" : ""}`}
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {link.label}
                      <span
                        className={`absolute left-0 bottom-0 w-full h-0.5 bg-siemens-green transform origin-left transition-transform duration-200 ease-in-out
                        ${
                          pathname === link.href || hoveredLink === link.href
                            ? "scale-x-100"
                            : "scale-x-0"
                        }`}
                      ></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out ${
            showBanner ? "h-[112px]" : "h-[60px]"
          }`}
        />
      </div>
    </>
  );
};

const TimeSection = ({ value, label }) => (
  <div className="flex flex-col items-center mx-2">
    <div className="flex">
      {String(value)
        .padStart(2, "0")
        .split("")
        .map((digit, idx) => (
          <FlipDigit key={`${digit}-${idx}`} digit={digit} />
        ))}
    </div>
    <div className="text-black text-sm mt-1">{label}</div>
  </div>
);

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
  }, [digit, currentDigit]);

  return (
    <div className="relative w-8 h-12 mx-0.5">
      <div className="absolute inset-0 bg-blue-700 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 flex items-center justify-center">
          <span className="text-white text-2xl font-mono">{currentDigit}</span>
        </div>

        <div
          className={`absolute inset-0 ${
            flipping ? "animate-flip-down" : ""
          } [transform-style:preserve-3d] [backface-visibility:hidden]`}
        >
          <div className="absolute inset-0 bg-blue-600 flex items-center justify-center">
            <span className="text-white text-2xl font-mono">
              {currentDigit}
            </span>
          </div>

          <div className="absolute inset-0 bg-blue-600 flex items-center justify-center [transform:rotateX(180deg)] [backface-visibility:hidden]">
            <span className="text-white text-2xl font-mono">{digit}</span>
          </div>
        </div>

        <div className="absolute w-full h-px bg-blue-800 top-1/2" />
      </div>
    </div>
  );
};

export default Header;
