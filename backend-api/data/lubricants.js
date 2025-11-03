const lubricants = [
  {
    id: 'lub-001',
    name: 'Lubricants-PETRONAS',
    sku: 'DRIVER CAP',
    brand: 'PETRONAS',
    category: 'lubricants',
    price: 17.000,
    originalPrice: null,
    discount: null,
    warranty: null,
    specialOffer: true,
    image: '/images/lubricant.png',
    stock: 50,
    description: 'Premium PETRONAS branded driver cap',
    specifications: {
      type: 'Merchandise',
      material: 'Cotton',
      color: 'Black/Green'
    }
  },
  {
    id: 'lub-002',
    name: 'Lubricants-PETRONAS-GRAFFITI PULL BAG',
    sku: 'GRAFFITI PULL BAG',
    brand: 'PETRONAS',
    category: 'lubricants',
    price: 10.000,
    originalPrice: null,
    discount: null,
    warranty: null,
    specialOffer: true,
    image: '/images/lubricant.png',
    stock: 60,
    description: 'Stylish PETRONAS graffiti pull bag',
    specifications: {
      type: 'Merchandise',
      material: 'Polyester',
      capacity: '15L'
    }
  },
  {
    id: 'lub-003',
    name: 'Lubricants-PETRONAS-ENGINE OIL 5W-30',
    sku: 'ENGINE OIL 5W-30',
    brand: 'PETRONAS',
    category: 'lubricants',
    price: 25.500,
    originalPrice: null,
    discount: null,
    warranty: null,
    specialOffer: true,
    image: '/images/lubricant.png',
    stock: 45,
    description: 'Synthetic engine oil for modern engines',
    specifications: {
      viscosity: '5W-30',
      volume: '4L',
      type: 'Fully Synthetic',
      standard: 'API SN/CF'
    }
  },
  {
    id: 'lub-004',
    name: 'Lubricants-PETRONAS-TRANSMISSION FLUID',
    sku: 'TRANSMISSION FLUID',
    brand: 'PETRONAS',
    category: 'lubricants',
    price: 22.750,
    originalPrice: null,
    discount: null,
    warranty: null,
    specialOffer: true,
    image: '/images/lubricant.png',
    stock: 35,
    description: 'High-quality transmission fluid',
    specifications: {
      type: 'ATF',
      volume: '1L',
      standard: 'Dexron III'
    }
  },
  {
    id: 'lub-005',
    name: 'Lubricants-PETRONAS-BRAKE FLUID DOT 4',
    sku: 'BRAKE FLUID DOT 4',
    brand: 'PETRONAS',
    category: 'lubricants',
    price: 8.500,
    originalPrice: null,
    discount: null,
    warranty: null,
    specialOffer: false,
    image: '/images/lubricant.png',
    stock: 80,
    description: 'DOT 4 brake fluid for hydraulic brake systems',
    specifications: {
      type: 'Brake Fluid',
      grade: 'DOT 4',
      volume: '500ml'
    }
  },
  {
    id: 'lub-006',
    name: 'Lubricants-PETRONAS-COOLANT',
    sku: 'COOLANT',
    brand: 'PETRONAS',
    category: 'lubricants',
    price: 12.000,
    originalPrice: null,
    discount: null,
    warranty: null,
    specialOffer: false,
    image: '/images/lubricant.png',
    stock: 55,
    description: 'Engine coolant concentrate',
    specifications: {
      type: 'Coolant',
      volume: '1L',
      color: 'Green',
      protection: '-37°C'
    }
  },
  {
    id: 'lub-007',
    name: 'Lubricants-PETRONAS-ENGINE OIL 10W-40',
    sku: 'ENGINE OIL 10W-40',
    brand: 'PETRONAS',
    category: 'lubricants',
    price: 28.000,
    originalPrice: null,
    discount: null,
    warranty: null,
    specialOffer: true,
    image: '/images/lubricant.png',
    stock: 40,
    description: 'Semi-synthetic engine oil',
    specifications: {
      viscosity: '10W-40',
      volume: '4L',
      type: 'Semi Synthetic',
      standard: 'API SN'
    }
  },
  {
    id: 'lub-008',
    name: 'Lubricants-PETRONAS-GEAR OIL 75W-90',
    sku: 'GEAR OIL 75W-90',
    brand: 'PETRONAS',
    category: 'lubricants',
    price: 32.500,
    originalPrice: null,
    discount: null,
    warranty: null,
    specialOffer: true,
    image: '/images/lubricant.png',
    stock: 28,
    description: 'Synthetic gear oil for manual transmissions',
    specifications: {
      viscosity: '75W-90',
      volume: '1L',
      type: 'Fully Synthetic',
      standard: 'API GL-5'
    }
  },
  {
    id: 'lub-009',
    name: 'Lubricants-PETRONAS-HYDRAULIC FLUID',
    sku: 'HYDRAULIC FLUID',
    brand: 'PETRONAS',
    category: 'lubricants',
    price: 24.000,
    originalPrice: null,
    discount: null,
    warranty: null,
    specialOffer: false,
    image: '/images/lubricant.png',
    stock: 32,
    description: 'Premium hydraulic fluid',
    specifications: {
      type: 'Hydraulic',
      volume: '1L',
      grade: 'ISO 46'
    }
  },
  {
    id: 'lub-010',
    name: 'Lubricants-PETRONAS-POWER STEERING FLUID',
    sku: 'POWER STEERING FLUID',
    brand: 'PETRONAS',
    category: 'lubricants',
    price: 9.500,
    originalPrice: null,
    discount: null,
    warranty: null,
    specialOffer: false,
    image: '/images/lubricant.png',
    stock: 65,
    description: 'Power steering fluid for all vehicles',
    specifications: {
      type: 'Power Steering',
      volume: '500ml',
      color: 'Red'
    }
  }
];

const lubricantBrands = [
  { id: 'brand-1', name: 'PETRONAS', logo: '/images/brands/petronas.png' },
  { id: 'brand-2', name: 'SHELL', logo: '/images/brands/shell.png' },
  { id: 'brand-3', name: 'MOBIL', logo: '/images/brands/mobil.png' },
  { id: 'brand-4', name: 'CASTROL', logo: '/images/brands/castrol.png' },
  { id: 'brand-5', name: 'TOTAL', logo: '/images/brands/total.png' },
  { id: 'brand-6', name: 'VALVOLINE', logo: '/images/brands/valvoline.png' },
  { id: 'brand-7', name: 'MOTUL', logo: '/images/brands/motul.png' },
  { id: 'brand-8', name: 'PENNZOIL', logo: '/images/brands/pennzoil.png' }
];

module.exports = { lubricants, lubricantBrands };
