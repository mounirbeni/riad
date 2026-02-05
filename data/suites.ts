export type Suite = {
  slug: string;
  name: string;
  size: string;
  capacity: number;
  features: string[];
  priceFrom: string;
  description: string;
  amenities: string[];
  images: string[];
};

export const suites: Suite[] = [
  {
    slug: 'sahara-royale',
    name: 'Sahara Royale Suite',
    size: '78 sqm',
    capacity: 3,
    features: ['Private plunge pool', 'Patio lounge', 'Hand-carved canopy bed'],
    priceFrom: '€620',
    description:
      'Our largest suite blends desert tones with contemporary Moroccan artistry. A private plunge pool and sculpted archways create an effortless sense of calm.',
    amenities: [
      'Butler service on request',
      'Bespoke minibar with local botanicals',
      'Italian linen bedding',
      'Private terrace with shaded daybed',
      'Smart climate control'
    ],
    images: ['/images/suite-01.svg', '/images/suite-02.svg', '/images/suite-03.svg']
  },
  {
    slug: 'amber-courtyard',
    name: 'Amber Courtyard Suite',
    size: '54 sqm',
    capacity: 2,
    features: ['Courtyard access', 'Fireplace lounge', 'Original zellige details'],
    priceFrom: '€480',
    description:
      'Soft amber lighting, polished plaster walls, and a private courtyard terrace invite unhurried moments from dawn to dusk.',
    amenities: [
      'In-suite tea ceremony set',
      'Walk-in rain shower',
      'Artisan leather seating',
      'Evening turndown ritual'
    ],
    images: ['/images/suite-04.svg', '/images/suite-05.svg', '/images/suite-06.svg']
  },
  {
    slug: 'olive-garden',
    name: 'Olive Garden Suite',
    size: '46 sqm',
    capacity: 2,
    features: ['Garden view', 'Stone soaking tub', 'Meditation corner'],
    priceFrom: '€420',
    description:
      'Overlooking the riad gardens, this suite balances minimal luxury with botanical touches, perfect for restorative escapes.',
    amenities: [
      'Signature scent diffuser',
      'Meditation cushions',
      'Outdoor breakfast service',
      'High-speed Wi-Fi'
    ],
    images: ['/images/suite-07.svg', '/images/suite-08.svg', '/images/suite-09.svg']
  },
  {
    slug: 'noor-terrace',
    name: 'Noor Terrace Suite',
    size: '38 sqm',
    capacity: 2,
    features: ['Rooftop terrace', 'Star-gazing lounge', 'Custom lighting scenes'],
    priceFrom: '€360',
    description:
      'An intimate sanctuary featuring a private rooftop terrace. Perfect for sunset cocktails and Marrakech nights.',
    amenities: [
      'Signature rooftop service',
      'Sonos sound system',
      'Egyptian cotton linens',
      'Personalized pillow menu'
    ],
    images: ['/images/suite-10.svg', '/images/suite-11.svg', '/images/suite-12.svg']
  }
];
