import express from "express";
import { createProfile, getAllProfiles, getProfileById } from "../controllers/alumniController.js";
import { protect, allowRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllProfiles);
router.get("/:id", getProfileById);
router.post("/", protect, allowRoles("alumni", "admin"), createProfile);

export default router;