import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Clock, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate real API submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 1200);
  };

  return (
    <motion.div
      id="contact-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16"
    >
      {/* Introduction */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="font-sans-body text-xs font-bold tracking-widest text-gold-muted uppercase">
          CONTACT & VISIT
        </span>
        <h1 className="font-serif-display text-3xl sm:text-4xl font-extrabold text-cocoa-dark tracking-tight">
          Say Hello.
        </h1>
        <p className="font-sans-body text-cocoa-light text-sm leading-relaxed">
          We'd love to welcome you into our kitchen. Whether you're stopping by for a morning croissant or planning a special cake for an occasion, our doors are open.
        </p>
        <div className="w-16 h-1 bg-gold-muted mx-auto mt-4"></div>
      </div>

      {/* Main Grid: Info Panels & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Visit Us Info Box */}
        <div className="lg:col-span-5 bg-cream-dark border border-wheat-base rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
          <h3 className="font-serif-display text-xl font-bold text-cocoa-dark flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gold-muted" /> Visit Us
          </h3>
          
          <div className="space-y-4 font-sans-body text-xs sm:text-sm text-cocoa-medium">
            <div className="space-y-1">
              <p className="font-bold text-cocoa-dark">Address</p>
              <p>123 Baker Street, Artisan District</p>
              <p>Portland, OR 97201</p>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-cocoa-dark flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-cocoa-pale" /> Hours
              </p>
              <p>Tue - Fri: 7am - 4pm</p>
              <p>Sat - Sun: 8am - 3pm</p>
              <p className="text-cocoa-pale">Monday: Closed</p>
            </div>

            <div className="space-y-1 border-t border-wheat-base/50 pt-4">
              <p className="font-bold text-cocoa-dark flex items-center gap-1.5">
                <Car className="h-4 w-4 text-cocoa-pale" /> Parking
              </p>
              <p className="leading-relaxed">
                Free street parking available on Baker St. Dedicated spots directly behind the bakery.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              id="get-directions-btn"
              href="https://www.google.com/maps/search/?api=1&query=123+Baker+Street+Portland+OR+97201"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-cocoa-dark hover:bg-gold-muted hover:text-cocoa-dark text-cream-base font-sans-body text-xs font-bold tracking-widest px-6 py-3 rounded transition-all duration-300 w-full cursor-pointer"
            >
              GET DIRECTIONS
            </a>
          </div>
        </div>

        {/* Map Container */}
        <div className="lg:col-span-7 h-[350px] lg:h-full min-h-[350px] relative rounded-xl overflow-hidden shadow-md border border-wheat-light bg-wheat-light">
          <iframe
            id="contact-location-map"
            title="Sweet Crumbs Bakery Location Map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=123%20Baker%20Street%20Portland%20OR%2097201+(Sweet%20Crumbs%20Bakery)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{ filter: 'grayscale(0.1) contrast(0.95) sepia(0.12)' }}
          />
        </div>
      </div>

      {/* Communications Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Call Us Card */}
        <div className="bg-cream-base border border-wheat-light rounded-xl p-6 text-center space-y-3 shadow-sm hover:border-gold-muted transition-colors duration-300">
          <div className="mx-auto w-10 h-10 bg-wheat-light rounded-full flex items-center justify-center">
            <Phone className="h-5 w-5 text-gold-muted" />
          </div>
          <h4 className="font-serif-display text-base font-bold text-cocoa-dark">Call Us</h4>
          <p className="font-sans-body text-xs text-cocoa-light leading-relaxed">
            For immediate inquiries or to hold a pastry:
          </p>
          <a
            id="contact-phone-link"
            href="tel:5551234567"
            className="block font-sans-body text-sm font-bold text-cocoa-dark hover:text-gold-muted transition-colors duration-200"
          >
            (555) 123-4567
          </a>
        </div>

        {/* Email Card */}
        <div className="bg-cream-base border border-wheat-light rounded-xl p-6 text-center space-y-3 shadow-sm hover:border-gold-muted transition-colors duration-300">
          <div className="mx-auto w-10 h-10 bg-wheat-light rounded-full flex items-center justify-center">
            <Mail className="h-5 w-5 text-gold-muted" />
          </div>
          <h4 className="font-serif-display text-base font-bold text-cocoa-dark">Email</h4>
          <p className="font-sans-body text-xs text-cocoa-light leading-relaxed">
            For press, partnerships, or general questions:
          </p>
          <a
            id="contact-email-link"
            href="mailto:hello@sweetcrumbs.com"
            className="block font-sans-body text-sm font-bold text-cocoa-dark hover:text-gold-muted transition-colors duration-200 break-all"
          >
            hello@sweetcrumbs.com
          </a>
        </div>

        {/* WhatsApp Card */}
        <div className="bg-cream-base border border-wheat-light rounded-xl p-6 text-center space-y-3 shadow-sm hover:border-gold-muted transition-colors duration-300">
          <div className="mx-auto w-10 h-10 bg-wheat-light rounded-full flex items-center justify-center">
            <MessageSquare className="h-5 w-5 text-gold-muted" />
          </div>
          <h4 className="font-serif-display text-base font-bold text-cocoa-dark">WhatsApp</h4>
          <p className="font-sans-body text-xs text-cocoa-light leading-relaxed">
            Quick chat for custom cake consultations:
          </p>
          <a
            id="contact-whatsapp-link"
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cream-dark hover:bg-gold-muted hover:text-cocoa-dark border border-wheat-base font-sans-body text-xs font-bold tracking-widest px-5 py-2 rounded transition-colors duration-300 cursor-pointer"
          >
            MESSAGE US
          </a>
        </div>
      </div>

      {/* Send Message Form */}
      <div className="max-w-3xl mx-auto bg-cream-dark border border-wheat-base rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="text-center space-y-1">
          <h3 className="font-serif-display text-2xl font-bold text-cocoa-dark">Send a Message</h3>
          <p className="font-sans-body text-xs text-cocoa-light">We'll get back to you within 24 business hours.</p>
          <div className="w-10 h-0.5 bg-gold-muted mx-auto mt-2"></div>
        </div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              id="contact-success-box"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-cream-base border border-gold-muted rounded-xl p-8 text-center space-y-3"
            >
              <div className="text-3xl">🕊️</div>
              <h4 className="font-serif-display text-lg font-bold text-cocoa-dark">Thank you!</h4>
              <p className="font-sans-body text-xs sm:text-sm text-cocoa-medium leading-relaxed max-w-md mx-auto">
                Your message has been sent successfully. We have received your inquiry and our bakers will get back to you as soon as possible.
              </p>
              <button
                id="reset-form-btn"
                onClick={() => setIsSubmitted(false)}
                className="mt-4 border border-cocoa-dark hover:bg-cocoa-dark hover:text-cream-base text-cocoa-dark font-sans-body text-xs font-bold tracking-widest px-5 py-2 rounded transition-all duration-300 cursor-pointer"
              >
                SEND ANOTHER MESSAGE
              </button>
            </motion.div>
          ) : (
            <motion.form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="form-name" className="block font-sans-body text-xs font-bold text-cocoa-medium tracking-wider uppercase">
                    Your Name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 bg-cream-base border border-wheat-base rounded-lg text-sm text-cocoa-dark focus:outline-none focus:ring-1 focus:ring-gold-muted focus:border-gold-muted transition-all duration-300"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="form-email" className="block font-sans-body text-xs font-bold text-cocoa-medium tracking-wider uppercase">
                    Email Address
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 bg-cream-base border border-wheat-base rounded-lg text-sm text-cocoa-dark focus:outline-none focus:ring-1 focus:ring-gold-muted focus:border-gold-muted transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="form-subject" className="block font-sans-body text-xs font-bold text-cocoa-medium tracking-wider uppercase">
                  Subject
                </label>
                <select
                  id="form-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 bg-cream-base border border-wheat-base rounded-lg text-sm text-cocoa-dark focus:outline-none focus:ring-1 focus:ring-gold-muted focus:border-gold-muted transition-all duration-300"
                >
                  <option>General Inquiry</option>
                  <option>Custom Cake Reservation</option>
                  <option>Catering & Special Events</option>
                  <option>Feedback & Love</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="form-message" className="block font-sans-body text-xs font-bold text-cocoa-medium tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2.5 bg-cream-base border border-wheat-base rounded-lg text-sm text-cocoa-dark focus:outline-none focus:ring-1 focus:ring-gold-muted focus:border-gold-muted transition-all duration-300"
                ></textarea>
              </div>

              <button
                id="form-submit-btn"
                type="submit"
                disabled={loading}
                className="w-full bg-cocoa-dark hover:bg-gold-muted hover:text-cocoa-dark text-cream-base disabled:bg-cocoa-pale font-sans-body text-xs font-bold tracking-widest py-3.5 rounded-lg transition-all duration-300 shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
