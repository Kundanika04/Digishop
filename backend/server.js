import express from 'express';
import path from 'path';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import session from 'express-session'; // Import express-session
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();

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
    },
  })
);

// Middleware for logging in development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middleware for parsing JSON requests
app.use(express.json());

// Route definitions
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

// Serve uploads folder as static files
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
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
);
