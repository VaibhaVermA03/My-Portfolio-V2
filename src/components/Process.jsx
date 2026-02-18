import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";

// ─── Masked Text Reveal Helpers (Same as your code) ──────────────────────────
const MaskReveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <div ref={ref} className={`overflow-hidden py-1 -my-1 ${className}`}>
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const WordMaskReveal = ({ text, baseDelay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const words = text.split(" ");
  return (
    <span ref={ref} className={`inline-flex items-baseline flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] py-2 -my-2">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{
              duration: 0.85,
              delay: baseDelay + i * 0.07,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const InlineWordReveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <span ref={ref} className="inline-block overflow-hidden py-2 -my-2 px-1 -mx-1">
      <motion.span
        className={`inline-block leading-normal ${className}`}
        initial={{ y: "110%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
        transition={{ duration: 0.85, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.span>
    </span>
  );
};

// ─────────────────────────────────────────────────────────────────────────────

const Process = () => {
  const targetRef = useRef(null);

  // Isse hum track karte hain ki cards kab center mein hain
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Cards move after the header has scrolled away
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

  const processSteps = [
    { id: "01", title: "Discovery & Strategy", desc: "Every great project starts with listening. I dive deep into your requirements and business goals.", tags: ["Tech Stack", "Architecture", "Market Research"] },
    { id: "02", title: "Design & Prototyping", desc: "Before writing code, I craft wireframes and pixel-perfect UI/UX designs for a premium feel.", tags: ["Figma", "UI/UX", "Prototyping"] },
    { id: "03", title: "Full-Stack Development", desc: "I engineer robust backend APIs and build fluid frontends with React using modern practices.", tags: ["MERN", "Scalability", "Clean Code"] },
    { id: "04", title: "Testing & Refinement", desc: "I rigorously test for bugs and performance until the experience is buttery smooth.", tags: ["QA", "Optimization", "Speed"] },
    { id: "05", title: "Deployment & Handoff", desc: "Time to go live. I handle deployment to cloud platforms and provide full documentation.", tags: ["Vercel", "Launch", "SEO"] }
  ];

  const ProcessCard = ({ step }) => (
    <div className="w-[85vw] sm:w-[500px] lg:w-[650px] h-[55vh] sm:h-[480px] shrink-0 relative rounded-[2rem] bg-white/80 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] overflow-hidden group flex flex-col p-8 sm:p-14 hover:shadow-[0_20px_50px_rgba(0,191,255,0.08)] transition-all duration-500">
      <div className="absolute -bottom-10 -right-4 text-[10rem] sm:text-[14rem] font-playfair font-bold text-gray-100 leading-none pointer-events-none group-hover:text-gray-200 transition-colors duration-700 select-none z-0">
        {step.id}
      </div>
      <div className="relative z-10 flex flex-col h-full">
        <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#00bfff] mb-4 sm:mb-6 block">Phase {step.id}</span>
        <h3 className="font-playfair text-3xl sm:text-5xl font-semibold text-gray-900 mb-6 leading-tight">{step.title}</h3>
        <p className="font-sans text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">{step.desc}</p>
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
          {step.tags.map((tag, i) => (
            <span key={i} className="font-sans text-[10px] sm:text-[xs] font-bold uppercase tracking-widest text-gray-400 px-4 py-2 rounded-full border border-gray-100 bg-white/50">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="process" className="relative w-full bg-gray-50 z-40">
      
      {/* 1. Header is now OUTSIDE the sticky container to scroll normally first */}
      <div className="pt-32 pb-16 px-6 sm:px-12 lg:px-20 relative z-20 w-full bg-gray-50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <MaskReveal className="mb-2">
              <p className="font-stylish text-3xl sm:text-4xl text-gray-400">The Workflow</p>
            </MaskReveal>
            <h2 className="font-playfair text-5xl sm:text-7xl lg:text-[6rem] leading-[1.1] font-bold text-gray-900 tracking-tight flex items-baseline flex-wrap gap-x-2">
              <WordMaskReveal text="My" baseDelay={0.1} />
              <InlineWordReveal delay={0.3} className="italic font-light text-gray-400">
                Process
              </InlineWordReveal>
            </h2>
          </div>
          <div className="hidden sm:block">
            <MaskReveal delay={0.5}>
              <p className="font-sans text-gray-500 text-sm sm:text-base max-w-xs md:text-right leading-relaxed">
                A streamlined approach to turning bold ideas into digital realities.
              </p>
            </MaskReveal>
          </div>
        </div>
      </div>

      {/* 2. Scrolling Track - Yeh tab sticky hoga jab cards center mein honge */}
      <div ref={targetRef} className="relative h-[450vh] w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          
          {/* Background Glows moved inside sticky */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[30%] left-[-10%] w-[40vw] h-[40vw] bg-[#00bfff]/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[30%] right-[-10%] w-[50vw] h-[50vw] bg-[#00bfff]/10 blur-[150px] rounded-full"></div>
          </div>

          {/* Cards Container - Items Center fixed clipping */}
          <div className="relative z-10 w-full flex items-center h-full pt-10 pb-10">
            <motion.div 
              style={{ x }} 
              className="flex gap-8 sm:gap-16 px-6 sm:px-12 lg:px-20 w-max items-center"
            >
              {processSteps.map((step) => (
                <ProcessCard key={step.id} step={step} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;