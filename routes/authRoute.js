import express from "express";
import {
  RegisterController, VerifyOTPController, otpSendController,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", RegisterController);

router.post("/sendotp",otpSendController)

router.get("/verifyotp", VerifyOTPController );

export default router;
