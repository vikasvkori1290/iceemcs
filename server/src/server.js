require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Initialize Server
const startServer = async () => {
  // Connect to Database
  await connectDB();

  const server = app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`🚀 ICEEMCS Backend Server running on port ${PORT}`);
    console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 API Endpoint: http://localhost:${PORT}/api`);
    console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`=========================================`);
  });

  // Handle graceful shutdown
  const handleShutdown = (signal) => {
    console.log(`\n[Server] Received ${signal}. Shutting down gracefully...`);
    server.close(() => {
      console.log('[Server] HTTP server closed.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => handleShutdown('SIGTERM'));
  process.on('SIGINT', () => handleShutdown('SIGINT'));
};

startServer();
