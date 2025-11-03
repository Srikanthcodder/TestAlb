const express = require('express');
const router = express.Router();
const { batteries, batteryBrands } = require('../data/batteries');
const { lubricants, lubricantBrands } = require('../data/lubricants');
const { tires, tireBrands } = require('../data/tires');
const { accessories, accessoryBrands } = require('../data/accessories');

// Get all products
router.get('/', (req, res) => {
  const { category, brand, search, minPrice, maxPrice, sort } = req.query;
  
  let allProducts = [
    ...batteries,
    ...lubricants,
    ...tires,
    ...accessories
  ];

  // Filter by category
  if (category) {
    allProducts = allProducts.filter(p => p.category === category);
  }

  // Filter by brand
  if (brand) {
    allProducts = allProducts.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
  }

  // Search
  if (search) {
    const searchLower = search.toLowerCase();
    allProducts = allProducts.filter(p => 
      p.name.toLowerCase().includes(searchLower) ||
      p.sku.toLowerCase().includes(searchLower) ||
      p.brand.toLowerCase().includes(searchLower)
    );
  }

  // Filter by price
  if (minPrice) {
    allProducts = allProducts.filter(p => p.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    allProducts = allProducts.filter(p => p.price <= parseFloat(maxPrice));
  }

  // Sort
  if (sort) {
    switch(sort) {
      case 'price-asc':
        allProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        allProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        allProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        allProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
  }

  res.json({
    success: true,
    total: allProducts.length,
    products: allProducts
  });
});

// Get all batteries
router.get('/batteries', (req, res) => {
  const { brand, search, minPrice, maxPrice, sort } = req.query;
  
  let filteredBatteries = [...batteries];

  if (brand) {
    filteredBatteries = filteredBatteries.filter(b => b.brand.toLowerCase() === brand.toLowerCase());
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredBatteries = filteredBatteries.filter(b => 
      b.name.toLowerCase().includes(searchLower) ||
      b.sku.toLowerCase().includes(searchLower)
    );
  }

  if (minPrice) {
    filteredBatteries = filteredBatteries.filter(b => b.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    filteredBatteries = filteredBatteries.filter(b => b.price <= parseFloat(maxPrice));
  }

  if (sort === 'price-asc') {
    filteredBatteries.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filteredBatteries.sort((a, b) => b.price - a.price);
  }

  res.json({
    success: true,
    total: filteredBatteries.length,
    products: filteredBatteries
  });
});

// Get battery brands
router.get('/batteries/brands', (req, res) => {
  res.json({
    success: true,
    brands: batteryBrands
  });
});

// Get battery by ID
router.get('/batteries/:id', (req, res) => {
  const battery = batteries.find(b => b.id === req.params.id);
  
  if (!battery) {
    return res.status(404).json({
      success: false,
      message: 'Battery not found'
    });
  }

  res.json({
    success: true,
    product: battery
  });
});

// Get all lubricants
router.get('/lubricants', (req, res) => {
  const { brand, search, minPrice, maxPrice, sort } = req.query;
  
  let filteredLubricants = [...lubricants];

  if (brand) {
    filteredLubricants = filteredLubricants.filter(l => l.brand.toLowerCase() === brand.toLowerCase());
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredLubricants = filteredLubricants.filter(l => 
      l.name.toLowerCase().includes(searchLower) ||
      l.sku.toLowerCase().includes(searchLower)
    );
  }

  if (minPrice) {
    filteredLubricants = filteredLubricants.filter(l => l.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    filteredLubricants = filteredLubricants.filter(l => l.price <= parseFloat(maxPrice));
  }

  if (sort === 'price-asc') {
    filteredLubricants.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filteredLubricants.sort((a, b) => b.price - a.price);
  }

  res.json({
    success: true,
    total: filteredLubricants.length,
    products: filteredLubricants
  });
});

// Get lubricant brands
router.get('/lubricants/brands', (req, res) => {
  res.json({
    success: true,
    brands: lubricantBrands
  });
});

// Get lubricant by ID
router.get('/lubricants/:id', (req, res) => {
  const lubricant = lubricants.find(l => l.id === req.params.id);
  
  if (!lubricant) {
    return res.status(404).json({
      success: false,
      message: 'Lubricant not found'
    });
  }

  res.json({
    success: true,
    product: lubricant
  });
});

// Get all tires
router.get('/tires', (req, res) => {
  const { brand, search, minPrice, maxPrice, sort } = req.query;
  
  let filteredTires = [...tires];

  if (brand) {
    filteredTires = filteredTires.filter(t => t.brand.toLowerCase() === brand.toLowerCase());
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredTires = filteredTires.filter(t => 
      t.name.toLowerCase().includes(searchLower) ||
      t.sku.toLowerCase().includes(searchLower)
    );
  }

  if (minPrice) {
    filteredTires = filteredTires.filter(t => t.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    filteredTires = filteredTires.filter(t => t.price <= parseFloat(maxPrice));
  }

  if (sort === 'price-asc') {
    filteredTires.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filteredTires.sort((a, b) => b.price - a.price);
  }

  res.json({
    success: true,
    total: filteredTires.length,
    products: filteredTires
  });
});

// Get tire brands
router.get('/tires/brands', (req, res) => {
  res.json({
    success: true,
    brands: tireBrands
  });
});

// Get tire by ID
router.get('/tires/:id', (req, res) => {
  const tire = tires.find(t => t.id === req.params.id);
  
  if (!tire) {
    return res.status(404).json({
      success: false,
      message: 'Tire not found'
    });
  }

  res.json({
    success: true,
    product: tire
  });
});

// Get all accessories
router.get('/accessories', (req, res) => {
  const { brand, search, minPrice, maxPrice, sort } = req.query;
  
  let filteredAccessories = [...accessories];

  if (brand) {
    filteredAccessories = filteredAccessories.filter(a => a.brand.toLowerCase() === brand.toLowerCase());
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredAccessories = filteredAccessories.filter(a => 
      a.name.toLowerCase().includes(searchLower) ||
      a.sku.toLowerCase().includes(searchLower)
    );
  }

  if (minPrice) {
    filteredAccessories = filteredAccessories.filter(a => a.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    filteredAccessories = filteredAccessories.filter(a => a.price <= parseFloat(maxPrice));
  }

  if (sort === 'price-asc') {
    filteredAccessories.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filteredAccessories.sort((a, b) => b.price - a.price);
  }

  res.json({
    success: true,
    total: filteredAccessories.length,
    products: filteredAccessories
  });
});

// Get accessory brands
router.get('/accessories/brands', (req, res) => {
  res.json({
    success: true,
    brands: accessoryBrands
  });
});

// Get accessory by ID
router.get('/accessories/:id', (req, res) => {
  const accessory = accessories.find(a => a.id === req.params.id);
  
  if (!accessory) {
    return res.status(404).json({
      success: false,
      message: 'Accessory not found'
    });
  }

  res.json({
    success: true,
    product: accessory
  });
});

// Get product by ID (any category)
router.get('/:id', (req, res) => {
  const allProducts = [
    ...batteries,
    ...lubricants,
    ...tires,
    ...accessories
  ];

  const product = allProducts.find(p => p.id === req.params.id);
  
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  res.json({
    success: true,
    product
  });
});

module.exports = router;
