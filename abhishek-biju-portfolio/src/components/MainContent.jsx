// src/components/MainContent.jsx
import React from "react";
import profileImg from "../assets/profile-img.png"; // Replace with the path to your image

const MainContent = () => {
  return (
    // Flex container for the whole screen
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
      {/* Text column */}
      <div className="md:flex-1 flex items-center justify-center">
        <div className="text-center p-4">
          <h1 className="text-5xl font-bold">
            software developer & data scientist.
          </h1>
          <p className="text-gray-500 italic my-4">Hi, I’m Abhishek.</p>
          <a
            href="#works"
            className="mt-4 inline-block text-white border-b-2 border-white hover:border-gray-500"
          >
            SEE MY WORKS →
          </a>
        </div>
      </div>
      {/* Image column */}
      <div className="md:flex-1 flex items-center justify-center p-4">
        <img
          src={profileImg}
          alt="Profile"
          className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover object-center"
        />
      </div>
    </div>
  );
};

export default MainContent;
