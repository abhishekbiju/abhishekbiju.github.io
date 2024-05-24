// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <SocialLinks />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
