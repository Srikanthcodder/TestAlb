const users = [
  {
    id: 'user-001',
    name: 'Srikanth',
    email: 'srikanth@example.com',
    phone: '+965 1234 5678',
    avatar: '/images/avatars/user1.jpg',
    address: {
      building: 'Building 15',
      block: 'Block 3',
      street: 'Salem Mubarak Street',
      area: 'Salmiya',
      city: 'Kuwait City'
    },
    vehicles: [
      {
        id: 'veh-001',
        make: 'Toyota',
        model: 'Camry',
        year: 2021,
        plateNumber: '12345',
        color: 'White',
        isPrimary: true
      },
      {
        id: 'veh-002',
        make: 'Honda',
        model: 'Accord',
        year: 2020,
        plateNumber: '67890',
        color: 'Black',
        isPrimary: false
      }
    ],
    preferences: {
      language: 'en',
      notifications: true,
      newsletter: true
    },
    stats: {
      totalOrders: 15,
      totalBookings: 8,
      totalSpent: 542.500,
      memberSince: '2024-01-15'
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2025-10-29T15:30:00Z'
  }
];

module.exports = { users };
