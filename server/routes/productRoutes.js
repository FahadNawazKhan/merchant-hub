import express from "express";
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from "../controllers/productController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { createProductSchema, updateProductSchema } from "../validations/productValidations.js";

export const productRouter = express.Router();

productRouter.get("/items", getProducts);

productRouter.get("/item/:id", getProductById);

productRouter.post("/create", validate(createProductSchema), protect, createProduct);

productRouter.put("/update/:id", validate(updateProductSchema), protect, updateProduct);

productRouter.delete("/delete/:id", protect, deleteProduct);