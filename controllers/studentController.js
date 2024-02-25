import teacherProfileModel from "../models/teacherProfileModel.js";

export const chooseTeacherController = async (req, res) => {
  try {
    const { studentId, teacherId } = req.body;

    const teacherProfile = await teacherProfileModel.findOne({
      user: teacherId,
    });

    if (!teacherProfile) {
      return res.status(404).send({
        success: false,
        message: "Teacher not found",
      });
    }
    teacherProfile.Students.push({
      studentId: studentId,
      status: "trial",
    });

    const updatedProfile = await teacherProfile.save();

    return res.status(200).send({
      success: true,
      message: "Teacher chosen successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while choosing teacher",
      error,
    });
  }
};
