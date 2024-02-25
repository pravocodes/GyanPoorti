import express from "express";
import { requireSignIn } from "../middleware/authMiddleware.js";
import { updateProfileController } from "../controllers/profileController.js";
import fileUpload from "express-fileupload";

const router = express.Router();

router.post(
  "/updateprofile",
  requireSignIn,
  fileUpload(),
  updateProfileController
);
export default router;
