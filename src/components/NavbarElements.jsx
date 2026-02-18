import React from 'react';
import { motion } from 'framer-motion';

const NavbarElements = () => {
  const links = ['About', 'Work', 'Services'];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed top-0 left-0 w-full z-40 flex justify-end items-center px-4 sm:px-8 py-6 bg-white/50 backdrop-blur-md border-b border-white/60 shadow-sm"
    >

      {/* Desktop Center Links */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-700">
        {links.map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="relative group">
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <div className="flex md:hidden gap-4 text-xs font-semibold uppercase">
          {links.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>

        <motion.a 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          href="#contact" 
          className="group relative hidden md:flex items-center justify-center px-8 py-3 rounded-full border border-gray-900 bg-transparent overflow-hidden cursor-pointer w-fit"
        >
          {/* Circle Fill Animation */}
          <span className="absolute inset-0 w-full h-full bg-gray-900 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-in-out origin-center"></span>
          
          <span className="relative z-10 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-900 group-hover:text-white transition-colors duration-500 delay-75">
            Let's Talk
          </span>
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default NavbarElements;
