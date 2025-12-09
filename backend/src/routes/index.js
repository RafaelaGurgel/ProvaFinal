import express from "express";

import authRoutes from "./authRoutes.js";
import accessRoutes from "./access.js";
import dashboardRoutes from "./dashboard.js";
import resourcesRoutes from "./resources.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/access", accessRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/resources", resourcesRoutes);

export default router;
