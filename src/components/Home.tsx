import { motion } from 'motion/react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
  setSelectedCategory: (category: string) => void;
}

export default function Home({ setCurrentPage, setSelectedCategory }: HomeProps) {
  const handleSpecialtyClick = (category: 'Daily Breads' | 'Signature Cakes' | 'Sweet Treats' | 'Savory') => {
    setSelectedCategory(category);
    setCurrentPage('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-page-container" className="space-y-12">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative h-[550px] sm:h-[600px] flex items-center justify-center text-center px-4 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(46, 30, 18, 0.5), rgba(46, 30, 18, 0.7)), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-6"
        >
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-cream-base tracking-tight leading-tight">
            Handcrafted with Love <br />
            <span className="text-gold-muted">Since 2017</span>
          </h1>
          <p className="font-sans-body text-cream-base/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Authentic ingredients, time-honored techniques, and a passion for the perfect crumb. Experience the warmth of neighborhood baking elevated.
          </p>
          <div className="pt-4">
            <button
              id="hero-explore-menu-btn"
              onClick={() => {
                setSelectedCategory('All');
                setCurrentPage('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-gold-muted hover:bg-cream-base hover:text-cocoa-dark text-cocoa-dark font-sans-body text-xs font-bold tracking-widest px-8 py-3.5 rounded transition-all duration-300 shadow-md cursor-pointer"
            >
              EXPLORE OUR MENU
            </button>
          </div>
        </motion.div>
      </section>

      {/* Announcement Banner */}
      <section id="custom-announcement-banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-cream-dark border border-wheat-base rounded-lg p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0 shadow-sm"
        >
          <div className="flex items-center space-x-3 text-left">
            <span className="text-xl sm:text-2xl">🍰</span>
            <div>
              <h4 className="font-serif-display text-base font-bold text-cocoa-dark">Custom Celebrations</h4>
              <p className="font-sans-body text-xs sm:text-sm text-cocoa-light mt-0.5">
                Planning a special event? Our artisanal cakes require 24–48 hours notice to ensure perfection.
              </p>
            </div>
          </div>
          <button
            id="announcement-inquire-now-btn"
            onClick={() => {
              setCurrentPage('custom-cakes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="border-2 border-cocoa-dark text-cocoa-dark hover:bg-cocoa-dark hover:text-cream-base font-sans-body text-xs font-bold tracking-widest px-6 py-2.5 rounded transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            INQUIRE NOW
          </button>
        </motion.div>
      </section>

      {/* Specialties Bento Grid */}
      <section id="specialties-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <div className="text-center">
          <h2 className="font-serif-display text-3xl sm:text-4xl font-extrabold text-cocoa-dark tracking-tight">
            Our Specialties
          </h2>
          <div className="w-16 h-1 bg-gold-muted mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Tall Card on Left - Artisanal Breads */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:col-span-3 h-[380px] sm:h-[450px] relative rounded-xl overflow-hidden group shadow-lg cursor-pointer"
            onClick={() => handleSpecialtyClick('Daily Breads')}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(46, 30, 18, 0.8), rgba(46, 30, 18, 0.1)), url('https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1000&q=80')`,
              }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-cream-base space-y-2">
              <span className="font-sans-body text-xs font-bold tracking-widest text-gold-muted bg-cocoa-dark/60 px-3 py-1 rounded-full uppercase">
                Artisanal Breads
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold">
                Daily Sourdough & Boules
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-cream-base/90 leading-relaxed max-w-md">
                Freshly kneaded and baked daily. Handcrafted with stone-ground heritage grains and natural wild yeast.
              </p>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="lg:col-span-2 flex flex-col gap-6 h-[450px]">
            {/* Top Right Card - Morning Pastries */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex-1 relative rounded-xl overflow-hidden group shadow-md cursor-pointer"
              onClick={() => handleSpecialtyClick('Sweet Treats')}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(46, 30, 18, 0.8), rgba(46, 30, 18, 0.2)), url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80')`,
                }}
              ></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-cream-base space-y-1.5">
                <span className="font-sans-body text-xs font-bold tracking-widest text-gold-muted uppercase">
                  Morning Pastries
                </span>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold">
                  Sweet & Flaky Treats
                </h3>
                <p className="font-sans-body text-xs text-cream-base/85 max-w-xs leading-relaxed">
                  Laminated dough layers, imported Belgian chocolate, and seasonal local fruits.
                </p>
              </div>
            </motion.div>

            {/* Bottom Right Card - Signature Cakes */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex-1 relative rounded-xl overflow-hidden group shadow-md cursor-pointer"
              onClick={() => handleSpecialtyClick('Signature Cakes')}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(46, 30, 18, 0.8), rgba(46, 30, 18, 0.2)), url('https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80')`,
                }}
              ></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-cream-base space-y-1.5">
                <span className="font-sans-body text-xs font-bold tracking-widest text-gold-muted uppercase">
                  Signature Cakes
                </span>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold">
                  Bespoke Creations
                </h3>
                <p className="font-sans-body text-xs text-cream-base/85 max-w-xs leading-relaxed">
                  Decadent layered sponges, rich dark truffle coatings, and perfect design details.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
