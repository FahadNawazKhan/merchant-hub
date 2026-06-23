import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'
import connectDB from "./config/connectdb.js";
import { authRouter } from "./routes/authRoutes.js";
import { productRouter } from "./routes/productRoutes.js";
import { cartRouter } from "./routes/cartRoutes.js";

dotenv.config();
const server = express()
server.use(express.json({ limit: "10mb" }));
server.use(express.urlencoded({ limit: "10mb", extended: true }));
server.use(cookieParser())
server.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "http://127.0.0.1:5173", "http://127.0.0.1:5174"],
    credentials: true,
  })
);
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