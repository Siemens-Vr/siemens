"use client";
import React, { useState, useRef, useEffect } from "react";
import { User, LogOut, ChevronDown, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfileMenu = ({ student }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [unreadNotifications] = useState(3);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
  };

  const navigateToProfile = () => {
    router.push("/Profile");
    setIsOpen(false);
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <div className="flex items-center gap-4">
      <button className="relative p-2 rounded-full hover:bg-gray-100">
        <Bell className="h-5 w-5 text-gray-600" />
        {unreadNotifications > 0 && (
          <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            {unreadNotifications}
          </span>
        )}
      </button>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
            {student.avatarUrl ? (
              <img
                src={student.avatarUrl}
                alt={student.name}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <span>{getInitials(student.name)}</span>
            )}
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-gray-700">{student.name}</p>
            <p className="text-xs text-gray-500">{student.level}</p>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <button
                onClick={navigateToProfile}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center"
              >
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </button>
              <div className="border-t border-gray-100" />
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileMenu;
