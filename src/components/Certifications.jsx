import React from "react";
import { motion } from "framer-motion";
import { FaAws, FaSnowflake, FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "AWS Certified Machine Learning - Specialty",
    url: "https://www.credly.com/badges/d7eac67b-07b4-4298-bede-5b1f7348b54f/linked_in_profile",
    icon: <FaAws className="text-[#FF9900]" size={32} />
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    url: "https://www.credly.com/badges/9126524a-7406-470f-a0d7-2aa568278415/linked_in_profile",
    icon: <FaAws className="text-[#FF9900]" size={32} />
  },
  {
    title: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/badges/b9e309d3-78ee-4403-8c1b-b79b718b1500/linked_in_profile",
    icon: <FaAws className="text-[#FF9900]" size={32} />
  },
  {
    title: "Snowflake Certified SnowPro Core",
    url: "https://achieve.snowflake.com/7985f096-212a-422c-beb1-ff4e783f5b81",
    icon: <FaSnowflake className="text-[#29B5E8]" size={32} />
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 md:px-12 pt-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-primary text-2xl">04.</span> Certifications
          <div className="h-px bg-white/10 flex-1 ml-4" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-6 rounded-xl flex items-center gap-6 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="shrink-0 bg-surface p-4 rounded-full shadow-inner border border-white/5 group-hover:border-white/20 transition-colors">
                {cert.icon || <FaCertificate className="text-accent" size={32} />}
              </div>
              <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                {cert.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;