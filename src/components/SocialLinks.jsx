// src/components/SocialLinks.jsx
import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "./SocialLinks.css"; // Import the CSS file for styling

const SocialLinks = () => {
  return (
    <div className="social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://www.linkedin.com/in/abhishek-biju-das-a112b718b/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/abhiii.b"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/abhishekbiju"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
