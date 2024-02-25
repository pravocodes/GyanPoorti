import Express from "express";
import conn from "./db.js";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import StudentRoute from "./routes/StudentRoute.js";
import cors from "cors";
// import multer from "multer";
import bodyParser from "body-parser";
import ProfileRoute from "./routes/ProfileRoute.js";

const app = Express();
app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

dotenv.config();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "500mb",
    extended: true,
    parameterLimit: 1000000,
  })
);
// const upload = multer();
// app.use(upload.none());
app.use(cors());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/profile", ProfileRoute);
app.use("/api/v1/student", StudentRoute);

conn();
const port = 5000;
app.listen(5000, () => {
  console.log(`Server is running on ${port}`);
});

// app.listen(5000)
