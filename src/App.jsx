// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import About from "./components/About";
import Certifications from "./components/Certifications";
import "./App.css"; // Import the CSS file for styling

function App() {
  return (
    <div>
      <Navbar />
      <div id="main-content" className="main-content">
        <MainContent />
      </div>
      <div className="content-columns">
        <div id="about">
          <About />
        </div>
        <div id="certifications">
          <Certifications />
        </div>
      </div>
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
