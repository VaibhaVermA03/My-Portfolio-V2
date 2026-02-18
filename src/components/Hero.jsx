import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };

  const revealVariant = {
    hidden: { y: "150%" },
    visible: (customDelay) => ({
      y: 0,
      transition: { ...transition, delay: customDelay }
    })
  };

  return (
    <section id='home' className="relative min-h-[100svh] md:min-h-[100svh] w-full flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden">
      
      {/* TOP LEFT SECTION */}
      <div className="flex flex-col items-start text-left relative z-20 w-full max-w-5xl">
        
        {/* 1. Creative */}
        <div className="overflow-hidden mb-2 sm:mb-4 p-4 -m-4 pr-4 -mr-4">
          <motion.p 
            custom={0} 
            initial="hidden"
            animate="visible"
            variants={revealVariant}
            className="font-stylish text-5xl sm:text-6xl text-gray-900 origin-bottom-left"
          >
            Creative
          </motion.p>
        </div>
        
        {/* 2. Main Heading */}
        <h1 className="font-playfair text-6xl sm:text-8xl lg:text-[8rem] font-semibold text-gray-900 leading-[1.1] tracking-[-0.02em]">
          
          {/* Line 1: Full Stack */}
          <div className="overflow-hidden pb-6 -mb-6 pt-4 -mt-4">
            <motion.div
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={revealVariant}
            >
              Full Stack
            </motion.div>
          </div>
          
          {/* Line 2: Web Developer */}
          <div className="overflow-hidden pb-6 -mb-6 pt-4 -mt-4 pr-8 -mr-8">
            <motion.div
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={revealVariant}
              className="italic font-light text-gray-900"
            >
              Web Developer
            </motion.div>
          </div>
        </h1>
      </div>

      {/* BOTTOM SECTION */}
      <div className="w-full flex flex-col md:flex-row justify-between items-end relative z-20 mt-auto gap-8 md:gap-0 pt-12 sm:pt-0">
        
        {/* LEFT SIDE: Button */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ ...transition, delay: 1.2 }}
        >
          <a 
            href="#contact" 
            className="group relative flex items-center justify-center px-10 py-4 rounded-full border border-gray-900 bg-transparent overflow-hidden cursor-pointer w-fit"
          >
            <span className="absolute inset-0 w-full h-full bg-gray-900 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-in-out origin-center"></span>
            
            <span className="relative z-10 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-gray-900 group-hover:text-white transition-colors duration-500 delay-75">
              Start a Project
            </span>
          </a>
        </motion.div>

        {/* RIGHT SIDE: Subtitle */}
        <div className="flex flex-col items-end text-right">
            
            <div className="overflow-hidden pb-2 -mb-2">
                <motion.p
                    custom={0.8}
                    initial="hidden"
                    animate="visible"
                    variants={revealVariant}
                    className="font-playfair italic font-light text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-tight"
                >
                    Crafting Robust
                </motion.p>
            </div>

            <div className="overflow-hidden pb-2 -mb-2">
                <motion.p
                    custom={1.0}
                    initial="hidden"
                    animate="visible"
                    variants={revealVariant}
                    className="font-playfair italic font-light text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-tight"
                >
                    MERN Experiences,
                </motion.p>
            </div>

            <div className="overflow-hidden pb-2 -mb-2">
                <motion.p
                    custom={1.2}
                    initial="hidden"
                    animate="visible"
                    variants={revealVariant}
                    className="font-playfair italic font-light text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-tight"
                >
                    Based in Delhi NCR.
                </motion.p>
            </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
