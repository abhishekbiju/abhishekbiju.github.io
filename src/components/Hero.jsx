import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile-img.png';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[100px] md:blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-[100px] md:blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 z-10 w-full mt-10 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm mb-3 md:mb-4"
                    >
                        Hi, I'm Abhishek
                    </motion.p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
                        Data Engineer with <br className="hidden sm:block" />
                        <span className="text-gradient">AI expertise</span>.
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto md:mx-0">
                        Helping deliver fast, reliable insights for high-throughput financial decision-making through scalable systems, data engineering, and agentic AI. Let's build something amazing together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto px-4 md:px-0">
                        <Link to="projects" smooth={true} duration={500} offset={-80} className="w-full sm:w-auto">
                            <button className="w-full px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-lg hover:shadow-cyan-500/25">
                                View Work
                            </button>
                        </Link>
                        <a href="abhishek_biju_das_resume.pdf" download className="w-full sm:w-auto">
                            <button className="w-full px-8 py-3 glass text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                                Resume
                            </button>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0"
                >
                    <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl md:blur-3xl opacity-30 animate-pulse" />
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
