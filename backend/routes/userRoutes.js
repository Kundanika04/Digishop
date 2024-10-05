import express from 'express';
import { authUser, getUserProfile, registerUser, logoutUser } from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile);
router.route('/logout').post(logoutUser);

// Admin routes
router.route('/admin').get(protect, admin); // Example for admin access
router.route('/admin/:id').delete(protect, admin); // Example for deleting user

export default router;
