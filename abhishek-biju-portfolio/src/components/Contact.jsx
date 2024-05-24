import React from "react";
import ContactForm from "./ContactForm";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { annotate } from "rough-notation";
const Contact = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const text = paragraphRef.current;
    const keywords = ["Github", "LinkedIn", "Instagram"];

    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi");
      text.innerHTML = text.innerHTML.replace(
        regex,
        `<span class="keyword">${keyword}</span>`
      );
    });

    const annotations = document.querySelectorAll(".keyword");
    annotations.forEach((annotation, index) => {
      const highlight = annotate(annotation, {
        type: "underline",
        color: "#fe4f4a",
        animationDuration: 1000, // Duration of each annotation animation
      });
      setTimeout(() => {
        highlight.show();
      }, index * 1500); // Delay each annotation by 2 seconds
    });
  }, []);

  return (
    <>
      <div className="p-8 bg-white text-black">
        <h1 className="text-4xl font-bold mb-4">contact me</h1>
        <p ref={paragraphRef} className="text-lg">
          If you're looking to chat about anything or just want to say hi, feel
          free to shoot me an email, or reach out to me on my socials
        </p>
      </div>
      <div>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
