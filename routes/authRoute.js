import express from "express";
import {
  RegisterController, VerifyOTPController, mailSenderController, otpSendController, verifyMailController,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", RegisterController);

router.post("/sendotp",otpSendController)

router.get("/verifyotp", VerifyOTPController );

router.post("/sendmail", mailSenderController);

router.get("/verifymail",verifyMailController);

export default router;
