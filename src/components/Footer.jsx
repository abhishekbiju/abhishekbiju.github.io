import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 text-center text-gray-500 border-t border-white/10 mt-20">
      <p className="text-sm">© {new Date().getFullYear()} Abhishek Biju. Built with React & Tailwind.</p>
    </footer>
  );
};

export default Footer;
