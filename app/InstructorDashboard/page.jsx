"use client";
import React, { useState, useEffect } from "react";
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
  const [instructorInfo, setInstructorInfo] = useState({
    name: "",
    department: "",
    materialsCount: 0,
    studentsCount: 0,
  });
  const [activeTab, setActiveTab] = useState("materials");
  const [timetable, setTimetable] = useState([]);
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [materials, setMaterials] = useState({});
  const [editingMaterial, setEditingMaterial] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDuration, setNewDuration] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedWeek, setSelectedWeek] = useState("");
  const [levels, setLevels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const backendUrl = "https://erpbackend-6vez.onrender.com";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Fetch levels data
        const levelsResponse = await fetch(`${backendUrl}/levels`);
        if (!levelsResponse.ok) {
          throw new Error("Failed to fetch levels data");
        }
        const levelsData = await levelsResponse.json();
        setLevels(levelsData);

        // Set the initial selected level only if levels are available
        if (levelsData.length > 0) {
          setSelectedLevel(levelsData[0].id.toString());
        }

        // Fetch instructor data
        const instructorResponse = await fetch(`${backendUrl}/facilitators`);
        if (!instructorResponse.ok) {
          throw new Error("Failed to fetch instructor data");
        }
        const instructorData = await instructorResponse.json();
        setInstructorInfo(instructorData[0]); // Assuming the first facilitator is the current user

        // Fetch materials data
        const materialsResponse = await fetch(`${backendUrl}/materials`);
        if (!materialsResponse.ok) {
          throw new Error("Failed to fetch materials data");
        }
        const materialsData = await materialsResponse.json();
        const organizedMaterials =
          organizeMaterialsByLevelAndWeek(materialsData);
        setMaterials(organizedMaterials);

        // Fetch timetable data
        const timetableResponse = await fetch(`${backendUrl}/timetable`);
        if (!timetableResponse.ok) {
          throw new Error("Failed to fetch timetable data");
        }
        const timetableData = await timetableResponse.json();
        setTimetable(timetableData);

        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const organizeMaterialsByLevelAndWeek = (materialsData) => {
    const organized = {};
    materialsData.forEach((material) => {
      if (!organized[material.level]) {
        organized[material.level] = { weeks: [] };
      }
      let week = organized[material.level].weeks.find(
        (w) => w.id === material.week
      );
      if (!week) {
        week = {
          id: material.week,
          name: `Week ${material.week}`,
          materials: [],
        };
        organized[material.level].weeks.push(week);
      }
      week.materials.push(material);
    });
    return organized;
  };

  const addNewWeek = async () => {
    try {
      const weekCount = materials[selectedLevel].weeks.length + 1;
      const newWeek = {
        id: `week${weekCount}`,
        name: `Week ${weekCount}`,
        level: selectedLevel,
      };

      const response = await fetch(`${backendUrl}/weeks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newWeek),
      });

      if (!response.ok) {
        throw new Error("Failed to add new week");
      }

      const addedWeek = await response.json();

      setMaterials((prev) => ({
        ...prev,
        [selectedLevel]: {
          ...prev[selectedLevel],
          weeks: [...prev[selectedLevel].weeks, addedWeek],
        },
      }));
      setSelectedWeek(addedWeek.id);
    } catch (error) {
      setError(error.message);
    }
  };

  const updateWeekInfo = async (weekId, newName, newTitle) => {
    try {
      const response = await fetch(`${backendUrl}/weeks/${weekId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName, title: newTitle }),
      });

      if (!response.ok) {
        throw new Error("Failed to update week info");
      }

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
    } catch (error) {
      setError(error.message);
    }
  };

  const addNewMaterial = async () => {
    try {
      const newMaterial = {
        title: "New Material",
        description: "Enter material description here...",
        duration: "1 hour",
        level: selectedLevel,
        week: selectedWeek,
      };

      const response = await fetch(`${backendUrl}/materials`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMaterial),
      });

      if (!response.ok) {
        throw new Error("Failed to add new material");
      }

      const addedMaterial = await response.json();

      setMaterials((prev) => ({
        ...prev,
        [selectedLevel]: {
          ...prev[selectedLevel],
          weeks: prev[selectedLevel].weeks.map((week) =>
            week.id === selectedWeek
              ? { ...week, materials: [...week.materials, addedMaterial] }
              : week
          ),
        },
      }));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditMaterial = (material) => {
    setEditingMaterial(material);
    setNewTitle(material.title);
    setNewDuration(material.duration);
    setNewDescription(material.description);
  };

  const handleSaveMaterial = async (
    weekId,
    materialId,
    newTitle,
    newDuration,
    newDescription
  ) => {
    try {
      const response = await fetch(`${backendUrl}/materials/${materialId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTitle,
          duration: newDuration,
          description: newDescription,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update material");
      }

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
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteMaterial = async (weekId, materialId) => {
    try {
      const response = await fetch(`${backendUrl}/materials/${materialId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete material");
      }

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
    } catch (error) {
      setError(error.message);
    }
  };

  const getCurrentWeekMaterials = () => {
    const currentLevel = materials[selectedLevel];
    const currentWeek = currentLevel?.weeks.find(
      (week) => week.id === selectedWeek
    );
    return currentWeek ? currentWeek.materials : [];
  };

  const addNewSchedule = async () => {
    try {
      const newSchedule = {
        day: "Monday",
        time: "09:00",
        subject: "New Class",
        location: "TBD",
        level: levels[0].name,
      };

      const response = await fetch(`${backendUrl}/timetable`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSchedule),
      });

      if (!response.ok) {
        throw new Error("Failed to add new schedule");
      }

      const addedSchedule = await response.json();
      setTimetable([...timetable, addedSchedule]);
      setEditingSchedule(addedSchedule);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSaveSchedule = async (id, updatedSchedule) => {
    try {
      const response = await fetch(`${backendUrl}/timetable/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedSchedule),
      });

      if (!response.ok) {
        throw new Error("Failed to update schedule");
      }

      setTimetable(
        timetable.map((schedule) =>
          schedule.id === id ? { ...schedule, ...updatedSchedule } : schedule
        )
      );
      setEditingSchedule(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteSchedule = async (id) => {
    try {
      const response = await fetch(`${backendUrl}/timetable/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete schedule");
      }

      setTimetable(timetable.filter((schedule) => schedule.id !== id));
      if (editingSchedule?.id === id) {
        setEditingSchedule(null);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }

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
                ? "bg-blue-600 text-white"
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
                ? "bg-blue-600 text-white"
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
                {levels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id.toString())}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedLevel === level.id.toString()
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Week Selection */}
            {selectedLevel && materials[selectedLevel] && (
              <div className="flex items-center gap-4 mb-6">
                <select
                  value={selectedWeek}
                  onChange={(e) => setSelectedWeek(e.target.value)}
                  className="p-2 border rounded-lg flex-1"
                >
                  {materials[selectedLevel].weeks.map((week) => (
                    <option key={week.id} value={week.id}>
                      {week.name}
                    </option>
                  ))}
                </select>
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
            )}

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
                  className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
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
                          <select
                            defaultValue={schedule.level}
                            className="w-full p-2 border rounded"
                            onChange={(e) =>
                              handleSaveSchedule(schedule.id, {
                                ...schedule,
                                level: e.target.value,
                              })
                            }
                          >
                            {levels.map((level) => (
                              <option key={level.id} value={level.name}>
                                {level.name}
                              </option>
                            ))}
                          </select>
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
                          <Calendar className="w-5 h-5 text-blue-600" />
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
                  <div className="flex gap-2">
                    <Button
                      variant={
                        editingSchedule?.id === schedule.id
                          ? "default"
                          : "outline"
                      }
                      onClick={() =>
                        editingSchedule?.id === schedule.id
                          ? handleSaveSchedule(schedule.id, schedule)
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
                    <Button
                      variant="outline"
                      className="text-red-500 hover:text-red-600"
                      onClick={() => handleDeleteSchedule(schedule.id)}
                    >
                      <Trash2 className="w-4 h-4" />
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
