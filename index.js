const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors");

const app = express()
dotenv.config()

app.use(express.json())

app.listen(8080,()=>{
    console.log("Server is Listening to 8080");
})
app.use(
    cors({
      origin: ["http://localhost:3000", "https://mern-auth-aditya.netlify.app"],
      credentials: true,
    })
  );


mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true})
.then(()=>{
    console.log("Connected to MOngoDB");
}).catch((err)=>{
    console.log("Error",err);
})

app.use("/login", require("./routers/login"))
app.use("/", require("./routers/admin"))
app.use("/", require("./routers/upload"))

