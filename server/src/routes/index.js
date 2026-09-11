const express = require('express');
const router = express.Router();
const healthRoutes = require('./healthRoutes');

// Mount routes
router.use('/health', healthRoutes);

// Root API info
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to ICEEMCS API',
    version: '1.0.0',
    documentation: '/api/docs',
    endpoints: {
      health: '/api/health'
    }
  });
});

module.exports = router;
