import { verifyToken } from "../utils/jwt.js";
import { User } from "../models/Users.js";

export const protect = (req, res, next) => {
  try {
    const token = req.cookies.token

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const decoded = verifyToken(token);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
};

export const admin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    if (user && user.role === "admin") {
      next();
    } else {
      return res.status(403).json({
        message: "Access denied: Admins only",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};