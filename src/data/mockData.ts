export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  amazonUrl: string;
  category: string;
  subCategory: string;
  features: string[];
  pros: string[];
  cons: string[];
  isBestOverall?: boolean;
  isBestBudget?: boolean;
  specs: Record<string, string>;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
}

export const PRODUCTS: Product[] = [
  // Electronics - Headphones
  {
    id: 'e1',
    title: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
    slug: 'sony-wh-1000xm5-review',
    description: 'The Sony WH-1000XM5 are the best noise-canceling headphones you can buy today.',
    price: 398.00,
    rating: 4.8,
    reviewCount: 12450,
    imageUrl: 'https://picsum.photos/seed/sony/800/600',
    amazonUrl: 'https://amazon.com/dp/B09XS7JWHH',
    category: 'Electronics',
    subCategory: 'Headphones',
    features: ['Industry-leading noise cancellation', '30-hour battery life', 'Crystal clear hands-free calling'],
    pros: ['Excellent noise cancellation', 'Comfortable design', 'Great sound quality'],
    cons: ['Expensive', 'Not foldable', 'Case is bulky'],
    isBestOverall: true,
    specs: { 'Battery Life': '30 Hours', 'Weight': '250g', 'Bluetooth': '5.2' }
  },
  {
    id: 'e2',
    title: 'Bose QuietComfort Ultra Headphones',
    slug: 'bose-qc-ultra-review',
    description: 'Bose QuietComfort Ultra headphones offer the most immersive noise cancellation experience.',
    price: 429.00,
    rating: 4.7,
    reviewCount: 5600,
    imageUrl: 'https://picsum.photos/seed/boseultra/800/600',
    amazonUrl: 'https://amazon.com/dp/B0CCZ1X789',
    category: 'Electronics',
    subCategory: 'Headphones',
    features: ['Immersive Audio', 'World-class noise cancellation', 'CustomTune technology'],
    pros: ['Top-tier ANC', 'Immersive sound modes', 'Premium build'],
    cons: ['Very expensive', 'Battery life could be better'],
    specs: { 'Battery Life': '24 Hours', 'Weight': '250g', 'Bluetooth': '5.3' }
  },
  // Cooking - Knife
  {
    id: 'c1',
    title: 'Wüsthof Classic 8-Inch Chef\'s Knife',
    slug: 'wusthof-classic-chef-knife-review',
    description: 'The gold standard for professional chefs and home cooks alike.',
    price: 170.00,
    rating: 4.9,
    reviewCount: 8500,
    imageUrl: 'https://picsum.photos/seed/knife1/800/600',
    amazonUrl: 'https://amazon.com/dp/B00009ZK08',
    category: 'Cooking',
    subCategory: 'Knife',
    features: ['Precision forged', 'Full tang', 'High-carbon stainless steel'],
    pros: ['Perfect balance', 'Stays sharp', 'Durable'],
    cons: ['Expensive', 'Requires hand washing'],
    isBestOverall: true,
    specs: { 'Blade Length': '8 Inches', 'Material': 'High-Carbon Steel', 'Weight': '255g' }
  },
  {
    id: 'c2',
    title: 'Victorinox Fibrox Pro 8-Inch Chef\'s Knife',
    slug: 'victorinox-fibrox-review',
    description: 'The best budget chef\'s knife that performs like a premium tool.',
    price: 55.00,
    rating: 4.8,
    reviewCount: 25000,
    imageUrl: 'https://picsum.photos/seed/knife2/800/600',
    amazonUrl: 'https://amazon.com/dp/B008M5U1C2',
    category: 'Cooking',
    subCategory: 'Knife',
    features: ['Ergonomic Fibrox handle', 'High-carbon stainless steel blade', 'NSF approved'],
    pros: ['Incredible value', 'Non-slip grip', 'Easy to sharpen'],
    cons: ['Handle feels utilitarian', 'Not as balanced as forged knives'],
    isBestBudget: true,
    specs: { 'Blade Length': '8 Inches', 'Material': 'Stainless Steel', 'Weight': '180g' }
  },
  {
    id: 'c3',
    title: 'Shun Classic 8-Inch Chef\'s Knife',
    slug: 'shun-classic-review',
    description: 'A beautiful Japanese-style knife with a razor-sharp edge.',
    price: 160.00,
    rating: 4.7,
    reviewCount: 4200,
    imageUrl: 'https://picsum.photos/seed/knife3/800/600',
    amazonUrl: 'https://amazon.com/dp/B0000Y7KNQ',
    category: 'Cooking',
    subCategory: 'Knife',
    features: ['VG-MAX steel core', '68 layers of Damascus cladding', 'D-shaped PakkaWood handle'],
    pros: ['Extremely sharp', 'Beautiful design', 'Lightweight'],
    cons: ['Brittle blade', 'Hand wash only'],
    specs: { 'Blade Length': '8 Inches', 'Material': 'VG-MAX Steel', 'Weight': '200g' }
  },
  {
    id: 'c4',
    title: 'Global G-2 8-Inch Chef\'s Knife',
    slug: 'global-g2-review',
    description: 'Distinctive lightweight design with a unique stainless steel handle.',
    price: 99.00,
    rating: 4.7,
    reviewCount: 6100,
    imageUrl: 'https://picsum.photos/seed/knife4/800/600',
    amazonUrl: 'https://amazon.com/dp/B00005OL44',
    category: 'Cooking',
    subCategory: 'Knife',
    features: ['CROMOVA 18 stainless steel', 'Ice tempered', 'Weighted hollow handle'],
    pros: ['Very light', 'Modern look', 'Great for small hands'],
    cons: ['Slippery when wet', 'Unconventional feel'],
    specs: { 'Blade Length': '8 Inches', 'Material': 'CROMOVA 18', 'Weight': '170g' }
  },
  {
    id: 'c5',
    title: 'Mercer Culinary Renaissance 8-Inch Chef\'s Knife',
    slug: 'mercer-renaissance-review',
    description: 'A solid mid-range forged knife for everyday use.',
    price: 65.00,
    rating: 4.6,
    reviewCount: 3800,
    imageUrl: 'https://picsum.photos/seed/knife5/800/600',
    amazonUrl: 'https://amazon.com/dp/B002R16772',
    category: 'Cooking',
    subCategory: 'Knife',
    features: ['Triple-riveted handle', 'Forged high-carbon steel', 'Full tang'],
    pros: ['Good balance', 'Comfortable handle', 'Affordable forged knife'],
    cons: ['Heavier than some', 'Needs regular honing'],
    specs: { 'Blade Length': '8 Inches', 'Material': 'High-Carbon Steel', 'Weight': '260g' }
  },
  {
    id: 'c6',
    title: 'Dalstrong 8-Inch Chef Knife - Gladiator Series',
    slug: 'dalstrong-gladiator-review',
    description: 'Bold design with high-performance German steel.',
    price: 75.00,
    rating: 4.7,
    reviewCount: 12000,
    imageUrl: 'https://picsum.photos/seed/knife6/800/600',
    amazonUrl: 'https://amazon.com/dp/B00R20C79C',
    category: 'Cooking',
    subCategory: 'Knife',
    features: ['ThyssenKrupp German steel', 'Hand-polished edge', 'G10 handle'],
    pros: ['Striking looks', 'Excellent packaging', 'Very sharp'],
    cons: ['A bit flashy for some', 'Heavier blade'],
    specs: { 'Blade Length': '8 Inches', 'Material': 'German Steel', 'Weight': '280g' }
  },
  {
    id: 'c7',
    title: 'Henckels Classic 8-Inch Chef\'s Knife',
    slug: 'henckels-classic-review',
    description: 'Traditional German craftsmanship at a reasonable price.',
    price: 85.00,
    rating: 4.6,
    reviewCount: 5200,
    imageUrl: 'https://picsum.photos/seed/knife7/800/600',
    amazonUrl: 'https://amazon.com/dp/B00004RFMT',
    category: 'Cooking',
    subCategory: 'Knife',
    features: ['Forged construction', 'High-quality stainless steel', 'Triple-rivet handle'],
    pros: ['Classic feel', 'Reliable brand', 'Good edge retention'],
    cons: ['Bolster can make sharpening tricky', 'Generic design'],
    specs: { 'Blade Length': '8 Inches', 'Material': 'Stainless Steel', 'Weight': '250g' }
  },
  {
    id: 'c8',
    title: 'Zwilling Pro 8-Inch Chef\'s Knife',
    slug: 'zwilling-pro-review',
    description: 'Innovative curved bolster for the ultimate pinch grip.',
    price: 160.00,
    rating: 4.8,
    reviewCount: 3500,
    imageUrl: 'https://picsum.photos/seed/knife8/800/600',
    amazonUrl: 'https://amazon.com/dp/B007I1X7B0',
    category: 'Cooking',
    subCategory: 'Knife',
    features: ['Unique curved bolster', 'Sigmaforge construction', 'Friodur ice-hardened blade'],
    pros: ['Extremely comfortable', 'Professional grade', 'Superb balance'],
    cons: ['Expensive', 'Heavy'],
    specs: { 'Blade Length': '8 Inches', 'Material': 'Stainless Steel', 'Weight': '270g' }
  },
  {
    id: 'c9',
    title: 'Misen 8-Inch Chef\'s Knife',
    slug: 'misen-chef-knife-review',
    description: 'The "startup" knife that took the internet by storm.',
    price: 75.00,
    rating: 4.5,
    reviewCount: 15000,
    imageUrl: 'https://picsum.photos/seed/knife9/800/600',
    amazonUrl: 'https://amazon.com/dp/B07R6H6X9W',
    category: 'Cooking',
    subCategory: 'Knife',
    features: ['AICHI AUS-10 steel', '15-degree blade angle', 'Sloped bolster'],
    pros: ['Great value', 'Sharp out of the box', 'Modern colors'],
    cons: ['Edge retention is average', 'Handle can feel small'],
    specs: { 'Blade Length': '8 Inches', 'Material': 'AUS-10 Steel', 'Weight': '220g' }
  },
  {
    id: 'c10',
    title: 'Mac Knife Professional 8-Inch Hollow Edge Chef\'s Knife',
    slug: 'mac-knife-pro-review',
    description: 'The favorite of many professional chefs for its thin, sharp blade.',
    price: 145.00,
    rating: 4.8,
    reviewCount: 2800,
    imageUrl: 'https://picsum.photos/seed/knife10/800/600',
    amazonUrl: 'https://amazon.com/dp/B000N5H2XU',
    category: 'Cooking',
    subCategory: 'Knife',
    features: ['Dimpled blade', 'Sub-zero tempered steel', 'Pakkawood handle'],
    pros: ['Incredibly sharp', 'Food doesn\'t stick', 'Light and nimble'],
    cons: ['Requires careful maintenance', 'Plain appearance'],
    specs: { 'Blade Length': '8 Inches', 'Material': 'High-Carbon Steel', 'Weight': '185g' }
  },
  // Home Appliances - TV
  {
    id: 'h1',
    title: 'LG C3 Series 65-Inch Class OLED evo Smart TV',
    slug: 'lg-c3-oled-review',
    description: 'The best all-around OLED TV for movies and gaming.',
    price: 1599.00,
    rating: 4.9,
    reviewCount: 4500,
    imageUrl: 'https://picsum.photos/seed/tv1/800/600',
    amazonUrl: 'https://amazon.com/dp/B0BVX9Y99B',
    category: 'Home Appliances',
    subCategory: 'TV',
    features: ['OLED evo panel', 'α9 AI Processor Gen6', '4 HDMI 2.1 ports'],
    pros: ['Perfect blacks', 'Incredible gaming features', 'Thin design'],
    cons: ['Not as bright as QD-OLED', 'Expensive'],
    isBestOverall: true,
    specs: { 'Screen Size': '65 Inches', 'Panel Type': 'OLED', 'Refresh Rate': '120Hz' }
  },
  {
    id: 'h2',
    title: 'Samsung S90C 65-Inch OLED TV',
    slug: 'samsung-s90c-review',
    description: 'Stunning colors and brightness with QD-OLED technology.',
    price: 1699.00,
    rating: 4.8,
    reviewCount: 3200,
    imageUrl: 'https://picsum.photos/seed/tv2/800/600',
    amazonUrl: 'https://amazon.com/dp/B0BVMQC9S5',
    category: 'Home Appliances',
    subCategory: 'TV',
    features: ['Quantum HDR OLED', 'Neural Quantum Processor 4K', 'Motion Xcelerator Turbo Pro'],
    pros: ['Vibrant colors', 'Very bright for OLED', 'Great value'],
    cons: ['No Dolby Vision support', 'Tizen OS can be cluttered'],
    specs: { 'Screen Size': '65 Inches', 'Panel Type': 'QD-OLED', 'Refresh Rate': '144Hz' }
  },
  // Home Appliances - Fridge
  {
    id: 'f1',
    title: 'Samsung Bespoke 4-Door French Door Refrigerator',
    slug: 'samsung-bespoke-fridge-review',
    description: 'A customizable and stylish refrigerator with advanced features.',
    price: 2499.00,
    rating: 4.7,
    reviewCount: 1800,
    imageUrl: 'https://picsum.photos/seed/fridge1/800/600',
    amazonUrl: 'https://amazon.com/dp/B09NMMY6X9',
    category: 'Home Appliances',
    subCategory: 'Fridge',
    features: ['Customizable door panels', 'Beverage Center', 'Dual Auto Ice Maker'],
    pros: ['Beautiful design', 'Spacious', 'Great ice options'],
    cons: ['Panels cost extra', 'Large footprint'],
    specs: { 'Capacity': '29 cu. ft.', 'Type': 'French Door', 'Finish': 'Customizable' }
  },
  // Kitchen - Air Fryer
  {
    id: 'k1',
    title: 'Ninja AF101 Air Fryer',
    slug: 'ninja-af101-review',
    description: 'The Ninja Air Fryer that crisps, roasts, reheats, and dehydrates.',
    price: 99.99,
    rating: 4.8,
    reviewCount: 52000,
    imageUrl: 'https://picsum.photos/seed/airfryer/800/600',
    amazonUrl: 'https://amazon.com/dp/B07FDJMC9Q',
    category: 'Kitchen',
    subCategory: 'Air Fryer',
    features: ['4-quart capacity', 'Wide temperature range', 'Dishwasher safe parts'],
    pros: ['Easy to clean', 'Compact size', 'Versatile'],
    cons: ['Small for families', 'Loud fan'],
    specs: { 'Capacity': '4 Quarts', 'Wattage': '1550W' }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How to Choose the Best Noise Canceling Headphones in 2026',
    slug: 'how-to-choose-anc-headphones',
    excerpt: 'Finding the right pair of headphones can be overwhelming. Here is what you need to look for.',
    content: `
      <p>Active Noise Cancellation (ANC) has come a long way in the last few years. In 2026, the technology is more accessible and powerful than ever. But with so many options, how do you choose the right one?</p>
      
      <h2>1. Understanding ANC Types</h2>
      <p>Not all noise cancellation is created equal. Feed-forward ANC uses microphones on the outside of the earcups, while feed-back ANC uses microphones inside. The best premium models use Hybrid ANC, which combines both for the most effective silence.</p>
      
      <h2>2. Battery Life Matters</h2>
      <p>In 2026, you should expect at least 30 hours of battery life with ANC turned on. Some budget models now even reach 50+ hours. Look for "Fast Charge" features that give you 5 hours of playback from just 10 minutes of charging.</p>
      
      <h2>3. Codecs and Sound Quality</h2>
      <p>If you're an audiophile, look for LDAC or aptX Lossless support. These allow for high-resolution audio over Bluetooth, closing the gap between wireless and wired performance.</p>
      
      <h2>Conclusion</h2>
      <p>Ultimately, the best headphones are the ones that fit your lifestyle. If you travel frequently, prioritize comfort and ANC strength. If you're a commuter, look for transparency modes that let you hear announcements.</p>
    `,
    author: 'John Doe',
    date: '2026-02-20',
    imageUrl: 'https://picsum.photos/seed/blog1/800/400',
    category: 'Guides'
  },
  {
    id: '2',
    title: 'Top 5 Tech Gadgets for Digital Nomads',
    slug: 'tech-gadgets-digital-nomads',
    excerpt: 'Working remotely requires the right tools. These 5 gadgets will make your life easier.',
    content: `
      <p>Being a digital nomad in 2026 is easier than ever, thanks to a new wave of ultra-portable and powerful tech. Here are the top 5 gadgets that should be in every remote worker's backpack.</p>
      
      <h2>1. The Ultra-Light Laptop</h2>
      <p>Weight is everything when you're moving between co-working spaces and cafes. The latest M3 MacBook Air or the Dell XPS 13 are perfect examples of power meeting portability.</p>
      
      <h2>2. Portable OLED Monitor</h2>
      <p>One screen is rarely enough for productivity. Modern portable monitors are now thinner than a tablet and offer stunning OLED colors, connecting via a single USB-C cable.</p>
      
      <h2>3. Universal Travel Adapter with GaN Tech</h2>
      <p>Gallium Nitride (GaN) chargers are smaller and more efficient. A single 100W GaN adapter can charge your laptop, phone, and headphones simultaneously while taking up minimal space.</p>
      
      <h2>4. Noise-Canceling Earbuds</h2>
      <p>While over-ear headphones are great, high-end earbuds like the Sony WF-1000XM5 offer incredible ANC in a pocketable form factor.</p>
      
      <h2>5. Ergonomic Folding Keyboard</h2>
      <p>Protect your wrists with a high-quality folding mechanical keyboard. They offer a much better typing experience than laptop keys without the bulk of a full-sized board.</p>
    `,
    author: 'Jane Smith',
    date: '2026-02-15',
    imageUrl: 'https://picsum.photos/seed/blog2/800/400',
    category: 'Tech'
  },
  {
    id: '3',
    title: 'The Ultimate Smart Home Setup Guide',
    slug: 'ultimate-smart-home-guide',
    excerpt: 'Transform your living space with these essential smart home devices and automation tips.',
    content: `
      <p>Building a smart home in 2026 is no longer about just turning off lights with your voice. It's about creating an ecosystem that anticipates your needs.</p>
      
      <h2>The Foundation: Matter & Thread</h2>
      <p>Ensure all your new devices support the Matter standard. This guarantees that your Apple, Google, and Amazon devices can all talk to each other without issues.</p>
      
      <h2>Smart Lighting for Wellness</h2>
      <p>Modern smart bulbs can mimic the natural progression of sunlight, helping regulate your circadian rhythm. Set your lights to warm tones in the evening to help you wind down.</p>
      
      <h2>Automated Climate Control</h2>
      <p>Smart thermostats now use AI to learn your schedule and optimize energy usage, potentially saving you 20% on your monthly bills.</p>
      
      <h2>Security and Privacy</h2>
      <p>Look for security cameras that offer local storage options. This keeps your data out of the cloud and gives you more control over your privacy.</p>
    `,
    author: 'Mike Johnson',
    date: '2026-02-10',
    imageUrl: 'https://picsum.photos/seed/blog3/800/400',
    category: 'Home'
  },
  {
    id: '4',
    title: 'Why You Need an Air Fryer in Your Kitchen',
    slug: 'why-you-need-air-fryer',
    excerpt: 'Air fryers are more than just a trend. Discover the health benefits and convenience they offer.',
    content: `
      <p>If you haven't joined the air fryer revolution yet, 2026 is the year to do it. These appliances have evolved from simple convection ovens into versatile kitchen powerhouses.</p>
      
      <h2>Healthier Cooking</h2>
      <p>Air fryers use up to 80% less oil than traditional deep frying while achieving the same crispy texture. It's a game-changer for anyone looking to eat healthier without sacrificing flavor.</p>
      
      <h2>Speed and Efficiency</h2>
      <p>Because they are smaller and use powerful fans, air fryers preheat in seconds and cook food up to 30% faster than a standard oven.</p>
      
      <h2>Versatility</h2>
      <p>Modern air fryers can bake, roast, dehydrate, and even rotisserie. You can cook everything from a whole chicken to a batch of brownies in one device.</p>
      
      <h2>Easy Cleanup</h2>
      <p>Most air fryer baskets are now ceramic-coated and dishwasher safe, making them much easier to clean than greasy pans or large oven trays.</p>
    `,
    author: 'Sarah Wilson',
    date: '2026-02-05',
    imageUrl: 'https://picsum.photos/seed/blog4/800/400',
    category: 'Cooking'
  }
];

