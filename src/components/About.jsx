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
        duration: 2.8,
        ease: [0.16, 1, 0.3, 1] // smoother cinematic ease
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <div ref={ref} className="flex flex-col space-y-3 group">
      
      {/* Counter Value */}
      <div className="overflow-hidden">
        <motion.span
          initial={{ y: "120%" }}
          animate={isInView ? { y: 0 } : { y: "120%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="block font-playfair text-4xl sm:text-5xl lg:text-6xl text-gray-900 pb-[0.2em]"
        >
          {value === "∞" ? "∞" : <><motion.span>{rounded}</motion.span>{suffix}</>}
        </motion.span>
      </div>

      {/* Label */}
      <div className="overflow-hidden">
        <motion.span
          initial={{ y: "120%" }}
          animate={isInView ? { y: 0 } : { y: "120%" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="block font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-gray-500 pb-[0.15em]"
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
        staggerChildren: 0.18,
        delayChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { y: "120%" },
    visible: {
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const stats = [
    { value: "05+", label: "Full Stack Projects" },
    { value: "1500+", label: "Hours Coding" },
    { value: "02+", label: "Years of Experience" },
    { value: "∞", label: "Dedication" },
  ];

  return (
    <section
      id="about"
      className="relative z-30 w-full bg-white py-20 px-5 sm:px-10 lg:px-20 overflow-x-hidden"
    >
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] rounded-full bg-[#00bfff]/5 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full bg-[#00bfff]/10 blur-[100px] pointer-events-none -z-10"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-24"
      >
        
        {/* LEFT */}
        <div className="w-full lg:w-[55%]">
          
          <div className="overflow-hidden mb-8">
            <motion.p
              variants={itemVariants}
              className="block font-stylish text-2xl sm:text-3xl md:text-4xl text-gray-400 hover:text-gray-900 transition-colors duration-300 pb-[0.2em]"
            >
              The Philosophy
            </motion.p>
          </div>

          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.15] font-semibold text-gray-900 tracking-tight break-words">
            
            {[
              "I engineer",
              <>
                <span className="italic font-light text-gray-400 hover:text-gray-900 transition-colors duration-500">
                  aesthetic
                </span>{" "}
                digital
              </>,
              "experiences backed",
              <>
                by robust{" "}
                <span className="italic font-light text-gray-400 hover:text-gray-900 transition-colors duration-500">
                  MERN
                </span>
              </>,
              "architectures."
            ].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  variants={itemVariants}
                  className="block pb-[0.2em]"
                >
                  {line}
                </motion.span>
              </div>
            ))}

          </h2>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[45%] flex flex-col gap-12 lg:pt-20">
          
          <div className="overflow-hidden">
            <motion.div variants={itemVariants}>
              <p className="text-gray-600 font-sans text-base sm:text-lg md:text-xl leading-relaxed pb-[0.2em]">
                Development isn't just about writing code; it's about solving problems elegantly.
                Based in Delhi NCR, my approach is minimalist yet deeply functional -
                stripping away the unnecessary so the core user experience can shine.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-gray-200 pt-10">
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
