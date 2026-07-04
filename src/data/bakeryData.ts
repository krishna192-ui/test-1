import { MenuItem, FAQItem, TestimonialItem, CakeInspiration, GalleryItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // 1. Classic Sourdough (Real)
  {
    id: 'm1',
    name: 'Classic Sourdough',
    description: 'A slow-fermented, naturally leavened loaf with a chewy crumb and a deeply caramelized crust. Baked fresh every morning.',
    price: 220,
    category: 'Daily Breads',
    isPlaceholder: false,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80'
  },
  // 2. Dark Truffle Cake (Real)
  {
    id: 'm2',
    name: 'Dark Truffle Cake',
    description: 'Rich, dense chocolate sponge layered with Belgian dark chocolate ganache. A chocolate lover\'s absolute dream.',
    price: 950,
    category: 'Signature Cakes',
    isPlaceholder: false,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },
  // 3. Butter Croissant (Real)
  {
    id: 'm3',
    name: 'Butter Croissant',
    description: 'Traditional French style croissant, flawlessly laminated for a crisp, flaky exterior and a tender, buttery honeycomb interior.',
    price: 180,
    category: 'Sweet Treats',
    isPlaceholder: false,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
  },
  // 4. Olive Focaccia (Real)
  {
    id: 'm4',
    name: 'Olive Focaccia',
    description: 'Soft, pillowy Italian flatbread dimpled with extra virgin olive oil, Kalamata olives, and fresh rosemary.',
    price: 250,
    category: 'Daily Breads',
    isPlaceholder: false,
    image: 'https://images.unsplash.com/photo-1573145959142-ede05160917a?auto=format&fit=crop&w=800&q=80'
  },
  // 5. Spinach & Feta Quiche (Real)
  {
    id: 'm5',
    name: 'Spinach & Feta Quiche',
    description: 'A rich, savory egg custard baked with wilted spinach, creamy feta cheese, and a hint of nutmeg in an all-butter crust.',
    price: 320,
    category: 'Savory',
    isPlaceholder: false,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80'
  },

  // Daily Breads Placeholders (10 more needed for 12 total Breads)
  {
    id: 'm6',
    name: 'French Baguette [Placeholder]',
    description: 'Golden crusty baguette made with organic stone-ground flour and sea salt. Details to be finalized.',
    price: '[TBD]',
    category: 'Daily Breads',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm7',
    name: 'Country Rye Loaf [Placeholder]',
    description: 'Hearty rye loaf with caraway seeds and a rich sourdough tang. Details to be finalized.',
    price: '[TBD]',
    category: 'Daily Breads',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm8',
    name: 'Multi-Grain Boule [Placeholder]',
    description: 'Nutty multi-grain bread topped with organic rolled oats and flax seeds. Details to be finalized.',
    price: '[TBD]',
    category: 'Daily Breads',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm9',
    name: 'Cranberry Walnut Loaf [Placeholder]',
    description: 'Sweet cranberries and roasted walnuts folded into our classic sourdough base. Details to be finalized.',
    price: '[TBD]',
    category: 'Daily Breads',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm10',
    name: 'Brioche Nanterre [Placeholder]',
    description: 'Rich, buttery, and slightly sweet pull-apart brioche loaf. Details to be finalized.',
    price: '[TBD]',
    category: 'Daily Breads',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm11',
    name: 'Ciabatta [Placeholder]',
    description: 'Classic Italian slipper bread with a porous, open crumb structure. Details to be finalized.',
    price: '[TBD]',
    category: 'Daily Breads',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm12',
    name: 'Cheddar Jalapeño Sourdough [Placeholder]',
    description: 'Spicy pickled jalapeños and sharp cheddar cheese baked directly into the sourdough. Details to be finalized.',
    price: '[TBD]',
    category: 'Daily Breads',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm13',
    name: 'Challah [Placeholder]',
    description: 'Traditional braided egg bread, beautifully glazed and wonderfully soft. Details to be finalized.',
    price: '[TBD]',
    category: 'Daily Breads',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm14',
    name: 'Whole Wheat Boule [Placeholder]',
    description: 'Nutritious loaf made with 100% whole grain flour and long fermentation. Details to be finalized.',
    price: '[TBD]',
    category: 'Daily Breads',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm15',
    name: 'English Muffins [Placeholder]',
    description: 'Griddle-baked sourdough muffins with plenty of nooks and crannies. Details to be finalized.',
    price: '[TBD]',
    category: 'Daily Breads',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },

  // Signature Cakes Placeholders (7 more needed for 8 total Cakes)
  {
    id: 'm16',
    name: 'Strawberry Chantilly Cake [Placeholder]',
    description: 'Light vanilla sponge layered with fresh strawberries and whipped cream. Details to be finalized.',
    price: '[TBD]',
    category: 'Signature Cakes',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm17',
    name: 'Red Velvet Classique [Placeholder]',
    description: 'Deep red cocoa cake with layers of silky cream cheese frosting. Details to be finalized.',
    price: '[TBD]',
    category: 'Signature Cakes',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm18',
    name: 'Salted Caramel Hazelnut Cake [Placeholder]',
    description: 'Moist caramel sponge with toasted hazelnut praline and salted butter caramel. Details to be finalized.',
    price: '[TBD]',
    category: 'Signature Cakes',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm19',
    name: 'Classic Tiramisu Cake [Placeholder]',
    description: 'Espresso-soaked ladyfingers layered with rich mascarpone zabaglione cream. Details to be finalized.',
    price: '[TBD]',
    category: 'Signature Cakes',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm20',
    name: 'Lemon Meringue Cake [Placeholder]',
    description: 'Zesty lemon curd filled cake covered in pillowy toasted Italian meringue. Details to be finalized.',
    price: '[TBD]',
    category: 'Signature Cakes',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm21',
    name: 'Carrot & Pecan Cake [Placeholder]',
    description: 'Spiced carrot cake packed with walnuts and raisins, finished with cream cheese. Details to be finalized.',
    price: '[TBD]',
    category: 'Signature Cakes',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm22',
    name: 'New York Baked Cheesecake [Placeholder]',
    description: 'Dense, rich cheesecake on a buttery graham cracker crust with berry compote. Details to be finalized.',
    price: '[TBD]',
    category: 'Signature Cakes',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },

  // Sweet Treats Placeholders (9 more needed for 10 total Sweet Treats)
  {
    id: 'm23',
    name: 'Pain au Chocolat [Placeholder]',
    description: 'Laminated pastry dough wrapped around two bars of Belgian dark chocolate. Details to be finalized.',
    price: '[TBD]',
    category: 'Sweet Treats',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm24',
    name: 'Almond Twice-Baked Croissant [Placeholder]',
    description: 'Classic croissant filled with sweet frangipane, topped with sliced almonds. Details to be finalized.',
    price: '[TBD]',
    category: 'Sweet Treats',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm25',
    name: 'Vanilla Bean Éclair [Placeholder]',
    description: 'Crisp choux pastry filled with real Madagascar vanilla bean pastry cream. Details to be finalized.',
    price: '[TBD]',
    category: 'Sweet Treats',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm26',
    name: 'Lemon Tartlet [Placeholder]',
    description: 'Sweet shortbread pastry shell filled with tangy cooked lemon curd. Details to be finalized.',
    price: '[TBD]',
    category: 'Sweet Treats',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm27',
    name: 'Sea Salt Chocolate Cookie [Placeholder]',
    description: 'Chewy brown-butter cookie studded with chunks of 70% dark chocolate and Maldon salt. Details to be finalized.',
    price: '[TBD]',
    category: 'Sweet Treats',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm28',
    name: 'Pistachio Macarons [Placeholder]',
    description: 'Delicate French almond meringue cookies with a white chocolate pistachio ganache. Details to be finalized.',
    price: '[TBD]',
    category: 'Sweet Treats',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm29',
    name: 'Cinnamon Morning Roll [Placeholder]',
    description: 'Flaky croissant dough rolled with cinnamon sugar and finished with orange zest. Details to be finalized.',
    price: '[TBD]',
    category: 'Sweet Treats',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm30',
    name: 'Raspberry Linzer Cookie [Placeholder]',
    description: 'Spiced hazelnut shortbread cookie sandwich with seedless raspberry jam. Details to be finalized.',
    price: '[TBD]',
    category: 'Sweet Treats',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm31',
    name: 'Double Chocolate Fudge Brownie [Placeholder]',
    description: 'Dense, fudgy brownie made with premium Belgian chocolate and cocoa. Details to be finalized.',
    price: '[TBD]',
    category: 'Sweet Treats',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
  },

  // Savory Placeholders (8 more needed for 9 total Savory)
  {
    id: 'm32',
    name: 'Ham & Gruyère Croissant [Placeholder]',
    description: 'Flaky croissant filled with premium smoked ham and melted cave-aged gruyère cheese. Details to be finalized.',
    price: '[TBD]',
    category: 'Savory',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm33',
    name: 'Mushroom & Thyme Tart [Placeholder]',
    description: 'Roasted wild mushrooms and fresh thyme in a puff pastry shell with goat cheese. Details to be finalized.',
    price: '[TBD]',
    category: 'Savory',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm34',
    name: 'Sundried Tomato & Pesto Roll [Placeholder]',
    description: 'Savory scroll with housemade basil pesto and tangy sundried tomatoes. Details to be finalized.',
    price: '[TBD]',
    category: 'Savory',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm35',
    name: 'Sausage & Sage Roll [Placeholder]',
    description: 'Premium sausage meat seasoned with sage, wrapped in a light puff pastry. Details to be finalized.',
    price: '[TBD]',
    category: 'Savory',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm36',
    name: 'Jalapeño Cheddar Scone [Placeholder]',
    description: 'Flaky savory scone with sharp cheddar cheese and spicy jalapeño bits. Details to be finalized.',
    price: '[TBD]',
    category: 'Savory',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm37',
    name: 'Caprese Savory Danish [Placeholder]',
    description: 'Flaky danish pastry topped with cherry tomatoes, basil pesto, and fresh mozzarella. Details to be finalized.',
    price: '[TBD]',
    category: 'Savory',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm38',
    name: 'Salmon & Dill Quiche [Placeholder]',
    description: 'Rich savory quiche with flakes of hot-smoked salmon and fresh garden dill. Details to be finalized.',
    price: '[TBD]',
    category: 'Savory',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm39',
    name: 'Caramelized Onion & Brie Turnover [Placeholder]',
    description: 'Flaky puff pastry stuffed with sweet slow-caramelized onions and creamy brie cheese. Details to be finalized.',
    price: '[TBD]',
    category: 'Savory',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    category: 'Delivery & Location',
    question: 'What is your delivery radius?',
    answer: 'We deliver to locations within a 10–15 km radius of our bakery on Baker Street. This allows us to ensure our fresh bakes and cakes arrive in pristine, temperature-controlled condition.'
  },
  {
    id: 'faq2',
    category: 'Delivery & Location',
    question: 'Do you offer same-day delivery?',
    answer: 'For standard daily breads and morning pastries, we have a limited number of same-day delivery slots available. However, our signature and custom cakes require 24–48 hours advance notice and cannot be ordered for same-day delivery.'
  },
  {
    id: 'faq3',
    category: 'Ingredients & Allergies',
    question: 'Are your products nut-free?',
    answer: 'While we bake items without nuts, all baking is performed in a single shared kitchen that handles almonds, pecans, walnuts, and peanuts. We take precautions, but we cannot guarantee a 100% nut-free environment. Please let us know if you have a severe allergy.'
  },
  {
    id: 'faq4',
    category: 'Ingredients & Allergies',
    question: 'Do you have gluten-free or vegan options?',
    answer: 'Yes! We offer a select range of daily gluten-free treats, and we specialize in custom vegan cakes upon request. Please consult with our team when booking to review options.'
  },
  {
    id: 'faq5',
    category: 'Ingredients & Allergies',
    question: 'Where do you source your ingredients?',
    answer: 'We believe in real ingredients. We source our dairy, cheese, and seasonal fruits from local farms. Our stone-ground organic flour comes from heritage grains, and we use real butter and authentic Belgian chocolate in all our creations.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    rating: 5,
    quote: 'Sweet Crumbs created the most breathtaking cake for our anniversary. Not only did it look like a piece of modern art, but the taste was absolutely divine. The chocolate layers were rich and perfectly balanced. Truly the best bakery in town!',
    author: 'The Miller Family'
  },
  {
    id: 't2',
    rating: 5,
    quote: 'I stop by every morning for their sourdough and a coffee. The crust is consistently perfect—crackly on the outside, soft and airy inside. It feels like a little slice of Paris right in our neighborhood.',
    author: 'Sarah J.'
  },
  {
    id: 't3',
    rating: 5,
    quote: 'The almond croissants are dangerously good! flawlessly flaky with a rich almond filling.',
    author: 'Mark T.'
  },
  {
    id: 't4',
    rating: 5,
    quote: 'I ordered a custom vegan cake for my daughter\'s birthday. I was worried it wouldn\'t taste as good as a traditional cake, but it exceeded all expectations. The design was beautiful, and the flavor was rich and moist.',
    author: 'Elena R.'
  }
];

export const CAKE_INSPIRATIONS: CakeInspiration[] = [
  {
    id: 'c1',
    title: 'RUSTIC BERRY BIRTHDAY',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c2',
    title: 'CLASSIC FLORAL WEDDING',
    image: 'https://images.unsplash.com/photo-1527524808410-f4577c2ee15c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c3',
    title: 'MODERN CHOCOLATE & GOLD',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Traditional Hand Kneading',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80',
    description: 'Kneading dough in our flour-dusted workspace.'
  },
  {
    id: 'g2',
    title: 'Cozy Morning Café Seating',
    category: 'Café',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    description: 'Our bright, cozy neighborhood tables.'
  },
  {
    id: 'g3',
    title: 'Fresh Breads Out of the Oven',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    description: 'Beautiful warm loaves cooling in the morning.'
  },
  {
    id: 'g4',
    title: 'Artisanal Counter Displays',
    category: 'Café',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80',
    description: 'Delicious selection of daily treats waiting for you.'
  }
];
