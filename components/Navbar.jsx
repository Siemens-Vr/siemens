"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" }, // Added About link
    { href: "/Programmes", label: "Programmes" },
    { href: "/Facilities", label: "Facilities" },
    { href: "/VirtualReality", label: "Virtual Reality" },
    { href: "/ProjectsPage", label: "Projects" },
    { href: "/WorldSkills", label: "WorldSkills Competition" },
    { href: "/FAQs", label: "FAQs" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-gray-200 text-black p-4 flex flex-col md:flex-row justify-between items-center z-50 shadow-md ">
        <div className="logo text-2xl font-bold d:mb-0">
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
      {/* Spacer div to prevent content from being hidden behind navbar */}
      <div className="h-[120px] md:h-[60px]"></div>
    </>
  );
}
