const branches = [
  {
    id: 'branch-001',
    name: 'Shuwaikh Branch',
    address: 'Shuwaikh Industrial Area, Block 1, Street 12',
    city: 'Shuwaikh',
    phone: '+965 2481 5555',
    email: 'shuwaikh@dazzaledale.com',
    coordinates: {
      latitude: 29.3375,
      longitude: 47.9275
    },
    workingHours: {
      sunday: '8:00 AM - 8:00 PM',
      monday: '8:00 AM - 8:00 PM',
      tuesday: '8:00 AM - 8:00 PM',
      wednesday: '8:00 AM - 8:00 PM',
      thursday: '8:00 AM - 8:00 PM',
      friday: 'Closed',
      saturday: '8:00 AM - 8:00 PM'
    },
    services: [
      'Car Wash',
      'Tires',
      'Batteries',
      'Lubricants',
      'Accessories',
      'Tinting'
    ],
    facilities: [
      'Parking',
      'Waiting Area',
      'WiFi',
      'Restrooms',
      'Coffee Shop'
    ],
    manager: 'Mohammed Ahmed',
    rating: 4.5,
    totalReviews: 128,
    image: '/images/branches/shuwaikh.jpg'
  },
  {
    id: 'branch-002',
    name: 'Farwaniya Branch',
    address: 'Farwaniya, Block 3, Street 45',
    city: 'Farwaniya',
    phone: '+965 2473 6666',
    email: 'farwaniya@dazzaledale.com',
    coordinates: {
      latitude: 29.2772,
      longitude: 47.9588
    },
    workingHours: {
      sunday: '8:00 AM - 8:00 PM',
      monday: '8:00 AM - 8:00 PM',
      tuesday: '8:00 AM - 8:00 PM',
      wednesday: '8:00 AM - 8:00 PM',
      thursday: '8:00 AM - 8:00 PM',
      friday: 'Closed',
      saturday: '8:00 AM - 8:00 PM'
    },
    services: [
      'Car Wash',
      'Tires',
      'Batteries',
      'Lubricants',
      'Accessories'
    ],
    facilities: [
      'Parking',
      'Waiting Area',
      'WiFi',
      'Restrooms'
    ],
    manager: 'Ali Hassan',
    rating: 4.3,
    totalReviews: 95,
    image: '/images/branches/farwaniya.jpg'
  },
  {
    id: 'branch-003',
    name: 'Hawally Branch',
    address: 'Hawally, Salem Mubarak Street',
    city: 'Hawally',
    phone: '+965 2262 7777',
    email: 'hawally@dazzaledale.com',
    coordinates: {
      latitude: 29.3328,
      longitude: 48.0289
    },
    workingHours: {
      sunday: '8:00 AM - 9:00 PM',
      monday: '8:00 AM - 9:00 PM',
      tuesday: '8:00 AM - 9:00 PM',
      wednesday: '8:00 AM - 9:00 PM',
      thursday: '8:00 AM - 9:00 PM',
      friday: 'Closed',
      saturday: '8:00 AM - 9:00 PM'
    },
    services: [
      'Car Wash',
      'Tires',
      'Batteries',
      'Lubricants',
      'Accessories',
      'Tinting',
      'Mobile Service'
    ],
    facilities: [
      'Parking',
      'Waiting Area',
      'WiFi',
      'Restrooms',
      'Coffee Shop',
      'Kids Play Area'
    ],
    manager: 'Khalid Saeed',
    rating: 4.7,
    totalReviews: 156,
    image: '/images/branches/hawally.jpg'
  },
  {
    id: 'branch-004',
    name: 'Jahra Branch',
    address: 'Jahra, Block 2, Street 8',
    city: 'Jahra',
    phone: '+965 2455 8888',
    email: 'jahra@dazzaledale.com',
    coordinates: {
      latitude: 29.3375,
      longitude: 47.6581
    },
    workingHours: {
      sunday: '8:00 AM - 7:00 PM',
      monday: '8:00 AM - 7:00 PM',
      tuesday: '8:00 AM - 7:00 PM',
      wednesday: '8:00 AM - 7:00 PM',
      thursday: '8:00 AM - 7:00 PM',
      friday: 'Closed',
      saturday: '8:00 AM - 7:00 PM'
    },
    services: [
      'Car Wash',
      'Tires',
      'Batteries',
      'Lubricants'
    ],
    facilities: [
      'Parking',
      'Waiting Area',
      'Restrooms'
    ],
    manager: 'Abdullah Nasser',
    rating: 4.2,
    totalReviews: 78,
    image: '/images/branches/jahra.jpg'
  },
  {
    id: 'branch-005',
    name: 'Ahmadi Branch',
    address: 'Ahmadi, Main Street, Block 5',
    city: 'Ahmadi',
    phone: '+965 2398 9999',
    email: 'ahmadi@dazzaledale.com',
    coordinates: {
      latitude: 29.0769,
      longitude: 48.0839
    },
    workingHours: {
      sunday: '8:00 AM - 8:00 PM',
      monday: '8:00 AM - 8:00 PM',
      tuesday: '8:00 AM - 8:00 PM',
      wednesday: '8:00 AM - 8:00 PM',
      thursday: '8:00 AM - 8:00 PM',
      friday: 'Closed',
      saturday: '8:00 AM - 8:00 PM'
    },
    services: [
      'Car Wash',
      'Tires',
      'Batteries',
      'Lubricants',
      'Accessories',
      'Tinting'
    ],
    facilities: [
      'Parking',
      'Waiting Area',
      'WiFi',
      'Restrooms',
      'Coffee Shop'
    ],
    manager: 'Fahad Al-Mutairi',
    rating: 4.6,
    totalReviews: 142,
    image: '/images/branches/ahmadi.jpg'
  }
];

module.exports = { branches };
