"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Book,
  Video,
  Calendar,
  FileText,
  Download,
  CheckCircle,
  Circle,
  Clock,
  BarChart,
  Save,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PDFViewer from "../../components/PDFViewer"; // Import a PDF viewer component

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("content");
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [notes, setNotes] = useState({});

  // Mock data - replace with actual API calls
  const studentInfo = {
    name: "Christopher Mwangi",
    level: "Level 3",
    progress: 65,
    lastAccessed: "2024-10-20T14:30:00",
  };

  const courseContent = [
    {
      week: 1,
      title: "Introduction to Mechatronics",
      materials: [
        {
          id: "1",
          type: "pdf",
          title: "Fundamentals of Mechatronic Systems",
          status: "completed",
          url: "/materials/fundamentals.pdf",
          content:
            "This would be the actual PDF content in a real implementation",
        },
        {
          id: "2",
          type: "video",
          title: "Getting Started with Siemens Systems",
          status: "completed",
          duration: "45:00",
          url: "/videos/getting-started.mp4",
        },
        {
          id: "3",
          type: "presentation",
          title: "System Components Overview",
          status: "in-progress",
          url: "/materials/components.pptx",
          content: "This would be the actual presentation content",
        },
      ],
    },
    {
      week: 2,
      title: "Basic Control Systems",
      materials: [
        {
          id: "4",
          type: "pdf",
          title: "Control Systems Theory",
          status: "not-started",
          url: "/materials/control-systems.pdf",
        },
        {
          id: "5",
          type: "video",
          title: "PLC Programming Basics",
          status: "not-started",
          duration: "1:15:00",
          url: "/videos/plc-basics.mp4",
        },
      ],
    },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const timetable = [
    {
      day: "Monday",
      sessions: [
        {
          time: "09:00 - 11:00",
          subject: "Theory Class - Mechatronic Systems",
          instructor: "Prof.",
          location: "Room 101",
        },
        {
          time: "14:00 - 16:00",
          subject: "Practical Lab - PLC Programming",
          instructor: "Edwin",
          location: "Lab 3",
        },
      ],
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="text-green-500" size={20} />;
      case "in-progress":
        return <Clock className="text-yellow-500" size={20} />;
      default:
        return <Circle className="text-gray-300" size={20} />;
    }
  };

  const handleSaveNotes = (materialId, noteContent) => {
    setNotes((prev) => ({
      ...prev,
      [materialId]: noteContent,
    }));
  };

  const ContentViewer = ({ material }) => {
    const [noteContent, setNoteContent] = useState(notes[material.id] || "");

    return (
      <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
        <DialogContent className="max-w-7xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>{material.title}</DialogTitle>
          </DialogHeader>
          );
          <div className="flex h-full space-x-4 overflow-hidden">
            {/* Content Display Area */}
            <div className="flex-1 overflow-y-auto border rounded-lg">
              {material.type === "video" ? (
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <Video size={48} className="text-gray-400" />
                  <p className="ml-2 text-gray-500">Video Player Placeholder</p>
                </div>
              ) : material.type === "pdf" ? (
                <PDFViewer url={material.url} />
              ) : (
                <div className="prose max-w-none p-4">{material.content}</div>
              )}
            </div>

            {/* Notes Area */}
            <div className="w-72 flex flex-col">
              <h4 className="font-medium mb-2">Notes</h4>
              <Textarea
                className="flex-1 resize-none"
                placeholder="Take notes here..."
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
              />
              <Button
                className="mt-2"
                onClick={() => handleSaveNotes(material.id, noteContent)}
              >
                <Save className="w-4 h-4 mr-2" />
                Save Notes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  const MaterialCard = ({ material }) => (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        {getStatusIcon(material.status)}
        <div>
          <h4 className="font-medium text-gray-900">{material.title}</h4>
          {material.duration && (
            <p className="text-sm text-gray-500">
              Duration: {material.duration}
            </p>
          )}
          {notes[material.id] && (
            <p className="text-sm text-green-600">Notes available</p>
          )}
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          className="p-2 text-siemens-green hover:bg-gray-100 rounded-full"
          onClick={() => {
            setSelectedMaterial(material);
            setIsViewerOpen(true);
          }}
        >
          <FileText size={20} />
        </button>
        <button className="p-2 text-siemens-green hover:bg-gray-100 rounded-full">
          <Download size={20} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {/* Header Section */}

      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, {studentInfo.name}
              </h1>
              <p className="text-gray-600">
                Current Level: {studentInfo.level}
              </p>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-right mr-16">
                <div className="text-sm text-gray-600">Overall Progress</div>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 w-40 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${studentInfo.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-siemens-green"
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {studentInfo.progress}%
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Last accessed:{" "}
                  {new Date(studentInfo.lastAccessed).toLocaleString()}
                </p>
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
            className={`px-4 py-2 font-medium ${
              activeTab === "content" ? "text-siemens-green" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("content")}
          >
            Course Content
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "timetable" ? "text-siemens-green" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("timetable")}
          >
            Timetable
          </button>
        </div>

        {/* Content Tab */}
        {activeTab === "content" && (
          <div className="space-y-8">
            {courseContent.map((week) => (
              <div
                key={week.week}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="text-xl font-semibold mb-4">
                  Week {week.week}: {week.title}
                </h3>
                <div className="space-y-4">
                  {week.materials.map((material) => (
                    <MaterialCard key={material.id} material={material} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Timetable Tab */}
        {activeTab === "timetable" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            {timetable.map((day, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {day.day}
                </h3>
                <div className="space-y-4">
                  {day.sessions.map((session, sessionIndex) => (
                    <div
                      key={sessionIndex}
                      className="flex items-start p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          {session.subject}
                        </p>
                        <p className="text-sm text-gray-600">{session.time}</p>
                        <p className="text-sm text-gray-600">
                          {session.instructor} • {session.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content Viewer Dialog */}
        {selectedMaterial && <ContentViewer material={selectedMaterial} />}
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
