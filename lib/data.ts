export type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
  purpose: 'buy' | 'rent';
  image: string;
  featured: boolean;
};

export const MUMBAI_PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'Skyline Sea Facing Penthouse',
    location: 'Worli Sea Face, Mumbai',
    price: '₹ 25.5 Cr',
    beds: 5,
    baths: 5,
    sqft: '4,500',
    type: 'Penthouse',
    purpose: 'buy',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Premium Apartment in BKC',
    location: 'Bandra Kurla Complex, Mumbai',
    price: '₹ 2.5 Lacs/mo',
    beds: 3,
    baths: 3,
    sqft: '2,100',
    type: 'Apartment',
    purpose: 'rent',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 3,
    title: 'Heritage Bungalow with Garden',
    location: 'Pali Hill, Bandra West, Mumbai',
    price: '₹ 45.0 Cr',
    beds: 6,
    baths: 7,
    sqft: '8,200',
    type: 'Bungalow',
    purpose: 'buy',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 4,
    title: 'Modern Highrise Config',
    location: 'Powai (Hiranandani Gardens), Mumbai',
    price: '₹ 1.2 Lacs/mo',
    beds: 2,
    baths: 2,
    sqft: '1,100',
    type: 'Apartment',
    purpose: 'rent',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 5,
    title: 'Luxury Villa with Private Pool',
    location: 'Juhu Scheme, Mumbai',
    price: '₹ 65.0 Cr',
    beds: 5,
    baths: 6,
    sqft: '7,000',
    type: 'Villa',
    purpose: 'buy',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 6,
    title: 'Sea View Studio',
    location: 'Versova, Andheri West, Mumbai',
    price: '₹ 65,000/mo',
    beds: 1,
    baths: 1,
    sqft: '600',
    type: 'Apartment',
    purpose: 'rent',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 7,
    title: 'Ultra-Luxury Duplex',
    location: 'Cuffe Parade, South Mumbai',
    price: '₹ 38.0 Cr',
    beds: 4,
    baths: 5,
    sqft: '5,500',
    type: 'Duplex',
    purpose: 'buy',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 8,
    title: 'Furnished Co-living Space',
    location: 'Malad West, Mumbai',
    price: '₹ 45,000/mo',
    beds: 2,
    baths: 2,
    sqft: '900',
    type: 'Apartment',
    purpose: 'rent',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false,
  }
];
