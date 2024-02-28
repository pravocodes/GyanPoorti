import express from "express";
import { isTeacher, requireSignIn } from "../middleware/authMiddleware.js";
import {
  getTeacherProfile,
  updateProfileController,
} from "../controllers/profileController.js";
import fileUpload from "express-fileupload";

const router = express.Router();

router.post(
  "/updateprofile",
  requireSignIn,
  fileUpload(),
  isTeacher,
  updateProfileController
);

router.get("/getteacherprofile", requireSignIn,getTeacherProfile);
export default router;
