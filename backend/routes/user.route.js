import express from "express";
import { protectRoute } from "../middlewares/auth.js";
import { updateProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.put("/update", protectRoute, updateProfile);

export default router;
