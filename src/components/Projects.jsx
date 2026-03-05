import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Knowledge Distillation ML Research",
      description: "Pursuing project focused on implementing knowledge-distilled/teacher-student architectures using the seminal polynomial neural network, MONet (Multilinear Operator Networks) to train smaller, computationally efficient models to deliver comparable or better model accuracy.",
      date: "August 2024",
    },
    {
      title: "SkySight",
      description: "A flight delay prediction tool using machine learning, a product of comprehensive research and development to deliver impressive prediction accuracies.",
      date: "July 2023",
      githubUrl: "https://github.com/abhishekbiju/flight-delay-predictions-using-ML",
    },
    {
      title: "botanIQ: Plant Identifier",
      description: "A web application that uses AI to identify plants from images. Users can either upload an image or take a picture directly using their device's camera, and the app provides detailed information about the plant.",
      date: "August 2024",
      githubUrl: "https://github.com/abhishekbiju/botanIQ-plant-identifier",
    },
    {
      title: "FocusFuse",
      description: "FocusFuse is a Google Chrome extension that lets you focus on the tasks you need to do, your perfect productivity companion.",
      date: "December 2023",
      githubUrl: "https://github.com/abhishekbiju/focusfuse-chrome-extension",
    },
    {
      title: "Dash's Nemesis",
      description: "A thrilling 2D single-player battle royale game coded in Python, featuring strategic gameplay, special power moves, and leaderboard tracking.",
      date: "May 2021",
      githubUrl: "https://github.com/abhishekbiju/Dash-s-Nemesis",
    },
    {
      title: "Portfolio Website",
      description: "This visually stunning, responsive React portfolio built with modern aesthetics.",
      date: "June 2024",
    },
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 md:px-12 pt-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-primary text-2xl">03.</span> Projects
          <div className="h-px bg-white/10 flex-1 ml-4" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-4xl text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                  <FaExternalLinkAlt size={28} />
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <div className="flex-1">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <p className="font-mono text-xs text-secondary mt-6 font-medium tracking-wide">
                {project.date}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
