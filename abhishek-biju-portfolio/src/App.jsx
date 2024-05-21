// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <SocialLinks />
          <Footer />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
