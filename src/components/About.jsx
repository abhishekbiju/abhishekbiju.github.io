import React, { useEffect, useState,useRef } from "react";
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
        I'm a rising senior studying Computer Science, Data Science & Math at the <a 
          href="https://www.wisc.edu" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
          University of Wisconsin-Madison
        </a>. 
        I like spending my time immersed in software and data to build elegant solutions that empower us. During my degree, I have had the chance to intern at Safeguard L.L.C, flydubai, Datafortune Software Solutions, and TNIE. 
        I find beauty in simplicity and am enamored by minimalistic design and innovation. I also currently serve as the Vice President of the Google Developer Student Club - UW Madison Chapter(<a 
          href="https://gdsc.community.dev/university-of-wisconsi-madison-united-states" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
        GDSC
        </a>). In my leisure time, I enjoy weightlifting, reading, music, and watching sports.
        If you want to chat and discuss opportunities, feel free to reach out to me at <a className="text-blue-500 hover:underline"> abhibiju03@gmail.com</a>
      </p>
      
      {/* Books Section */}
<h2 className="text-3xl font-bold mt-8 mb-4">books</h2>
<p className="text-lg mb-4">
  Here are some of my favorite books that have inspired and influenced me in various ways!
</p>
<ul className="list-disc list-inside text-lg space-y-4">
  <li>
    <strong>Deep Work - Cal Newport</strong>
    <p className="text-gray-600">
      I love this book because it emphasizes the importance of focused, distraction-free work for achieving peak productivity. It has significantly changed how I approach my daily tasks.
      <a href="https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">
        Buy on Amazon
      </a>
    </p>
  </li>
  <li>
    <strong>Atomic Habits - James Clear</strong>
    <p className="text-gray-600">
      This book is a fantastic guide on building good habits and breaking bad ones. I appreciate its practical advice and actionable steps that can lead to remarkable personal growth.
      <a href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">
        Buy on Amazon
      </a>
    </p>
  </li>
  <li>
    <strong>Can't Hurt Me - David Goggins</strong>
    <p className="text-gray-600">
      Goggins' story is incredibly inspiring, teaching resilience and the power of pushing past limits. This book motivates me to challenge myself and never settle for less.
      <a href="https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512287" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">
        Buy on Amazon
      </a>
    </p>
  </li>
  <li>
    <strong>Deep Utopia - Nick Bostrom</strong>
    <p className="text-gray-600">
      A thought-provoking exploration of the future of humanity and technology, this book helps me think critically about the ethical implications of advancements in AI and biotechnology.
      <a href="https://www.amazon.com/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0199678111" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">
        Buy on Amazon
      </a>
    </p>
  </li>
  <li>
    <strong>The Millionaire Fastlane - MJ DeMarco</strong>
    <p className="text-gray-600">
      This book offers a unique perspective on wealth creation, challenging traditional ideas about financial success. It encourages entrepreneurial thinking and unconventional strategies for achieving financial independence.
      <a href="https://www.amazon.com/Millionaire-Fastlane-Crack-Wealth-Lifetime/dp/0984358102" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">
        Buy on Amazon
      </a>
    </p>
  </li>
</ul>
    </div>
  );
};

export default About;
