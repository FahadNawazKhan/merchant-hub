import express from "express";
import { 
  createProduct, 
  getProducts, 
  getProductById, 
  updateProduct, 
  deleteProduct, 
  uploadImage 
} from "../controllers/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { createProductSchema, updateProductSchema } from "../validations/productValidations.js";
import { upload } from "../middlewares/uploadMiddleware.js";

export const productRouter = express.Router();

productRouter.post("/upload", protect, admin, upload.single('image'), uploadImage);

productRouter.get("/items", getProducts);

productRouter.get("/item/:id", getProductById);

productRouter.post("/create", validate(createProductSchema), protect, admin, createProduct);

productRouter.put("/update/:id", validate(updateProductSchema), protect, admin, updateProduct);

productRouter.delete("/delete/:id", protect, admin, deleteProduct);
