import express from 'express'
import { addToCart, getCart, removeCartItem } from '../controllers/cartControllers.js'
import { protect } from '../middlewares/authMiddleware.js'

export const cartRouter = express.Router()

cartRouter.get('/', protect, getCart)
cartRouter.post('/add', protect, addToCart)
cartRouter.delete('/remove', protect, removeCartItem)