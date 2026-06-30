export interface Listing {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: 'House' | 'Condo' | 'Townhouse' | 'Luxury';
  images: string[];
  description: string;
  features: string[];
  yearBuilt: number;
  lotSize: string;
  featured?: boolean;
}

export const listings: Listing[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa in Preston Hollow',
    address: '4521 W Park Ln',
    city: 'Dallas',
    state: 'TX',
    zip: '75220',
    price: 3250000,
    beds: 5,
    baths: 6,
    sqft: 6500,
    type: 'Luxury',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Experience unparalleled luxury in this stunning modern estate located in the heart of Preston Hollow. Featuring floor-to-ceiling windows, a gourmet chef\'s kitchen, and a resort-style pool.',
    features: ['Smart Home System', 'Wine Cellar', 'Home Theater', 'Infinity Pool', 'Outdoor Kitchen'],
    yearBuilt: 2022,
    lotSize: '0.85 Acres',
    featured: true
  },
  {
    id: '2',
    title: 'Contemporary Uptown Penthouse',
    address: '2300 N Akard St #4200',
    city: 'Dallas',
    state: 'TX',
    zip: '75201',
    price: 1850000,
    beds: 3,
    baths: 3.5,
    sqft: 3200,
    type: 'Condo',
    images: [
      'https://images.unsplash.com/photo-1512918766671-ed6a9960a750?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Sophisticated living with breathtaking skyline views. This Uptown penthouse offers an open-concept layout, premium finishes, and exclusive building amenities.',
    features: ['Skyline Views', '24/7 Concierge', 'Private Terrace', 'Fitness Center', 'Valet Parking'],
    yearBuilt: 2018,
    lotSize: 'N/A',
    featured: true
  },
  {
    id: '3',
    title: 'Charming Lakewood Craftsman',
    address: '6812 Lakewood Blvd',
    city: 'Dallas',
    state: 'TX',
    zip: '75214',
    price: 1250000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: 'House',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'A beautifully restored craftsman home in the historic Lakewood neighborhood. Blending classic charm with modern convenience, just steps away from White Rock Lake.',
    features: ['Original Hardwood Floors', 'Fireplace', 'Screened Porch', 'Updated Kitchen', 'Walking Distance to Lake'],
    yearBuilt: 1940,
    lotSize: '0.25 Acres',
    featured: true
  },
  {
    id: '4',
    title: 'Sleek Design District Loft',
    address: '1414 Dragon St',
    city: 'Dallas',
    state: 'TX',
    zip: '75207',
    price: 650000,
    beds: 2,
    baths: 2,
    sqft: 1850,
    type: 'Condo',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Industrial-chic loft in the vibrant Design District. Featuring exposed brick, high ceilings, and an expansive open floor plan perfect for entertaining.',
    features: ['Exposed Brick', 'Concrete Floors', 'Roof Deck Access', 'Art Gallery Lighting'],
    yearBuilt: 2015,
    lotSize: 'N/A'
  },
  {
    id: '5',
    title: 'Elegant University Park Estate',
    address: '3500 Amherst Ave',
    city: 'Dallas',
    state: 'TX',
    zip: '75225',
    price: 4500000,
    beds: 6,
    baths: 7,
    sqft: 7800,
    type: 'Luxury',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'An architectural masterpiece in University Park. This estate offers grand proportions, exquisite craftsmanship, and total privacy in one of Dallas\'s most prestigious neighborhoods.',
    features: ['Elevator', 'Library', 'Guest House', 'Sport Court', 'Heated Pool'],
    yearBuilt: 2020,
    lotSize: '0.45 Acres'
  },
  {
    id: '6',
    title: 'Modern Townhome in Lower Greenville',
    address: '5622 Richmond Ave',
    city: 'Dallas',
    state: 'TX',
    zip: '75206',
    price: 875000,
    beds: 3,
    baths: 3.5,
    sqft: 2450,
    type: 'Townhouse',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Contemporary townhome living in the heart of Lower Greenville. Walk to the best restaurants, shops, and nightlife Dallas has to offer.',
    features: ['Rooftop Terrace', 'Quartz Countertops', 'Energy Efficient', 'Two-Car Garage'],
    yearBuilt: 2021,
    lotSize: '0.05 Acres'
  }
];

export const agentDetails = {
  name: 'Harry Lewis',
  title: 'Senior Real Estate Consultant',
  experience: '15+ Years',
  phone: '(214) 555-0123',
  email: 'harry@harryrealestate.com',
  address: '2100 Ross Ave, Dallas, TX 75201',
  bio: 'With over 15 years of experience in the Dallas luxury real estate market, Harry Lewis has built a reputation for his meticulous attention to detail, expert negotiation skills, and unwavering commitment to his clients. Whether you are buying your first home or selling a multi-million dollar estate, Harry provides a personalized, tech-forward approach to ensure a seamless transaction.',
  certifications: ['REALTOR®', 'Certified Residential Specialist (CRS)', 'Accredited Buyer\'s Representative (ABR)'],
  stats: [
    { label: 'Homes Sold', value: '500+' },
    { label: 'Sales Volume', value: '$750M+' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Client Satisfaction', value: '99%' }
  ],
  socials: {
    instagram: 'https://instagram.com/harryrealestate',
    linkedin: 'https://linkedin.com/in/harrylewis',
    facebook: 'https://facebook.com/harryrealestatetx'
  }
};

export const testimonials = [
  {
    name: 'Robert & Sarah Miller',
    content: 'Harry is simply the best in the business. He helped us find our dream home in Preston Hollow and negotiated a price we didn\'t think was possible. His market knowledge is unparalleled.',
    role: 'Home Buyers'
  },
  {
    name: 'Jennifer Stevens',
    content: 'Selling a home can be stressful, but Harry made it look easy. From professional staging to high-end marketing, he handled everything. Our house sold in 3 days above asking price!',
    role: 'Home Seller'
  },
  {
    name: 'Michael Chen',
    content: 'As a real estate investor, I value efficiency and data. Harry provides both. He has a keen eye for value and has helped me grow my portfolio significantly over the last 5 years.',
    role: 'Property Investor'
  }
];
