import Express from "express";
import conn from "./db.js";
import dotenv from "dotenv"
import authRoute from "./routes/authRoute.js";

const app = Express();
app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

dotenv.config();

app.use(Express.json());

app.use("/api/v1/auth", authRoute);

conn();
const port = 5000;
app.listen(5000, () => {
  console.log(`Server is running on ${port}`);
});

// app.listen(5000)
