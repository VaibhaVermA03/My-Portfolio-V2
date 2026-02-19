import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ─── Masked Text Reveal Helpers  ─────────────────
const MaskReveal = ({ children, delay = 0, duration = 0.9, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <div ref={ref} className={`overflow-hidden pb-[2px] ${className}`}>
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
        transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
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
    <span ref={ref} className={`inline ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.15em] pb-[2px]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{ duration: 0.85, delay: baseDelay + i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
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
    <span ref={ref} className="inline-block overflow-hidden pb-[2px]">
      <motion.span
        className={`inline-block ${className}`}
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

const Projects = ({ setExternalPopupState }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Body scroll lock
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      if (setExternalPopupState) setExternalPopupState(true);
    } else {
      document.body.style.overflow = "auto";
      if (setExternalPopupState) setExternalPopupState(false);
    }

    const navbar = document.querySelector("nav") || document.querySelector("header") || document.querySelector(".navbar");
    const logo = document.querySelector(".fixed") || document.querySelector("[class*='logo']");

    if (selectedProject) {
      if (navbar) { navbar.style.opacity = "0"; navbar.style.pointerEvents = "none"; }
      if (logo) { logo.style.opacity = "0"; logo.style.pointerEvents = "none"; }
    } else {
      if (navbar) { navbar.style.opacity = "1"; navbar.style.pointerEvents = "auto"; }
      if (logo) { logo.style.opacity = "1"; logo.style.pointerEvents = "auto"; }
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject, setExternalPopupState]);

  const projectsData = [
    { id: 1, 
      name: "Garvit Gems & Jewels", 
      shortDesc: "Premium E-commerce platform for fine jewelry.", 
      fullDesc: "A luxurious and high-performance e-commerce platform built for Garvit Gems & Jewels. Features include an interactive product catalog, secure checkout, and a seamless administrative dashboard for inventory management.", 
      img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop", 
      tech: ["React", "Node.js", "MongoDB", "Tailwind"], 
      features: ["Interactive 360° product viewer", "Secure payment gateway", "Real-time inventory dashboard"], 
      metrics: { duration: "3 months", role: "Full Stack Developer", year: "2024" }, 
      links: { live: "#", github: "#" } },

    { id: 2, 
      name: "Jagruk", 
      shortDesc: "Smart Community Issue Reporting & Resolution.", 
      fullDesc: "A full-stack platform designed to empower citizens and local authorities. Users can report community issues, upvote problems, and track resolution progress in real-time.", 
      img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2000&auto=format&fit=crop", 
      tech: ["MERN Stack", "Express", "Redux", "Figma"], 
      features: ["Geolocation-based issue reporting", "Real-time voting system", "Admin dashboard"], 
      metrics: { duration: "4 months", role: "Lead Developer", year: "2024" }, 
      links: { live: "#", github: "#" } },

    { id: 3, 
      name: "NaukriSetu", 
      shortDesc: "Comprehensive Job Portal with custom dashboards.", 
      fullDesc: "A feature-rich job portal connecting job seekers with top employers. Includes recruiter & candidate dashboards and advanced filtering.", 
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop", 
      tech: ["React", "Node.js", "PostgreSQL", "AWS"], 
      features: ["AI-powered job matching", "Dual dashboard system", "Resume parser"], 
      metrics: { duration: "5 months", role: "Full Stack Developer", year: "2023" }, 
      links: { live: "#", github: "#" } },

    { id: 4, 
      name: "Perf Dash", 
      shortDesc: "Attendance and Performance Analyzer.", 
      fullDesc: "An analytical dashboard for schools and colleges to track attendance and academic performance.", 
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000&auto=format&fit=crop", 
      tech: ["MERN Stack", "Chart.js", "Tailwind"], 
      features: ["Interactive data visualization", "Automated attendance tracking", "Parent-teacher portal"], 
      metrics: { duration: "2 months", role: "Frontend Developer", year: "2023" }, 
      links: { live: "#", github: "#" } },

    { id: 5, 
      name: "Portfolio Website", 
      shortDesc: "Awwwards-inspired personal portfolio.", 
      fullDesc: "My personal digital space engineered to showcase philosophy, skills, and projects with complex scroll animations.", 
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop", 
      tech: ["React", "Framer Motion", "Tailwind CSS"], 
      features: ["Smooth scroll animations", "Responsive design", "Dark/light mode toggle"], 
      metrics: { duration: "1 month", role: "Designer & Developer", year: "2024" }, 
      links: { live: "#", github: "#" } },
  ];

  return (
    <section id="work" className="relative z-30 w-full bg-white pt-12 sm:pt-16 lg:pt-24 pb-0 px-4 sm:px-12 lg:px-20 text-gray-900 overflow-visible">
      {/* HEADER  */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mb-12 lg:mb-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="w-full lg:w-2/3">
            <MaskReveal delay={0} className="mb-3 lg:mb-4">
              <p className="font-stylish text-2xl sm:text-3xl lg:text-4xl text-gray-400 hover:text-gray-900 transition-colors duration-300 text-left">Projects I've Built</p>
            </MaskReveal>
            <h2 className="font-playfair text-[1.8rem] sm:text-4xl lg:text-[4.5rem] leading-[1.35] sm:leading-[1.2] lg:leading-[1.08] font-semibold text-gray-900 tracking-[-0.015em] text-left break-words">
              <WordMaskReveal text="The Projects I've built to solve" baseDelay={0.1} />{" "}
              <InlineWordReveal delay={0.62} className="italic font-light text-gray-400 hover:text-gray-900 transition-colors duration-700">real-world</InlineWordReveal>{" "}
              <WordMaskReveal text="problems and showcase my" baseDelay={0.72} />{" "}
              <InlineWordReveal delay={1.05} className="italic font-light text-gray-400 hover:text-gray-900 transition-colors duration-700">skills</InlineWordReveal>
              <InlineWordReveal delay={1.12}>.</InlineWordReveal>
            </h2>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-1 group w-full lg:w-auto">
            <MaskReveal delay={0.25}><span className="font-sans text-[10px] sm:text-[11px] lg:text-[13px] font-bold uppercase tracking-[0.4em] lg:tracking-[0.5em] text-gray-400 text-center lg:text-right block">Selected Works</span></MaskReveal>
            <MaskReveal delay={0.4}><p className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-light italic text-gray-200 group-hover:text-gray-900 transition-colors duration-700 text-center lg:text-right">2023-26</p></MaskReveal>
          </div>
        </div>
      </div>

      {/* STACK CONTAINER  */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col">
        {projectsData.map((project, index) => (
          <div key={project.id} className="sticky w-full bg-white border-t border-l border-r border-gray-200 rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_-2px_15px_rgba(0,0,0,0.04)] flex flex-col overflow-hidden" 
          style={{ 
            top: `15vh`, 
            height: "80vh", 
            zIndex: 10 + index, 
            marginBottom: "40vh" }}>
            <div className="w-full h-full flex flex-col lg:flex-row">
              <div className="w-full lg:w-[45%] h-[50%] lg:h-full flex flex-col p-5 sm:p-12 lg:p-14 bg-white relative z-10 order-last lg:order-first overflow-y-auto custom-scrollbar">
                <div className="flex items-center mb-2 lg:mb-8"><span className="font-playfair text-5xl sm:text-8xl lg:text-[8rem] font-bold text-gray-200 leading-none tracking-tighter">{String(index + 1).padStart(2, "0")}</span></div>
                <div className="mt-1 lg:mt-6"><h3 className="font-playfair text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-2 lg:mb-6">{project.name}</h3><p className="font-sans text-gray-600 text-xs sm:text-base lg:text-lg leading-relaxed font-light max-w-md">{project.shortDesc}</p></div>
                <div className="mt-auto pt-6 lg:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2 max-w-[60%] hidden sm:flex">{project.tech.slice(0, 3).map((t, i) => (<span key={i} className="font-sans text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t}{i < 2 && " • "}</span>))}</div>
                  <button onClick={() => setSelectedProject(project)} className="group relative px-8 py-3.5 lg:py-4 bg-gray-900 rounded-full overflow-hidden shadow-xl active:scale-95 transition-all w-full sm:w-auto text-center shrink-0">
                    <span className="relative z-10 font-sans text-xs font-bold uppercase tracking-widest text-white transition-colors group-hover:text-gray-900">Learn More</span>
                    <div className="absolute inset-0 h-full w-full bg-white scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></div>
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-[55%] h-[50%] lg:h-full p-3 lg:p-4 lg:pl-0 order-first lg:order-last">
                <div className="w-full h-full rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-inner" onClick={() => setSelectedProject(project)}>
                  <div className="absolute inset-0 bg-gray-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={project.img} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full h-[50vh] pointer-events-none" aria-hidden="true" />
      </div>

      {/* ── 3. POPUP MODAL (LENIS COMPATIBLE) ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-white/95 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* 🔥 POPUP CONTENT: Added data-lenis-prevent and overflow fixes */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              data-lenis-prevent
              className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-6xl bg-white sm:rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.15)] z-10 overflow-y-auto overflow-x-hidden custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-6 left-[calc(100%-4rem)] z-[999] w-12 h-12 bg-white/90 backdrop-blur-md rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors shadow-xl"
              >
                ✕
              </button>

              <div className="relative -mt-16">
                <div className="relative h-48 sm:h-64 lg:h-[50vh] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-10" />
                  <img src={selectedProject.img} alt={selectedProject.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 z-20">
                    <h3 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4">{selectedProject.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, i) => (<span key={i} className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-600 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest">{t}</span>))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-12 text-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
                  <div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">Overview</h4>
                    <p className="font-sans text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 font-light mb-10">{selectedProject.fullDesc}</p>
                    <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-8">
                      <div><span className="font-sans text-[10px] font-bold text-gray-400 block mb-2 uppercase tracking-widest">Year</span><p className="font-sans text-base font-semibold text-gray-900">{selectedProject.metrics.year}</p></div>
                      <div><span className="font-sans text-[10px] font-bold text-gray-400 block mb-2 uppercase tracking-widest">Role</span><p className="font-sans text-base font-semibold text-gray-900">{selectedProject.metrics.role}</p></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">Key Features</h4>
                      <ul className="space-y-4 mb-10">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-4"><span className="text-gray-900 mt-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"></path></svg></span><span className="font-sans text-base text-gray-600 font-medium">{feature}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                      <a href={selectedProject.links.live} className="flex-1 py-5 bg-gray-900 text-white text-center font-bold uppercase text-[10px] tracking-[0.2em] rounded-full hover:bg-black transition-all shadow-xl">Launch Project</a>
                      <a href={selectedProject.links.github} className="flex-1 py-5 border border-gray-200 text-gray-900 text-center font-bold uppercase text-[10px] tracking-[0.2em] rounded-full hover:border-gray-900 transition-all">View Source</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;