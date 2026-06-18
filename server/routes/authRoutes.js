import express from 'express'
import { register, login, logout, getMe } from '../controllers/authControllers.js';
import { loginSchema, registerSchema } from '../validations/authValidations.js';
import { validate } from '../middlewares/validateMiddleware.js';
import { protect } from '../middlewares/authMiddleware.js';

export const authRouter = express.Router();

authRouter.post('/register', validate(registerSchema), register)
authRouter.post('/login', validate(loginSchema), login)
authRouter.post('/logout', logout)
authRouter.get('/me', protect, getMe)



