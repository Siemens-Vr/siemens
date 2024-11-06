"use client";
import React from "react";
import ProfilePage from "../../components/ProfilePage";

const Profile = () => {
  const student = {
    name: "Christopher Mwangi",
    email: "chrismugwimi01@gmail.com",
    level: "Level 3",
    avatarUrl: null,
  };

  return (
    <div>
      <ProfilePage student={student} />
    </div>
  );
};

export default Profile;
