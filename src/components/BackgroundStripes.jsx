import React from 'react';
import { motion } from 'framer-motion';

const BackgroundStripes = ({ isIntro }) => {
  const stripesConfig = [
    { id: 1, hHero: 80, zIndex: 10 },
    { id: 2, hHero: 70, zIndex: 20 },
    { id: 3, hHero: 60, zIndex: 30 },
    { id: 4, hHero: 50, zIndex: 40 }, 
    { id: 5, hHero: 40, zIndex: 50, mobile: true }, 
    { id: 6, hHero: 30, zIndex: 60, mobile: true }, 
    { id: 7, hHero: 20, zIndex: 70, mobile: true },
    { id: 8, hHero: 30, zIndex: 60, mobile: true }, 
    { id: 9, hHero: 40, zIndex: 50, mobile: true }, 
    { id: 10, hHero: 50, zIndex: 40 }, 
    { id: 11, hHero: 60, zIndex: 30 },
    { id: 12, hHero: 70, zIndex: 20 },
    { id: 13, hHero: 80, zIndex: 10 },
  ];

  const transitionSettings = {
    duration: 1.5,
    ease: "easeInOut"
  };

  return (
    <div className="absolute inset-0 z-0 flex justify-center pointer-events-none w-full h-full overflow-hidden">
      {stripesConfig.map((stripe, index) => {
        return (
          <div 
            key={stripe.id} 
            className={`relative flex-1 h-full ${!stripe.mobile ? 'hidden sm:block' : 'block'} 
              ${index !== 0 ? '-ml-[1%]' : ''} 
            `}
            style={{ zIndex: stripe.zIndex }}
          >

            {/* HERO GLASS BLOCKS (Mountain, Bottom Aligned) */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ 
                y: isIntro ? '100%' : '0%',
                opacity: isIntro ? 0 : 0.4 
              }}
              transition={transitionSettings}
              style={{ height: `${stripe.hHero}%`, bottom: 0 }}
              className="absolute w-full bg-gradient-to-t from-[#00bfff] to-[#f0ffff] border-x border-white/20 shadow-[4px_0_10px_rgba(0,0,0,0.05)] backdrop-blur-[2px]"
            />
            
          </div>
        );
      })}
    </div>
  );
};

export default BackgroundStripes;