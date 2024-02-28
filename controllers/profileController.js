import teacherProfileModel from "../models/teacherProfileModel.js";
import ProfileModel from "../models/teacherProfileModel.js";

export const updateProfileController = async (req, res) => {
  try {
    const { user, Gender, Bio, Standards, Subjects, Students } = req.body;
    const photo = req.files ? req.files.photo : null;

    if (photo && photo.size > 1000000) {
      return res.status(500).send({ error: "Photo should be less than 1MB" });
    }

    const updateFields = { Gender, Bio, Standards, Subjects, Students };

    if (photo) {
      updateFields.photo = {
        data: photo.data,
        contentType: photo.mimetype,
      };
    }

    const updatedProfile = await ProfileModel.findOneAndUpdate(
      { user: user },
      { $set: updateFields },
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).send({
        success: false,
        message: "Profile not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Profile Updated Successfully",
      updatedProfile,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while updating profile",
      error,
    });
  }
};

export const getTeacherProfile = async (req, res) => {
  try {
    const id = req.user._id;
    console.log(id);
    const user = await teacherProfileModel.findById({ user: id });
    console.log(user);
    if (!user) {
      res.status(404).send({
        success: false,
        message: "Teacher not found",
      });
    }
    return res.status(200).send({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
    });
    console.log(error);
  }
};
