// src/pages/Projects.jsx
import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  // Sample data for projects - replace with your actual projects
  const projects = [
        {
      title: "Knowledge Distillation ML Research",
      description: "Pursuing project focused on implementing knowledge-distilled/teacher-student architectures using the seminal polynomial neural network, MONet (Multilinear Operator Networks) to train smaller, computationally efficient models to deliver comparable or better model accuracy.",
      date: "August 2024",
      // Replace with your actual GitHub repo URL
    },
    {
      title: "SkySight",
      description: "A flight delay prediction tool using machine learning, a product of comprehensive research and development to deliver impressive prediction accuracies.",
      date: "July 2023",
      githubUrl: "https://github.com/abhishekbiju/flight-delay-predictions-using-ML", // Replace with your actual GitHub repo URL
    },
    {
      title: "Dash's Nemesis",
      description: "A thrilling 2D single-player battle royale game coded in Python, featuring strategic gameplay, special power moves, and leaderboard tracking.",
      date: "May 2021",
      githubUrl: "https://github.com/abhishekbiju/Dash-s-Nemesis", // Replace with your actual GitHub repo URL
    },
    {
      title: "botanIQ : Plant Identifier",
      description: "A web application that uses AI to identify plants from images. Users can either upload an image or take a picture directly using their device's camera, and the app provides detailed information about the plant, including its common name, scientific name, description, growing conditions, and care tips in an aesthetic user interface.",
      date: "August 2024",
      githubUrl: "https://github.com/abhishekbiju/botanIQ-plant-identifier", // Replace with your actual GitHub repo URL
    },
        {
      title: "Portfolio Website",
      description: "This website!",
      date: "June 2024",
    },
        {
      title: "FocusFuse (In progress)",
      description: "FocusFuse is a Google Chrome extension that lets you focus on the tasks you need to do, your perfect productivity companion.",
      date: "December 2023",
      githubUrl: "https://github.com/abhishekbiju/focusfuse-chrome-extension", // Replace with your actual GitHub repo URL
    },
    // Add more projects as needed
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen content">
      <h1 className="text-4xl font-bold mb-8 text-center">projects</h1>
      <div className="flex flex-col items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            date={project.date}
            githubUrl={project.githubUrl} // Pass the GitHub URL to ProjectCard
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
