"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Camera, Lock, Mail, Phone } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const UserProfile = () => {
  const [name, setName] = useState("Christopher Mwangi");
  const [level, setLevel] = useState(3);
  const [email, setEmail] = useState("chrismugwimi01@gmail.com");
  const [phone, setPhone] = useState("0757961791");
  const [password, setPassword] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleProfilePictureChange = (event) => {
    // Handle profile picture upload
  };

  const handlePasswordChange = () => {
    // Handle password change logic
    setShowPasswordModal(false);
  };

  return (
    <div className="mt-[10px]">
      <Header />
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              <Image
                src="/placeholder.jpg"
                alt="Profile Picture"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleProfilePictureChange}
              >
                <Camera className="w-5 h-5" />
              </button>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-gray-500">Level {level}</p>
            </div>
          </div>
          <button
            type="button"
            className="bg-siemens-green text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => setShowPasswordModal(true)}
          >
            <Lock className="w-5 h-5 mr-2 inline-block" />
            Change Password
          </button>
        </div>

        <div className="bg-white shadow-md rounded-md p-6 mb-8">
          <h3 className="text-lg font-bold mb-4">Account Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-gray-500" />
              <div>
                <h4 className="text-gray-500">Email</h4>
                <p>{email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-gray-500" />
              <div>
                <h4 className="text-gray-500">Phone</h4>
                <p>{phone}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-6 mb-8">
          <h3 className="text-lg font-bold mb-4">Connect Accounts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Connect Google
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Connect Microsoft
            </button>
          </div>
        </div>

        {showPasswordModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75">
            <div className="bg-white rounded-md p-6 shadow-md w-full max-w-md">
              <h3 className="text-lg font-bold mb-4">Change Password</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Lock className="w-6 h-6 text-gray-500" />
                  <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-gray-300 rounded-md px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={() => setShowPasswordModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={handlePasswordChange}
                  >
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
