import React, { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const AnimatedCounter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" }); 
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, ""); 

  useEffect(() => {
    if (isInView && numericValue > 0) {
      const controls = animate(count, numericValue, {
         duration: 2.5,
         ease: [0.22, 1, 0.36, 1] 
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <div ref={ref} className="flex flex-col space-y-3 group">
      {/* Counter Value */}
      <div className="overflow-hidden pb-2 -mb-2">
        <motion.span 
          initial={{ y: "100%" }}
          animate={isInView ? { y: 0 } : { y: "100%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair text-5xl lg:text-6xl text-gray-900 group-hover:-translate-y-2 transition-transform duration-300 ease-out flex"
        >
          {value === "∞" ? "∞" : <><motion.span>{rounded}</motion.span>{suffix}</>}
        </motion.span>
      </div>
      
      {/* Label with Masked Reveal */}
      <div className="overflow-hidden pb-1 -mb-1">
        <motion.span 
          initial={{ y: "100%" }}
          animate={isInView ? { y: 0 } : { y: "100%" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="block font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-gray-500"
        >
          {label}
        </motion.span>
      </div>
    </div>
  );
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
        delayChildren: 0.2
      }
    }
  };

  // Child Variant 
  const itemVariants = {
    hidden: { y: "110%" }, 
    visible: { 
      y: 0, 
      transition: { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] } 
    }
  };

  const stats = [
    { value: "05+", label: "Full Stack Projects" },
    { value: "1500+", label: "Hours Coding" },
    { value: "02+", label: "Years of Experience" },
    { value: "∞", label: "Dedication" },
  ];

  return (
    <section id="about" className="relative z-30 min-h-screen w-full bg-white py-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center">
      
      {/* ABSTRACT BACKGROUND GRADIENTS */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#00bfff]/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#00bfff]/10 blur-[100px] pointer-events-none z-0"></div>

      {/* Main Trigger Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24"
      >
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          
          {/* 1. The Philosophy */}
          <div className="overflow-hidden mb-8 lg:mb-12 p-2 -m-2">
            <motion.p variants={itemVariants} className="font-stylish text-3xl sm:text-4xl text-gray-400 hover:text-gray-900 transition-colors duration-300 origin-bottom-left block">
              The Philosophy
            </motion.p>
          </div>
          
          {/* 2. Main Headline (Line by Line Reveal) */}
          <h2 className="font-playfair text-5xl sm:text-6xl lg:text-[5rem] leading-[1.1] font-semibold text-gray-900 tracking-tight">
             <div className="overflow-hidden pb-4 -mb-4 pt-4 -mt-4">
                <motion.span variants={itemVariants} className="block">
                   I engineer
                </motion.span>
             </div>
             
             <div className="overflow-hidden pb-4 -mb-4 pt-4 -mt-4">
                 <motion.span variants={itemVariants} className="block">
                    <span className="italic font-light text-gray-400 hover:text-gray-900 transition-colors duration-500">aesthetic</span> digital
                 </motion.span>
             </div>

             <div className="overflow-hidden pb-4 -mb-4 pt-4 -mt-4">
                <motion.span variants={itemVariants} className="block">
                   experiences backed
                </motion.span>
             </div>

             <div className="overflow-hidden pb-4 -mb-4 pt-4 -mt-4 pr-4 -mr-4">
                <motion.span variants={itemVariants} className="block">
                   by robust <span className="italic font-light text-gray-400 hover:text-gray-900 transition-colors duration-500">MERN</span>
                </motion.span>
             </div>

             <div className="overflow-hidden pb-4 -mb-4 pt-4 -mt-4">
                <motion.span variants={itemVariants} className="block">
                   architectures.
                </motion.span>
             </div>
          </h2>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-[45%] flex flex-col gap-16 lg:pt-24">
          
          {/* Paragraph (Masked Reveal) */}
          <div className="overflow-hidden p-2 -m-2">
            <motion.div variants={itemVariants}>
              <p className="text-gray-600 font-sans text-lg sm:text-xl leading-relaxed">
                Development isn't just about writing code; it's about solving problems elegantly. 
                Based in Delhi NCR, my approach is minimalist yet deeply functional - stripping away the unnecessary so the core user experience can shine.
              </p>
            </motion.div>
          </div>

          {/* 2x2 Stats Grid (Animated Numbers + Masked Labels) */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-gray-200 pt-12">
            {stats.map((stat, index) => (
               <AnimatedCounter key={index} value={stat.value} label={stat.label} />
            ))}
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default About;