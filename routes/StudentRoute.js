import express from "express";
import { requireSignIn } from "../middleware/authMiddleware.js";
import { updateProfileController } from "../controllers/profileController.js";
import {
  chooseTeacherController,
  getAllTeacher,
  getTeachersBySubject,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/addteacher", requireSignIn, chooseTeacherController);
router.get("/searchteacher", requireSignIn, getAllTeacher);
router.get("/searchsubjectsteacher/:subject", requireSignIn, getTeachersBySubject);
export default router;
