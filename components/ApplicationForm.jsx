"use client";
import React, { useState } from "react";
import { Camera } from "lucide-react";
import { Modal } from "./Modal";

const ApplicationForm = ({ isOpen, setIsOpen }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [formData, setFormData] = useState({
    personalInfo: {
      nationality: "",
      idType: "",
      fullName: "",
      gender: "",
      phoneNumber: "",
      alternativePhone: "",
      email: "",
      postalAddress: "",
      postalTown: "",
      countyOfBirth: "",
      countyOfResidence: "",
      preferredIntake: "",
      modeOfStudy: "",
      nationalID: null,
      passportPhoto: null,
    },
    paymentDetails: {
      invoiceCode: "",
      mpesaCode: "",
    },
    kcseGrades: {
      kcseCertificate: null,
      meanGrade: "",
      subjects: [
        { name: "English", grade: "" },
        { name: "Kiswahili", grade: "" },
        { name: "Mathematics", grade: "" },
      ],
    },
    academicQualifications: {},
    additionalDocuments: {},
  });

  const handleInputChange = (section, field, value) => {
    if (field === "email") {
      validateEmail(value);
    }
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please upload an image file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
      handleInputChange("passportPhoto", file);
    }
  };
  const counties = [
    "Mombasa",
    "Kwale",
    "Kilifi",
    "Tana River",
    "Lamu",
    "Taita-Taveta",
    "Garissa",
    "Wajir",
    "Mandera",
    "Marsabit",
    "Isiolo",
    "Meru",
    "Tharaka Nithi",
    "Embu",
    "Kitui",
    "Machakos",
    "Makueni",
    "Nyandarua",
    "Nyeri",
    "Kirinyaga",
    "Murang'a",
    "Kiambu",
    "Turkana",
    "West Pokot",
    "Samburu",
    "Trans Nzoia",
    "Uasin Gishu",
    "Elgeyo-Marakwet",
    "Nandi",
    "Baringo",
    "Laikipia",
    "Nakuru",
    "Narok",
    "Kajiado",
    "Kericho",
    "Bomet",
    "Kakamega",
    "Vihiga",
    "Bungoma",
    "Busia",
    "Siaya",
    "Kisumu",
    "Homa Bay",
    "Migori",
    "Kisii",
    "Nyamira",
    "Nairobi",
  ];

  const intakes = ["Jan 2025", "May 2025", "Sep 2025"];

  const steps = [
    { id: "personal", title: "Personal Information" },
    { id: "payment", title: "Payment Details" },
    { id: "kcse", title: "KCSE Grades" },
    { id: "academic", title: "Additional Academic Qualifications" },
    { id: "documents", title: "Additional Documents" },
    { id: "complete", title: "Complete" },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleStepClick = (index) => {
    setCurrentStep(index);
  };
  const RequiredLabel = ({ children }) => (
    <label className="block text-sm font-medium text-gray-700">
      {children} <span className="text-red-500">*</span>
    </label>
  );
  const [emailError, setEmailError] = useState("");
  // Add this validation function
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      setEmailError("Email is required");
      return false;
    }

    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }

    setEmailError("");
    return true;
  };
  // ... (keep all existing functions until renderStepContent)

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Personal Information</h3>

            {/* Passport Photo Upload */}
            <div className="space-y-2">
              <RequiredLabel>Passport Photo</RequiredLabel>

              <div className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center overflow-hidden bg-gray-50">
                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="Passport preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-4">
                        <Camera className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-1 text-xs text-gray-500">
                          Upload passport photo
                        </p>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="hidden"
                    id="passport-photo"
                  />
                  <label
                    htmlFor="passport-photo"
                    className="mt-2 cursor-pointer rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    {photoPreview ? "Change Photo" : "Select Photo"}
                  </label>
                </div>
                <div className="text-sm text-gray-500">
                  <p>Photo requirements:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Recent passport-sized photo</li>
                    <li>Plain white background</li>
                    <li>Maximum file size: 5MB</li>
                    <li>Formats: JPG, PNG</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nationality */}
            <div className="space-y-2">
              <RequiredLabel>Nationality</RequiredLabel>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="nationality"
                    value="kenyan"
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "nationality",
                        e.target.value
                      )
                    }
                    checked={formData.personalInfo.nationality === "kenyan"}
                    className="form-radio"
                  />
                  <span className="ml-2">Kenyan</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="nationality"
                    value="not-kenyan"
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "nationality",
                        e.target.value
                      )
                    }
                    checked={formData.personalInfo.nationality === "not-kenyan"}
                    className="form-radio"
                  />
                  <span className="ml-2">Not Kenyan</span>
                </label>
              </div>
            </div>

            {/* Identification Document */}
            <div className="space-y-2">
              <RequiredLabel>Identification Document</RequiredLabel>
              <p className="text-sm text-gray-500 italic">
                Only select Birth Certificate if you DO NOT YET have a National
                ID
              </p>
              <select
                value={formData.personalInfo.idType}
                onChange={(e) =>
                  handleInputChange("personalInfo", "idType", e.target.value)
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
              >
                <option value="">Select ID Type</option>
                <option value="national-id">National ID</option>
                <option value="birth-certificate">Birth Certificate</option>
                <option value="passport">National Passport</option>
              </select>
            </div>

            {/* Full Name */}
            <div>
              <RequiredLabel>Full Name</RequiredLabel>
              <input
                type="text"
                value={formData.personalInfo.fullName}
                onChange={(e) =>
                  handleInputChange("personalInfo", "fullName", e.target.value)
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <RequiredLabel>Gender</RequiredLabel>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "gender",
                        e.target.value
                      )
                    }
                    checked={formData.personalInfo.gender === "male"}
                    className="form-radio"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) =>
                      handleInputChange(
                        "personalInfo",
                        "gender",
                        e.target.value
                      )
                    }
                    checked={formData.personalInfo.gender === "female"}
                    className="form-radio"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <RequiredLabel>Phone Number</RequiredLabel>
                <input
                  type="number"
                  value={formData.personalInfo.phoneNumber}
                  onChange={(e) =>
                    handleInputChange(
                      "personalInfo",
                      "phoneNumber",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Alternative Phone No.
                </label>
                <input
                  type="number"
                  value={formData.personalInfo.alternativePhone}
                  onChange={(e) =>
                    handleInputChange(
                      "personalInfo",
                      "alternativePhone",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                  placeholder="Enter alternative phone number"
                />
              </div>
            </div>

            {/* Email and Postal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <RequiredLabel>Email Address</RequiredLabel>
                <input
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={(e) =>
                    handleInputChange("personalInfo", "email", e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                  placeholder="Enter your email"
                />
                {emailError && (
                  <p className="text-sm text-red-500">{emailError}</p>
                )}
              </div>
              <div>
                <RequiredLabel>Postal Address Number</RequiredLabel>
                <input
                  type="number"
                  value={formData.personalInfo.postalAddress}
                  onChange={(e) =>
                    handleInputChange(
                      "personalInfo",
                      "postalAddress",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                  placeholder="Enter postal address"
                />
              </div>
            </div>

            {/* Location Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <RequiredLabel>Postal Town</RequiredLabel>
                <input
                  type="text"
                  value={formData.personalInfo.postalTown}
                  onChange={(e) =>
                    handleInputChange(
                      "personalInfo",
                      "postalTown",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                  placeholder="Enter postal town"
                />
              </div>
              <div>
                <RequiredLabel>County of Birth</RequiredLabel>
                <select
                  value={formData.personalInfo.countyOfBirth}
                  onChange={(e) =>
                    handleInputChange(
                      "personalInfo",
                      "countyOfBirth",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select County</option>
                  {counties.map((county) => (
                    <option key={county} value={county.toLowerCase()}>
                      {county}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* County of Residence */}
            <div>
              <RequiredLabel>County of Residence</RequiredLabel>
              <select
                value={formData.personalInfo.countyOfResidence}
                onChange={(e) =>
                  handleInputChange(
                    "personalInfo",
                    "countyOfResidence",
                    e.target.value
                  )
                }
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select County</option>
                {counties.map((county) => (
                  <option key={county} value={county.toLowerCase()}>
                    {county}
                  </option>
                ))}
              </select>
            </div>

            {/* Study Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <RequiredLabel>Preferred Intake</RequiredLabel>
                <select
                  value={formData.personalInfo.preferredIntake}
                  onChange={(e) =>
                    handleInputChange(
                      "personalInfo",
                      "preferredIntake",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                >
                  <option value="">Select Intake</option>
                  {intakes.map((intake) => (
                    <option key={intake} value={intake.toLowerCase()}>
                      {intake}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <RequiredLabel>Mode of Study</RequiredLabel>
                <select
                  value={formData.personalInfo.modeOfStudy}
                  onChange={(e) =>
                    handleInputChange(
                      "personalInfo",
                      "modeOfStudy",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                >
                  <option value="">Select Mode</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                </select>
              </div>
              {/* Preferred Campus */}
              <div>
                <RequiredLabel>Preferred Campus</RequiredLabel>
                <select
                  value={formData.personalInfo.preferredCampus || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "kcseGrades",
                      "preferredCampus",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                >
                  <option value="">Select Campus</option>
                  <option value="main">Main Campus</option>
                  <option value="nairobi">Nairobi Campus</option>
                </select>
              </div>
            </div>
            <div>
              <RequiredLabel>
                National ID/Birth Certificate/National Passport
              </RequiredLabel>
              <div className="bg-blue-50 p-4 rounded-md mb-6 mt-4">
                <p className="text-sm text-siemens-green font-medium ">
                  Only PDF FORMAT is allowed.
                </p>
              </div>
              <div className="mt-2">
                <div className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-md bg-white">
                  <div className="flex items-center">
                    <input
                      type="file"
                      accept=".pdf"
                      id="id-document"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          if (file.type !== "application/pdf") {
                            alert("Please upload a PDF file");
                            e.target.value = "";
                            return;
                          }
                          if (file.size > 5 * 1024 * 1024) {
                            // 5MB limit
                            alert("File size should be less than 5MB");
                            e.target.value = "";
                            return;
                          }
                          handleInputChange("personalInfo", "idDocument", file);
                        }
                      }}
                    />
                    <label
                      htmlFor="id-document"
                      className="cursor-pointer flex items-center"
                    >
                      <div className="mr-4">
                        <svg
                          className="h-6 w-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-siemens-green">
                          Choose file
                        </span>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, max 5MB
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="text-sm text-gray-500">
                    {formData.personalInfo?.idDocument ? (
                      <div className="flex items-center">
                        <span className="truncate max-w-xs">
                          {formData.personalInfo.idDocument.name}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleInputChange(
                              "additionalInfo",
                              "idDocument",
                              null
                            )
                          }
                          className="ml-2 text-red-600 hover:text-red-800"
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      "No file chosen"
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Payment Details</h3>

            {/* Payment Instructions */}
            <div className="bg-blue-50 p-4 rounded-md">
              <div className="mb-4">
                <a
                  href="https://www.ecitizen.go.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-siemens-green hover:siemens-green-dark font-medium"
                >
                  Pay application fee via E-Citizen →
                </a>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>This course belongs to the Certificate Category.</p>
                <p>Pay KSh 1000/= and input the invoice code generated.</p>
              </div>
            </div>

            {/* Payment Form Fields */}
            <div className="space-y-4">
              <div>
                <RequiredLabel>Invoice Code Generated</RequiredLabel>
                <input
                  type="text"
                  value={formData.paymentDetails.invoiceCode}
                  onChange={(e) =>
                    handleInputChange(
                      "paymentDetails",
                      "invoiceCode",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                  placeholder="Enter the invoice code"
                />
              </div>

              <div>
                <RequiredLabel>Mpesa Code Generated</RequiredLabel>
                <input
                  type="text"
                  value={formData.paymentDetails.mpesaCode}
                  onChange={(e) =>
                    handleInputChange(
                      "paymentDetails",
                      "mpesaCode",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                  placeholder="Enter the Mpesa code"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">KCSE Grades</h3>
            <p className="text-sm text-gray-600">
              Provide the KCSE MEAN GRADE and Grades of ALL THE SUBJECTS you
              did.
            </p>

            {/* Basic KCSE Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <RequiredLabel>KCSE Index Number</RequiredLabel>
                <input
                  type="number"
                  value={formData.kcseGrades.indexNumber || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "kcseGrades",
                      "indexNumber",
                      e.target.value
                    )
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                  placeholder="Enter KCSE Index Number"
                />
              </div>
              <div>
                <RequiredLabel>KCSE Year</RequiredLabel>
                <input
                  type="number"
                  value={formData.kcseGrades.year || ""}
                  onChange={(e) =>
                    handleInputChange("kcseGrades", "year", e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                  placeholder="Enter KCSE Year"
                  min="1990"
                  max={new Date().getFullYear()}
                />
              </div>
            </div>
            {/* KCSE Certificate Upload */}
            <div>
              <RequiredLabel>KCSE Certificate</RequiredLabel>
              <div className="bg-blue-50 p-4 rounded-md mb-6 mt-4">
                <p className="text-sm text-siemens-green font-medium ">
                  Only PDF FORMAT is allowed.
                </p>
              </div>
              <div className="mt-2">
                <div className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-md bg-white">
                  <div className="flex items-center">
                    <input
                      type="file"
                      accept=".pdf"
                      id="kcse-certificate"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          if (file.type !== "application/pdf") {
                            alert("Please upload a PDF file");
                            e.target.value = "";
                            return;
                          }
                          if (file.size > 5 * 1024 * 1024) {
                            // 5MB limit
                            alert("File size should be less than 5MB");
                            e.target.value = "";
                            return;
                          }
                          handleInputChange(
                            "kcseGrades",
                            "kcseCertificate",
                            file
                          );
                        }
                      }}
                    />
                    <label
                      htmlFor="kcse-certificate"
                      className="cursor-pointer flex items-center"
                    >
                      <div className="mr-4">
                        <svg
                          className="h-6 w-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-siemens-green">
                          Choose file
                        </span>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, max 5MB
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="text-sm text-gray-500">
                    {formData.kcseGrades?.kcseCertificate ? (
                      <div className="flex items-center">
                        <span className="truncate max-w-xs">
                          {formData.kcseGrades.kcseCertificate.name}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleInputChange(
                              "kcseGrades",
                              "kcseCertificate",
                              null
                            )
                          }
                          className="ml-2 text-red-600 hover:text-red-800"
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      "No file chosen"
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Mean Grade */}
            <div>
              <RequiredLabel>KCSE Mean Grade</RequiredLabel>
              <select
                value={formData.kcseGrades.meanGrade || ""}
                onChange={(e) =>
                  handleInputChange("kcseGrades", "meanGrade", e.target.value)
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
              >
                <option value="">Select Mean Grade</option>
                {[
                  "A",
                  "A-",
                  "B+",
                  "B",
                  "B-",
                  "C+",
                  "C",
                  "C-",
                  "D+",
                  "D",
                  "D-",
                  "E",
                ].map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Grades */}
            <div className="space-y-4">
              <RequiredLabel>Subject Grades</RequiredLabel>

              {/* Additional Subjects */}
              {formData.kcseGrades.subjects?.map((subject, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-4 items-center"
                >
                  <input
                    type="text"
                    value={subject.name || ""}
                    onChange={(e) => {
                      const newSubjects = [
                        ...(formData.kcseGrades.subjects || []),
                      ];
                      newSubjects[index] = {
                        ...newSubjects[index],
                        name: e.target.value,
                      };
                      handleInputChange("kcseGrades", "subjects", newSubjects);
                    }}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                    placeholder="Enter subject name"
                  />
                  <div className="flex gap-2">
                    <select
                      value={subject.grade || ""}
                      onChange={(e) => {
                        const newSubjects = [
                          ...(formData.kcseGrades.subjects || []),
                        ];
                        newSubjects[index] = {
                          ...newSubjects[index],
                          grade: e.target.value,
                        };
                        handleInputChange(
                          "kcseGrades",
                          "subjects",
                          newSubjects
                        );
                      }}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                    >
                      <option value="">Select Grade</option>
                      {[
                        "A",
                        "A-",
                        "B+",
                        "B",
                        "B-",
                        "C+",
                        "C",
                        "C-",
                        "D+",
                        "D",
                        "D-",
                        "E",
                      ].map((grade) => (
                        <option key={grade} value={grade}>
                          {grade}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => {
                        const newSubjects = formData.kcseGrades.subjects.filter(
                          (_, i) => i !== index
                        );
                        handleInputChange(
                          "kcseGrades",
                          "subjects",
                          newSubjects
                        );
                      }}
                      className="mt-1 px-3 py-2 text-red-600 hover:text-red-800"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}

              {/* Add Subject Button */}
              <button
                type="button"
                onClick={() => {
                  const newSubjects = [
                    ...(formData.kcseGrades.subjects || []),
                    { name: "", grade: "" },
                  ];
                  handleInputChange("kcseGrades", "subjects", newSubjects);
                }}
                className="mt-2 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-siemens-green"
              >
                Add Subject
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">
              Additional Academic Qualifications
            </h3>
            <p className="text-sm text-gray-600">
              Provide details of relevant Academic qualifications e.g Diploma,
              Certificates, Other relevant academic certification
            </p>

            {/* Qualifications List */}
            <div className="space-y-4">
              {formData.academicQualifications.qualifications?.map(
                (qual, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start bg-gray-50 p-4 rounded-md"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Qualification Name
                      </label>
                      <input
                        type="text"
                        value={qual.name || ""}
                        onChange={(e) => {
                          const newQualifications = [
                            ...(formData.academicQualifications
                              .qualifications || []),
                          ];
                          newQualifications[index] = {
                            ...newQualifications[index],
                            name: e.target.value,
                          };
                          handleInputChange(
                            "academicQualifications",
                            "qualifications",
                            newQualifications
                          );
                        }}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                        placeholder="e.g. Diploma in Information Technology"
                      />
                    </div>
                    <div className="flex gap-2 items-start">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">
                          Award Attained
                        </label>
                        <input
                          type="text"
                          value={qual.award || ""}
                          onChange={(e) => {
                            const newQualifications = [
                              ...(formData.academicQualifications
                                .qualifications || []),
                            ];
                            newQualifications[index] = {
                              ...newQualifications[index],
                              award: e.target.value,
                            };
                            handleInputChange(
                              "academicQualifications",
                              "qualifications",
                              newQualifications
                            );
                          }}
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                          placeholder="e.g. Credit"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const newQualifications =
                            formData.academicQualifications.qualifications.filter(
                              (_, i) => i !== index
                            );
                          handleInputChange(
                            "academicQualifications",
                            "qualifications",
                            newQualifications
                          );
                        }}
                        className="mt-8 p-2 text-red-600 hover:text-red-800 rounded-md hover:bg-red-50"
                        title="Remove qualification"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                )
              )}

              {/* Add Qualification Button */}
              <button
                type="button"
                onClick={() => {
                  const newQualifications = [
                    ...(formData.academicQualifications.qualifications || []),
                    { name: "", award: "" },
                  ];
                  handleInputChange(
                    "academicQualifications",
                    "qualifications",
                    newQualifications
                  );
                }}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-siemens-green"
              >
                Add Qualification
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">
              Additional Documents (Optional)
            </h3>

            <div className="bg-blue-50 p-4 rounded-md mb-6">
              <p className="text-sm text-siemens-green font-medium">
                Only PDF FORMAT is allowed.
              </p>
            </div>

            {/* Additional Documents List */}
            <div className="space-y-4">
              {formData.additionalDocuments.documents?.map((doc, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-md bg-gray-50"
                >
                  <div className="space-y-4">
                    {/* Document Name Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Document Name
                      </label>
                      <input
                        type="text"
                        value={doc.name || ""}
                        onChange={(e) => {
                          const newDocs = [
                            ...(formData.additionalDocuments.documents || []),
                          ];
                          newDocs[index] = {
                            ...newDocs[index],
                            name: e.target.value,
                          };
                          handleInputChange(
                            "additionalDocuments",
                            "documents",
                            newDocs
                          );
                        }}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-siemens-green focus:outline-none"
                        placeholder="Enter document name"
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <div className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-md bg-white">
                        <div className="flex items-center">
                          <input
                            type="file"
                            accept=".pdf"
                            id={`document-${index}`}
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                if (file.type !== "application/pdf") {
                                  alert("Please upload a PDF file");
                                  e.target.value = "";
                                  return;
                                }
                                if (file.size > 5 * 1024 * 1024) {
                                  alert("File size should be less than 5MB");
                                  e.target.value = "";
                                  return;
                                }
                                const newDocs = [
                                  ...(formData.additionalDocuments.documents ||
                                    []),
                                ];
                                newDocs[index] = {
                                  ...newDocs[index],
                                  file,
                                };
                                handleInputChange(
                                  "additionalDocuments",
                                  "documents",
                                  newDocs
                                );
                              }
                            }}
                          />
                          <label
                            htmlFor={`document-${index}`}
                            className="cursor-pointer flex items-center"
                          >
                            <div className="mr-4">
                              <svg
                                className="h-6 w-6 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-siemens-green">
                                Choose file
                              </span>
                              <p className="text-xs text-gray-500 mt-1">
                                PDF, max 5MB
                              </p>
                            </div>
                          </label>
                        </div>
                        <div className="text-sm text-gray-500">
                          {doc.file ? (
                            <div className="flex items-center">
                              <span className="truncate max-w-xs">
                                {doc.file.name}
                              </span>
                            </div>
                          ) : (
                            "No file chosen"
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Remove Document Button */}
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          const newDocs =
                            formData.additionalDocuments.documents.filter(
                              (_, i) => i !== index
                            );
                          handleInputChange(
                            "additionalDocuments",
                            "documents",
                            newDocs
                          );
                        }}
                        className="text-sm text-red-600 hover:text-red-800"
                      >
                        Remove Document
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Document Button */}
              <button
                type="button"
                onClick={() => {
                  const newDocs = [
                    ...(formData.additionalDocuments.documents || []),
                    { name: "", file: null },
                  ];
                  handleInputChange(
                    "additionalDocuments",
                    "documents",
                    newDocs
                  );
                }}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-siemens-green"
              >
                Add Document
              </button>
            </div>
          </div>
        );

      case 5: // Complete/Review step
        const hasValidationErrors =
          !formData.personalInfo.fullName ||
          !formData.personalInfo.nationality ||
          !formData.personalInfo.phoneNumber ||
          !formData.personalInfo.email ||
          !formData.paymentDetails.invoiceCode ||
          !formData.paymentDetails.mpesaCode ||
          !photoPreview;

        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Application Review</h3>
              <span className="text-sm text-gray-500">
                Please review all sections before submitting
              </span>
            </div>

            {/* Personal Information Review */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-gray-900">
                  Personal Information
                </h4>
                <button
                  onClick={() => setCurrentStep(0)}
                  className="text-sm text-siemens-green hover:text-siemens-green-dark"
                >
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="col-span-2 flex items-start space-x-4">
                  {photoPreview && (
                    <div>
                      <p className="font-medium mb-1">Passport Photo</p>
                      <img
                        src={photoPreview}
                        alt="Passport"
                        className="w-24 h-32 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-medium">Full Name</p>
                  <p className="text-gray-600">
                    {formData.personalInfo.fullName || "Not provided"}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Nationality</p>
                  <p className="text-gray-600">
                    {formData.personalInfo.nationality || "Not provided"}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Contact Information</p>
                  <p className="text-gray-600">
                    {formData.personalInfo.phoneNumber || "Phone not provided"}
                    <br />
                    {formData.personalInfo.email || "Email not provided"}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Study Preferences</p>
                  <p className="text-gray-600">
                    Intake:{" "}
                    {formData.personalInfo.preferredIntake || "Not selected"}
                    <br />
                    Mode: {formData.personalInfo.modeOfStudy || "Not selected"}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Details Review */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-gray-900">Payment Details</h4>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-sm text-siemens-green hover:text-siemens-green-dark"
                >
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Invoice Code</p>
                  <p className="text-gray-600">
                    {formData.paymentDetails.invoiceCode || "Not provided"}
                  </p>
                </div>
                <div>
                  <p className="font-medium">M-Pesa Code</p>
                  <p className="text-gray-600">
                    {formData.paymentDetails.mpesaCode || "Not provided"}
                  </p>
                </div>
              </div>
            </div>

            {/* Validation Messages */}
            {hasValidationErrors && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-yellow-600 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-yellow-800">
                      Required Information
                    </h4>
                    <ul className="mt-2 text-sm text-yellow-700 list-disc list-inside">
                      {!formData.personalInfo.fullName && (
                        <li>Full Name is required</li>
                      )}
                      {!formData.personalInfo.nationality && (
                        <li>Nationality is required</li>
                      )}
                      {!formData.personalInfo.phoneNumber && (
                        <li>Phone Number is required</li>
                      )}
                      {!formData.personalInfo.email && (
                        <li>Email is required</li>
                      )}
                      {!formData.paymentDetails.invoiceCode && (
                        <li>Invoice Code is required</li>
                      )}
                      {!formData.paymentDetails.mpesaCode && (
                        <li>M-Pesa Code is required</li>
                      )}
                      {!photoPreview && <li>Passport Photo is required</li>}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8">
              <button
                onClick={() => {
                  // Add your submit logic here
                  console.log("Form submitted:", formData);
                }}
                disabled={hasValidationErrors}
                className={`w-full px-6 py-3 rounded-md flex items-center justify-center space-x-2 ${
                  hasValidationErrors
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                } text-white`}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Submit Application</span>
              </button>
              <p className="mt-2 text-sm text-gray-500 text-center">
                By clicking Submit, you confirm that all provided information is
                accurate
              </p>
            </div>
          </div>
        );

      // Add cases for other steps...
      default:
        return <div>Step content</div>;
    }
  };

  return (
    <div>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex h-[36rem] max-h-[90vh]">
            {/* Vertical Steps Navigation */}
            <div className="w-64 bg-gray-50 p-6 border-r border-gray-200">
              <div className="space-y-1">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => handleStepClick(index)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          index === currentStep
                            ? "bg-siemens-green-dark text-white"
                            : index < currentStep
                            ? "bg-green-100 text-siemens-green"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div
                        className={`text-sm font-medium ${
                          index === currentStep
                            ? "text-siemens-green"
                            : index < currentStep
                            ? "text-gray-700"
                            : "text-gray-400"
                        }`}
                      >
                        {step.title}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 flex flex-col">
              <div className="flex-1 p-6 overflow-y-auto">
                {renderStepContent(currentStep)}
              </div>

              {/* Navigation Buttons */}
              <div className="p-6 border-t border-gray-200 bg-white">
                <div className="flex justify-between">
                  <button
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className={`px-4 py-2 rounded-md ${
                      currentStep === 0
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-siemens-green text-white px-4 py-2 rounded-md hover:bg-siemens-green-dark"
                  >
                    {currentStep === steps.length - 1 ? "Close" : "Next"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ApplicationForm;
