import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import profileImg from "../assets/profile-img.png"; // Replace with the path to your image
import "./MainContent.css"; // Import the CSS file for styling

const MainContent = () => {
  const softwareRef = useRef(null);
  const dataScientistRef = useRef(null);
  const mlResearcherRef = useRef(null);

  useEffect(() => {
    const softwareAnnotation = annotate(softwareRef.current, {
      type: "highlight",
      color: "#ffeb3b", // Yellow
      multiline: true,
      animationDuration: 1500,
    });
    const dataScientistAnnotation = annotate(dataScientistRef.current, {
      type: "highlight",
      color: "#8bc34a", // Green
      multiline: true,
      animationDuration: 1500,
    });
    const mlResearcherAnnotation = annotate(mlResearcherRef.current, {
      type: "highlight",
      color: "#03a9f4", // Blue
      multiline: true,
      animationDuration: 1500,
    });

    softwareAnnotation.show();
    setTimeout(() => {
      dataScientistAnnotation.show();
      setTimeout(() => {
        mlResearcherAnnotation.show();
      }, 1500); // Delay for the third annotation
    }, 1500); // Delay for the second annotation
  }, []);

  return (
    <div className="main-content-container">
      <div className="text-content">
        <h1 className="text-5xl font-bold">
          <span ref={softwareRef} className="inline-block">
            software developer
          </span>
          ,{" "}
          <span ref={dataScientistRef} className="inline-block">
            data scientist
          </span>{" "}
          &{" "}
          <span ref={mlResearcherRef} className="inline-block">
            ML researcher.
          </span>
        </h1>
        <p className="text-gray-500 italic my-4 centered-text">Hi, I’m Abhishek.</p>
      </div>
      <div className="image-content">
        <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
          <img
            src={profileImg}
            alt="Profile"
            className="profile-image"
          />
        </a>
      </div>
    </div>
  );
};

export default MainContent;
