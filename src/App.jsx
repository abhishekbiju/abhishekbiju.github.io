import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-background min-h-screen text-gray-200 font-sans selection:bg-primary/30">
      <Navbar />
      <SocialLinks />
      <Hero />
      <main className="relative z-10 flex flex-col gap-32 pb-32">
        <About />
        <Experiences />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
