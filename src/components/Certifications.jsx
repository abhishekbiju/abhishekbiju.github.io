// src/components/Certifications.jsx
import React, { useEffect } from "react";
import { annotate } from "rough-notation";
import "./Certifications.css";

// Sample data for certifications - replace with your actual certifications
const certifications = [
  {
    title: "AWS Certified Machine Learning - Specialty",
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
  },
  {
    title: "AWS Certified Cloud Practitioner",
  },
  {
    title: "Snowflake Certified SnowPro Core",
  }
];

const Certifications = () => {
  useEffect(() => {
    const certificationItems = document.querySelectorAll(".certification-item");
    certificationItems.forEach((item) => {
      const highlight = annotate(item, {
        type: "highlight",
        color: "#b0b0b0",
        animationDuration: 700,
        multiline: false,
        iterations: 1,
      });
      item.addEventListener("mouseenter", () => highlight.show());
      item.addEventListener("mouseleave", () => highlight.hide());
    });
  }, []);

  return (
    <div className="p-8 bg-white text-black content">
      <h1 className="text-4xl font-bold mb-4 text-left">certifications</h1>
      <div className="certifications-list">
        {certifications.map((certification, index) => (
          <p key={index} className="certification-item">
            {certification.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
