import express from "express";
import {
  RegisterController,
  VerifyOTPController,
  mailSenderController,
  otpSendController,
  verifyMailController,
  LoginController,
  testController,
} from "../controllers/authController.js";
import { isTeacher, isVerified, requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", RegisterController);
router.post("/login",isVerified, LoginController);

router.post("/sendotp", otpSendController);

router.post("/verifyotp", VerifyOTPController);

router.post("/sendmail", mailSenderController);

router.post("/verifymail", verifyMailController);

router.post("/test", requireSignIn, isTeacher, testController);

export default router;
