import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'
import connectDB from "./config/connectdb.js";
import { authRouter } from "./routes/authRoutes.js";
import { productRouter } from "./routes/productRoutes.js";
import { cartRouter } from "./routes/cartRoutes.js";

dotenv.config();
const server = express();
server.use(express.json());
server.use(cookieParser())
server.use(cors())
connectDB();


server.use('/api/auth', authRouter);
server.use('/api/products', productRouter);
server.use('/api/cart', cartRouter);

server.use((req, res) => {
  res.send('route not found')
})

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});