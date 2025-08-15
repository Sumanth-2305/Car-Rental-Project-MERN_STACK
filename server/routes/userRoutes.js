import express from 'express';
import { registerUser,loginUser,getUserData, getCars } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js'; // Assuming you have an auth middleware for protecting routes

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/data',protect,getUserData);
userRouter.get('/cars',getCars);

export default userRouter;