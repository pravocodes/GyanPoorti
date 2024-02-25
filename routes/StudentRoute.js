import express from "express";
import { requireSignIn } from "../middleware/authMiddleware.js";
import { updateProfileController } from "../controllers/profileController.js";
import { chooseTeacherController } from "../controllers/studentController.js";

const router = express.Router();

router.post("/addteacher", requireSignIn, chooseTeacherController);

export default router;
