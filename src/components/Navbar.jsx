// src/components/Navbar.jsx
import React, { useRef, useEffect } from "react";
import { annotate } from "rough-notation";
import { Link } from "react-router-dom";

const Navbar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const certificationsRef = useRef(null);
  const experiencesRef = useRef(null); // New ref for Experiences

  useEffect(() => {
    const annotateElement = (elementRef) => {
      const annotation = annotate(elementRef.current, {
        type: "box",
        color: "#fe4f4a",
      });
      elementRef.current.addEventListener("mouseenter", () =>
        annotation.show()
      );
      elementRef.current.addEventListener("mouseleave", () =>
        annotation.hide()
      );
      return annotation;
    };

    const homeAnnotation = annotateElement(homeRef);
    const aboutAnnotation = annotateElement(aboutRef);
    const workAnnotation = annotateElement(workRef);
    const certificationsAnnotation = annotateElement(certificationsRef);
    const experiencesAnnotation = annotateElement(experiencesRef); // New annotation for Experiences

    return () => {
      homeAnnotation.remove();
      aboutAnnotation.remove();
      workAnnotation.remove();
      certificationsAnnotation.remove();
      experiencesAnnotation.remove(); // Clean up the new annotation
    };
  }, []);

  return (
    <nav className="flex justify-center p-4 bg-white text-black border-b border-gray-200">
      <ul className="flex gap-8 font-semibold">
        <li ref={homeRef}>
          <Link to="/" className="">
            home
          </Link>
        </li>
        <li ref={aboutRef}>
          <Link to="/about" className="">
            about
          </Link>
        </li>
        <li ref={workRef}>
          <Link to="/projects" className="">
            projects
          </Link>
        </li>
        <li ref={certificationsRef}>
          <Link to="/certifications" className="">
            certifications
          </Link>
        </li>
        <li ref={experiencesRef}>
          <Link to="/experiences" className="">
            experiences
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
