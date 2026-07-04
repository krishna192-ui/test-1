import { Info, MessageSquare, PhoneCall } from 'lucide-react';
import { CAKE_INSPIRATIONS } from '../data/bakeryData';
import { motion } from 'motion/react';

export default function CustomCakes() {
  return (
    <motion.div
      id="custom-cakes-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16"
    >
      {/* Intro Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 space-y-6">
          <span className="font-sans-body text-xs font-bold tracking-widest text-gold-muted uppercase">
            BESPOKE CREATIONS
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-extrabold text-cocoa-dark leading-tight">
            Bespoke Cakes for Every Occasion
          </h1>
          <p className="font-sans-body text-cocoa-medium text-sm sm:text-base leading-relaxed">
            Handcrafted with premium ingredients, our custom cakes are designed to be the centerpiece of your celebration. From elegant, multilayered weddings to joyful family birthdays, we bring your vision to delicious life using fresh fruits, Belgian chocolate, and real butter.
          </p>

          {/* Important Notice Box */}
          <div className="bg-cream-dark border border-wheat-base rounded-xl p-5 sm:p-6 flex items-start space-x-4 shadow-sm">
            <Info className="h-6 w-6 text-gold-muted shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-serif-display text-base font-bold text-cocoa-dark">Important Notice</h4>
              <p className="font-sans-body text-xs sm:text-sm text-cocoa-light leading-relaxed">
                Custom orders require a minimum of <strong className="text-cocoa-dark font-semibold">24–48 hours notice</strong>. Please contact us directly via phone or WhatsApp to secure your spot in our busy baking schedule.
              </p>
            </div>
          </div>

          {/* Quick Inquiry Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              id="cakes-whatsapp-btn"
              href="https://wa.me/15551234567?text=Hello%20Sweet%20Crumbs,%20I'd%20like%20to%20inquire%20about%20booking%20a%20custom%20cake!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-cocoa-dark hover:bg-gold-muted hover:text-cocoa-dark text-cream-base font-sans-body text-xs font-bold tracking-widest py-3.5 rounded transition-all duration-300 shadow-sm"
            >
              <MessageSquare className="h-4 w-4" /> CHAT ON WHATSAPP
            </a>
            <a
              id="cakes-call-btn"
              href="tel:5551234567"
              className="flex-1 flex items-center justify-center gap-2 border-2 border-cocoa-dark text-cocoa-dark hover:bg-cocoa-dark hover:text-cream-base font-sans-body text-xs font-bold tracking-widest py-3 rounded transition-all duration-300"
            >
              <PhoneCall className="h-4 w-4" /> CALL US DIRECTLY
            </a>
          </div>
        </div>

        {/* Hero Cake Image */}
        <div className="lg:col-span-5 relative rounded-xl overflow-hidden shadow-xl h-[380px] sm:h-[450px]">
          <img
            id="custom-cakes-hero-img"
            src="https://images.unsplash.com/photo-1527524808410-f4577c2ee15c?auto=format&fit=crop&w=800&q=80"
            alt="Beautiful artisanal celebration cake with floral details"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Design Inspiration Cards */}
      <div className="space-y-10 pt-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif-display text-2xl sm:text-3xl font-extrabold text-cocoa-dark">
            Design Inspiration
          </h2>
          <p className="font-sans-body text-xs sm:text-sm text-cocoa-pale tracking-widest mt-2 uppercase">
            Browse our recent creations
          </p>
          <div className="w-12 h-0.5 bg-gold-muted mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAKE_INSPIRATIONS.map((inspiration) => (
            <div
              key={inspiration.id}
              id={`cake-inspiration-card-${inspiration.id}`}
              className="bg-cream-base border border-wheat-light rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-wheat-light">
                <img
                  src={inspiration.image}
                  alt={inspiration.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 text-center space-y-4">
                <h3 className="font-serif-display text-base font-bold text-cocoa-dark tracking-wide">
                  {inspiration.title}
                </h3>
                <a
                  id={`inquire-cake-btn-${inspiration.id}`}
                  href={`https://wa.me/15551234567?text=${encodeURIComponent(
                    `Hello Sweet Crumbs, I am inquiring about a custom cake based on your "${inspiration.title}" design inspiration!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-cream-dark text-cocoa-dark hover:bg-gold-muted hover:text-cocoa-dark border border-wheat-base font-sans-body text-[10px] font-bold tracking-widest uppercase py-2.5 rounded transition-all duration-300 cursor-pointer focus:outline-none"
                >
                  INQUIRE ABOUT THIS STYLE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
