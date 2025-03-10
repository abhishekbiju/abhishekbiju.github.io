import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    // Select all elements with the .orgLink class and apply rough-notation underline on hover
    const orgLinks = document.querySelectorAll(".orgLink");
    orgLinks.forEach((link) => {
      const highlight = annotate(link, {
        type: "highlight",
        color: "#b0b0b0",
        animationDuration: 700,
        multiline: true,
        iterations: 1,
      });
      link.addEventListener("mouseenter", () => highlight.show());
      link.addEventListener("mouseleave", () => highlight.hide());
    });
  }, []);

  return (
    <div className="p-8 bg-white text-black content">
      <h1 className="text-4xl font-bold mb-4">about</h1>
      
      <p ref={aboutRef} className="text-lg">
        Senior @{" "}
        <a
          href="https://www.wisc.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="orgLink"
        >
          UW–Madison
        </a>{" "}
        in Computer Science, Data Science &amp; Math. Former Intern @{" "}
        <a
          href="https://www.safe-guardproducts.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="orgLink"
        >
          Safeguard
        </a>
        ,{" "}
        <a
          href="https://www.flydubai.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="orgLink"
        >
          Flydubai
        </a>
        ,{" "}
        <a
          href="https://datafortune.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="orgLink"
        >
          Datafortune
        </a>{" "}
        &amp;{" "}
        <a
          href="https://www.newindianexpress.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="orgLink"
        >
          The New Indian Express
        </a>
        . I like software, 
        <a
          href="https://www.goodreads.com/abhishekbiju"
          target="_blank"
          rel="noopener noreferrer"
          className="orgLink"
        >
        {" "}books 
        </a>
        {" "}&amp;
        <a
          href="https://letterboxd.com/abhishekbijudas/"
          target="_blank"
          rel="noopener noreferrer"
          className="orgLink"
        >
        {" "}films 
        </a>
        {" "}that make me think. Reach me at{" "}
        <span className="font-medium">abhibiju03 [at] gmail [dot] com</span>.
      </p>
    </div>
  );
};

export default About;
