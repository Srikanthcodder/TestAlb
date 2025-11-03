const express = require('express');
const router = express.Router();
const promotions = require('../data/promotions');

// Get all promotions
router.get('/', (req, res) => {
  const { featured, active } = req.query;
  
  let filteredPromotions = [...promotions];

  // Filter by featured
  if (featured === 'true') {
    filteredPromotions = filteredPromotions.filter(p => p.featured);
  }

  // Filter by active (within valid date range)
  if (active === 'true') {
    const today = new Date().toISOString().split('T')[0];
    filteredPromotions = filteredPromotions.filter(p => 
      p.validFrom <= today && p.validUntil >= today
    );
  }

  res.json({
    success: true,
    total: filteredPromotions.length,
    promotions: filteredPromotions
  });
});

// Get promotion by ID
router.get('/:id', (req, res) => {
  const promotion = promotions.find(p => p.id === req.params.id);
  
  if (!promotion) {
    return res.status(404).json({
      success: false,
      message: 'Promotion not found'
    });
  }

  res.json({
    success: true,
    promotion
  });
});

module.exports = router;
