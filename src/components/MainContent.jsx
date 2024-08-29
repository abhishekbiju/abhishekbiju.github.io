import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import profileImg from "../assets/profile-img.png"; // Replace with the path to your image

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
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
      <div className="md:flex-1 flex items-center justify-center">
        <div className="text-center p-4">
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
          <p className="text-gray-500 italic my-4">Hi, I’m Abhishek.</p>
        </div>
      </div>
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
