const express = require('express');
const router = express.Router();
const { branches } = require('../data/branches');

// Get all branches
router.get('/', (req, res) => {
  const { city, service } = req.query;
  
  let filteredBranches = [...branches];

  // Filter by city
  if (city) {
    filteredBranches = filteredBranches.filter(b => 
      b.city.toLowerCase() === city.toLowerCase()
    );
  }

  // Filter by service availability
  if (service) {
    filteredBranches = filteredBranches.filter(b => 
      b.services.some(s => s.toLowerCase().includes(service.toLowerCase()))
    );
  }

  res.json({
    success: true,
    total: filteredBranches.length,
    branches: filteredBranches
  });
});

// Get branch by ID
router.get('/:id', (req, res) => {
  const branch = branches.find(b => b.id === req.params.id);
  
  if (!branch) {
    return res.status(404).json({
      success: false,
      message: 'Branch not found'
    });
  }

  res.json({
    success: true,
    branch
  });
});

// Get nearest branch
router.post('/nearest', (req, res) => {
  const { latitude, longitude } = req.body;
  
  if (!latitude || !longitude) {
    return res.status(400).json({
      success: false,
      message: 'Latitude and longitude are required'
    });
  }

  // Calculate distance (simplified - using euclidean distance)
  const branchesWithDistance = branches.map(branch => {
    const latDiff = branch.coordinates.latitude - latitude;
    const lonDiff = branch.coordinates.longitude - longitude;
    const distance = Math.sqrt(latDiff * latDiff + lonDiff * lonDiff);
    
    return {
      ...branch,
      distance: distance * 111 // Approximate km conversion
    };
  });

  // Sort by distance
  branchesWithDistance.sort((a, b) => a.distance - b.distance);

  res.json({
    success: true,
    nearestBranch: branchesWithDistance[0],
    allBranches: branchesWithDistance
  });
});

module.exports = router;
