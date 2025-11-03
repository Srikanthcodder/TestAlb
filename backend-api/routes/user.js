const express = require('express');
const router = express.Router();
const { users } = require('../data/users');

// Get user profile
router.get('/profile', (req, res) => {
  // In a real app, you'd get userId from JWT token
  const userId = req.query.userId || 'user-001';
  
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  res.json({
    success: true,
    user
  });
});

// Update user profile
router.put('/profile', (req, res) => {
  const userId = req.body.userId || 'user-001';
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  // Update user fields
  const { name, email, phone, address, preferences } = req.body;
  
  if (name) user.name = name;
  if (email) user.email = email;
  if (phone) user.phone = phone;
  if (address) user.address = { ...user.address, ...address };
  if (preferences) user.preferences = { ...user.preferences, ...preferences };
  
  user.updatedAt = new Date().toISOString();

  res.json({
    success: true,
    message: 'Profile updated successfully',
    user
  });
});

// Get user vehicles
router.get('/vehicles', (req, res) => {
  const userId = req.query.userId || 'user-001';
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  res.json({
    success: true,
    vehicles: user.vehicles
  });
});

// Add vehicle
router.post('/vehicles', (req, res) => {
  const userId = req.body.userId || 'user-001';
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  const { make, model, year, plateNumber, color, isPrimary } = req.body;

  if (!make || !model || !year || !plateNumber) {
    return res.status(400).json({
      success: false,
      message: 'Missing required vehicle fields'
    });
  }

  const newVehicle = {
    id: `veh-${Date.now()}`,
    make,
    model,
    year,
    plateNumber,
    color,
    isPrimary: isPrimary || false
  };

  user.vehicles.push(newVehicle);
  user.updatedAt = new Date().toISOString();

  res.status(201).json({
    success: true,
    message: 'Vehicle added successfully',
    vehicle: newVehicle
  });
});

// Update vehicle
router.put('/vehicles/:vehicleId', (req, res) => {
  const userId = req.body.userId || 'user-001';
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  const vehicle = user.vehicles.find(v => v.id === req.params.vehicleId);
  
  if (!vehicle) {
    return res.status(404).json({
      success: false,
      message: 'Vehicle not found'
    });
  }

  const { make, model, year, plateNumber, color, isPrimary } = req.body;
  
  if (make) vehicle.make = make;
  if (model) vehicle.model = model;
  if (year) vehicle.year = year;
  if (plateNumber) vehicle.plateNumber = plateNumber;
  if (color) vehicle.color = color;
  if (isPrimary !== undefined) vehicle.isPrimary = isPrimary;
  
  user.updatedAt = new Date().toISOString();

  res.json({
    success: true,
    message: 'Vehicle updated successfully',
    vehicle
  });
});

// Delete vehicle
router.delete('/vehicles/:vehicleId', (req, res) => {
  const userId = req.query.userId || 'user-001';
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  const vehicleIndex = user.vehicles.findIndex(v => v.id === req.params.vehicleId);
  
  if (vehicleIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Vehicle not found'
    });
  }

  user.vehicles.splice(vehicleIndex, 1);
  user.updatedAt = new Date().toISOString();

  res.json({
    success: true,
    message: 'Vehicle deleted successfully'
  });
});

module.exports = router;
