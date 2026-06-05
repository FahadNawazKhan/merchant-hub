import express from 'express'

export const cartRouter = express.Router()

cartRouter.get('/', getAllProducts)