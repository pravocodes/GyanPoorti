import mongoose from "mongoose";
import colors from "colors";

const conn = async () => {
  try {
    const isconnected = await mongoose.connect(
      "mongodb+srv://SimpleGyan:SimpleGyan123@cluster0.ghmq5p1.mongodb.net/SimpleGyan/"
    );
    console.log("Successfully connected to the database".bgGreen.white);
  } catch (error) {
    console.log(error.bgRed.white);
  }
};

export default conn;
