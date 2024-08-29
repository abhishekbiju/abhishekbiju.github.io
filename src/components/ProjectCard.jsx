// src/components/ProjectCard.jsx
import React, { useRef, useEffect } from "react";
import { annotate } from "rough-notation";

const ProjectCard = ({ title, description, date, githubUrl }) => {
  const titleRef = useRef(null); // Reference for the project title

  useEffect(() => {
    // Initialize Rough Notation annotation for project title
    const annotation = annotate(titleRef.current, {
      type: "highlight",
      color: "#e0b3ff", // Light purple color for the highlight
      animationDuration: 800,
      multiline: false, // Effect only covers visible text
    });

    // Add hover event listeners to the project title
    const showHighlight = () => annotation.show();
    const hideHighlight = () => annotation.hide();

    titleRef.current.addEventListener("mouseenter", showHighlight);
    titleRef.current.addEventListener("mouseleave", hideHighlight);

    // Cleanup event listeners on unmount
    return () => {
      titleRef.current.removeEventListener("mouseenter", showHighlight);
      titleRef.current.removeEventListener("mouseleave", hideHighlight);
    };
  }, []);

  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-6 p-6">
      {/* Project Title and Description Section */}
      <h3 ref={titleRef} className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-2">{date}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
