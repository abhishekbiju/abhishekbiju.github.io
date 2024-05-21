import React, { useRef, useEffect } from "react";
import { annotate } from "rough-notation";

const Navbar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const annotateElement = (elementRef) => {
      const annotation = annotate(elementRef.current, {
        type: "highlight",
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
    const contactAnnotation = annotateElement(contactRef);

    return () => {
      homeAnnotation.remove();
      aboutAnnotation.remove();
      workAnnotation.remove();
      contactAnnotation.remove();
    };
  }, []);

  return (
    <nav className="flex justify-end p-4 bg-white text-black">
      <ul className="flex gap-4">
        <li ref={homeRef}>Home</li>
        <li ref={aboutRef}>About</li>
        <li ref={workRef}>Works</li>
        <li ref={contactRef}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
