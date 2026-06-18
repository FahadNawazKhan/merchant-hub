import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .min(3, "Product name must be at least 3 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),

  price: z
    .number()
    .positive("Price must be greater than 0"),

  image: z
    .string()
    .min(1, "Image is required"),

  stock: z
    .number()
    .min(0, "Stock cannot be negative"),
});

export const updateProductSchema = z.object({
  name: z
    .string()
    .min(3, "Product name must be at least 3 characters")
    .optional(),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .optional(),

  price: z
    .number()
    .positive("Price must be greater than 0")
    .optional(),

  image: z
    .string()
    .min(1, "Image is required")
    .optional(),

  stock: z
    .number()
    .min(0, "Stock cannot be negative")
    .optional(),
});