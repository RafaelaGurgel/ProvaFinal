import express from "express";
import { getResources, createResource, updateResource, deleteResource } from "../controllers/resourceController.js";
import { authRequired, allowRoles } from "../middleware/auth.js";
const router = express.Router();

router.get("/", authRequired, getResources);
router.post("/", authRequired, allowRoles("admin", "manager"), createResource);
router.put("/:id", authRequired, allowRoles("admin", "manager"), updateResource);
router.delete("/:id", authRequired, allowRoles("admin"), deleteResource);

export default router;
