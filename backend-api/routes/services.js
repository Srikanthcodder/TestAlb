const express = require('express');
const router = express.Router();
const { services } = require('../data/services');

// Get all services
router.get('/', (req, res) => {
  res.json({
    success: true,
    total: services.length,
    services
  });
});

// Get service by ID
router.get('/:id', (req, res) => {
  const service = services.find(s => s.id === req.params.id);
  
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }

  res.json({
    success: true,
    service
  });
});

// Get services by category
router.get('/category/:category', (req, res) => {
  const filteredServices = services.filter(s => s.category === req.params.category);
  
  res.json({
    success: true,
    total: filteredServices.length,
    services: filteredServices
  });
});

// Get service packages
router.get('/:id/packages', (req, res) => {
  const service = services.find(s => s.id === req.params.id);
  
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }

  res.json({
    success: true,
    packages: service.packages
  });
});

module.exports = router;
