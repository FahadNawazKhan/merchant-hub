import { Cart } from "../models/Cart.js";
import { Product } from "../models/Product.js";

export const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user.id;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        let cart = await Cart.findOne({
            user: userId
        });

        if (!cart) {
            cart = await Cart.create({
                user: userId,
                items: []
            });
        }

        const existingItem = cart.items.find(e => e.product.toString() === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({
                product: productId,
                quantity
            });
        }

        await cart.save();

        res.status(200).json({
            message: "Product added to cart",
            cart
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const cart = await Cart.findOne({ user: userId }).populate("items.product");

        if (!cart) {
            return res.status(200).json({
                message: "Cart is empty",
                items: []
            });
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const removeCartItem = async(req, res) => {
    try {

        const { productId } = req.body
        const userId = req.user.id
        const cart = await Cart.findOne({ user: userId })

        if (!cart) {
            return res.json({
                message: 'cart not found'
            })
        }

        cart.items = cart.items.filter(e => {
            return e.product.toString() !== productId
        })

        await cart.save()

        res.status(200).json({
            message: "Item removed",
            cart,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}