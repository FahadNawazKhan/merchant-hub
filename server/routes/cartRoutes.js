import express from 'express'
import { addToCart, getCart, removeCartItem } from '../controllers/cartControllers.js'
import { protect } from '../middlewares/authMiddleware.js'
import { validate } from '../middlewares/validateMiddleware.js'
import { addtoCartSchema } from '../validations/cartValidation.js'

export const cartRouter = express.Router()

cartRouter.get('/', protect, getCart)
cartRouter.post('/add', protect, validate(addtoCartSchema), addToCart)
cartRouter.delete('/remove', protect, removeCartItem)