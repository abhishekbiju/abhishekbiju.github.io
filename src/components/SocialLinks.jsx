// src/components/SocialLinks.jsx
import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="fixed bottom-4 left-4">
      <ul className="flex gap-4">
        <li>
          <a
            href="https://www.linkedin.com/in/abhishek-biju-das-a112b718b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-gray-400"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/abhiii.b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-gray-400"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/abhishekbiju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
