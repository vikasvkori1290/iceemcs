const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const requestLogger = require('./middleware/logger');

const app = express();

// Global Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// API Base Route
app.use('/api', apiRoutes);

// Catch 404 routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Resource not found at ${req.originalUrl}`
  });
});

// Centralized Error Handling Middleware
app.use(errorHandler);

module.exports = app;
