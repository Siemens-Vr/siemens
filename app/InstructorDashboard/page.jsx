"use client";
import React, { useState } from "react";
import Link from "next/link";
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

  const [materials, setMaterials] = useState({
    level1: {
      weeks: [
        {
          id: "week1",
          name: "Week 1",
          title: "Introduction Week",
          materials: [
            {
              id: "1",
              title: "Fundamentals of Mechatronic Systems",
              description: "",
              duration: "2 hours",
              imageUrls: [],
              imageNames: [],
              videoUrls: [],
              videoNames: [],
            },
          ],
        },
      ],
    },
    level2: { weeks: [] },
    level3: { weeks: [] },
  });

  // State for editing material
  const [editingMaterial, setEditingMaterial] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDuration, setNewDuration] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // State for selected level and week
  const [selectedLevel, setSelectedLevel] = useState("level1");
  const [selectedWeek, setSelectedWeek] = useState("week1");

  // Handler for adding new week
  const addNewWeek = () => {
    const weekCount = materials[selectedLevel].weeks.length + 1;
    const newWeek = {
      id: `week${weekCount}`,
      name: `Week ${weekCount}`,
      title: `Week ${weekCount} Title`,
      materials: [],
    };

    setMaterials((prev) => ({
      ...prev,
      [selectedLevel]: {
        ...prev[selectedLevel],
        weeks: [...prev[selectedLevel].weeks, newWeek],
      },
    }));
    setSelectedWeek(newWeek.id);
  };

  // Handler for updating week name and title
  const updateWeekInfo = (weekId, newName, newTitle) => {
    setMaterials((prev) => ({
      ...prev,
      [selectedLevel]: {
        ...prev[selectedLevel],
        weeks: prev[selectedLevel].weeks.map((week) =>
          week.id === weekId
            ? { ...week, name: newName, title: newTitle }
            : week
        ),
      },
    }));
  };

  // Handler for adding new material
  const addNewMaterial = () => {
    const newMaterial = {
      id: Date.now().toString(),
      title: "New Material",
      description: "Enter material description here...",
      duration: "1 hour",
      imageUrls: [],
      imageNames: [],
      videoUrls: [],
      videoNames: [],
    };

    setMaterials((prev) => ({
      ...prev,
      [selectedLevel]: {
        ...prev[selectedLevel],
        weeks: prev[selectedLevel].weeks.map((week) =>
          week.id === selectedWeek
            ? { ...week, materials: [...week.materials, newMaterial] }
            : week
        ),
      },
    }));
  };

  // Handler for editing material
  const handleEditMaterial = (material) => {
    setEditingMaterial(material);
    setNewTitle(material.title);
    setNewDuration(material.duration);
    setNewDescription(material.description);
  };

  // Handler for saving material
  const handleSaveMaterial = (
    weekId,
    materialId,
    newTitle,
    newDuration,
    newDescription
  ) => {
    setMaterials((prev) => ({
      ...prev,
      [selectedLevel]: {
        ...prev[selectedLevel],
        weeks: prev[selectedLevel].weeks.map((week) =>
          week.id === weekId
            ? {
                ...week,
                materials: week.materials.map((material) =>
                  material.id === materialId
                    ? {
                        ...material,
                        title: newTitle,
                        duration: newDuration,
                        description: newDescription,
                      }
                    : material
                ),
              }
            : week
        ),
      },
    }));
    setEditingMaterial(null);
    setNewTitle("");
    setNewDuration("");
    setNewDescription("");
  };

  // Handler for deleting material
  const handleDeleteMaterial = (weekId, materialId) => {
    setMaterials((prev) => ({
      ...prev,
      [selectedLevel]: {
        ...prev[selectedLevel],
        weeks: prev[selectedLevel].weeks.map((week) =>
          week.id === weekId
            ? {
                ...week,
                materials: week.materials.filter(
                  (material) => material.id !== materialId
                ),
              }
            : week
        ),
      },
    }));
  };

  // Get current week's materials
  const getCurrentWeekMaterials = () => {
    const currentLevel = materials[selectedLevel];
    const currentWeek = currentLevel.weeks.find(
      (week) => week.id === selectedWeek
    );
    return currentWeek ? currentWeek.materials : [];
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
              <Link href="/Profile" legacyBehavior>
                <a className="flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="font-medium">Profile</span>
                </a>
              </Link>
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
            </div>

            {/* Week Selection */}
            <div className="flex items-center gap-4 mb-6">
              <input
                type="text"
                value={
                  materials[selectedLevel].weeks.find(
                    (week) => week.id === selectedWeek
                  )?.name || ""
                }
                onChange={(e) =>
                  updateWeekInfo(
                    selectedWeek,
                    e.target.value,
                    materials[selectedLevel].weeks.find(
                      (week) => week.id === selectedWeek
                    )?.title || ""
                  )
                }
                className="p-2 border rounded-lg flex-1"
                placeholder="Enter week name"
              />
              <input
                type="text"
                value={
                  materials[selectedLevel].weeks.find(
                    (week) => week.id === selectedWeek
                  )?.title || ""
                }
                onChange={(e) =>
                  updateWeekInfo(
                    selectedWeek,
                    materials[selectedLevel].weeks.find(
                      (week) => week.id === selectedWeek
                    )?.name || "",
                    e.target.value
                  )
                }
                className="p-2 border rounded-lg flex-1"
                placeholder="Enter week title"
              />
              <Button onClick={addNewWeek} className="gap-2">
                <Plus className="w-4 h-4" /> Add Week
              </Button>
            </div>

            {/* Add Material Button */}
            <Button onClick={addNewMaterial} className="gap-2 mb-6">
              <Plus className="w-4 h-4" /> Add Material
            </Button>

            {/* Materials List */}
            <div className="space-y-4">
              {getCurrentWeekMaterials().map((material) => (
                <div
                  key={material.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      {editingMaterial?.id === material.id ? (
                        <>
                          <input
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="w-full p-2 border rounded mb-2"
                            placeholder="Material Title"
                          />
                          <input
                            type="text"
                            value={newDuration}
                            onChange={(e) => setNewDuration(e.target.value)}
                            className="w-full p-2 border rounded mb-2"
                            placeholder="Duration (e.g., 2 hours)"
                          />
                          <Textarea
                            className="mt-2"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            placeholder="Material Description"
                            rows={3}
                          />
                        </>
                      ) : (
                        <>
                          <h3 className="font-semibold text-gray-900">
                            {material.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Duration: {material.duration}
                          </p>
                          <p className="mt-2 text-gray-600 whitespace-pre-wrap">
                            {material.description}
                          </p>
                        </>
                      )}
                    </div>
                    <div>
                      {editingMaterial?.id === material.id ? (
                        <Button
                          onClick={() =>
                            handleSaveMaterial(
                              selectedWeek,
                              material.id,
                              newTitle,
                              newDuration,
                              newDescription
                            )
                          }
                          className="gap-2"
                        >
                          <Save className="w-4 h-4" /> Save
                        </Button>
                      ) : (
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() =>
                              handleDeleteMaterial(selectedWeek, material.id)
                            }
                            className="text-red-500 hover:text-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <Button
                            variant="outline"
                            onClick={() => handleEditMaterial(material)}
                            className="gap-2"
                          >
                            <Pencil className="w-4 h-4" /> Edit
                          </Button>
                        </div>
                      )}
                    </div>
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
