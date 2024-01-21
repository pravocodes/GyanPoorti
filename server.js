import Express from "express";
import conn from "./db.js";
import dotenv from "dotenv"
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import bodyParser from "body-parser";


const app = Express();
app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

dotenv.config();

app.use(Express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1/auth", authRoute);

conn();
const port = 5000;
app.listen(5000, () => {
  console.log(`Server is running on ${port}`);
});

// app.listen(5000)
