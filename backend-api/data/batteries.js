const batteries = [
  {
    id: 'bat-001',
    name: 'Batteries-EMTRAC PLUS-MF-105D31L',
    sku: 'MF-105D31L',
    brand: 'EMTRAC PLUS',
    category: 'batteries',
    price: 47.159,
    originalPrice: null,
    discount: null,
    warranty: '3 YEAR',
    specialOffer: true,
    image: '/images/battery.png',
    stock: 25,
    description: 'High-performance maintenance-free battery',
    specifications: {
      voltage: '12V',
      capacity: '105Ah',
      type: 'MF',
      terminal: 'Left'
    }
  },
  {
    id: 'bat-002',
    name: 'Batteries-EMTRAC PLUS-MF-105D31R',
    sku: 'MF-105D31R',
    brand: 'EMTRAC PLUS',
    category: 'batteries',
    price: 35.369,
    originalPrice: 47.159,
    discount: '25%',
    warranty: '2 YEAR',
    specialOffer: true,
    image: '/images/battery.png',
    stock: 15,
    description: 'High-performance maintenance-free battery',
    specifications: {
      voltage: '12V',
      capacity: '105Ah',
      type: 'MF',
      terminal: 'Right'
    }
  },
  {
    id: 'bat-003',
    name: 'Batteries-EMTRAC PLUS-MF-80D26L',
    sku: 'MF-80D26L',
    brand: 'EMTRAC PLUS',
    category: 'batteries',
    price: 52.000,
    originalPrice: null,
    discount: null,
    warranty: '3 YEAR',
    specialOffer: true,
    image: '/images/battery.png',
    stock: 20,
    description: 'Premium maintenance-free battery with extended warranty',
    specifications: {
      voltage: '12V',
      capacity: '80Ah',
      type: 'MF',
      terminal: 'Left'
    }
  },
  {
    id: 'bat-004',
    name: 'Batteries-EMTRAC PLUS-MF-80D26R',
    sku: 'MF-80D26R',
    brand: 'EMTRAC PLUS',
    category: 'batteries',
    price: 39.000,
    originalPrice: 52.000,
    discount: '25%',
    warranty: '3 YEAR',
    specialOffer: true,
    image: '/images/battery.png',
    stock: 18,
    description: 'Premium maintenance-free battery with extended warranty',
    specifications: {
      voltage: '12V',
      capacity: '80Ah',
      type: 'MF',
      terminal: 'Right'
    }
  },
  {
    id: 'bat-005',
    name: 'Batteries-EMTRAC PLUS-MF-55B24L',
    sku: 'MF-55B24L',
    brand: 'EMTRAC PLUS',
    category: 'batteries',
    price: 42.500,
    originalPrice: null,
    discount: '15%',
    warranty: '2 YEAR',
    specialOffer: false,
    image: '/images/battery.png',
    stock: 30,
    description: 'Compact maintenance-free battery for smaller vehicles',
    specifications: {
      voltage: '12V',
      capacity: '55Ah',
      type: 'MF',
      terminal: 'Left'
    }
  },
  {
    id: 'bat-006',
    name: 'Batteries-EMTRAC PLUS-MF-55B24R',
    sku: 'MF-55B24R',
    brand: 'EMTRAC PLUS',
    category: 'batteries',
    price: 38.250,
    originalPrice: 45.000,
    discount: '15%',
    warranty: '2 YEAR',
    specialOffer: false,
    image: '/images/battery.png',
    stock: 22,
    description: 'Compact maintenance-free battery for smaller vehicles',
    specifications: {
      voltage: '12V',
      capacity: '55Ah',
      type: 'MF',
      terminal: 'Right'
    }
  },
  {
    id: 'bat-007',
    name: 'Batteries-EMTRAC PLUS-MF-75D23L',
    sku: 'MF-75D23L',
    brand: 'EMTRAC PLUS',
    category: 'batteries',
    price: 48.000,
    originalPrice: null,
    discount: null,
    warranty: '2 YEAR',
    specialOffer: true,
    image: '/images/battery.png',
    stock: 27,
    description: 'Mid-range maintenance-free battery',
    specifications: {
      voltage: '12V',
      capacity: '75Ah',
      type: 'MF',
      terminal: 'Left'
    }
  },
  {
    id: 'bat-008',
    name: 'Batteries-EMTRAC PLUS-MF-75D23R',
    sku: 'MF-75D23R',
    brand: 'EMTRAC PLUS',
    category: 'batteries',
    price: 36.000,
    originalPrice: 48.000,
    discount: '25%',
    warranty: '2 YEAR',
    specialOffer: true,
    image: '/images/battery.png',
    stock: 19,
    description: 'Mid-range maintenance-free battery',
    specifications: {
      voltage: '12V',
      capacity: '75Ah',
      type: 'MF',
      terminal: 'Right'
    }
  },
  {
    id: 'bat-009',
    name: 'Batteries-EMTRAC PLUS-MF-95D31L',
    sku: 'MF-95D31L',
    brand: 'EMTRAC PLUS',
    category: 'batteries',
    price: 55.000,
    originalPrice: null,
    discount: null,
    warranty: '3 YEAR',
    specialOffer: false,
    image: '/images/battery.png',
    stock: 12,
    description: 'Heavy-duty maintenance-free battery',
    specifications: {
      voltage: '12V',
      capacity: '95Ah',
      type: 'MF',
      terminal: 'Left'
    }
  },
  {
    id: 'bat-010',
    name: 'Batteries-EMTRAC PLUS-MF-95D31R',
    sku: 'MF-95D31R',
    brand: 'EMTRAC PLUS',
    category: 'batteries',
    price: 44.000,
    originalPrice: 55.000,
    discount: '20%',
    warranty: '3 YEAR',
    specialOffer: true,
    image: '/images/battery.png',
    stock: 16,
    description: 'Heavy-duty maintenance-free battery',
    specifications: {
      voltage: '12V',
      capacity: '95Ah',
      type: 'MF',
      terminal: 'Right'
    }
  }
];

const batteryBrands = [
  { id: 'brand-1', name: 'EMTRAC PLUS', logo: '/images/brands/emtrac.png' },
  { id: 'brand-2', name: 'BOSCH', logo: '/images/brands/bosch.png' },
  { id: 'brand-3', name: 'VARTA', logo: '/images/brands/varta.png' },
  { id: 'brand-4', name: 'EXIDE', logo: '/images/brands/exide.png' },
  { id: 'brand-5', name: 'AMARON', logo: '/images/brands/amaron.png' },
  { id: 'brand-6', name: 'YUASA', logo: '/images/brands/yuasa.png' },
  { id: 'brand-7', name: 'ACDelco', logo: '/images/brands/acdelco.png' },
  { id: 'brand-8', name: 'OPTIMA', logo: '/images/brands/optima.png' }
];

module.exports = { batteries, batteryBrands };
