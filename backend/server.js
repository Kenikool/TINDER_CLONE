import express from "express";
import { configDotenv } from "dotenv";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

// routes import
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import matchRoutes from "./routes/match.route.js";
import messageRoutes from "./routes/message.route.js";
configDotenv();

const PORT = process.env.PORT || 5000;

// middlewares
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/messages", messageRoutes);

// connection and db
app.listen(PORT, async () => {
  try {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
  } catch (error) {
    console.log("Error connecting to the server: ", error);
  }
});
