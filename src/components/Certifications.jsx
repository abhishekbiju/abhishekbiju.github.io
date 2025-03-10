// src/components/Certifications.jsx
import React from "react";
import CertificationCard from "./CertificationCard";
import awsMl from "../assets/aws-machine-learning.png"
import awsSaa from "../assets/aws-saa.png"
import awsCcp from "../assets/aws-ccp.png" 
// Sample data for certifications - replace with your actual certifications
const certifications = [
  {
    image: awsMl, // Replace with your image URL or path
    title: "AWS Certified Machine Learning - Specialty",
    description: "Validated expertise in building, training, tuning, and deploying machine learning models on AWS using various services like SageMaker, while understanding ML frameworks and best practices.",
    date: "August 2024",
  },
  {
    image: awsSaa, // Replace with your image URL or path
    title: "AWS Certified Solutions Architect - Associate",
    description: "Proven skills in designing scalable, reliable, and cost-effective cloud architectures on AWS, including selecting appropriate AWS services to meet specific technical requirements and best practices.",
    date: "February 2024",
  },
  {
    image: awsCcp, // Replace with your image URL or path
    title: "AWS Certified Cloud Practitioner",
    description: "Demonstrated foundational knowledge of AWS cloud concepts, services, and architecture, enabling the ability to effectively implement cloud solutions and understand AWS billing and pricing models.",
    date: "March 2022",
  },
];

const Certifications = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen content">
      <h1 className="text-4xl font-bold mb-8 text-center">Certifications</h1>
      <div className="flex flex-wrap justify-center">
        {certifications.map((certification, index) => (
          <CertificationCard
            key={index}
            image={certification.image}
            title={certification.title}
            description={certification.description}
            date={certification.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
