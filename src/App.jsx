// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certifications from "./components/Certifications";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects/>}/>
          <Route path="/certifications" element ={<Certifications/>} />
          <Route path="/experiences" element ={<Experiences/>} />
        </Routes>
        <SocialLinks />
      </Router>
    </div>
  );
}

export default App;
