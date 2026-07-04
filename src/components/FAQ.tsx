import { useState } from 'react';
import { ChevronDown, CheckCircle2, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/bakeryData';
import { motion, AnimatePresence } from 'motion/react';

interface FAQProps {
  setCurrentPage: (page: string) => void;
}

export default function FAQ({ setCurrentPage }: FAQProps) {
  const [openFAQIds, setOpenFAQIds] = useState<string[]>(['faq1']); // First one open by default

  const toggleFAQ = (id: string) => {
    if (openFAQIds.includes(id)) {
      setOpenFAQIds(openFAQIds.filter((faqId) => faqId !== id));
    } else {
      setOpenFAQIds([...openFAQIds, id]);
    }
  };

  const deliveryFAQs = FAQS.filter((faq) => faq.category === 'Delivery & Location');
  const ingredientsFAQs = FAQS.filter((faq) => faq.category === 'Ingredients & Allergies');

  const renderFAQGroup = (title: string, groupItems: typeof FAQS) => (
    <div className="space-y-4">
      <h3 className="font-serif-display text-lg sm:text-xl font-bold text-cocoa-dark border-b border-wheat-light pb-2">
        {title}
      </h3>
      <div className="space-y-3">
        {groupItems.map((faq) => {
          const isOpen = openFAQIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              id={`faq-row-${faq.id}`}
              className="bg-cream-base border border-wheat-light hover:border-gold-muted rounded-xl overflow-hidden transition-colors duration-300"
            >
              <button
                id={`faq-btn-${faq.id}`}
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between text-left p-4 sm:p-5 cursor-pointer focus:outline-none"
              >
                <span className="font-sans-body text-xs sm:text-sm font-bold text-cocoa-dark pr-4 flex items-center gap-2.5">
                  <HelpCircle className="h-4 w-4 text-gold-muted shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-cocoa-pale shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-gold-muted' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-0 border-t border-wheat-light/30">
                      <p className="font-sans-body text-xs sm:text-sm text-cocoa-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <motion.div
      id="faq-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12"
    >
      {/* Intro */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="font-sans-body text-xs font-bold tracking-widest text-gold-muted uppercase">
          CUSTOMER QUESTIONS
        </span>
        <h1 className="font-serif-display text-3xl sm:text-4xl font-extrabold text-cocoa-dark tracking-tight">
          Got Questions?
        </h1>
        <p className="font-sans-body text-cocoa-light text-sm leading-relaxed">
          We've compiled everything you need to know about our ingredients, delivery, and custom orders. If you can't find what you're looking for, drop us a line.
        </p>
        <div className="w-16 h-1 bg-gold-muted mx-auto mt-4"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Quick Info box */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-cream-dark border border-wheat-base rounded-xl p-6 shadow-sm space-y-6">
            <h2 className="font-serif-display text-lg font-bold text-cocoa-dark flex items-center gap-2">
              <span>📋</span> Quick Info
            </h2>
            <div className="w-10 h-0.5 bg-gold-muted"></div>
            
            <ul className="space-y-4 font-sans-body text-xs sm:text-sm text-cocoa-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-gold-muted shrink-0 mt-0.5" />
                <span>10–15km Delivery Radius</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-gold-muted shrink-0 mt-0.5" />
                <span>48h Notice for Custom Cakes</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-gold-muted shrink-0 mt-0.5" />
                <span>Locally Sourced Ingredients</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-wheat-base/50">
              <button
                id="faq-contact-shortcut-btn"
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full text-center bg-cocoa-dark text-cream-base hover:bg-gold-muted hover:text-cocoa-dark font-sans-body text-xs font-bold tracking-widest py-3 rounded transition-all duration-300 shadow-sm cursor-pointer"
              >
                CONTACT US DIRECTLY
              </button>
            </div>
          </div>
        </div>

        {/* Right column: FAQ Accordions */}
        <div className="lg:col-span-8 space-y-8" id="faq-accordions-container">
          {renderFAQGroup('Delivery & Location', deliveryFAQs)}
          {renderFAQGroup('Ingredients & Allergies', ingredientsFAQs)}
        </div>
      </div>
    </motion.div>
  );
}
