import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "./models/Users.js";
import { hashPassword } from "./utils/hashPassword.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB for admin seeding...");

    
    await User.deleteOne({ email: "admin@merchant.com" });

    const hashedPassword = await hashPassword("adminpassword");

    await User.create({
      name: "Admin User",
      email: "admin@merchant.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin user seeded successfully!");
    console.log("Email: admin@merchant.com");
    console.log("Password: adminpassword");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding admin:", error);
    process.exit(1);
  }
};

createAdmin();
