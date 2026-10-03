import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-12 pt-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-display font-bold text-white mb-8 flex items-center gap-4">
          <span className="text-primary text-2xl">01.</span> About Me
          <div className="h-px bg-white/10 flex-1 ml-4" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-gray-400 text-lg space-y-6 leading-relaxed">
            <p>
              Hey! I'm Abhishek. I'm an Embedded Software Engineer with a Bachelor of Science in Computer Science and Data Science from <span className="text-primary font-medium">UW–Madison</span>.
            </p>
            <p>
              I work in firmware and Linux internals — device drivers, bootloaders, and the line between kernel and userspace. The problems I care about live on the hardware: interrupts, memory maps, scheduling, and timing that has to hold once the software is on a device in the field. I'm on the fleet team at <span className="text-secondary font-medium">Axon</span>.
            </p>
            <p>
              Outside of coding, you'll find me lifting, playing guitars, or diving into books & films that make me think.
            </p>
            <p>
              Reach me at <span className="text-accent font-medium select-all">abhibiju03 [at] gmail [dot] com</span>.
            </p>
          </div>

          <div className="glass-card p-8 flex flex-col justify-center border-t-4 border-t-primary">
            <h3 className="text-2xl font-display font-semibold text-white mb-6">Core Focus</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
              {['Firmware', 'Linux Internals', 'Device Drivers', 'RTOS / Bare Metal', 'Bootloaders', 'Board Bring-up'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <span className="text-primary">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
