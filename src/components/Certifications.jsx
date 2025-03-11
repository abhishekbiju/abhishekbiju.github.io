// src/components/Certifications.jsx
import React, { useEffect } from "react";
import { annotate } from "rough-notation";
import "./Certifications.css";

// Sample data for certifications - replace with your actual certifications
const certifications = [
  {
    title: "AWS Certified Machine Learning - Specialty",
    url: "https://www.credly.com/badges/d7eac67b-07b4-4298-bede-5b1f7348b54f/linked_in_profile"
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    url: "https://www.credly.com/badges/9126524a-7406-470f-a0d7-2aa568278415/linked_in_profile"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/badges/b9e309d3-78ee-4403-8c1b-b79b718b1500/linked_in_profile"
  },
  {
    title: "Snowflake Certified SnowPro Core",
    url: "https://achieve.snowflake.com/7985f096-212a-422c-beb1-ff4e783f5b81"
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

    const resumeLink = document.querySelector(".resume-link");
    const resumeHighlight = annotate(resumeLink, {
      type: "highlight",
      color: "#b0b0b0",
      animationDuration: 700,
      multiline: false,
      iterations: 1,
    });
    resumeLink.addEventListener("mouseenter", () => resumeHighlight.show());
    resumeLink.addEventListener("mouseleave", () => resumeHighlight.hide());
  }, []);

  return (
    <div className="p-8 bg-white text-black content">
      <h1 className="text-4xl font-bold mb-4 text-left">certifications</h1>
      <div className="certifications-list">
        {certifications.map((certification, index) => (
          <p key={index} className="certification-item">
            <a href={certification.url} target="_blank" rel="noopener noreferrer" className="certification-link">
              {certification.title}
            </a>
          </p>
        ))}
      </div>
      <div className="resume-section mt-8">
        <h1 className="text-4xl font-bold mb-4 text-left">resume</h1>
        Download {""}
        <a href="abhishek_biju_resume.pdf" download className="resume-link text-lg underline">
          here
        </a>
      </div>
    </div>
  );
};

export default Certifications;