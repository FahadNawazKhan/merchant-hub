import { verifyToken } from "../utils/jwt.js";

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