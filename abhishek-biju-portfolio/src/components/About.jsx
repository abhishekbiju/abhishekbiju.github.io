import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import { Link } from "react-router-dom";

const About = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const text = paragraphRef.current;
    const keywords = [
      "Software Developer",
      "Data Scientist",
      "Machine Learning Researcher",
    ];

    // Wrap the word "Spiderman" in a span
    let paragraphHTML = text.innerHTML;
    const spidermanRegex = new RegExp("\\bSpiderman\\b", "gi");
    paragraphHTML = paragraphHTML.replace(
      spidermanRegex,
      `<span class="spiderman">Spiderman</span>`
    );

    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi");
      paragraphHTML = paragraphHTML.replace(
        regex,
        `<span class="keyword">${keyword}</span>`
      );
    });

    text.innerHTML = paragraphHTML;

    const spidermanElement = document.querySelector(".spiderman");
    console.log(spidermanElement);
    const spidermanAnnotation = annotate(spidermanElement, {
      type: "strike-through",
      color: "#03a9f4",
      animationDuration: 500,
    });

    spidermanAnnotation.show();

    // Delay the execution of the next annotations until the strike-through is complete
    setTimeout(() => {
      const annotations = document.querySelectorAll(".keyword");
      annotations.forEach((annotation, index) => {
        const highlight = annotate(annotation, {
          type: "underline",
          color: "#fe4f4a",
          animationDuration: 1000,
          multiline: true,
        });
        setTimeout(() => {
          highlight.show();
        }, index * 1500); // Delay each annotation by 1.5 seconds
      });
    }, 1500); // Wait for the strike-through animation to complete
  }, []);

  return (
    <div className="p-8 bg-white text-black">
      <h1 className="text-4xl font-bold mb-4">about</h1>
      <p ref={paragraphRef} className="text-lg">
        I'm your friendly neighborhood Spiderman , Software Developer, Data
        Scientist and Machine Learning Researcher. I spend my time immersed in
        software and data to build elegant solutions that empower us. I'm an
        undergraduate student studying Computer Science, Data Science & Math at
        the University of Wisconsin-Madison. Other times you can catch me at the
        gym, watching Formula 1 or football, or reading a good book. I find
        beauty in simplicity and am enamored by minimalistic design and
        innovation. If you want to chat about software, sports, or music, feel
        free to contact me!
      </p>
    </div>
  );
};

export default About;
