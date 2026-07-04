import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down 100px or 1.5 seconds
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const message = encodeURIComponent("Hello Sweet Crumbs! I am visiting your website and would like to ask a question.");

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          id="floating-whatsapp-btn"
          href={`https://wa.me/15551234567?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl focus:outline-none transition-shadow cursor-pointer flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          {/* Animated pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:hidden"></span>
          <MessageSquare className="h-6 w-6 relative z-10" />
          
          {/* Interactive Tooltip on Hover */}
          <span className="absolute right-14 bg-cocoa-dark text-cream-base text-[10px] font-bold tracking-wider px-2.5 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap uppercase">
            Chat with our Baker
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
