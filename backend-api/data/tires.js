const tires = [
  {
    id: 'tire-001',
    name: 'MICHELIN Pilot Sport 4',
    sku: 'PS4-225-45-R17',
    brand: 'MICHELIN',
    category: 'tires',
    price: 85.000,
    originalPrice: null,
    discount: null,
    warranty: '5 YEAR',
    specialOffer: true,
    image: '/images/tire.png',
    stock: 20,
    description: 'High-performance summer tire',
    specifications: {
      size: '225/45R17',
      loadIndex: '94',
      speedRating: 'Y',
      season: 'Summer',
      pattern: 'Asymmetric'
    }
  },
  {
    id: 'tire-002',
    name: 'BRIDGESTONE Turanza T005',
    sku: 'T005-205-55-R16',
    brand: 'BRIDGESTONE',
    category: 'tires',
    price: 72.500,
    originalPrice: 85.000,
    discount: '15%',
    warranty: '5 YEAR',
    specialOffer: true,
    image: '/images/tire.png',
    stock: 25,
    description: 'Premium touring tire',
    specifications: {
      size: '205/55R16',
      loadIndex: '91',
      speedRating: 'V',
      season: 'All-Season',
      pattern: 'Symmetric'
    }
  },
  {
    id: 'tire-003',
    name: 'GOODYEAR Eagle F1 Asymmetric',
    sku: 'EF1A-245-40-R18',
    brand: 'GOODYEAR',
    category: 'tires',
    price: 95.000,
    originalPrice: null,
    discount: null,
    warranty: '5 YEAR',
    specialOffer: false,
    image: '/images/tire.png',
    stock: 15,
    description: 'Ultra-high performance tire',
    specifications: {
      size: '245/40R18',
      loadIndex: '97',
      speedRating: 'Y',
      season: 'Summer',
      pattern: 'Asymmetric'
    }
  },
  {
    id: 'tire-004',
    name: 'CONTINENTAL PremiumContact 6',
    sku: 'PC6-215-55-R17',
    brand: 'CONTINENTAL',
    category: 'tires',
    price: 78.000,
    originalPrice: 92.000,
    discount: '15%',
    warranty: '5 YEAR',
    specialOffer: true,
    image: '/images/tire.png',
    stock: 18,
    description: 'Premium touring tire with excellent grip',
    specifications: {
      size: '215/55R17',
      loadIndex: '94',
      speedRating: 'V',
      season: 'Summer',
      pattern: 'Asymmetric'
    }
  },
  {
    id: 'tire-005',
    name: 'PIRELLI P Zero',
    sku: 'PZ-235-45-R18',
    brand: 'PIRELLI',
    category: 'tires',
    price: 105.000,
    originalPrice: null,
    discount: null,
    warranty: '5 YEAR',
    specialOffer: true,
    image: '/images/tire.png',
    stock: 12,
    description: 'High-performance sports tire',
    specifications: {
      size: '235/45R18',
      loadIndex: '98',
      speedRating: 'Y',
      season: 'Summer',
      pattern: 'Asymmetric'
    }
  },
  {
    id: 'tire-006',
    name: 'DUNLOP Sport Maxx RT2',
    sku: 'SMRT2-225-40-R18',
    brand: 'DUNLOP',
    category: 'tires',
    price: 88.000,
    originalPrice: null,
    discount: '10%',
    warranty: '5 YEAR',
    specialOffer: false,
    image: '/images/tire.png',
    stock: 22,
    description: 'Ultra-high performance tire',
    specifications: {
      size: '225/40R18',
      loadIndex: '92',
      speedRating: 'Y',
      season: 'Summer',
      pattern: 'Asymmetric'
    }
  },
  {
    id: 'tire-007',
    name: 'YOKOHAMA BluEarth AE50',
    sku: 'AE50-195-65-R15',
    brand: 'YOKOHAMA',
    category: 'tires',
    price: 58.000,
    originalPrice: null,
    discount: null,
    warranty: '4 YEAR',
    specialOffer: true,
    image: '/images/tire.png',
    stock: 30,
    description: 'Eco-friendly touring tire',
    specifications: {
      size: '195/65R15',
      loadIndex: '91',
      speedRating: 'H',
      season: 'All-Season',
      pattern: 'Symmetric'
    }
  },
  {
    id: 'tire-008',
    name: 'HANKOOK Ventus V12 evo2',
    sku: 'V12E2-215-45-R17',
    brand: 'HANKOOK',
    category: 'tires',
    price: 68.000,
    originalPrice: 80.000,
    discount: '15%',
    warranty: '5 YEAR',
    specialOffer: true,
    image: '/images/tire.png',
    stock: 24,
    description: 'Performance tire for sporty driving',
    specifications: {
      size: '215/45R17',
      loadIndex: '91',
      speedRating: 'W',
      season: 'Summer',
      pattern: 'Asymmetric'
    }
  }
];

const tireBrands = [
  { id: 'brand-1', name: 'MICHELIN', logo: '/images/brands/michelin.png' },
  { id: 'brand-2', name: 'BRIDGESTONE', logo: '/images/brands/bridgestone.png' },
  { id: 'brand-3', name: 'GOODYEAR', logo: '/images/brands/goodyear.png' },
  { id: 'brand-4', name: 'CONTINENTAL', logo: '/images/brands/continental.png' },
  { id: 'brand-5', name: 'PIRELLI', logo: '/images/brands/pirelli.png' },
  { id: 'brand-6', name: 'DUNLOP', logo: '/images/brands/dunlop.png' },
  { id: 'brand-7', name: 'YOKOHAMA', logo: '/images/brands/yokohama.png' },
  { id: 'brand-8', name: 'HANKOOK', logo: '/images/brands/hankook.png' }
];

module.exports = { tires, tireBrands };
