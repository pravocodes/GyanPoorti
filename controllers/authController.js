import userModel from "../models/userModel.js";
import { hashedPassword } from "../Helper/authHelper.js";

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
    
    const ExistingUser = await userModel.findOne({Email})
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
      Email,
      Password : hashPassword,
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
