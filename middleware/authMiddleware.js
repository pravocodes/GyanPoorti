import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRETKEY
    );
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).send({
      success: false,
      message: "User Should be Signed in",
      error,
    });
  }
};

export const isVerified = async (req, res, next) => {
  try {
    const { Email } = req.body;
    const user = await userModel.findOne({ Email });
    // console.log(user);
    if (!user.isNumberVerified || !user.isEmailVerified) {
      return res.status(401).send({
        success: false,
        message: "Unverified Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "You Should be Verified First",
    });
  }
};

export const isTeacher = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);

    if (user.Role != "Teacher") {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Acess Register as Teacher First",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in Teacher middelware",
    });
  }
};
