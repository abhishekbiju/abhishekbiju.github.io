// src/components/Navbar.jsx
import React, { useRef, useEffect } from "react";
import { annotate } from "rough-notation";
import { Link } from "react-scroll";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const certificationsRef = useRef(null);

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
    const certificationsAnnotation = annotateElement(certificationsRef);

    return () => {
      homeAnnotation.remove();
      aboutAnnotation.remove();
      certificationsAnnotation.remove();
    };
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li ref={homeRef} className="navbar-item">
          <Link to="main-content" smooth={true} duration={500}>
            home
          </Link>
        </li>
        <li ref={aboutRef} className="navbar-item">
          <Link to="about" smooth={true} duration={500}>
            about
          </Link>
        </li>
        <li ref={certificationsRef} className="navbar-item">
          <Link to="certifications" smooth={true} duration={500}>
            certifications
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;