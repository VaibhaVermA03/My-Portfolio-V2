import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.19, 1.0, 0.22, 1.0] }
    }
  };

  const socials = [
    { name: 'GitHub', url: 'https://github.com/VaibhaVermA03' },
    { name: 'Twitter / X', url: 'https://x.com/VaIbHaVeRmA0307' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vaibhav-verma-a9624b252/' },
    { name: 'Instagram', url: 'https://www.instagram.com/vaibhav._verma._' }
  ];

  return (
    <footer id="contact" className="relative w-full bg-[#fcfcfc] text-gray-900 pt-32 pb-6 px-6 sm:px-12 lg:px-20 z-40 overflow-hidden">
      
      {/* Light Theme Blue Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-[#00bfff]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col min-h-[70vh] justify-between">
        
        {/* TOP SECTION: Split Layout (Left Typography, Right Message & CTA) */}
        <div className="flex flex-col lg:flex-row items-start justify-between w-full mt-12 mb-32 gap-16 lg:gap-8">
          
          {/* LEFT: Massive Left-Aligned Text */}
          <div className="flex flex-col items-start text-left lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-stylish text-4xl sm:text-5xl text-gray-500 mb-6 hover:text-gray-900 transition-colors duration-300 block"
            >
              What's Next?
            </motion.span>
            
            <div className="overflow-hidden pb-2">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.19, 1.0, 0.22, 1.0] }}
                className="font-playfair text-6xl sm:text-7xl lg:text-[8rem] leading-[0.9] font-bold text-gray-900 tracking-tighter"
              >
                Let's Work
              </motion.h2>
            </div>
            <div className="overflow-hidden pb-6">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.19, 1.0, 0.22, 1.0], delay: 0.1 }}
                className="font-playfair text-6xl sm:text-7xl lg:text-[8rem] leading-[0.9] font-bold tracking-tighter italic font-light text-gray-400 hover:text-gray-900 transition-colors duration-300"
              >
                Together.
              </motion.h2>
            </div>
          </div>

          {/* RIGHT: Personal Message & Button */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1.0, 0.22, 1.0] }}
            // 🔥 Updated: Added items-center and text-center to center content
            className="flex flex-col items-center text-center lg:w-5/12 lg:pt-16"
          >
            <h3 className="font-playfair text-3xl sm:text-4xl lg:text-5xl leading-[1.3] text-gray-800 font-medium mb-10">
              I'm always interested in cool stuff. Want me to create a project for you?
            </h3>
            
            {/* 🔥 Updated Button: Transparent bg, Black Fill on Hover, No Arrow */}
            <a 
              href="mailto:vaibhavverma0307@gmail.com"
              className="group relative flex items-center justify-center gap-4 bg-transparent border border-gray-900 text-gray-900 rounded-full px-8 py-4 sm:px-10 sm:py-5 overflow-hidden transition-all duration-500 hover:text-white hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1"
            >
              {/* Button Background Hover Fill (Black Color) */}
              <div className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              
              <span className="font-sans text-lg sm:text-xl font-semibold relative z-10">
                Get in touch
              </span>
            </a>
          </motion.div>

        </div>

        {/* MIDDLE SECTION: Grid Layout (Mobile: 2 Cols, Desktop: 3 Cols) */}
        {/* 🔥 Updated: grid-cols-2 for mobile */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-6 sm:gap-12 border-t border-gray-200 pt-16 relative z-20"
        >
          {/* Column 1: Links (Top Left on Mobile) */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h4 className="font-stylish text-2xl sm:text-3xl text-gray-400 hover:text-gray-900 transition-colors duration-300 mb-2">Explore</h4>
            {['Home', 'About', 'Skills', 'Work', 'Services', 'Process'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="font-sans text-base font-medium text-gray-900 hover:text-gray-900 hover:translate-x-2 transition-all duration-300 w-max">
                {link}
              </a>
            ))}
          </motion.div>
          
          {/* Column 2: Socials (Top Right on Mobile) */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h4 className="font-stylish text-2xl sm:text-3xl text-gray-400 hover:text-gray-900 transition-colors duration-300 mb-2">Socials</h4>
            {socials.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-sans text-base font-medium text-gray-900 hover:translate-x-2 transition-all duration-300 w-max"
              >
                {social.name}
              </a>
            ))}
          </motion.div>

          {/* Column 3: Contact (Bottom Full Width on Mobile) */}
          {/* 🔥 Updated: col-span-2 on mobile so it sits below in a new row */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <h4 className="font-stylish text-2xl sm:text-3xl text-gray-400 hover:text-gray-900 transition-colors duration-300 mb-2">Contact</h4>
            <a href="mailto:vaibhavverma0307@gmail.com" className="font-sans text-base font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 w-max relative group">
              vaibhavverma0307@gmail.com
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="tel:+918130675823" className="font-sans text-base font-medium text-gray-900 hover:text-gray-900 transition-colors duration-300 w-max mt-2">
              +91 8130675823
            </a>
          </motion.div>
        </motion.div>

        {/* BOTTOM SECTION: Copyright & Back to Top */}
        <div className="w-full mt-24 flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-200 relative z-20">
          <p className="font-sans text-sm font-medium text-gray-500 tracking-wide order-2 sm:order-1 mt-4 sm:mt-0">
            © 2026 Developed by Vaibhav Verma. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-gray-900 transition-colors duration-300 order-1 sm:order-2"
          >
            Back to top
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-y-1 transition-transform duration-300">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>

      </div>

      {/* MASSIVE CUTOFF WATERMARK (Font Stylish & Full Name) */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none z-0 translate-y-[35%]">
        <h1 className="font-stylish text-[18vw] sm:text-[14vw] lg:text-[11vw] text-gray-200 whitespace-nowrap tracking-tight pt-10">
          Vaibhav Verma
        </h1>
      </div>

    </footer>
  );
};

export default Footer;