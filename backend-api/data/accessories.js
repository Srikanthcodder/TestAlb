const accessories = [
  {
    id: 'acc-001',
    name: 'Car Floor Mats - Premium',
    sku: 'CFM-PREM-001',
    brand: 'AutoMax',
    category: 'accessories',
    price: 35.000,
    originalPrice: null,
    discount: null,
    warranty: '1 YEAR',
    specialOffer: true,
    image: '/images/accessory.png',
    stock: 40,
    description: 'Premium quality rubber floor mats',
    specifications: {
      material: 'Heavy-duty rubber',
      color: 'Black',
      pieces: '4',
      fitment: 'Universal'
    }
  },
  {
    id: 'acc-002',
    name: 'Car Phone Holder',
    sku: 'CPH-MAG-002',
    brand: 'TechDrive',
    category: 'accessories',
    price: 12.500,
    originalPrice: 18.000,
    discount: '30%',
    warranty: '6 MONTHS',
    specialOffer: true,
    image: '/images/accessory.png',
    stock: 65,
    description: 'Magnetic phone holder for dashboard',
    specifications: {
      type: 'Magnetic',
      mounting: 'Dashboard',
      rotation: '360°',
      compatibility: 'Universal'
    }
  },
  {
    id: 'acc-003',
    name: 'Car Air Freshener Set',
    sku: 'CAF-SET-003',
    brand: 'FreshAir',
    category: 'accessories',
    price: 8.000,
    originalPrice: null,
    discount: null,
    warranty: null,
    specialOffer: false,
    image: '/images/accessory.png',
    stock: 100,
    description: 'Premium car air fresheners - Pack of 3',
    specifications: {
      quantity: '3 pieces',
      fragrances: 'Ocean, Vanilla, Citrus',
      duration: '45 days each',
      type: 'Gel'
    }
  },
  {
    id: 'acc-004',
    name: 'USB Car Charger - Fast Charge',
    sku: 'UCC-FC-004',
    brand: 'PowerDrive',
    category: 'accessories',
    price: 15.000,
    originalPrice: null,
    discount: '20%',
    warranty: '1 YEAR',
    specialOffer: true,
    image: '/images/accessory.png',
    stock: 75,
    description: 'Dual port fast charging USB car charger',
    specifications: {
      ports: '2 USB',
      output: '3.1A',
      technology: 'Quick Charge 3.0',
      compatibility: 'Universal'
    }
  },
  {
    id: 'acc-005',
    name: 'Car Sunshade - Windshield',
    sku: 'CSS-WS-005',
    brand: 'CoolShade',
    category: 'accessories',
    price: 18.500,
    originalPrice: null,
    discount: null,
    warranty: '6 MONTHS',
    specialOffer: false,
    image: '/images/accessory.png',
    stock: 50,
    description: 'Foldable windshield sunshade',
    specifications: {
      size: '150cm x 70cm',
      material: 'Reflective foil',
      protection: 'UV blocking',
      storage: 'Foldable'
    }
  },
  {
    id: 'acc-006',
    name: 'Car Dash Camera - Full HD',
    sku: 'CDC-FHD-006',
    brand: 'VisionPro',
    category: 'accessories',
    price: 65.000,
    originalPrice: 85.000,
    discount: '25%',
    warranty: '2 YEAR',
    specialOffer: true,
    image: '/images/accessory.png',
    stock: 28,
    description: 'Full HD dash camera with night vision',
    specifications: {
      resolution: '1080p',
      screen: '3 inch',
      storage: 'MicroSD up to 128GB',
      features: 'Night vision, G-sensor'
    }
  },
  {
    id: 'acc-007',
    name: 'Car Seat Covers - Leather',
    sku: 'CSC-LEATH-007',
    brand: 'LuxeSeats',
    category: 'accessories',
    price: 95.000,
    originalPrice: null,
    discount: null,
    warranty: '1 YEAR',
    specialOffer: true,
    image: '/images/accessory.png',
    stock: 22,
    description: 'Premium leather seat covers - Full set',
    specifications: {
      material: 'PU Leather',
      color: 'Black',
      pieces: '5 seats',
      fitment: 'Universal'
    }
  },
  {
    id: 'acc-008',
    name: 'Car Emergency Kit',
    sku: 'CEK-PRO-008',
    brand: 'SafeDrive',
    category: 'accessories',
    price: 42.000,
    originalPrice: null,
    discount: '15%',
    warranty: '1 YEAR',
    specialOffer: false,
    image: '/images/accessory.png',
    stock: 35,
    description: 'Complete car emergency and safety kit',
    specifications: {
      contents: 'Jumper cables, flashlight, first aid, tools',
      case: 'Heavy-duty bag',
      pieces: '45+ items',
      certification: 'ISO certified'
    }
  }
];

const accessoryBrands = [
  { id: 'brand-1', name: 'AutoMax', logo: '/images/brands/automax.png' },
  { id: 'brand-2', name: 'TechDrive', logo: '/images/brands/techdrive.png' },
  { id: 'brand-3', name: 'PowerDrive', logo: '/images/brands/powerdrive.png' },
  { id: 'brand-4', name: 'VisionPro', logo: '/images/brands/visionpro.png' }
];

module.exports = { accessories, accessoryBrands };
