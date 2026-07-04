import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
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
      {visible && (
        <motion.button
          id="floating-back-to-top"
          onClick={scrollToTop}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-24 right-6 z-40 bg-cream-dark hover:bg-gold-muted border border-wheat-base hover:border-gold-muted text-cocoa-dark p-3.5 rounded-full shadow-md hover:shadow-lg focus:outline-none transition-all cursor-pointer flex items-center justify-center group"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
          
          {/* Tooltip on Hover */}
          <span className="absolute right-14 bg-cocoa-dark text-cream-base text-[10px] font-bold tracking-wider px-2.5 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap uppercase">
            Back to Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
