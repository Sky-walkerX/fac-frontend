'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative glass-card w-14 h-14 rounded-full border border-primary/30 hover:border-primary/60 transition-all duration-300 flex items-center justify-center group overflow-hidden"
            aria-label="Scroll to top"
          >
            {/* Progress ring */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="2"
              />
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="rgb(59, 130, 246)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 24}`}
                strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
                className="transition-all duration-300"
              />
            </svg>
            
            {/* Arrow icon */}
            <ArrowUp className="h-5 w-5 text-primary group-hover:text-white transition-colors relative z-10" />
            
            {/* Hover background */}
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 rounded-full transition-colors"></div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
