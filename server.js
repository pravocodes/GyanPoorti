import  Express  from "express";

const app = Express();
app.get("/",(req,res)=> {
    res.send("<h1>Welcome</h1>");
})

const port=5000
app.listen(5000,()=>{
    console.log(`Server is running on ${port}`)
})

// app.listen(5000)