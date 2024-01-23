import express from "express";
import {
  RegisterController, VerifyOTPController, mailSenderController, otpSendController, verifyMailController,LoginController
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", RegisterController);
router.post("/login", LoginController);

router.post("/sendotp",otpSendController)

router.post("/verifyotp", VerifyOTPController );

router.post("/sendmail", mailSenderController);

router.post("/verifymail",verifyMailController);

export default router;
