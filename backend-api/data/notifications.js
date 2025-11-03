const notifications = [
  {
    id: 'notif-001',
    title: 'Registration',
    message: 'Successfully Registered',
    type: 'success',
    date: '2025-10-24T11:09:00Z',
    read: false,
    priority: 'normal'
  },
  {
    id: 'notif-002',
    title: 'Order Confirmed',
    message: 'Your order #12345 has been confirmed and is being processed',
    type: 'info',
    date: '2025-10-25T14:30:00Z',
    read: false,
    priority: 'high'
  },
  {
    id: 'notif-003',
    title: 'Special Offer',
    message: '25% OFF on all EMTRAC batteries this week!',
    type: 'promotion',
    date: '2025-10-26T09:00:00Z',
    read: true,
    priority: 'normal'
  },
  {
    id: 'notif-004',
    title: 'Booking Reminder',
    message: 'Your car wash appointment is scheduled for tomorrow at 10:00 AM',
    type: 'reminder',
    date: '2025-10-27T16:45:00Z',
    read: false,
    priority: 'high'
  },
  {
    id: 'notif-005',
    title: 'Service Completed',
    message: 'Your mobile van service has been completed. Please rate your experience',
    type: 'success',
    date: '2025-10-28T12:20:00Z',
    read: true,
    priority: 'normal'
  },
  {
    id: 'notif-006',
    title: 'New Product Alert',
    message: 'New PETRONAS lubricants now available in stock',
    type: 'info',
    date: '2025-10-29T08:15:00Z',
    read: false,
    priority: 'low'
  },
  {
    id: 'notif-007',
    title: 'Payment Received',
    message: 'Payment of KWD 47.159 received for order #12345',
    type: 'success',
    date: '2025-10-29T13:00:00Z',
    read: false,
    priority: 'high'
  }
];

const promotions = [
  {
    id: 'promo-001',
    title: 'Battery Sale',
    description: 'Get 25% off on selected EMTRAC batteries',
    image: '/images/promo1.jpg',
    validFrom: '2025-10-01',
    validUntil: '2025-10-31',
    discountPercentage: 25,
    applicableProducts: ['batteries'],
    featured: true
  },
  {
    id: 'promo-002',
    title: 'Free Car Wash',
    description: 'Free basic car wash with any service over KWD 50',
    image: '/images/promo2.jpg',
    validFrom: '2025-10-15',
    validUntil: '2025-11-15',
    minPurchase: 50.000,
    featured: true
  },
  {
    id: 'promo-003',
    title: 'Tire Bundle',
    description: 'Buy 4 tires and get free installation',
    image: '/images/promo3.jpg',
    validFrom: '2025-10-10',
    validUntil: '2025-11-10',
    applicableProducts: ['tires'],
    featured: true
  }
];

module.exports = { notifications, promotions };
