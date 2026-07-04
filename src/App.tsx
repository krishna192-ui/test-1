import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import CustomCakes from './components/CustomCakes';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'about':
        return <About />;
      case 'menu':
        return (
          <Menu
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'gallery':
        return <Gallery />;
      case 'custom-cakes':
        return <CustomCakes />;
      case 'testimonials':
        return <Testimonials />;
      case 'faq':
        return <FAQ setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setSelectedCategory={setSelectedCategory}
          />
        );
    }
  };

  return (
    <div id="app-root-container" className="min-h-screen flex flex-col bg-cream-base selection:bg-gold-muted/30 selection:text-cocoa-dark">
      {/* Sticky Header Navigation */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Area with Page-Level Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="flex-1"
        >
          {renderActivePage()}
        </motion.main>
      </AnimatePresence>

      {/* Footer Utility Section */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Persistent Floating Engagement Buttons */}
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
