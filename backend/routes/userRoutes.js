import express from 'express';
<<<<<<< HEAD
import { authUser, getUserProfile, registerUser, logoutUser } from '../controllers/userController.js';
=======
import { authUser, getUserProfile, registerUser, logoutUser,getUsers,updateUser,deleteUser,getUserById} from '../controllers/userController.js';
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

<<<<<<< HEAD
router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile);
router.route('/logout').post(logoutUser);

=======
router.route('/').post(registerUser).get(getUsers);
router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile);
router.route('/logout').post(logoutUser);
router.route('/:id').get(getUserById).put(protect,admin,  updateUser).delete(protect, admin, deleteUser);
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
// Admin routes
router.route('/admin').get(protect, admin); // Example for admin access
router.route('/admin/:id').delete(protect, admin); // Example for deleting user

export default router;
