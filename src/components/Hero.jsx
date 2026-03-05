import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile-img.png';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary font-medium tracking-wider uppercase text-sm mb-4"
                    >
                        Hi, I'm Abhishek
                    </motion.p>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                        Data Engineer with <br />
                        <span className="text-gradient">AI expertise</span>.
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0">
                        Helping deliver fast, reliable insights for high-throughput financial decision-making through scalable systems, data engineering, and agentic AI. Let's build something amazing together.
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <Link to="projects" smooth={true} duration={500} offset={-80}>
                            <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-lg hover:shadow-cyan-500/25">
                                View Work
                            </button>
                        </Link>
                        <a href="abhishek_biju_resume.pdf" download>
                            <button className="px-8 py-3 glass text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                                Resume
                            </button>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex justify-center md:justify-end"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse" />
                        <img
                            src={profileImg}
                            alt="Abhishek Biju"
                            className="relative z-10 w-full h-full object-contain filter drop-shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
