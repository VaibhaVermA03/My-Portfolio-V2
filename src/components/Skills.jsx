import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Skills = () => {
  const targetRef = useRef(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const xTop = useTransform(smoothProgress, [0, 1], ["calc(0% + 5vw)", "calc(-100% + 95vw)"]);
  const xBottom = useTransform(smoothProgress, [0, 1], ["calc(-100% + 95vw)", "calc(0% + 5vw)"]);

  // PARENT VARIANTS
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Words ke liye thoda fast stagger
        delayChildren: 0.1
      }
    }
  };

  // CHILD VARIANTS (Masked Reveal)
  const itemVariants = {
    hidden: { y: "150%" },
    visible: { 
      y: 0, 
      transition: { duration: 1.6, ease: [0.6, 0.01, 0.05, 0.9] } 
    }
  };

  const skillsData = [
    // Frontend
    { name: "React", level: "Expert", percent: 90, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", level: "Expert", percent: 85, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", level: "Intermediate", percent: 75, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Tailwind", level: "Expert", percent: 95, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Framer", level: "Intermediate", percent: 70, img: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
    { name: "Redux", level: "Intermediate", percent: 75, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
    { name: "HTML5", level: "Expert", percent: 95, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", level: "Expert", percent: 90, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    // Backend & Tools
    { name: "Node.js", level: "Intermediate", percent: 80, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express", level: "Intermediate", percent: 80, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "MongoDB", level: "Intermediate", percent: 75, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", level: "Beginner", percent: 60, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Prisma", level: "Intermediate", percent: 70, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
    { name: "Git", level: "Expert", percent: 90, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "GitHub", level: "Expert", percent: 90, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Figma", level: "Intermediate", percent: 75, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  ];

  const topRowSkills = skillsData.slice(0, 8);
  const bottomRowSkills = skillsData.slice(8, 16);

  // Helper text for mobile split
  const textWords = "Tools and Technologies I use to build intuitive web experiences.".split(" ");

  const SkillCard = ({ skill }) => (
    <div className="w-[280px] h-[160px] sm:w-[360px] sm:h-[200px] shrink-0 relative rounded-[1.5rem] bg-gray-50 border border-gray-200 overflow-hidden group flex flex-col p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="absolute -bottom-4 -right-4 w-32 h-32 sm:w-40 sm:h-40 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none">
        <img src={skill.img} alt={skill.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" />
      </div>
      <div className="relative z-10 flex justify-between items-start w-full">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center justify-center p-2 sm:p-3 group-hover:scale-110 transition-transform duration-500">
          <img src={skill.img} alt={skill.name} className="w-full h-full object-contain" />
        </div>
        <span className="font-sans text-xs sm:text-sm font-bold text-gray-900 mt-2">
          {skill.percent}%
        </span>
      </div>
      <div className="relative z-10 w-full mt-auto flex flex-col gap-3">
        <div className="flex items-end justify-between">
          <h3 className="font-playfair text-xl sm:text-2xl font-bold text-gray-900 leading-none">
            {skill.name}
          </h3>
          <span className="font-sans text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            {skill.level}
          </span>
        </div>
        <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: `${skill.percent}%` }} 
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }} 
            viewport={{ once: true }}
            className="h-full bg-gray-900 rounded-full"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="relative w-full max-w-[100vw] bg-gradient-to-br from-white via-gray-50 to-white z-40">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#00bfff]/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#00bfff]/10 blur-[100px]"></div>
      </div>

      {/* 1. HEADER */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="pt-24 pb-8 px-6 sm:px-12 lg:px-20 relative z-10 w-full text-left"
      >
        <div className="w-full">
          
          {/* Subtitle Mask */}
          <div className="overflow-hidden mb-4 sm:mb-6 p-2 -m-2">
            <motion.p variants={itemVariants} className="font-stylish text-3xl sm:text-4xl text-gray-400 hover:text-gray-900 transition-colors duration-300 origin-bottom-left block">
              My Skills
            </motion.p>
          </div>
          
          {/* Main Heading Container */}
          <h2 className="font-playfair font-semibold text-gray-900 tracking-tight">
            
            {/* 🔥 MOBILE LAYOUT: Word-by-Word Animation for Perfect Flow */}
            {/* flex-wrap ensures it fits ANY screen width perfectly without side gaps */}
            <div className="flex flex-wrap gap-x-[0.3em] gap-y-1 lg:hidden text-4xl leading-[1.15]">
               {textWords.map((word, index) => (
                  <div key={index} className="overflow-hidden pb-3 -mb-3 pt-3 -mt-3">
                     <motion.span variants={itemVariants} className="inline-block">
                        {/* Styling logic for italic words */}
                        {(word === "Tools" || word === "Technologies") ? (
                           <span className="italic font-light text-gray-400">{word}</span>
                        ) : (
                           word
                        )}
                     </motion.span>
                  </div>
               ))}
            </div>

            {/* 🔥 DESKTOP LAYOUT: 2-Line Structured Layout */}
            <div className="hidden lg:block text-[4.5rem] leading-[1.1]">
               <div className="overflow-hidden pb-4 -mb-4 pt-4 -mt-4">
                 <motion.span variants={itemVariants} className="block">
                   <span className="italic font-light text-gray-400 hover:text-gray-900 transition-colors duration-300">Tools</span> and <span className="italic font-light text-gray-400 hover:text-gray-900 transition-colors duration-300">Technologies</span> I use to build
                 </motion.span>
               </div>
               <div className="overflow-hidden pb-4 -mb-4 pt-4 -mt-4">
                 <motion.span variants={itemVariants} className="block">
                   intuitive web experiences.
                 </motion.span>
               </div>
            </div>

          </h2>
        </div>
      </motion.div>

      {/* 2. STICKY SCROLL TRACK */}
      <div ref={targetRef} className="relative h-[400vh] w-full touch-pan-y">
        <div className="sticky top-0 h-[100dvh] sm:h-screen w-full flex flex-col justify-center overflow-hidden">
          <motion.div style={{ x: xTop }} className="flex gap-6 sm:gap-8 px-6 sm:px-12 lg:px-20 w-max relative z-10">
            {topRowSkills.map((skill, index) => (
               <SkillCard key={`top-${index}`} skill={skill} />
            ))}
          </motion.div>
          <motion.div style={{ x: xBottom }} className="flex gap-6 sm:gap-8 px-6 sm:px-12 lg:px-20 w-max mt-6 sm:mt-10 relative z-10">
            {bottomRowSkills.map((skill, index) => (
               <SkillCard key={`bottom-${index}`} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default Skills;