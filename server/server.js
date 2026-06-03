import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectdb.js";
import { authRouter } from "./routes/authRoutes.js";
import { productRouter } from "./routes/productRoutes.js";

dotenv.config();
const server = express();
server.use(express.json());
connectDB();

server.use('/api/auth',authRouter);
server.use('/api/products',productRouter);


server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});