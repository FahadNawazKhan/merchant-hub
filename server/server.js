import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectdb.js";

dotenv.config();
const server = express();
server.use(express.json());
connectDB();

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});