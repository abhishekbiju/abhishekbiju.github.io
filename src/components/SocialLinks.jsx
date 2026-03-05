import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed bottom-0 left-6 md:left-12 z-50 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-white/20 after:mt-2"
    >
      <ul className="flex flex-col gap-6 items-center">
        <li>
          <a
            href="https://www.linkedin.com/in/abhishekbijudas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors hover:-translate-y-1 block duration-300"
          >
            <FaLinkedinIn size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/abhiii.b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors hover:-translate-y-1 block duration-300"
          >
            <FaInstagram size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/abhishekbiju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors hover:-translate-y-1 block duration-300"
          >
            <FaGithub size={20} />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default SocialLinks;
