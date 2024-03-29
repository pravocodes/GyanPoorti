import mongoose from "mongoose";

const UserModel = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    PhoneNumber: {
      type: String,
      unique: true,
      required: true,
    },
    Nationality: {
      type: String,
    },
    otp: {
      type: Number,
    },
    mailotp: {
      type: Number,
    },
    isNumberVerified: {
      type: Boolean,
    },
    isEmailVerified: {
      type: Boolean,
    },
    Role:{
      type :String ,
      required: true,
    },
    Email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Users",UserModel);