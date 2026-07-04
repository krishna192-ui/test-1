import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'MENU', id: 'menu' },
    { name: 'GALLERY', id: 'gallery' },
    { name: 'CUSTOM CAKES', id: 'custom-cakes' },
    { name: 'ABOUT US', id: 'about' },
    { name: 'TESTIMONIALS', id: 'testimonials' },
    { name: 'FAQ', id: 'faq' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-nav-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-base/95 backdrop-blur-md shadow-md py-3 border-b border-wheat-light'
          : 'bg-cream-base py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 text-left group cursor-pointer focus:outline-none"
          >
            <span className="font-serif-display text-2xl sm:text-3xl font-extrabold tracking-wide text-cocoa-dark group-hover:text-gold-muted transition-colors duration-300">
              Sweet Crumbs
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`desktop-nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`font-sans-body text-xs font-semibold tracking-widest transition-colors duration-300 cursor-pointer focus:outline-none py-1 relative ${
                  currentPage === link.id
                    ? 'text-gold-muted'
                    : 'text-cocoa-dark hover:text-gold-muted'
                }`}
              >
                {link.name}
                {currentPage === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-muted"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:block">
            <button
              id="desktop-order-now-btn"
              onClick={() => handleNavClick('menu')}
              className="bg-cocoa-dark text-cream-base hover:bg-gold-muted hover:text-cocoa-dark font-sans-body text-xs font-bold tracking-widest px-6 py-2.5 rounded transition-all duration-300 shadow-sm cursor-pointer"
            >
              ORDER NOW
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="text-cocoa-dark hover:text-gold-muted focus:outline-none p-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-cream-dark border-b border-wheat-light overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left font-sans-body text-sm font-semibold tracking-widest px-4 py-3 rounded-md transition-colors duration-200 cursor-pointer ${
                    currentPage === link.id
                      ? 'bg-wheat-base/50 text-gold-muted font-bold'
                      : 'text-cocoa-dark hover:bg-wheat-light hover:text-gold-muted'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  id="mobile-order-now-btn"
                  onClick={() => handleNavClick('menu')}
                  className="block w-full text-center bg-cocoa-dark text-cream-base hover:bg-gold-muted hover:text-cocoa-dark font-sans-body text-sm font-bold tracking-widest py-3 rounded transition-all duration-300 shadow-sm cursor-pointer"
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
