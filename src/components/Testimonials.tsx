import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/bakeryData';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <motion.div
      id="testimonials-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="font-sans-body text-xs font-bold tracking-widest text-gold-muted uppercase">
          CUSTOMER LOVE
        </span>
        <h1 className="font-serif-display text-3xl sm:text-4xl font-extrabold text-cocoa-dark tracking-tight">
          Wall of Fame
        </h1>
        <p className="font-sans-body text-cocoa-light text-sm leading-relaxed">
          Hear what our wonderful community has to say about their favorite artisanal treats. Every crumb tells a story.
        </p>
        <div className="w-16 h-1 bg-gold-muted mx-auto mt-4"></div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Large Hero Image Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-xl overflow-hidden shadow-lg h-[350px] sm:h-[450px]">
            <img
              id="testimonials-hero-img"
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
              alt="Family smiling while sharing a birthday cake"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Soft tint overlay */}
            <div className="absolute inset-0 bg-cocoa-dark/10"></div>
          </div>
          <div className="bg-wheat-light p-6 rounded-xl text-center border border-wheat-base shadow-sm">
            <p className="font-serif-display text-base font-bold text-cocoa-dark">
              Celebrating Life's Moments
            </p>
            <p className="font-sans-body text-xs text-cocoa-light mt-1.5 leading-relaxed">
              We've had the honor of sweetening anniversaries, morning routines, and birthdays for over 7 years.
            </p>
          </div>
        </div>

        {/* Right Side: Stack of Review Cards */}
        <div className="lg:col-span-7 space-y-6" id="testimonials-stack">
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              key={review.id}
              id={`testimonial-card-${review.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.01 }}
              className="bg-cream-base border border-wheat-light p-6 rounded-xl shadow-sm space-y-4 hover:border-gold-muted transition-all duration-300"
            >
              {/* Star rating row */}
              <div className="flex items-center space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-bright text-gold-bright"
                  />
                ))}
              </div>

              {/* Quotation text */}
              <blockquote className="font-sans-body text-cocoa-medium text-sm leading-relaxed italic">
                "{review.quote}"
              </blockquote>

              {/* Author attribution */}
              <div className="flex items-center justify-between pt-2">
                <span className="font-serif-display text-sm font-bold text-cocoa-dark">
                  — {review.author}
                </span>
                <span className="font-mono text-[10px] text-cocoa-pale uppercase tracking-widest">
                  Verified Neighbor
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
