import React, { useEffect, useState } from "react";
import Lenis from "lenis"; // 🔥 Step 1: Import Native Lenis
import {
  motion,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion";

import BackgroundStripes from "./components/BackgroundStripes";
import NavbarElements from "./components/NavbarElements";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"; 
import Services from "./components/Services";
import Process from "./components/Process";
import Footer from "./components/Footer";

function App() {
  const [isIntro, setIsIntro] = useState(true);

  /* ================= SMOOTH SCROLL (LENIS CORE) ================= */
  // 🔥 Step 2: Scroll Logic (Logic change zero hai, bas smooth function add kiya hai)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.1,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  /* ================= INTRO TIMER ================= */
  useEffect(() => {
    const timer = setTimeout(() => setIsIntro(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Text Morphing Physics 
  const logoTransition = {
    layout: { type: "spring", stiffness: 55, damping: 18, mass: 1.1 },
  };

  return (
    <LayoutGroup>
      <div className="relative min-h-screen bg-white text-black font-sans">

        {/* ================= LOGO INTRO & MORPHING ================= */}
        <AnimatePresence>
          {isIntro ? (
            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center bg-white"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                layoutId="main-logo"
                transition={logoTransition}
                className="text-6xl md:text-8xl font-stylish"
              >
                Vaibhav Verma
              </motion.h1>
            </motion.div>
          ) : (
            /* 🔥 Logo Alignment Fixed: Vertically centered to match Navbar height */
            <motion.div
              className="fixed left-6 sm:left-12 z-[60] h-[72px] sm:h-[84px] flex items-center top-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.h1
                layoutId="main-logo"
                transition={logoTransition}
                className="text-2xl sm:text-3xl font-stylish cursor-pointer leading-none"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                Vaibhav Verma
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {!isIntro && <NavbarElements />}

        {/* ================= MAIN CONTENT ================= */}
        
        {/* HERO */}
        <div className="relative z-10 w-full h-[100dvh] sm:h-screen overflow-hidden bg-white">
          <BackgroundStripes isIntro={isIntro} />
          {!isIntro && <Hero />}
        </div>

        {/* ABOUT */}
        <div className="relative z-10 w-full bg-white">
          {!isIntro && <About />}
        </div>

        {/* SKILLS */}
        <div className="relative z-10 w-full bg-white">
          <div className="absolute inset-0 bg-white z-0 pointer-events-none" />
          <div className="relative z-10">
            {!isIntro && <Skills />}
          </div>
        </div>

        {/* PROJECTS */}
        <div className="relative z-10 w-full bg-white">
          {!isIntro && <Projects />} 
        </div>

        <div className="relative z-10 w-full max-w-[100vw]">
          {!isIntro && <Services />}
        </div>

        <div className="relative z-10 w-full max-w-[100vw]">
          {!isIntro && <Process />}
        </div>

        <div className="relative z-10 w-full max-w-[100vw]">
          {!isIntro && <Footer />}
        </div>

      </div>
    </LayoutGroup>
  );
}

export default App;