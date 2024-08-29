// src/components/ExperienceCard.jsx
import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

const ExperienceCard = ({ company, position, description, date, blurb, image }) => {
  const companyRef = useRef(null); // Reference for the company name

  useEffect(() => {
    // Initialize Rough Notation annotation for company name
    const annotation = annotate(companyRef.current, {
      type: "highlight",
      color: "#e0b3ff", // Light purple color for the highlight
      animationDuration: 800,
      multiline: false, // Effect only covers visible text
    });

    // Add hover event listeners to the company name
    const showHighlight = () => annotation.show();
    const hideHighlight = () => annotation.hide();

    companyRef.current.addEventListener("mouseenter", showHighlight);
    companyRef.current.addEventListener("mouseleave", hideHighlight);

    // Cleanup event listeners on unmount
    return () => {
      companyRef.current.removeEventListener("mouseenter", showHighlight);
      companyRef.current.removeEventListener("mouseleave", hideHighlight);
    };
  }, []);

  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-6 p-6">
      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={`${company} logo`}
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>

      {/* Company and Description Section */}
      <h3 ref={companyRef} className="text-2xl font-bold mb-2 text-center">{company}</h3>
      <h4 className="text-xl font-semibold mb-2 text-center">{position}</h4>
      <p className="text-gray-500 text-sm mb-2 text-center">{date}</p>
      <ul className="list-disc list-inside mb-4">
        {description.map((item, index) => (
          <li key={index} className="text-gray-700 mb-1">{item}</li>
        ))}
      </ul>
      <p className="text-gray-600 italic text-center">{blurb}</p>
    </div>
  );
};

export default ExperienceCard;
