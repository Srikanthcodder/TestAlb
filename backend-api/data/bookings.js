const bookings = [
  {
    id: 'book-001',
    userId: 'user-001',
    serviceId: 'srv-001',
    packageId: 'pkg-002',
    serviceName: 'Car Wash - Door to Door',
    packageName: 'Premium Wash',
    price: 15.000,
    status: 'upcoming',
    scheduledDate: '2025-11-05',
    scheduledTime: '10:00 AM',
    location: {
      address: 'Building 15, Block 3, Salmiya',
      coordinates: {
        latitude: 29.3336,
        longitude: 48.0759
      }
    },
    vehicleInfo: {
      make: 'Toyota',
      model: 'Camry',
      year: 2021,
      plateNumber: '12345'
    },
    createdAt: '2025-10-20T14:30:00Z',
    updatedAt: '2025-10-20T14:30:00Z'
  },
  {
    id: 'book-002',
    userId: 'user-001',
    serviceId: 'srv-004',
    packageId: 'pkg-011',
    serviceName: 'Mobile Van Service',
    packageName: 'Oil Change Service',
    price: 25.000,
    status: 'completed',
    scheduledDate: '2025-10-15',
    scheduledTime: '2:00 PM',
    completedAt: '2025-10-15T14:35:00Z',
    location: {
      address: 'Office Building, Sharq',
      coordinates: {
        latitude: 29.3759,
        longitude: 47.9911
      }
    },
    vehicleInfo: {
      make: 'Honda',
      model: 'Accord',
      year: 2020,
      plateNumber: '67890'
    },
    rating: 5,
    review: 'Excellent service! Very professional and quick.',
    createdAt: '2025-10-10T10:00:00Z',
    updatedAt: '2025-10-15T14:40:00Z'
  },
  {
    id: 'book-003',
    userId: 'user-001',
    serviceId: 'srv-003',
    packageId: 'pkg-008',
    serviceName: 'Tinting & Protection',
    packageName: 'Window Tinting - Premium',
    price: 85.000,
    status: 'cancelled',
    scheduledDate: '2025-10-10',
    scheduledTime: '9:00 AM',
    cancellationReason: 'Changed mind',
    cancelledAt: '2025-10-08T16:20:00Z',
    location: {
      address: 'Shuwaikh Branch',
      branchId: 'branch-001'
    },
    vehicleInfo: {
      make: 'Nissan',
      model: 'Patrol',
      year: 2022,
      plateNumber: '11223'
    },
    createdAt: '2025-10-05T11:00:00Z',
    updatedAt: '2025-10-08T16:20:00Z'
  }
];

module.exports = { bookings };
