import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ─── Fixed Helpers ──────────────────────────────────────────────────────────
const MaskReveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <div ref={ref} className={`overflow-hidden py-2 -my-2 ${className}`}>
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
    <span ref={ref} className={`inline-flex items-baseline ${className}`}>
      {words.map((word, i) => (
        // Added extra bottom padding (pb-4) to prevent 'y' clipping
        <span key={i} className="inline-block overflow-hidden mr-[0.15em] pt-2 mt-[-0.5rem] pb-5 -mb-5">
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
    // Fixed padding for italic tails
    <span ref={ref} className="inline-block overflow-hidden pt-2 mt-[-0.5rem] pb-5 -mb-5 px-1 -mx-1">
      <motion.span
        className={`inline-block leading-none ${className}`}
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

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const servicesData = [
    { id: "01", title: "Full-Stack Development", desc: "Building scalable, end-to-end web applications using the MERN stack.", tags: ["React", "Node.js", "MongoDB", "Express"] },
    { id: "02", title: "Frontend Engineering", desc: "Crafting pixel-perfect, highly interactive user interfaces.", tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { id: "03", title: "Backend & Database Architecture", desc: "Designing secure and optimized server-side systems.", tags: ["PostgreSQL", "Prisma", "MongoDB", "JWT"] },
    { id: "04", title: "UI/UX & Interactive Design", desc: "Bridging the gap between design and engineering.", tags: ["Figma", "Wireframing", "Prototyping"] },
    { id: "05", title: "API Development & Integration", desc: "Developing robust, well-documented RESTful and GraphQL APIs.", tags: ["RESTful APIs", "GraphQL", "Stripe"] },
    { id: "06", title: "Performance & SEO Optimization", desc: "Auditing and optimizing web applications for maximum speed.", tags: ["Lighthouse", "SEO", "Webpack", "Vite"] }
  ];

  return (
    <section id="services" className="relative w-full bg-white text-gray-900 py-32 px-6 sm:px-12 lg:px-20 z-40 overflow-hidden">
      
      <div className="absolute top-[0%] left-[-10%] w-[50vw] h-[50vw] bg-[#00bfff]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[0%] right-[-10%] w-[40vw] h-[40vw] bg-[#00bfff]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <MaskReveal className="mb-4 sm:mb-6">
              <p className="font-stylish text-3xl sm:text-4xl text-gray-400 hover:text-gray-900 transition-colors duration-300">
                What I Do
              </p>
            </MaskReveal>

            {/* 🔥 Fixed Clipping & Reduced Gap (gap-x-2) */}
            <h2 className="font-playfair text-5xl sm:text-6xl lg:text-[6rem] leading-[1.1] font-bold text-gray-900 tracking-tight flex items-baseline flex-wrap gap-x-2">
              <WordMaskReveal text="My" baseDelay={0.1} />
              <InlineWordReveal delay={0.3} className="italic font-light text-gray-400 hover:text-gray-900 transition-colors duration-300">
                Services
              </InlineWordReveal>
            </h2>
          </div>
          
          <MaskReveal delay={0.5}>
            <p className="font-sans text-gray-500 text-sm sm:text-base max-w-sm">
              I help brands and businesses stand out in the digital era. Together we will set the new status quo.
            </p>
          </MaskReveal>
        </div>

        {/* ACCORDION LIST */}
        <div className="w-full flex flex-col border-t border-gray-200" onMouseLeave={() => setActiveIndex(null)}>
          {servicesData.map((service, index) => (
            <div key={service.id} className="group border-b border-gray-200 overflow-hidden cursor-pointer" onMouseEnter={() => setActiveIndex(index)}>
              <div className="w-full py-8 sm:py-12 px-4 flex items-center justify-between relative z-10">
                <div className="flex items-baseline gap-6 sm:gap-12">
                  <MaskReveal delay={index * 0.1} className="w-8">
                    <span className={`font-sans text-sm sm:text-lg font-medium transition-colors duration-500 ${activeIndex === index ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-900'}`}>
                      {service.id}
                    </span>
                  </MaskReveal>
                  <MaskReveal delay={index * 0.1 + 0.1}>
                    <h3 className={`font-playfair text-3xl sm:text-5xl lg:text-7xl font-semibold tracking-tight transition-all duration-500 transform origin-left ${activeIndex === index ? 'text-gray-900 translate-x-2 sm:translate-x-6' : 'text-gray-900 group-hover:text-gray-900 group-hover:translate-x-2 sm:group-hover:translate-x-6'}`}>
                      {service.title}
                    </h3>
                  </MaskReveal>
                </div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}>
                    <div className="pb-12 pl-12 sm:pl-[5.5rem] pr-4 sm:pr-12 max-w-4xl flex flex-col gap-6">
                      <p className="font-sans text-base sm:text-xl text-gray-500 leading-relaxed">{service.desc}</p>
                      <div className="flex flex-wrap gap-3 mt-2">
                        {service.tags.map((tag, i) => (
                          <span key={i} className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 px-4 py-2 rounded-full border border-gray-200 bg-gray-50">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;