const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const { errorHandler } = require('./middleware/errorMiddleware');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Initialize Prisma client
const prisma = new PrismaClient();

// Basic security and middleware setup
app.use(helmet()); // Set security HTTP headers
app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request body
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // HTTP request logger

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// API routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/bands', require('./routes/bandRoutes'));
app.use('/api/rehearsals', require('./routes/rehearsalRoutes'));
app.use('/api/availability', require('./routes/availabilityRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/songs', require('./routes/songRoutes'));

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = app;