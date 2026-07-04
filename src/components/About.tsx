import { Heart, Sparkles, Flame } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const points = [
    {
      title: 'Locally Sourced',
      icon: <Heart className="h-6 w-6 text-gold-muted" />,
      description: 'We partner with local farmers for the freshest dairy, organic stone-ground heritage grains, and seasonal handpicked fruits.',
    },
    {
      title: 'Made from Scratch',
      icon: <Sparkles className="h-6 w-6 text-gold-muted" />,
      description: 'No shortcuts, no mixes. Every single crumb, laminated layer, and glaze is handmade from scratch inside our bakery daily.',
    },
    {
      title: 'Baked with Love',
      icon: <Flame className="h-6 w-6 text-gold-muted" />,
      description: 'Time, patience, and traditional baking techniques are our most important ingredients. Quality is never compromised.',
    },
  ];

  return (
    <motion.div
      id="about-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-sans-body text-xs font-bold tracking-widest text-gold-muted uppercase">
          ESTABLISHED 2017
        </span>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-extrabold text-cocoa-dark leading-tight">
          Baking Memories Since 2017
        </h1>
        <p className="font-sans-body text-cocoa-light text-sm sm:text-base md:text-lg leading-relaxed italic">
          "Seven years ago, we opened our doors with a simple belief: the best moments in life are shared over something sweet."
        </p>
        <div className="w-16 h-1 bg-gold-muted mx-auto mt-4"></div>
      </div>

      {/* Main Story Image & Text Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Images */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-xl overflow-hidden shadow-lg h-[280px] sm:h-[350px]">
            <img
              id="about-storefront-img"
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
              alt="Sweet Crumbs Bakery Storefront"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md h-[180px] sm:h-[220px] hidden sm:block">
            <img
              id="about-baking-hands-img"
              src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80"
              alt="Hands kneading dough with flour"
              className="w-full h-full object-cover animate-pulse"
              style={{ animationDuration: '4s' }}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Narrative */}
        <div className="lg:col-span-7 space-y-6 bg-cream-dark p-6 sm:p-10 rounded-xl border border-wheat-base shadow-sm">
          <h2 className="font-serif-display text-2xl sm:text-3xl font-extrabold text-cocoa-dark">
            Our Story
          </h2>
          <div className="w-10 h-0.5 bg-gold-muted"></div>
          <p className="font-sans-body text-cocoa-medium text-sm sm:text-base leading-relaxed">
            What started as a small passion project in a home kitchen has blossomed into the heart of our neighborhood. We wanted to create a place where the smell of rising dough and the warmth of a fresh oven could offer a moment of peace in a busy world.
          </p>
          <p className="font-sans-body text-cocoa-medium text-sm sm:text-base leading-relaxed">
            Every recipe we use has been perfected over years of early mornings and flour-dusted hands, deeply rooted in traditional techniques but always with our own little twist. We don't believe in cutting corners. If we wouldn't serve it to our own kids, it doesn't leave our bakery.
          </p>
          <div className="pt-4 border-t border-wheat-base flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-wheat-base">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=150&q=80"
                alt="Head Chef"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="font-serif-display text-sm font-bold text-cocoa-dark">The Sweet Crumbs Baking Team</p>
              <p className="font-sans-body text-xs text-cocoa-pale">7 Years of Neighborhood Craftsmanship</p>
            </div>
          </div>
        </div>
      </div>

      {/* The Artisanal Way Section */}
      <div id="artisanal-way-section" className="space-y-10 pt-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif-display text-2xl sm:text-3xl font-extrabold text-cocoa-dark">
            The Artisanal Way
          </h2>
          <p className="font-sans-body text-xs sm:text-sm text-cocoa-pale tracking-widest mt-2 uppercase">
            Our standards of quality
          </p>
          <div className="w-12 h-0.5 bg-gold-muted mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              id={`artisanal-way-card-${index}`}
              whileHover={{ y: -5 }}
              className="bg-cream-base border border-wheat-light hover:border-gold-muted p-6 sm:p-8 rounded-xl text-center space-y-4 shadow-sm transition-all duration-300"
            >
              <div className="mx-auto w-12 h-12 bg-wheat-light rounded-full flex items-center justify-center">
                {point.icon}
              </div>
              <h3 className="font-serif-display text-lg font-bold text-cocoa-dark">
                {point.title}
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-cocoa-light leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
