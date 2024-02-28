import teacherProfileModel from "../models/teacherProfileModel.js";

export const chooseTeacherController = async (req, res) => {
  try {
    const { studentId } = req.user._id;
    const { teacherId } = req.body;

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

export const getAllTeacher = async (req, res) => {
  try {
    const user = await teacherProfileModel.find({});
    return res.status(200).send({
      success: true,
      message: "All teachers fetched",
      user,
    });
  } catch (error) {
    return res.status(501).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const getTeachersBySubject = async (req, res) => {
  try {
    const subject = req.params.subject;
    console.log(subject);
    const teachers = await teacherProfileModel.find({
      Subjects: { $in: [subject] },
    });
    if (teachers.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No teachers found for the given subject",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Teachers fetched by subject",
      teachers,
    });
  } catch (error) {
    return res.status(501).send({
      success: false,
      message: "Something went wrong",
    });
  }
};
