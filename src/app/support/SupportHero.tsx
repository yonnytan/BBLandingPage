import React from 'react';
import { motion } from 'framer-motion';

const SupportHero = () => {
  return (
    <section 
      className="pt-20 pb-20 md:pt-5 md:pb-10 overflow-x-clip"
      style={{
        background: `radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mt-6">
          <span className="bg-clip-text text-transparent" 
            style={{
              backgroundImage: 'linear-gradient(to right, #183EC2, black)'
            }}
          >
            Support
          </span>
        </h1>
        <motion.div 
          className="mt-8 bg-white/20 rounded-xl p-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl text-white">
            Need help? Our support team is here for you!
          </p>
          <a 
            href="mailto:admin@beatbytes.app" 
            className="mt-4 inline-block px-6 py-3 bg-white text-[#183EC2] rounded-full font-bold hover:bg-[#EAEEFE] transition-colors"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportHero;