import express from "express";
import { createNotice, getAllNotices, deleteNotice } from "../controllers/noticeController.js";
import { protect, allowRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllNotices);
router.post("/", protect, allowRoles("teacher", "admin"), createNotice);
router.delete("/:id", protect, deleteNotice);

export default router;