"use client";
import React, { useState } from "react";
import {
  Pencil,
  Save,
  Plus,
  Calendar,
  Book,
  Clock,
  Upload,
  Trash2,
  FileText,
  Users,
  Image as ImageIcon,
  Video,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const InstructorDashboard = () => {
  // State for instructor info
  const [instructorInfo, setInstructorInfo] = useState({
    name: "Maxwell Magoi",
    department: "Virtual Reality",
    materialsCount: 5,
    studentsCount: 150,
  });

  // State for active tab
  const [activeTab, setActiveTab] = useState("materials");

  // State for materials
  const [materials, setMaterials] = useState({
    level1: [
      {
        id: "1",
        title: "Fundamentals of Mechatronic Systems",
        content: "",
        level: "level1",
        imageUrls: [],
        imageNames: [],
        videoUrls: [],
        videoNames: [],
      },
    ],
    level2: [],
    level3: [],
  });

  // State for editing material
  const [editingMaterial, setEditingMaterial] = useState(null);

  // State for selected level
  const [selectedLevel, setSelectedLevel] = useState("level1");

  // State for timetable
  const [timetable, setTimetable] = useState([
    {
      id: "1",
      day: "Monday",
      time: "09:00",
      subject: "Programming Fundamentals",
      level: "Level 1",
      location: "Room 101",
    },
  ]);

  // State for editing schedule
  const [editingSchedule, setEditingSchedule] = useState(null);

  // Handler for adding new material
  const addNewMaterial = () => {
    const newMaterial = {
      id: Date.now().toString(),
      title: "New Material",
      content: "Enter more content or description here...",
      level: selectedLevel,
      imageUrls: [],
      imageNames: [],
      videoUrls: [],
      videoNames: [],
    };

    setMaterials((prev) => ({
      ...prev,
      [selectedLevel]: [...prev[selectedLevel], newMaterial],
    }));
  };

  // Handler for editing material
  const handleEditMaterial = (material) => {
    setEditingMaterial(material);
  };

  // Handler for saving material
  const handleSaveMaterial = (id, content) => {
    setMaterials((prev) => ({
      ...prev,
      [selectedLevel]: prev[selectedLevel].map((material) =>
        material.id === id ? { ...material, content } : material
      ),
    }));
    setEditingMaterial(null);
  };

  // Handler for file upload
  const handleFileUpload = (materialId, file, type) => {
    if (!file) return;

    // In a real application, you would upload the file to a server here
    const fileUrl = URL.createObjectURL(file);

    setMaterials((prev) => ({
      ...prev,
      [selectedLevel]: prev[selectedLevel].map((material) => {
        if (material.id === materialId) {
          switch (type) {
            case "pdf":
              return { ...material, pdfUrl: fileUrl, fileName: file.name };
            case "image":
              return {
                ...material,
                imageUrls: [...material.imageUrls, fileUrl],
                imageNames: [...material.imageNames, file.name],
              };
            case "video":
              return {
                ...material,
                videoUrls: [...material.videoUrls, fileUrl],
                videoNames: [...material.videoNames, file.name],
              };
            default:
              return material;
          }
        }
        return material;
      }),
    }));
  };

  // Handler for deleting files
  const handleDeleteFile = (materialId, type, index) => {
    setMaterials((prev) => ({
      ...prev,
      [selectedLevel]: prev[selectedLevel].map((material) => {
        if (material.id === materialId) {
          switch (type) {
            case "pdf":
              return { ...material, pdfUrl: undefined, fileName: undefined };
            case "image":
              return {
                ...material,
                imageUrls: material.imageUrls.filter((_, i) => i !== index),
                imageNames: material.imageNames.filter((_, i) => i !== index),
              };
            case "video":
              return {
                ...material,
                videoUrls: material.videoUrls.filter((_, i) => i !== index),
                videoNames: material.videoNames.filter((_, i) => i !== index),
              };
            default:
              return material;
          }
        }
        return material;
      }),
    }));
  };

  // Handler for adding new schedule
  const addNewSchedule = () => {
    const newSchedule = {
      id: Date.now().toString(),
      day: "Monday",
      time: "09:00",
      subject: "New Class",
      level: "Level 1",
      location: "TBD",
    };

    setTimetable((prev) => [...prev, newSchedule]);
  };

  // Handler for saving schedule
  const handleSaveSchedule = (id, updatedSchedule) => {
    setTimetable((prev) =>
      prev.map((schedule) => (schedule.id === id ? updatedSchedule : schedule))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Header Section */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {instructorInfo.name}
              </h1>
              <p className="text-gray-600">{instructorInfo.department}</p>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-900">
                  {instructorInfo.materialsCount}
                </p>
                <p className="text-sm text-gray-600">Materials</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-900">
                  {instructorInfo.studentsCount}
                </p>
                <p className="text-sm text-gray-600">Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("materials")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "materials"
                ? "bg-siemens-green text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Book className="w-5 h-5" />
            Materials
          </button>
          <button
            onClick={() => setActiveTab("timetable")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "timetable"
                ? "bg-siemens-green text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Calendar className="w-5 h-5" />
            Timetable
          </button>
        </div>

        {/* Materials Tab Content */}
        {activeTab === "materials" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            {/* Level Selection */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4">
                {Object.keys(materials).map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedLevel === level
                        ? "bg-siemens-green text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Level {level.slice(-1)}
                  </button>
                ))}
              </div>
              <Button onClick={addNewMaterial} className="gap-2">
                <Plus className="w-4 h-4" /> Add Material
              </Button>
            </div>

            {/* Materials List */}
            <div className="space-y-4">
              {materials[selectedLevel].map((material) => (
                <div
                  key={material.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {material.title}
                      </h3>
                      {editingMaterial?.id === material.id ? (
                        <Textarea
                          className="mt-2"
                          defaultValue={material.content}
                          rows={3}
                        />
                      ) : (
                        <p className="mt-2 text-gray-600">{material.content}</p>
                      )}

                      {/* File Upload Section */}
                      <div className="mt-4 space-y-4">
                        {/* PDF Files */}
                        {material.pdfUrl && (
                          <div className="flex items-center gap-2 text-sm">
                            <FileText className="w-4 h-4 text-siemens-green" />
                            <span>{material.fileName}</span>
                            <button
                              onClick={() =>
                                handleDeleteFile(material.id, "pdf")
                              }
                              className="text-red-500 hover:text-red-600"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}

                        {/* Image Files */}
                        {material.imageUrls.length > 0 && (
                          <div className="space-y-2">
                            {material.imageUrls.map((url, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 text-sm"
                              >
                                <ImageIcon className="w-4 h-4 text-siemens-green" />
                                <span>{material.imageNames[index]}</span>
                                <button
                                  onClick={() =>
                                    handleDeleteFile(
                                      material.id,
                                      "image",
                                      index
                                    )
                                  }
                                  className="text-red-500 hover:text-red-600"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Video Files */}
                        {material.videoUrls.length > 0 && (
                          <div className="space-y-2">
                            {material.videoUrls.map((url, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 text-sm"
                              >
                                <Video className="w-4 h-4 text-siemens-green" />
                                <span>{material.videoNames[index]}</span>
                                <button
                                  onClick={() =>
                                    handleDeleteFile(
                                      material.id,
                                      "video",
                                      index
                                    )
                                  }
                                  className="text-red-500 hover:text-red-600"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Upload Buttons */}
                        <div className="flex gap-4">
                          {!material.pdfUrl && (
                            <div className="relative">
                              <input
                                type="file"
                                accept=".pdf"
                                onChange={(e) =>
                                  handleFileUpload(
                                    material.id,
                                    e.target.files[0],
                                    "pdf"
                                  )
                                }
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              />
                              <Button variant="outline" className="gap-2">
                                <Upload className="w-4 h-4" />
                                Upload PDF
                              </Button>
                            </div>
                          )}
                          <div className="relative">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) =>
                                handleFileUpload(
                                  material.id,
                                  e.target.files[0],
                                  "image"
                                )
                              }
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <Button variant="outline" className="gap-2">
                              <ImageIcon className="w-4 h-4" />
                              Upload Image
                            </Button>
                          </div>
                          <div className="relative">
                            <input
                              type="file"
                              accept="video/*"
                              onChange={(e) =>
                                handleFileUpload(
                                  material.id,
                                  e.target.files[0],
                                  "video"
                                )
                              }
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <Button variant="outline" className="gap-2">
                              <Video className="w-4 h-4" />
                              Upload Video
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      {editingMaterial?.id === material.id ? (
                        <Button
                          onClick={() =>
                            handleSaveMaterial(material.id, material.content)
                          }
                          className="gap-2"
                        >
                          <Save className="w-4 h-4" /> Save
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          onClick={() => handleEditMaterial(material)}
                          className="gap-2"
                        >
                          <Pencil className="w-4 h-4" /> Edit
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timetable Tab Content */}
        {activeTab === "timetable" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Class Schedule
              </h2>
              <Button onClick={addNewSchedule} className="gap-2">
                <Plus className="w-4 h-4" /> Add Class
              </Button>
            </div>

            <div className="space-y-4">
              {timetable.map((schedule) => (
                <div
                  key={schedule.id}
                  className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    {editingSchedule?.id === schedule.id ? (
                      <div className="space-y-3">
                        <div>
                          <select
                            defaultValue={schedule.day}
                            className="w-full p-2 border rounded"
                            onChange={(e) =>
                              handleSaveSchedule(schedule.id, {
                                ...schedule,
                                day: e.target.value,
                              })
                            }
                          >
                            {[
                              "Monday",
                              "Tuesday",
                              "Wednesday",
                              "Thursday",
                              "Friday",
                            ].map((day) => (
                              <option key={day} value={day}>
                                {day}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <input
                            type="time"
                            defaultValue={schedule.time}
                            className="w-full p-2 border rounded"
                            onChange={(e) =>
                              handleSaveSchedule(schedule.id, {
                                ...schedule,
                                time: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            defaultValue={schedule.subject}
                            placeholder="Subject"
                            className="w-full p-2 border rounded"
                            onChange={(e) =>
                              handleSaveSchedule(schedule.id, {
                                ...schedule,
                                subject: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            defaultValue={schedule.location}
                            placeholder="Location"
                            className="w-full p-2 border rounded"
                            onChange={(e) =>
                              handleSaveSchedule(schedule.id, {
                                ...schedule,
                                location: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-siemens-green" />
                          <h3 className="font-semibold text-gray-900">
                            {schedule.day}
                          </h3>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <p className="text-gray-600">{schedule.time}</p>
                          </div>
                          <p className="text-gray-600 mt-1">
                            {schedule.subject} - {schedule.level}
                          </p>
                          <p className="text-sm text-gray-500">
                            {schedule.location}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <Button
                      variant={
                        editingSchedule?.id === schedule.id
                          ? "default"
                          : "outline"
                      }
                      onClick={() =>
                        editingSchedule?.id === schedule.id
                          ? setEditingSchedule(null)
                          : setEditingSchedule(schedule)
                      }
                      className="gap-2"
                    >
                      {editingSchedule?.id === schedule.id ? (
                        <>
                          <Save className="w-4 h-4" /> Save
                        </>
                      ) : (
                        <>
                          <Pencil className="w-4 h-4" /> Edit
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default InstructorDashboard;
