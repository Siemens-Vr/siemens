"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";
import ApplicationForm from "../components/ApplicationForm";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Login attempted with:", formData);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="relative">
        <ApplicationForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </div>

      <div className="bg-blue-900 rounded-lg shadow-xl p-8 mb-8">
        <h1 className="text-4xl font-bold text-siemens-green mb-6">
          Sign In to the Learning Website
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Email Field */}
            <div className="space-y-2">
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-siemens-green focus:border-transparent text-siemens-green"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-siemens-green focus:border-transparent text-siemens-green"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-siemens-green hover:bg-siemens-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-siemens-green disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                "Sign in"
              )}
            </button>

            <Link
              href="/forgot-password"
              className="text-base font-medium text-siemens-green hover:text-siemens-green-dark text-xl"
            >
              Forgot your password?
            </Link>
          </div>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-base font-medium text-white hover:text-gray-400 text-xl"
          >
            Don&apos;t have an account? Click here to Apply.
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
