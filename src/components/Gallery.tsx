import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/bakeryData';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'All' | 'Kitchen' | 'Café'>('All');
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  const filterTabs = [
    { label: 'All Photos', value: 'All' },
    { label: 'The Kitchen', value: 'Kitchen' },
    { label: 'The Café', value: 'Café' },
  ];

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    return activeTab === 'All' || item.category === activeTab;
  });

  const selectedItem = GALLERY_ITEMS.find((item) => item.id === selectedImageId);

  return (
    <motion.div
      id="gallery-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="font-sans-body text-xs font-bold tracking-widest text-gold-muted uppercase">
          PICTURE BOOK
        </span>
        <h1 className="font-serif-display text-3xl sm:text-4xl font-extrabold text-cocoa-dark tracking-tight">
          Behind the Scenes
        </h1>
        <p className="font-sans-body text-cocoa-light text-sm leading-relaxed">
          Take a peek into our warm, flour-dusted kitchen and cozy neighborhood café where the baking magic happens daily.
        </p>
        <div className="w-16 h-1 bg-gold-muted mx-auto mt-4"></div>
      </div>

      {/* Tabs */}
      <div id="gallery-tabs-container" className="flex justify-center gap-3">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            id={`gallery-tab-${tab.value.toLowerCase()}`}
            onClick={() => setActiveTab(tab.value as 'All' | 'Kitchen' | 'Café')}
            className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer focus:outline-none ${
              activeTab === tab.value
                ? 'bg-cocoa-dark text-cream-base shadow-sm'
                : 'bg-wheat-light text-cocoa-medium hover:bg-wheat-base/70'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        id="gallery-photos-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredGallery.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => setSelectedImageId(item.id)}
              id={`gallery-item-${item.id}`}
              className="relative aspect-square rounded-xl overflow-hidden group shadow-md hover:shadow-lg cursor-pointer bg-wheat-light border border-wheat-light"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-dark/80 via-cocoa-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-cream-base space-y-1">
                <span className="font-sans-body text-[10px] font-bold tracking-widest text-gold-muted uppercase">
                  {item.category}
                </span>
                <h3 className="font-serif-display text-base font-bold">
                  {item.title}
                </h3>
                <p className="font-sans-body text-[11px] text-cream-base/80 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageId && selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cocoa-dark/90 backdrop-blur-sm">
            <button
              id="lightbox-close-overlay"
              onClick={() => setSelectedImageId(null)}
              className="absolute inset-0 cursor-default"
            ></button>
            <motion.div
              id="lightbox-content-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-cream-base border border-wheat-light max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              <button
                id="lightbox-close-btn"
                onClick={() => setSelectedImageId(null)}
                className="absolute top-4 right-4 bg-cocoa-dark/75 hover:bg-gold-muted text-cream-base hover:text-cocoa-dark p-2 rounded-full z-20 focus:outline-none transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="aspect-video w-full bg-black">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-2 bg-cream-base">
                <span className="font-sans-body text-xs font-bold tracking-widest text-gold-muted uppercase">
                  {selectedItem.category}
                </span>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-cocoa-dark">
                  {selectedItem.title}
                </h3>
                <p className="font-sans-body text-sm text-cocoa-medium leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
