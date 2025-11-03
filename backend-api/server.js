const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const productsRoutes = require('./routes/products');
const servicesRoutes = require('./routes/services');
const branchesRoutes = require('./routes/branches');
const notificationsRoutes = require('./routes/notifications');
const bookingsRoutes = require('./routes/bookings');
const promotionsRoutes = require('./routes/promotions');
const userRoutes = require('./routes/user');

// Use routes
app.use('/api/products', productsRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/branches', branchesRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/promotions', promotionsRoutes);
app.use('/api/user', userRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'DazzaleDale API Server',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
      batteries: '/api/products/batteries',
      lubricants: '/api/products/lubricants',
      tires: '/api/products/tires',
      accessories: '/api/products/accessories',
      services: '/api/services',
      branches: '/api/branches',
      notifications: '/api/notifications',
      bookings: '/api/bookings',
      promotions: '/api/promotions',
      user: '/api/user'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested endpoint does not exist'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}`);
});
