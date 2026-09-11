const mongoose = require('mongoose');
const ApiResponse = require('../utils/apiResponse');

const getHealthStatus = (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';

  return ApiResponse.success(res, {
    server: 'healthy',
    database: dbStatus,
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime(),
    timestamp: new Date()
  }, 'ICEEMCS API is operating normally');
};

module.exports = {
  getHealthStatus
};
