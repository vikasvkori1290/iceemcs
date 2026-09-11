const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/iceemcs');
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[Database Error] ${error.message}`);
    // Optional: exit on connection error in production
    // process.exit(1);
  }
};

module.exports = connectDB;
