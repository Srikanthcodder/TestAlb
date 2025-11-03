const services = [
  {
    id: 'srv-001',
    name: 'Car Wash - Door to Door',
    category: 'car-wash',
    icon: 'car-wash-door',
    description: 'Professional car washing service at your doorstep',
    packages: [
      {
        id: 'pkg-001',
        name: 'Basic Wash',
        price: 8.000,
        duration: '30 min',
        features: [
          'Exterior wash',
          'Wheel cleaning',
          'Window cleaning',
          'Tire shine'
        ]
      },
      {
        id: 'pkg-002',
        name: 'Premium Wash',
        price: 15.000,
        duration: '45 min',
        features: [
          'Exterior wash',
          'Interior vacuuming',
          'Dashboard cleaning',
          'Wheel cleaning',
          'Window cleaning',
          'Tire shine',
          'Air freshener'
        ]
      },
      {
        id: 'pkg-003',
        name: 'Deluxe Wash',
        price: 25.000,
        duration: '60 min',
        features: [
          'Everything in Premium',
          'Interior deep cleaning',
          'Leather conditioning',
          'Engine bay cleaning',
          'Wax coating'
        ]
      }
    ]
  },
  {
    id: 'srv-002',
    name: 'Car Wash - Service Station',
    category: 'car-wash',
    icon: 'car-wash-station',
    description: 'Visit our service station for professional car wash',
    packages: [
      {
        id: 'pkg-004',
        name: 'Express Wash',
        price: 6.000,
        duration: '20 min',
        features: [
          'Exterior wash',
          'Quick dry',
          'Wheel rinse'
        ]
      },
      {
        id: 'pkg-005',
        name: 'Standard Wash',
        price: 12.000,
        duration: '40 min',
        features: [
          'Exterior wash',
          'Interior vacuum',
          'Window cleaning',
          'Wheel cleaning',
          'Dashboard wipe'
        ]
      },
      {
        id: 'pkg-006',
        name: 'Ultimate Wash',
        price: 30.000,
        duration: '90 min',
        features: [
          'Everything in Standard',
          'Deep interior cleaning',
          'Upholstery shampoo',
          'Engine detailing',
          'Paint protection',
          'Ceramic coating'
        ]
      }
    ]
  },
  {
    id: 'srv-003',
    name: 'Tinting & Protection',
    category: 'tinting',
    icon: 'tinting-protection',
    description: 'Professional window tinting and paint protection services',
    packages: [
      {
        id: 'pkg-007',
        name: 'Window Tinting - Basic',
        price: 45.000,
        duration: '2 hours',
        features: [
          'Standard film',
          '5-year warranty',
          'UV protection',
          'All windows'
        ]
      },
      {
        id: 'pkg-008',
        name: 'Window Tinting - Premium',
        price: 85.000,
        duration: '2.5 hours',
        features: [
          'Premium ceramic film',
          'Lifetime warranty',
          'Heat rejection',
          'UV protection',
          'All windows'
        ]
      },
      {
        id: 'pkg-009',
        name: 'Paint Protection Film',
        price: 250.000,
        duration: '1 day',
        features: [
          'Full front coverage',
          '10-year warranty',
          'Self-healing technology',
          'Scratch resistance'
        ]
      },
      {
        id: 'pkg-010',
        name: 'Ceramic Coating',
        price: 180.000,
        duration: '6 hours',
        features: [
          'Full body coating',
          '5-year warranty',
          'Hydrophobic effect',
          'UV protection',
          'Gloss enhancement'
        ]
      }
    ]
  },
  {
    id: 'srv-004',
    name: 'Mobile Van Service',
    category: 'mobile-service',
    icon: 'mobile-van',
    description: 'Professional automotive services at your location',
    packages: [
      {
        id: 'pkg-011',
        name: 'Oil Change Service',
        price: 25.000,
        duration: '30 min',
        features: [
          'Engine oil replacement',
          'Oil filter replacement',
          'Inspection',
          'Fluid top-up'
        ]
      },
      {
        id: 'pkg-012',
        name: 'Battery Service',
        price: 15.000,
        duration: '20 min',
        features: [
          'Battery testing',
          'Terminal cleaning',
          'Battery replacement available',
          'Free inspection'
        ]
      },
      {
        id: 'pkg-013',
        name: 'Tire Service',
        price: 20.000,
        duration: '40 min',
        features: [
          'Tire rotation',
          'Pressure check',
          'Visual inspection',
          'Balancing available'
        ]
      },
      {
        id: 'pkg-014',
        name: 'Full Service',
        price: 65.000,
        duration: '90 min',
        features: [
          'Oil change',
          'Filter replacement',
          'Brake inspection',
          'Tire check',
          'Battery test',
          'Fluid check',
          'Multi-point inspection'
        ]
      }
    ]
  }
];

module.exports = { services };
