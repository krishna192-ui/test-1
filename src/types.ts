export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | string; // Use string or number for placeholders
  category: 'Daily Breads' | 'Signature Cakes' | 'Sweet Treats' | 'Savory';
  isPlaceholder: boolean;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Delivery & Location' | 'Ingredients & Allergies';
}

export interface TestimonialItem {
  id: string;
  rating: number;
  quote: string;
  author: string;
  image?: string;
}

export interface CakeInspiration {
  id: string;
  title: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Kitchen' | 'Café' | 'Ingredients';
  image: string;
  description: string;
}
