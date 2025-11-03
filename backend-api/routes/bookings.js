const express = require('express');
const router = express.Router();
const { bookings } = require('../data/bookings');

// Get all bookings
router.get('/', (req, res) => {
  const { status, userId } = req.query;
  
  let filteredBookings = [...bookings];

  // Filter by status
  if (status) {
    filteredBookings = filteredBookings.filter(b => b.status === status);
  }

  // Filter by userId
  if (userId) {
    filteredBookings = filteredBookings.filter(b => b.userId === userId);
  }

  // Sort by scheduled date (newest first)
  filteredBookings.sort((a, b) => new Date(b.scheduledDate) - new Date(a.scheduledDate));

  res.json({
    success: true,
    total: filteredBookings.length,
    bookings: filteredBookings
  });
});

// Get booking by ID
router.get('/:id', (req, res) => {
  const booking = bookings.find(b => b.id === req.params.id);
  
  if (!booking) {
    return res.status(404).json({
      success: false,
      message: 'Booking not found'
    });
  }

  res.json({
    success: true,
    booking
  });
});

// Create new booking
router.post('/', (req, res) => {
  const {
    userId,
    serviceId,
    packageId,
    serviceName,
    packageName,
    price,
    scheduledDate,
    scheduledTime,
    location,
    vehicleInfo
  } = req.body;

  // Validation
  if (!userId || !serviceId || !packageId || !scheduledDate || !scheduledTime) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields'
    });
  }

  const newBooking = {
    id: `book-${Date.now()}`,
    userId,
    serviceId,
    packageId,
    serviceName,
    packageName,
    price,
    status: 'upcoming',
    scheduledDate,
    scheduledTime,
    location,
    vehicleInfo,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  bookings.push(newBooking);

  res.status(201).json({
    success: true,
    message: 'Booking created successfully',
    booking: newBooking
  });
});

// Update booking status
router.put('/:id/status', (req, res) => {
  const { status } = req.body;
  const booking = bookings.find(b => b.id === req.params.id);
  
  if (!booking) {
    return res.status(404).json({
      success: false,
      message: 'Booking not found'
    });
  }

  booking.status = status;
  booking.updatedAt = new Date().toISOString();

  if (status === 'completed') {
    booking.completedAt = new Date().toISOString();
  } else if (status === 'cancelled') {
    booking.cancelledAt = new Date().toISOString();
  }

  res.json({
    success: true,
    message: 'Booking status updated',
    booking
  });
});

// Cancel booking
router.put('/:id/cancel', (req, res) => {
  const { reason } = req.body;
  const booking = bookings.find(b => b.id === req.params.id);
  
  if (!booking) {
    return res.status(404).json({
      success: false,
      message: 'Booking not found'
    });
  }

  booking.status = 'cancelled';
  booking.cancellationReason = reason;
  booking.cancelledAt = new Date().toISOString();
  booking.updatedAt = new Date().toISOString();

  res.json({
    success: true,
    message: 'Booking cancelled',
    booking
  });
});

// Add review to completed booking
router.put('/:id/review', (req, res) => {
  const { rating, review } = req.body;
  const booking = bookings.find(b => b.id === req.params.id);
  
  if (!booking) {
    return res.status(404).json({
      success: false,
      message: 'Booking not found'
    });
  }

  if (booking.status !== 'completed') {
    return res.status(400).json({
      success: false,
      message: 'Can only review completed bookings'
    });
  }

  booking.rating = rating;
  booking.review = review;
  booking.updatedAt = new Date().toISOString();

  res.json({
    success: true,
    message: 'Review added successfully',
    booking
  });
});

// Delete booking
router.delete('/:id', (req, res) => {
  const index = bookings.findIndex(b => b.id === req.params.id);
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Booking not found'
    });
  }

  bookings.splice(index, 1);

  res.json({
    success: true,
    message: 'Booking deleted'
  });
});

module.exports = router;
