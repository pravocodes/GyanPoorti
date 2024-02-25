import mongoose from "mongoose";

const ProfileModel = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User" },
  Gender: {
    type: String,
    default: "",
  },
  Bio: {
    type: String,
    default: "",
  },
  Standards: {
    type: [String],
    default: [],
  },
  Subjects: {
    type: [String],
    default: [],
  },
  Students: [
    {
      studentId: { type: mongoose.Types.ObjectId, ref: "User" },
      status: { type: String, enum: ["trial", "permanent"], default: "trial" },
    },
  ],
  photo: {
    data: { type: Buffer, default: null },
    contentType: { type: String, default: "" },
  },
});

export default mongoose.model("profile", ProfileModel);
