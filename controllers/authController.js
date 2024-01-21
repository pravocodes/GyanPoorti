import userModel from "../models/userModel.js";
import { hashedPassword } from "../Helper/authHelper.js";
import fast2sms from "fast-two-sms";

export const RegisterController = async (req, res) => {
  //firstname //lastname //email //phonenumber //state //country //

  try {
    const { FirstName, LastName, PhoneNumber, Nationality, Email, Password } =
      req.body;

    if (!FirstName || !LastName) {
      return res.send({ message: "Name is Required" });
    }
    if (!PhoneNumber) {
      res.send({ message: "PhoneNumber is Required" });
    }
    if (!Nationality) {
      res.send({ message: "Nationality is Required" });
    }
    if (!Email) {
      res.send({ message: "Email is Required" });
    }
    if (!Password) {
      res.send({ message: "Password is Required" });
    }

    const ExistingUser = await userModel.findOne({ Email });
    if (ExistingUser) {
      res.status(201).send({
        success: false,
        message: "User Already Exists",
      });
    }
    const hashPassword = await hashedPassword(Password);
    const user = await new userModel({
      FirstName,
      LastName,
      PhoneNumber,
      Nationality,
      isVerified: false,
      Email,
      Password: hashPassword,
    }).save();

    res.status(200).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

export const otpSendController = async (req, res) => {
  const { PhoneNumber } = req.body;
  var otp = Math.floor(1000 + Math.random() * 9000);
  var options = {
    authorization: process.env.SMSAPIKEY,
    message: `Your Otp for GyanPoorti registration is ${otp}`,
    numbers: [PhoneNumber],
  };
  // console.log(options);
  fast2sms
    .sendMessage(options)
    .then(async (response) => {
      // console.log(response)

      if (response != "") {
        const user = await userModel.findOne({ PhoneNumber });
        if (user) {
          user.otp = otp;
          user.save();
        }
      }

      res.send({
        success: true,
        message: "Your Otp Send successfully",
        response,
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

export const VerifyOTPController = async (req, res) => {
  try {
    const { PhoneNumber, OTP } = req.body;
    let user = await userModel.findOne({ PhoneNumber });
    if (!user || user.otp != OTP) {
      return res.json({
        success: false,
        message: "Invalid OTP or User not found",
      });
    } else {
      user.isVerified = true;
      user.otp = 0;
      user.save();
      res.json({
        success: true,
        message: "User verified Successfully",
      });
    }
  } catch (error) {}
};
