import  Express  from "express";
import conn from "./db.js"

const app = Express();
app.get("/",(req,res)=> {
    res.send("<h1>Welcome</h1>");
})

conn()
const port=5000
app.listen(5000,()=>{
    console.log(`Server is running on ${port}`)
})



// app.listen(5000)