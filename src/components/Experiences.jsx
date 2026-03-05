import React from "react";
import { motion } from "framer-motion";

const Experiences = () => {
  const experiences = [
    {
      company: "Dignifi",
      position: "Data Engineer",
      date: "May 2025 - Present",
      description: [
        "Spearheaded a database redesign—'LENS'—to centralize 12 core business systems, reducing latency for commercial risk reports by 80% and enabling real-time scalability for high-frequency financial data.",
        "Architected and administered AWS data infrastructure supporting 15+ ELT pipelines (dbt, Astro); optimized SQL transformations, improving data processing speed by 40% while maintaining 99.9% uptime and full data lineage.",
        "Architected a RAG-based Agentic AI workflow to automate data extraction from complex financial documents, reducing manual research time by 35% and improving data ingestion accuracy."
      ],
    },
    {
      company: "Capital One",
      position: "Software Engineer Intern",
      date: "Sep 2024 - Dec 2024",
      description: [
        "Contracted through Capital One to engineer a high-throughput, real-time fraud detection engine using a serverless AWS ecosystem (Lambda, DynamoDB, SQS, SNS) to identify and flag suspicious transactions with sub-second latency.",
        "Engineered a Front-Office style full-stack response system using React and Flask, providing real-time verification and 'human-in-the-loop' logic to mitigate fraudulent exposure during high-throughput transaction windows.",
        "Optimized enterprise scalability by implementing a decoupled, event-driven architecture using Java/Spring Boot and AWS, ensuring seamless horizontal scaling and secure integration with backend systems."
      ],
    },
    {
      company: "Safe-Guard Products International",
      position: "Software Engineer Intern",
      date: "May 2024 - Jul 2024",
      description: [
        "Built and deployed a fraud detection machine learning model in Snowflake, improving fraud detection accuracy by 17% and reducing manual review time by 35%.",
        "Utilized Python and SQL to automate data preprocessing workflows, reducing processing time by 25%."
      ],
    },
    {
      company: "UW-Madison College of Engineering",
      position: "Machine Learning Researcher",
      date: "Feb 2024 - May 2025",
      description: [
        "Collaborated in the Machine Learning and Optimization Research Lab to implement teacher-student architectures with polynomial neural networks (MONet) using Python and TensorFlow on GCP, improving algorithm efficiency and enabling deployment on resource-constrained edge devices."
      ],
    },
    {
      company: "Flydubai LLC",
      position: "Software Engineer Intern",
      date: "May 2023 - Aug 2023",
      description: [
        "Developed a predictive model for supply chain optimization at Flydubai, integrating complex aviation datasets to mitigate downtime-related costs by 13%.",
        "Architected and tuned large-scale SQL queries for 1,000,000-row datasets, achieving a 20% improvement in execution speed through indexing and schema optimization."
      ],
    },
  ];

  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 md:px-12 pt-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-display font-bold text-white mb-16 flex items-center gap-4">
          <span className="text-primary text-2xl">02.</span> Experience
          <div className="h-px bg-white/10 flex-1 ml-4" />
        </h2>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 group"
            >
              <div className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-white/10 group-last:bg-transparent" />
              <div className="absolute left-0 md:left-[8.5rem] w-3 h-3 bg-secondary rounded-full mt-1.5 -ml-1.5 border-4 border-background transition-colors group-hover:bg-primary z-10" />

              <div className="md:pl-48 flex flex-col md:flex-row gap-4 md:gap-12 relative">
                <div className="md:absolute md:left-0 md:w-32 md:text-right shrink-0">
                  <p className="text-sm text-gray-400 font-medium tracking-wide font-mono mt-1">{exp.date}</p>
                </div>
                <div className="w-full">
                  <h3 className="text-2xl font-display font-semibold text-white">{exp.position}</h3>
                  <h4 className="text-lg text-primary font-medium mb-6">{exp.company}</h4>
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 text-base leading-relaxed flex items-start gap-4">
                        <span className="text-accent mt-1.5 shrink-0">▹</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experiences;
