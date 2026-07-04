import { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-app-footer" className="bg-cream-dark border-t border-wheat-light py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Trademark & Brand */}
          <div className="text-center md:text-left">
            <span className="font-serif-display text-xl font-bold text-cocoa-dark block mb-2">
              Sweet Crumbs
            </span>
            <p className="text-cocoa-pale font-sans-body text-xs tracking-wider">
              © 2024 Sweet Crumbs Artisanal Bakery. Handcrafted with love.
            </p>
          </div>

          {/* Navigation and Utility links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-widest text-cocoa-medium">
            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="hover:text-gold-muted flex items-center gap-1.5 transition-colors duration-300 cursor-pointer focus:outline-none"
            >
              Back to Top <ArrowUp className="h-3 w-3" />
            </button>
            <button
              id="footer-privacy-btn"
              onClick={() => setShowPrivacy(true)}
              className="hover:text-gold-muted transition-colors duration-300 cursor-pointer focus:outline-none"
            >
              Privacy Policy
            </button>
            <button
              id="footer-terms-btn"
              onClick={() => setShowTerms(true)}
              className="hover:text-gold-muted transition-colors duration-300 cursor-pointer focus:outline-none"
            >
              Terms of Service
            </button>
            <button
              id="footer-contact-btn"
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-gold-muted transition-colors duration-300 cursor-pointer focus:outline-none"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cocoa-dark/60 backdrop-blur-sm">
            <motion.div
              id="privacy-modal-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-cream-base border border-wheat-light max-w-2xl w-full rounded-lg p-6 sm:p-8 max-h-[80vh] overflow-y-auto shadow-xl"
            >
              <h3 className="font-serif-display text-2xl font-bold text-cocoa-dark mb-4">Privacy Policy</h3>
              <div className="space-y-4 text-sm text-cocoa-medium font-sans-body leading-relaxed">
                <p>
                  At Sweet Crumbs, we are committed to protecting your privacy. This policy details how we handle the information you submit via our online inquiry forms.
                </p>
                <h4 className="font-bold text-cocoa-dark mt-4">1. Information We Collect</h4>
                <p>
                  When you submit a contact or cake inquiry, we collect your name, email address, and message details to fulfill your request. We do not store or use cookies for tracking.
                </p>
                <h4 className="font-bold text-cocoa-dark mt-4">2. How We Use It</h4>
                <p>
                  We use your details strictly to respond to your queries, book consultation slots, and organize custom baking orders. We never sell or share your personal details with third parties.
                </p>
                <p className="text-xs text-cocoa-pale pt-4">
                  Last Updated: July 2026. For questions, contact us directly.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  id="close-privacy-btn"
                  onClick={() => setShowPrivacy(false)}
                  className="bg-cocoa-dark hover:bg-gold-muted hover:text-cocoa-dark text-cream-base font-sans-body text-xs font-bold tracking-widest px-6 py-2 rounded transition-all duration-300 cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Terms of Service Modal */}
      <AnimatePresence>
        {showTerms && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cocoa-dark/60 backdrop-blur-sm">
            <motion.div
              id="terms-modal-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-cream-base border border-wheat-light max-w-2xl w-full rounded-lg p-6 sm:p-8 max-h-[80vh] overflow-y-auto shadow-xl"
            >
              <h3 className="font-serif-display text-2xl font-bold text-cocoa-dark mb-4">Terms of Service</h3>
              <div className="space-y-4 text-sm text-cocoa-medium font-sans-body leading-relaxed">
                <p>
                  Welcome to Sweet Crumbs. By using our website, you agree to comply with and be bound by the following terms.
                </p>
                <h4 className="font-bold text-cocoa-dark mt-4">1. Order & Notice Requirements</h4>
                <p>
                  Standard daily items on the menu are subject to daily availability. All signature and custom cakes require a minimum of 24 to 48 hours notice.
                </p>
                <h4 className="font-bold text-cocoa-dark mt-4">2. Non-Transactional Policy</h4>
                <p>
                  Our Phase 1 digital storefront is non-transactional. No orders are placed directly on the site, and no payment card data is processed. All purchases are arranged via direct telephone or WhatsApp messaging with the bakery staff.
                </p>
                <h4 className="font-bold text-cocoa-dark mt-4">3. Allergens</h4>
                <p>
                  All our baked goods are made in a shared kitchen that processes dairy, wheat, eggs, and tree nuts. We are not liable for accidental allergen exposure.
                </p>
                <p className="text-xs text-cocoa-pale pt-4">
                  Last Updated: July 2026.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  id="close-terms-btn"
                  onClick={() => setShowTerms(false)}
                  className="bg-cocoa-dark hover:bg-gold-muted hover:text-cocoa-dark text-cream-base font-sans-body text-xs font-bold tracking-widest px-6 py-2 rounded transition-all duration-300 cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
