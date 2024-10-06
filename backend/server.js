import express from 'express';
import path from 'path';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
<<<<<<< HEAD
import session from 'express-session'; // Import express-session
import connectDB from './config/db.js';
=======
import session from 'express-session';
import connectDB from './config/db.js'; // DB connection
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
<<<<<<< HEAD

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
=======
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import fs from 'fs';

// Load environment variables
dotenv.config();

// Connect to the database
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
connectDB();

const app = express();

<<<<<<< HEAD
// Initialize session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your_default_secret_key', // Use a secret key for signing the session ID cookie
    resave: false, // Forces the session to be saved back to the session store
    saveUninitialized: false, // Saves a new session that is never modified
    cookie: {
      secure: process.env.NODE_ENV === 'production', // Set to true in production for secure cookies
      httpOnly: true, // Prevents client-side access to the cookie
      maxAge: 1000 * 60 * 60 * 24, // 1 day in milliseconds
=======
// Middleware for session handling
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your_default_secret_key', // Use an environment secret for session cookies
    resave: false, // Prevent unnecessary session resaving
    saveUninitialized: false, // Don't save uninitialized sessions
    cookie: {
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      httpOnly: true, // Prevent client-side access to session cookies
      maxAge: 1000 * 60 * 60 * 24, // 1-day session expiration
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
    },
  })
);

<<<<<<< HEAD
// Middleware for logging in development mode
=======
// Logging middleware for development
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

<<<<<<< HEAD
// Middleware for parsing JSON requests
app.use(express.json());

// Route definitions
=======
// Middleware to parse incoming JSON data
app.use(express.json());

// API Routes
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

<<<<<<< HEAD
// Serve uploads folder as static files
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
=======
// Get the absolute directory path for serving static files
const __dirname = path.resolve();

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, '/uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Make the uploads folder publicly accessible
app.use('/uploads', express.static(uploadDir));

// Serve frontend files if in production
if (process.env.NODE_ENV === 'production') {
  // Serve the React frontend static files
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  // Handle any other route requests by serving index.html (React SPA behavior)
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
<<<<<<< HEAD
  // Respond to root requests in development
  app.get('/', (req, res) => {
    res.send('API is running');
  });
}

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  () =>
    console.log(
      `Server Running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
    )
=======
  // Development root route
  app.get('/', (req, res) => {
    res.send('API is running in Development mode');
  });
}

// Error handling middleware for 404 errors
app.use(notFound);

// Centralized error handler for all other errors
app.use(errorHandler);

// Port setup and starting the server
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
);
