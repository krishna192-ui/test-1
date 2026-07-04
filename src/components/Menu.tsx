import { useState } from 'react';
import { Search } from 'lucide-react';
import { MENU_ITEMS } from '../data/bakeryData';
import { motion, AnimatePresence } from 'motion/react';

interface MenuProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function Menu({ selectedCategory, setSelectedCategory }: MenuProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { label: 'All Items', value: 'All' },
    { label: 'Daily Breads', value: 'Daily Breads' },
    { label: 'Signature Cakes', value: 'Signature Cakes' },
    { label: 'Sweet Treats', value: 'Sweet Treats' },
    { label: 'Savory', value: 'Savory' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      id="menu-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10"
    >
      {/* Header & Search Bar Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-wheat-light">
        <div className="max-w-xl space-y-2">
          <h1 className="font-serif-display text-3xl sm:text-4xl font-extrabold text-cocoa-dark tracking-tight">
            Our Artisanal Menu
          </h1>
          <p className="font-sans-body text-cocoa-light text-sm leading-relaxed">
            Handcrafted daily using organic flour, local butter, and a lot of love. Browse our 39 fresh bakes and signature creations.
          </p>
        </div>

        {/* Real-time Search Box */}
        <div className="relative w-full md:w-80">
          <input
            id="menu-search-input"
            type="text"
            placeholder="Search breads, cakes, pastries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-cream-dark border border-wheat-base rounded-full text-sm text-cocoa-dark placeholder-cocoa-pale focus:outline-none focus:ring-1 focus:ring-gold-muted focus:border-gold-muted transition-all duration-300"
          />
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-cocoa-pale" />
        </div>
      </div>

      {/* Category Tabs */}
      <div id="category-tabs-container" className="flex flex-wrap gap-2 sm:gap-3 pb-2 overflow-x-auto scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.value}
            id={`category-tab-${cat.value.replace(/\s+/g, '-').toLowerCase()}`}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap cursor-pointer focus:outline-none ${
              selectedCategory === cat.value
                ? 'bg-cocoa-dark text-cream-base shadow-sm'
                : 'bg-wheat-light text-cocoa-medium hover:bg-wheat-base/70'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Menu Items */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        id="menu-products-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              id={`menu-item-card-${item.id}`}
              className={`flex flex-col bg-cream-base rounded-xl overflow-hidden border transition-all duration-300 ${
                item.isPlaceholder
                  ? 'border-dashed border-wheat-base bg-cream-dark/30 opacity-80'
                  : 'border-wheat-light hover:border-gold-muted shadow-sm hover:shadow-md'
              }`}
            >
              {/* Product Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-wheat-light">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    item.isPlaceholder ? 'filter sepia opacity-80' : 'hover:scale-105'
                  }`}
                  referrerPolicy="no-referrer"
                />
                {item.isPlaceholder && (
                  <div className="absolute top-3 left-3 bg-wheat-base/90 text-cocoa-dark px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border border-wheat-base">
                    Coming Soon / Placeholder
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Name and Price */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif-display text-lg font-bold text-cocoa-dark leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-sans-body text-sm font-bold text-cocoa-medium shrink-0">
                      {typeof item.price === 'number' ? `₹${item.price}` : item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans-body text-xs text-cocoa-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer category tag */}
                <div className="flex items-center justify-between pt-3 border-t border-wheat-light/50">
                  <span className="font-sans-body text-[10px] font-bold tracking-widest text-gold-muted uppercase">
                    {item.category}
                  </span>
                  {!item.isPlaceholder && (
                    <a
                      id={`inquire-item-btn-${item.id}`}
                      href={`https://wa.me/15551234567?text=${encodeURIComponent(
                        `Hello Sweet Crumbs, I would like to inquire about ordering the ${item.name} from your menu!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cocoa-dark hover:text-gold-muted text-[10px] font-extrabold tracking-widest uppercase flex items-center gap-1 cursor-pointer focus:outline-none"
                    >
                      INQUIRE NOW →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Fallback Empty State */}
      {filteredItems.length === 0 && (
        <div id="menu-empty-state" className="text-center py-20 bg-cream-dark rounded-xl border border-dashed border-wheat-base">
          <p className="font-serif-display text-xl text-cocoa-medium font-bold">No treats found</p>
          <p className="font-sans-body text-xs text-cocoa-light mt-1">Try adjusting your search terms or selecting another category.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-4 bg-cocoa-dark hover:bg-gold-muted hover:text-cocoa-dark text-cream-base font-sans-body text-xs font-bold tracking-widest px-6 py-2 rounded transition-all duration-300 cursor-pointer"
          >
            RESET FILTERS
          </button>
        </div>
      )}
    </motion.div>
  );
}
